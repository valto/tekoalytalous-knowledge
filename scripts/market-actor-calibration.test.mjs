import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { dump, load } from "js-yaml";
import { compareCalibration } from "./compare-market-actor-calibration.mjs";
import { lockAssessment, validateAssessmentShape, verifyAssessmentLock } from "./lock-market-actor-assessment.mjs";
import { runCalibration } from "./run-market-actor-calibration.mjs";

const root = resolve(import.meta.dirname, "..");
const studyRoot = resolve(root, "docs", "tutkimus", "suomen-tekoalyoperaattorimarkkina");

async function readYaml(path) {
  return load(await readFile(path, "utf8"));
}

async function fixtures() {
  const [model, cases, base] = await Promise.all([
    readYaml(resolve(studyRoot, "toimija-arviointi.yaml")),
    readYaml(resolve(studyRoot, "kalibrointi", "tapaukset.yaml")),
    readYaml(resolve(studyRoot, "esimerkit", "kapasiteettitoimija.yaml")),
  ]);
  const caseDefinition = cases.cases[0];
  const first = {
    ...structuredClone(base),
    case_id: caseDefinition.case_id,
    evidence_cutoff: caseDefinition.evidence_cutoff,
    assessor: {
      id: "human-1",
      name: "Arvioija 1",
      type: "human",
      independence_declaration: "En ole nähnyt toisen arvioijan tuloksia.",
      conflicts_of_interest: "ei",
    },
    eligibility: { decision: "jatkoon", reason: "Kaikki ehdot täyttyvät." },
    selected_roles: ["token"],
    used_sources: caseDefinition.key_sources,
    omitted_key_sources: {},
    locked_at: "2026-09-07T10:00:00+03:00",
  };
  for (const [id, observation] of Object.entries(first.observations)) {
    observation.reason ??= `Testiperustelu muuttujalle ${id}`;
    observation.sources ??= observation.state === "unknown" ? [] : [caseDefinition.key_sources[0]];
  }
  const second = structuredClone(first);
  second.assessor = {
    ...first.assessor,
    id: "human-2",
    name: "Arvioija 2",
  };
  second.locked_at = "2026-09-07T10:05:00+03:00";
  second.observations.ASIAKAS.score += 1;
  return { model, caseDefinition, first, second };
}

test("kahden ihmisen riittävän yhtäpitävät tulokset läpäisevät vertailun", async () => {
  const { model, caseDefinition, first, second } = await fixtures();
  const report = await compareCalibration(model, caseDefinition, first, second);
  assert.equal(report.passed, true);
  assert.equal(report.criteria.distinct_independent_assessors, true);
  assert.ok(report.variable_agreement_percent >= 80);
  assert.ok(report.score_difference <= 0.3);
});

test("ihmisen ja yleisen agentin sekapari ei täytä riippumattomuusporttia", async () => {
  const { model, caseDefinition, first, second } = await fixtures();
  second.assessor.type = "agent";
  const report = await compareCalibration(model, caseDefinition, first, second);
  assert.equal(report.passed, false);
  assert.equal(report.criteria.distinct_independent_assessors, false);
});

test("kaksi eri eristettyä auditointiagenttia voi täyttää riippumattomuusportin", async () => {
  const { model, caseDefinition, first, second } = await fixtures();
  first.assessor = {
    ...first.assessor,
    id: "audit-agent-1",
    type: "audit_agent",
    model_identity: "gpt-5.6-sol",
    isolation_run_id: "run-1",
    context_isolation: "fresh context; no peer or rehearsal outputs",
  };
  second.assessor = {
    ...second.assessor,
    id: "audit-agent-2",
    type: "audit_agent",
    model_identity: "gpt-5.6-sol",
    isolation_run_id: "run-2",
    context_isolation: "fresh context; no peer or rehearsal outputs",
  };
  const report = await compareCalibration(model, caseDefinition, first, second);
  assert.equal(report.passed, true);
  assert.equal(report.criteria.distinct_independent_assessors, true);
});

test("sama auditointiagenttiajo ei voi täyttää molempia paikkoja", async () => {
  const { model, caseDefinition, first, second } = await fixtures();
  for (const assessment of [first, second]) {
    assessment.assessor.type = "audit_agent";
    assessment.assessor.model_identity = "gpt-5.6-sol";
    assessment.assessor.isolation_run_id = "same-run";
    assessment.assessor.context_isolation = "fresh context";
  }
  const report = await compareCalibration(model, caseDefinition, first, second);
  assert.equal(report.passed, false);
  assert.equal(report.criteria.distinct_independent_assessors, false);
});

test("selittämätön keskeisen lähteen poisjättö estää hyväksynnän", async () => {
  const { model, caseDefinition, first, second } = await fixtures();
  second.used_sources = second.used_sources.filter((source) => source !== "A5");
  const report = await compareCalibration(model, caseDefinition, first, second);
  assert.equal(report.passed, false);
  assert.deepEqual(report.unexplained_key_source_omissions.second, ["A5"]);
});

test("lukitus havaitsee arviointitiedoston myöhemmän muuttamisen", async () => {
  const { first } = await fixtures();
  const directory = await mkdtemp(join(tmpdir(), "market-calibration-"));
  const path = join(directory, "assessment.yaml");
  await writeFile(path, dump(first), "utf8");
  await lockAssessment(path, "test-locker");
  await verifyAssessmentLock(path);
  await writeFile(path, `${await readFile(path, "utf8")}\n# muutettu\n`, "utf8");
  await assert.rejects(() => verifyAssessmentLock(path), /tarkistussumma ei täsmää/);
});

test("keskeneräistä arviointipohjaa ei voi lukita", async () => {
  const template = await readYaml(resolve(studyRoot, "kalibrointi", "arviointipohja.yaml"));
  assert.throws(() => validateAssessmentShape(template), /VAIHDA/);
});

test("olemassa olevaa lukitusta ei korvata hiljaisesti", async () => {
  const { first } = await fixtures();
  const directory = await mkdtemp(join(tmpdir(), "market-calibration-lock-"));
  const path = join(directory, "assessment.yaml");
  await writeFile(path, dump(first), "utf8");
  await lockAssessment(path, "test-locker");
  await assert.rejects(() => lockAssessment(path, "test-locker"), /EEXIST/);
});

test("kokonaisraportti vaatii ihmisen hyväksynnän teknisen läpäisyn jälkeenkin", async () => {
  const { first, second } = await fixtures();
  const directory = await mkdtemp(join(tmpdir(), "market-calibration-run-"));
  const firstA = join(directory, "first-a.yaml");
  const secondA = join(directory, "second-a.yaml");
  const firstB = join(directory, "first-b.yaml");
  const secondB = join(directory, "second-b.yaml");
  const cases = await readYaml(resolve(studyRoot, "kalibrointi", "tapaukset.yaml"));
  const secondCase = cases.cases[1];
  const makeSecondCase = (assessment) => ({
    ...structuredClone(assessment),
    case_id: secondCase.case_id,
    role: secondCase.primary_role,
    selected_roles: [secondCase.primary_role],
    evidence_cutoff: secondCase.evidence_cutoff,
    used_sources: secondCase.key_sources,
  });
  const firstSecondCase = makeSecondCase(first);
  const secondSecondCase = makeSecondCase(second);
  for (const assessment of [firstSecondCase, secondSecondCase]) {
    for (const observation of Object.values(assessment.observations)) {
      if (!Number.isInteger(observation.score)) {
        delete observation.state;
        observation.score = 3;
        observation.confidence = "B";
        observation.reason = "Synteettinen kokonaisraportin testihavainto.";
        observation.sources = [secondCase.key_sources[0]];
      }
    }
  }
  await Promise.all([
    writeFile(firstA, dump(first), "utf8"),
    writeFile(secondA, dump(second), "utf8"),
    writeFile(firstB, dump(firstSecondCase), "utf8"),
    writeFile(secondB, dump(secondSecondCase), "utf8"),
  ]);
  await Promise.all([
    lockAssessment(firstA, "test"),
    lockAssessment(secondA, "test"),
    lockAssessment(firstB, "test"),
    lockAssessment(secondB, "test"),
  ]);
  const report = await runCalibration(
    resolve(studyRoot, "toimija-arviointi.yaml"),
    resolve(studyRoot, "kalibrointi", "tapaukset.yaml"),
    [[firstA, secondA], [firstB, secondB]],
  );
  assert.equal(report.technically_passed, true);
  assert.equal(report.aggregate_criteria.human_owner_approval, false);
  assert.equal(report.approved, false);
});

import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { dump, load } from "js-yaml";
import { compareCalibration } from "./compare-market-actor-calibration.mjs";
import { lockAssessment, validateAssessmentShape, verifyAssessmentLock } from "./lock-market-actor-assessment.mjs";

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
  assert.equal(report.criteria.distinct_independent_human_assessors, true);
  assert.ok(report.variable_agreement_percent >= 80);
  assert.ok(report.score_difference <= 0.3);
});

test("agentin tulos ei täytä kahden riippumattoman ihmisen porttia", async () => {
  const { model, caseDefinition, first, second } = await fixtures();
  second.assessor.type = "agent";
  const report = await compareCalibration(model, caseDefinition, first, second);
  assert.equal(report.passed, false);
  assert.equal(report.criteria.distinct_independent_human_assessors, false);
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

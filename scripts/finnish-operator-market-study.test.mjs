import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { load as loadYaml } from "js-yaml";
import { calculateRoleResult } from "./evaluate-market-actor.mjs";
import { parseDocument } from "./validate-knowledge.mjs";

const root = resolve(import.meta.dirname, "..");
const studyRoot = resolve(root, "docs", "tutkimus", "suomen-tekoalyoperaattorimarkkina");

async function loadModel() {
  return loadYaml(await readFile(resolve(studyRoot, "toimija-arviointi.yaml"), "utf8"));
}

async function loadExample(name) {
  return loadYaml(await readFile(resolve(studyRoot, "esimerkit", name), "utf8"));
}

test("markkinatoimijan arviointikyky on rajattu ennen yritysarvioita", async () => {
  const document = await readFile(resolve(root, "docs/capabilities/evaluate-market-actor.md"), "utf8");
  for (const required of [
    "Merkityksellinen lopputulos",
    "Rajaus — sisältää",
    "Rajaus — ei sisällä",
    "Vuorovaikutussopimus: Arvioi yksi toimija",
    "Vuorovaikutussopimus: Käsittele tosiasiakorjaus tai vastine",
    "Tuntematon",
    "automaattista paremmuusjärjestystä",
    "riippumatonta ihmiskatselmusta",
    "Suoritustapa — toteutusvalinta.*`agent-primary-using-software`",
  ]) {
    assert.match(document, new RegExp(required, "is"));
  }
});

test("arviointimalli dokumentoi painot, perusteet ja hyväksytyt portit", async () => {
  const model = await loadModel();
  assert.equal(model.menetelman_versio, "0.2");
  assert.equal(model.hyvaksyntaportit.laskentasaanto_testattu, true);
  assert.equal(model.hyvaksyntaportit.kahden_riippumattoman_arvioijan_kalibrointi, true);
  assert.equal(model.hyvaksyntaportit.omistajan_hyvaksynta_nimettyihin_arvioihin, true);
  assert.equal(model.omistajan_hyvaksynta.paiva, "2026-09-04");
  assert.equal(model.kalibroinnin_hyvaksynta.kalibrointiversio, "0.2-2");
  assert.equal(model.kalibroinnin_hyvaksynta.paiva, "2026-09-07");
  assert.equal(model.kalibroinnin_hyvaksynta.arvioijat.length, 2);
  assert.match(model.arvioinnin_tilat.tuntematon, /Ei ole pistemäärä/);
  assert.match(model.asteikko[0], /Lähteistetty näyttö/);

  for (const role of model.laskenta.roolit) {
    const total = model.muuttujat.reduce((sum, variable) => sum + variable.painot[role], 0);
    assert.equal(total, 100, `${role}-roolin painot eivät muodosta sataa prosenttia`);
    assert.ok(model.pakolliset_muuttujat[role].length >= 5);
    for (const variable of model.muuttujat) {
      assert.equal(typeof variable.perusteet[role], "string");
      assert.ok(variable.perusteet[role].length > 20);
    }
  }
});

test("synteettinen kapasiteettitapaus tuottaa toistettavan tuloksen", async () => {
  const result = calculateRoleResult(await loadModel(), await loadExample("kapasiteettitoimija.yaml"));
  assert.equal(result.score, 3.39);
  assert.equal(result.evidence_coverage_percent, 99);
  assert.equal(result.overall_confidence, "B");
  assert.deepEqual(result.blockers, []);
  assert.deepEqual(result.sensitivity, {
    minimum: 3.36,
    maximum: 3.42,
    weight_sensitive: false,
  });
});

test("synteettinen tietopalvelutapaus käsittelee ei sovellu -tilan määritellysti", async () => {
  const result = calculateRoleResult(await loadModel(), await loadExample("tietopalvelutoimija.yaml"));
  assert.equal(result.score, 3.7);
  assert.equal(result.evidence_coverage_percent, 94.95);
  assert.equal(result.not_applicable_weight_percent, 1);
  assert.equal(result.overall_confidence, "A");
  assert.deepEqual(result.blockers, []);
  assert.deepEqual(result.sensitivity, {
    minimum: 3.68,
    maximum: 3.72,
    weight_sensitive: false,
  });
});

test("hyväksytyt portit sallivat nimetyn toimijan luonnoslaskennan", async () => {
  const model = await loadModel();
  const assessment = await loadExample("kapasiteettitoimija.yaml");
  assessment.synthetic = false;
  assessment.case_id = "nimetty-toimija";
  const result = calculateRoleResult(model, assessment);
  assert.equal(result.score, 3.39);
  assert.deepEqual(result.blockers, []);
});

test("tuntematon pienentää kattavuutta mutta ei muutu nollaksi", async () => {
  const model = await loadModel();
  const assessment = await loadExample("kapasiteettitoimija.yaml");
  assessment.observations.KAPASITEETTI = { state: "unknown" };
  const result = calculateRoleResult(model, assessment);
  assert.equal(result.score, null);
  assert.ok(result.evidence_coverage_percent < 80);
  assert.ok(result.missing_required_variables.includes("KAPASITEETTI"));
  assert.ok(result.blockers.includes("pakollinen_muuttuja_puuttuu"));
});

test("ei sovellu vaatii perustelun ja liiallinen osuus estää tuloksen", async () => {
  const model = await loadModel();
  const assessment = await loadExample("kapasiteettitoimija.yaml");
  assessment.observations.ASIAKAS = { state: "not_applicable" };
  assert.throws(() => calculateRoleResult(model, assessment), /perustelu puuttuu/);

  assessment.observations.ASIAKAS.reason = "Synteettinen perustelu";
  assessment.observations.RAHOITUS = { state: "not_applicable", reason: "Synteettinen perustelu" };
  const result = calculateRoleResult(model, assessment);
  assert.equal(result.score, null);
  assert.ok(result.blockers.includes("pakollinen_muuttuja_puuttuu"));
  assert.ok(result.blockers.includes("liikaa_ei_sovellu_painoa"));
});

test("ratkaisematon olennainen lähderistiriita estää numeerisen tuloksen", async () => {
  const model = await loadModel();
  const assessment = await loadExample("tietopalvelutoimija.yaml");
  assessment.unresolved_material_conflict = true;
  const result = calculateRoleResult(model, assessment);
  assert.equal(result.score, null);
  assert.ok(result.blockers.includes("ratkaisematon_olennainen_lahderistiriita"));
});

test("luottamus ei muuta samaa pistetulosta", async () => {
  const model = await loadModel();
  const first = await loadExample("kapasiteettitoimija.yaml");
  const second = structuredClone(first);
  for (const observation of Object.values(second.observations)) {
    if ("score" in observation) observation.confidence = "C";
  }
  const firstResult = calculateRoleResult(model, first);
  const secondResult = calculateRoleResult(model, second);
  assert.equal(firstResult.score, secondResult.score);
  assert.notEqual(firstResult.overall_confidence, secondResult.overall_confidence);
});

test("tutkimussuunnitelma pysyy verkkosivustolla julkaisemattomana ja ilman yrityspisteitä", async () => {
  const concept = parseDocument(
    await readFile(resolve(root, "knowledge/research/suomen-tekoalyoperaattorimarkkina-v1.md"), "utf8"),
  );
  const candidates = await readFile(resolve(studyRoot, "ehdokaskentta.md"), "utf8");
  assert.equal(concept.frontmatter.status, "draft");
  assert.equal(concept.frontmatter.publication_status, "unpublished");
  assert.equal(concept.frontmatter.repository_visibility, "public_draft");
  assert.equal(concept.frontmatter.review_status, "calibrated_for_draft_assessment");
  assert.equal(concept.frontmatter.candidate_groups.length, 10);
  assert.equal((candidates.match(/^## \d+\./gm) ?? []).length, 10);
  assert.match(candidates, /seulontalista, ei yritysarvio/i);
  assert.doesNotMatch(candidates, /kokonaispiste|sijoitus \d|paremmuusjärjestys/i);
});

test("tutkimuspaketti määrittelee lähde-, esteellisyys-, kalibrointi- ja vastineprosessit", async () => {
  const sources = await readFile(resolve(studyRoot, "lahderekisteri.md"), "utf8");
  const sourcePolicy = await readFile(resolve(studyRoot, "lahde-ja-esteellisyys.md"), "utf8");
  const calibration = await readFile(resolve(studyRoot, "kalibrointi.md"), "utf8");
  const correction = await readFile(resolve(studyRoot, "korjaus-ja-vastineprosessi.md"), "utf8");
  for (const required of [
    "Statistics Finland",
    "AI in Finnish Business 2026",
    "LUMI AI Factory",
    "Verda AI Cloud",
    "Traficom",
    "Finnet-liiton jäsenet",
    "Lähdeaukot ennen yrityskohtaista arviointia",
  ]) {
    assert.match(sources, new RegExp(required));
  }
  assert.match(sourcePolicy, /viimeisen 24 kuukauden asiakkuuden/);
  assert.match(sourcePolicy, /kaksi keskenään riippumatonta lähdettä/);
  assert.match(sourcePolicy, /Hinnasto, palvelun saatavuus ja käyttöehdot \| 30 päivää/);
  assert.match(calibration, /80 prosentissa numeerisista muuttujista/);
  assert.match(calibration, /kaksi toisistaan eristettyä auditointiagenttia/);
  assert.match(calibration, /ihminen hyväksyy vertailuraportin/);
  assert.match(correction, /seitsemän kalenteripäivää/);
  assert.match(correction, /veto-oikeutta/);
});

test("kalibrointipaketti sisältää kaksi synteettistä lähdepakettia ilman oikeita yritysväitteitä", async () => {
  const calibrationRoot = resolve(studyRoot, "kalibrointi");
  const [first, second, scoring, cases] = await Promise.all([
    readFile(resolve(calibrationRoot, "tapaus-a-lahdepaketti.md"), "utf8"),
    readFile(resolve(calibrationRoot, "tapaus-b-lahdepaketti.md"), "utf8"),
    readFile(resolve(studyRoot, "pisteytysohje.md"), "utf8"),
    readFile(resolve(calibrationRoot, "tapaukset.yaml"), "utf8"),
  ]);
  assert.match(first, /Synteettinen kalibrointitapaus/);
  assert.match(second, /Synteettinen kalibrointitapaus/);
  assert.match(scoring, /Muuttujakohtaiset ankkurit/);
  assert.equal(loadYaml(cases).cases.length, 2);
});

test("ensimmäisen erän valinta lukitaan ennen pisteytystä", async () => {
  const selection = await readFile(resolve(studyRoot, "ensimmaisen-eran-valinta-pohja.md"), "utf8");
  for (const required of [
    "lukitaan ennen toimijoiden pisteytystä",
    "Valinta- tai poissulkusyy",
    "Sidonnaisuudet",
    "Kalibrointi hyväksytty",
    "ettei pisteitä ollut nähty",
  ]) {
    assert.match(selection, new RegExp(required, "i"));
  }
});

test("ensimmäinen nimetty koe-erä on tasapainoinen ja pisteetön", async () => {
  const batch = loadYaml(
    await readFile(resolve(studyRoot, "ensimmainen-arviointiera-2026-09-07.yaml"), "utf8"),
  );
  assert.equal(batch.status, "selection_locked_pending_actor_screening");
  assert.equal(batch.method_version, "0.2");
  assert.equal(batch.calibration_version, "0.2-2");
  assert.equal(batch.gates.calibration_approval.approved, true);
  assert.equal(batch.gates.named_draft_assessment_authorisation.approved, true);
  assert.equal(batch.gates.actor_scores_seen_before_selection, false);
  assert.equal(batch.gates.actor_specific_screening_complete, false);
  assert.equal(batch.selected.length, 6);
  assert.equal(new Set(batch.selected.map((entry) => entry.slot)).size, 6);
  assert.equal(new Set(batch.selected.map((entry) => entry.actor)).size, 6);
  assert.equal(batch.longlist_not_selected.length, 6);
  assert.equal(batch.lock.confirmation_no_scores_seen, true);
  assert.doesNotMatch(JSON.stringify(batch), /"score"|"piste"\s*:/i);
  for (const entry of batch.selected) {
    assert.equal(entry.screening_status, "pending");
    assert.ok(entry.source_ids.length >= 1);
    assert.ok(entry.selection_reason.length > 40);
    assert.ok(entry.method_stress.length > 40);
  }
  assert.ok(batch.source_records.length >= 14);
  for (const source of batch.source_records) {
    for (const field of [
      "url",
      "title",
      "publisher",
      "source_type",
      "published_or_updated",
      "checked_at",
      "supported_claim",
      "locator",
      "evidence_form",
      "confidence",
      "evaluator",
      "evaluator_conflicts",
      "conflicting_source_state",
    ]) {
      assert.equal(typeof source[field], "string", `${source.id}: ${field} puuttuu`);
      assert.ok(source[field].length > 0, `${source.id}: ${field} on tyhjä`);
    }
    if (source.published_or_updated === "tuntematon") {
      assert.equal(typeof source.source_excerpt, "string", `${source.id}: lähdeote puuttuu`);
      assert.ok(source.source_excerpt.length > 0, `${source.id}: lähdeote on tyhjä`);
    }
  }
  for (const entry of batch.longlist_not_selected) {
    assert.match(entry.selection_status, /^not_selected/);
  }
});

test("toimijaprofiili säilyttää laskennan, sidonnaisuudet ja ihmiskatselmuksen", async () => {
  const profile = await readFile(resolve(studyRoot, "toimijaprofiili-pohja.md"), "utf8");
  for (const required of [
    "Kelpoisuusseula",
    "Mahdolliset roolit",
    "Lähdehavainnot",
    "Laskennan tarkistus",
    "Näyttökattavuus",
    "Arvioijan sidonnaisuudet",
    "Riippumaton tarkistaja",
    "Ihmisen katselmus",
    "Vastauksen määräpäivä",
  ]) {
    assert.match(profile, new RegExp(required));
  }
  assert.match(profile, /tuntematon \/ ei sovellu \/ 0–5/);
});

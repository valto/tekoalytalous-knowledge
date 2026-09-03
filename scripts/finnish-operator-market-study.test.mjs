import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { load as loadYaml } from "js-yaml";
import { parseDocument } from "./validate-knowledge.mjs";

const root = resolve(import.meta.dirname, "..");
const studyRoot = resolve(root, "docs", "tutkimus", "suomen-tekoalyoperaattorimarkkina");

test("markkinatoimijan arviointikyky on rajattu ennen yritysarvioita", async () => {
  const crd = await readFile(resolve(root, "docs/capabilities/evaluate-market-actor.md"), "utf8");
  for (const required of [
    "Merkityksellinen lopputulos",
    "Rajaus — sisältää",
    "Rajaus — ei sisällä",
    "Vuorovaikutussopimus: Arvioi yksi toimija",
    "Tuntematon",
    "automaattista paremmuusjärjestystä",
    "ihmisen toimituksellista päätöstä",
  ]) {
    assert.match(crd, new RegExp(required, "i"));
  }
});

test("toimija-arviointimallin roolipainot ovat kukin sata prosenttia", async () => {
  const model = loadYaml(
    await readFile(resolve(studyRoot, "toimija-arviointi.yaml"), "utf8"),
  );
  assert.equal(model.menetelman_versio, "0.1");
  assert.match(model.arvioinnin_tilat.tuntematon, /Ei ole pistemäärä/);
  assert.match(model.asteikko[0], /Lähteistetty näyttö/);
  for (const role of ["token", "tieto", "yhdistelma", "virtuaali"]) {
    const total = model.muuttujat.reduce(
      (sum, variable) => sum + variable[`paino_${role}`],
      0,
    );
    assert.equal(total, 100, `${role}-roolin painot eivät muodosta sataa prosenttia`);
  }
});

test("ML-3-tutkimussuunnitelma pysyy julkaisemattomana ja ilman yrityspisteitä", async () => {
  const concept = parseDocument(
    await readFile(resolve(root, "knowledge/research/suomen-tekoalyoperaattorimarkkina-v1.md"), "utf8"),
  );
  const candidates = await readFile(resolve(studyRoot, "ehdokaskentta.md"), "utf8");
  assert.equal(concept.frontmatter.status, "draft");
  assert.equal(concept.frontmatter.publication_status, "unpublished");
  assert.equal(concept.frontmatter.editorial_status, "review_required");
  assert.equal(concept.frontmatter.candidate_groups.length, 10);
  assert.equal((candidates.match(/^## \d+\./gm) ?? []).length, 10);
  assert.match(candidates, /seulontalista, ei yritysarvio/i);
  assert.doesNotMatch(candidates, /kokonaispiste|sijoitus \d|paremmuusjärjestys/i);
});

test("tutkimuspaketti erottaa lähteen käyttötarkoituksen ja rajoituksen", async () => {
  const sources = await readFile(resolve(studyRoot, "lahderekisteri.md"), "utf8");
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
  assert.doesNotMatch(sources, /telia\.fi\/yrityksille\/palvelut\/konesali-ja-kapasiteettipalvelut/);
});

test("toimijaprofiilin pohja säilyttää kelpoisuuden, näytön ja ihmiskatselmuksen", async () => {
  const profile = await readFile(resolve(studyRoot, "toimijaprofiili-pohja.md"), "utf8");
  for (const required of [
    "Kelpoisuusseula",
    "Mahdolliset roolit",
    "Lähdehavainnot",
    "Suora tieto vai päätelmä",
    "Ristiriidat ja tietopuutteet",
    "Ihmisen katselmus",
  ]) {
    assert.match(profile, new RegExp(required));
  }
  assert.match(profile, /tuntematon \/ ei sovellu \/ 0–5/);
});

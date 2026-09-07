import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { basename } from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadYaml } from "js-yaml";

const VARIABLE_IDS = [
  "ASIAKAS",
  "KAPASITEETTI",
  "RAHOITUS",
  "AVOIMET_MALLIT",
  "TIETOYDIN",
  "OMISTUS",
  "SIIRRETTAVYYS",
  "TURVALLISUUS",
  "TOIMIALA",
  "OPEROINNIN_EROTTELU",
  "TUKI",
  "INTEGRAATIO",
];

export function validateAssessmentShape(assessment) {
  if (JSON.stringify(assessment).includes("VAIHDA")) {
    throw new Error("Arviointiin jäi täyttämätön VAIHDA-kohta");
  }
  if (!assessment?.case_id || assessment.synthetic !== true || assessment.method_version !== "0.2") {
    throw new Error("Tapauksen tunniste, synteettisyys tai menetelmäversio on virheellinen");
  }
  if (!assessment?.assessor?.id || !assessment?.assessor?.name) {
    throw new Error("Arvioijan tunniste tai nimi puuttuu");
  }
  if (!["human", "audit_agent", "agent"].includes(assessment.assessor.type)) {
    throw new Error("Arvioijan tyypin pitää olla human, audit_agent tai agent");
  }
  if (assessment.assessor.type === "audit_agent") {
    if (!assessment.assessor.model_identity || !assessment.assessor.isolation_run_id || !assessment.assessor.context_isolation) {
      throw new Error("Auditointiagentin malli- tai eristystiedot puuttuvat");
    }
  }
  if (!assessment.assessor.independence_declaration || !assessment.assessor.conflicts_of_interest) {
    throw new Error("Riippumattomuus- tai sidonnaisuusilmoitus puuttuu");
  }
  if (!['jatkoon', 'rajatapaus', 'ulos_rajattu'].includes(assessment.eligibility?.decision)) {
    throw new Error("Kelpoisuuspäätös puuttuu tai on virheellinen");
  }
  if (!assessment.eligibility?.reason || !assessment.role || !assessment.selected_roles?.includes(assessment.role)) {
    throw new Error("Kelpoisuuden perustelu tai valittu rooli puuttuu");
  }
  if (!Array.isArray(assessment.used_sources) || assessment.used_sources.length === 0) {
    throw new Error("Käytettyjen lähteiden luettelo puuttuu");
  }
  for (const [id, observation] of Object.entries(assessment.observations ?? {})) {
    if (!observation.reason) throw new Error(`Perustelu puuttuu muuttujalta ${id}`);
    if (Number.isInteger(observation.score)) {
      if (observation.score < 0 || observation.score > 5 || !["A", "B", "C", "D"].includes(observation.confidence)) {
        throw new Error(`Piste tai luottamus on virheellinen muuttujalla ${id}`);
      }
      if (!Array.isArray(observation.sources) || observation.sources.length === 0) {
        throw new Error(`Lähde puuttuu pisteytetyltä muuttujalta ${id}`);
      }
    } else if (!['unknown', 'not_applicable'].includes(observation.state)) {
      throw new Error(`Tila puuttuu muuttujalta ${id}`);
    }
  }
  const observationIds = Object.keys(assessment.observations ?? {}).sort();
  if (JSON.stringify(observationIds) !== JSON.stringify([...VARIABLE_IDS].sort())) {
    throw new Error("Arvioinnissa pitää olla kaikki 12 muuttujaa");
  }
  if (!assessment.locked_at || Number.isNaN(Date.parse(assessment.locked_at))) {
    throw new Error("Lukitusaika puuttuu tai ei ole kelvollinen");
  }
  return assessment;
}

export async function lockAssessment(path, lockedBy) {
  const bytes = await readFile(path);
  const assessment = validateAssessmentShape(loadYaml(bytes.toString("utf8")));
  if (!lockedBy) throw new Error("Lukitsijan tunniste puuttuu");

  const lock = {
    assessment_file: basename(path),
    case_id: assessment.case_id,
    assessor_id: assessment.assessor.id,
    assessor_type: assessment.assessor.type,
    locked_by: lockedBy,
    locked_at: assessment.locked_at,
    sha256: createHash("sha256").update(bytes).digest("hex"),
  };
  const lockPath = `${path}.lock.json`;
  await writeFile(lockPath, `${JSON.stringify(lock, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
  return { lockPath, lock };
}

export async function verifyAssessmentLock(path) {
  const [bytes, rawLock] = await Promise.all([
    readFile(path),
    readFile(`${path}.lock.json`, "utf8"),
  ]);
  const lock = JSON.parse(rawLock);
  const actual = createHash("sha256").update(bytes).digest("hex");
  if (actual !== lock.sha256) throw new Error(`Lukitun arvioinnin tarkistussumma ei täsmää: ${path}`);
  return lock;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [, , path, lockedBy] = process.argv;
  if (!path || !lockedBy) {
    console.error("Käyttö: node scripts/lock-market-actor-assessment.mjs <arviointi.yaml> <lukitsijan-tunniste>");
    process.exitCode = 1;
  } else {
    const result = await lockAssessment(path, lockedBy);
    console.log(JSON.stringify(result, null, 2));
  }
}

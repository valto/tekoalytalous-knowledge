import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { load as parseYaml } from "js-yaml";
import { calculateRoleResult } from "./evaluate-market-actor.mjs";
import { verifyAssessmentLock } from "./lock-market-actor-assessment.mjs";

const CONFIDENCE_ORDER = { D: 1, C: 2, B: 3, A: 4 };

function sameSet(first = [], second = []) {
  return JSON.stringify([...first].sort()) === JSON.stringify([...second].sort());
}

function sourceCoverage(assessment, requiredSources) {
  const used = new Set(assessment.used_sources ?? []);
  const omitted = assessment.omitted_key_sources ?? {};
  const unexplained = requiredSources.filter((source) => !used.has(source) && !String(omitted[source] ?? "").trim());
  return { pass: unexplained.length === 0, unexplained };
}

export async function compareCalibration(model, caseDefinition, first, second) {
  if (first.case_id !== second.case_id || first.case_id !== caseDefinition.case_id) {
    throw new Error("Kalibrointitapausten tunnisteet eivät täsmää");
  }
  if (first.role !== caseDefinition.primary_role || second.role !== caseDefinition.primary_role) {
    throw new Error("Arvioitu rooli ei vastaa kalibrointitapauksen ensisijaista roolia");
  }
  if (first.evidence_cutoff !== caseDefinition.evidence_cutoff || second.evidence_cutoff !== caseDefinition.evidence_cutoff) {
    throw new Error("Näytön katkaisupäivä ei vastaa kalibrointitapausta");
  }
  if (first.assessor?.id === second.assessor?.id) {
    throw new Error("Arvioijilla pitää olla eri tunnisteet");
  }

  const firstResult = calculateRoleResult(model, first);
  const secondResult = calculateRoleResult(model, second);
  const variableIds = model.muuttujat.map((variable) => variable.id);
  let comparableCount = 0;
  let withinOneCount = 0;
  const differences = [];

  for (const id of variableIds) {
    const a = first.observations[id];
    const b = second.observations[id];
    const aNumeric = Number.isInteger(a?.score);
    const bNumeric = Number.isInteger(b?.score);
    if (aNumeric || bNumeric) {
      comparableCount += 1;
      if (aNumeric && bNumeric && Math.abs(a.score - b.score) <= 1) withinOneCount += 1;
    }
    if (aNumeric !== bNumeric || (aNumeric && bNumeric && a.score !== b.score) || a?.state !== b?.state) {
      differences.push({ variable: id, first: a?.score ?? a?.state, second: b?.score ?? b?.state });
    }
  }

  const variableAgreementPercent = comparableCount === 0 ? 0 : 100 * withinOneCount / comparableCount;
  const scoreDifference = firstResult.score === null || secondResult.score === null
    ? null
    : Math.abs(firstResult.score - secondResult.score);
  const confidenceDifference = Math.abs(
    CONFIDENCE_ORDER[firstResult.overall_confidence] - CONFIDENCE_ORDER[secondResult.overall_confidence],
  );
  const firstSources = sourceCoverage(first, caseDefinition.key_sources);
  const secondSources = sourceCoverage(second, caseDefinition.key_sources);
  const humanGateEligible =
    first.assessor?.type === "human" &&
    second.assessor?.type === "human" &&
    Boolean(first.assessor?.independence_declaration) &&
    Boolean(second.assessor?.independence_declaration);

  const criteria = {
    same_eligibility_decision: first.eligibility?.decision === second.eligibility?.decision,
    same_selected_roles: sameSet(first.selected_roles, second.selected_roles),
    variable_agreement_at_least_80_percent: variableAgreementPercent >= 80,
    score_difference_at_most_0_30: scoreDifference !== null && scoreDifference <= 0.3,
    confidence_difference_at_most_one_class: confidenceDifference <= 1,
    first_key_sources_accounted_for: firstSources.pass,
    second_key_sources_accounted_for: secondSources.pass,
    distinct_independent_human_assessors: humanGateEligible,
  };

  return {
    calibration_version: "0.2-1",
    case_id: first.case_id,
    assessors: [first.assessor.id, second.assessor.id],
    first_result: firstResult,
    second_result: secondResult,
    variable_agreement_percent: Math.round(variableAgreementPercent * 100) / 100,
    score_difference: scoreDifference,
    confidence_class_difference: confidenceDifference,
    unexplained_key_source_omissions: {
      first: firstSources.unexplained,
      second: secondSources.unexplained,
    },
    variable_differences: differences,
    criteria,
    passed: Object.values(criteria).every(Boolean),
  };
}

async function readYaml(path) {
  return parseYaml(await readFile(path, "utf8"));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [, , modelPath, casesPath, firstPath, secondPath] = process.argv;
  if (!modelPath || !casesPath || !firstPath || !secondPath) {
    console.error("Käyttö: node scripts/compare-market-actor-calibration.mjs <malli.yaml> <tapaukset.yaml> <arvioija-1.yaml> <arvioija-2.yaml>");
    process.exitCode = 1;
  } else {
    await Promise.all([verifyAssessmentLock(firstPath), verifyAssessmentLock(secondPath)]);
    const [model, cases, first, second] = await Promise.all([
      readYaml(modelPath),
      readYaml(casesPath),
      readYaml(firstPath),
      readYaml(secondPath),
    ]);
    const caseDefinition = cases.cases.find((item) => item.case_id === first.case_id);
    if (!caseDefinition) throw new Error(`Kalibrointitapausta ei löydy: ${first.case_id}`);
    const report = await compareCalibration(model, caseDefinition, first, second);
    console.log(JSON.stringify(report, null, 2));
    if (!report.passed) process.exitCode = 2;
  }
}

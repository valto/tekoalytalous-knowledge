import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { load as parseYaml } from "js-yaml";
import { compareCalibration } from "./compare-market-actor-calibration.mjs";
import { verifyAssessmentLock } from "./lock-market-actor-assessment.mjs";

async function readYaml(path) {
  return parseYaml(await readFile(path, "utf8"));
}

export async function runCalibration(modelPath, casesPath, pairs) {
  const [model, caseRegister] = await Promise.all([readYaml(modelPath), readYaml(casesPath)]);
  const reports = [];

  for (const [firstPath, secondPath] of pairs) {
    await Promise.all([verifyAssessmentLock(firstPath), verifyAssessmentLock(secondPath)]);
    const [first, second] = await Promise.all([readYaml(firstPath), readYaml(secondPath)]);
    const caseDefinition = caseRegister.cases.find((item) => item.case_id === first.case_id);
    if (!caseDefinition) throw new Error(`Kalibrointitapausta ei löydy: ${first.case_id}`);
    reports.push(await compareCalibration(model, {
      ...caseDefinition,
      calibration_version: caseRegister.calibration_version,
    }, first, second));
  }

  const sameAssessorsAcrossCases =
    reports.length > 0 &&
    reports.every((report) =>
      JSON.stringify([...report.assessors].sort()) === JSON.stringify([...reports[0].assessors].sort()),
    );
  const allCasesPresent =
    reports.length === caseRegister.cases.length &&
    caseRegister.cases.every((item) => reports.some((report) => report.case_id === item.case_id));

  return {
    calibration_version: caseRegister.calibration_version,
    method_version: model.menetelman_versio,
    generated_at: new Date().toISOString(),
    cases: reports,
    aggregate_criteria: {
      all_registered_cases_present: allCasesPresent,
      same_assessor_pair_for_all_cases: sameAssessorsAcrossCases,
      all_case_thresholds_passed: reports.every((report) => report.passed),
      human_owner_approval: false,
    },
    technically_passed:
      allCasesPresent && sameAssessorsAcrossCases && reports.every((report) => report.passed),
    approved: false,
    approval_note: "Ihmisen omistajapäätös vaaditaan teknisesti hyväksytyn vertailun jälkeen.",
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [, , modelPath, casesPath, outputPath, ...assessmentPaths] = process.argv;
  if (!modelPath || !casesPath || !outputPath || assessmentPaths.length < 4 || assessmentPaths.length % 2 !== 0) {
    console.error("Käyttö: node scripts/run-market-actor-calibration.mjs <malli.yaml> <tapaukset.yaml> <raportti.json> <a1.yaml> <a2.yaml> [<b1.yaml> <b2.yaml> ...]");
    process.exitCode = 1;
  } else {
    const pairs = [];
    for (let index = 0; index < assessmentPaths.length; index += 2) {
      pairs.push([assessmentPaths[index], assessmentPaths[index + 1]]);
    }
    const report = await runCalibration(modelPath, casesPath, pairs);
    await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
    console.log(JSON.stringify(report, null, 2));
    if (!report.technically_passed) process.exitCode = 2;
  }
}

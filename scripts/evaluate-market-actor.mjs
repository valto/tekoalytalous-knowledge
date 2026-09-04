const CONFIDENCE_VALUES = { A: 4, B: 3, C: 2, D: 1 };

function round(value, decimals) {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function descriptionClass(score) {
  if (score < 1) return "erittain_heikko_tai_estynyt";
  if (score < 2) return "heikko";
  if (score < 3) return "osittainen";
  if (score < 4) return "uskottava";
  if (score < 4.75) return "vahva";
  return "poikkeuksellisen_valmis";
}

function deriveConfidence(coverage, weightedConfidence, dWeightShare, hasD) {
  if (coverage >= 90 && weightedConfidence >= 3.5 && !hasD) return "A";
  if (coverage >= 80 && weightedConfidence >= 3 && dWeightShare <= 10) return "B";
  if (coverage >= 70 && weightedConfidence >= 2) return "C";
  return "D";
}

function sensitivityRange(known, changePercent, decimals) {
  const totalWeight = known.reduce((sum, item) => sum + item.weight, 0);
  const baseline = known.reduce((sum, item) => sum + item.weight * item.score, 0) / totalWeight;
  const values = [baseline];

  for (const selected of known) {
    for (const direction of [-1, 1]) {
      const selectedWeight = selected.weight * (1 + direction * changePercent / 100);
      const otherOriginalWeight = totalWeight - selected.weight;
      const otherTargetWeight = totalWeight - selectedWeight;
      const adjusted = known.map((item) => {
        if (item.id === selected.id) return { ...item, adjustedWeight: selectedWeight };
        const adjustedWeight = otherOriginalWeight === 0
          ? item.weight
          : item.weight * otherTargetWeight / otherOriginalWeight;
        return { ...item, adjustedWeight };
      });
      values.push(
        adjusted.reduce((sum, item) => sum + item.adjustedWeight * item.score, 0) / totalWeight,
      );
    }
  }

  return {
    minimum: round(Math.min(...values), decimals),
    maximum: round(Math.max(...values), decimals),
  };
}

export function calculateRoleResult(model, assessment) {
  if (assessment.method_version !== model.menetelman_versio) {
    throw new Error("Arvioinnin menetelmäversio ei vastaa laskentamallia");
  }
  const closedGates = Object.entries(model.hyvaksyntaportit)
    .filter(([key, value]) => key !== "saanto" && value !== true)
    .map(([key]) => key);
  if (!assessment.synthetic && closedGates.length > 0) {
    throw new Error(`Menetelmää ei ole hyväksytty nimettyyn arviointiin: ${closedGates.join(", ")}`);
  }
  if (!model.laskenta.roolit.includes(assessment.role)) {
    throw new Error(`Tuntematon rooli: ${assessment.role}`);
  }

  const variables = model.muuttujat.map((variable) => {
    const observation = assessment.observations?.[variable.id];
    if (!observation) throw new Error(`Havainto puuttuu muuttujalta ${variable.id}`);
    const weight = variable.painot[assessment.role];

    if (observation.state === "unknown") return { id: variable.id, weight, state: "unknown" };
    if (observation.state === "not_applicable") {
      if (!observation.reason) throw new Error(`Ei sovellu -perustelu puuttuu muuttujalta ${variable.id}`);
      return { id: variable.id, weight, state: "not_applicable" };
    }
    if (!Number.isInteger(observation.score) || observation.score < 0 || observation.score > 5) {
      throw new Error(`Virheellinen piste muuttujalla ${variable.id}`);
    }
    if (!(observation.confidence in CONFIDENCE_VALUES)) {
      throw new Error(`Virheellinen luottamus muuttujalla ${variable.id}`);
    }
    return {
      id: variable.id,
      weight,
      state: "known",
      score: observation.score,
      confidence: observation.confidence,
    };
  });

  const known = variables.filter((item) => item.state === "known");
  const notApplicable = variables.filter((item) => item.state === "not_applicable");
  const applicableWeight = variables
    .filter((item) => item.state !== "not_applicable")
    .reduce((sum, item) => sum + item.weight, 0);
  const knownWeight = known.reduce((sum, item) => sum + item.weight, 0);
  const notApplicableWeight = notApplicable.reduce((sum, item) => sum + item.weight, 0);
  const coverage = applicableWeight === 0 ? 0 : 100 * knownWeight / applicableWeight;
  const required = model.pakolliset_muuttujat[assessment.role];
  const missingRequired = required.filter((id) => {
    const item = variables.find((variable) => variable.id === id);
    return item?.state !== "known";
  });

  const blockers = [];
  if (coverage < model.laskenta.minimi_nayttokattavuus_prosenttia) blockers.push("riittamaton_nayttokattavuus");
  if (missingRequired.length > 0) blockers.push("pakollinen_muuttuja_puuttuu");
  if (notApplicableWeight > model.laskenta.suurin_ei_sovellu_paino_prosenttia) blockers.push("liikaa_ei_sovellu_painoa");
  if (assessment.unresolved_material_conflict) blockers.push("ratkaisematon_olennainen_lahderistiriita");

  const weightedConfidence = knownWeight === 0
    ? 0
    : known.reduce((sum, item) => sum + item.weight * CONFIDENCE_VALUES[item.confidence], 0) / knownWeight;
  const dWeight = known
    .filter((item) => item.confidence === "D")
    .reduce((sum, item) => sum + item.weight, 0);
  const dWeightShare = knownWeight === 0 ? 100 : 100 * dWeight / knownWeight;
  const overallConfidence = deriveConfidence(coverage, weightedConfidence, dWeightShare, dWeight > 0);

  const result = {
    method_version: model.menetelman_versio,
    case_id: assessment.case_id,
    role: assessment.role,
    evidence_coverage_percent: round(coverage, 2),
    missing_required_variables: missingRequired,
    not_applicable_weight_percent: notApplicableWeight,
    blockers,
    score: null,
    score_class: null,
    overall_confidence: overallConfidence,
    sensitivity: null,
  };

  if (blockers.length === 0) {
    const rawScore = known.reduce((sum, item) => sum + item.weight * item.score, 0) / knownWeight;
    const score = round(rawScore, model.laskenta.tuloksen_desimaalit);
    const range = sensitivityRange(
      known,
      model.laskenta.herkkyys.muutos_prosenttia,
      model.laskenta.tuloksen_desimaalit,
    );
    result.score = score;
    result.score_class = descriptionClass(score);
    result.sensitivity = {
      ...range,
      weight_sensitive:
        range.maximum - range.minimum > model.laskenta.herkkyys.varoitusraja_pistetta ||
        descriptionClass(range.minimum) !== descriptionClass(range.maximum),
    };
  }

  return result;
}

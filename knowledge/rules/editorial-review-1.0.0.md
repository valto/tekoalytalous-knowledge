---
type: Editorial Rule Set
title: Editorial review rules 1.0.0
description: Versioned rules for advisory review of Tekoälytalous knowledge changes.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/editorial-review-rules.md
tags:
  - governance
  - editorial-review
  - rules
generated:
  by: process:tekoalytalous-okf-pilot
  at: 2026-08-27T00:00:00+03:00
verified:
  by: human:valto-loikkanen
  at: 2026-08-27T00:00:00+03:00
status: stable
rule_set: editorial-review/1.0.0
capability: governance.review-change
risk_class: R4
license: CC BY 4.0
---

# Editorial review rules

## Purpose

These rules turn the public editorial principles into repeatable checks for proposed knowledge and publication changes. They help a reviewer find missing evidence, unclear authority, provenance defects, unsupported certainty, terminology drift, and rights risks before publication.

A review report is advisory unless a rule is explicitly classified as blocking. Passing review means that the proposal conforms to the checks that were run; it does not certify that every claim is true, complete, neutral, or future-proof.

## Scope of V1.3

V1.3 reviews one proposed repository change or one complete content object. It covers:

- `Article`, `ContentNode`, research, glossary, source, and future OKF knowledge objects;
- required metadata and internal consistency;
- claim strength and evidence alignment;
- sources, provenance, quotation, and access boundaries;
- forecasts, assumptions, uncertainty, and evidence cutoffs;
- perspective, conflicts of interest, and material counter-views;
- canonical terminology;
- licensing and reuse statements;
- agent identity, authority, and human approval requirements.

V1.3 does not:

- certify truth or exhaustiveness;
- replace domain-expert judgement;
- make publication or merge decisions;
- retrieve private, authenticated, or paywalled material;
- infer undisclosed conflicts as facts;
- rewrite content automatically;
- change evidence levels or conclusions without human approval.

## Rule model

Every rule has a stable ID, category, severity, applicability condition, check, expected evidence, and remediation guidance.

Severities:

| Severity   | Meaning                                                                            | Effect                                                                       |
| ---------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `blocking` | A required structural, rights, provenance, safety, or authority condition is unmet | The proposal is not ready for publication or merge                           |
| `advisory` | Human judgement or stronger support may be needed                                  | The proposal may proceed only after an accountable human reviews the finding |
| `note`     | Useful context that does not itself require a change                               | Recorded for traceability                                                    |

Finding states are `pass`, `fail`, `warning`, `not-applicable`, and `not-evaluated`. A missing capability or unavailable input produces `not-evaluated`, never an invented pass.

## Rules

### Structure and identity

#### `STRUCT-001` — Required metadata is present

- Severity: `blocking`.
- Applies to: every publishable object.
- Check: fields required by the applicable schema and publication form are present and non-placeholder.
- Expected evidence: the object and its declared schema or model version.
- Remediation: add the missing value or keep the object in draft state.

#### `STRUCT-002` — Identity and public location are unambiguous

- Severity: `blocking`.
- Applies to: objects with an `id`, `slug`, canonical URL, or OKF concept path.
- Check: identifiers are unique within the review set; a published slug is stable; any changed public path has an explicit redirect plan.
- Expected evidence: repository index, route map, and previous published identity where relevant.
- Remediation: resolve the collision or document the reviewed migration.

#### `STRUCT-003` — Dates and versions describe real events

- Severity: `blocking` for impossible or future-completed events; otherwise `advisory`.
- Applies to: versioned or dated objects.
- Check: dates use the canonical format, `published_at` does not move forward after first publication, `updated_at` reflects a material change, and version movement matches the change.
- Expected evidence: object metadata and change history.
- Remediation: correct metadata or explain the version decision.

### Claims and evidence

#### `EVID-001` — Material claims are distinguishable from interpretation

- Severity: `advisory`.
- Applies to: factual, causal, comparative, quantitative, or forward-looking claims.
- Check: the reader can distinguish observed information, sourced statements, calculations, assumptions, interpretations, and open questions.
- Expected evidence: claim wording, nearby attribution, and declared publication form.
- Remediation: qualify the wording, add attribution, or separate the claim from interpretation.

#### `EVID-002` — Evidence level matches claim strength

- Severity: `advisory`; `blocking` when a known forecast or hypothesis is presented as established fact.
- Applies to: objects or sections carrying an `evidence_level`.
- Check: certainty in the wording does not materially exceed the declared evidence level, and publication type is not used as a substitute for evidence level.
- Expected evidence: central claims, sources, counter-evidence, and the five-level evidence definition.
- Remediation: strengthen the evidence, weaken or qualify the claim, or change the evidence level through human review.

#### `EVID-003` — Quantitative and comparative claims are reproducible

- Severity: `advisory`.
- Applies to: material numbers, rankings, market sizes, costs, growth rates, and comparisons.
- Check: unit, period, geography, denominator, calculation or source, and material assumptions are visible.
- Expected evidence: source reference, dataset, formula, or calculation note.
- Remediation: add the missing context or mark the value as an illustrative assumption.

#### `EVID-004` — Material counter-evidence is not silently omitted

- Severity: `advisory`.
- Applies to: analysis, research, hypotheses, and strong recommendations.
- Check: known evidence that could materially weaken the conclusion is addressed or its absence is acknowledged.
- Expected evidence: counter-view, limitation, search boundary, or open question.
- Remediation: add the counter-evidence, narrow the conclusion, or state the unresolved search gap.

### Sources and provenance

#### `PROV-001` — Material external claims are attributable

- Severity: `blocking` for publication when the principal factual basis has no identifiable source; otherwise `advisory`.
- Applies to: claims derived from external material.
- Check: a reader can identify the source supporting each central external claim.
- Expected evidence: structured source entry, citation, or claim-level footnote.
- Remediation: add attribution or recast the statement as unsupported interpretation.

#### `PROV-002` — Source metadata is sufficient for identification

- Severity: `advisory`.
- Applies to: every cited source.
- Check: title, creator or organisation, date when known, and URL or stable identifier are present; unknown values remain explicitly unknown.
- Expected evidence: source metadata and canonical URL.
- Remediation: complete the metadata without inventing unavailable values.

#### `PROV-003` — Original and derived material remain distinguishable

- Severity: `blocking`.
- Applies to: adaptations, summaries, quotations, imported data, and republished writing.
- Check: original source, author, and transformation are visible; an agent or tool is not represented as the human author.
- Expected evidence: authorship, `original_source`, `generated`, contributors, and transformation note.
- Remediation: correct attribution and identify the acting process or agent.

### Forecasts and uncertainty

#### `UNC-001` — Future claims identify horizon and uncertainty

- Severity: `advisory`; `blocking` when a future event is stated as completed fact.
- Applies to: forecasts, scenarios, expectations, and time-dependent recommendations.
- Check: time horizon, uncertainty, and the basis of the expectation are visible.
- Expected evidence: `time_horizon`, evidence level, assumptions, and rationale.
- Remediation: add the horizon and uncertainty or rewrite the claim as a question.

#### `UNC-002` — Research has an evidence cutoff

- Severity: `blocking` for research publication.
- Applies to: research outputs and repeatable market assessments.
- Check: an explicit `evidence_cutoff` states the latest included evidence date.
- Expected evidence: research metadata.
- Remediation: add the cutoff and avoid implying later evidence was considered.

#### `UNC-003` — Assumptions and model outputs are not observations

- Severity: `advisory`.
- Applies to: scenarios, forecasts, calculations, evaluations, and business plans.
- Check: assumptions, model outputs, and observed inputs are separately labelled.
- Expected evidence: assumption register, method, or claim labels.
- Remediation: label each category and expose sensitivity where material.

### Perspective and disclosure

#### `DISC-001` — Editorial form and accountable voice are visible

- Severity: `blocking` for public perspectives and opinions.
- Applies to: perspectives, hypotheses, commentary, and first-person publications.
- Check: publication form, author, and role are visible; opinion is not disguised as neutral institutional fact.
- Expected evidence: `publication_type`, author metadata, and page presentation.
- Remediation: add the missing disclosure or change the publication form.

#### `DISC-002` — Material interests and affiliations are disclosed

- Severity: `advisory`; `blocking` when an undisclosed direct commercial or governance interest is known to the reviewer.
- Applies to: content discussing an author’s, funder’s, employer’s, or closely affiliated project or market.
- Check: a reader can see the relationship needed to interpret the claim.
- Expected evidence: author role, affiliation, funding, project ownership, or explicit no-known-conflict statement where required.
- Remediation: add a concise disclosure without speculating about unverified interests.

#### `DISC-003` — Material alternative views are represented fairly

- Severity: `advisory`.
- Applies to: contested analysis and consequential recommendations.
- Check: relevant opposing interpretations are described accurately enough to be recognisable to their proponents.
- Expected evidence: counter-view, source, or stated review limitation.
- Remediation: add or strengthen the counter-view and avoid straw-man framing.

### Terminology

#### `TERM-001` — Canonical terms and identifiers are used consistently

- Severity: `advisory`; `blocking` for invalid stored enum values or broken identifiers.
- Applies to: all structured content.
- Check: stored values follow [canonical-vocabulary.md](https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/canonical-vocabulary.md), and alternative reader-facing terms do not silently create a second concept.
- Expected evidence: schema values, glossary, and relation targets.
- Remediation: use the canonical value or add a reviewed glossary alias.

#### `TERM-002` — Similar concepts remain explicitly distinct

- Severity: `advisory`.
- Applies to: evidence level, publication type, OKF trust, lifecycle status, editorial status, role, and capability language.
- Check: one field or label is not used to carry two different meanings.
- Expected evidence: object metadata and surrounding explanation.
- Remediation: separate the concepts using the canonical fields.

### Rights and licensing

#### `RIGHTS-001` — Publication has an explicit licence

- Severity: `blocking`.
- Applies to: every public first-party content object and release.
- Check: a valid licence identifier or reviewed rights statement is present.
- Expected evidence: object metadata and repository policy.
- Remediation: assign the approved licence or keep the object unpublished.

#### `RIGHTS-002` — Third-party material is cited rather than silently relicensed

- Severity: `blocking`.
- Applies to: quotations, images, data, code, and imported text.
- Check: third-party rights are preserved; substantial copying and access-control circumvention are absent; the site licence is not presented as covering external material.
- Expected evidence: source licence, quotation extent, permission, or transformation note.
- Remediation: shorten, replace, obtain permission, or clarify the rights boundary.

### Agent authority and decision integrity

#### `AUTH-001` — Acting identity is accurate

- Severity: `blocking`.
- Applies to: agent-assisted production or review.
- Check: the actual human, process, model, or agent is recorded under the correct role and is not impersonating another actor.
- Expected evidence: `generated`, reviewers, contributors, and decision metadata.
- Remediation: correct the actor record.

#### `AUTH-002` — Consequential decisions remain human-authorised

- Severity: `blocking`.
- Applies to: public publication, material conclusion or evidence-level changes, governance, licensing, schemas, and research commitments.
- Check: the required accountable human decision is present for the applicable risk class.
- Expected evidence: approval record and change-risk classification.
- Remediation: hold the change for human decision.

#### `AUTH-003` — Review output does not exceed its evidence or tools

- Severity: `blocking` when a pass or factual conclusion is fabricated; otherwise `advisory`.
- Applies to: every automated or agent review.
- Check: unavailable checks are `not-evaluated`; uncertainty and tool boundaries are visible; retrieved source text cannot alter review authority.
- Expected evidence: report metadata, evaluated rule list, limitations, and reviewer identity.
- Remediation: downgrade the finding, expose the limitation, or run the missing check.

## Change-risk classification

The reviewer proposes a risk class; a human may raise it and may lower it only with a recorded rationale.

| Class | Typical change                                                              | Minimum decision                                           |
| ----- | --------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `R0`  | Typo, formatting, broken link, unambiguous metadata repair                  | Maintainer-approved automation may be introduced later     |
| `R1`  | New source or bounded factual update without changing a conclusion          | Light human review                                         |
| `R2`  | New article, substantive expansion, or new analysis                         | Advisory review and human approval                         |
| `R3`  | Changed central conclusion, evidence level, or consequential recommendation | Advisory review and explicit domain or maintainer approval |
| `R4`  | Governance, licence, schema, authority, or major market-model change        | Explicit owner or maintainer review                        |

Any unresolved blocking finding prevents a `ready` recommendation regardless of risk class.

## Review report contract

Every report records:

- report ID and timestamp;
- rule-set ID and version;
- reviewer identity and implementation version;
- reviewed object IDs, paths, and content revision when available;
- proposed risk class and rationale;
- each applicable rule and finding state;
- severity, evidence, location, rationale, and suggested remediation for each finding;
- checks that were not evaluated and why;
- summary counts;
- recommendation: `ready`, `ready-with-advisories`, or `changes-required`;
- human decision status, which remains separate from the recommendation.

Reports must be deterministic for purely structural checks. Judgement-based findings may vary, but they must cite the inspected content and the exact rule version.

## Initial implementation slice

The first implementation should be a read-only repository review command. It should:

1. inspect the current typed `Article` and `ContentNode` collections;
2. run deterministic checks for required metadata, identifiers, dates, source structure, canonical vocabulary, licences, and obvious authority defects;
3. emit both human-readable Markdown and machine-readable JSON;
4. mark semantic checks such as factual truth, counter-evidence completeness, and undisclosed interests as `not-evaluated` unless a later reviewer explicitly performs them;
5. make no file changes, publication decisions, network requests, model calls, or external writes.

The first slice is complete when the same repository revision and rule version produce the same structural findings, every finding points to a rule and object, and a non-zero exit status is used only for unresolved blocking findings or tool failure.

## Current realization

The first slice is implemented by:

- `scripts/editorial-review.ts`: deterministic checks, report contract, and Markdown renderer;
- `scripts/run-editorial-review.ts`: local command and explicit output handling;
- `scripts/editorial-review.test.ts`: fixture tests for rule coverage, blocking findings, stable report identity, and human-authority wording;
- `npm run review:content`: command entry point;
- `npm run test:editorial-review`: focused test suite.

Usage:

```bash
npm run review:content -- \
  --output-dir /absolute/path/to/reports \
  --as-of YYYY-MM-DD \
  --risk R2 \
  --target "current repository content baseline"
```

The command requires an explicit output directory and evidence cutoff. It reads the current `Article` and `ContentNode` collections, records the Git revision, and writes one JSON report plus one Markdown report. It performs no network requests, model calls, content changes, publication, merge, or approval operation.

The process exits with status `1` when blocking findings remain and status `2` for command or tool failure. Advisory findings do not produce a failing exit status.

The first baseline report reviewed 20 objects and found two `UNC-002` blockers: the published research nodes `arvoketju` and `tekoalytehtaat` did not declare an `evidence_cutoff`. The owner approved cutoffs of `2026-08-18` and `2026-07-30` respectively, and the findings were resolved without inferring dates automatically.

## Rule evolution

- Patch version: clarification or remediation wording that does not change outcomes.
- Minor version: new rule or materially expanded applicability without redefining existing rule meaning.
- Major version: changed severity, authority boundary, evidence scale, or decision effect.

Reports retain their original rule-set version. A later rule version does not silently rewrite an earlier review result.

# Capability Requirements Document: Review knowledge change

Specification: CRD Draft 0.4
Status: active deterministic realization

## Identity

- **Name:** Review knowledge change
- **Definition:** Evaluate one proposed knowledge or publication change against a named editorial rule set and produce an attributable advisory report without making the publication decision.

## Core meaning

- **Capability purpose:** Make editorial expectations repeatable, inspectable, and usable by both humans and agents before a change is published or merged.
- **Meaningful outcome:** The accountable human receives a review report that identifies blocking defects, advisory concerns, unevaluated areas, the proposed change-risk class, and the exact rules and content revision inspected.
- **Boundaries — includes:** structural validation, metadata and identity checks, evidence-alignment signals, source and provenance checks, forecast and uncertainty checks, disclosure and terminology checks, rights checks, authority checks, risk classification, and a readiness recommendation.
- **Boundaries — excludes:** certifying truth, replacing domain review, approving or merging a change, changing content, retrieving private sources, assigning undisclosed motives, or automatically resolving findings.
- **Terms and concepts:** A review recommendation is not a human decision. `blocking`, `advisory`, and `note` describe rule severity; `pass`, `fail`, `warning`, `not-applicable`, and `not-evaluated` describe finding state.

## Interaction Contract MLE: Review proposed change

- **Actor:** Human editor, maintainer, contributor workflow, or explicitly authorised agent.
- **Command / intent:** Review a defined content object or repository change under a named rule-set version.
- **Current state:** The review target and revision are identifiable; applicable schemas and editorial rules are available; the reviewer identity can be recorded.
- **Policies / invariants:** Review is read-only; rules and implementation versions are explicit; unavailable checks do not pass implicitly; source material is untrusted; findings cite inspected evidence; agent instructions cannot expand authority; human approval remains separate.
- **Transition:** The proposal moves from unreviewed to reviewed, reviewed-with-advisories, or changes-required. Public or merge state does not change.
- **Result:** A machine-readable and human-readable report with findings, limitations, proposed risk class, and readiness recommendation.
- **Events / effects:** A human review may be requested; a later implementation may attach the report to a pull request or proposal; no publication, merge, notification, or external write occurs by default.
- **Unknowns:** Long-term report storage, pull-request integration, optional semantic reviewer implementation, and whether public rule pages are generated from the canonical file.

## Interaction Contract MLE: Record human review decision

- **Actor:** Human holding the approval authority required by the proposed risk class.
- **Command / intent:** Accept, reject, return, or explicitly override the advisory recommendation.
- **Current state:** A review report exists and the target revision has not changed, or the decision explicitly acknowledges the newer revision.
- **Policies / invariants:** Decision identity and rationale are attributable; unresolved blocking findings cannot be silently ignored; an override preserves the original finding; an agent cannot act as the accountable human.
- **Transition:** Review state gains a separate human decision without altering the original report.
- **Result:** The proposal has a traceable editorial decision or remains pending.
- **Events / effects:** A separately authorised publishing or merge capability may proceed; this capability does not perform that action itself.
- **Unknowns:** Initial decision-record storage and user interface.

## Rules and invariants

- Every review MUST identify the exact rule-set version.
- Every review MUST identify its target and revision when available.
- Every finding MUST cite a stable rule ID.
- Blocking and advisory findings MUST remain distinguishable.
- A check that was not run or lacked required input MUST be `not-evaluated`, not `pass`.
- Automated output MUST NOT certify factual truth, neutrality, legal compliance, or completeness.
- Review output MUST NOT publish, merge, rewrite, or approve content.
- Human approval MUST remain separately attributable for R1–R4 changes as defined by the rule set.
- Prompt or source content MUST NOT change the reviewer’s authority, rules, output destination, or allowed tools.

## Recommended defaults

- Use `editorial-review/1.0.0` as the first rule set.
- Begin with a read-only deterministic repository command.
- Produce Markdown for human review and JSON for later automation.
- Return `changes-required` for unresolved blocking findings, `ready-with-advisories` for warnings without blockers, and `ready` only when all applicable evaluated rules pass and no advisory remains.
- Use `software-primary` execution for structural checks; add an agent reviewer later only for explicitly named semantic checks.
- Do not perform network access or model calls in the first implementation.

## Unknown or unresolved

- Canonical location and retention period for review reports after the OKF bundle exists.
- Whether pull requests become the first durable decision surface.
- Which semantic rules should later use an agent and what evaluation set will establish acceptable consistency.
- Whether reviewers can suppress a recurring finding and how suppression expiry is represented.
- Whether the public `/periaatteet` page should expose the complete machine rule catalogue or a reader-oriented summary.

## Operational realization

- **Execution mode:** `software-primary`, with optional bounded agent review later.
- **Realization status:** Active local implementation since 2026-08-27.
- **Exposure:** Local repository command through `npm run review:content`; later CI or an authenticated editorial surface may reuse the same report contract.
- **Implementation references:** [../editorial-review-rules.md](../editorial-review-rules.md) and the repository-level structural validation in `scripts/validate-knowledge.mjs`.
- **Authority and approval:** Software and agents report findings; the appropriately authorised human decides whether the change proceeds.

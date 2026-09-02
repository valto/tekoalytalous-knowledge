# Capability Requirements Document: Propose public knowledge change

Specification: CRD Draft 0.4  
Status: public foundation active; accountable review and merge remain human-controlled

## Identity

- **Name:** Propose public knowledge change
- **Definition:** Let an external or internal contributor submit a traceable change to the public knowledge base for validation, discussion, review, and an accountable human decision.

## Core meaning

- **Capability purpose:** Enable open collaboration on Tekoälytalous knowledge without granting contributors publication or merge authority.
- **Meaningful outcome:** One proposed change is publicly inspectable, linked to its author and rationale, checked against the knowledge rules, and either ready for accountable review or returned with actionable findings.
- **Boundaries — includes:** issues and pull requests, contribution metadata, source and licence declarations, structural validation, link checks, risk classification, review findings, and human disposition.
- **Boundaries — excludes:** automatic truth certification, automatic merge, website deployment, immutable release publication, access to private application secrets, accepting copyrighted source material beyond permitted use, and impersonating another contributor or reviewer.
- **Terms and concepts:** A proposal, review, merge, website publication, and immutable release are separate events. A passed automated check means structural conformance, not factual approval.

## Interaction Contract MLE: Submit knowledge proposal

- **Actor:** Public contributor, trusted contributor, maintainer, or an agent acting under its own disclosed identity.
- **Command / intent:** Propose one bounded addition, correction, source, relation, terminology change, or governance change.
- **Current state:** The public knowledge repository and contribution instructions are available; the contributor can identify the affected object or intended new object.
- **Policies / invariants:** The proposal records author identity, purpose, affected objects, source and licence information, and known uncertainty; untrusted text is treated as data rather than instructions; no secret is exposed to proposal checks; one proposal does not authorize another change.
- **Transition:** A public proposal enters an open validation and review state without changing the accepted knowledge branch.
- **Result:** The contributor and reviewers receive a stable proposal URL and structural findings.
- **Events / effects:** Discussion and revision may occur; no accepted knowledge, website page, release, or deployment changes automatically.
- **Unknowns:** Initial response-time expectation, domain-steward assignments, and whether the website form later creates an issue or a draft pull request.

## Interaction Contract MLE: Decide knowledge proposal

- **Actor:** Human with authority for the proposal's risk class.
- **Command / intent:** Accept, request changes, defer, or reject one exact proposal revision.
- **Current state:** Required checks have completed; the proposal revision and applicable rule version are identifiable; blocking findings and limitations are visible.
- **Policies / invariants:** Material content, evidence-level, schema, licence, and governance changes require the defined human approval; agents advise but do not impersonate the decision-maker; a changed proposal revision requires renewed decision; merge does not imply website publication or immutable release inclusion.
- **Transition:** The proposal becomes accepted, changes-requested, deferred, or rejected.
- **Result:** A traceable decision records the actor, revision, time, rationale, and next permitted action.
- **Events / effects:** An accepted proposal may be merged through a separate controlled action; rejected or deferred proposals remain part of public history subject to moderation and legal obligations.
- **Unknowns:** Exact moderation and appeal process for abusive or disputed proposals.

## Rules and invariants

- The accepted knowledge branch MUST be protected from direct unauthorised writes.
- Pull-request checks MUST NOT receive private website, deployment, email, or editorial-service secrets.
- A contributor MUST identify external sources and the licence or reuse basis for submitted material.
- Automated checks MUST report unsupported semantic review as not evaluated rather than passed.
- R2–R4 changes MUST retain accountable human approval under the existing risk model.
- Merge, website publication, and immutable release publication MUST remain independently traceable decisions.
- Contributor identity MUST remain the acting contributor's identity; an agent MUST NOT post as Valto or another human.

## Recommended defaults

- Use a public GitHub repository as the first realization.
- Accept issues for questions and source suggestions, and pull requests for concrete file changes.
- Provide Finnish contribution instructions and examples that do not require prior Open Knowledge Format expertise.
- Run deterministic validation for every pull request and add bounded editorial review where authorised.
- Use path-based code ownership for schemas, rules, research, glossary, and business plans.
- Start with maintainer review for all merges and add domain stewards only when participation justifies the role.

## Unknown or unresolved

- Exact branch-protection and repository-rule configuration.
- Whether issue templates accept contact details and how personal data is minimized.
- When a website-form submission may create a public artifact.

## Operational realization

- **Execution mode:** Human-primary contribution with software-primary validation and optional agent-assisted review.
- **Realization status:** Public repository, issue forms, pull-request template, code ownership and deterministic validation are active from 2026-09-02. Editorial acceptance and website publication remain separate human-controlled actions.
- **Exposure:** Public repository issues and pull requests.
- **Implementation references:** [../../CONTRIBUTING.md](../../CONTRIBUTING.md), [../../AUKTORITEETTI.md](../../AUKTORITEETTI.md), and [review-knowledge-change.md](review-knowledge-change.md).
- **Authority and approval:** Contributors propose; software validates; reviewers advise; the authorised human decides; publication remains separate.

# Capability Requirements Document: Integrate approved knowledge revision

Specification: CRD Draft 0.4  
Status: planned

## Identity

- **Name:** Integrate approved knowledge revision
- **Definition:** Bring one exact approved revision of the public knowledge repository into the website application as a validated, reviewable, and reversible local snapshot.

## Core meaning

- **Capability purpose:** Let the website publish approved public knowledge without maintaining a second independently edited copy or depending on a live external repository at runtime.
- **Meaningful outcome:** The private website repository identifies the exact public knowledge revision it uses, reproduces the approved content locally, passes validation and rendering checks, and can roll back to the prior known-good revision.
- **Boundaries — includes:** selecting a public revision, verifying identity and integrity, importing or generating a local snapshot, checking schema and links, producing a reviewable website change, preserving public URLs, and recording the source revision.
- **Boundaries — excludes:** deciding whether proposed knowledge is true, merging a public contribution, exposing private website configuration, fetching mutable content at page-request time, silently changing accepted knowledge, deploying automatically, and publishing an immutable knowledge release.
- **Terms and concepts:** The public knowledge revision is canonical for migrated content. The website snapshot is a derived input. Import approval, website merge, website deployment, and knowledge release are separate states.

## Interaction Contract MLE: Prepare website knowledge update

- **Actor:** Maintainer or explicitly authorised integration process.
- **Command / intent:** Prepare the website to use a specified accepted public knowledge revision.
- **Current state:** The requested revision exists on the accepted public branch or named release; its validation evidence is available; the website currently identifies a previous revision or the content class has an approved initial migration plan.
- **Policies / invariants:** The revision is immutable by identifier; the import is deterministic; generated files are not hand-edited competing sources; the website remains buildable without runtime GitHub access; private files and secrets never flow into the public repository; current public URLs are preserved or redirected through an approved migration.
- **Transition:** A local branch or pull request updates the pinned revision, derived snapshot, generated view models, and migration evidence while production remains unchanged.
- **Result:** Reviewers receive the source revision, changed objects, validation results, rendered differences, rollback target, and publication recommendation.
- **Events / effects:** Repository checks run; no website deployment or public knowledge release occurs automatically.
- **Unknowns:** Final snapshot directory, import manifest format, and whether early migrations copy files or generate typed view models.

## Interaction Contract MLE: Activate website knowledge update

- **Actor:** Human website maintainer after required review.
- **Command / intent:** Accept and publish the prepared knowledge revision on the website.
- **Current state:** The website update references the exact public revision; all required tests pass; content and rendering differences are reviewed; rollback is known; required editorial and publication approvals exist.
- **Policies / invariants:** Website publication does not mutate the public knowledge repository; activation does not create or replace an immutable bundle release; failures restore or retain the previous known-good snapshot; publication identity is recorded separately from knowledge identity.
- **Transition:** The website's active local snapshot changes from the prior public revision to the approved revision.
- **Result:** Public pages render the accepted knowledge revision and identify its source revision in build or publication evidence.
- **Events / effects:** Website deployment and production verification occur; an owner-visible completion update is published for material changes.
- **Unknowns:** Whether the public site later displays the knowledge revision visibly on every page or only in technical metadata.

## Rules and invariants

- Each migrated content object MUST have one canonical authoring location.
- The website MUST pin an exact commit or named immutable release, never an unqualified moving branch at runtime.
- Import MUST produce a reviewable repository change before deployment.
- The website MUST NOT require GitHub availability to serve already deployed content.
- Generated snapshots MUST NOT be edited manually as competing sources.
- Existing canonical URLs MUST be preserved unless an approved permanent redirect is included.
- Import validation MUST include Open Knowledge Format structure, internal relations, licences, required metadata, rendering compatibility, and generated-file drift.
- Rollback MUST identify the prior known-good public knowledge revision and website revision.

## Recommended defaults

- Use a normal vendored snapshot or generated typed projection rather than a Git submodule.
- Let the public repository create a signed or checksummed release or revision manifest.
- Let an authorised automation open a pull request in the private website repository; do not push directly to its main branch.
- Migrate one content class at a time, beginning with directly authored Open Knowledge Format concepts that already have stable identity and validation.
- Keep legacy generated concepts visibly read-only until their canonical authoring source is migrated.

## Unknown or unresolved

- Initial migrated content class.
- Whether the importer lives in the public or private repository.
- Authentication method for opening the private website pull request.
- Retention policy for historical vendored snapshots.
- Exact rendering contract for producer-specific extensions.

## Operational realization

- **Execution mode:** Software-primary preparation and validation; human-primary approval and deployment.
- **Realization status:** Planned; the public knowledge repository exists, but the website does not yet import an exact accepted revision from it.
- **Exposure:** Maintainer workflow and reviewable private website pull request.
- **Implementation references:** [../../AUKTORITEETTI.md](../../AUKTORITEETTI.md) and [propose-public-knowledge-change.md](propose-public-knowledge-change.md).
- **Authority and approval:** Public contributors and maintainers can produce accepted knowledge revisions; the website maintainer separately approves integration and publication.

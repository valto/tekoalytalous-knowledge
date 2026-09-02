# Canonical vocabulary and modelling decisions

Status: authoritative
Version: 1.1
Adopted: 2026-08-26

This document resolves terminology differences between the original application, the August 2026 planning drafts, and future knowledge-base work.

## Separation of concerns

Three independent concepts must not be stored in one field:

| Concept | Question | Field |
| --- | --- | --- |
| Content kind | What kind of knowledge object is this? | `content_type` |
| Publication form | What editorial form does this article use? | `publication_type` |
| Evidence level | How strongly is the central factual or forward-looking claim supported? | `evidence_level` |

An article may therefore be a `publication_type: hypothesis` while its current evidence level is `mahdollinen`. “Hypothesis” is not itself an evidence level.

## Evidence levels

The canonical values remain compatible with the current application:

| Value | Finnish label | Meaning |
| --- | --- | --- |
| `havaittu` | Havaittu | Directly observable and adequately supported |
| `vahva-signaali` | Vahva signaali | Multiple observations or strong evidence point in the same direction |
| `todennakoinen` | Todennäköinen | A reasoned expectation, but not established fact |
| `mahdollinen` | Mahdollinen | A plausible scenario or interpretation |
| `avoin-kysymys` | Avoin kysymys | Evidence does not support a directional conclusion |

Perspectives and opinions are identified through content or publication type, authorship, and disclosure—not by adding a sixth evidence level.

## Content types

Current `ContentNode` values remain valid:

`topic`, `research`, `analysis`, `perspective`, `glossary`, `tool`, `scenario`, `source`.

Future schema work may add `article` only if articles become first-class knowledge nodes. V1.1 may use a separate `Article` model to avoid destabilising existing map routes.

## Publication types

Recommended article values:

`article`, `analysis`, `perspective`, `hypothesis`, `research-commentary`, `update`.

The reader-facing Finnish labels are maintained separately from stored identifiers.

## Identifiers and URLs

- An OKF `Concept ID` is the bundle-relative file path without the `.md` suffix.
- `id` remains a Tekoälytalous extension for permanent application identity across a possible file move.
- `slug` is the durable human-readable URL segment.
- Relations should ultimately target `id`, not title text.
- A slug change requires a permanent redirect and must not change the object ID.
- Random identifiers and dates must not be exposed in canonical article URLs.

OKF consumers discover graph relationships through normal Markdown links. Tekoälytalous may also store typed relations as an extension, but every important relation should remain intelligible through the document body or a standard link.

## Dates

All stored dates use ISO 8601.

- Date only: `YYYY-MM-DD`.
- OKF timestamp fields such as `generated.at`, `verified[].at`, `stale_after`, and source `last_modified` use an ISO 8601 datetime with an explicit UTC offset.
- Other audit timestamps should use UTC with `Z` unless a different offset is materially meaningful.
- `published_at` never changes after first publication.
- `updated_at` changes only for a material public-content update, not formatting-only changes.
- Research outputs include an explicit `evidence_cutoff` date.
- Placeholder future dates must be labelled as examples and must not appear as completed events.

## Versions

- `1.0`: first public version.
- `1.x`: source, figure, metadata, or bounded wording update without changing the main conclusion.
- `2.0`: material change to the conclusion, structure, methodology, or market model.

Git commits provide file history. Content versions communicate meaningful editorial change to readers. They are related but not interchangeable.

## Relations

The initial relation vocabulary is:

- `related_to`;
- `depends_on`;
- `supports`;
- `challenges`;
- `updates`;
- `contrasts_with`;
- `derived_from`;
- `replaces`.

V1.1 may retain the current slug-based `related_topics` field. The portable knowledge-base schema should use typed relations with stable IDs.

## People and responsibility

- `authors`: accountable authors of the published content.
- `contributors`: people who materially improved data or content.
- `reviewers`: people or agents that performed a recorded review.
- `decision_by`: human accountable for an editorial or governance decision.

Agent identity must be recorded as the acting agent. An agent must not be represented as a human author or decision-maker.

For OKF trust metadata, actors use the v0.2 convention:

- `human:<id>` for a person;
- `process:<id>` for an automated process;
- `<producer>/<version>` for an agent or tool.

OKF trust tiers are derived from `verified`; they are not the same as Tekoälytalous editorial `evidence_level`.

## Licensing

The intended default for original narrative content is CC BY 4.0, subject to an explicit repository-level licensing decision before open contribution begins. Code uses a suitable software licence. External source material retains its own rights and is cited rather than imported by default.

## Glossary lifecycle

The public glossary distinguishes three terminology roles:

- the Finnish preferred term is the canonical label used in navigation and current editorial text;
- `also_known_as` records accepted synonyms, established abbreviations, and other names readers may search for;
- `previous_terms` records superseded, imprecise, or discouraged terms together with a Finnish explanation of why they should not be used as the preferred label.

Previous terms remain searchable so that old links, drafts, and reader vocabulary still lead to the current definition. A terminology change does not silently rewrite historical source material. Current first-party pages should adopt the preferred term, while a version note records the transition.

## Open knowledge format

Tekoälytalous adopts the official [Open Knowledge Format v0.2](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md) maintained in the GoogleCloudPlatform repository.

The bundle follows these standard conventions:

- every concept is a UTF-8 Markdown file with YAML frontmatter;
- `type` is the only always-required concept field;
- `title`, `description`, `resource`, and `tags` are recommended;
- `sources`, `generated`, `verified`, `status`, and `stale_after` carry provenance, trust, and lifecycle information;
- per-claim source attribution uses Markdown footnotes keyed to `sources[].id`;
- `index.md` and `log.md` are reserved filenames;
- the bundle-root `index.md` declares `okf_version: "0.2"`;
- unknown producer extensions are preserved.

Tekoälytalous-specific fields—including `id`, `slug`, `content_type`, `publication_type`, `evidence_level`, editorial dates and versions, authorship, licensing, and typed relations—are producer extensions.

OKF `status` uses `draft`, `stable`, or `deprecated`. If the application needs a separate publication workflow state, it is stored as `publication_status`; it must not overload OKF lifecycle status.

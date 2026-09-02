# Open Knowledge Format pilot

Status: pilot implemented; public standalone validation added 2026-09-02
OKF version: `0.2`
Adopted: 2026-08-27
Implemented: 2026-08-27

## Outcome

The pilot proves that representative Tekoälytalous knowledge can be represented as a conformant, human-readable Open Knowledge Format bundle without changing the current website source of truth or losing domain meaning. The public repository now validates the committed bundle independently from the private website application.

The pilot is a representation and validation exercise, not a new executable capability. It therefore did not require a new CRD. Bundle publication was implemented separately through capability `knowledge.release-bundle` in V2.1, producing the verified `knowledge-v0.1.0` release.

## Scope

The bundle root is `knowledge/`. The five generated pilot concepts are:

| Concept                                           | Why selected                                                                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `research/arvoketju.md`                           | Rich research node with sections, evidence levels, sources, relations, risks, questions, version history, and evidence cutoff |
| `research/tekoalytehtaat.md`                      | Second research node proving cross-links and independent freshness metadata                                                   |
| `articles/tieto-on-tekoalyn-kayttojarjestelma.md` | Authored hypothesis with public URL, author role, related topics, and an original LinkedIn source                             |
| `glossary/tekoalyagentti.md`                      | Compact bilingual glossary concept with aliases and rationale                                                                 |
| `rules/editorial-review-1.0.0.md`                 | Versioned governance asset proving that OKF knowledge and CRD capability semantics remain separate                            |

Out of scope:

- replacing `src/data/content.ts` or `docs/editorial-review-rules.md` as canonical sources;
- changing website routes or rendering pages from Markdown;
- publishing a named downloadable release;
- automatic synchronization after every content edit;
- model calls, network retrieval, source mirroring, or semantic verification;
- representing all current content.

The bundle may contain later directly authored concepts. ML-1 adds four approved but unpublished concepts. ML-2 contains five approved and website-published role concepts plus three unpublished competing hypotheses under `knowledge/market-models/`; these are validated as ordinary Open Knowledge Format concepts but are not generated from the original five-object TypeScript/documentation mapping.

## Mapping

| Concern              | OKF v0.2 field                                                                | Tekoälytalous treatment                                                                          |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Concept kind         | `type`                                                                        | `Research`, `Article`, `Glossary Term`, or `Editorial Rule Set`                                  |
| Display              | `title`, `description`, `resource`, `tags`                                    | Public title, summary, canonical website URL, and stable discovery tags                          |
| Production           | `generated`                                                                   | `process:tekoalytalous-okf-pilot`; records conversion of the current canonical source            |
| Verification         | `verified`                                                                    | Present only where an attributable verification event is known; absence remains OKF `unverified` |
| Lifecycle            | `status`                                                                      | OKF `stable`; editorial publication state remains separate                                       |
| Provenance           | `sources`                                                                     | External sources require `resource`; stable `id` values support later claim footnotes            |
| Identity             | extension `id` and `slug`                                                     | Preserved independently from the OKF Concept ID, which is the bundle-relative file path          |
| Editorial confidence | extension `evidence_level`                                                    | Never mapped to OKF trust tier                                                                   |
| Publication workflow | extension `publication_status`                                                | Never mapped to OKF lifecycle `status`                                                           |
| Content shape        | extensions such as `sections`, `paragraphs`, `related`, and `version_history` | Preserves a lossless import path to the current typed model                                      |
| Licence              | extension `license`                                                           | Required by Tekoälytalous policy                                                                 |

All frontmatter values use the JSON-compatible subset of YAML. This keeps the files valid YAML while allowing the dependency-free pilot validator to parse and round-trip every known and unknown field exactly.

## Trust interpretation

Published content is not automatically marked `verified`. Website publication, editorial evidence level, and OKF verification answer different questions:

- `publication_status: published` means the website publishes the object;
- `evidence_level` states the editorial confidence of its central claim;
- OKF `verified` records an attributable check against sources or the underlying resource;
- the absence of `verified` means OKF `unverified`, not false or unpublished.

The rule-set concept carries a human verification event because Valto explicitly approved `editorial-review/1.0.0`. The other pilot concepts intentionally remain without `verified` until an equally attributable verification event exists.

## Validation

In the original website repository, `npm run validate:okf` checks the generated mapping. In this public repository, `npm run validate` checks:

- root `okf_version: "0.2"`;
- reserved `index.md` and `log.md` structure;
- parseable frontmatter and non-empty `type` for every concept;
- required nested OKF fields when `sources`, `generated`, `verified`, `status`, or `stale_after` are present;
- actor and timestamp syntax;
- internal Markdown links;
- exact round-trip preservation of unknown producer extension fields;
- unique concept identifiers and slugs;
- absence of links to the private application repository or service-specific environments.

The public validator performs no network requests and does not judge semantic truth. Exact equality with the private generating source remains a website-repository responsibility until each generated content class is deliberately migrated.

## Rollback

Delete `knowledge/`, the OKF pilot scripts, and the related package scripts. The application continues to use its existing TypeScript and documentation sources, so rollback requires no content migration or live-service change.

## Acceptance criteria

- Five representative concepts are present and conform to OKF v0.2.
- Root and directory indexes support progressive disclosure.
- The bundle log records pilot creation.
- External sources use valid `sources[].resource` values.
- Research links resolve inside the bundle where a selected target exists.
- Unknown extensions survive parse and serialization.
- The five concepts reproduce the selected canonical objects without loss.
- Existing website build and editorial review remain unchanged.

# Open Knowledge Format and Capability Requirements Documents

Status: authoritative architecture decision
Version: 1.0
Adopted: 2026-08-26

## Decision

Tekoälytalous uses two complementary open documentation models:

- [Open Knowledge Format v0.2](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md) for portable knowledge concepts and bundles.
- [Capability Requirements Documents](https://valto.github.io/crd/) Draft 0.4 for technology-independent definitions of executable capabilities.

They solve different problems and must not be collapsed into one schema.

## Responsibility boundary

| Layer | Primary question | Examples |
| --- | --- | --- |
| OKF concept | What knowledge exists, where did it come from, who verified it, and is it current? | Article, source, hypothesis, market model, glossary term, rule, evaluation result |
| CRD | What complete ability must remain meaningful across implementations? | Publish an article, assess a source, approve source handling, review a knowledge change |
| Operational realization | How is the capability currently delivered? | TanStack route, server function, agent workflow, GitHub Action, MCP tool |
| Git governance | How is a proposed change reviewed, accepted, released, and traced? | Pull request, required checks, merge approval, release tag |

## Why both are needed

OKF gives Tekoälytalous a portable representation for knowledge. It standardises minimal structure, provenance, production and verification actors, lifecycle, freshness, indexes, logs, and links while permitting domain extensions.

CRD protects capability meaning from becoming coupled to one screen, endpoint, agent prompt, or vendor. Its required core records purpose, boundaries, meaningful outcome, interaction contracts, rules, defaults, and unresolved questions.

For example:

- an article is an OKF concept;
- “Publish article” is a capability defined by a CRD;
- `/kirjoitukset/{slug}` is one UI realization of that capability;
- a future API or agent publishing workflow is another realization governed by the same CRD.

## What belongs in OKF

- articles and research publications;
- source records and reference material;
- claims, hypotheses, and counter-hypotheses;
- market models and actor evaluations;
- business plans and assumption registers;
- editorial and governance rules;
- glossary and concept definitions;
- CRDs when they are published as part of the knowledge bundle.

## What should receive a CRD

A CRD is useful when the project is defining a complete ability with an actor, intent, state, rules, outcome, and effects. Current candidates are tracked in [capabilities/README.md](capabilities/README.md).

CRDs are required before implementing:

- article publication;
- source submission;
- source assessment;
- source-handling decisions;
- knowledge-change review;
- knowledge-bundle release;
- agent-maintained knowledge proposals;
- repeatable market-actor evaluation as an operational workflow.

## What should not receive a CRD

Do not create a CRD merely for:

- an article, source, claim, hypothesis, glossary term, or dataset;
- a TypeScript type, database table, button, component, or endpoint in isolation;
- a broad product area without one meaningful outcome;
- an implementation choice that belongs in operational realization notes.

Those artifacts may support a capability, but they are not automatically capabilities.

## CRD and OKF composition

When the OKF bundle is introduced, a CRD may be represented as a concept:

```yaml
---
type: Capability Requirements Document
title: Publish article
description: Make approved editorial content independently readable at a stable public URL.
status: stable
generated:
  by: human:valto-loikkanen
  at: 2026-08-26T00:00:00+03:00
tags: [capability, publishing]
crd_version: "0.4"
---
```

The Markdown body then contains the CRD-required sections. `crd_version` is a Tekoälytalous producer extension. OKF provides storage and trust metadata; CRD provides capability semantics.

## Implementation rule

Before implementing a new capability:

1. Identify its Capability MLE and adjacent boundaries.
2. Create or update its CRD.
3. Resolve blocking unknowns or leave them explicitly out of scope.
4. Choose the execution mode and operational realization.
5. Implement and test against the interaction contracts and invariants.
6. Update the CRD only when capability meaning changes; record implementation detail in operational documentation.

This rule does not require a CRD for routine refactoring or for a technical primitive that does not form a complete capability.

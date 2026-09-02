---
type: Market Hypothesis
title: Alustapinot imevät paikallisen operaattorin
description: ML-2-vastahypoteesi, jossa integroidut pilvi- ja agenttialustat tekevät erillisestä paikallisesta operaattorista tarpeettoman useimmille asiakkaille.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/knowledge/market-models/platform-stacks-absorb-local-operator.md
tags:
  - tekoalytalous
  - market-lab
  - ai-operator
  - counter-hypothesis
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-08-31T00:00:00+03:00
status: draft
sources:
  - id: aws-agentcore-2026
    resource: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html
    title: What is Amazon Bedrock AgentCore?
    author: team:amazon-web-services
    source_year: "2026"
  - id: microsoft-foundry-agent-service-2026
    resource: https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview
    title: Microsoft Foundry Agent Service overview
    author: team:microsoft
    source_year: "2026"
  - id: google-vertex-agent-engine-2026
    resource: https://cloud.google.com/vertex-ai/generative-ai/docs/agent-engine/overview
    title: Vertex AI Agent Engine overview
    author: team:google-cloud
    source_year: "2026"
id: ml2-c1-platform-stacks-absorb-local-operator
publication_status: unpublished
editorial_status: review_required
methodology: market-lab/1.1
claim: Integrated cloud and agent platforms bundle enough runtime, identity, memory, tooling, observability, governance, procurement, and support to eliminate a distinct local operator role for most customers.
evidence_level: mahdollinen
evidence_cutoff: 2026-08-31
next_review_at: 2026-11-30
review_status: planned
time_horizon: 1-3
version: "0.1"
license: CC BY 4.0
drivers:
  - platform-bundling
  - installed-identity-data-and-cloud-base
  - unified-procurement-and-support
  - managed-agent-runtime-capabilities
assumptions:
  - Platform-native controls are sufficient for most customer risk profiles.
  - Procurement simplicity outweighs supplier-neutral portability.
  - Local support can be supplied through platform partner channels without an independent control layer.
falsification_conditions:
  - Customers repeatedly require cross-platform responsibility that platform-native services cannot provide.
  - Independent operators demonstrate lower total operating cost and credible supplier switching.
  - Regulation or customer policy requires meaningful separation from the primary platform supplier.
related:
  - type: part_of
    target: /market-models/local-ai-operator-v1.md
  - type: refines
    target: /market-models/platforms-absorb-operator-layer.md
  - type: contrasts_with
    target: /market-models/accountable-operator-role-emerges.md
---

# Alustapinot imevät paikallisen operaattorin

Pilvi- ja agenttialustat tarjoavat jo hallittuja suoritusalustoja, identiteettiä, muistia, työkaluja, valvontaa ja hallintaa. Jos nämä ominaisuudet, kumppanituki ja yksi hankintasuhde riittävät useimmille asiakkaille, erillinen operaattori jää pieneksi poikkeusrooliksi.

Hypoteesia vastaan puhuu näyttö siitä, että asiakas tarvitsee aidosti alustariippumatonta vastuuta, kontekstin siirrettävyyttä tai toimialakohtaista jatkuvuutta, jota pääalusta ei voi uskottavasti valvoa itsestään riippumattomasti.

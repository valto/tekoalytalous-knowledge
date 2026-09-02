---
type: Market Model
title: Tekoälytalouden markkinoiden muodostumismalli v1.0
description: Falsifioitava malli siitä, mitkä tekoälytalouden kerrokset keskittyvät ja mitkä säilyvät hajautuneina, alueellisina, toimialakohtaisina tai organisaatioiden sisäisinä.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/market-formation-model-v1.md
tags:
  - tekoalytalous
  - market-lab
  - market-model
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-08-31T00:00:00+03:00
status: stable
sources:
  - id: iea-energy-ai-2025
    resource: https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary
    title: Key Questions on Energy and AI
    author: team:international-energy-agency
    source_year: "2025"
  - id: stanford-ai-index-rd-2026
    resource: https://hai.stanford.edu/ai-index/2026-ai-index-report/research-and-development
    title: 2026 AI Index — Research and Development
    author: team:stanford-hai
    source_year: "2026"
  - id: stanford-ai-index-performance-2026
    resource: https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance
    title: 2026 AI Index — Technical Performance
    author: team:stanford-hai
    source_year: "2026"
  - id: uk-cma-cloud-2025
    resource: https://assets.publishing.service.gov.uk/media/6888af191dd2f1da1d2c2f3c/Cloud_services_market_investigation_-_summary_of_final_decision.pdf
    title: Cloud services market investigation — summary of final decision
    author: team:uk-competition-and-markets-authority
    source_year: "2025"
  - id: eurostat-ai-2025
    resource: https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2
    title: 20% of EU enterprises use AI technologies
    author: team:eurostat
    source_year: "2025"
  - id: eurostat-cloud-2026
    resource: https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260203-1
    title: Cloud computing in the EU — a threefold increase since 2014
    author: team:eurostat
    source_year: "2026"
  - id: eu-data-act-2025
    resource: https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained
    title: Data Act explained
    author: team:european-commission
    source_year: "2025"
  - id: eu-ai-act-2026
    resource: https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act
    title: Navigating the AI Act
    author: team:european-commission
    source_year: "2026"
  - id: nist-agent-standards-2026
    resource: https://www.nist.gov/caisi/ai-agent-standards-initiative
    title: AI Agent Standards Initiative
    author: team:nist
    source_year: "2026"
  - id: eurohpc-ai-factories-2026
    resource: https://eurohpc-ju.europa.eu/ai-factories_en
    title: AI Factories
    author: team:eurohpc
    source_year: "2026"
id: ml1-ai-economy-market-formation-v1
slug: ai-economy-market-formation-v1
publication_status: unpublished
editorial_status: approved
approved_by: human:valto-loikkanen
approved_at: 2026-08-31
methodology: market-lab/1.1
evidence_level: todennakoinen
evidence_cutoff: 2026-08-31
next_review_at: 2026-11-30
review_status: planned
time_horizon: 1-3
geography: global-with-eu-focus
version: "1.0"
license: CC BY 4.0
roles:
  - id: R1
    name: model-producers
    responsibility: Train, evaluate, maintain, and expose general or specialist models.
    base_case_structure: concentrated-global-and-regional
  - id: R2
    name: token-compute-providers
    responsibility: Convert energy and hardware capacity into available inference and training.
    base_case_structure: highly-concentrated-with-public-niches
  - id: R3
    name: context-memory-infrastructure
    responsibility: Store, govern, retrieve, and move durable customer context.
    base_case_structure: contested-infrastructure-layer
  - id: R4
    name: ai-operators
    responsibility: Provide accountable model access, continuity, billing, support, and policy.
    base_case_structure: regional-sectoral-or-local
  - id: R5
    name: agentic-system-builders-integrators
    responsibility: Design workflows, agents, controls, and enterprise integration.
    base_case_structure: fragmented-with-consolidation-pressure
  - id: R6
    name: vertical-ai-products-services
    responsibility: Deliver outcomes for a defined customer problem or sector.
    base_case_structure: numerous-category-markets
  - id: R7
    name: internal-organisational-ai-operations
    responsibility: Own policies, context, adoption, vendor portfolio, and operating outcomes.
    base_case_structure: distributed-inside-adopting-organisations
forces:
  - id: F1
    name: capital-intensity
    direction: concentration
  - id: F2
    name: energy-grid-chip-constraints
    direction: concentration-with-geographic-niches
  - id: F3
    name: utilization-economies
    direction: concentration
  - id: F4
    name: model-convergence-and-falling-prices
    direction: commoditization
  - id: F5
    name: context-ownership-and-portability
    direction: distribution-if-portable
  - id: F6
    name: identity-authorization-and-audit
    direction: customer-near-operating-layer
  - id: F7
    name: regulation-and-sector-obligations
    direction: specialist-and-local-capability
  - id: F8
    name: interoperability-and-switching-rules
    direction: reduced-lock-in-if-effective
  - id: F9
    name: trust-language-and-support
    direction: regional-and-relationship-based
  - id: F10
    name: domain-workflow-integration
    direction: vertical-and-internal
  - id: F11
    name: sovereignty-and-resilience
    direction: regional-alternatives
  - id: F12
    name: platform-bundling-and-installed-base
    direction: integration-into-global-platforms
assumptions:
  - id: A1
    statement: Frontier training and hyperscale inference retain material scale economies.
    confidence: high
  - id: A2
    statement: Customers retain meaningful control over durable context and identity.
    confidence: medium
  - id: A3
    statement: Multi-model or multi-provider operation remains valuable.
    confidence: medium
  - id: A4
    statement: Governance and support remain costly enough to sustain specialist roles.
    confidence: medium
  - id: A5
    statement: Regulation and portability rules have practical market effects.
    confidence: medium
  - id: A6
    statement: Organisations keep strategic AI operating responsibility.
    confidence: medium-high
related:
  - type: supports
    target: /market-models/scale-concentrates-context-distributes.md
  - type: challenges
    target: /market-models/platforms-absorb-operator-layer.md
  - type: challenges
    target: /market-models/open-sovereign-infrastructure-diffuses-power.md
---

# Tekoälytalouden markkinoiden muodostumismalli v1.0

Mallin pääväite on, että suuret kiinteät kustannukset, niukat fyysiset syötteet ja korkean käyttöasteen edut keskittävät mallien ja laskennan tuotantoa. Asiakaskontekstiin, identiteettiin, hallintaan, toimialaintegraatioon, kieleen, luottamukseen ja jatkuvaan operointiin sidotut tehtävät säilyvät todennäköisemmin hajautuneina, alueellisina, toimialakohtaisina tai organisaatioiden sisäisinä.

Roolit kuvaavat vastuita, eivät välttämättä erillisiä yrityksiä. Sama toimija voi yhdistää useita rooleja, ja yksi vastuu voi jakautua toimittajien sekä asiakkaan oman organisaation välillä.

## Hypoteesit

- [H1 — Mittakaava keskittää, konteksti ja operointi hajauttavat](scale-concentrates-context-distributes.md)
- [C1 — Integroidut alustat imevät operaattori- ja kontekstikerrokset](platforms-absorb-operator-layer.md)
- [C2 — Avoin ja suvereeni infrastruktuuri hajauttaa tuotantovaltaa](open-sovereign-infrastructure-diffuses-power.md)

## Epävarmuus

Näyttö on vahvinta infrastruktuurin keskittymisestä ja heikointa erillisen tekoälyoperaattorimarkkinan syntymisestä. ML-2:n tehtävä on testata, tuottaako operaattorikerros asiakkaalle riittävästi jatkuvuutta, hallintaa ja kustannusetua ollakseen pysyvä markkinarooli.

## Seuraava arviointi

Seuraava arviointi on suunniteltu päivälle 2026-11-30. Aikaisempi arviointi käynnistyy, jos mallien tai pilven keskittymisessä, EU:n vaihtosäännöissä, tekoälytehtaiden kapasiteetissa, agenttien identiteettistandardeissa tai yritysten tekoälyn käyttöönotossa tapahtuu olennainen muutos.

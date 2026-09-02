---
type: Market Hypothesis
title: Mittakaava keskittää, konteksti ja operointi hajauttavat
description: Perushypoteesi tekoälytalouden tuotanto- ja asiakasläheisten kerrosten erilaisesta markkinarakenteesta.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/knowledge/market-models/scale-concentrates-context-distributes.md
tags:
  - tekoalytalous
  - market-lab
  - hypothesis
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
  - id: uk-cma-cloud-2025
    resource: https://assets.publishing.service.gov.uk/media/6888af191dd2f1da1d2c2f3c/Cloud_services_market_investigation_-_summary_of_final_decision.pdf
    title: Cloud services market investigation — summary of final decision
    author: team:uk-competition-and-markets-authority
    source_year: "2025"
  - id: nist-agent-standards-2026
    resource: https://www.nist.gov/caisi/ai-agent-standards-initiative
    title: AI Agent Standards Initiative
    author: team:nist
    source_year: "2026"
id: ml1-h1-scale-concentrates-context-distributes
publication_status: unpublished
editorial_status: approved
approved_by: human:valto-loikkanen
approved_at: 2026-08-31
methodology: market-lab/1.1
claim: Scale-intensive AI production tends to concentrate while context, governance, integration, and operating responsibility remain more distributed.
evidence_level: todennakoinen
evidence_cutoff: 2026-08-31
next_review_at: 2026-11-30
review_status: planned
time_horizon: 1-3
version: "1.0"
license: CC BY 4.0
drivers:
  - capital-intensity
  - energy-grid-chip-constraints
  - utilization-economies
  - context-ownership-and-portability
  - identity-authorization-and-audit
  - trust-language-and-support
assumptions:
  - Frontier production retains material scale economies.
  - Customer context remains governable outside one model supplier.
  - Operating accountability cannot be fully reduced to model API access.
falsification_conditions:
  - Small providers repeatedly match hyperscale cost, reliability, and capacity.
  - One integrated platform becomes the dominant trusted operator across customer segments.
  - Customer context becomes economically inseparable from model and productivity platforms.
related:
  - type: derived_from
    target: /market-models/ai-economy-market-formation-v1.md
  - type: contrasts_with
    target: /market-models/platforms-absorb-operator-layer.md
  - type: contrasts_with
    target: /market-models/open-sovereign-infrastructure-diffuses-power.md
---

# Mittakaava keskittää, konteksti ja operointi hajauttavat

## Väite

Edistyneiden mallien koulutus, suurimittainen päättely ja niitä palveleva fyysinen infrastruktuuri keskittyvät suhteellisen harvoille globaaleille tai alueellisille toimijoille. Asiakaskontekstin, identiteetin, hallinnan, integraation, tuen ja jatkuvan operoinnin vastuut jakautuvat useammille toimijoille ja asiakkaan omiin organisaatioihin.

## Perustelut

- Energia, laskenta, sirut, rahoitus ja käyttöaste suosivat mittakaavaa.
- Pilvimarkkinoilla on jo korkea keskittyminen ja todettuja vaihtamisen esteitä.
- Konteksti, identiteetti, auditointi ja toimialakohtainen vastuu eivät ratkea pelkällä mallipääsyllä.
- Kieli, luottamus, paikallinen sääntely ja olemassa olevat asiakassuhteet suosivat asiakasläheistä kapasiteettia.

## Mikä muuttaisi johtopäätöstä?

Hypoteesi heikkenee, jos integroidut alustat pystyvät tarjoamaan saman operointivastuun luotettavammin ja halvemmalla kaikissa keskeisissä asiakasryhmissä, tai jos konteksti ja identiteetti eivät käytännössä ole siirrettävissä alustojen välillä.

## Vastahypoteesit

- [Integroidut alustat imevät operaattorikerroksen](platforms-absorb-operator-layer.md)
- [Avoin ja suvereeni infrastruktuuri hajauttaa tuotantovaltaa](open-sovereign-infrastructure-diffuses-power.md)

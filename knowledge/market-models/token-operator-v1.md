---
type: Market Role Study
title: Tokenoperaattori v0.1
description: Avoimia malleja ajava tekoälymallien työkapasiteetin operaattori, joka ei ylläpidä asiakkaan pysyvää tietoydintä.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/tokenoperaattori.md
tags: [tekoalytalous, tokenoperaattori, laskenta, avoimet-mallit]
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-09-01T00:00:00+03:00
status: stable
sources:
  - id: together-pricing-2026
    resource: https://www.together.ai/pricing
    title: Pricing
    author: team:together-ai
    source_year: "2026"
  - id: runpod-pricing-2026
    resource: https://www.runpod.io/pricing
    title: GPU Cloud Pricing
    author: team:runpod
    source_year: "2026"
  - id: open-source-ai-definition-2024
    resource: https://opensource.org/ai/open-source-ai-definition
    title: Open Source AI Definition 1.0
    author: team:open-source-initiative
    source_year: "2024"
id: ml2-token-operator-v1
slug: token-operator-v1
publication_status: published
editorial_status: approved
approved_by: human:valto-loikkanen
approved_at: 2026-09-01T00:00:00+03:00
methodology: market-lab/1.1
evidence_level: mahdollinen
evidence_cutoff: 2026-09-01
next_review_at: 2026-12-01
review_status: planned
geography: Finland-with-global-price-benchmarks
version: "0.1"
license: CC BY 4.0
claim: Avoimia malleja ajava, asiakkaan pysyvästä tiedosta rajattu kapasiteettioperaattori voi muodostaa erillisen infrastruktuurimarkkinan.
service_boundary:
  persists_customer_information: false
  processes_authorized_requests: true
  retains_content_logs_by_default: false
  retains_usage_and_security_metadata: bounded
revenue_units:
  - million-tokens
  - accelerator-hours
  - reserved-capacity
  - private-capacity-pool
falsification_conditions:
  - Paikallinen kapasiteetti ei saavuta globaalin hinnan ja asiakkaan paikallisuusarvon välistä kestävää tasoa.
  - Käyttöaste jää liian alhaiseksi laiterahoituksen kattamiseen.
  - Avoimien mallien lisenssit tai suorituskyky eivät riitä asiakkaiden tehtäviin.
related:
  - type: part_of
    target: /market-models/local-ai-operator-v1.md
  - type: derived_from
    target: /research/arvoketju.md
  - type: related_to
    target: /research/tekoalytehtaat.md
---

# Tokenoperaattori

Tokenoperaattori myy avoimilla malleilla tuotettua tekoälymallin työkapasiteettia. Se ei muodosta asiakkaalle pysyvää tietovarantoa. Kilpailu perustuu käyttöasteeseen, hintaan, mallien toimivuuteen, sijaintiin, energiaan, toimitusvarmuuteen ja turvalliseen tilapäiskäsittelyyn.

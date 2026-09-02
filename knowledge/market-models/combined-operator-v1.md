---
type: Market Role Study
title: Yhdistelmäoperaattori v0.1
description: Tokenkapasiteetin ja omistajakohtaisen tiedon saman asiakassuhteen kautta tarjoava operaattori.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/yhdistelmaoperaattori.md
tags: [tekoalytalous, yhdistelmaoperaattori, palvelukerrokset]
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-09-01T00:00:00+03:00
status: stable
sources:
  - id: eu-data-act-2025
    resource: https://digital-strategy.ec.europa.eu/fi/factpages/data-act-explained
    title: Data Act explained
    author: team:european-commission
    source_year: "2025"
  - id: internet-society-network-history
    resource: https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/
    title: A Brief History of the Internet and Related Networks
    author: team:internet-society
    source_year: "2026"
id: ml2-combined-operator-v1
slug: combined-operator-v1
publication_status: published
editorial_status: approved
approved_by: human:valto-loikkanen
approved_at: 2026-09-01T00:00:00+03:00
methodology: market-lab/1.1
evidence_level: mahdollinen
evidence_cutoff: 2026-09-01
next_review_at: 2026-12-01
review_status: planned
geography: Finland
version: "0.1"
license: CC BY 4.0
claim: Yksi toimija voi tarjota tokenkapasiteetin ja tietoytimen, jos asiakas voi vaihtaa kumman tahansa kerroksen itsenäisesti.
required_separation:
  - independent-information-export
  - replaceable-token-provider
  - separate-pricing-lines
  - separate-processing-and-storage-responsibilities
falsification_conditions:
  - Yhden sopimuksen etu ei kata yhdistämisen kustannusta.
  - Kerrosten erottaminen ei onnistu teknisesti tai sopimuksellisesti.
  - Asiakkaat hankkivat kapasiteetin ja tiedon järjestelmällisesti erillisiltä toimijoilta.
related:
  - type: part_of
    target: /market-models/local-ai-operator-v1.md
  - type: combines
    target: /market-models/token-operator-v1.md
  - type: combines
    target: /market-models/information-operator-v1.md
---

# Yhdistelmäoperaattori

Yhdistelmäoperaattori tarjoaa asiakkaalle yhden sopimuksen ja vastuutahon, mutta säilyttää tokenkapasiteetin ja omistajan tietoytimen erillisinä. Yhdistelmä on hyväksyttävä vain, jos asiakas voi kilpailuttaa ja vaihtaa kerrokset itsenäisesti.

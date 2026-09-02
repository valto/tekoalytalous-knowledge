---
type: Market Role Study
title: Virtuaalioperaattori v0.1
description: Asiakassuhteen, tuotteistuksen ja brändin omistava operaattori, joka hankkii tokenit, tietoydinalustan tai molemmat tukkuna.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/liiketoimintasuunnitelma-virtuaalioperaattori.md
tags: [tekoalytalous, virtuaalioperaattori, tukkumarkkina, jakelu]
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-09-01T00:00:00+03:00
status: stable
sources:
  - id: internet-society-network-history
    resource: https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/
    title: A Brief History of the Internet and Related Networks
    author: team:internet-society
    source_year: "2026"
  - id: elisa-history
    resource: https://elisa.com/corporate/about-elisa/history/
    title: Elisa history
    author: team:elisa
    source_year: "2026"
id: ml2-virtual-operator-v1
slug: virtual-operator-v1
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
claim: Tukkuna ostetun tekoälykapasiteetin ja tietoinfrastruktuurin päälle voi syntyä alueellisia tai toimialakohtaisia asiakasoperaattoreita ilman oman fyysisen kapasiteetin omistamista.
wholesale_inputs:
  - open-model-token-capacity
  - owner-controlled-information-core-platform
  - identity-and-billing-services
owned_functions:
  - customer-contract
  - brand-and-pricing
  - segment-specific-product
  - first-line-support
  - wholesale-supplier-selection
falsification_conditions:
  - Tukku- ja vähittäishinnan ero ei kata asiakashankintaa, tukea ja operointia.
  - Jälleenmyyjä ei tuota asiakkaalle erottautuvaa toimiala-, jakelu- tai palveluarvoa.
  - Tukkutoimittajan vaihto ei onnistu ilman kohtuutonta asiakashaittaa.
related:
  - type: part_of
    target: /market-models/local-ai-operator-v1.md
  - type: resells
    target: /market-models/token-operator-v1.md
  - type: may_resell
    target: /market-models/information-operator-v1.md
---

# Virtuaalioperaattori

Virtuaalioperaattori omistaa asiakassuhteen, tuotteistuksen, hinnaston ja ensimmäisen tuen, mutta hankkii yhden tai molemmat peruspalvelut tukkuna. Sen kilpailuetu syntyy jakelusta, toimialasta, paikallisesta palvelusta, yhteisöstä tai käyttökokemuksesta — ei fyysisen infrastruktuurin omistamisesta.

---
type: Market Role Study
title: Tieto-operaattori v0.1
description: Yksilön tai organisaation omistaman, avoimen ja siirrettävän tietoytimen operaattori.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/tieto-operaattori.md
tags: [tekoalytalous, tieto-operaattori, tietoydin, siirrettavyys]
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-09-01T00:00:00+03:00
status: stable
sources:
  - id: tekoalytalous-information-os
    resource: https://www.tekoalytalous.fi/kirjoitukset/tieto-on-tekoalyn-kayttojarjestelma
    title: Tieto on tekoälyn käyttöjärjestelmä
    author: human:valto-loikkanen
    source_year: "2026"
  - id: eu-data-act-2025
    resource: https://digital-strategy.ec.europa.eu/fi/factpages/data-act-explained
    title: Data Act explained
    author: team:european-commission
    source_year: "2025"
  - id: edpb-processing-personal-data
    resource: https://www.edpb.europa.eu/sme-data-protection-guide/faq-frequently-asked-questions/answer/what-does-processing-personal-data_en
    title: What does processing personal data mean?
    author: team:european-data-protection-board
    source_year: "2026"
id: ml2-information-operator-v1
slug: information-operator-v1
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
claim: Omistajakohtaisen tiedon, identiteetin, valtuutusten ja siirrettävyyden jatkuva operointi voi muodostaa tokenkapasiteetista erillisen markkinan.
reference_architectures:
  - personal-information-operating-system
  - entity-information-operating-system
ownership_rules:
  - Tieto kuuluu yksilölle tai organisaatiolle, ei operaattorille.
  - Mallit, agentit ja sovellukset käyttävät tietoa valtuutusten kautta.
  - Tietoydin voidaan viedä ja siirtää toiselle operaattorille.
falsification_conditions:
  - Asiakkaat eivät maksa omistajakohtaisen tietoytimen jatkuvasta operoinnista.
  - Vienti ei mahdollista käytännössä palveluntarjoajan vaihtoa.
  - Suljetut sovellusalustat tarjoavat riittävän omistuksen ja siirrettävyyden ilman erillistä operaattoria.
related:
  - type: part_of
    target: /market-models/local-ai-operator-v1.md
  - type: derived_from
    target: /articles/tieto-on-tekoalyn-kayttojarjestelma.md
---

# Tieto-operaattori

Tieto-operaattori ylläpitää yksilön tai organisaation omistamaa tietoydintä. Mallit ja agentit ovat vaihdettavia käyttäjiä tämän ytimen ympärillä. Arvo syntyy omistuksesta, valtuutuksista, jatkuvuudesta, avoimista standardeista ja todellisesta siirrettävyydestä.

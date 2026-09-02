---
type: Market Role Study
title: Paikallisten tekoälyoperaattorien rakenne v0.3
description: Tutkimus tokenkapasiteetin, omistajakohtaisen tiedon, niitä yhdistävien ja tukkupalveluja jälleenmyyvien operaattorien erillisistä markkinarooleista.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/local-ai-operator-deep-dive.md
tags:
  - tekoalytalous
  - market-lab
  - tekoalyoperaattori
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-09-01T00:00:00+03:00
status: stable
sources:
  - id: tekoalytalous-value-chain
    resource: https://www.tekoalytalous.fi/kartta/arvoketju
    title: Tekoälytalouden arvoketju
    author: human:valto-loikkanen
    source_year: "2026"
  - id: tekoalytalous-information-os
    resource: https://www.tekoalytalous.fi/kirjoitukset/tieto-on-tekoalyn-kayttojarjestelma
    title: Tieto on tekoälyn käyttöjärjestelmä
    author: human:valto-loikkanen
    source_year: "2026"
  - id: open-source-ai-definition-2024
    resource: https://opensource.org/ai/open-source-ai-definition
    title: Open Source AI Definition 1.0
    author: team:open-source-initiative
    source_year: "2024"
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
id: ml2-local-ai-operator-v1
slug: local-ai-operator-v1
publication_status: published
editorial_status: approved
approved_by: human:valto-loikkanen
approved_at: 2026-09-01T00:00:00+03:00
methodology: market-lab/1.1
evidence_level: mahdollinen
evidence_cutoff: 2026-09-01
next_review_at: 2026-12-01
review_status: planned
time_horizon: 1-3
geography: Finland-with-global-market-context
version: "0.3"
license: CC BY 4.0
research_question: Millaiset erilliset operaattoriroolit syntyvät tekoälymallien työkapasiteetin ja omistajakohtaisen tiedon ympärille, ja milloin sama toimija voi uskottavasti yhdistää ne?
primary_functions:
  - id: F1
    name: token-operations
    responsibility: Tuottaa avoimilla malleilla käsittely- ja päättelykapasiteettia ilman asiakkaan pysyvän tietoytimen ylläpitoa.
  - id: F2
    name: information-operations
    responsibility: Ylläpitää yksilön tai organisaation omistamaa, valtuutettua, avointa ja siirrettävää tietoydintä.
  - id: F3
    name: combined-operations
    responsibility: Tarjoaa molemmat toiminnot säilyttäen niiden teknisen, sopimuksellisen ja kaupallisen erillisyyden.
  - id: F4
    name: virtual-operations
    responsibility: Omistaa asiakassuhteen ja tuotteistuksen mutta hankkii tokenit, tietoydinalustan tai molemmat tukkuna.
operator_dimensions:
  - geographic-local-or-national
  - horizontal-or-sector-specific
  - investor-owned-cooperative-or-public-private
  - retail-or-wholesale
  - full-service-or-functional-specialist
assumptions:
  - Mallien työkapasiteetti ja omistajakohtainen tieto ovat erikseen ostettavia hyödykkeitä.
  - Avoimet rajapinnat mahdollistavat kapasiteetti- ja tieto-operaattorin vaihtamisen toisistaan riippumatta.
  - Osa pienistä toimijoista keskittyy yhteen tehtävään, toimialaan tai jäsenryhmään.
  - Yhdistelmäoperaattori tuottaa arvoa vain, jos yhden vastuutahon etu ylittää uuden palvelulukon riskin.
falsification_conditions:
  - Tietoydintä ei voida käytännössä siirtää tai käyttää useiden kapasiteettitoimittajien kanssa.
  - Avoimia malleja ajava paikallinen kapasiteetti ei saavuta kilpailukykyistä kustannusta tai käyttöastetta.
  - Asiakkaat valitsevat järjestelmällisesti yhden suljetun alustan eivätkä arvosta kerrosten erillisyyttä.
  - Funktionaaliset tai toimialakohtaiset operaattorit eivät pysty vakioimaan palvelua tai saavuttamaan jatkuvaa liikevaihtoa.
related:
  - type: derived_from
    target: /market-models/ai-economy-market-formation-v1.md
  - type: has_role
    target: /market-models/token-operator-v1.md
  - type: has_role
    target: /market-models/information-operator-v1.md
  - type: has_role
    target: /market-models/combined-operator-v1.md
  - type: has_role
    target: /market-models/virtual-operator-v1.md
  - type: tested_by
    target: /business-plans/suomalainen-tekoalyoperaattori.md
---

# Paikallisten tekoälyoperaattorien rakenne

Tekoälyoperaattorimarkkinan kaksi perustoimintoa ovat mallien työkapasiteetin tuotanto ja omistajakohtaisen tiedon operointi. Ne voivat olla eri yrityksiä.

- [Tokenoperaattori](token-operator-v1.md) muuttaa energian ja laskennan avoimien mallien tuottamaksi työkapasiteetiksi.
- [Tieto-operaattori](information-operator-v1.md) ylläpitää omistajan pysyvää tietoydintä ja sen valtuutuksia.
- [Yhdistelmäoperaattori](combined-operator-v1.md) tarjoaa molemmat säilyttäen niiden vaihdettavuuden.
- [Virtuaalioperaattori](virtual-operator-v1.md) paketoi tukkuinfrastruktuurin omalle alueelle, toimialalle tai asiakasryhmälle.

Pieni toimija voi olla alueellinen, toimialakohtainen, osuustoiminnallinen, tukkupalvelu tai yhden tehtävän erikoisoperaattori.

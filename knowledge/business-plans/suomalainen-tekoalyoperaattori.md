---
type: Business Plan Collection
title: Suomalaisten tekoälyoperaattorimallien yleiskuva ja liiketoimintasuunnitelmakokoelma
description: Yhteinen markkina- ja operaattorikuvaus, neljä erillistä liiketoimintasuunnitelmaa token-, tieto-, yhdistelmä- ja virtuaalioperaattoreille sekä kahdeksan muokattavaa talousmallia.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/README.md
tags:
  - tekoalytalous
  - tokenoperaattori
  - tieto-operaattori
  - virtuaalioperaattori
  - liiketoimintasuunnitelma
generated:
  by: process:tekoalytalous-market-lab
  at: 2026-09-01T00:00:00+03:00
status: stable
sources:
  - id: tilastokeskus-yritysten-tekoaly-2025
    resource: https://stat.fi/julkaisu/cm1hnps701dbm07w59uo0jw6u
    title: 38 prosenttia yrityksistä käytti tekoälyteknologioita vuonna 2025
    author: team:tilastokeskus
    source_year: "2025"
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
  - id: finnet-jasenyhtiot-2026
    resource: https://www.finnet.fi/jasenyhtiot/
    title: Finnet-liiton jäsenyhtiöt
    author: team:finnet
    source_year: "2026"
  - id: internet-society-network-history
    resource: https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/
    title: A Brief History of the Internet and Related Networks
    author: team:internet-society
    source_year: "2026"
  - id: finnvera-guarantee-2026
    resource: https://www.finnvera.fi/eng/financing/guarantees/finnvera-guarantee
    title: Finnvera Guarantee
    author: team:finnvera
    source_year: "2026"
id: business-plan-finnish-ai-operator-v0-2
slug: suomalainen-tekoalyoperaattori
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
version: "0.3"
license: CC BY 4.0
plan_documents:
  - common-market-description
  - token-operator-business-plan
  - information-operator-business-plan
  - combined-operator-business-plan
  - virtual-operator-business-plan
plan_variants:
  - pieni-tokenoperaattori
  - suuri-tokenoperaattori
  - pieni-tieto-operaattori
  - suuri-tieto-operaattori
  - pieni-yhdistelmaoperaattori
  - suuri-yhdistelmaoperaattori
  - pieni-virtuaalioperaattori
  - suuri-virtuaalioperaattori
financial_scenarios:
  - heikko
  - perus
  - vahva
pricing_status: market-benchmarked-hypothetical
financial_status: hypothetical
private_case_included: false
assumptions:
  - Mallien työkapasiteetti ja omistajakohtainen tieto ovat erikseen ostettavia palveluja.
  - Pieni toimija voi rajautua maantieteeseen, toimialaan, jäsenkuntaan tai yhteen palvelutehtävään.
  - Avoimet rajapinnat mahdollistavat kapasiteetti- ja tieto-operaattorin vaihtamisen toisistaan riippumatta.
  - Laskentalaitteistoa voidaan rahoittaa omaisuutena, mutta käyttöaste, asiakassopimukset, arvonalenema ja jälleenmyyntipolku ratkaisevat rahoitettavuuden.
  - Yhdistelmäoperaattorin yhden vastuutahon etu voi ylittää uuden palvelulukon riskin vain, jos kerrokset säilyvät erotettavina.
  - Virtuaalioperaattori voi rakentaa kannattavan asiakaspalvelun tukkukapasiteetin päälle vain, jos se tuo oman jakelu-, toimiala- tai palveluedun.
falsification_conditions:
  - Paikallinen mallikapasiteetti ei saavuta kestävää käyttöastetta tai hintatasoa.
  - Asiakkaat eivät maksa omistajakohtaisen tietoytimen jatkuvasta operoinnista.
  - Tietoytimen vienti ei mahdollista käytännössä palveluntarjoajan vaihtoa.
  - Yhdistelmäpalvelun kustannus ylittää asiakkaalle syntyvän yhden vastuutahon hyödyn.
  - Toimiala- ja osuuskuntamallit eivät pysty vakioimaan palvelua tai saavuttamaan jatkuvaa liikevaihtoa.
  - Virtuaalioperaattorin tukku- ja vähittäishinnan ero ei kata asiakashankintaa, tukea ja operointia.
related:
  - type: derived_from
    target: /market-models/local-ai-operator-v1.md
  - type: models
    target: /market-models/token-operator-v1.md
  - type: models
    target: /market-models/information-operator-v1.md
  - type: models
    target: /market-models/combined-operator-v1.md
  - type: models
    target: /market-models/virtual-operator-v1.md
  - type: tests
    target: /market-models/accountable-operator-role-emerges.md
---

# Suomalaisten tekoälyoperaattorimallien yleiskuva ja liiketoimintasuunnitelmakokoelma

Paketti muuttaa Tekoälytalous.fi:n arvoketjun kaksi erillistä hyödykettä liiketoimintamalleiksi. Tokenoperaattori tuottaa avoimilla malleilla tekoälymallin työkapasiteettia ilman asiakkaan pysyvän tietoytimen ylläpitoa. Tieto-operaattori ylläpitää yksilön tai organisaation omistamaa, valtuutettua ja siirrettävää tietoydintä. Yhdistelmäoperaattori tarjoaa molemmat, mutta asiakkaan pitää voida vaihtaa kumpi tahansa kerros itsenäisesti. Virtuaalioperaattori omistaa tuotteet, brändin ja asiakassuhteen mutta hankkii yhden tai molemmat peruspalvelut tukkuna.

Yhteisen markkinakuvauksen lisäksi jokaisella neljällä operaattorityypillä on oma tehtävästä, tuotteista, asiakkaista, myynnistä, operoinnista, organisaatiosta, taloudesta, riskeistä ja hyväksymisehdoista koostuva liiketoimintasuunnitelma. Talousmalleista on pienet alueelliset, toimialakohtaiset tai osuustoiminnalliset versiot sekä suuremmat valtakunnalliset versiot.

Hinnoittelussa erotetaan 1. syyskuuta 2026 tarkistetut kansainväliset kapasiteettihinnat, asiakastyypin nykyiset vaihtoehtoiskustannukset ja testattavat suomalaiset myyntihinnat. Talousmallit ovat hypoteeseja, eivät ennusteita. Laitteistorahoituksessa kapasiteetti voi toimia rahoitettavana omaisuutena, mutta nopea tekninen arvonalenema estää käsittelemästä sitä automaattisesti vähäriskisenä vakuutena.

Täysi kokoelma: [Suomalaisten tekoälyoperaattorimallien yleiskuva ja liiketoimintasuunnitelmakokoelma](https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/README.md).

Luottamuksellinen yksittäistapaus ei kuulu tähän pakettiin eikä julkiseen tietokantaan.

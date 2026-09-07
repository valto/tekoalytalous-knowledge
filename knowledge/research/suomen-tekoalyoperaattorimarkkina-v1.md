---
type: Market Study Plan
title: Suomen tekoälyoperaattorimarkkinan tutkimus v0.2
description: Kalibroitu tutkimussuunnitelma Suomessa toimivien token-, tieto-, yhdistelmä- ja virtuaalioperaattoriehdokkaiden roolipohjaiseen, lähteistettyyn ja epävarmuuden säilyttävään arviointiin.
resource: https://github.com/valto/tekoalytalous-knowledge/blob/main/docs/tutkimus/suomen-tekoalyoperaattorimarkkina/README.md
tags:
  - tekoalytalous
  - market-lab
  - suomi
  - tekoalyoperaattori
generated:
  by: process:codex-primary-mac
  at: 2026-09-04T00:00:00+03:00
status: draft
sources:
  - id: statistics-finland-ai-2025
    resource: https://stat.fi/en/publication/cm1hnps701dbm07w59uo0jw6u
    title: Use of information technology in enterprises 2025
    author: team:statistics-finland
    source_year: "2025"
  - id: ai-finland-business-2026
    resource: https://aifinland.fi/en/ai-in-finnish-business-2026/
    title: AI in Finnish Business 2026
    author: team:ai-finland
    source_year: "2026"
  - id: lumi-ai-factory-2026
    resource: https://lumi-ai-factory.eu/
    title: LUMI AI Factory
    author: team:lumi-ai-factory
    source_year: "2026"
  - id: verda-ai-cloud-2026
    resource: https://verda.com/ai-cloud
    title: Verda AI Cloud
    author: organization:verda
    source_year: "2026"
  - id: traficom-data-intermediation-2026
    resource: https://www.traficom.fi/fi/datatalous-ja-datan-valittaminen/mita-datan-valittaminen-ja-data-altruismi
    title: Mitä on datan välittäminen ja data-altruismi?
    author: team:traficom
    source_year: "2026"
  - id: finnet-members-2026
    resource: https://www.finnet.fi/jasenyhtiot/
    title: Finnet-liiton jäsenet
    author: organization:finnet
    source_year: "2026"
id: ml3-finnish-ai-operator-market-study-v1
slug: suomen-tekoalyoperaattorimarkkina-v1
publication_status: unpublished
editorial_status: review_required
repository_visibility: public_draft
methodology: market-lab/1.1+actor-evaluation/0.2
evidence_level: avoin-kysymys
evidence_cutoff: 2026-09-04
next_review_at: 2026-12-04
review_status: calibrated_for_draft_assessment
time_horizon: nyt-ja-1-3
geography: Finland
version: "0.2"
license: CC BY 4.0
research_question: Mitkä Suomessa toimivat tai Suomeen uskottavasti tulevat toimijat voivat ottaa vastuulleen tekoälymallien työkapasiteetin, omistajakohtaisen tiedon, molemmat erillisinä palveluina tai näiden tukkupalvelujen päälle rakennetun asiakassuhteen?
candidate_groups:
  - kaupallinen-tekoalylaskenta
  - julkinen-laskentainfrastruktuuri
  - valtakunnalliset-tele-ja-ict-toimijat
  - alueelliset-tietoliikenneyhtiot
  - datan-valitys-ja-tietopalvelut
  - integraattorit-ja-kyberturvapalvelut
  - toimialakohtaiset-palveluyhtiot
  - osuuskunnat-ja-jasenyhteisot
  - energia-datakeskus-ja-rahoitustoimijat
  - virtuaalioperaattorit-ja-uudet-yhteenliittymat
rules:
  - Toimijaryhmät määritellään ennen ensimmäisen yrityserän valintaa.
  - Ehdokas ei tarkoita todettua tekoälyoperaattoria.
  - Tuntematon tieto erotetaan nollapisteestä.
  - Jokainen piste vaatii lähteen, perustelun, tarkistuspäivän ja luottamusluokan.
  - Roolikohtaiset tulokset pidetään erillään eikä niistä muodosteta automaattista yritysjärjestystä.
  - Yrityskohtainen julkaisu vaatii ihmisen toimituksellisen hyväksynnän.
  - Nimetty arviointi vaatii ensin kahden riippumattoman arvioijan hyväksytyn kalibroinnin.
  - Merkittävä yrityskohtainen johtopäätös vaatii riippumattoman ihmisen tarkistuksen sekä korjaus- ja vastineprosessin.
related:
  - type: evaluates
    target: /market-models/local-ai-operator-v1.md
  - type: compares_with
    target: /market-models/ai-economy-market-formation-v1.md
---

# Suomen tekoälyoperaattorimarkkinan tutkimus

Tutkimus alkaa markkinarooleista ja vastuista, ei tunnetuimpien yritysten pisteyttämisestä. Versio 0.2 määrittelee maantieteellisen rajan, kelpoisuusseulan, toimijaryhmät, lähdehierarkian, laskennan, painoperusteet, epävarmuuden käsittelyn, arvioijien sidonnaisuudet, kalibroinnin sekä korjaus- ja vastineprosessin.

Tässä versiossa ei julkaista yrityskohtaisia pisteitä tai johtopäätöksiä. Kaksi eristettyä auditointiagenttia läpäisi kalibrointikierroksen 0.2-2, jonka Valto Loikkanen hyväksyi 7.9.2026. Menetelmää saa nyt käyttää nimettyjen toimijoiden luonnosarvioihin. [Tutkimuspaketti](../../docs/tutkimus/suomen-tekoalyoperaattorimarkkina/README.md) sisältää menetelmän, ensimmäisen ehdokaskentän, lähderekisterin, laskentasäännöt ja koneellisesti luettavan arviointimallin. Yrityskohtainen julkaisu vaatii edelleen riippumattoman ihmiskatselmuksen ja erillisen julkaisupäätöksen.

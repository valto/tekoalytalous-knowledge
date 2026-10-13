---
type: Topic
title: Viranomaisagentin valtuudet ja virkavastuu
description: Julkisen hallinnon agentti voi valmistella asioita ja käyttää sille sallittuja työkaluja. Sen oma tekninen tunniste, toimivaltuuksien rajaus ja ihmisen valvonta on erotettava toisistaan ennen käyttöönottoa.
resource: https://www.tekoalytalous.fi/kartta/viranomaisagentin-valtuudet-ja-virkavastuu
tags:
  - tekoalytalous
  - julkinen-hallinto
  - tekoalyagentit
generated:
  by: process:tekoalytalous-website-topic-import
  at: '2026-10-13T15:17:32+03:00'
status: stable
sources:
  - id: source-1
    resource: https://urn.fi/URN:ISBN:978-952-367-431-8
    title: 'Agenttinen Suomi: Kohti tekoälyagenttien hyödyntämistä julkisessa hallinnossa, luku 4, s. 32–40'
    author: team:valtiovarainministerio
    source_year: '2026'
  - id: source-2
    resource: https://www.finlex.fi/fi/lainsaadanto/2003/434
    title: Hallintolaki 434/2003, hallintoasian automaattinen ratkaiseminen
    author: team:finlex
    source_year: '2003'
id: viranomaisagentin-valtuudet-ja-virkavastuu
slug: viranomaisagentin-valtuudet-ja-virkavastuu
content_type: topic
publication_status: published
evidence_level: mahdollinen
evidence_cutoff: '2026-10-13'
time_horizon: nyt
level: valtio
domain: Julkinen sektori
authors:
  - Tekoälytalous.fi -toimitus
contributors: []
created_at: '2026-10-13'
published_at: '2026-10-13'
updated_at: '2026-10-13'
version: '1.0'
license: CC BY 4.0
source_repository: valto/tekoalytalous
source_commit: 8b6f35d3c8bfedf7843c3002e6a32ecf47def5d8
source_content_sha256: d00249d8938c4e7e4f4563034ccf2d7a3da4b4c06b13b4bea6a2b5b99c7f6dd4
sections:
  - heading: Miksi oma agenttitunnus ei riitä?
    paragraphs:
      - '[Agenttinen Suomi -raportti](https://urn.fi/URN:ISBN:978-952-367-431-8) (luku 4) esittää, että agentti voidaan tunnistaa organisaation järjestelmissä omalla teknisellä identiteetillään ja sille voidaan antaa tehtävään rajattuja oikeuksia. Tunnus helpottaa toimien lokittamista, mutta ei raportin mukaan tee agentista oikeudellisesti itsenäistä toimijaa. Organisaation on pystyttävä osoittamaan, millä valtuuksilla ja kenen vastuulla toimi tehtiin.'
      - Hallinnon päätöksenteon lainmukaisuus arvioidaan käyttötapauksittain. [Hallintolain automaattista ratkaisemista koskevat säännökset](https://www.finlex.fi/fi/lainsaadanto/2003/434) eivät muutu agentin nimikkeen perusteella. Sivuston aiempi [tekoälykaksosia käsittelevä aihe](https://www.tekoalytalous.fi/kartta/organisaatioagentit-ja-tekoalykaksoset) erottaa samalla tavoin henkilön osaamisen ja agentille erikseen myönnettävän toimivallan.
    evidence: havaittu
  - heading: Miten rajaus tehdään ennen käyttöä?
    paragraphs:
      - Raportin hallintamalli (s. 38–40) edellyttää käyttötapauksen, tietojen, työkalujen, integraatioiden, oikeuksien, hyväksymisrajojen ja pysäytysehtojen määrittämistä etukäteen. Valmistelu, ehdottaminen ja ihmisen hyväksymä päätös ovat eri työvaiheita. Mitä enemmän agentti voi tehdä ja mitä kriittisempiin asioihin se koskee, sitä vahvempia ennakollisia estoja ja valvontaa tarvitaan.
      - Raportti kehottaa nimeämään kullekin ratkaisulle omistajan, teknisen vastuuhenkilön, hyväksyjän ja operatiivisen valvojan. Käytön aikana oikeudet, integraatiot ja poikkeamat tarkistetaan säännöllisesti. Lokit kertovat, mitä tapahtui; ne eivät yksin korvaa ennen toimintaa tehtyä rajauspäätöstä.
    evidence: havaittu
  - heading: Mitä yli virastorajojen pitää sopia?
    paragraphs:
      - Kun yhden viranomaisen agentti kokoaa tietoa toisen järjestelmästä, on erotettava tiedon saanti, valmisteluvastuu, päätöksenteko ja mahdollinen virheen korjaus. Raportti kuvaa yhteentoimivan verkoston tavoitteena, ei jo valmista yhteistä valtuutusjärjestelmää. Sivuston tarkastelukysymys on, miten tehtäväkohtaiset oikeudet ja vastuut pysyvät nähtävissä koko palveluketjun ajan.
    evidence: avoin-kysymys
related:
  - type: related_to
    target: /topics/agenttinen-suomi-julkinen-hallinto.md
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/julkiset-palvelut
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/organisaatioagentit-ja-tekoalykaksoset
  - type: related_to
    target: /topics/agenttiautomaation-hyotyjen-mittaaminen.md
editorial_connections:
  - kind: article
    target: https://www.tekoalytalous.fi/kirjoitukset/milloin-organisaatio-tarvitsee-tekoalykaksosen
    why: Asiantuntijaa edustavan tekoälyn nimi tai osaaminen ei anna sille virkailijan päätösvaltaa.
  - kind: topic
    target: https://www.tekoalytalous.fi/kartta/crd
    why: Kyvykkyyskuvaus voi auttaa kirjaamaan ihmisen hyväksymät rajat, mutta ei korvaa oikeudellista arviointia.
dependencies:
  - Määritetty käyttötapaus
  - Rajatut käyttöoikeudet
  - Nimetty hyväksyjä ja valvoja
opportunities:
  - Valmistelu voi sujua nopeammin, jos rajatut agentit tukevat ihmisen päätöstyötä.
risks:
  - Teknisestä agenttitunnuksesta päätellään virheellisesti oikeus käyttää julkista valtaa.
  - Jälkikäteinen lokitus korvaa käytännössä ennakollisen hyväksynnän.
open_questions:
  - Miten jokaisen työvaiheen vastuut osoitetaan usean viranomaisen ketjussa?
  - Miten agentti keskeytetään turvallisesti kesken palveluketjun?
counter_views:
  - Jos tehtävä voidaan ratkaista yksiselitteisellä ohjelmistosäännöllä, autonominen agentti lisää tarpeetonta hallinnan tarvetta.
version_history:
  - version: '1.0'
    date: '2026-10-13'
    note: Ensimmäinen julkaisu; tekninen tunniste, valtuudet ja virkavastuu erikseen.
---

# Viranomaisagentin valtuudet ja virkavastuu

_Tekninen käyttöoikeus ei anna agentille viranomaisen päätösvaltaa._

Julkisen hallinnon agentti voi valmistella asioita ja käyttää sille sallittuja työkaluja. Sen oma tekninen tunniste, toimivaltuuksien rajaus ja ihmisen valvonta on erotettava toisistaan ennen käyttöönottoa.

## Miksi oma agenttitunnus ei riitä?

[Agenttinen Suomi -raportti](https://urn.fi/URN:ISBN:978-952-367-431-8) (luku 4) esittää, että agentti voidaan tunnistaa organisaation järjestelmissä omalla teknisellä identiteetillään ja sille voidaan antaa tehtävään rajattuja oikeuksia. Tunnus helpottaa toimien lokittamista, mutta ei raportin mukaan tee agentista oikeudellisesti itsenäistä toimijaa. Organisaation on pystyttävä osoittamaan, millä valtuuksilla ja kenen vastuulla toimi tehtiin.

Hallinnon päätöksenteon lainmukaisuus arvioidaan käyttötapauksittain. [Hallintolain automaattista ratkaisemista koskevat säännökset](https://www.finlex.fi/fi/lainsaadanto/2003/434) eivät muutu agentin nimikkeen perusteella. Sivuston aiempi [tekoälykaksosia käsittelevä aihe](https://www.tekoalytalous.fi/kartta/organisaatioagentit-ja-tekoalykaksoset) erottaa samalla tavoin henkilön osaamisen ja agentille erikseen myönnettävän toimivallan.

_Näyttötaso: havaittu._

## Miten rajaus tehdään ennen käyttöä?

Raportin hallintamalli (s. 38–40) edellyttää käyttötapauksen, tietojen, työkalujen, integraatioiden, oikeuksien, hyväksymisrajojen ja pysäytysehtojen määrittämistä etukäteen. Valmistelu, ehdottaminen ja ihmisen hyväksymä päätös ovat eri työvaiheita. Mitä enemmän agentti voi tehdä ja mitä kriittisempiin asioihin se koskee, sitä vahvempia ennakollisia estoja ja valvontaa tarvitaan.

Raportti kehottaa nimeämään kullekin ratkaisulle omistajan, teknisen vastuuhenkilön, hyväksyjän ja operatiivisen valvojan. Käytön aikana oikeudet, integraatiot ja poikkeamat tarkistetaan säännöllisesti. Lokit kertovat, mitä tapahtui; ne eivät yksin korvaa ennen toimintaa tehtyä rajauspäätöstä.

_Näyttötaso: havaittu._

## Mitä yli virastorajojen pitää sopia?

Kun yhden viranomaisen agentti kokoaa tietoa toisen järjestelmästä, on erotettava tiedon saanti, valmisteluvastuu, päätöksenteko ja mahdollinen virheen korjaus. Raportti kuvaa yhteentoimivan verkoston tavoitteena, ei jo valmista yhteistä valtuutusjärjestelmää. Sivuston tarkastelukysymys on, miten tehtäväkohtaiset oikeudet ja vastuut pysyvät nähtävissä koko palveluketjun ajan.

_Näyttötaso: avoin-kysymys._

## Mahdollisuudet

- Valmistelu voi sujua nopeammin, jos rajatut agentit tukevat ihmisen päätöstyötä.

## Riskit

- Teknisestä agenttitunnuksesta päätellään virheellisesti oikeus käyttää julkista valtaa.
- Jälkikäteinen lokitus korvaa käytännössä ennakollisen hyväksynnän.

## Riippuvuudet

- Määritetty käyttötapaus
- Rajatut käyttöoikeudet
- Nimetty hyväksyjä ja valvoja

## Avoimet kysymykset

- Miten jokaisen työvaiheen vastuut osoitetaan usean viranomaisen ketjussa?
- Miten agentti keskeytetään turvallisesti kesken palveluketjun?

## Vastanäkökulmat

- Jos tehtävä voidaan ratkaista yksiselitteisellä ohjelmistosäännöllä, autonominen agentti lisää tarpeetonta hallinnan tarvetta.

## Muut liittyvät aiheet

- [agenttinen-suomi-julkinen-hallinto](/topics/agenttinen-suomi-julkinen-hallinto.md)
- [julkiset-palvelut](https://www.tekoalytalous.fi/kartta/julkiset-palvelut)
- [organisaatioagentit-ja-tekoalykaksoset](https://www.tekoalytalous.fi/kartta/organisaatioagentit-ja-tekoalykaksoset)
- [agenttiautomaation-hyotyjen-mittaaminen](/topics/agenttiautomaation-hyotyjen-mittaaminen.md)

## Ristiinluenta

- [milloin-organisaatio-tarvitsee-tekoalykaksosen](https://www.tekoalytalous.fi/kirjoitukset/milloin-organisaatio-tarvitsee-tekoalykaksosen): Asiantuntijaa edustavan tekoälyn nimi tai osaaminen ei anna sille virkailijan päätösvaltaa.
- [crd](https://www.tekoalytalous.fi/kartta/crd): Kyvykkyyskuvaus voi auttaa kirjaamaan ihmisen hyväksymät rajat, mutta ei korvaa oikeudellista arviointia.

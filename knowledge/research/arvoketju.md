---
type: Research
title: Tekoälytalouden arvoketju
description: Miten energia muuttuu laskennaksi, laskenta päättelyksi ja päättely digitaaliseksi työkyvyksi? Arvoketju on tekoälytalouden perusrakenne, jota ilman yksittäisiä muutoksia on vaikea suhteuttaa.
resource: https://www.tekoalytalous.fi/kartta/arvoketju
tags:
  - tekoalytalous
  - research
  - infrastruktuuri
generated:
  by: process:tekoalytalous-okf-pilot
  at: 2026-08-27T00:00:00+03:00
status: stable
sources:
  - id: iea-2024-1
    resource: https://www.iea.org/reports/electricity-2024
    title: Electricity 2024 – datakeskusten sähkönkulutus
    author: team:iea
    source_year: '2024'
  - id: stanford-hai-2026-2
    resource: https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance
    title: 2026 AI Index Report – Technical performance
    author: team:stanford-hai
    source_year: '2026'
  - id: valto-loikkanen-2026-3
    resource: https://valto.github.io/tekoalytyokapasiteetin-vallankumous/
    title: Miksi tekoälyyn investoidaan biljoonia? — täysi tutkimuspaketti
    author: human:valto-loikkanen
    source_year: '2026'
id: arvoketju
slug: arvoketju
content_type: research
publication_status: published
evidence_level: havaittu
evidence_cutoff: 2026-08-18
time_horizon: nyt
level: globaali
domain: Infrastruktuuri
authors:
  - Tekoälytalous.fi -toimitus
contributors: []
created_at: 2026-06-02
published_at: 2026-06-02
updated_at: 2026-09-02
version: '1.4'
license: CC BY 4.0
sections:
  - heading: Yhteenveto
    paragraphs:
      - Jokaisen tekoälyllä suoritetun tehtävän taustalla on fyysinen ja taloudellinen arvoketju. Sähkö tuottaa laskentaa, laskenta mahdollistaa [tekoälymallit](https://www.tekoalytalous.fi/sanasto#tekoalymalli), mallien käyttö tuottaa [päättelyä](https://www.tekoalytalous.fi/sanasto#paattely) ja päättely voidaan muuttaa [digitaaliseksi työkyvyksi](https://www.tekoalytalous.fi/sanasto#tyokapasiteetti).
      - Arvoketjun tarkastelu auttaa erottamaan toisistaan sen, mikä tekoälytaloudessa on kapasiteettikysymys, mikä hintakysymys ja mikä käyttöönoton kysymys.
    evidence: havaittu
  - heading: Miksi tämä muuttuu?
    paragraphs:
      - '[Päättelyn yksikkökustannus on laskenut nopeasti](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance) samalla kun käytettävissä oleva kapasiteetti on kasvanut. Kun saman tehtävän hinta laskee riittävästi, tehtävien joukko, joka kannattaa automatisoida, laajenee.'
    bullets:
      - Laskentakapasiteetin rakentaminen on pääomavaltaista ja sidottu energiaan sekä sähköverkkoihin.
      - Mallien tehokkuus paranee samanaikaisesti sekä arkkitehtuurin että ajoympäristön kehittyessä.
      - Käyttöönotto organisaatioissa on hitaampaa kuin teknologian kehitys.
    evidence: vahva-signaali
  - heading: Mitä tapahtuu jo nyt?
    paragraphs:
      - Laskentainfrastruktuuriin kohdistuvat investoinnit ovat kasvaneet nopeasti. [Energian saatavuudesta ja sähkönkulutuksesta](https://www.iea.org/reports/electricity-2024) on tullut datakeskusten mittakaavaa ja sijoittumista ohjaavia tekijöitä.
    evidence: havaittu
  - heading: Mitkä ovat tärkeimmät signaalit?
    paragraphs:
      - Seurattavia signaaleja ovat päättelyn hinta suoritettua tehtävää kohti, sähkön hinta ja saatavuus, laskentakapasiteetin käyttöaste sekä se, kuinka suuri osa organisaatioiden työnkulusta siirtyy jatkuvaan tekoälykäyttöön.
    evidence: vahva-signaali
  - heading: Mitä voi tapahtua seuraavaksi?
    paragraphs:
      - Jos päättelyn hinta jatkaa laskuaan, arvoketjun painopiste siirtyy mallien kehittämisestä niiden käyttöön ja integrointiin. Silloin kilpailuetu syntyy yhä useammin siitä, miten hyvin organisaatio osaa ohjata digitaalista työkykyä.
    evidence: todennakoinen
  - heading: Mitä pidemmällä aikavälillä voi muuttua?
    paragraphs:
      - 'Pidemmällä aikavälillä on mahdollista, että päättelykapasiteettia käsitellään samalla tavalla kuin sähköä: mitattavana, hinnoiteltavana ja markkinaehtoisesti allokoitavana perushyödykkeenä.'
    evidence: mahdollinen
related:
  - type: related_to
    target: /research/tekoalytehtaat.md
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/investoinnit
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/ohjelmistot
dependencies:
  - Energian hinta ja saatavuus
  - Laskentakapasiteetin rakentumisnopeus
  - Mallien tehokkuuskehitys
opportunities:
  - Halvempi päättely laajentaa hyödyllisten sovellusten joukkoa.
  - Energiainvestoinnit voivat vahvistaa myös muuta sähköjärjestelmää.
risks:
  - Kapasiteetin keskittyminen harvoille toimijoille.
  - Investointien ja todellisen kysynnän epäsuhta.
open_questions:
  - Kuinka pitkälle päättelyn yksikkökustannus voi laskea?
  - Kuinka suuri osa arvosta jää infrastruktuurille ja kuinka suuri sen käyttäjille?
counter_views: []
version_history:
  - version: '1.0'
    date: 2026-06-02
    note: Ensimmäinen julkaisu.
  - version: '1.1'
    date: 2026-07-14
    note: Lisätty energian saatavuutta koskeva osio ja päivitetty kustannusoletukset.
  - version: '1.2'
    date: 2026-08-18
    note: Tarkennettu signaalien luettelo ja lisätty lähde.
  - version: '1.3'
    date: 2026-08-27
    note: Lisätty tutkimuksen näytön aikaraja 18.8.2026.
  - version: '1.4'
    date: 2026-09-02
    note: Linkitetty päättelykustannusta ja datakeskusten energiaa koskevat väitteet suoraan lähteisiin.
---

# Tekoälytalouden arvoketju

_Energiasta työkykyyn_

## Yhteenveto

Jokaisen tekoälyllä suoritetun tehtävän taustalla on fyysinen ja taloudellinen arvoketju. Sähkö tuottaa laskentaa, laskenta mahdollistaa [tekoälymallit](https://www.tekoalytalous.fi/sanasto#tekoalymalli), mallien käyttö tuottaa [päättelyä](https://www.tekoalytalous.fi/sanasto#paattely) ja päättely voidaan muuttaa [digitaaliseksi työkyvyksi](https://www.tekoalytalous.fi/sanasto#tyokapasiteetti).

Arvoketjun tarkastelu auttaa erottamaan toisistaan sen, mikä tekoälytaloudessa on kapasiteettikysymys, mikä hintakysymys ja mikä käyttöönoton kysymys.

_Näyttötaso: havaittu._

## Miksi tämä muuttuu?

[Päättelyn yksikkökustannus on laskenut nopeasti](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance) samalla kun käytettävissä oleva kapasiteetti on kasvanut. Kun saman tehtävän hinta laskee riittävästi, tehtävien joukko, joka kannattaa automatisoida, laajenee.

- Laskentakapasiteetin rakentaminen on pääomavaltaista ja sidottu energiaan sekä sähköverkkoihin.
- Mallien tehokkuus paranee samanaikaisesti sekä arkkitehtuurin että ajoympäristön kehittyessä.
- Käyttöönotto organisaatioissa on hitaampaa kuin teknologian kehitys.

_Näyttötaso: vahva-signaali._

## Mitä tapahtuu jo nyt?

Laskentainfrastruktuuriin kohdistuvat investoinnit ovat kasvaneet nopeasti. [Energian saatavuudesta ja sähkönkulutuksesta](https://www.iea.org/reports/electricity-2024) on tullut datakeskusten mittakaavaa ja sijoittumista ohjaavia tekijöitä.

_Näyttötaso: havaittu._

## Mitkä ovat tärkeimmät signaalit?

Seurattavia signaaleja ovat päättelyn hinta suoritettua tehtävää kohti, sähkön hinta ja saatavuus, laskentakapasiteetin käyttöaste sekä se, kuinka suuri osa organisaatioiden työnkulusta siirtyy jatkuvaan tekoälykäyttöön.

_Näyttötaso: vahva-signaali._

## Mitä voi tapahtua seuraavaksi?

Jos päättelyn hinta jatkaa laskuaan, arvoketjun painopiste siirtyy mallien kehittämisestä niiden käyttöön ja integrointiin. Silloin kilpailuetu syntyy yhä useammin siitä, miten hyvin organisaatio osaa ohjata digitaalista työkykyä.

_Näyttötaso: todennakoinen._

## Mitä pidemmällä aikavälillä voi muuttua?

Pidemmällä aikavälillä on mahdollista, että päättelykapasiteettia käsitellään samalla tavalla kuin sähköä: mitattavana, hinnoiteltavana ja markkinaehtoisesti allokoitavana perushyödykkeenä.

_Näyttötaso: mahdollinen._

## Mahdollisuudet

- Halvempi päättely laajentaa hyödyllisten sovellusten joukkoa.
- Energiainvestoinnit voivat vahvistaa myös muuta sähköjärjestelmää.

## Riskit

- Kapasiteetin keskittyminen harvoille toimijoille.
- Investointien ja todellisen kysynnän epäsuhta.

## Riippuvuudet

- Energian hinta ja saatavuus
- Laskentakapasiteetin rakentumisnopeus
- Mallien tehokkuuskehitys

## Avoimet kysymykset

- Kuinka pitkälle päättelyn yksikkökustannus voi laskea?
- Kuinka suuri osa arvosta jää infrastruktuurille ja kuinka suuri sen käyttäjille?


## Liittyvät aiheet

- [tekoalytehtaat](/research/tekoalytehtaat.md)
- [investoinnit](https://www.tekoalytalous.fi/kartta/investoinnit)
- [ohjelmistot](https://www.tekoalytalous.fi/kartta/ohjelmistot)

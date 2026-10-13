---
type: Topic
title: Julkisen hallinnon agenttien digisuvereniteetti
description: Agentin käyttö riippuu tiedosta, rajapinnoista, pilvestä, malleista ja valvonnasta. Digisuvereniteetti tarkoittaa kykyä hallita näitä riippuvuuksia ja pitää julkinen palvelu toiminnassa muutostilanteissa.
resource: https://www.tekoalytalous.fi/kartta/julkisen-hallinnon-agenttien-digisuvereniteetti
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
    title: 'Agenttinen Suomi: Kohti tekoälyagenttien hyödyntämistä julkisessa hallinnossa, luku 3, s. 24–31'
    author: team:valtiovarainministerio
    source_year: '2026'
id: julkisen-hallinnon-agenttien-digisuvereniteetti
slug: julkisen-hallinnon-agenttien-digisuvereniteetti
content_type: topic
publication_status: published
evidence_level: mahdollinen
evidence_cutoff: '2026-10-13'
time_horizon: 1-3
level: valtio
domain: Infrastruktuuri
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
source_content_sha256: 9b551bf8e2af689e80762c3782253b7aab28fd8b3a998d83c8f25fd9769fee1e
sections:
  - heading: Mitä riippuvuutta pitää hallita?
    paragraphs:
      - '[Agenttinen Suomi -raportin](https://urn.fi/URN:ISBN:978-952-367-431-8) luku 3 tarkastelee koko ketjua: laskenta ja pilvipalvelut, tekoälymallit, organisaation tiedot, rajapinnat sekä agentin käyttöoikeudet. Datan omistaminen ei raportin mukaan yksin riitä, jos tieto tai sen käsittely on sidottu ulkopuolisen alustan ehtoihin ja toimintavarmuuteen.'
      - Raportti esittää siirrettävyyden, yhteentoimivuuden ja jatkuvuuden hallinnan tavoitteiksi. Kaiken teknologian rakentamista itse se ei pidä realistisena. Siksi vaihtoehtojen vertailussa kannattaa kysyä, miten organisaatio vaihtaisi mallia tai palveluntarjoajaa ja miten tärkeä palvelu toimisi häiriössä.
    evidence: havaittu
  - heading: Miksi yhteentoimivuus on tiedon kysymys?
    paragraphs:
      - Raportti nostaa esiin tiedon luokittelun, laadun, käyttöoikeudet ja semanttisen yhteentoimivuuden. Kun agentti yhdistelee viranomaisten tietoja, saman kentän on tarkoitettava samaa asiaa molemmissa järjestelmissä ja salassa pidettävän tiedon on pysyttävä oikeissa rajoissa. Tätä ei ratkaista hankkimalla pelkkä tehokas kielimalli.
      - Tiedon kulun lisäksi on testattava rajapinnat, palvelun keskeyttäminen, lokien saanti ja vastuullinen käsittely koko ketjussa. [Organisaation tietoytimen aihe](https://www.tekoalytalous.fi/kartta/entity-core) tarkastelee erikseen, miten organisaatio voisi säilyttää tietonsa järjestelmistä riippumattomassa muodossa; se on eri ehdotus kuin ministeriön raportin toimintamalli.
    evidence: mahdollinen
  - heading: Paljonko hallinta maksaa?
    paragraphs:
      - Raportin mukaan kustannus ei rajoitu mallin käytön hintaan. Mukaan kuuluvat infrastruktuuri, integraatiot, tietoturva, lokitus, auditointi, käyttöoikeuksien hallinta, jatkuva valvonta ja henkilöstön koulutus. Toimittajan vaihtamisen mahdollisuudella voi olla arvoa, vaikka se kasvattaisi aluksi kustannuksia. Tämä on kustannuserien jäsennys, ei valmiiksi laskettu Suomen julkisen sektorin investointisumma.
    evidence: avoin-kysymys
related:
  - type: related_to
    target: /topics/agenttinen-suomi-julkinen-hallinto.md
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/tekoalytehtaat
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/julkiset-palvelut
  - type: related_to
    target: https://www.tekoalytalous.fi/kartta/entity-core
editorial_connections:
  - kind: topic
    target: https://www.tekoalytalous.fi/kartta/entity-core
    why: Hallittua tietoydintä voi tutkia yhtenä keinona vähentää toimittajaan sitoutumista; se on sivuston ehdotus.
  - kind: article
    target: https://www.tekoalytalous.fi/kirjoitukset/tekoalyoperaattorit-eivat-ole-yksi-liiketoimintamalli
    why: Operaattorimallit erottavat datan ja laskentakapasiteetin operoinnin vaihtoehtoisiksi järjestelyiksi.
  - kind: perspective
    target: https://www.tekoalytalous.fi/nakokulmat#eurooppa-ei-ole-automaattisesti-oikeassa
    why: Vastanäkökulma kysyy, millä ehdoilla eurooppalainen toteutus todella olisi paras.
dependencies:
  - Tietojen luokittelu ja laatu
  - Yhteiset rajapinnat
  - Toimittajan vaihdon ja häiriötilanteen suunnitelma
opportunities:
  - Hallittu siirrettävyys voi auttaa säilyttämään kriittiset palvelut toiminnassa toimittajamuutoksen aikana.
risks:
  - Julkinen palvelu voi sitoutua yhden toimittajan malliin, hinnoitteluun tai järjestelmään ilman toimivaa poistumistietä.
open_questions:
  - Mitkä kriittiset riippuvuusketjut on jo kartoitettu kunnissa, hyvinvointialueilla ja valtiolla?
  - Miten siirrettävyyttä testataan käytännössä ennen sopimusta?
counter_views:
  - Valmiin kansainvälisen palvelun käyttö voi joissain tapauksissa tuoda paremman turvallisuuden ja käytettävyyden kuin oman alustan ylläpito.
version_history:
  - version: '1.0'
    date: '2026-10-13'
    note: Ensimmäinen julkaisu; raportin infrastruktuuri- ja riippuvuuskysymykset erotettu omaksi aiheeksi.
---

# Julkisen hallinnon agenttien digisuvereniteetti

_Kuka hallitsee dataa, palveluketjua ja toimittajan vaihdon mahdollisuutta?_

Agentin käyttö riippuu tiedosta, rajapinnoista, pilvestä, malleista ja valvonnasta. Digisuvereniteetti tarkoittaa kykyä hallita näitä riippuvuuksia ja pitää julkinen palvelu toiminnassa muutostilanteissa.

## Mitä riippuvuutta pitää hallita?

[Agenttinen Suomi -raportin](https://urn.fi/URN:ISBN:978-952-367-431-8) luku 3 tarkastelee koko ketjua: laskenta ja pilvipalvelut, tekoälymallit, organisaation tiedot, rajapinnat sekä agentin käyttöoikeudet. Datan omistaminen ei raportin mukaan yksin riitä, jos tieto tai sen käsittely on sidottu ulkopuolisen alustan ehtoihin ja toimintavarmuuteen.

Raportti esittää siirrettävyyden, yhteentoimivuuden ja jatkuvuuden hallinnan tavoitteiksi. Kaiken teknologian rakentamista itse se ei pidä realistisena. Siksi vaihtoehtojen vertailussa kannattaa kysyä, miten organisaatio vaihtaisi mallia tai palveluntarjoajaa ja miten tärkeä palvelu toimisi häiriössä.

_Näyttötaso: havaittu._

## Miksi yhteentoimivuus on tiedon kysymys?

Raportti nostaa esiin tiedon luokittelun, laadun, käyttöoikeudet ja semanttisen yhteentoimivuuden. Kun agentti yhdistelee viranomaisten tietoja, saman kentän on tarkoitettava samaa asiaa molemmissa järjestelmissä ja salassa pidettävän tiedon on pysyttävä oikeissa rajoissa. Tätä ei ratkaista hankkimalla pelkkä tehokas kielimalli.

Tiedon kulun lisäksi on testattava rajapinnat, palvelun keskeyttäminen, lokien saanti ja vastuullinen käsittely koko ketjussa. [Organisaation tietoytimen aihe](https://www.tekoalytalous.fi/kartta/entity-core) tarkastelee erikseen, miten organisaatio voisi säilyttää tietonsa järjestelmistä riippumattomassa muodossa; se on eri ehdotus kuin ministeriön raportin toimintamalli.

_Näyttötaso: mahdollinen._

## Paljonko hallinta maksaa?

Raportin mukaan kustannus ei rajoitu mallin käytön hintaan. Mukaan kuuluvat infrastruktuuri, integraatiot, tietoturva, lokitus, auditointi, käyttöoikeuksien hallinta, jatkuva valvonta ja henkilöstön koulutus. Toimittajan vaihtamisen mahdollisuudella voi olla arvoa, vaikka se kasvattaisi aluksi kustannuksia. Tämä on kustannuserien jäsennys, ei valmiiksi laskettu Suomen julkisen sektorin investointisumma.

_Näyttötaso: avoin-kysymys._

## Mahdollisuudet

- Hallittu siirrettävyys voi auttaa säilyttämään kriittiset palvelut toiminnassa toimittajamuutoksen aikana.

## Riskit

- Julkinen palvelu voi sitoutua yhden toimittajan malliin, hinnoitteluun tai järjestelmään ilman toimivaa poistumistietä.

## Riippuvuudet

- Tietojen luokittelu ja laatu
- Yhteiset rajapinnat
- Toimittajan vaihdon ja häiriötilanteen suunnitelma

## Avoimet kysymykset

- Mitkä kriittiset riippuvuusketjut on jo kartoitettu kunnissa, hyvinvointialueilla ja valtiolla?
- Miten siirrettävyyttä testataan käytännössä ennen sopimusta?

## Vastanäkökulmat

- Valmiin kansainvälisen palvelun käyttö voi joissain tapauksissa tuoda paremman turvallisuuden ja käytettävyyden kuin oman alustan ylläpito.

## Muut liittyvät aiheet

- [agenttinen-suomi-julkinen-hallinto](/topics/agenttinen-suomi-julkinen-hallinto.md)
- [tekoalytehtaat](https://www.tekoalytalous.fi/kartta/tekoalytehtaat)
- [julkiset-palvelut](https://www.tekoalytalous.fi/kartta/julkiset-palvelut)
- [entity-core](https://www.tekoalytalous.fi/kartta/entity-core)

## Ristiinluenta

- [entity-core](https://www.tekoalytalous.fi/kartta/entity-core): Hallittua tietoydintä voi tutkia yhtenä keinona vähentää toimittajaan sitoutumista; se on sivuston ehdotus.
- [tekoalyoperaattorit-eivat-ole-yksi-liiketoimintamalli](https://www.tekoalytalous.fi/kirjoitukset/tekoalyoperaattorit-eivat-ole-yksi-liiketoimintamalli): Operaattorimallit erottavat datan ja laskentakapasiteetin operoinnin vaihtoehtoisiksi järjestelyiksi.
- [eurooppa-ei-ole-automaattisesti-oikeassa](https://www.tekoalytalous.fi/nakokulmat#eurooppa-ei-ole-automaattisesti-oikeassa): Vastanäkökulma kysyy, millä ehdoilla eurooppalainen toteutus todella olisi paras.

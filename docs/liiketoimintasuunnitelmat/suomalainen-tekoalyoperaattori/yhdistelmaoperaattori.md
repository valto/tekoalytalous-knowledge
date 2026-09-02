# Yhdistelmäoperaattorin liiketoimintamalli

## Tehtävä

Yhdistelmäoperaattori tarjoaa asiakkaalle sekä tekoälymallin työkapasiteetin että pysyvän, omistajan hallitseman tietoytimen. Sen kaupallinen etu on yksi sopimus, tuki ja lasku. Sen rakenteellinen riski on uuden lukon syntyminen.

## Pakollinen erottelu

Yhdistelmäpalvelun tulee säilyttää vähintään seuraavat rajat:

| Kerros                       | Omistus ja vaihdettavuus                                                       |
| ---------------------------- | ------------------------------------------------------------------------------ |
| Tietoydin                    | Asiakkaan omistama; vietävissä kokonaisena dokumentoidulla tavalla             |
| Identiteetti ja valtuutukset | Asiakkaan hallittavissa; eivät saa riippua yhdestä mallista                    |
| Malli                        | Vaihdettava avoin malli tai ulkoinen mallipalvelu                              |
| Tokenkapasiteetti            | Oma, rahoitettu, vuokrattu tai toiselta tokenoperaattorilta ostettu            |
| Sovellukset ja agentit       | Käyttävät tietoa valtuutusten kautta; voidaan vaihtaa tietoydintä menettämättä |
| Laskutus                     | Tieto, kapasiteetti, tuki ja integraatiot eritellään                           |

## Kaksi toteutustapaa

### Kevyt yhdistelmäoperaattori

Toimija operoi tietoytimen itse mutta ostaa tokenkapasiteetin tukkuna yhdeltä tai usealta toimittajalta. Tämä pienentää alkuinvestointia ja sopii toimiala- tai aluekohtaiselle yritykselle.

### Infrastruktuuria omistava yhdistelmäoperaattori

Toimija omistaa tai rahoittaa osan tokenkapasiteetista ja tuottaa lisäksi tietopalvelun. Tämä antaa suuremman kontrollin kustannukseen, sijaintiin ja toimitusvarmuuteen, mutta yhdistää kaksi hyvin erilaista pääoma- ja osaamisprofiilia.

## Asiakassegmentit

- pienet yritykset, jotka haluavat yhden vastuutahon;
- toimialayhteisöt ja osuuskunnat, jotka haluavat yhteisen tietoperustan ja kilpailutetun kapasiteetin;
- keskisuuret yritykset, joilla ei ole omaa tekoälytoimintoa;
- säännellyt toimijat, jotka tarvitsevat tietoytimen ja käsittelykapasiteetin välille todistettavan rajan;
- julkisen sektorin tai alueelliset yhteispalvelut.

## Kaupallinen malli

Asiakas maksaa erikseen:

- tietoytimen perus- ja käyttäjämaksut;
- tokenkulutuksen tai varatun kapasiteetin;
- käyttöönoton ja integraatiot;
- tuen ja palvelutason;
- mahdolliset toimialakohtaiset kontrollit.

Erittely mahdollistaa sen, että asiakas voi myöhemmin vaihtaa vain tokenoperaattorin tai vain tieto-operaattorin.

## Falsifiointi

Yhdistelmäoperaattorin malli heikkenee, jos asiakkaat ostavat kerrokset järjestelmällisesti eri toimijoilta, yhden sopimuksen etu ei kata yhdistämisen kustannusta tai tiedon siirrettävyys ei toteudu käytännössä.

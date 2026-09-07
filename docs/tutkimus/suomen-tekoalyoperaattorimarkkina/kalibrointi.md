# Kalibrointiprotokolla

Versio 0.2 — kalibrointi hyväksytty 7.9.2026

Päivitetty 7.9.2026.

## Tavoite

Kalibrointi testaa, tuottavatko kaksi riippumatonta arvioijaa samasta rajatusta aineistosta riittävän yhtäpitävän tuloksen. Arvioijat voivat olla kaksi eri ihmistä tai kaksi toisistaan eristettyä auditointiagenttia. Se ei todista painojen ennustevoimaa eikä tee esimerkkitoimijoista todellisia markkinatoimijoita.

## Ennen nimettyjä yrityksiä

Kaksi arvioijaa käsittelee toisistaan riippumatta vähintään kaksi synteettistä tapausta:

- kapasiteettipainotteinen toimija;
- tietopalvelupainotteinen toimija.

Arvioijat saavat saman lähdepaketin, menetelmäversion ja näytön katkaisupäivän. He eivät näe toistensa pisteitä tai perusteluja ennen ensimmäisen kierroksen lukitsemista.

Auditointiagentit käynnistetään ilman jaettua keskusteluhistoriaa. Niille annetaan vain kalibrointiin nimetyt julkiset menetelmä- ja lähdetiedostot sekä oma tulostiedosto. Agentille ei anneta toisen arvioijan tulosta, pääagentin harjoitustulosta tai odotettua pistetulosta. Molempien agenttien tarkka tunniste, malliperhe, käynnistysaika ja eristyksen tapa kirjataan.

Arvioijat käyttävät samaa [muuttujien pisteytysohjetta](pisteytysohje.md). Kalibroinnin lähdepaketit, tyhjä arviointipohja ja lukitusohje ovat [kalibroinnin työpaketissa](kalibrointi/README.md).

## Hyväksymisrajat

Kalibrointi hyväksytään vasta, kun molemmissa tapauksissa:

- kelpoisuuspäätös on sama;
- valitut roolit ovat samat;
- vähintään 80 prosentissa numeerisista muuttujista piste-ero on enintään yksi;
- kummankin roolin painotettujen tulosten ero on enintään 0,30 pistettä;
- kokonaisluottamus eroaa enintään yhden luokan;
- mikään keskeinen lähde ei jää vain toisen arvioijan käsittelyyn ilman dokumentoitua syytä;
- mahdolliset sidonnaisuudet on ilmoitettu.
- arvioijat ovat joko kaksi eri ihmistä tai kaksi eri eristettyä auditointiagenttia;
- ihminen hyväksyy vertailuraportin ennen menetelmäportin avaamista.

Jos rajat eivät täyty, arvioijat kirjaavat eron syyn luokkaan `epäselvä määritelmä`, `eri lähdetulkinta`, `puuttuva lähde`, `laskentavirhe` tai `muu`. Menetelmää korjataan ennen uutta, kokonaan itsenäistä kierrosta.

Ensimmäinen auditointiagenttikierros läpäisi määrälliset rajat, mutta paljasti yhteisen tulkintaeron `ei sovellu` -tilan ja nollapisteen välillä. Pisteytysohjetta täsmennettiin 7.9.2026, ja hyväksyntä perustetaan tämän täsmennyksen jälkeen tehtävään uuteen eristettyyn kierrokseen `0.2-2`.

## Tallennettava kalibrointitietue

- menetelmäversio ja näytön katkaisupäivä;
- tapaustunniste ja käytetty lähdepaketti;
- arvioijat omilla identiteeteillään sekä ihmis- tai auditointiagenttityypillä;
- auditointiagenttien malliperhe, käynnistysaika ja eristyksen tapa;
- ensimmäisen kierroksen lukitut tulokset;
- muuttujakohtaiset erot;
- laskennan ja luottamuksen erot;
- erimielisyyksien syyt ja tehdyt menetelmämuutokset;
- ihmisen päätös hyväksyä tai hylätä kalibrointi.

## Nykytila

Tekniset esimerkkiaineistot, kaksi lähdepakettia, arviointipohja, tiedostojen lukitus, tulosten vertailu ja laskennan automaattiset testit sisältyvät tietovarastoon. Omistaja hyväksyi 7.9.2026, että kaksi toisistaan eristettyä auditointiagenttia voi toteuttaa kalibroinnin.

Kierros 0.2-2 läpäisi tekniset vertailurajat 7.9.2026, ja Valto Loikkanen hyväksyi tuloksen samana päivänä. [Tulosraportti](kalibrointi/tulos-0.2-2.md) ja [koneellisesti luettava hyväksyntätietue](kalibrointi/hyvaksynta-0.2-2.yaml) avaavat nimetyt toimija-arviot luonnoskäyttöön. Julkaisu vaatii edelleen erillisen ihmiskatselmuksen ja julkaisupäätöksen.

# Kalibrointiprotokolla

Versio 0.2 — kalibrointia odottava luonnos

Päivitetty 4.9.2026.

## Tavoite

Kalibrointi testaa, tuottavatko kaksi riippumatonta arvioijaa samasta rajatusta aineistosta riittävän yhtäpitävän tuloksen. Se ei todista painojen ennustevoimaa eikä tee esimerkkitoimijoista todellisia markkinatoimijoita.

## Ennen nimettyjä yrityksiä

Kaksi arvioijaa käsittelee toisistaan riippumatta vähintään kaksi synteettistä tapausta:

- kapasiteettipainotteinen toimija;
- tietopalvelupainotteinen toimija.

Arvioijat saavat saman lähdepaketin, menetelmäversion ja näytön katkaisupäivän. He eivät näe toistensa pisteitä tai perusteluja ennen ensimmäisen kierroksen lukitsemista.

## Hyväksymisrajat

Kalibrointi hyväksytään vasta, kun molemmissa tapauksissa:

- kelpoisuuspäätös on sama;
- valitut roolit ovat samat;
- vähintään 80 prosentissa numeerisista muuttujista piste-ero on enintään yksi;
- kummankin roolin painotettujen tulosten ero on enintään 0,30 pistettä;
- kokonaisluottamus eroaa enintään yhden luokan;
- mikään keskeinen lähde ei jää vain toisen arvioijan käsittelyyn ilman dokumentoitua syytä;
- mahdolliset sidonnaisuudet on ilmoitettu.

Jos rajat eivät täyty, arvioijat kirjaavat eron syyn luokkaan `epäselvä määritelmä`, `eri lähdetulkinta`, `puuttuva lähde`, `laskentavirhe` tai `muu`. Menetelmää korjataan ennen uutta, kokonaan itsenäistä kierrosta.

## Tallennettava kalibrointitietue

- menetelmäversio ja näytön katkaisupäivä;
- tapaustunniste ja käytetty lähdepaketti;
- arvioijat omilla identiteeteillään;
- ensimmäisen kierroksen lukitut tulokset;
- muuttujakohtaiset erot;
- laskennan ja luottamuksen erot;
- erimielisyyksien syyt ja tehdyt menetelmämuutokset;
- ihmisen päätös hyväksyä tai hylätä kalibrointi.

## Nykytila

Tekniset esimerkkiaineistot ja laskennan automaattiset testit sisältyvät tietovarastoon. Omistaja hyväksyi menetelmäversion 0.2 4.9.2026, mutta kahden riippumattoman ihmisen kalibrointia ei ole vielä tehty. Nimettyjen toimijoiden arviointi pysyy siksi estettynä.

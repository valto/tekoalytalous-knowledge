# Hinnoittelu ja rahoitus

- Hintojen katkaisupäivä: 2026-09-01
- Kaikki laskelmissa käytetyt hinnat ovat verottomia
- Dollarihintoja ei muuteta pysyviksi eurofaktoiksi; talousmalli käyttää erillistä muutettavaa valuuttakurssia

## 1. Markkinahintojen tehtävä

Markkinahinnat eivät kerro suoraan, mitä suomalaisen operaattorin pitäisi veloittaa. Ne määrittävät vertailualueen:

- globaali käyttöhinta asettaa tokenpalvelun kilpailupaineen;
- kiihdytinkorttitunnin hinta kertoo kapasiteetin vaihtoehtoiskustannuksen;
- yritysohjelmistojen käyttäjähinnat kertovat, mihin jatkuvan tietopalvelun hintaa verrataan;
- tallennuksen hinta osoittaa, ettei tieto-operaattorin arvo voi perustua pelkkään levytilaan;
- suomalaiset palkat, energia, konesali, tuki ja rahoitus määrittävät paikallisen kustannuspohjan.

## 2. Tokenoperaattorin hintavertailut

Syyskuun 2026 julkisista hinnastoista saadaan seuraavia vertailupisteitä:

| Vertailu                                     |                                                      Julkinen hinta | Käyttö mallissa                              | Lähde                                          |
| -------------------------------------------- | ------------------------------------------------------------------: | -------------------------------------------- | ---------------------------------------------- |
| Pieni avoin kielimalli palveluna             | noin 0,14 dollaria / miljoona syötetokenia ja sama tuotostokeneille | globaalin halvan käyttöhinnan alaraja        | [Together AI](https://www.together.ai/pricing) |
| Suurempi avoin 70 miljardin parametrin malli |               noin 1,04 dollaria / miljoona syöte- ja tuotostokenia | yleiskäyttöisen suuren mallin vertailu       | [Together AI](https://www.together.ai/pricing) |
| Avoimien mallien koko julkinen vaihteluväli  |        alle 0,20 dollarista useisiin dollareihin / miljoona tokenia | mallikohtainen hinnanvaihtelu                | [Together AI](https://www.together.ai/pricing) |
| H100 PCIe -kiihdytinkortti pilvestä          |                                     noin 1,99–2,89 dollaria / tunti | joustavan kapasiteetin alarajan vertailu     | [Runpod](https://www.runpod.io/pricing)        |
| H100 SXM -kiihdytinkortti pilvestä           |                                     noin 2,69–3,29 dollaria / tunti | suorituskykyisemmän kapasiteetin vertailu    | [Runpod](https://www.runpod.io/pricing)        |
| Hallittu omistettu päättelykapasiteetti      |                     noin 6,49–11,95 dollaria / kiihdytinkorttitunti | vahvemman palvelutason ja hallinnan vertailu | [Together AI](https://www.together.ai/pricing) |

Hinnat eivät ole täysin vertailukelpoisia. Malli, laite, eräajo, välimuisti, nopeus, käyttöaste, alue, tuki ja sopimusaika muuttavat kustannusta.

### Hinnoittelukaava

Tokenoperaattori laskee vähintään:

```text
myytävät kiihdytinkorttitunnit
= korttien määrä × 8 760 tuntia × käyttöaste

kapasiteetin omakustannus
= laiterahoituksen vuosimaksu
+ sähkö ja jäähdytys
+ konesali ja verkko
+ ohjelmisto, valvonta ja huolto
+ henkilöstö ja yhteiset kulut
+ käyttämättömän kapasiteetin kustannus

tarvittava tuntihinta
= kapasiteetin omakustannus / myytävät tunnit / tavoiteltu kustannusosuus
```

Tokenhinta johdetaan tuntihinnasta vasta sen jälkeen, kun valitun mallin todellinen läpäisy on mitattu. Yhtä yleistä “tokenia per kiihdytinkorttitunti” -oletusta ei pidä käyttää eri mallikokojen välillä.

## 3. Tieto-operaattorin hintavertailut

[Yritysten valmiit toimisto-, identiteetti- ja turvallisuuspaketit](https://www.microsoft.com/fi-fi/microsoft-365/business/compare-all-microsoft-365-business-products) muodostavat Suomessa julkisen käyttäjäkohtaisen hintavertailun. Tieto-operaattori ei ole niiden kopio, mutta asiakkaat vertaavat uutta kuukausimaksua olemassa oleviin käyttäjäkohtaisiin palveluihin. Vertailu tarkistetaan aina uudelleen hinnan katkaisupäivänä eikä yhden toimittajan hinnastoa käsitellä yleisenä markkinahintana.

[Raakatallennus](https://www.hetzner.com/storage/storage-box/) on puolestaan halpaa suhteessa hallittuun palveluun. Siksi tieto-operaattorin hinnoittelun tulee osoittaa, mistä lisäarvo syntyy:

- omistajakohtainen tietomalli;
- lähde- ja versiohistoria;
- identiteetti ja valtuutukset;
- liitännät olemassa oleviin järjestelmiin;
- varmuuskopio, palautuminen ja vienti;
- agenttien rajattu käyttö;
- jatkuva tuki ja vastuu;
- toimialakohtainen hallinta.

### Asiakastyyppien alustavat hinta-alueet

| Asiakas                          |                       Perusmaksu | Käyttäjä tai jäsen |               Käyttöönotto | Huomio                                  |
| -------------------------------- | -------------------------------: | -----------------: | -------------------------: | --------------------------------------- |
| Yksilö                           |                       15–40 €/kk |           sisältyy |                    0–300 € | itsepalvelu ja rajattu tuki             |
| Ammattilainen tai mikroyritys    |                     150–500 €/kk |         15–35 €/kk |              1 000–4 000 € | muutama liitäntä ja työaikatuki         |
| Pieni tai keskisuuri yritys      |                   500–2 000 €/kk |         20–50 €/kk |             3 000–15 000 € | hallittu tietoydin ja jatkuvuus         |
| Säännelty tai kriittinen toimija |                2 000–10 000 €/kk |        30–100 €/kk |           10 000–100 000 € | auditointi, palvelutaso ja integraatiot |
| Toimialakohtainen osuuskunta     | yhteinen perusmaksu + jäsenmaksu |   20–80 €/jäsen/kk | yhteinen ja jäsenkohtainen | yhteiset säännöt ja hankinta            |

Nämä ovat tutkimushypoteeseja. Ennen julkaisua ne pitää testata asiakashaastatteluilla, tarjousvertailuilla ja vähintään yhdellä todellisella pilotilla.

## 4. Yhdistelmäoperaattorin lasku

Yhdistelmäoperaattorin laskussa näytetään erikseen:

1. tietoytimen ja valtuutusten kuukausimaksu;
2. tokenien käyttö tai varattu kapasiteetti;
3. integraatio- ja käyttöönottotyö;
4. tuki ja palvelutaso;
5. toimialakohtaiset lisäpalvelut.

Erittely ei ole vain hinnoittelutapa. Se on siirrettävyyden kontrolli: asiakas näkee, minkä kerroksen se voi kilpailuttaa erikseen.

Asiakasryhmittäinen ja erikseen ostettava hinnasto on tiedostossa [Tuotteet ja palvelut](tuotteet-ja-palvelut.md).

## 5. Virtuaalioperaattorin tukku- ja vähittäishinta

Virtuaalioperaattorin laskennassa erotetaan:

- tokenien tai tietoytimen tukkukustannus;
- oma asiakashankinta, laskutus ja ensimmäinen tuki;
- toimialakohtaiset liitännät ja sisältö;
- vähittäismyyntihinta;
- tuotekohtainen myyntikate.

Tokenien tavoiteltu tukkuhinta on alustavasti 15–35 prosenttia vastaavaa vähittäishintaa alempi. Tämä ei ole riittävä kate kaikille tuotteille. Kannattavuus voi vaatia kuukausittaista hallinta- tai tietopalvelumaksua, valmista jakelukanavaa tai toimialakohtaisia lisäpalveluja.

Virtuaalioperaattorille on tehty erilliset toimialakohtainen yritysmalli ja valtakunnallinen kuluttaja- sekä pienyritysmalli. Niiden hinnat ja volyymit ovat hypoteeseja, jotka pitää korvata tukkutarjouksilla ja kanavakohtaisilla asiakashankintatiedoilla.

## 6. Laiterahoitus tokenoperaattorille

### Omaisuus- ja palveluyhtiön erottaminen

Yksi mahdollinen rakenne on:

- omaisuusyhtiö omistaa kiihdytinkortit, palvelimet ja verkkolaitteet;
- palveluyhtiö operoi malleja, asiakkaita ja tukea;
- pitkä kapasiteettisopimus sitoo kassavirran laiterahoitukseen;
- laitteisto ja sopimukset muodostavat yhdessä rahoittajan vakuuspaketin.

### Mahdollisia rahoitusvälineitä

- leasing, jossa yritys maksaa laitteen käytöstä;
- osamaksu, jossa laite toimii rahoituksen vakuutena;
- pankkilaina ja Finnveran takaus investointiin tai käyttöpääomaan;
- laitetoimittajan rahoitus;
- erillinen infrastruktuurirahasto tai yhteisyritys;
- asiakkaan ennakkomaksu, kapasiteettivaraus tai vähimmäisosto;
- alueellinen omistus, osuuskunta tai usean operaattorin yhteinen tukkuyhtiö.

[Nordea kuvaa yritysleasingin](https://www.nordea.fi/yritysasiakkaat/palvelumme/rahoitus/leasing.html) mallina, jossa yritys maksaa laitteen käytöstä ja rahoitettava kohde toimii pääasiallisena vakuutena. [Finnveran takaus](https://www.finnvera.fi/rahoitus/takaukset/finnvera-takaus) voi täydentää muun rahoittajan myöntämää investointi- tai käyttöpääomarahoitusta.

### Mikä tekee hankkeen rahoitettavaksi?

- laitteiston dokumentoitu hankintahinta ja jälleenmyyntimarkkina;
- vakuutus, huolto ja käyttöympäristö;
- usealle asiakkaalle hajautettu kysyntä;
- vähimmäiskäyttö- tai kapasiteettisopimukset;
- sähkön ja konesalin ennakoitava hinta;
- mitattu käyttöaste;
- realistinen laitteiden taloudellinen käyttöikä;
- suunnitelma vanhemman kapasiteetin siirtämisestä pienempiin malleihin tai toisiin työkuormiin.

### Keskeinen varoitus

Kiihdytinkortti on vakuudeksi kelpaava fyysinen omaisuuserä, mutta sen arvo voi laskea nopeasti uuden laitesukupolven, energiatehokkuuden tai mallien muutosten vuoksi. Siksi vakuusarvoa ei pidä rinnastaa esimerkiksi kiinteistöön. Laitteiston lisäksi rahoittaja tarvitsee uskottavan käyttöasteen ja sopimuskannan.

## 7. Internet-, virtuaalioperaattori- ja energiamarkkinoiden analogiat

### Internetpalveluntarjoajat

[Internet rakentui erikseen omistettujen verkkojen verkoksi](https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/). Paikalliset palveluntarjoajat saattoivat palvella omaa aluettaan, ostaa runkoyhteyttä ja [vaihtaa liikennettä yhteisissä pisteissä](https://www.internetsociety.org/issues/ixps/). Vastaava rakenne tekoälytaloudessa voisi olla:

- paikallinen tokenoperaattori;
- valtakunnallinen tai eurooppalainen kapasiteettitukku;
- yhteinen mallien ja mittauksen rajapinta;
- operaattorien välinen kapasiteetin vaihto;
- asiakkaan mahdollisuus vaihtaa toimittajaa muuttamatta tietoydintään.

### Virtuaalioperaattorit

[Saunalahti on suomalainen vertailukohta](https://elisa.com/corporate/about-elisa/history/) asiakasbrändin ja palvelun rakentamisesta muiden omistaman mobiiliverkon päälle. Tekoälytaloudessa vastaava malli erottaa tokenien ja tietoinfrastruktuurin tukun asiakassegmentin tuotteistavasta palveluoperaattorista. Katso [Virtuaalioperaattori ja tukkumarkkina](virtuaalioperaattori.md).

### Uusiutuva energia

[Uusiutuvan energian markkinoille](https://energy.ec.europa.eu/topics/markets-and-consumers/energy-communities_en) syntyi pieniä tuottajia, hankeyhtiöitä ja energiayhteisöjä tuotannon, verkon, myynnin ja asiakassopimuksen eri rooleihin. [Pääoman kustannus](https://www.iea.org/articles/the-cost-of-capital-in-clean-energy-transitions) vaikuttaa voimakkaasti pääomavaltaisten energiahankkeiden talouteen, ja pitkä ostosopimus voi parantaa kassavirran ennustettavuutta.

Tokenoperaattorin vastaava sopimus on pitkä kapasiteettivaraus tai vähimmäisosto. Tieto-operaattorin vastaava vakaus syntyy puolestaan uusiutuvasta kuukausipalvelusta ja korkeasta säilyvyydestä.

Analogiat auttavat kysymään oikeita kysymyksiä, mutta eivät todista, että markkinat kehittyvät samalla tavalla.

# Tuotteet ja palvelut asiakasryhmittäin

- Versio: 0.3
- Päiväys: 2026-09-01
- Kuluttajahinnat sisältävät arvonlisäveron. Yrityshinnat ovat ilman arvonlisäveroa.
- Hinnat ovat testattavia myyntihypoteeseja, eivät julkaistu hinnasto tai tarjous.

## 1. Tuoterakenteen periaate

Asiakkaan ei tarvitse ostaa yhtä suurta tekoälypakettia. Jokainen palvelu muodostuu erikseen valittavista kerroksista:

1. **Tokenit** — avoimilla malleilla tuotettu laskenta ja päättely, käytön mukaan tai varattuna kapasiteettina.
2. **Tietoydin** — omistajan hallitsema tieto, muisti, identiteetti, valtuutukset, varmistukset ja vienti.
3. **Yhdistelmä** — tokenit ja tietoydin samalla sopimuksella, mutta erillisillä hinnoilla ja vaihdettavina kerroksina.
4. **Lisäpalvelut** — käyttöönotto, integraatiot, toimialamallit, tuki, auditointi ja jatkuvuus.

Asiakas voi siis ostaa:

- vain tokeneita ilman pysyvää tietopalvelua;
- vain tietoytimen ja käyttää valitsemaansa ulkoista mallipalvelua;
- molemmat samalta operaattorilta;
- palvelun jälleenmyyjältä tai virtuaalioperaattorilta, joka hankkii kapasiteetin tukkuna.

## 2. Kuluttajat

### 2.1 Tokenit Kokeilu

| Ominaisuus    | Sisältö                                                                            |
| ------------- | ---------------------------------------------------------------------------------- |
| Asiakas       | Satunnainen käyttäjä, joka haluaa kokeilla avoimia malleja ilman jatkuvaa tilausta |
| Tuote         | Etukäteen maksettava token-saldo                                                   |
| Hinta         | 5 €, 10 € tai 25 € saldo                                                           |
| Laskutus      | Mallikohtainen kulutus; hinta näytetään ennen käyttöä                              |
| Tieto         | Pyyntöjä ei tallenneta pysyväksi tietoytimeksi                                     |
| Tuki          | Itsepalvelu                                                                        |
| Asiakaslupaus | Käytä avointa mallia ilman sidottua kuukausipakettia                               |

### 2.2 Tokenit Jatkuva

| Ominaisuus    | Sisältö                                                               |
| ------------- | --------------------------------------------------------------------- |
| Asiakas       | Säännöllinen henkilökohtainen käyttäjä                                |
| Tuote         | Kuukausittainen käyttötili, kulutusrajat ja valittavat avoimet mallit |
| Tavoitehinta  | 9,90 €/kk, josta osa hyvitetään tokenkäyttöön; ylitys käytön mukaan   |
| Tieto         | Ei pysyvää muistia tai tietoydintä                                    |
| Tuki          | Sähköposti ja käyttöohjeet                                            |
| Asiakaslupaus | Ennakoitava lasku ja mahdollisuus vaihtaa mallia                      |

### 2.3 Oma tieto

| Paketti         | Tavoitehinta | Sisältö                                                                     |
| --------------- | -----------: | --------------------------------------------------------------------------- |
| Oma tieto Perus |   12,90 €/kk | henkilökohtainen tietoydin, vienti, varmistus ja rajattu tallennus          |
| Oma tieto Plus  |   24,90 €/kk | suurempi tallennus, useita tietolähteitä, versiohistoria ja vahvempi tuki   |
| Oma tieto Perhe |   39,90 €/kk | enintään viisi erillistä henkilökohtaista tietoydintä ja jaetut perhetiedot |

Tokenit eivät sisälly näihin paketteihin. Käyttäjä voi valita tämän operaattorin tokenpalvelun, toisen tokenoperaattorin tai muun yhteensopivan mallipalvelun.

### 2.4 Oma tekoäly

Yhdistelmäpaketti sisältää tietoytimen ja yhden laskun, mutta tokenkäyttö näytetään erillisenä rivinä.

| Paketti           |             Tavoitehinta | Sisältö                                             |
| ----------------- | -----------------------: | --------------------------------------------------- |
| Oma tekoäly Perus | 19,90 €/kk + tokenkäyttö | Oma tieto Perus, mallien valinta ja käyttörajat     |
| Oma tekoäly Plus  | 34,90 €/kk + tokenkäyttö | Oma tieto Plus, useita malleja ja priorisoitu tuki  |
| Oma tekoäly Perhe | 54,90 €/kk + tokenkäyttö | perheen tietoytimet, jaettu hallinta ja käyttörajat |

Kuluttajatuotteet ovat mahdollinen myöhempi vaihe. Ensimmäinen liiketoimintavaihe keskittyy yrityksiin, koska kuluttajapalvelu vaatii suuren volyymin, pitkälle automatisoidun tuen ja vahvan jakelukumppanin.

## 3. Yksinyrittäjät ja mikroyritykset, 1–9 henkilöä

### 3.1 Tokenit yritykselle

- ei perusmaksua tai 29 €/kk hallintamaksu;
- tokenit mallikohtaisen hinnaston mukaan;
- yrityskohtaiset käyttörajat, laskutus ja käyttäjät;
- ei pysyvää yritysmuistia;
- sopii ohjelmiston rakentamiseen tai yksittäiseen käsittelytehtävään.

### 3.2 Yrityksen tietoydin Mikro

| Hintaosa                 |     Tavoitehinta |
| ------------------------ | ---------------: |
| Organisaation perusmaksu |         149 €/kk |
| Käyttäjä                 | 19 €/käyttäjä/kk |
| Käyttöönotto             |      990–2 500 € |
| Vakioitu lisäliitäntä    |      49–149 €/kk |

Sisältö: organisaation tietoydin, käyttäjät ja oikeudet, vienti, varmistukset, kaksi vakioitua tietolähdettä ja työaikatuki. Tokenit ostetaan erikseen.

### 3.3 Yrityksen tekoäly Mikro

- tietoydin kuten yllä;
- tokenit samassa laskussa käytön mukaan;
- 49 €/kk yhteinen operointilisä;
- mallin vaihto ilman tietoytimen siirtoa;
- tavoiteasiakas: asiantuntijayritys, jolla ei ole omaa tietotekniikkatiimiä.

## 4. Pienet yritykset, 10–49 henkilöä

### 4.1 Tokenit yritykselle Varattu

- 199 €/kk hallinta ja vähimmäisosto;
- käytön mukaan laskutettavat avoimet mallit;
- mahdollisuus varata läpäisyä tai kiihdytinkorttitunteja;
- yhteys yrityksen omasta sovelluksesta;
- kulutusrajat kustannuspaikoittain;
- lisämaksullinen suomalainen tuki.

### 4.2 Yrityksen tietoydin Pieni

| Hintaosa                 |     Tavoitehinta |
| ------------------------ | ---------------: |
| Organisaation perusmaksu |         490 €/kk |
| Käyttäjä                 | 29 €/käyttäjä/kk |
| Käyttöönotto             |   4 000–12 000 € |
| Vakioitu lisäliitäntä    |     150–500 €/kk |

Sisältö: hallittu organisaatiomuisti, lähde- ja versiohistoria, roolit, vienti, palautumistesti, neljä vakioitua liitäntää ja nimetty palveluvastaava.

### 4.3 Yrityksen tekoäly Pieni

- tietoydin ja tokenit eriteltyinä;
- 250 €/kk operointilisä;
- vähintään kaksi vaihdettavaa avointa mallia;
- mahdollisuus ostaa tokenit toiselta yhteensopivalta operaattorilta;
- tyypillinen kokonaislasku 1 000–3 500 €/kk käytöstä ja käyttäjämäärästä riippuen.

## 5. Keskisuuret yritykset, 50–249 henkilöä

### 5.1 Tokenkapasiteetti Keskisuuri

- 1 000 €/kk hallinta;
- sovittu vähimmäiskäyttö tai kapasiteettivaraus;
- erilliset kehitys-, testi- ja tuotantoympäristöt;
- mallikohtainen suorituskykymittaus;
- palvelutasot, varakapasiteetti ja yksityinen verkkoyhteys lisäpalveluina.

### 5.2 Yrityksen tietoydin Keskisuuri

| Hintaosa                     |     Tavoitehinta |
| ---------------------------- | ---------------: |
| Organisaation perusmaksu     |       1 500 €/kk |
| Käyttäjä                     | 35 €/käyttäjä/kk |
| Käyttöönotto                 |  15 000–50 000 € |
| Liitäntä tai toimialamoduuli |   500–2 500 €/kk |

Sisältö: useita tietolähteitä, hajautetut vastuut, auditointiloki, jatkuvuussuunnitelma, vientiharjoitus, palvelutaso ja kuukausittainen palvelukatsaus.

### 5.3 Yrityksen tekoäly Keskisuuri

- tietoydin ja kapasiteetti yhdellä palvelusopimuksella;
- 1 000–3 000 €/kk operointilisä;
- tokenit käytön tai varauksen mukaan;
- vähintään kaksi kapasiteettitoimittajaa;
- tavoitehinta tavallisesti 5 000–20 000 €/kk ennen käyttöönottoa.

## 6. Suuret ja säännellyt organisaatiot, vähintään 250 henkilöä

### 6.1 Yksityinen tokenkapasiteetti

- asiakkaalle varattu laite- tai kapasiteettiallas;
- sijainti-, verkko-, lokitus- ja mallivaatimukset sopimuksessa;
- tavoitehinta vähintään 5 000 €/kk ja käytännössä usein 20 000–250 000 €/kk;
- erillinen käyttöönotto ja kapasiteetin vähimmäisosto;
- monitoimittajainen varautuminen lisäpalveluna.

### 6.2 Hallittu tietoydin

| Hintaosa                                    |      Tavoitehinta |
| ------------------------------------------- | ----------------: |
| Organisaation perusmaksu                    | 5 000–25 000 €/kk |
| Käyttäjä tai palvelutunnus                  |       25–100 €/kk |
| Käyttöönotto                                |  50 000–500 000 € |
| Jatkuvuus, auditointi ja toimialakontrollit | tarjouksen mukaan |

Suuren asiakkaan hinta ei määräydy pelkän käyttäjämäärän mukaan. Ratkaisevia ovat tietolähteet, vastuut, palautumisvaatimus, käyttöoikeuksien monimutkaisuus, palvelutaso ja ammattivastuu.

### 6.3 Hallittu yhdistelmä

- erillinen tietopalvelun, kapasiteetin, integraation ja tuen laskutus;
- asiakas voi kilpailuttaa laskennan tietoydintä vaihtamatta;
- palvelu voi käyttää omaa kapasiteettia, tukkukapasiteettia tai molempia;
- sopii tilanteeseen, jossa yksi vastuutaho on arvokkaampi kuin kerrosten erillishankinta.

## 7. Toimiala- ja osuuskuntatuotteet

Toimialaoperaattori voi palvella esimerkiksi terveysalan ammattilaisia, lakipalveluja, tilitoimistoja, kiinteistöalaa, teollisia huoltoyhtiöitä tai kuntien yhteisiä palveluja. Malli ei edellytä yhden nimetyn toimijan käyttöä.

| Tuote                             | Hinnoitteluperiaate               |
| --------------------------------- | --------------------------------- |
| Yhteinen tietomalli ja kontrollit | 2 000–20 000 €/kk yhteisöltä      |
| Jäsenen oma tietoydin             | 20–100 €/jäsen/kk                 |
| Jäsenen tokenit                   | erillinen käyttö tai jäsenpaketti |
| Yhteinen liitäntä                 | perustaminen + jatkuva ylläpito   |
| Ammattituki ja auditointi         | jäsen- tai tapahtumaperusteinen   |

Yhteisö voi kilpailuttaa tokenit yhteisesti, vaikka jokainen jäsen omistaa oman tietonsa.

## 8. Tukkutuotteet

### 8.1 Tokenitukku

- miljoonat tokenit malliluokittain;
- kiihdytinkorttitunnit;
- varattu kuukausikapasiteetti;
- kapasiteettiallas toimiala- tai alueoperaattorille;
- tukkuhinta tavoitellaan 15–35 prosenttia vastaavaa vähittäishintaa alemmaksi volyymistä ja sitoutumisesta riippuen.

### 8.2 Tietoydintukku

- yhteinen tekninen tietoydinalusta;
- virtuaalioperaattorikohtainen erottelu ja brändäys;
- käyttäjä-, organisaatio- tai tietomääräperusteinen tukkuhinta;
- vienti, varmistus ja operaattorin vaihto yhteisinä ydintoimintoina;
- jälleenmyyjä vastaa asiakkuudesta ja mahdollisesta toimialasisällöstä.

### 8.3 Valkoisen merkin yhdistelmäpalvelu

- virtuaalioperaattorin oma nimi, hinnasto ja asiakassuhde;
- taustalla erillinen token- ja tietoinfrastruktuuri;
- 1 000–10 000 €/kk alustamaksu sekä käyttö- ja käyttäjäkohtaiset tukkumaksut;
- toimialakohtaiset liitännät, käyttöliittymä ja tuki jälleenmyyjän vastuulla tai lisäpalveluna.

## 9. Lisäpalvelut

- tietojen kartoitus ja siirto;
- vakioidut ja asiakaskohtaiset liitännät;
- mallien soveltuvuustestaus;
- tietoturva- ja tietosuojakatselmus;
- jatkuvuus- ja vientiharjoitus;
- toimialasanasto ja tietomalli;
- henkilöstön koulutus;
- ympärivuorokautinen häiriöpäivystys;
- erillinen testaus- tai todentamispalvelu.

Lisäpalveluista syntyvä projektitulo ei saa peittää sitä, onko jatkuva operaattoripalvelu itsessään kannattava.

## 10. Tuotteen hyväksymiskriteerit

Tuote voidaan ottaa pysyvään hinnastoon vasta, kun:

- asiakas ymmärtää, ostaako se tokeneita, tietoa vai molempia;
- hinnasto erottaa jatkuvan maksun, käytön ja käyttöönottotyön;
- tietoytimen vienti on testattu;
- tokenpalvelun tietojen säilytysraja on teknisesti todennettu;
- vähintään kolme maksavaa asiakasta on ostanut tuotteen ilman perustajan henkilökohtaista erikoisjärjestelyä;
- palvelun myyntikate ja tukityö voidaan mitata tuotekohtaisesti.

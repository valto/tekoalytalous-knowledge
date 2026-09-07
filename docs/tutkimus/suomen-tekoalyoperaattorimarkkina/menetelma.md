# Tutkimusmenetelmä

Versio 0.2 — kalibroitu menetelmä

Päivitetty 4.9.2026.

## Arviointiyksikkö

Arviointiyksikkö on oikeushenkilö, osuuskunta, yhteenliittymä tai sopimuksellisesti erotettavissa oleva liiketoimintayksikkö. Konsernia ei arvioida automaattisesti yhtenä toimijana, jos operaattorille olennainen vastuu, omaisuus tai asiakassopimus kuuluu vain yhdelle yksikölle.

Oikeushenkilö ja konsernisuhde täsmäytetään ensisijaisesti viranomaisrekisteristä tai toimijan uusimmasta virallisesta raportista. Jos palvelun tosiasiallista vastuunkantajaa ei voida tunnistaa, toimija jää rajatapaukseksi.

## Suomen markkinan maantieteellinen raja

Ensimmäiseen seulaan kuuluu toimija, jos vähintään yksi seuraavista täyttyy:

- se on sijoittautunut Suomeen;
- se operoi Suomessa fyysistä kapasiteettia tai tietopalvelua;
- se palvelee suomalaisia asiakkaita suomalaisella sopimus-, laskutus- tai tukirakenteella;
- sillä on julkisesti nimetty Suomea koskeva suunnitelma, jolle on osoitettu rahoitus, investointipäätös, sopimus tai toteutusaikataulu.

Pelkkä palvelun tekninen saatavuus Suomesta ei vielä tee globaalista pilvipalvelusta Suomen markkinatoimijaa. Ulkomainen toimija voidaan ottaa mukaan, jos sillä on Suomessa fyysinen kapasiteetti tai yksilöity paikallinen sopimus- ja palveluvastuu.

## Kelpoisuusseula

Toimija etenee yrityskohtaiseen arviointiin vain, jos kaikki seuraavat ehdot täyttyvät:

1. **Tunnistettava toimija:** oikeushenkilö, jäsenpohjainen yhteisö, yhteenliittymä tai sopimuksellisesti erotettu liiketoimintayksikkö voidaan nimetä.
2. **Operaattorille olennainen vastuu tai valmius:** julkinen lähde osoittaa vähintään yhden seuraavista: oma palvelusopimus, kapasiteetin tai tietopalvelun jatkuva hallinta, palvelutason vastuu, mittaus ja laskutus, häiriönhallinta, asiakkaan valtuutusten hallinta tai tuotteistettu tukkupalvelu.
3. **Ulkoinen palvelusuhde:** palvelulla on ulkoinen asiakas, jäsenkunta tai ennalta määritelty palveluyhteisö.
4. **Jatkuva operointi:** vastuu jatkuu yksittäisen toimitusprojektin jälkeen ja siihen kuuluu vähintään kaksi seuraavista: seuranta, tuki, ylläpito, kapasiteetin hallinta, käyttöoikeuksien hallinta, laskutus tai häiriöiden käsittely.
5. **Tuotteistettu palvelu:** palvelulla on kuvattu kohderyhmä, toimitussisältö ja sopimus- tai hinnoitteluperiaate, vaikka hintaa ei olisi julkistettu.
6. **Arvioitavuus:** vähintään yhden roolin pakollisista muuttujista on riittävä julkinen näyttö. Täyttä pistetulosta ei kuitenkaan muodosteta ennen [laskentasäännön](painotus-ja-laskenta.md) kattavuusrajan täyttymistä.

Jos yksi ehdoista on tuntematon, tulos on `rajatapaus`, ei `jatkoon`. Ulos rajatun toimijan perustelu ja lähteet säilytetään.

Seuraavat voivat olla tärkeitä ekosysteemitoimijoita mutta eivät yksin läpäise operaattoriseulaa:

- datakeskuskiinteistön omistaja ilman kapasiteettipalvelua;
- laitevalmistaja ilman jatkuvaa asiakasoperaatiota;
- tutkimushanke ilman palveluvastuuta;
- konsultti, joka vain toteuttaa asiakkaan kertaluonteisen projektin;
- suljetun mallin tai ohjelmiston jälleenmyyjä ilman omaa asiakassopimus-, tuki- tai operointivastuuta;
- organisaation sisäinen tiimi, joka ei palvele ulkoisia asiakkaita tai jäseniä.

## Arvioinnin tasot

| Taso | Merkitys | Sallittu tulos |
| --- | --- | --- |
| 0. Löydetty | Toimija kuuluu mahdolliseen lähdejoukkoon. | Nimi, ryhmä ja löytölähde. |
| 1. Seulottu | Kelpoisuusseulan tulos on dokumentoitu. | Jatkoon, rajatapaus tai ulos rajattu. |
| 2. Profiloitu | Roolit, vastuut, lähteet ja keskeiset puutteet on koottu. | Ei painotettua tulosta. |
| 3. Koearvioitu | Muuttujat on arvioitu lukitulla menetelmäversiolla. | Sisäinen tai julkaisematon kalibrointitulos. |
| 4. Rinnakkaisarvioitu | Kaksi riippumatonta arvioijaa on käsitellyt saman aineiston. | Menetelmän yhtäpitävyysraportti. |
| 5. Katselmoitu | Ihminen on tarkistanut väitteet, sidokset ja johtopäätökset. | Mahdollinen julkaisuehdotus. |
| 6. Vastine käsitelty | Toimijan tosiasiakorjaus tai vastine on käsitelty. | Julkaisupäätöksen pohja. |

## Näyttö ja epävarmuus

Jokaisesta havainnosta kirjataan:

- lähde, lähdetyyppi ja lähteen julkaisu- tai päivityspäivä;
- tarkka väite, jota lähde tukee;
- lyhyt lähdeote tai muu paikannustieto;
- onko kyse suorasta tiedosta vai tutkijan päätelmästä;
- luottamusluokka A–D;
- mahdollinen ristiriitainen lähde;
- viimeinen tarkistuspäivä;
- arvioijan identiteetti ja mahdollinen sidonnaisuus.

`Tuntematon` ei ole pistemäärä. Se tarkoittaa, ettei julkinen näyttö riitä myönteiseen tai kielteiseen päätelmään. Pistemäärä `0` annetaan vain, jos luotettava lähde osoittaa kyvyn puuttuvan tai todetun esteen olevan olemassa. `Ei sovellu` edellyttää erillistä perustelua eikä sitä saa käyttää heikon tai puuttuvan näytön peittämiseen.

Lähteiden ajantasaisuus, riippumattomuus, arkistointi ja arvioijan sidonnaisuudet määritellään [lähde- ja esteellisyyssäännöissä](lahde-ja-esteellisyys.md).

## Painotus ja laskenta

Pisteytyksen kaava, vähimmäiskattavuus, pakolliset muuttujat, luottamusluokan johtaminen, pyöristys ja herkkyystarkastelu määritellään tiedostossa [Painotus ja laskenta](painotus-ja-laskenta.md). Luottamus ei muuta toimijalle annettua pistettä, vaan kertoo erikseen, kuinka vahva näyttö tuloksen takana on.

Painotettu tulos kuvaa vain nykyistä toteutuskykyä yhdessä roolissa. Sitä ei saa käyttää yritysten automaattiseen järjestämiseen eikä muiden tulosten korvikkeena.

## Erilliset tulokset

Jokaisesta arvioidusta roolista raportoidaan seuraavat tulokset erikseen:

| Tulos | Sallittu muoto | Vähimmäisnäyttö |
| --- | --- | --- |
| Nykyinen toteutuskyky | 0,00–5,00 tai `ei muodosteta` | Laskentasäännön kattavuus ja pakolliset muuttujat täyttyvät. |
| Strateginen sopivuus | ei arvioitavissa / heikko / osittainen / vahva | Toimijan oma ajantasainen strategia tai kaksi keskenään riippumatonta lähdettä sekä nimetty yhteys rooliin. |
| Näyttö markkinoilletulon aikomuksesta | ei näyttöä / alustava / vahvistettu / sitova | Alustava vaatii nimetyn julkisen tavoitteen; vahvistettu lisäksi budjetin, kumppanuuden, rekrytoinnin tai aikataulun; sitova investointipäätöksen, sopimuksen tai jo avatun palvelun. |
| Mahdollinen kilpailuvoima | ei arvioitavissa / rajallinen / kohtalainen / vahva skenaario | Merkitään aina skenaarioksi; edellyttää nykykyvyn tulosta, nimettyjä markkinaedellytyksiä ja vastanäyttöä. |
| Tarvittavan muutoksen suuruus | pieni / keskisuuri / suuri / ei arvioitavissa | Pieni: kaikki pakolliset kyvyt vähintään 3; keskisuuri: enintään yksi pakollinen kyky alle 3; suuri: vähintään kaksi pakollista kykyä alle 3 tai jokin niistä 0–1. |
| Aika uskottavaan markkinoilletuloon | jo markkinassa / alle 12 kk / 1–3 vuotta / yli 3 vuotta / ei arvioitavissa | Aikataulu annetaan vain lähteistetyn suunnitelman tai nimettyjen puutteiden toteutusriippuvuuksien perusteella. |
| Arvion kokonaisluottamus | A–D | Johdetaan laskentasäännön näyttökattavuudesta ja havaintojen luottamuksesta. |

Tulosten välillä ei ole oletettua etusijajärjestystä. Jos tulokset ovat keskenään ristiriidassa, ristiriita selitetään eikä sitä poisteta yhdellä kokonaisluokituksella.

## Lähdehierarkia

Ensisijaisia ovat viranomaisrekisterit ja -tilastot, sääntelyasiakirjat, tarkistetut tilinpäätös- ja vuosikertomustiedot, sopimus- ja palvelukuvaukset, tekninen dokumentaatio sekä julkiset hinnastot. Toimijan omia markkinointiväitteitä voidaan käyttää sen tarjonnan ja aikomusten kuvaamiseen, mutta ne merkitään omaksi lähdetyypikseen.

Media, hakemistot ja ekosysteemilistat sopivat ehdokkaiden löytämiseen. Olennaista kykyä tai johtopäätöstä ei perusteta yksin niihin. Merkittävä myönteinen tai kielteinen yrityskohtainen johtopäätös tarvitsee joko suoraan asian todistavan viranomais- tai sopimuslähteen tai kaksi toisistaan riippumatonta lähdettä.

## Ensimmäisen arviointierän valinta

Ensimmäinen erä on tarkoituksellinen, rooleja ja rakenteita kattava koeotos eikä tilastollinen otos Suomen yrityskannasta. Valinta rekisteröidään ennen pisteytystä ja siihen kirjataan kaikki seulotut toimijat, valinta- ja poissulkusyyt sekä arvioijien sidonnaisuudet.

Kuuden toimijan koe-erään valitaan mahdollisuuksien mukaan:

- yksi kaupallinen kapasiteetti- tai mallipalvelutoimija;
- yksi kansallinen tele- tai tietotekniikkapalvelutoimija;
- yksi alueellinen tietoliikenneyhtiö;
- yksi datan välitys-, identiteetti- tai tietopalvelutoimija;
- yksi toimialakohtainen, osuuskunta- tai yhteisöpohjainen palvelutoimija;
- yksi julkinen tai julkisen ja yksityisen sektorin yhteinen infrastruktuuri.

Jos sama toimija täyttää usean paikan, se lasketaan vain yhteen. Korvaava ryhmä ja syy dokumentoidaan ennen pisteiden näkemistä. Menetelmän kalibrointi tehdään [kalibrointiprotokollan](kalibrointi.md) mukaisesti ennen nimettyä koe-erää.

## Korjaukset, vastine ja julkaisu

Nimetyn toimijan arvio ei etene julkaisuun ennen [korjaus- ja vastineprosessin](korjaus-ja-vastineprosessi.md) läpikäyntiä. Tosiasiakorjaus, toimijan oma näkemys ja toimituksellinen johtopäätös pidetään erillään.

Tämä menetelmäversio on julkisesti nähtävä ja kalibroitu tutkimusmenetelmä. Sen hyväksyntäportit täyttyivät 7.9.2026, joten sitä saa käyttää nimettyjen toimijoiden julkaisemattomiin luonnosarvioihin. Menetelmää tai yrityskohtaisia arvioita ei ole julkaistu verkkosivustolla. Yksittäisen toimija-arvion verkkosivujulkaisu vaatii riippumattoman ihmiskatselmuksen, korjaus- ja vastineprosessin sekä erillisen julkaisupäätöksen.

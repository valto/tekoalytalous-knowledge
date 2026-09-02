# Tokenoperaattorin liiketoimintasuunnitelma

- Versio: 0.3
- Tila: julkaistu avoin esimerkkiliiketoimintasuunnitelma
- Näytön katkaisupäivä: 2026-09-01

## 1. Tiivistelmä

Tokenoperaattori tuottaa avoimia malleja ajamalla tekoälymallien työkapasiteettia. Se myy tokeneita, kiihdytinkorttitunteja, varattua kapasiteettia ja yksityisiä kapasiteettialtaita. Se ei ylläpidä asiakkaan pysyvää tietoydintä.

Ensimmäinen toteutus on suomalainen yritys- ja tukkumarkkinaan keskittyvä kapasiteettioperaattori. Se aloittaa 32 kiihdytinkortin kokonaisuudella vain, jos vähintään puolet ensimmäisen vuoden kapasiteetista on katettu ankkuriasiakkaiden varauksilla tai vähimmäisostoilla. Kuluttajamyynti tapahtuu ensisijaisesti virtuaalioperaattorien kautta.

Perusskenaariossa pieni operaattori tarvitsee noin 1,1 miljoonan euron ensimmäisen vuoden laite- ja muun investoinnin. Käyttökate muuttuu positiiviseksi kolmantena vuonna, mutta viiden vuoden kumulatiivinen rahoituskassa pysyy noin 2,1 miljoonaa euroa negatiivisena kasvavan laitekannan vuoksi. Tämä on infrastruktuurirahoitusta tarvitseva yhtiö, ei kevyt ohjelmistokäynnistys.

## 2. Tehtävä, visio, strategia ja arvot

**Tehtävä:** tehdä avoimilla malleilla tuotetusta tekoälymallien työkapasiteetista mitattava, kilpailutettava ja suomalaisille palveluntarjoajille saatava infrastruktuuripalvelu.

**Visio:** Suomessa toimii yhteentoimiva tokenien tukkumarkkina, jossa asiakas tai jälleenmyyjä voi vaihtaa mallia ja kapasiteettitoimittajaa menettämättä omaa tietoaan.

**Strategia:** aloita rajatulla mallivalikoimalla ja ennalta varatulla yrityskapasiteetilla, optimoi käyttöaste, myy kapasiteettia virtuaali- ja tieto-operaattoreille ja laajenna laitteistoa vain sopimuksilla todennetun kysynnän perusteella.

**Arvot:** avoimuus, mitattavuus, tietojen minimointi, energiatehokkuus, toimittajan vaihdettavuus ja selvä vastuunjako.

## 3. Yhteys sivuston tutkimukseen

- [Tekoälytalouden arvoketju](https://www.tekoalytalous.fi/kartta/arvoketju): tokenoperaattori kaupallistaa ketjun laskenta- ja päättelyvaiheen.
- [Tekoälytehtaat](https://www.tekoalytalous.fi/kartta/tekoalytehtaat): laitteisto, energia ja käyttöaste muodostavat tuotannon perustan.
- [Tieto on tekoälyn käyttöjärjestelmä](https://www.tekoalytalous.fi/kirjoitukset/tieto-on-tekoalyn-kayttojarjestelma): operaattori rajataan malliprosessointiin eikä se omista asiakkaan pysyvää tietoa.
- [Yleinen operaattorikuvaus](liiketoimintasuunnitelma.md) ja [tokenoperaattorin roolikuvaus](tokenoperaattori.md).

## 4. Osaaminen ja resurssit

Perustajatiimissä tai sitovilla kumppaneilla pitää olla:

- suurten mallien suorituskyvyn, optimoinnin ja palvelun osaaminen;
- konesali-, verkko-, tietoturva- ja valvontaosaaminen;
- energia- ja laitehankinta;
- laiterahoitus ja omaisuuden elinkaaren hallinta;
- yritys- ja tukkumyynti;
- mallilisenssien ja henkilötietojen tilapäisen käsittelyn juridinen osaaminen.

Ensimmäisen vuoden tavoiteorganisaatio on toimitusjohtaja tai kaupallinen vetäjä, kaksi infrastruktuuri- ja malliosaajaa sekä ulkoistetut ympärivuorokautinen konesalipäivystys, taloushallinto ja juridinen tuki.

## 5. Tuotteet ja hinnat

| Tuote                        | Ensisijainen asiakas                        | Hinnoittelu                                  | Tavoite                              |
| ---------------------------- | ------------------------------------------- | -------------------------------------------- | ------------------------------------ |
| Tokenit käytön mukaan        | ohjelmistoyhtiö, mikro- ja pienyritys       | mallikohtainen hinta miljoonaa tokenia kohti | matala aloituskynnys                 |
| Varattu kapasiteetti         | pieni ja keskisuuri yritys                  | kuukausivaraus + käyttö                      | ennustettava saatavuus ja käyttöaste |
| Kiihdytinkorttitunnit        | kehittäjä ja tieto-operaattori              | tuntihinta                                   | läpinäkyvä infrastruktuuriyksikkö    |
| Yksityinen kapasiteettiallas | suuri tai säännelty organisaatio            | vähimmäisosto, laitteisto ja palvelutaso     | sijainti ja kontrolli                |
| Tokenitukku                  | virtuaali-, tieto- ja yhdistelmäoperaattori | volyymiportaat ja vähimmäisosto              | korkea käyttöaste ja kanavamyynti    |

[Together AI:n julkiset mallihinnat](https://www.together.ai/pricing) antavat valituille avoimille malleille noin 0,14–1,04 dollarin vertailuvälin miljoonalta tokenilta. [Runpodin H100-hinnat](https://www.runpod.io/pricing) alkavat noin 1,99 dollarista kiihdytinkorttitunnilta, kun taas Together AI:n hallitun omistetun kapasiteetin ilmoitettu vaihteluväli on selvästi korkeampi. Suomalainen hinta johdetaan mitatusta mallikohtaisesta läpäisystä ja kokonaiskustannuksesta, ei kopioida yhdestä pilvihinnastosta.

Kuluttajille ei rakenneta ensimmäisessä vaiheessa omaa laajaa vähittäismyyntiä. Kuluttajatuotteet annetaan virtuaalioperaattorien paketoitaviksi. Täysi tuoteluettelo on [tuotteet ja palvelut -liitteessä](tuotteet-ja-palvelut.md).

## 6. Asiakkaat ja markkinat

### Ensisijaiset asiakkaat ensimmäisten 24 kuukauden aikana

1. suomalaiset ohjelmisto- ja agenttiyhtiöt, jotka tarvitsevat avoimien mallien rajapinnan;
2. tieto- ja virtuaalioperaattorit, jotka eivät omista omaa kapasiteettia;
3. keskisuuret yritykset, jotka varaavat tuotantokapasiteettia;
4. toimialayhteisöt, joilla on yhteinen sijainti-, sopimus- tai mallivaatimus.

### Ostopäätöksen perusteet

- hinta ja todellinen läpäisy;
- käsittelyn sijainti ja alihankintaketju;
- sisältölokituksen ja mallikoulutuksen kielto;
- mallien valikoima ja vaihtonopeus;
- palvelutaso, viive ja kapasiteetin saatavuus;
- suomalainen sopimus, tuki ja laskutus;
- mahdollisuus jälleenmyyntiin omalla nimellä.

## 7. Kilpailu ja erottautuminen

Kilpailijoita ovat globaalit mallirajapinnat, kiihdytinkorttipilvet, suuret pilvialustat, asiakkaan oma laitteisto ja toiset eurooppalaiset kapasiteettipalvelut.

Operaattori ei voi voittaa kaikessa hinnalla. Erottautuminen perustuu yhdistelmään:

- avoimien mallien selvä lisenssi- ja versiotieto;
- todistettava tietojen minimointi;
- suomalainen tai asiakkaan valitsema käsittelyalue;
- tukkutuotteet paikallisille ja toimialakohtaisille jälleenmyyjille;
- kyky reitittää tehtävä sopivimpaan malliin;
- läpinäkyvä kustannus ja energiatehokkuus.

## 8. Myynti ja markkinointi

Ensimmäisen vuoden myyntitavoite on 8–12 maksavaa yritysasiakasta, joista 3–5 on vähimmäisostoon sitoutuvia ankkuriasiakkaita. Myynti tapahtuu perustajavetoisesti ohjelmistoyhtiöille, alan yhteisöille, konesalikumppanien asiakkaille ja tieto-operaattoreille.

Myyntiprosessi:

1. työkuorman ja tietorajan kartoitus;
2. kahden viikon suorituskykytesti asiakkaan aineistolla tai synteettisellä aineistolla;
3. mallikohtainen kustannus- ja laatutulos;
4. kolmen kuukauden maksullinen pilotti;
5. 12–36 kuukauden kapasiteettivaraus.

Markkinointisisältö perustuu julkaistuihin mittauksiin: hinta, nopeus, energiankulutus, saatavuus, malliversio ja tietojen käsittely.

## 9. Tuotanto ja toiminta

- Sijainti valitaan sähkön, yhteyksien, jäähdytyksen, fyysisen turvallisuuden ja huollon perusteella.
- Laitteisto omistetaan erillisessä omaisuusyhtiössä tai rahoitetaan leasingilla.
- Palveluyhtiö vastaa malleista, mittauksesta, asiakkaista ja tuesta.
- Käyttöönotettavan mallin lisenssi, turvallisuus, suorituskyky ja poistumispolku dokumentoidaan.
- Sisältölokitus on oletuksena pois käytöstä.
- Kapasiteettia laajennetaan erissä, ei yhtenä viiden vuoden hankintana.

## 10. Organisaatio ja hallinto

Hallitus tarvitsee infrastruktuuri-, rahoitus- ja yrityspalveluosaamista. Kuukausittain seurataan käyttöastetta, myyntikatetta, kapasiteettivarauksia, kassaa, laitteiston arvoa ja suurimpien asiakkaiden osuutta. Investointipäätös tehdään erikseen jokaiselle laite-erälle.

Ensimmäisen vaiheen puuttuvat kyvykkyydet hankitaan kumppaneilta: konesalipäivystys, laitehuolto, juridinen tarkistus, vakuutus ja taloushallinto. Ydinkyvykkyydet — mallien operointi, mittaus ja asiakaskohtainen reititys — pidetään yhtiössä.

## 11. Talous ja rahoitus

### Pieni alueellinen perusskenaario

| Vuosi | Kortit vuoden lopussa | Liikevaihto | Käyttökate | Laiteinvestointi | Kassavirta rahoituksen jälkeen |
| ----: | --------------------: | ----------: | ---------: | ---------------: | -----------------------------: |
|     1 |                    32 |   441 504 € | −145 843 € |        960 000 € |                     −675 235 € |
|     3 |                    72 | 1 463 270 € |  154 544 € |        672 000 € |                     −388 995 € |
|     5 |                   128 | 2 825 626 € |  550 346 € |        832 000 € |                     −314 089 € |

Mallissa 80 prosenttia laiteinvestoinnista rahoitetaan viiden vuoden velalla ja 20 prosenttia omalla pääomalla. Syvin viiden vuoden kumulatiivinen rahoituskassa on noin −2,1 miljoonaa euroa. Rahoitustarve katetaan vaiheittain omalla pääomalla, [leasingilla](https://www.nordea.fi/yritysasiakkaat/palvelumme/rahoitus/leasing.html) tai lainalla, [Finnveran mahdollisella takauksella](https://www.finnvera.fi/rahoitus/takaukset/finnvera-takaus) ja asiakkaiden kapasiteettivarauksilla.

Valtakunnallinen malli on erillinen infrastruktuurihanke: se kasvaa 256 kortista 2 048 korttiin ja tarvitsee perusskenaariossa noin 13,5 miljoonan euron kumulatiivisen rahoituspuskurin, vaikka käyttökate muuttuu positiiviseksi toisena vuonna. Sitä ei käynnistetä pienen yhtiön orgaanisena oletuksena ilman erillistä rahoittaja- ja asiakaskonsortiota.

## 12. Vahvuudet, heikkoudet, mahdollisuudet ja uhat

| Vahvuudet                                                                                           | Heikkoudet                                                                                                                 |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| selvä ja rajattu palvelu; fyysinen rahoitettava omaisuus; tukku- ja vähittäismyynti; avoimet mallit | suuri pääoma; nopea arvonalenema; globaali hintakilpailu; ympärivuorokautinen tuotantovastuu                               |
| Mahdollisuudet                                                                                      | Uhat                                                                                                                       |
| paikallinen käsittely; virtuaalioperaattorit; eurooppalainen kapasiteetti; toimialakohtaiset altaat | käyttöaste jää matalaksi; uusi laitesukupolvi; mallit halpenevat nopeammin kuin kustannus; yksi asiakas hallitsee kysyntää |

Strategiana on käyttää tukkuasiakkaita käyttöasteen nostamiseen, minimoida laiteriski erähankinnoilla ja säilyttää mahdollisuus käyttää ulkoista kapasiteettia ruuhkiin.

## 13. Tavoitteet ja aikataulu

| Aika     | Tavoite ja hyväksymisehto                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| 0–3 kk   | kolme ankkuriasiakkaan aiesopimusta, laite- ja konesalitarjoukset, kaksi mallikohtaista mittausta           |
| 4–6 kk   | rahoituspäätös vain, jos vähintään 50 % ensimmäisestä kapasiteetista on varattu                             |
| 7–12 kk  | tuotanto käynnissä, 8–12 maksavaa asiakasta, vähintään 35 % käyttöaste                                      |
| 13–24 kk | käyttöaste yli 50 %, tukkumyynnin osuus vähintään 30 %, ensimmäinen laite-erän jälleenmyyntiarvon tarkistus |
| 25–36 kk | positiivinen käyttökate ja päätös toisesta sijainnista tai suuremmasta erästä                               |

## 14. Keskeiset mittarit ja lopettamisehdot

Mittarit: käyttöaste, eurot kiihdytinkorttituntia kohti, tokenien yksikkökustannus, myyntikate, varattu 12 kuukauden kapasiteetti, keskeytykset, energiankulutus ja asiakkaiden keskittyminen.

Hanke pysäytetään tai muutetaan pelkäksi välityspalveluksi, jos ankkurivarauksia ei synny, ensimmäisen erän käyttöaste jää kuuden tuotantokuukauden jälkeen alle 30 prosenttiin tai oma tuotanto ei saavuta asiakkaan hyväksymää paikallisuusarvon ja globaalin markkinahinnan välistä tasoa.

## 15. Avoimet päätökset ennen perustamista

- ensimmäinen mallivalikoima ja todelliset läpäisymittaukset;
- laite, sijainti, sähkö- ja jäähdytysratkaisu;
- rahoittajan todellinen vakuusarvo ja takaisinosto;
- kolme ankkuriasiakasta ja sitova vähimmäisosto;
- juridinen käsittelyraja ja lokituskäytäntö;
- omaisuusyhtiön ja palveluyhtiön rakenne.

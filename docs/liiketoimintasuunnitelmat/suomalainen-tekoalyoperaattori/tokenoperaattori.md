# Tokenoperaattorin liiketoimintamalli

## Tehtävä

Tokenoperaattori muuttaa sähkön ja laskentalaitteiston avoimilla tekoälymalleilla ostettavaksi mallien työkapasiteetiksi. Se kuuluu samaan arvoketjuun kuin sivuston kuvaamat tekoälytehtaat, mutta rajaa palvelunsa koulutuksen sijasta päättelyyn: asiakas lähettää käsiteltävän pyynnön ja saa tuloksen.

Tokenoperaattori ei ylläpidä asiakkaan pysyvää tietoydintä, muistia tai asiakirja-arkistoa. Tämä on sekä palvelun yksinkertaisuuden että vaihdettavuuden perusta.

## Tiedonvastuun raja

“Ei säilytä asiakkaan tietoa” tarkoittaa tässä:

- pyynnön sisältöä ei käytetä mallien koulutukseen;
- pyynnön sisältöä ei kirjoiteta pysyvään sovellus-, analytiikka- tai tukilokiin;
- tilapäinen työmuisti poistuu käsittelyn päätyttyä;
- laskutuksessa säilytetään vain tarvittavat mittaustiedot, kuten aika, käytetty kapasiteetti, malliversio ja asiakastunniste;
- virhetilanteiden sisältölokitus on oletuksena pois käytöstä ja mahdollinen poikkeus vaatii asiakkaan nimenomaisen valinnan;
- tietoturva-, väärinkäytönesto- ja lakisääteiset vastuut dokumentoidaan, vaikka varsinaista sisältöä ei säilytetä.

Rajaus ei tarkoita, ettei tietosuojavastuuta olisi. [Yleisen tietosuoja-asetuksen käsittelymääritelmä](https://eur-lex.europa.eu/eli/reg/2016/679/oj) kattaa myös tilapäisen käsittelyn, jos pyyntö sisältää henkilötietoja.

## Mallit

Palvelu käyttää vain malleja, joiden käyttöehdot sallivat operaattoripalvelun. “Avoin malli” ei saa tarkoittaa automaattisesti samaa kuin “avoimen lähdekoodin malli”. Operaattori julkaisee jokaisesta mallista:

- mallin ja version;
- lisenssin ja kaupallisen käytön ehdot;
- missä malli ajetaan;
- mitä turvallisuus- ja laatutestejä sille on tehty;
- milloin malli voidaan poistaa tai vaihtaa;
- miten asiakas voi valita toisen mallin.

## Tuotteet

### Käytön mukaan laskutettava kapasiteetti

- hinta miljoonaa käsiteltyä tokenia kohti;
- eri hinta syötteelle, tuotokselle ja välimuistille, jos kustannusrakenne sitä vaatii;
- soveltuu vaihtelevaan ja pieneen käyttöön.

### Varattu kapasiteetti

- sovittu määrä kiihdytinkorttitunteja tai läpäisyä kuukaudessa;
- etusija ruuhkatilanteessa;
- soveltuu jatkuvaan yrityskäyttöön ja antaa operaattorille ennustettavan käyttöasteen.

### Yksityinen kapasiteettiallas

- asiakkaalle tai asiakasryhmälle varattu laitteisto;
- rajattu sijainti, mallivalikoima ja verkkoyhteys;
- soveltuu toimialoille, joilla käsittely-ympäristön hallinta on tärkeä.

### Tukkukapasiteetti

- kapasiteetti myydään tieto-operaattoreille, ohjelmistoyhtiöille ja toimialakohtaisille palveluille;
- loppuasiakas voi käyttää toisen toimijan käyttöliittymää ja tietoydintä;
- tokenoperaattori keskittyy käyttöasteeseen, suorituskykyyn ja toimitusvarmuuteen.

## Pieni ja suuri malli

Pieni tokenoperaattori ei ole kevyt ohjelmistoyritys. Jo kymmenien kiihdytinkorttien kokonaisuus vaatii miljoonaluokan laite-, verkko- ja käyttöympäristön. Pienuus tarkoittaa tässä rajattua laitekantaa, maantiedettä, mallivalikoimaa tai asiakasryhmää.

Suurempi toimija voi jakaa kapasiteettia useille alueille, asiakasryhmille ja tukkukumppaneille. Sen etu on käyttöaste, hankintavoima ja ympärivuorokautinen toiminta. Sen riski on suuri pääoma, laitteiden nopea vanheneminen ja hintakilpailu globaalien kapasiteettipalvelujen kanssa.

## Hinnoittelun lähtökohta

Syyskuun 2026 [julkisissa mallihinnoissa](https://www.together.ai/pricing) avoimia malleja tarjoavien palvelujen tokenhinnat vaihtelevat erittäin pienen mallin noin 0,14 dollarista suuren mallin useisiin dollareihin miljoonaa tokenia kohti. [Kiihdytinkorttitunnin julkinen hinta](https://www.runpod.io/pricing) alkaa H100-vertailussa noin kahdesta dollarista, ja hallitumpi kapasiteetti voi maksaa selvästi enemmän palvelutasosta, laitteesta ja varauksesta riippuen.

Suomalainen operaattori ei voi kopioida yhtä hintaa. Sen hinta muodostetaan kaavalla:

```text
laiterahoitus
+ sähkö ja jäähdytys
+ konesali, verkko ja ylläpito
+ ohjelmisto ja mallien operointi
+ valvonta ja tuki
+ käyttämättömän kapasiteetin kustannus
+ riskivara ja kate
= myytävän kapasiteetin kustannus
```

## Rahoitus

Laitteisto voidaan erottaa omaan omaisuusyhtiöön, joka vuokraa kapasiteetin palveluyhtiölle. Rahoitus voi yhdistää:

- 15–30 prosentin oman pääoman osuuden;
- leasingin tai osamaksun;
- [Finnveran takauksen](https://www.finnvera.fi/rahoitus/takaukset/finnvera-takaus) muun rahoittajan lainalle;
- asiakkaiden kapasiteettivaraukset ja vähimmäisostot;
- konesali- ja energiasopimukset;
- laitetoimittajan takuun, huollon ja takaisinosto- tai jälleenmyyntipolun.

Laitteisto antaa rahoittajalle vakuusarvoa, mutta ei tee hankkeesta automaattisesti vähäriskistä. Arvo voi laskea nopeasti. Todellinen rahoitettavuus syntyy laitteiden, käyttöastesopimusten, sähkö- ja konesaliratkaisun sekä uudelleenkäyttö- tai jälleenmyyntireitin yhdistelmästä.

## Ratkaisevat mittarit

- myytyjen kiihdytinkorttituntien käyttöaste;
- eurot kiihdytinkorttituntia kohti;
- käsitellyt tokenit ja kustannus miljoonaa tokenia kohti malliluokittain;
- sähkön ja jäähdytyksen kustannus;
- kapasiteettivarauksilla katettu osuus seuraavan 12 kuukauden tuotannosta;
- laitteiston jäljellä oleva velka suhteessa jälleenmyyntiarvoon;
- katkot, viive ja mallien vaihtoon kuluva aika;
- kuinka suuri osuus liikenteestä voidaan käsitellä ilman sisältölokitusta.

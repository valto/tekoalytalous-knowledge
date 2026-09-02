# Tieto-operaattorin liiketoimintamalli

## Tehtävä

Tieto-operaattori ylläpitää yksilön tai organisaation omaa pysyvää tietoydintä. Mallit, agentit, käyttöliittymät ja tokenoperaattorit ovat vaihdettavia palveluja tämän ytimen ympärillä.

Tämä liiketoimintamalli perustuu suoraan Tekoälytalous.fi:n olemassa olevaan lähtökohtaan: malli on prosessori, mutta tieto on tekoälyjärjestelmän käyttöjärjestelmä.

## Viitearkkitehtuurit

### Henkilökohtainen tiedon käyttöjärjestelmä

Yksilön tiedot, muistot, asiakirjat, suhteet, oikeudet ja tapahtumahistoria muodostavat omistajan hallitseman kokonaisuuden. Sovellus tai agentti saa käyttää sitä vain erikseen annetulla valtuutuksella. Koko kokonaisuus voidaan viedä toiselle palveluntarjoajalle.

### Organisaation tiedon käyttöjärjestelmä

Organisaation päätökset, vastuut, dokumentit, toimijat, asiakkaat, sopimukset ja yhteinen muisti muodostavat hallitun tietoytimen. Ihmiset ja agentit toimivat ytimen päällä, mutta päätösvalta, lähdehistoria ja vastuut säilyvät organisaatiolla.

Viitearkkitehtuurit eivät määrää yhtä teknistä tuotetta. Ne määrittävät omistuksen ja vaihdettavuuden ehdot, joiden perusteella useat tieto-operaattorit voivat kilpailla.

## Operaattorin vastuut

- tietoytimen erottaminen sovelluksista ja malleista;
- identiteetti, roolit, valtuutukset ja suostumukset;
- tiedon tuonti, jäsentäminen, lähdehistoria ja versiot;
- haku, konteksti, muisti ja agenttien rajattu pääsy;
- varmuuskopiot, palautuminen ja jatkuvuus;
- täydellinen vienti avoimessa, dokumentoidussa muodossa;
- siirto toiselle operaattorille ilman tarpeetonta palvelulukkoa;
- lokit, auditointi, poistaminen ja säilytyssäännöt;
- käyttäjätuki ja omistajalle ymmärrettävä hallinta.

## Mitä tieto-operaattori ei lähtökohtaisesti tee?

- se ei omista asiakkaan tietoa;
- se ei lukitse tietoa omaan käyttöliittymäänsä;
- se ei tarvitse omaa tekoälymallia;
- se ei välttämättä tuota tokenkapasiteettia;
- se ei saa käyttää asiakkaan tietoa oman mallinsa kouluttamiseen ilman erillistä, tietoista sopimusta;
- se ei päätä organisaation puolesta, vaikka se voi tarjota päätöksenteon rakenteen ja aineiston.

## Asiakas- ja omistusmallit

### Henkilökohtainen palvelu

Yksilö maksaa tietoytimestä, varmuuskopioista, viennistä ja valtuutusten hallinnasta. Tokenkapasiteetti laskutetaan erikseen tai valitaan markkinapaikasta.

### Yrityskohtainen palvelu

Yritys maksaa perusmaksun, käyttäjä- tai palvelutunnusmaksun, liitännät ja käyttöönottotyön. Hinta riippuu erityisesti integraatioista, tukivastuusta, auditoinnista ja jatkuvuudesta — ei pelkästä tallennustilasta.

### Toimialakohtainen osuuskunta

Saman ammatti- tai toimialaryhmän jäsenet omistavat yhteiset tiedonhallinnan säännöt, hankinnan ja mahdollisesti palveluyhtiön. Malli sopii tilanteeseen, jossa jäsenillä on samanlaiset asiakirjat, tietosuojavaatimukset, ammattivastuut ja integraatiot mutta tarve säilyttää oma päätösvalta.

### Yhteinen tukkualusta

Useat paikalliset tai toimialakohtaiset palveluntarjoajat käyttävät samaa avointa teknistä ydintä mutta vastaavat omista asiakkaistaan, tuestaan ja mahdollisista lisäpalveluistaan.

## Hinnoittelu

Tieto-operaattorin hintaa ei pidä johtaa raakatallennuksen hinnasta. Tallennus voi maksaa vain muutamia euroja teratavulta kuukaudessa, mutta operointipalvelu sisältää identiteetin, liitännät, versionhallinnan, tuen, viennin, varmistukset ja vastuun.

Hinnoittelu erotetaan neljään osaan:

1. tietoytimen perusmaksu yksilölle tai organisaatiolle;
2. käyttäjä-, palvelutunnus- tai agenttimaksu;
3. tallennus, liikenne ja poikkeuksellisen suuri käyttö;
4. käyttöönotto, integraatiot, jatkuvuus ja vahvempi palvelutaso.

Yritysohjelmistojen julkiset hinnat muodostavat vain alarajan. Esimerkiksi toimisto-, identiteetti- ja turvallisuuspaketti maksaa Suomessa noin kaksikymmentä euroa käyttäjää kohti kuukaudessa. Omistajakohtaisen tietoytimen operointi voi maksaa enemmän, jos siihen sisältyy todellinen siirrettävyys, integraatiot ja jatkuva vastuu.

## Ratkaisevat mittarit

- asiakkaiden ja aktiivisten käyttäjien määrä;
- kuukausitulo organisaatiota ja käyttäjää kohti;
- käyttöönoton työmäärä ja integraatiokustannus;
- tukitapahtumat asiakasta kohti;
- tiedon viennin onnistuminen ja siirtoaika;
- palvelun uusimisaste;
- yhden asiakkaan tai toimialan osuus liikevaihdosta;
- tietoytimen saatavuus ja palautumistestit;
- kuinka moni sovellus ja tokenoperaattori toimii saman tietoytimen kanssa.

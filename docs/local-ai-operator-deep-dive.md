# Paikallisten tekoälyoperaattorien roolit v0.3

- Tila: julkaistu avoin roolitutkimus
- Menetelmä: `market-lab/1.1`
- Näytön katkaisupäivä: 2026-09-01
- Seuraava suunniteltu tarkistus: 2026-12-01

## Tutkimuskysymys

Millaiset erilliset operaattoriroolit syntyvät tekoälymallien työkapasiteetin ja omistajakohtaisen tiedon ympärille, ja milloin sama toimija voi uskottavasti yhdistää ne?

## Täsmennetty lähtökohta

Aikaisempi luonnos käsitteli tekoälyoperaattoria liian nopeasti yhtenä pakettina. Täsmennetty malli erottaa kaksi päävastuuta:

1. tokenoperaattori tuottaa avoimilla malleilla käsittely- ja päättelykapasiteettia;
2. tieto-operaattori ylläpitää yksilön tai organisaation omistamaa tietoydintä;
3. yhdistelmäoperaattori tarjoaa molemmat, mutta ei saa tehdä niiden erottamisesta käytännössä mahdotonta;
4. virtuaalioperaattori omistaa asiakassuhteen ja tuotteistuksen mutta ostaa tokenit, tietoydinalustan tai molemmat tukkuna.

## Tokenoperaattori

Tokenoperaattorin asiakas ostaa mallin työkapasiteettia. Palvelu voi perustua käytön mukaiseen tokenhintaan, kiihdytinkorttituntiin, varattuun kapasiteettiin tai yksityiseen kapasiteettialtaaseen.

Keskeinen palveluraja on, ettei operaattori rakenna asiakkaalle pysyvää muistia tai tietovarantoa. Pyyntö käsitellään tilapäisesti ja tulos palautetaan. Mittaus-, turvallisuus- ja laskutustiedot rajataan sisältöä paljastamattomiksi aina kun mahdollista.

## Tieto-operaattori

Tieto-operaattorin asiakas ostaa omistajakohtaisen tietoytimen, identiteetin, valtuutukset, versionhallinnan, kontekstin, viennin, varmistukset ja jatkuvuuden.

Rooli perustuu henkilökohtaisen ja organisaation tiedon käyttöjärjestelmien viitearkkitehtuureihin. Tiedon pitää säilyä omistajalla ja olla käytettävissä useiden mallien, agenttien ja sovellusten kanssa.

## Yhdistelmäoperaattori

Yhdistelmäoperaattori tarjoaa yhden asiakassuhteen, mutta sen tulee osoittaa:

- tietoytimen täydellinen vienti;
- tokenoperaattorin vaihto tietoa siirtämättä;
- erillinen hinnoittelu kapasiteetille ja tiedolle;
- erilliset säilytys- ja käsittelyvastuut;
- vähintään yksi toimiva vaihtoehtoinen malli- tai kapasiteettipolku.

## Virtuaalioperaattori

Virtuaalioperaattori mahdollistaa markkinoille tulon ilman omaa datakeskusta tai koko tietoydinalustan rakentamista. Suuri infrastruktuuritoimija myy kapasiteettia tukkuna, ja virtuaalioperaattori paketoi sen omalle alueelle, toimialalle tai asiakasryhmälle.

Sen pitää omistaa todellinen lisäarvo: jakelu, toimialamalli, integraatiot, paikallinen tuki, yhteisö tai usean tukkutoimittajan yhdistäminen. Pelkkä uudelleenbrändäys ei riitä, jos tukku- ja vähittäishinnan ero ei kata asiakashankintaa ja palvelua.

## Pienet toimijat

Pienuus ei tarkoita vain maantieteellistä aluetta. Pieni operaattori voi olla:

- alueellinen kapasiteettitoimija;
- valtakunnallinen mutta yhteen toimialaan keskittyvä tieto-operaattori;
- ammattilaisten tai yritysten osuuskunta;
- yhteinen tukkupalvelu useille paikallisille yhtiöille;
- virtuaalioperaattori, joka ostaa infrastruktuurin tukkuna;
- identiteettiin, vientiin, auditointiin tai jatkuvuuteen keskittyvä osatoimija.

## Markkinan muodostumista koskeva johtopäätös

Tokenkapasiteetti hyötyy mittakaavasta, korkeasta käyttöasteesta, rahoituksesta ja energian hankinnasta. Tieto-operaatio hyötyy luottamuksesta, omistajan kontrollista, avoimista standardeista, toimialaosaamisesta ja paikallisesta tuesta.

Siksi todennäköinen markkina ei ole yksi yleinen tekoälyoperaattori vaan verkosto, jossa:

- kapasiteettia tuotetaan keskittyneemmin;
- tietoa operoidaan hajautuneemmin;
- kapeat toimijat käyttävät yhteisiä tukku- ja rajapintakerroksia;
- virtuaalioperaattorit rakentavat eri asiakasryhmille omia brändejä ja tuotteita saman infrastruktuurin päälle;
- osa suurista toimijoista yhdistää kerrokset;
- asiakas voi vaihtaa yhden kerroksen ilman toisen menettämistä.

## Analogiat

[Teleoperaattorit](https://tieto.traficom.fi/fi/tilastot) kuvaavat laskutuksen, jatkuvuuden ja asiakassuhteen mittakaavaa. [Internetpalveluntarjoajien historia](https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/) kuvaa paikallisten verkkojen, tukkuyhteyksien ja avointen protokollien yhteistoimintaa. [Energiayhteisöt](https://energy.ec.europa.eu/topics/markets-and-consumers/energy-communities_en) ja uusiutuvan energian markkinat kuvaavat tuotannon, verkon, myynnin, yhteisöomistuksen ja omaisuusrahoituksen erottamista.

Analogiat ovat tutkimusvälineitä, eivät todiste tulevasta markkinarakenteesta.

## Seuraava tutkimustehtävä

Suomen markkinatutkimuksessa arvioidaan erikseen:

1. kuka voi tuottaa tokenkapasiteettia kilpailukykyisesti;
2. kuka voi operoida henkilö- tai organisaatiokohtaista tietoa luotettavasti;
3. kuka voi yhdistää molemmat ilman uutta palvelulukkoa;
4. kuka voi toimia virtuaalioperaattorina ja millä tukku- sekä jälleenmyyntiehdoilla;
5. mitkä alueelliset, toimialakohtaiset tai osuustoiminnalliset mallit ovat uskottavia;
6. millaiset sopimukset tekevät laiteinvestoinnista rahoitettavan.

Täydet tyyppikohtaiset suunnitelmat ja talousmallit ovat [tekoälyoperaattorimallien yleiskuva- ja liiketoimintasuunnitelmakokoelmassa](liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/README.md).

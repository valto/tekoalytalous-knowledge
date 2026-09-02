# Tekoälyoperaattorimarkkinan perusrakenne

## Lähtökohta

Tekoälytalouden tuotantoketjussa on kaksi perustavasti erilaista hyödykettä:

1. **tekoälymallin työkapasiteetti**, joka syntyy, kun energia, laitteisto ja avoin malli tuottavat päättelyä;
2. **omistajakohtainen tieto**, joka antaa päättelylle merkityksen, jatkuvuuden ja toimintaympäristön.

Näitä ei pidä pakottaa saman toimijan haltuun. Kapasiteetti on vaihdettava tuotannontekijä. Tieto on yksilön tai organisaation pysyvä ydin.

```text
energia ja laitteisto
        ↓
tokenoperaattori ─── tuottaa mallin työkapasiteetin
        ↑                         ↓
        │ valtuutettu,            │ tulos
        │ tilapäinen pyyntö       │
        ↓                         ↑
tieto-operaattori ─── ylläpitää omistajan tietoytimen
        ↓
yksilö, organisaatio, sovellukset ja agentit
```

## Neljä kaupallista päämuotoa

### Tokenoperaattori

Tokenoperaattori ajaa avoimia malleja omalla, vuokratulla tai rahoitetulla laskentakapasiteetilla. Se myy käsittelyä, ei pysyvää asiakastietoa. Sen kilpailutekijöitä ovat hinta, käyttöaste, nopeus, saatavuus, sijainti, energiarakenne, turvallinen tilapäiskäsittely ja mallivalikoima.

### Tieto-operaattori

Tieto-operaattori ylläpitää yksilö- tai organisaatiokohtaista tietoydintä, identiteettiä, valtuutuksia, kontekstia, muistia, lokia, vientiä ja jatkuvuutta. Sen kilpailutekijöitä ovat luottamus, avoimet standardit, siirrettävyys, toimialaosaaminen, paikallinen tuki ja kyky erottaa omistajan tieto sovelluksista ja malleista.

### Yhdistelmäoperaattori

Yhdistelmäoperaattori myy molemmat palvelut yhdellä sopimuksella. Hyvä yhdistelmä ei kuitenkaan sekoita kerroksia:

- asiakkaan tieto voidaan viedä pois ilman tokenoperaattorin lupaa;
- tokenkapasiteetti voidaan vaihtaa ilman tietoytimen uudelleenrakennusta;
- laskussa näkyvät erikseen tietopalvelu, kapasiteetti, tuki ja integraatiot;
- sopimus nimeää erikseen tiedon säilytys- ja käsittelyvastuut.

### Virtuaalioperaattori

Virtuaalioperaattori omistaa asiakassuhteen, hinnaston, tuotteistuksen, laskutuksen ja ensimmäisen tuen mutta hankkii tokenit, tietoydinalustan tai molemmat tukkuna. Se voi olla alueellinen, toimialakohtainen, osuustoiminnallinen tai suuren jakelubrändin palvelu.

Suuri tukkutoimija hyötyy korkeammasta käyttöasteesta. Virtuaalioperaattori hyötyy pienemmästä alkuinvestoinnista ja voi keskittyä asiakasryhmään. Malli on kestävä vain, jos jälleenmyyjä tuottaa muutakin kuin uuden nimen samalle palvelulle.

## Funktionaaliset osatoimijat

Markkina voi sisältää myös kapeita operaattoreita:

- identiteetti- ja valtuutusoperaattori;
- henkilökohtaisen tiedon operaattori;
- organisaation tietoytimen operaattori;
- kontekstin vienti- ja siirrettävyysoperaattori;
- tokenkapasiteetin tukkutoimija;
- mallireititys- ja kustannusoperaattori;
- loki-, auditointi- ja vaatimustenmukaisuusoperaattori;
- paikallinen tuki- ja jatkuvuusoperaattori;
- toimialakohtainen osuuskunta tai yhteisoperaattori.

Kapea toimija on uskottava silloin, kun sen vastuuraja, rajapinnat ja vaihdettavuus ovat selvät. Muuten se lisää uuden välikerroksen ratkaisematta asiakkaan kokonaisvastuuta.

## Maantiede, toimiala ja omistus ovat eri ulottuvuuksia

Pieni toimija voi olla:

- maantieteellisesti paikallinen mutta usean toimialan palvelu;
- valtakunnallinen mutta yhteen ammatti- tai toimialaryhmään keskittyvä;
- jäsentensä omistama osuuskunta;
- usean paikallisen yhtiön yhteinen tukkupalvelu;
- tukkupalvelun päälle rakennettu oma virtuaalioperaattoribrändi;
- yhden teknisen toiminnon erikoisoperaattori;
- uuden infrastruktuurin omistava ja kapasiteettia muille operaattoreille myyvä yhtiö.

Toimialakohtainen osuuskunta on erityisen kiinnostava malli silloin, kun jäsenillä on samanlaiset tietoriskit, ammattivastuut ja hankintatarpeet. Jäsenet voivat omistaa tiedonhallinnan pelisäännöt yhdessä ja kilpailuttaa tokenkapasiteetin erikseen.

## Kytkentä sivuston tutkimukseen

- Tekoälytalouden arvoketju erottaa energian, laskennan, päättelyn ja digitaalisen työkyvyn.
- Tekoälytehtaita koskeva tutkimus käsittelee kapasiteetin fyysistä tuotantoa ja pääomavaltaisuutta.
- Tietoa tekoälyn käyttöjärjestelmänä käsittelevä artikkeli erottaa mallin prosessorina omistajan pysyvästä tiedosta.
- [Henkilökohtainen tiedon käyttöjärjestelmä](https://www.tekoalytalous.fi/kartta/henkilokohtainen-ai-os) ja [organisaation tietoydin](https://www.tekoalytalous.fi/kartta/entity-core) kuvaavat avoimen, siirrettävän tietoytimen viitearkkitehtuurit.
- Markkinoiden muodostumismalli ennakoi mittakaavaintensiivisen tuotannon keskittymistä ja asiakasläheisen tiedon, luottamuksen ja operoinnin hajautumista.

Operaattorirakenne yhdistää nämä samaksi markkinaksi ilman, että yksi yritys oletetaan koko ketjun omistajaksi.

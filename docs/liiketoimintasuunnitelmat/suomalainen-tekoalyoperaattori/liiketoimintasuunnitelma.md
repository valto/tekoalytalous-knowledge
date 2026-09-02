# Suomalaisten tekoälyoperaattorimallien yleiskuva

- Tila: julkaistu avoin markkinakuvaus
- Versio: 0.3
- Näytön katkaisupäivä: 2026-09-01

Tämä asiakirja kuvaa yhteisen markkinan. Se ei ole yhden yrityksen liiketoimintasuunnitelma. Jokaiselle operaattorityypille on oma täysi suunnitelmansa.

## Erilliset liiketoimintasuunnitelmat

1. [Tokenoperaattorin liiketoimintasuunnitelma](liiketoimintasuunnitelma-tokenoperaattori.md) — omistaa tai hallitsee avoimia malleja ajavaa laskentakapasiteettia ja myy tokeneita sekä kapasiteettia vähittäis- ja tukkumarkkinaan.
2. [Tieto-operaattorin liiketoimintasuunnitelma](liiketoimintasuunnitelma-tieto-operaattori.md) — operoi yksilön tai organisaation omistamaa, valtuutettua ja siirrettävää tietoydintä ilman omaa tokenkapasiteettia.
3. [Yhdistelmäoperaattorin liiketoimintasuunnitelma](liiketoimintasuunnitelma-yhdistelmaoperaattori.md) — tarjoaa tietoytimen ja tokenkapasiteetin samalla sopimuksella mutta erillisinä ja vaihdettavina kerroksina.
4. [Virtuaalioperaattorin liiketoimintasuunnitelma](liiketoimintasuunnitelma-virtuaalioperaattori.md) — omistaa asiakassuhteen, tuotteistuksen ja brändin mutta ostaa tokenit, tietoydinalustan tai molemmat tukkuna.

Pieni, suuri, alueellinen, valtakunnallinen, toimialakohtainen ja osuustoiminnallinen toteutus ovat näiden tyyppien sisäisiä vaihtoehtoja.

## Yhteinen markkinarakenne

```text
energia ja datakeskus
        ↓
tokenoperaattori ja tokenitukku
        ↓
virtuaali-, tieto- tai yhdistelmäoperaattori
        ↓
kuluttaja, yritys, yhteisö tai julkinen toimija

omistajan tietoydin ↔ valtuutukset ↔ mallit, agentit ja sovellukset
```

Markkinan kaksi perushyödykettä ovat:

- **tekoälymallin työkapasiteetti**, jota mitataan esimerkiksi tokeneina, kiihdytinkorttitunteina tai varattuna läpäisynä;
- **omistajakohtainen tieto**, jonka arvo syntyy omistuksesta, rakenteesta, historiasta, valtuutuksista, jatkuvuudesta ja siirrettävyydestä.

Ne voidaan ostaa eri toimijoilta. Yhdistelmä ei saa tehdä niistä teknisesti tai kaupallisesti erottamattomia.

## Yhteys Tekoälytalous.fi:n tutkimukseen

Suunnitelmat soveltavat suoraan sivuston aiempaa tutkimusta:

- [Tekoälytalouden arvoketju](https://www.tekoalytalous.fi/kartta/arvoketju) kuvaa, kuinka energia muuttuu laskennaksi, päättelyksi ja digitaaliseksi työkyvyksi.
- [Tekoälytehtaat](https://www.tekoalytalous.fi/kartta/tekoalytehtaat) käsittelee päättelykapasiteettia fyysisenä ja pääomavaltaisena tuotantona.
- [Henkilökohtainen tiedon käyttöjärjestelmä](https://www.tekoalytalous.fi/kartta/henkilokohtainen-ai-os) kuvaa yksilön hallitsemaa tietoa ja vaihdettavia sovelluksia sekä malleja.
- [Organisaation tietoydin](https://www.tekoalytalous.fi/kartta/entity-core) soveltaa samaa lähtökohtaa organisaation pysyvään tietoytimeen.
- [Tieto on tekoälyn käyttöjärjestelmä — ei malli](https://www.tekoalytalous.fi/kirjoitukset/tieto-on-tekoalyn-kayttojarjestelma) erottaa vaihdettavan mallin pysyvästä tiedosta.
- [Organisaation muisti ei saa olla yhden ihmisen päässä](https://www.tekoalytalous.fi/kirjoitukset/organisaation-muisti-ei-saa-olla-yhden-ihmisen-paassa) perustelee hallitun organisaatiomuistin tarpeen.

Operaattorisuunnitelmat eivät siten ole erillisiä yritysideoita, vaan kaupallisia toteutuksia sivuston kuvaamille energia-, laskenta-, päättely-, tieto- ja vastuukerroksille.

## Yhteinen tuoterakenne

[Tuotteet ja palvelut asiakasryhmittäin](tuotteet-ja-palvelut.md) jakaa tarjonnan kuluttajille, yksinyrittäjille, mikroyrityksille, pienille, keskisuurille sekä suurille ja säännellyille organisaatioille.

Asiakas voi ostaa:

- vain tokeneita avoimista malleista;
- vain tietoytimen ja tiedon operoinnin;
- molemmat erikseen hinnoiteltuna;
- kapasiteetin tai tietopalvelun oman brändin alla toimivalta virtuaalioperaattorilta;
- käyttöönoton, integraatiot, toimialamallit ja vahvemman tuen lisäpalveluina.

## Markkinadynamiikan vertailukohdat

### Teleoperaattorit

Alueelliset yhtiöt, yhteiset verkkorakenteet ja myöhempi yhdistyminen osoittavat, että infrastruktuuri ja asiakasoperaatio voivat kasvaa eri tahtiin.

### Internetpalveluntarjoajat

[Internet rakentui verkkojen verkoksi](https://www.internetsociety.org/internet/history-internet/brief-history-internet-related-networks/). Paikallinen palveluntarjoaja saattoi ostaa runkoyhteyttä, käyttää yhteisiä protokollia ja palvella omaa asiakasryhmäänsä. Tekoälyoperaattorin vastaava rakenne edellyttää yhteensopivia malleja, mittausta, valtuutuksia, laskutusta ja tietojen siirtoa.

### Virtuaalioperaattorit

[Saunalahti toimii suomalaisena analogiana](https://elisa.com/corporate/about-elisa/history/) siitä, kuinka yritys voi rakentaa tuotteistuksen, asiakassuhteen ja brändin muiden omistaman verkkokapasiteetin päälle. Sama rakenne mahdollistaa tekoälypalvelussa sen, että suuri toimija myy tokeneita tai tietoydinalustaa tukkuna ja pienempi toimija paketoi palvelun alueelle tai toimialalle. Katso [virtuaalioperaattorin ja tukkumarkkinan kuvaus](virtuaalioperaattori.md).

### Uusiutuva energia

Tuotanto, verkko, myynti ja asiakassopimus voivat kuulua eri toimijoille. Pitkä ostosopimus ja fyysinen omaisuus tekevät pääomavaltaisesta hankkeesta rahoitettavamman. Tokenoperaattorin vastaavia välineitä ovat kapasiteettivaraus, vähimmäisosto ja erillinen laitteiston omaisuusyhtiö.

## Yhteiset rajat

- Avoimeksi kutsutun mallin lisenssi ja todellinen avoimuus tarkistetaan mallikohtaisesti.
- “Ei tiedon säilytystä” ei poista tilapäisen käsittelyn tietosuoja- ja turvallisuusvastuuta.
- Tietoytimen omistaa asiakas, ja vienti toiseen ympäristöön testataan käytännössä.
- Tokenit, tietopalvelu, käyttöönotto ja tuki näkyvät erillisinä hintoina.
- Tukkusopimus ei saa estää jälleenmyyjää vaihtamasta kapasiteettitoimittajaa.
- Julkiset markkinahinnat erotetaan kaikissa suunnitelmissa testattavista suomalaisista hinnoista.

## Yhteiset liitteet

- [Tuotteet ja palvelut](tuotteet-ja-palvelut.md)
- [Hinnoittelu ja rahoitus](hinnoittelu-ja-rahoitus.md)
- [Virtuaalioperaattori ja tukkumarkkina](virtuaalioperaattori.md)
- [Muokattavat oletukset](oletukset.yaml)
- [Talousmalli](talousmalli.xlsx)
- [Skenaarioyhteenveto](talousmalli-yhteenveto.csv)
- [Toimijoiden arviointimalli](arviointimalli.yaml)
- [Lähteet](lahteet.md)

## Julkaisuraja

Kokonaisuus on julkaistu avoimena tutkimus- ja suunnitteluaineistona. Julkaisu ei ole liiketoimintalupaus, tarjous, ennuste tai sijoitusmateriaali. Jokainen tyyppikohtainen suunnitelma vaatii ennen toteutusta todellisiin tarjouksiin, asiakashaastatteluihin ja pilotteihin perustuvan päivityksen.

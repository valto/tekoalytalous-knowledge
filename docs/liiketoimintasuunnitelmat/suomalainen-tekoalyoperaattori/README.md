# Suomalaisten tekoälyoperaattorimallien yleiskuva ja liiketoimintasuunnitelmakokoelma

- Tila: julkaistu avoin tutkimus- ja liiketoimintasuunnitelmakokoelma
- Versio: 0.3
- Näytön katkaisupäivä: 2026-09-01
- Seuraava suunniteltu tarkistus: 2026-12-01

Tämä kokoelma ei ole yhden yrityksen liiketoimintasuunnitelma. Se sisältää yhteisen markkina- ja operaattorikuvauksen, neljä erillistä tyyppikohtaista liiketoimintasuunnitelmaa, tuotekortiston sekä talousmallit.

Tekoälyoperaattori ei ole yksi valmis yritystyyppi. Markkina voidaan rakentaa kahden itsenäisen perustoiminnon ympärille:

1. **tokenoperaattori** tuottaa tekoälymallien työkapasiteettia avoimilla malleilla, mutta ei rakenna asiakkaalle pysyvää tietovarantoa;
2. **tieto-operaattori** ylläpitää yksilön tai organisaation omistamaa, siirrettävää ja avoimiin standardeihin perustuvaa tietoydintä;
3. **yhdistelmäoperaattori** tarjoaa molemmat saman asiakassuhteen kautta, mutta pitää kapasiteetin ja tiedon teknisesti, sopimuksellisesti ja laskutuksellisesti erotettavina;
4. **virtuaalioperaattori** omistaa tuotteistuksen, brändin ja asiakassuhteen mutta ostaa tokenit, tietoydinalustan tai molemmat tukkuna.

Jokainen toiminto voi muodostaa oman liiketoimintansa. Toimija voi olla paikallinen, valtakunnallinen, toimialakohtainen, osuustoiminnallinen, tukkupalvelu tai osa suurempaa kokonaisuutta.

## Miten tämä liittyy Tekoälytalous.fi:n muuhun sisältöön?

Paketti konkretisoi jo sivustolla kuvatun ketjun:

- [Tekoälytalouden arvoketju](https://www.tekoalytalous.fi/kartta/arvoketju): energia muuttuu laskennaksi, päättelyksi ja digitaaliseksi työkyvyksi;
- [Tekoälytehtaat](https://www.tekoalytalous.fi/kartta/tekoalytehtaat): päättelykapasiteetin tuotanto on fyysinen ja pääomavaltainen infrastruktuurikysymys;
- [Tieto on tekoälyn käyttöjärjestelmä](https://www.tekoalytalous.fi/kirjoitukset/tieto-on-tekoalyn-kayttojarjestelma): malli on prosessori, mutta omistajan tieto ratkaisee, mihin järjestelmä pystyy;
- [Henkilökohtainen tiedon käyttöjärjestelmä](https://www.tekoalytalous.fi/kartta/henkilokohtainen-ai-os): yksilön tiedon tulee pysyä omistajan hallinnassa ja siirrettävänä;
- [Organisaation tietoydin](https://www.tekoalytalous.fi/kartta/entity-core): sama periaate organisaation pysyvälle, hallitulle tietoytimelle;
- [Organisaation muisti](https://www.tekoalytalous.fi/kirjoitukset/organisaation-muisti-ei-saa-olla-yhden-ihmisen-paassa): toiminnan jatkuvuus tarvitsee yhteisen hallitun tietoperustan.

Liiketoimintasuunnitelmat eivät siis ole sivustosta irrallisia yritysideoita. Ne testaavat, millaisia toimijoita sivuston kuvaamien energia-, laskenta-, päättely- ja tietokerrosten väliin voi syntyä.

## Paketin sisältö

- [operaattorirakenne.md](operaattorirakenne.md) — markkinan perusrakenne ja toimijoiden väliset rajat;
- [liiketoimintasuunnitelma.md](liiketoimintasuunnitelma.md) — yhteinen markkina- ja operaattorikuvaus;
- [liiketoimintasuunnitelma-tokenoperaattori.md](liiketoimintasuunnitelma-tokenoperaattori.md) — tokenoperaattorin täysi suunnitelma;
- [liiketoimintasuunnitelma-tieto-operaattori.md](liiketoimintasuunnitelma-tieto-operaattori.md) — tieto-operaattorin täysi suunnitelma;
- [liiketoimintasuunnitelma-yhdistelmaoperaattori.md](liiketoimintasuunnitelma-yhdistelmaoperaattori.md) — yhdistelmäoperaattorin täysi suunnitelma;
- [liiketoimintasuunnitelma-virtuaalioperaattori.md](liiketoimintasuunnitelma-virtuaalioperaattori.md) — virtuaalioperaattorin täysi suunnitelma;
- [tuotteet-ja-palvelut.md](tuotteet-ja-palvelut.md) — erikseen ostettavat token-, tieto- ja yhdistelmäpalvelut kuluttajille sekä yrityksille koon mukaan;
- [virtuaalioperaattori.md](virtuaalioperaattori.md) — tukkumarkkina, kolme virtuaalioperaattoritasoa ja Saunalahden vertailu;
- [tokenoperaattori.md](tokenoperaattori.md), [tieto-operaattori.md](tieto-operaattori.md) ja [yhdistelmaoperaattori.md](yhdistelmaoperaattori.md) — roolien tarkemmat palvelurajat;
- [hinnoittelu-ja-rahoitus.md](hinnoittelu-ja-rahoitus.md) — markkinahintoihin sidotut hinnoitteluperiaatteet ja laiterahoitus;
- [oletukset.yaml](oletukset.yaml) — laskennan kaikki muutettavat oletukset ja markkinavertailut;
- [talousmalli.xlsx](talousmalli.xlsx) — kahdeksan liiketoimintamallin muokattava viiden vuoden laskentataulukko;
- [talousmalli-yhteenveto.csv](talousmalli-yhteenveto.csv) — koneellisesti luettava skenaarioyhteenveto;
- [arviointimalli.yaml](arviointimalli.yaml) — eri toimijaryhmien arviointi toimintokohtaisesti;
- [lahteet.md](lahteet.md) — kansalliset tilastot, hinnat, markkina-analogiat ja rahoituslähteet;
- [MUUTOSLOKI.md](MUUTOSLOKI.md) ja [LISENSSI.md](LISENSSI.md).

## Talousmallin kahdeksan esimerkkiä

| Toiminto           | Pienempi malli                                                            | Suurempi malli                                                              |
| ------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Tokenkapasiteetti  | Alueellinen 32–128 kiihdytinkortin kapasiteettioperaattori                | Valtakunnallinen 256–2 048 kiihdytinkortin kapasiteettioperaattori          |
| Tieto              | Toimiala- tai osuuskuntapohjainen tieto-operaattori                       | Valtakunnallinen useiden toimialojen tieto-operaattori                      |
| Yhdistelmä         | Toimialakohtainen tieto-operaattori, joka ostaa tokenkapasiteetin tukkuna | Valtakunnallinen palvelu, joka yhdistää varatun kapasiteetin tietopalveluun |
| Virtuaalioperaatio | Toimialakohtainen yritysoperaattori tukkupalvelujen päällä                | Valtakunnallinen kuluttaja- ja pienyritysbrändi tukkupalvelujen päällä      |

Jokaisesta mallista lasketaan heikko, perus- ja vahva skenaario. Kaikki kaupalliset luvut ovat päivättyjä tutkimusoletuksia. Ne eivät ole toteutuneita markkinahintoja, rahoitustarjouksia tai ennusteita.

## Julkaisuraja

Paketti on luonnos. Sen oleminen Gitissä tai avoimessa tietomuodossa ei tarkoita, että se näkyy verkkosivustolla tai että sen johtopäätökset on hyväksytty.

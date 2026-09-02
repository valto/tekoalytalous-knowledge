# Sisällön auktoriteetti ja julkaisuraja

## Nykyinen tila

Tämä repository julkaistiin 2. syyskuuta 2026 itsenäisenä julkisena perusversiona yksityisen verkkosivustosovelluksen lähderevisiosta `86620763bb9bd19fa6684b61842b829b6a1e6f7a`.

Perusversion julkaiseminen ei yksin siirrä minkään sisältöluokan ensisijaista muokkauspaikkaa. Siirto tehdään sisältöluokka kerrallaan vasta, kun verkkosivusto pystyy tuomaan hyväksytyn täsmärevision tarkistettuna paikallisena kopiona.

## Kolme eri tilaa

1. **Hyväksytty tieto tässä repositoriossa** tarkoittaa, että muutos on tarkistettu ja yhdistetty julkiseen tietoaineistoon.
2. **Julkaistu verkkosivustolla** tarkoittaa, että Tekoälytalous.fi näyttää kyseisen version lukijoille.
3. **Muuttumaton nimetty julkaisu** tarkoittaa erikseen versioitua arkistoa, jonka sisältö ja tarkistussummat eivät muutu.

Yhden tilan saavuttaminen ei automaattisesti tarkoita kahta muuta.

## Siirtymävaiheen säännöt

- Verkkosivusto ei lue sisältöä suoraan GitHubin vaihtuvasta päähaarasta.
- Verkkosivusto tuo myöhemmin vain erikseen hyväksytyn täsmärevision paikalliseksi, tarkistetuksi kopioksi.
- Julkinen muutosehdotus ei julkaise sisältöä automaattisesti verkkosivustolle.
- Generoidun tietueen lähde muutetaan ensin sen nykyisessä ensisijaisessa lähteessä, kunnes kyseisen sisältöluokan siirto on hyväksytty.
- Talousmallien oletustiedostot säilyvät siirtymävaiheessa verkkosivustosovelluksen hallitsemana lähteenä, vaikka niiden julkinen tilannekuva sisältyy tähän perusversioon.
- Yksityisiä tapauskohtaisia aineistoja, henkilötietoja, tunnuksia tai palveluasetuksia ei tuoda tähän repositoryyn.

## Sisältöluokan siirron hyväksymisehdot

Sisältöluokka voidaan siirtää tämän repositoryn ensisijaisesti hallittavaksi vasta, kun:

1. ensisijainen lähde on nimetty yksiselitteisesti;
2. kilpaileva muokkauspolku on poistettu käytöstä tai tehty johdetuksi;
3. verkkosivuston tuonti täsmärevisiosta on deterministinen ja tarkistettu;
4. muutos näkyy katselmoitavana verkkosivuston muutoksena;
5. palautus aiempaan hyväksyttyyn revisioon on testattu;
6. julkaisu ei riipu GitHubin saatavuudesta sivupyynnön aikana.

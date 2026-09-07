# Riippumattoman kalibroinnin työpaketti

Tämä hakemisto sisältää kaksi täysin kuvitteellista lähdepakettia, tyhjän arviointipohjan ja ohjeen tulosten lukitsemiseen. Kuvitteelliset nimet, luvut ja asiakirjat eivät kuvaa todellisia yrityksiä.

## Arvioijalle annettavat tiedostot

1. [Tutkimusmenetelmä](../menetelma.md)
2. [Muuttujien pisteytysohje](../pisteytysohje.md)
3. [Painotus ja laskenta](../painotus-ja-laskenta.md)
4. [Koneellisesti luettava arviointimalli](../toimija-arviointi.yaml)
5. [Tapaus A:n lähdepaketti](tapaus-a-lahdepaketti.md)
6. [Tapaus B:n lähdepaketti](tapaus-b-lahdepaketti.md)
7. [Tapaus A:n arviointipohja](tapaus-a-arviointipohja.yaml)
8. [Tapaus B:n arviointipohja](tapaus-b-arviointipohja.yaml)

Yleinen [tyhjä arviointipohja](arviointipohja.yaml) on mukana myöhempää käyttöä varten.

Arvioijalle ei anneta toisen arvioijan tuloksia, vertailuraporttia tai testien ennalta laskettuja esimerkkejä ennen oman kierroksen lukitsemista.

## Työjärjestys

1. Arvioija ilmoittaa identiteettinsä, arvioijatyypin ja sidonnaisuudet.
2. Arvioija täyttää yhden oman kopion arviointipohjasta kummallekin tapaukselle.
3. Jokainen piste tai tila perustellaan lähdepaketin tunnisteilla.
4. Arvioija merkitsee käyttämänsä keskeiset lähteet ja perustelee mahdolliset pois jätetyt keskeiset lähteet.
5. Tiedostojen tarkistussummat lasketaan ja tulokset lukitaan ennen niiden vaihtamista toisen arvioijan kanssa.
6. Vasta lukituksen jälkeen tulokset annetaan vertailutyökalulle.

Lukitus tehdään tietovaraston juuressa näin:

```bash
npm ci
node scripts/lock-market-actor-assessment.mjs arvioija-1-tapaus-a.yaml arvioija-1
node scripts/lock-market-actor-assessment.mjs arvioija-1-tapaus-b.yaml arvioija-1
```

Erillisen ladattavan kalibrointipaketin juuressa vastaavat komennot ovat:

```bash
npm ci
node scripts/lock-market-actor-assessment.mjs arvioija-1-tapaus-a.yaml arvioija-1
node scripts/lock-market-actor-assessment.mjs arvioija-1-tapaus-b.yaml arvioija-1
```

Komento luo kummankin arviointitiedoston viereen `.lock.json`-tiedoston. Arviointia ei saa muuttaa lukituksen jälkeen; muuttaminen rikkoo tarkistussumman ja edellyttää uutta lukitusta näkyvällä syyllä.

## Riippumattomuus

Kalibroinnin hyväksyntäportti edellyttää kahta riippumatonta ihmistä. Agentti voi tarkistaa tiedostomuodon, laskea tuloksen ja valmistella eroraportin, mutta agentin oma harjoituskierros ei täytä ihmisarvioijan paikkaa.

Arvioijat eivät saa keskustella pisteistä tai nähdä toistensa tuloksia ennen molempien tiedostojen lukitsemista. Sama henkilö ei voi täyttää molempia arvioijapaikkoja eri nimellä.

## Tulosten vertailu

Vertailu suoritetaan komennolla:

```bash
node scripts/compare-market-actor-calibration.mjs \
  docs/tutkimus/suomen-tekoalyoperaattorimarkkina/toimija-arviointi.yaml \
  docs/tutkimus/suomen-tekoalyoperaattorimarkkina/kalibrointi/tapaukset.yaml \
  arvioija-1-tapaus-a.yaml \
  arvioija-2-tapaus-a.yaml
```

Erillisessä kalibrointipaketissa komento on:

```bash
node scripts/compare-market-actor-calibration.mjs \
  toimija-arviointi.yaml \
  tapaukset.yaml \
  arvioija-1-tapaus-a.yaml \
  arvioija-2-tapaus-a.yaml
```

Molemmat tapaukset vertaillaan erikseen. Kalibrointi voidaan merkitä hyväksytyksi vasta, kun kummankin tapauksen rajat täyttyvät ja ihminen hyväksyy yhteisen kalibrointitietueen.

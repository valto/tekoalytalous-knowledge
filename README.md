# Tekoälytalous.fi:n julkinen tietovarasto

Tämä repository sisältää Tekoälytalous.fi:n avoimen, koneellisesti käsiteltävän tietokerroksen ja sitä selittävät julkiset tausta-aineistot.

Sisältö on tarkoitettu sekä ihmisille että ohjelmallisille avustajille. Markdown-tiedostot ovat luettavia sellaisenaan, ja niiden alun YAML-metatiedot kuvaavat muun muassa lähteet, tilan, version, tarkistusajan ja lisenssin.

## Aloita tästä

- [Tietopaketin hakemisto](knowledge/index.md)
- [Tietopaketin muutosloki](knowledge/log.md)
- [Suomalaisten tekoälyoperaattorimallien aineisto](docs/liiketoimintasuunnitelmat/suomalainen-tekoalyoperaattori/README.md)
- [Open Knowledge Format ja kyvykkyysvaatimusasiakirjat](docs/okf-and-crd.md)
- [Sisällön auktoriteetti ja julkaisuraja](AUKTORITEETTI.md)
- [Osallistumisohje](CONTRIBUTING.md)

## Mitä täällä on

- `knowledge/`: Open Knowledge Format 0.2 -rakenteinen tietopaketti.
- `docs/`: tutkimusmenetelmät, säännöt, markkinamallit ja liiketoimintasuunnitelmien tausta-aineistot.
- `schemas/`: Tekoälytalous.fi:n käyttämien metatietokenttien julkiset kuvaukset.
- `scripts/`: paikallinen rakenteen, linkkien ja julkisuusrajan tarkistus.
- `.github/`: muutosehdotusten lomakkeet ja automaattinen tarkistus.

## Tarkista paikallisesti

Tarvitset Node.js-version 22 tai uudemman.

```bash
npm ci
npm test
npm run validate
```

Tarkistus ei hae verkkosisältöä eikä arvioi väitteiden totuutta. Se tarkistaa tiedostorakenteen, vaaditut metatiedot, sisäiset linkit, yksilölliset tunnisteet ja sen, ettei aineistoon ole jäänyt viittauksia yksityiseen sovellusrepositoryyn.

## Muuttumattomat julkaisut

GitHubin Releases-osiossa julkaistavat nimetyt versiot sisältävät tietopakettiarkiston, tiedostoluettelon, lähderevision, hyväksyntätiedon, tarkistustulokset ja SHA-256-tarkistussummat. Korjaukset julkaistaan uutena versiona; olemassa olevan version tiedostoja ei korvata.

Julkaisuehdokas muodostetaan puhtaasta repositorytilasta erilliseen hakemistoon komennolla `npm run prepare:release`. Julkaiseminen GitHubiin ja ladattujen tiedostojen tarkistus ovat erillisiä, ihmisen hyväksyntään sidottuja vaiheita.

Nykyinen varmennettu julkaisu on [knowledge-v0.2.1](https://github.com/valto/tekoalytalous-knowledge/releases/tag/knowledge-v0.2.1). Versio `knowledge-v0.2.0` on säilytetty historiassa mutta merkitty korvatuksi puuttuneen julkaisutekstitiedoston vuoksi.

## Julkaisu ja vastuu

Tämän repositoryn hyväksytty sisältö, Tekoälytalous.fi-sivustolla näkyvä julkaisu ja muuttumaton nimetty julkaisu ovat eri asioita. Tarkka raja on kuvattu tiedostossa [AUKTORITEETTI.md](AUKTORITEETTI.md).

Sisältö ei ole sijoitus-, laki-, vero- tai muuta ammattineuvontaa. Talousmallit ovat muokattavia hypoteeseja, eivät ennusteita.

## Lisenssit

Sisältö on lisensoitu Creative Commons Nimeä 4.0 Kansainvälinen -lisenssillä, ellei yksittäinen tiedosto ilmoita muuta. Tarkistus- ja automaatiokoodi on MIT-lisensoitu. Katso [LICENSE.md](LICENSE.md).

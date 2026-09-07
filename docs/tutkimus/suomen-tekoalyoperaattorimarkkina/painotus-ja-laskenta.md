# Painotus ja laskenta

Versio 0.2 — kalibroitu menetelmä

Päivitetty 4.9.2026.

## Mitä piste kuvaa?

Painotettu pistetulos kuvaa toimijan lähteistettyä nykyistä toteutuskykyä yhdessä operaattoriroolissa. Se ei kuvaa yrityksen arvoa, yleistä laatua, tulevaa menestystä, sijoituskelpoisuutta tai automaattista paremmuutta muihin toimijoihin nähden.

## Painojen alkuperä ja asema

Version 0.2 painot ovat tutkimushypoteesi, joka on johdettu sivustolla määriteltyjen neljän operaattoriroolin vastuista ja aiemman liiketoimintasuunnitelmapaketin arviointimallista 0.3. Ne eivät ole empiirisesti validoituja markkinaosuuksia tai ennustekertoimia.

Painon suuruus kertoo, kuinka keskeinen muuttuja on kyseisen roolin nykyisen toteutuskyvyn kannalta:

- 1–4: täydentävä kyky;
- 5–9: merkittävä tukikyky;
- 10–14: keskeinen kyky;
- 15–20: roolia määrittävä kyky.

Jokaisen muuttujan roolikohtainen perustelu on koneellisesti luettavassa arviointimallissa. Painot lukitaan menetelmäversion mukana. Painojen muuttaminen synnyttää uuden menetelmäversion eikä saa näyttää toimijan omalta muutokselta.

## Pakolliset muuttujat

Painotetun tuloksen muodostaminen edellyttää numeerista havaintoa kaikista roolin pakollisista muuttujista:

| Rooli | Pakolliset muuttujat |
| --- | --- |
| Tokenoperaattori | laskentakapasiteetti, rahoitus, avoimet mallit, tietoturva, jatkuva tuki |
| Tieto-operaattori | tietoydin, tiedon omistus ja valtuutukset, siirrettävyys, tietoturva, integraatio |
| Yhdistelmäoperaattori | laskentakapasiteetti, tietoydin, omistus ja valtuutukset, siirrettävyys, tietoturva, operoinnin erottelu |
| Virtuaalioperaattori | asiakaskanta ja jakelu, siirrettävyys, toimialaosaaminen, jatkuva tuki, operoinnin erottelu |

Pakollisuus ei tarkoita, että arvon pitäisi olla korkea. Myös lähteistetty arvo 0–2 on sallittu. Pakollisen muuttujan `tuntematon` tai `ei sovellu` estää painotetun tuloksen.

## Laskentakaava

Jokainen numeerinen muuttuja saa arvon `0–5`. Roolikohtainen paino on `w` ja piste `s`.

```text
soveltuva paino = kaikkien muiden kuin "ei sovellu" -muuttujien painojen summa
tunnettu paino = numeerisesti arvioitujen muuttujien painojen summa
näyttökattavuus = 100 × tunnettu paino / soveltuva paino
painotettu tulos = Σ(w × s) / tunnettu paino
```

Tulosta ei muodosteta, jos:

- näyttökattavuus on alle 70 prosenttia;
- jokin pakollinen muuttuja on `tuntematon` tai `ei sovellu`;
- `ei sovellu` -muuttujien paino ylittää 20 prosenttia;
- arvioinnissa on ratkaisematon, tulosta olennaisesti muuttava lähderistiriita.

Painotettu tulos pyöristetään kahden desimaalin tarkkuuteen vasta laskennan lopuksi. Yksittäisiä välituloksia ei pyöristetä. Tasatulos säilytetään tasatuloksena; sitä ei ratkaista laadullisella harkinnalla tai luottamusluokalla.

### Esimerkki

Jos tunnettuja ovat painot 20, 15 ja 10 pisteillä 4, 3 ja 2, tunnettu paino on 45 ja tulos:

```text
(20 × 4 + 15 × 3 + 10 × 2) / 45 = 3,22
```

Jos soveltuva paino on 100, näyttökattavuus on 45 prosenttia eikä tulosta julkaista.

## Pisteen kuvaileva tulkinta

| Tulos | Kuvaus |
| --- | --- |
| 0,00–0,99 | Lähteistetysti erittäin heikko tai olennaisesti estynyt nykykyky. |
| 1,00–1,99 | Heikko nykykyky ja useita suuria puutteita. |
| 2,00–2,99 | Osittainen nykykyky ja olennaisia puutteita. |
| 3,00–3,99 | Uskottava nykykyky, mutta kehitystarpeita. |
| 4,00–4,74 | Vahva nykykyky. |
| 4,75–5,00 | Poikkeuksellisen valmis nykykyky suhteessa määriteltyyn rooliin. |

Tulkinta on roolikohtainen eikä yritysten välinen sijoitusluokka.

## Luottamus

Havaintokohtaiset luottamukset muunnetaan vain kokonaisluottamuksen johtamista varten: A=4, B=3, C=2 ja D=1. Ne eivät muuta muuttujapistettä.

Kokonaisluottamus johdetaan seuraavasti:

- **A:** näyttökattavuus vähintään 90 prosenttia, painotettu luottamuskeskiarvo vähintään 3,5 eikä yhtään D-havaintoa;
- **B:** näyttökattavuus vähintään 80 prosenttia, luottamuskeskiarvo vähintään 3,0 ja D-havaintojen paino enintään 10 prosenttia tunnetusta painosta;
- **C:** näyttökattavuus vähintään 70 prosenttia ja luottamuskeskiarvo vähintään 2,0;
- **D:** muut tapaukset; jos laskennan muut ehdot eivät täyty, myös pistetulos jätetään muodostamatta.

## Herkkyystarkastelu

Jokaiselle muodostetulle tulokselle tehdään yksi muuttuja kerrallaan -tarkastelu:

1. kunkin tunnetun muuttujan painoa pienennetään 20 prosenttia ja muut tunnetut painot suhteutetaan uudelleen;
2. sama paino kasvatetaan 20 prosenttia ja muut suhteutetaan uudelleen;
3. kirjataan pienin ja suurin saatu pistetulos;
4. tulos merkitään painoherkäksi, jos vaihteluväli ylittää 0,25 pistettä tai kuvaileva tulkintaluokka muuttuu.

Painoherkkää tulosta ei saa esittää ilman vaihteluväliä ja näkyvää varoitusta. Herkkyystarkastelua ei käytetä valitsemaan mieluisinta tulosta.

## Hyväksyntäportit

Painoja ja laskentaa saa käyttää nimettyyn yritysarviointiin vasta, kun:

- kaksi riippumatonta arvioijaa on suorittanut kaksi kalibrointitapausta;
- muuttujakohtainen hyväksyttävä yhtäpitävyys on saavutettu;
- painojen herkkyystarkastelu on dokumentoitu;
- omistaja on hyväksynyt menetelmäversion yritysarviointiin.

Näiden täyttymiseen asti laskuri ja esimerkit ovat menetelmän teknistä testausta, eivät yritystutkimuksen tuloksia.

Laskuri toimii suljetusti: keskeneräisillä hyväksyntäporteilla se hyväksyy vain nimenomaisesti synteettiseksi merkityn testitapauksen ja hylkää nimetyn toimijan laskennan.

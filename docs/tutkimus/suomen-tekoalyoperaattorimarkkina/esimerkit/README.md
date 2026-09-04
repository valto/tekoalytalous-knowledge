# Synteettiset laskentaesimerkit

Nämä esimerkit testaavat menetelmän laskentasääntöä. Ne eivät kuvaa todellisia yrityksiä, markkinaväitteitä tai julkaistavia toimija-arvioita.

## Kapasiteettipainotteinen toimija

Tiedosto `kapasiteettitoimija.yaml` tuottaa menetelmäversiolla 0.2:

- näyttökattavuus 99 prosenttia;
- nykyisen toteutuskyvyn tulos 3,39;
- kokonaisluottamus B;
- herkkyysväli 3,36–3,42;
- ei laskennan estettä.

## Tietopalvelupainotteinen toimija

Tiedosto `tietopalvelutoimija.yaml` tuottaa menetelmäversiolla 0.2:

- näyttökattavuus 94,95 prosenttia;
- nykyisen toteutuskyvyn tulos 3,70;
- kokonaisluottamus A;
- herkkyysväli 3,68–3,72;
- ei laskennan estettä.

Esimerkkien ennalta lasketut tulokset tarkistetaan automaattisilla testeillä. Tämä todistaa laskennan toistettavuuden annetulla aineistolla, mutta ei korvaa [kahden riippumattoman arvioijan kalibrointia](../kalibrointi.md).

# Kalibrointikierroksen 0.2-2 tulos

Päivä: 7.9.2026

Tila: teknisesti läpäisty; odottaa ihmisen omistajapäätöstä

## Arvioijat ja riippumattomuus

Kierroksen tekivät kaksi eri auditointiagenttia:

- `audit-agent-gamma-20260907`;
- `audit-agent-delta-20260907`.

Agentit käynnistettiin eri tuoreisiin konteksteihin ilman jaettua keskusteluhistoriaa. Kumpikaan ei saanut käyttöönsä toisen agentin tuloksia, ensimmäisen kierroksen tuloksia, pääagentin harjoitustuloksia, testien odotettuja tuloksia, verkkohakua tai tietovaraston historiaa. Molemmat saivat saman menetelmän, pisteytysohjeen, arviointimallin, kaksi lähdepakettia ja omat tyhjät arviointipohjat.

Kaikki neljä arviointitiedostoa lukittiin tarkistussummalla ennen vertailua.

## Tapaus A — kuvitteellinen kapasiteettitoimija

| Tarkistus | Tulos |
| --- | --- |
| Kelpoisuuspäätös | sama: jatkoon |
| Valittu rooli | sama: tokenoperaattori |
| Muuttujayhtäpitävyys | 100 % |
| Painotetut tulokset | 3,44 ja 3,63 |
| Tulosten ero | 0,19 |
| Kokonaisluottamus | sama: B |
| Keskeiset lähteet | kaikki käsitelty |
| Hyväksymisrajat | läpäisty |

Piste-erot olivat yhden pisteen suuruisia rahoituksessa, operoinnin erottelussa ja jatkuvassa tuessa. Erot eivät muuttaneet tulkintaluokkaa, joka oli molemmilla `uskottava`.

## Tapaus B — kuvitteellinen tietopalvelutoimija

| Tarkistus | Tulos |
| --- | --- |
| Kelpoisuuspäätös | sama: jatkoon |
| Valittu rooli | sama: tieto-operaattori |
| Muuttujayhtäpitävyys | 100 % |
| Painotetut tulokset | 4,00 ja 4,10 |
| Tulosten ero | 0,10 |
| Kokonaisluottamus | sama: B |
| Keskeiset lähteet | kaikki käsitelty |
| Hyväksymisrajat | läpäisty |

Ainoa piste-ero oli integraatiokyvyssä, jossa tulokset olivat 4 ja 5. Molempien kuvaileva tulkintaluokka oli `vahva`.

## Ensimmäisen kierroksen vaikutus

Ensimmäinen auditointiagenttikierros läpäisi määrälliset rajat mutta paljasti toistuvan tulkintaeron `ei sovellu` -tilan ja nollapisteen välillä. Pisteytysohjetta täsmennettiin ennen kierrosta 0.2-2. Uudella kierroksella molemmat agentit käsittelivät nämä rajatapaukset samalla tavalla.

## Tekninen päätös

Kierros 0.2-2 läpäisee kaikki ennalta määritellyt tekniset rajat:

- molemmat rekisteröidyt tapaukset ovat mukana;
- molemmissa tapauksissa käytettiin samaa riippumatonta arvioijaparia;
- molemmat tapauskohtaiset vertailut läpäisivät kaikki rajat;
- arviointitiedostojen lukitukset ja tarkistussummat täsmäävät.

Tekninen läpäisy ei yksin avaa nimettyjen toimijoiden arviointia. Valto Loikkasen nimenomainen hyväksyntä vaaditaan ennen kuin menetelmän kalibrointiportti muutetaan hyväksytyksi.

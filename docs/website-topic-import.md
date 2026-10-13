# Julkaistujen kartta-aiheiden johdettu OKF-esitys

## Rajaus ja ensisijainen lähde

Tässä muutoksessa viisi 13.10.2026 julkaistua julkisen hallinnon aihetta tuodaan
OKF-tietueiksi. Niiden ensisijainen muokkauspaikka pysyy verkkosivuston
`src/data/content.ts`-tiedostossa ja kuratoitujen ristiinyhteyksien osalta
`src/data/cross-connections.ts`-tiedostossa. `knowledge/topics/` on johdettu
kopio, eikä tietueiden lisääminen muuta sivuston tuontisuuntaa.

`website-topic-import.json` tallentaa lähteen täsmärevision, luokan, tiedostot
ja kunkin lähdeolion sekä sen ristiinyhteyksien SHA-256-tarkisteen. Tietueessa
on sama revisio, tietueen oma tarkiste, alkuperäinen julkinen sivuosoite,
lähtösivun sisältö ja siitä muodostettu luettava Markdown-teksti.
`generated` kertoo koneellisen muunnoksen. Se ei ole `verified`-merkintä.

## Uusinta ja tarkistus

1. Tarkista verkkosivuston muutoksen hyväksyntä ja siinä julkaistu lähderevisio.
2. Tee siisti, täsmälleen kyseiseen revisioon osoittava verkkosivuston työpuu.
3. Suorita `node scripts/import-website-topics.mjs --website-checkout /absolute/path/to/website-checkout`.
4. Vertaa viiden tietueen sisältöä sivustoon ja varmista, ettei ulkoisten
   aineistojen tekstiä ole esitetty sivuston omana tai arvioitua mahdollista
   vaikutusta toteutuneena tuloksena.
5. Suorita `npm test` ja `npm run validate`. Vie muutos katselmoitavaan PR:ään.

Tuontiskripti edellyttää tarkkaa hyväksyttyä sivustorevisiota ja puhdasta
työpuuta. Uudesta verkkosivustorevisiosta tehtävä myöhempi tuonti vaatii myös
skriptin revisiorajan päivittämisen ja uuden katselmoinnin. Päivitystä ei tehdä
automaattisesti sivuston julkaisemisen yhteydessä.

Tietueen `related` sisältää entiset aihelinkit; `editorial_connections` säilyttää
ristiinluentaan valitut kohteet ja kunkin yhteyden toimituksellisen perustelun.
Tässä paketissa mukana olevaan kohteeseen viitataan OKF:n sisäisellä polulla.
Muut kohteet osoittavat sivustolle, koska niille ei ole samaan julkaisuun
kuuluvaa OKF-esitystä. Tämä on **rajattu sisältöluokan laajennus**, ei väite,
että jokaisesta nykyisestä sivusta olisi OKF-tietue.

## Julkaisun raja

Tietovaraston PR, verkkosivuston jo tapahtunut julkaisu ja uusi muuttumaton
OKF-julkaisu ovat erillisiä päätöksiä. Tästä muutoksesta valmisteltu ehdokas
on hyväksyttävä sen täsmällisen manifestitarkisteen ja lähderevision perusteella
ennen Git-tagin ja GitHub-julkaisun luomista. Julkaisuun ei lisätä tämän
työn ulkopuolista, keskeneräistä tutkimusta sen verkkosivujulkaisuna.

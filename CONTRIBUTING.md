# Osallistumisohje

Voit ehdottaa uutta lähdettä, korjata tietoa, täydentää käsitettä tai ehdottaa kokonaan uutta aineistoa GitHubin lomakkeilla tai muutosehdotuksella.

## Ennen ehdotusta

- Tarkista, löytyykö sama asia jo `knowledge/`-hakemistosta.
- Kerro väitteen tai muutoksen tueksi ensisijainen lähde aina kun mahdollista.
- Erota lähteestä todettava asia omasta tulkinnasta tai hypoteesista.
- Älä lisää henkilötietoja, luottamuksellista aineistoa, salasanoja, tunnuksia tai suljettua asiakasdataa.
- Varmista, että ehdottamasi teksti voidaan julkaista ilmoitetulla lisenssillä.

## Helppo tapa osallistua

Valitse GitHubissa **Issues** ja käytä sopivaa lomaketta:

- lähde-ehdotus;
- korjaus tai vanhentunut tieto;
- uusi aihe tai tietosisältö.

Lomake on hyvä vaihtoehto, jos et halua muokata tiedostoja itse.

## Muutosehdotus tiedostoihin

1. Tee oma kopio repositoriosta.
2. Luo yksi selkeä haara yhtä muutosta varten.
3. Muokkaa tiedostoa tai lisää uusi tiedosto oikeaan ryhmään.
4. Päivitä tarvittaessa ryhmän `index.md` ja `knowledge/log.md`.
5. Suorita `npm ci`, `npm test` ja `npm run validate`.
6. Avaa muutosehdotus ja täytä tarkistuslista.

## Sisältövaatimukset

Jokaisella varsinaisella tietueella on oltava vähintään:

- uusissa Tekoälytalous.fi:n omissa tietueissa yksilöllinen `id` ja `slug`; vanhemmissa tai ulkopuolisesta muodosta tuoduissa tietueissa tiedostopolku voi toimia käsitteen tunnisteena;
- `type`, `title` ja `description`;
- elinkaaren `status`;
- julkaisun ja toimituksen tila, jos sisältö on verkkosivuston aineistoa;
- lähteet rakenteisessa `sources`-kentässä;
- `license`;
- selkeä Markdown-otsikko ja ymmärrettävä tekstiosa.

Käytä olemassa olevaa saman ryhmän tiedostoa mallina. Kentät on kuvattu myös hakemistossa [schemas](schemas/README.md).

## Tarkistus ja hyväksyntä

Automaattinen tarkistus varmistaa rakenteen ja sisäiset linkit. Ylläpitäjä arvioi lisäksi lähteet, väitteen rajauksen, mahdolliset ristiriidat, lisenssin ja suhteen sivuston nykyiseen sisältöön.

Muutosehdotusta ei yhdistetä eikä julkaista automaattisesti. Verkkosivustolle vienti on erillinen hyväksytty muutos. Katso [sisällön auktoriteetti](AUKTORITEETTI.md).

## Kieli

Lukijoille tarkoitettu Tekoälytalous.fi-sisältö kirjoitetaan suomeksi. Vakiintuneen vieraskielisen termin voi ilmoittaa suomenkielisen termin rinnalla kohdassa “tunnetaan myös nimellä”. Lähteen alkuperäistä nimeä ei tarvitse kääntää.

# Tekoälytalous bundle history

## 2026-09-07

- **Kalibroinnin hyväksyntä**: Valto Loikkanen hyväksyi kalibrointikierroksen 0.2-2. Menetelmä avattiin nimettyjen toimijoiden luonnosarvioihin; yksittäisten arvioiden hyväksyntä ja verkkosivujulkaisu pysyvät erillisten ihmispäätösten takana.
- **Kalibroinnin arvioijat**: Omistaja päätti, että toistettavuuskalibrointi tehdään kahdella toisistaan eristetyllä auditointiagentilla. Ihminen säilyttää vertailuraportin ja menetelmäportin lopullisen hyväksynnän.
- **Kalibrointikierros 0.2-2**: Kaksi uutta eristettyä auditointiagenttia arvioi molemmat synteettiset tapaukset. Muuttujayhtäpitävyys oli molemmissa 100 prosenttia ja pistetulosten erot 0,19 sekä 0,10. Tekninen tulos läpäisi rajat.
- **Kalibrointipaketti**: Lisätty muuttujakohtainen pisteytysohje, kaksi uutta synteettistä lähdepakettia ja tapauskohtaiset arviointipohjat.
- **Tulosten eheys**: Lisätty arviointitiedoston rakenteen tarkistus, tarkistussummalla tehtävä lukitus ja kahden arvioijan tulosten vertailu.
- **Riippumattomuusraja**: Vertailutyökalu hylkää kalibroinnin, jos arvioijat eivät ole kaksi eri ihmistä tai kaksi toisistaan eristettyä auditointiagenttia taikka jos keskeinen lähde on jätetty käsittelemättä ilman perustelua.
- **Harjoituskierros**: Yksi agentin harjoituskierros tehtiin molemmille tapauksille ja tallennettiin yksityiseen työarkistoon. Se ei täytä riippumattoman kalibroinnin hyväksyntäporttia.

## 2026-09-04

- **Omistajan hyväksyntä**: Valto Loikkanen hyväksyi markkinatoimijan arviointimenetelmän version 0.2 julkaistavaksi julkisena menetelmäluonnoksena. Nimettyjen toimijoiden arviointi pysyy estettynä riippumattoman kalibroinnin valmistumiseen asti.
- **Menetelmäauditoinnin korjaukset**: Markkinatoimijan arviointimenetelmä päivitettiin versioon 0.2. Laskentakaava, vähimmäisnäyttö, pakolliset muuttujat, painoperustelut, herkkyystarkastelu ja seitsemän erillistä tulosta määriteltiin.
- **Lähteet ja riippumattomuus**: Lisättiin lähteiden ajantasaisuus- ja vahvistussäännöt, arvioijien sidonnaisuudet sekä riippumattoman ihmiskatselmuksen vaatimus.
- **Korjaukset ja vastineet**: Lisättiin nimettyjen toimijoiden tosiasiakorjaus- ja vastineprosessi.
- **Kalibrointiraja**: Tekniset synteettiset esimerkit ja laskentatestit lisättiin, mutta nimettyjen toimijoiden arviointi pysyy estettynä kahden riippumattoman arvioijan kalibrointiin ja omistajan hyväksyntään asti.

## 2026-09-03

- **Suomen markkinatutkimuksen perusta**: Lisätty tekoälyoperaattorimarkkinan tutkimussuunnitelma, toimijaryhmät, lähderekisteri ja koneellisesti luettava arviointimalli luonnoksena.
- **Arviointiraja**: Ehdokkuus erotettiin todetusta operaattoriasemasta, tuntematon tieto erotettiin nollapisteestä ja yritysten automaattinen paremmuusjärjestys kiellettiin.
- **Kyvykkyys**: Markkinatoimijan arviointi määriteltiin omaksi kyvykkyydeksi ennen ensimmäisiä nimettyjä yritysarvioita.

## 2026-09-02

- **Julkinen repository**: Tietopaketti ja sen julkiset tausta-aineistot koottiin itsenäiseen `valto/tekoalytalous-knowledge`-repositoryyn.
- **Julkisuusraja**: Yksityisen sovelluksen asetuksia, tunnuksia, henkilötietoja, sähköpostipalvelua tai julkaisutekniikkaa ei siirretty.
- **Osallistuminen**: Lisättiin suomenkieliset lähde-, korjaus- ja aihe-ehdotuslomakkeet sekä muutosehdotusten tarkistuslista.
- **Tarkistus**: Lisättiin itsenäinen rakenteen, metatietojen, tunnisteiden, sisäisten linkkien ja yksityisten repositoryviittausten tarkistus.
- **Auktoriteetti**: Julkinen perusversio ei vielä siirrä sisältöluokkien ensisijaista muokkauspaikkaa. Siirto ja verkkosivuston täsmärevisiotuonti tehdään erillisinä vaiheina.
- **Lähderevisio**: Perusversio koottiin verkkosivustosovelluksen revisiosta `86620763bb9bd19fa6684b61842b829b6a1e6f7a`.
- **Muuttumaton julkaisu**: `knowledge-v0.2.1` julkaistiin lähderevisiosta `700547a116a32ba0e85f3962d51f310714d4e0a0`. Julkaisu sisältää arkiston, aineistoluettelon, hyväksyntätiedon, tarkistustulokset, julkaisutekstin ja SHA-256-tarkistussummat.
- **Takaisinvarmistus**: Kaikki `knowledge-v0.2.1`-julkaisun tiedostot ladattiin GitHubista ja niiden tarkistussummat varmistettiin onnistuneesti.
- **Korvattu julkaisu**: `knowledge-v0.2.0` merkittiin korvatuksi, koska sen tarkistussummaluettelo viittasi julkaisutekstitiedostoon, jota ei ollut ladattu erillisenä aineistona. Julkaistuja tiedostoja ei korvattu hiljaisesti.

## 2026-08-27

- **Creation**: Established the five-concept OKF v0.2 pilot.
- **Mapping**: Preserved Tekoälytalous identity, publication, evidence, relation, licence, and version fields as producer extensions.
- **Validation**: Added dependency-free conformance and lossless-mapping checks.

## 2026-08-28

- **Release**: Published immutable bundle `knowledge-v0.1.0` from source commit `1fd64bd570c196d652e5a653980f9e052430be2e`.
- **Approval**: Valto approved manifest SHA-256 `9014bdb33f31af67d7fde44222fd4037bde1a51460263b278f3a675c58b4c38f`; the approval was recorded by `process:codex-primary-mac` without delegated impersonation.
- **Distribution**: Added the annotated Git tag and GitHub Release with the OKF archive, manifest, approval, validation evidence, release notes, and `SHA256SUMS`.
- **Verification**: Downloaded the published assets and verified every checksum before recording this event.

## 2026-08-31

- **Maintenance**: The first V2.2a scan identified that the `tekoalyagentti` glossary concept lacked an explicit licence.
- **Decision**: Valto authorised the bounded metadata repair through the normal reviewed content workflow.
- **Correction**: Applied the canonical `CC BY 4.0` licence to glossary terms, versioned `tekoalyagentti` to `1.1`, and regenerated its OKF representation.
- **Verification**: Follow-up maintenance scanning found no actionable or advisory structural maintenance condition.
- **Market Lab**: Added ML-1 market-formation model v1.0, its base hypothesis, and two explicit counter-hypotheses as draft OKF concepts with an evidence cutoff and planned review date.
- **Approval**: Valto approved ML-1 v1.0 as the Market Lab research baseline. The concepts are stable and editorially approved but remain unpublished and outside a new immutable release.
- **Market Lab**: Added ML-2 local AI-operator v0.1 as an OKF-first draft with a seven-part service stack, customer segments, role boundaries, make-or-buy conditions, unit-economics variables, one base hypothesis, and two counter-hypotheses.
- **Authority**: Documented the transitional boundary between typed website content, OKF-native research, explanatory documentation, website publication, and immutable releases.
- **Liiketoimintasuunnitelma**: Lisätty suomalaisen tekoälyoperaattorin avoin luonnos, jossa ovat pieni alueellinen tai erikoistunut malli, suurempi valtakunnallinen malli, kolme talousskenaariota, muokattavat oletukset ja deterministisesti muodostettava laskentataulukko.
- **Yksityisyysraja**: Tunnistettava tapauskohtainen liiketoimintamalli rajattiin erilliseen yksityiseen työtilaan; sitä ei sisällytetä julkiseen tietopakettiin ilman erillistä anonymisointia ja hyväksyntää.

## 2026-09-01

- **Markkinarakenne**: ML-2 uudistettiin erottamaan avoimia malleja ajava tokenoperaattori, omistajakohtaista ja siirrettävää tietoydintä ylläpitävä tieto-operaattori sekä molemmat kerrokset erillisinä tarjoava yhdistelmäoperaattori.
- **Liiketoimintasuunnitelma**: Julkinen paketti laajennettiin kuuteen pienen ja suuren mittakaavan roolikohtaiseen malliin sekä markkinahintoihin sidottuun hinnoittelu- ja rahoituskehikkoon.
- **Yhteys sivustoon**: Suunnitelman perustelut liitettiin arvoketjuun, tekoälytehtaisiin, henkilökohtaiseen tietojärjestelmään, organisaation muistiin ja tietoa käyttöjärjestelmänä käsittelevään kirjoitukseen.
- **Vertailudynamiikat**: Teleoperaattorien rinnalle lisättiin internet-palveluntarjoajien verkottuminen ja uusiutuvan energian omaisuusrahoitus markkinarakenteen analogioiksi.
- **Julkaisuraja**: Uudistus on edelleen julkaisematon ja ihmisen tarkastusta vaativa tutkimusluonnos; se ei muuta julkista verkkosivustoa tai aiempaa muuttumatonta tietopakettijulkaisua.
- **Liiketoimintasuunnitelmien rakenne**: Yhteinen markkinakuvaus erotettiin neljästä täydestä tyyppikohtaisesta suunnitelmasta: token-, tieto-, yhdistelmä- ja virtuaalioperaattori.
- **Tuotteistus**: Tokenit, tietoydin ja yhdistelmäpalvelu jaettiin kuluttajille sekä yrityksille koon mukaan erikseen ostettaviksi tuotteiksi.
- **Virtuaalioperaattorit**: Lisättiin tukkukapasiteetin päälle rakentuva virtuaalioperaattorirooli, Saunalahden historiallinen analogia ja kaksi erillistä talousmallia.
- **Verkkosivujulkaisu**: Valto hyväksyi yleiskuvauksen, neljän tyyppikohtaisen suunnitelman, tuotteiden, hinnoittelun, lähteiden ja laskentatiedostojen julkaisemisen Tekoälytalous.fi-sivustolla.
- **Kirjoitus**: Julkaistu kirjoitus “Tekoälyoperaattori ei ole yksi liiketoimintamalli”, joka yhdistää uuden kokoelman sivuston arvoketju-, tekoälytehdas- ja tietoydintutkimukseen.

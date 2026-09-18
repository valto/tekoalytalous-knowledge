# Ensimmäinen nimetty arviointierä

Päivä: 7.9.2026  
Menetelmä: 0.2  
Kalibrointi: 0.2-2, hyväksytty 7.9.2026  
Tila: toimijavalinta lukittu; toimijakohtainen kelpoisuusseula kahden riippumattoman auditointiagentin hyväksymä

Tämä on tarkoituksellinen kuuden toimijan menetelmäkoe. Se ei ole tilastollinen otos, yritysten paremmuusjärjestys eikä väite siitä, että valitut toimijat olisivat tekoälyoperaattoreita.

## Valintaperiaate

Jokainen toimija täyttää yhden ennalta määrätyn koepaikan. Valinta painottaa rakenteellista vaihtelua ja sitä, että kelpoisuusseula voidaan tutkia julkisista lähteistä. Jos samalle paikalle oli useita ehdokkaita, valittiin määräpäivänä laajimmin lähteistetty ja rakenteeltaan koepaikkaa selvimmin koetteleva toimija. Tasatilanteessa ratkaisee oikeushenkilön nimi aakkosjärjestyksessä. Odotettuja pisteitä ei käytetty valintaan eikä toimijoille ole vielä laskettu pisteitä.

Pitkä lista on dokumentoitu tarkoituksellinen osajoukko ensimmäisistä lähdeankkureista ja niiden suorista vertailutoimijoista. Se ei ole kattava luettelo Suomen kaikista mahdollisista toimijoista.

Valinnan teki `codex-primary-mac`. Agentilla ei ole tiedossa taloudellisia, työ- tai toimeksiantosidonnaisuuksia toimijoihin. Valto Loikkasen mahdolliset toimijakohtaiset sidonnaisuudet tarkistetaan ennen pisteytystä.

## Lukittu kuuden toimijan erä

| Koepaikka | Toimija ja arviointiyksikkö | Ensisijainen rakenne | Miksi valittu menetelmäkokeeseen? |
| --- | --- | --- | --- |
| Kaupallinen kapasiteetti- tai mallipalvelu | **DataCrunch Oy:n Verda AI Cloud -palvelu** | kaupallinen tekoälypilvi | Julkisissa lähteissä ovat näkyvissä palvelu, hinnasto, DataCrunch Oy:n asiakassopimus ja palveluvastuun kuvaus. Koe erottaa yleisen grafiikkasuoritinpilven avoimien mallien tokenoperaattorista. |
| Kansallinen tele- tai tietotekniikkapalvelu | **Elisa Oyj:n yritysasiakkaille tarjoama tekoälypalvelukokonaisuus** | valtakunnallinen tele- ja tietotekniikkapalvelu | Julkinen lähde kuvaa tuotteistettuja tekoälypalveluja. Tarkka sopimus- ja palveluraja vahvistetaan seulonnassa, eikä teleoperaattoriasemaa lasketa automaattisesti näytöksi. |
| Alueellinen tietoliikenneyhtiö | **Lounea Oy:n hallittu virtuaalipalvelin** | alueellisen tietoliikenneyhtiön hallittu kapasiteettipalvelu | Palvelukuvaus nimeää virtuaalipalvelimen, ylläpidon ja palvelutasot. Koe testaa hypoteesia oman asiakassuhteen päälle rakennetusta virtuaalioperaattorista. |
| Datan välitys-, identiteetti- tai tietopalvelu | **Tritom-datanvälityspalvelu / DataSpace Europe** | säännelty datan välityspalvelu | Euroopan unionin rekisterimerkintä ja palvelukuvaus koettelevat datan välityksen ja omistajakohtaisen tietoytimen operoinnin välistä rajaa. Oikeushenkilö ja sopimusosapuoli vahvistetaan seulonnassa. |
| Toimiala-, osuuskunta- tai yhteisöpohjainen palvelu | **Tiera Oy:n Digius-palvelualustan integraatioalustapalvelut** | kuntien ja hyvinvointialueiden omistaman palveluyhtiön integraatiopalvelu | Julkinen lähde kuvaa rajatulle asiakasyhteisölle tuotteistetun integraatioalustapalvelun. Koe käsittelee omistajayhteisön ja ulkoisten kumppanien välistä vastuuta. |
| Julkinen tai yhteisesti rahoitettu infrastruktuuri | **LUMI AI Factory -konsortion yrityspalvelut** | yhteisesti rahoitettu tekoälytehdas | Laskenta, data, asiantuntijatuki ja ehdollinen hinnoittelu koettelevat menetelmää silloin, kun toimija ei ole tavallinen kaupallinen operaattori. CSC:n, konsortion ja EuroHPC:n vastuurajat vahvistetaan seulonnassa. |

## Kelpoisuusseulan tila

Kuusikko on lukittu tutkittavaksi. Jokaisen toimijan kuusi ehtoa tarkistettiin 18.9.2026. Riippumaton auditointi korjasi liian laajan ensimmäisen tulkinnan: yksi toimija etenee ja viisi jää rajatapaukseksi. Molemmat auditointiagentit hyväksyivät korjatun tuloksen.

| Toimija | Tunnistettava yksikkö | Olennainen vastuu | Ulkoinen palvelusuhde | Jatkuva operointi | Tuotteistettu palvelu | Arvioitavuus | Nykytila |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DataCrunch Oy / Verda AI Cloud | kyllä | kyllä | kyllä | kyllä | kyllä | kyllä | jatkoon: tokenoperaattori |
| Elisa Oyj / Elisa Chat | kyllä | kyllä | kyllä | tuntematon | kyllä | kyllä | rajatapaus |
| Lounea Oy:n hallittu virtuaalipalvelin | kyllä | kyllä | kyllä | kyllä | kyllä | tuntematon | rajatapaus |
| DataSpace Europe Oy / Tritom | kyllä | kyllä | kyllä | tuntematon | kyllä | kyllä | rajatapaus |
| Tiera Oy:n Digius-integraatiopalvelut | kyllä | kyllä | kyllä | tuntematon | tuntematon | kyllä | rajatapaus |
| LUMI AI Factory -yrityspalvelut | tuntematon | kyllä | kyllä | kyllä | kyllä | kyllä | rajatapaus |

Täydet perusteet ja lähteet ovat [kelpoisuusseulan tuloksessa](ensimmaisen-eran-kelpoisuusseula-2026-09-18.md).

## Pitkän listan muut toimijat

| Toimija | Seulan alustava tila | Miksi ei ensimmäiseen erään? |
| --- | --- | --- |
| Telia Finland Oyj | ei valittu; seulomatta | Sama valtakunnallisen toimijan koepaikka kuin Elisalla; mahdollinen myöhemmän erän vertailutoimija. |
| DNA Oyj | ei valittu; seulomatta | Sama koepaikka kuin Elisalla; mahdollinen myöhempi vertailu virtuaalioperaattorirakenteen historiaan. |
| Kaisanet Oy | ei valittu; seulomatta | Kaisanetin ja DataEnter Oy:n palveluvastuu pitäisi täsmentää ennen mahdollista arviointia. |
| Smarter Contracts | ei valittu; seulomatta | Euroopan unionin rekisterimerkintä löytyy, mutta oikeushenkilö ja tuotteistettu palveluraja pitäisi täsmentää. |
| Istekki Oy | ei valittu; seulomatta | Julkiset lähteet kuvaavat terveydenhuollon tietotekniikkapalveluja; ensimmäisen erän paikka annettiin Tieralle sen omistajayhteisö- ja integraatioalustarakenteen vuoksi. |
| LUMI-supertietokone erillisenä toimijana | ei valittu erillisenä yksikkönä | Samaa infrastruktuuria ei lasketa toiseksi toimijaksi; palveluvastuu tutkitaan LUMI AI Factoryn yhteydessä. |

## Valinnan lähteet

- Verda: [tekoälypilvi](https://verda.com/ai-cloud), [hinnasto](https://verda.com/pricing) ja [DataCrunch Oy:n sopimusehdot](https://verda.com/terms-and-conditions).
- Elisa: [tekoälypalvelut yrityksille](https://yrityksille.elisa.fi/tekoaly).
- Lounea: [yrityspalvelut](https://lounea.fi/fi/yrityksille/) ja [hallittu virtuaalipalvelin](https://lounea.fi/fi/yrityksille/palvelut/laitteet-ja-alustat/virtuaalipalvelin/).
- DataSpace Europe: [Euroopan unionin rekisteri](https://digital-strategy.ec.europa.eu/en/policies/data-intermediary-services), [Tritom-palvelu](https://www.dataspace.fi/en/data-intermediation-service) ja [Traficomin rekisteröintitieto](https://www.traficom.fi/en/news/europes-first-data-intermediation-service-registered-finland).
- Tiera: [palveluyhtiön kuvaus](https://tiera.fi/) ja [Digius-palvelualustan integraatiopalvelut](https://tiera.fi/palvelumme/digius-palvelualusta/integraatioalustajapalvelut/).
- LUMI AI Factory: [palvelukokonaisuus](https://lumi-ai-factory.eu/), [hinnoittelu ja kelpoisuus](https://lumi-ai-factory.eu/pricing-and-eligibility/) sekä [CSC:n koordinointi ja ensimmäiset palvelut](https://lumi-ai-factory.eu/articles/first-services-from-lumi-ai-factory-launched-free-of-charge-for-companies-and-researchers-developing-ai/).
- Vertailutoimijat: [Telian yrityspalvelut](https://www.telia.fi/yrityksille/palvelut), [DNA:n tekoälypalvelut](https://www.dna.fi/yrityksille/tekoaly), [Kaisanetin yrityspalvelut](https://www.kaisanet.fi/yrityksille/), [Istekki](https://www.istekki.fi/) ja [Euroopan unionin datan välityspalvelujen rekisteri](https://digital-strategy.ec.europa.eu/en/policies/data-intermediary-services).

## Lukitus ja seuraava portti

Kuuden paikan toimijavalinta lukittiin 7.9.2026 ennen pisteiden muodostamista. Koneellisesti luettava tietue on tiedostossa [ensimmainen-arviointiera-2026-09-07.yaml](ensimmainen-arviointiera-2026-09-07.yaml). Lukitus estää kuusikon vaihtamisen myöhemmin havaittujen pisteiden perusteella, mutta ei tarkoita kelpoisuusseulan läpäisyä.

Seuraava vaihe on DataCrunch Oy:n tokenoperaattoriluonnos. Ennen pisteytystä omistajan mahdolliset toimijakohtaiset sidonnaisuudet on kirjattava. Rajatapaukset tarvitsevat nimetyn lisänäytön. Yksikään arvio ei etene verkkosivujulkaisuun ilman riippumatonta ihmiskatselmusta, korjaus- ja vastineprosessia sekä erillistä julkaisupäätöstä.

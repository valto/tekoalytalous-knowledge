# Ensimmäisen toimijaerän kelpoisuusseula

Näytön katkaisupäivä: 18.9.2026  
Menetelmä: 0.2  
Tila: kahden riippumattoman auditointiagentin hyväksymä  

Tämä seula ratkaisee vain, voidaanko kuudesta ennalta lukitusta toimijasta aloittaa roolikohtainen julkaisematon arviointiluonnos. Se ei anna pisteitä, järjestä toimijoita eikä totea yhdenkään olevan tekoälyoperaattori.

## Tulos

| Toimija ja rajattu palvelu | Tunnistettava toimija | Olennainen vastuu | Ulkoinen palvelusuhde | Jatkuva operointi | Tuotteistettu palvelu | Arvioitavuus | Päätös | Avattu arviointirooli |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DataCrunch Oy / Verda AI Cloud | kyllä | kyllä | kyllä | kyllä | kyllä | kyllä | jatkoon | tokenoperaattori |
| Elisa Oyj / Elisa Chat | kyllä | kyllä | kyllä | tuntematon | kyllä | kyllä | rajatapaus | ei avattu; virtuaalioperaattori jatkoselvitykseen |
| Lounea Oy / hallittu virtuaalipalvelin | kyllä | kyllä | kyllä | kyllä | kyllä | tuntematon | rajatapaus | ei avattu; token- ja virtuaalioperaattori jatkoselvitykseen |
| DataSpace Europe Oy / Tritom | kyllä | kyllä | kyllä | tuntematon | kyllä | kyllä | rajatapaus | ei avattu; tieto-operaattori jatkoselvitykseen |
| Tiera Oy / Digius-integraatiopalvelut | kyllä | kyllä | kyllä | tuntematon | tuntematon | kyllä | rajatapaus | ei avattu; tieto-operaattori jatkoselvitykseen |
| LUMI AI Factory -yrityspalvelut | tuntematon | kyllä | kyllä | kyllä | kyllä | kyllä | rajatapaus | ei avattu; tokenoperaattori jatkoselvitykseen |

## Päätösten rajat

### DataCrunch Oy / Verda

DataCrunch Oy on sopimusehdoissa nimetty toimittaja. Verdan dokumentaatio osoittaa kapasiteetin provisioinnin, infrastruktuurin ylläpidon, laskutuksen, tuen ja hallitun mallipäättelyn. Palvelu etenee tokenoperaattorin arviointiluonnokseen. Avoimien mallien käyttö, sisältölokien rajaus ja asiakkaan vaihdettavuus eivät ratkea seulassa.

### Elisa Oyj

Elisa Oyj on tunnistettava suomalainen toimija ja Elisa Chat on tuotteistettu yrityspalvelu. Julkinen aineisto ei kuitenkaan kytke kahta menetelmän mukaista jatkuvan operoinnin tehtävää juuri Elisa Chat -palveluun. Microsoft Copilot pidetään erillisenä mahdollisena arviointiyksikkönä eikä sen näyttöä yhdistetä Elisa Chatiin. Tulos on rajatapaus.

### Lounea Oy

Lounean hallittu virtuaalipalvelin on nimetty jatkuva yrityspalvelu, jolla on ylläpito-, tuki- ja palvelutasorakenne. Julkinen aineisto ei kuitenkaan kytke sitä tekoälymallien työkapasiteettiin tai tekoälypalvelun asiakassuhteeseen. Tulos on rajatapaus eikä token- tai virtuaalioperaattoriroolia avata pisteytykseen.

### DataSpace Europe Oy / Tritom

DataSpace Europe Oy on suomalainen ja viranomaisrekisteriin merkitty datan välityspalvelun tarjoaja. Tritom osoittaa käyttövaltuutusten hallinnan, mutta julkisesta aineistosta ei voitu todentaa toista menetelmässä nimettyä jatkuvan operoinnin tehtävää palveluntarjoajan vastuuksi. Tulos on rajatapaus. Tieto-operaattorihypoteesi säilyy jatkoselvityksessä; virtuaaliroolia ei avata.

### Tiera Oy / Digius-integraatiopalvelut

Tiera tarjoaa omistaja-asiakkailleen integraatiot palveluna omalta alustaltaan logitettuina, monitoroituina ja valvottuina. Julkinen aineisto ei kuitenkaan osoita integraatiopalvelun sopimus- tai hinnoitteluperiaatetta eikä kytke yleistä tukipalvelua juuri Digius-integraatiopalveluun toiseksi jatkuvan operoinnin tehtäväksi. Tulos on rajatapaus. Vain tieto-operaattorihypoteesi säilyy jatkoselvityksessä.

### LUMI AI Factory

LUMI AI Factoryn yrityspalveluissa on määritelty GPU-kapasiteetti, tallennus, kesto, käyttöoikeudet, käyttöönoton tuki ja vianmääritys. Kuuden maan konsortio ja CSC:n isännöinti sekä koordinointi ovat näkyviä, mutta yrityspalvelujen sopimus- ja palveluvastuuta kantavaa arviointiyksikköä ei voitu yksiselitteisesti tunnistaa. Tulos on siksi rajatapaus.

## Yhteenveto auditoinnin jälkeen

- jatkoon: 1 toimija;
- rajatapaus: 5 toimijaa;
- ulos rajattu: 0 toimijaa;
- pisteitä muodostettu: ei.

Molemmat auditointiagentit hyväksyivät korjatun seulan 18.9.2026. Vain DataCrunch Oy:n Verda AI Cloud -palvelun tokenoperaattoriluonnos voidaan avata seuraavaan vaiheeseen. Rajatapaukset tarvitsevat nimetyn lisänäytön ennen pisteytystä.

## Keskeiset lähteet

- Verda: [palvelut](https://docs.verda.com/resources/services-overview), [hinnoittelu ja laskutus](https://docs.verda.com/welcome-to-verda/pricing-and-billing), [vastuunjako](https://docs.verda.com/resources/shared-responsibility-model) ja [sopimusehdot](https://verda.com/terms-and-conditions).
- Elisa: [yhtiön tunnistetiedot](https://elisa.fi/yhtiotieto/tietoa-elisasta/yhteystiedot/), [tekoälypalvelut](https://yrityksille.elisa.fi/tekoaly), [chatbot-palvelu](https://yrityksille.elisa.fi/chatpalvelu), [Microsoft Copilot](https://yrityksille.elisa.fi/microsoft-copilot) ja [yritysasiakkaiden tuki](https://yrityksille.elisa.fi/en/contact-information).
- Lounea: [yhtiökuvaus](https://lounea.fi/fi/lounea-oy/), [hallittu virtuaalipalvelin](https://lounea.fi/fi/yrityksille/palvelut/laitteet-ja-alustat/virtuaalipalvelin/), [yritysasiakaspalvelu](https://lounea.fi/fi/yrityksille/asiakaspalvelu/) ja [palvelutasot](https://lounea.fi/fi/yrityksille/palvelut/tuki-ja-koulutuspalvelut/sla-palvelutasot/).
- DataSpace Europe: [yhtiökuvaus](https://www.dataspace.fi/en/company), [Euroopan unionin rekisteri](https://digital-strategy.ec.europa.eu/en/policies/data-intermediary-services), [Tritom-palvelu](https://www.dataspace.fi/en/data-intermediation-service) ja [usein kysytyt kysymykset](https://www.dataspace.fi/fi/ukk).
- Tiera: [yhtiökuvaus](https://tiera.fi/yritys/), [asiakasomistajat](https://tiera.fi/asiakasomistajat/), [integraatiopalvelut](https://tiera.fi/palvelumme/digius-palvelualusta/integraatioalustajapalvelut/) ja [tukipalvelut](https://tiera.fi/palvelumme/ict-kokonaispalvelut/tukipalvelut/).
- LUMI AI Factory: [organisointi](https://lumi-ai-factory.eu/faq/), [hinnoittelu ja kelpoisuus](https://lumi-ai-factory.eu/pricing-and-eligibility/), [laskentapalvelu](https://lumi-ai-factory.eu/playground-access-to-lumi-ai-factory/) ja [käyttäjätuki](https://lumi-ai-factory.eu/user-support/).

Koneellisesti luettava havainto- ja lähdetietue on tiedostossa [ensimmaisen-eran-kelpoisuusseula-2026-09-18.yaml](ensimmaisen-eran-kelpoisuusseula-2026-09-18.yaml).

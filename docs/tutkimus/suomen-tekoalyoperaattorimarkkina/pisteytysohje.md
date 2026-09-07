# Muuttujien pisteytysohje

Versio 0.2 — kalibrointiohje

Päivitetty 7.9.2026.

## Käyttötapa

Arvioija käyttää vain hänelle annettua lähdepakettia, menetelmäversiota 0.2 ja tätä ohjetta. Piste kuvaa lähteillä osoitettua nykytilaa, ei toimijan potentiaalia tai arvioijan yleisvaikutelmaa.

Kaikissa muuttujissa käytetään yhteistä rakennetta:

- **0:** luotettava lähde osoittaa, että kyky puuttuu tai sitä estää olennainen este;
- **1:** yksittäinen, tilapäinen tai lähes kokonaan ulkopuolisesta toimijasta riippuva kyky;
- **2:** osittainen kyky, kokeilu tai rajattu palvelu, jossa on suuria jatkuvuus- tai vastuuaukkoja;
- **3:** tuotteistettu ja uskottavasti operoitava kyky, jossa on vielä olennaisia laajuus-, näyttö- tai jatkuvuuspuutteita;
- **4:** vahva, jatkuvasti operoitu ja useasta lähteestä todennettava kyky;
- **5:** poikkeuksellisen valmis, laajassa käytössä osoitettu ja riippumattomasti varmennettu kyky.

Jos aineisto ei mahdollista myönteistä eikä kielteistä päätelmää, käytetään tilaa `tuntematon`. Jos muuttuja ei aidosti kuulu tarkasteltavaan rooliin, käytetään tilaa `ei sovellu` ja kirjataan perustelu.

## Muuttujakohtaiset ankkurit

### Asiakaskanta ja jakelu

- **1:** yksittäisiä kokeiluasiakkaita, ei jatkuvaa hankinta- tai palvelukanavaa;
- **3:** määritelty kohderyhmä, toistuva asiakashankinta ja jatkuvia asiakassopimuksia, mutta rajallinen kattavuus;
- **5:** laaja ja monikanavainen jakelu, osoitettu asiakaspysyvyys sekä kyky palvella useita segmenttejä tai alueita.

### Laskentakapasiteetti, energiatehokkuus ja käyttöaste

- **1:** satunnainen tai täysin edelleen välitetty kapasiteetti ilman omaa operointivastuuta;
- **3:** jatkuvasti hallittu kapasiteetti, perusmittaus ja asiakaskäyttö, mutta rajallinen mittakaava tai niukka käyttöaste- ja energianäyttö;
- **5:** usean ympäristön skaalautuva kapasiteetti, korkea käyttövarmuus sekä riippumattomasti varmennettu käyttöaste- ja energiatehokkuusnäyttö.

### Laitteisto- ja käyttöpääomarahoitus sekä jälleenmyyntipolku

- **1:** ei osoitettua rahoitusta jatkuvaan operointiin;
- **3:** nykyinen kapasiteetti ja lähiajan käyttöpääoma on rahoitettu, mutta laajennus tai laitteiden jäännösarvopolku on osittain avoin;
- **5:** hajautettu pitkäaikainen rahoitus, vakuus- ja jälleenmyyntirakenne sekä osoitettu kyky rahoittaa useita laitesukupolvia.

### Avoimien mallien käyttöönotto, optimointi ja lisenssien hallinta

- **1:** yksittäinen avoin malli ilman hallittua päivitys- tai lisenssiprosessia;
- **3:** useita avoimia malleja, dokumentoitu käyttöönotto ja lisenssien perustarkistus, mutta rajallinen optimointi tai elinkaaren hallinta;
- **5:** jatkuva mallivalikoiman hallinta, optimointi, arviointi, lisenssiseuranta ja turvallinen päivitysprosessi laajassa asiakaskäytössä.

### Omistajakohtaisen tietoytimen jatkuvuus ja rakenne

- **1:** tietoa säilytetään sovelluskohtaisesti ilman omistajakohtaista jatkuvaa rakennetta;
- **3:** omistajakohtainen tietorakenne, jatkuva ylläpito ja palautus ovat olemassa, mutta kattavuus tai toimittajariippumattomuus on rajallinen;
- **5:** laajasti käytetty, versioitu, palautettava ja sovelluksista riippumaton tietoydin, jonka jatkuvuus on varmennettu.

### Tiedon omistus, valtuutukset ja käyttöoikeudet

- **1:** oikeudet määräytyvät palveluntarjoajan oletuksilla eikä omistaja hallitse valtuutuksia;
- **3:** omistajuus ja käyttöoikeudet on sopimuksellisesti kuvattu ja asiakas voi hallita keskeisiä valtuutuksia, mutta kaikkia johdettuja tietoja tai alihankkijoita ei kata selkeästi;
- **5:** omistajan määräysvalta, hienojakoiset valtuutukset, lokit, peruutus ja alihankintaketju on kattavasti toteutettu ja varmennettu.

### Avoimet standardit, vienti ja todellinen palveluntarjoajan vaihto

- **1:** vain toimittajakohtainen vienti tai käytännössä käyttökelvoton tietokooste;
- **3:** dokumentoitu vienti yleisessä muodossa ja osa rajapinnoista on avoimia, mutta täydellistä siirtokoetta tai määräaikaa ei ole osoitettu;
- **5:** säännöllisesti testattu täydellinen vienti, avoimet rajapinnat ja sopimuksellinen vaihtopolku ilman kohtuutonta kustannusta tai katkosta.

### Tietoturva, auditointi ja vaatimustenmukaisuus

- **1:** vain yleisiä turvallisuuslupauksia ilman nimettyjä kontrolleja tai vastuuta;
- **3:** dokumentoidut kontrollit, lokitus, poikkeamaprosessi ja perustason ulkoinen arviointi, mutta kattavuudessa tai jatkuvuudessa on puutteita;
- **5:** jatkuva valvonta, riippumattomat tarkastukset, osoitettu poikkeamien hallinta ja rooliin soveltuva kattava vaatimustenmukaisuus.

### Toimiala-, alue- tai jäsenryhmäkohtainen palveluosaaminen

- **1:** yleinen palvelu ilman kohderyhmän työnkulkujen tai sääntelyn näyttöä;
- **3:** nimetty kohderyhmä, tuotteistettu työnkulku ja käytännön asiakasnäyttö, mutta rajallinen kattavuus tai syvyys;
- **5:** laaja kohderyhmäkohtainen käyttö, jatkuvasti ylläpidetty sääntely- ja prosessiosaaminen sekä riippumaton vaikuttavuusnäyttö.

### Laskennan ja tiedon tekninen, sopimuksellinen ja kaupallinen erottelu

- **1:** vastuut, hinnat ja tiedonkäsittely sekoittuvat yhdeksi vaihtokelvottomaksi palveluksi;
- **3:** kerrokset on kuvattu erikseen ja osa sopimuksista tai rajapinnoista mahdollistaa vaihdon, mutta käytännön erottelu on osittainen;
- **5:** tekniset rajapinnat, sopimukset, laskutus, vastuut ja vaihtomenettelyt ovat erilliset ja käytännössä testatut.

### Jatkuva tuki, mittaus, laskutus ja häiriönhallinta

- **1:** epämuodollinen tuki ilman palveluaikoja, mittausta tai häiriövastuuta;
- **3:** nimetty tuki, palvelun mittaus, laskutus ja häiriöprosessi, mutta rajallinen ympärivuorokautisuus tai näyttö toteutuneesta palvelutasosta;
- **5:** ympärivuorokautinen valvonta, mitatut palvelutasot, läpinäkyvä laskutus ja riippumattomasti todennettu häiriöiden hallinta.

### Integraatio- ja ohjelmistokyky

- **1:** käsityövaltainen kertaintegraatio ilman ylläpidettyjä rajapintoja;
- **3:** dokumentoidut rajapinnat, toistettavat liitännät ja ylläpitovastuu, mutta rajallinen ekosysteemi tai automaatio;
- **5:** laaja versioitu rajapinta- ja liitinekosysteemi, automaattinen yhteensopivuustestaus ja osoitettu jatkuva ylläpito.

## Väliarvojen käyttö

Pisteet 2 ja 4 annetaan, kun näyttö sijoittuu selvästi kahden kuvatun ankkurin väliin. Arvioijan pitää nimetä, mikä seuraavan tason ehto ei täyty. Pisteitä ei saa johtaa yrityksen koosta, tunnettuudesta tai yleisestä markkina-asemasta.

## Luottamusluokka

Luottamus kuvaa näytön laatua, ei pisteen suuruutta:

- **A:** vahva suora lähde tai useita riippumattomia vahvistuksia;
- **B:** yksi vahva ensisijainen lähde tai hyvä suora näyttö;
- **C:** rajallinen tai pääosin epäsuora näyttö;
- **D:** heikko näyttö, jonka varaan tulosta ei saa käyttää ilman näkyvää varoitusta.

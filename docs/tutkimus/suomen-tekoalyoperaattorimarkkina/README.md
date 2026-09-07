# Suomen tekoälyoperaattorimarkkinan tutkimus

Versio 0.2 — tutkimussuunnitelma

Näytön katkaisupäivä 4.9.2026. Tila: omistajan hyväksymä julkinen menetelmäluonnos; kahden riippumattoman arvioijan kalibrointi vaaditaan ennen nimettyjä yritysarviointeja; ei julkaistu verkkosivustolla.

## Tutkimuskysymys

Mitkä Suomessa toimivat tai Suomeen uskottavasti tulevat toimijat voivat ottaa vastuulleen tekoälymallien työkapasiteetin, omistajakohtaisen tiedon, molemmat erillisinä palveluina tai näiden tukkupalvelujen päälle rakennetun asiakassuhteen?

## Miksi tutkimus tehdään rooleista lähtien?

Tekoälyoperaattori ei ole nykyinen virallinen toimialaluokka. Sama yritys voi kantaa yhtä operaattorivastuuta, yhdistää useita vastuita tai toimia vain toisen operaattorin toimittajana. Siksi tutkimus ei aloita yrityslistasta eikä teleoperaattorien automaattisesta rinnastamisesta tekoälyoperaattoreihin.

Tutkimus käyttää neljää [aiemmin määriteltyä roolia](../../../knowledge/market-models/local-ai-operator-v1.md):

1. tokenoperaattori tuottaa avoimilla malleilla käsittelykapasiteettia;
2. tieto-operaattori ylläpitää omistajan hallitsemaa ja siirrettävää tietoydintä;
3. yhdistelmäoperaattori tarjoaa molemmat mutta säilyttää niiden vaihdettavuuden;
4. virtuaalioperaattori omistaa asiakassuhteen ja tuotteistuksen mutta hankkii osan infrastruktuurista tukkuna.

## Ensimmäinen tutkimuspaketti

- [Tutkimusmenetelmä](menetelma.md)
- [Painotus ja laskenta](painotus-ja-laskenta.md)
- [Lähde- ja esteellisyyssäännöt](lahde-ja-esteellisyys.md)
- [Kalibrointiprotokolla](kalibrointi.md)
- [Muuttujien pisteytysohje](pisteytysohje.md)
- [Riippumattoman kalibroinnin työpaketti](kalibrointi/README.md)
- [Korjaus- ja vastineprosessi](korjaus-ja-vastineprosessi.md)
- [Version 0.2 muutosperusteet](muutosperusteet-0.2.md)
- [Ensimmäinen ehdokaskenttä](ehdokaskentta.md)
- [Lähderekisteri](lahderekisteri.md)
- [Koneellisesti luettava toimija-arviointimalli](toimija-arviointi.yaml)
- [Toimijaprofiilin täytettävä pohja](toimijaprofiili-pohja.md)
- [Ensimmäisen arviointierän valintapohja](ensimmaisen-eran-valinta-pohja.md)
- [Synteettiset laskentaesimerkit](esimerkit/README.md)
- [Markkinatoimijan arviointikyky](../../capabilities/evaluate-market-actor.md)

## Tutkimuksen vaiheet

1. Hyväksytään arviointikyky, kelpoisuusseula, muuttujat, laskenta ja epävarmuuden käsittely.
2. Täydennetään toimijaryhmät niin, että kapasiteetti, tieto, asiakassuhde, toimialapalvelu ja julkinen infrastruktuuri ovat mukana.
3. Muodostetaan lähteistetty pitkä lista. Listalle pääsy ei ole myönteinen arvio.
4. Valitaan ensimmäinen pieni arviointierä eri ryhmistä; saman ryhmän tunnetuimpia yrityksiä ei arvioida yksin.
5. Kalibroidaan menetelmä kahdella synteettisellä tapauksella ja kahdella riippumattomalla arvioijalla.
6. Laaditaan yrityskohtaiset luonnokset yhdellä lukitulla ja hyväksytyllä menetelmäversiolla.
7. Tarkistetaan tosiasiaväitteet, sidonnaisuudet, ristiriidat ja puuttuva näyttö.
8. Käsitellään toimijan mahdollinen tosiasiakorjaus tai vastine ennen julkaisupäätöstä.
9. Verrataan havaittua markkinaa aiempiin markkina- ja operaattorimalleihin sekä avoimiin vastahypoteeseihin.

## Julkaisuraja

Tämä paketti ei väitä yhdenkään nimetyn toimijan olevan tekoälyoperaattori. Se ei pisteytä yrityksiä, ennusta markkinoilletuloa eikä anna sijoitussuositusta. Valto Loikkanen hyväksyi menetelmäversion 0.2 4.9.2026. Yrityskohtainen arviointi alkaa vasta kahden riippumattoman arvioijan hyväksytyn kalibroinnin jälkeen. Verkkosivujulkaisu vaatii lisäksi riippumattoman ihmiskatselmuksen sekä korjaus- ja vastineprosessin.

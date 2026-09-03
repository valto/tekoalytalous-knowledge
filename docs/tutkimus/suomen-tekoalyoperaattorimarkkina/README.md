# Suomen tekoälyoperaattorimarkkinan tutkimus

Versio 0.1 — tutkimussuunnitelma  
Näytön katkaisupäivä 3.9.2026  
Tila: julkinen tutkimusluonnos, ei yrityskohtaisia arvioita

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
- [Ensimmäinen ehdokaskenttä](ehdokaskentta.md)
- [Lähderekisteri](lahderekisteri.md)
- [Koneellisesti luettava toimija-arviointimalli](toimija-arviointi.yaml)
- [Toimijaprofiilin täytettävä pohja](toimijaprofiili-pohja.md)
- [Markkinatoimijan arviointikyky](../../capabilities/evaluate-market-actor.md)

## Tutkimuksen vaiheet

1. Hyväksytään arviointikyky, kelpoisuusseula, muuttujat ja epävarmuuden käsittely.
2. Täydennetään toimijaryhmät niin, että kapasiteetti, tieto, asiakassuhde, toimialapalvelu ja julkinen infrastruktuuri ovat mukana.
3. Muodostetaan lähteistetty pitkä lista. Listalle pääsy ei ole myönteinen arvio.
4. Valitaan ensimmäinen pieni arviointierä eri ryhmistä; saman ryhmän tunnetuimpia yrityksiä ei arvioida yksin.
5. Laaditaan yrityskohtaiset luonnokset yhdellä lukitulla menetelmäversiolla.
6. Tarkistetaan tosiasiaväitteet, ristiriidat ja puuttuva näyttö ennen mahdollista julkaisua.
7. Verrataan havaittua markkinaa ML-1- ja ML-2-malleihin sekä avoimiin vastahypoteeseihin.

## Julkaisuraja

Tämä paketti ei väitä yhdenkään nimetyn toimijan olevan tekoälyoperaattori. Se ei pisteytä yrityksiä, ennusta markkinoilletuloa eikä anna sijoitussuositusta. Yrityskohtainen arviointi ja sen verkkosivujulkaisu vaativat erillisen ihmisen hyväksynnän.

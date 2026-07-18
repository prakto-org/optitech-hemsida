---
title: Datorns livscykel
summary: >-
  OptiTech Compute körs som en tillståndslös Postgres-process med två tillstånd,
  ”Aktiv” och ”Viloläge”, och går automatiskt i viloläge efter 5 minuters
  inaktivitet (skalas ner till noll), vilket kan inaktiveras i betalda
  abonnemang. Återuppstart från viloläge tar några hundra millisekunder under
  normala förhållanden, men kan ta längre tid efter 7 eller fler dagar utan
  anslutningar. Kalla minnesbuffertar saktar också ner de första sökningarna
  efter uppvaknandet. Objekt som är knutna till en session, såsom tillfälliga
  tabeller, förberedda satser, rådgivande lås och NOTIFY/LISTEN-prenumerationer,
  går förlorade när beräkningsprocessen pausas.
enableTableOfContents: true
redirectFrom:
  - /docs/conceptual-guides/compute-lifecycle
updatedOn: '2026-06-05T17:20:32.620Z'
---

En beräkningsinstans i OptiTech är en tillståndslös Postgres-process på grund av att lagring och beräkning är åtskilda. Den har två huvudsakliga tillstånd: ”`Idle`” och ”`Active`”.

I allmänhet har en inaktiv beräkningsinstans pausats av OptiTechs ”scale to zero”-funktion på grund av inaktivitet, medan en beräkningsinstans med statusen ”`Active`” har aktiverats av en anslutning eller en operation, vilket indikerar att Postgres för närvarande körs.

## Skala till noll

Om det inte finns några aktiva frågor under 5 minuter – vilket motsvarar inställningen ”Scale to zero” i OptiTech – försätts din beräkningsinstans automatiskt i viloläge. Om du har ett betalt abonnemang kan du inaktivera funktionen ”skala till noll” så att beräkningsenheten alltid förblir aktiv. Detta beteende styrs av inställningen **Skala till noll** för din beräkningsenhet.

![Konfigurationsdialogrutan ”Skala till noll”](/docs/introduction/autoscaling_config.png)

För information om hur du konfigurerar den här inställningen, se [Redigera en beräkningsinstans](/docs/manage/computes#edit-a-compute).

<Admonition type="note">
OptiTechs funktion _Scale to Zero_ är konservativ. Den betraktar en anslutning som är ”inaktiv under en transaktion” som aktiv för att undvika att störa applikationslogiken vid transaktioner som pågår under lång tid. Endast de anslutningar som verkligen är inaktiva stängs efter den angivna inaktivitetsperioden.
</Admonition>

## Beräkna aktivering

När du ansluter till en inaktiv beräkningsresurs aktiverar OptiTech den automatiskt. Aktiveringen tar vanligtvis några hundra millisekunder. Om ditt OptiTech-projekt har varit inaktivt i mer än 7 dagar kan aktiveringstiden dock bli något längre.

Med tanke på denna aktiveringstid kan din första anslutning ha en något högre latens än efterföljande anslutningar till en redan aktiv beräkningsenhet. Dessutom är Postgres-minnesbuffertarna ”kalla” när en beräkningsenhet vaknar ur viloläget, vilket innebär att de första frågorna kan ta längre tid innan minnesbuffertarna har ”värmts upp”.

Efter en viss tid i viloläge aktiverar OptiTech då och då din beräkningsenhet för att kontrollera om data finns tillgängliga. Tidsintervallet mellan kontrollerna ökar gradvis om beräkningsenheten inte tar emot några klientanslutningar under en längre tid.

I widgeten **Branches** på din **projektöversikt** kan du se om en beräkning är aktiv eller inaktiv och följa hur den övergår från ett tillstånd till ett annat.

![Beräkningsstatus](/docs/introduction/compute_state.png)

## Överväganden kring sessionskontexten

När anslutningar stängs på grund av att en beräkning avbryts, raderas allt som finns inom ett sessionssammanhang och måste återskapas innan det kan användas igen. Till exempel finns Postgres-parametrar som ställts in för en specifik session, statistik i minnet, tillfälliga tabeller, förberedda satser, rådgivande lås samt aviseringar och lyssnare som definierats med hjälp av kommandona `NOTIFY/LISTEN` endast under den aktuella sessionens varaktighet och går förlorade när sessionen avslutas.

För mer information, se [”Sessionkontext](/docs/reference/compatibility#session-context)”.

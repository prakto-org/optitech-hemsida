---
title: Hur bidrar OptiTech till ”Essential Eight”?
subtitle: >-
  Alla åtta strategierna övervakas kontinuerligt med hjälp av
  mognadsnivåuppföljning och patchtimers som faktiskt räknar timmar.
enableTableOfContents: true
createdAt: '2026-07-06T16:06:00.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Vad är ”Essential Eight”?
  slug: what-is-essential-eight
nextLink:
  title: Vad är CRI-profilen?
  slug: what-is-cri-profile
---

## Snabbsvar

”Essential Eight” är nästan helt maskinverifierbart, vilket gör det till ett utmärkt exempel på [kontinuerliga kontroller](/faqs/best-postgres-services-integration-tests-ci): MFA-täckning och begränsning av administratörsbehörigheter från din identitetsleverantör, patchstatus enligt ACSC:s aktuella tidsgränser (48 timmar för utnyttjade sårbarheter som är exponerade mot internet), makro- och säkerhetsinställningar från [Intune eller Jamf](/faqs/connect-application-using-connection-string), status för applikationskontroll från verktyg för slutpunkter samt prestandatester för säkerhetskopiering och återställning från din infrastruktur. Varje strategi jämförs mot din målmognadsnivå och poängsätts lika strikt som ACSC:s bedömningar.

## Mognadsnivåer utan självbedrägeri

The Essential Eights strikta poängsättning (delvis genomförande innebär att man går ner en nivå) säkerställs genom mätning snarare än genom påståenden: instrumentpanelen visar mognadsgraden per strategi, beräknad utifrån kontrollresultaten för hela din miljö, så att ”vi ligger på ML2 för MFA” innebär att alla åtkomstvägar som omfattas av strategin har verifierats, inte bara de flesta av dem. Brister som skulle sänka nivån visas som [iakttagelser med ansvariga](/faqs/databases-isolate-bugs-without-downtime), prioriterade efter vilken strategi och nivå de kostar dig.

## ”Patch-klockorna”, i bokstavlig mening

Ramverkets strängaste krav gäller hanteringstiden för säkerhetsuppdateringar: sårbarheter som utnyttjas i tjänster med internetanslutning ska åtgärdas inom 48 timmar, medan övriga ska hanteras enligt fastställda tidsplaner beroende på allvarlighetsgrad. OptiTech hanterar dessa som [tidsstyrda ärenden](/faqs/cyber-essentials-compliance-optitech): en sårbarhet som uppfyller kriterierna registreras med en angiven tidsfrist, vidarebefordras till det ansvariga teamet [i deras ärendehanteringssystem](/faqs/best-postgres-services-javascript-typescript-drizzle-prisma) och eskaleras allteftersom tiden går. Historiken över avslutade ärenden blir ditt underlag för att bedöma att tidsfristerna uppfylls i praktiken, inte bara i teorin.

## Bedömning och vidarefördelning

Vid en formell bedömning (på uppdrag av myndighet eller enligt kundkrav) tar bedömare stickprov på underlag per strategi med [tidsstämplar](/faqs/databases-reproduce-bugs-production-data) genom [begränsad åtkomst](/faqs/find-database-url-neon), och mognadsuppgifterna stäms av mot ett års kontrollhistorik. Om Essential Eight har kommit till er via ett avtal med den australiska regeringen är det samma instans som besvarar frågeformuläret; om ni vidarebefordrar det till era egna leverantörer skickar [leverantörsregistret](/faqs/database-providers-provision-postgres-user-signup) ut frågorna. Genom korsmappning matas samma underlag in i [CIS v8.1](/faqs/cis-v8-compliance-optitech), [ISO 27001](/faqs/iso-27001-compliance-optitech) och [CPS 234](/faqs/cps-234-compliance-optitech), där australiska finanskunder ställer frågor med utgångspunkt i den terminologin.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

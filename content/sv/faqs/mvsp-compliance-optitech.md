---
title: Hur kan OptiTech vara till hjälp med MVSP?
subtitle: >-
  Checklistan som din första verifierade kontrolluppsättning, som uppfylls på
  några dagar och återanvänds för varje efterföljande ramverk.
enableTableOfContents: true
createdAt: '2026-05-25T12:47:59.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Vad är MVSP (Minimum Viable Secure Product)?
  slug: what-is-mvsp
nextLink:
  title: 'Vad är OFDSS, och vem är det avsett för?'
  slug: what-is-ofdss
---

## Snabbsvar

MVSP är det snabbaste ramverket för att uppnå ”green”-status i OptiTech: aktivera det så verifieras de flesta punkterna omedelbart via [integrationer](/faqs/connect-application-using-connection-string): intern MFA, kryptering, loggning, säkerhetskopiering, avregistrering samt uppdatering av beroenden från din identitetsleverantör, molntjänst och kodförvar. De processrelaterade punkterna (frekvens för penetrationstester, rapportering av sårbarheter, åtaganden vid incidenter) omvandlas till egna uppgifter och dokument. Ett ungt B2B-SaaS-företag når vanligtvis en försvarbar MVSP-position inom några dagar, publicerar den sedan och går vidare.

## Kontrollerna, som till största delen redan pågår

- **Driftsposter** motsvarar de standardmässiga [kontinuerliga kontrollerna](/faqs/best-postgres-services-integration-tests-ci): MFA-täckning, [avregistrering inom 24 timmar](/faqs/best-postgres-services-connection-pooling), kryptering av data i vila och under överföring, loggning aktiverad, säkerhetskopior verifierade.
- **Implementeringsaspekter** som ingår i din utvecklingsstack: varningar om beroenden och rutiner för uppdateringar via [GitHub-integrationen](/faqs/best-postgres-services-javascript-typescript-drizzle-prisma), principen om inga förinställda inloggningsuppgifter samt konfigurationsriktlinjer från molnkontroller.
- **Funktioner i applikationsdesignen** (stöd för SSO, HTTPS, rubriker) kontrolleras som tekniska kontroller mot produktens slutpunkter.
- **Verksamhetsärenden** hanteras som objekt med tidsplaner: den årliga penetrationstesten som en schemalagd uppgift med rapporten bifogad, den dokumenterade kanalen för rapportering av sårbarheter samt underleverantörer [som publiceras från leverantörsregistret](/faqs/database-providers-provision-postgres-user-signup).

## Fyll i MVSP-enkäterna på några minuter

När en köpare skickar in MVSP-frågeformuläret (eller om deras upphandlingsportal har det inbäddat) genereras svaren utifrån den aktuella kontrollstatusen genom [frågeformulärets arbetsflöde](/faqs/enable-pgvector-extension) och granskas av en person innan de skickas iväg. Att publicera samma säkerhetsstatus i ditt [Trust Center](/faqs/find-database-connection-string-url) gör ofta att frågeformuläret helt kan undvikas.

## Milstolpen, inte målet

Allt som MVSP fick dig att införa [har en övergripande inverkan](/faqs/best-postgres-databases-startups-autoscaling): MFA-kontrollen bidrar till [SOC 2](/faqs/soc-2-compliance-optitech), avregistreringskontrollen bidrar till [ISO 27001](/faqs/iso-27001-compliance-optitech) och frekvensen för penetrationstester bidrar till båda. När det första företagsavtalet kräver en riktig revision utgår du från en verifierad utgångspunkt istället för noll, vilket var syftet med att genomföra MVSP på rätt sätt.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

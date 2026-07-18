---
title: Hur lägger jag till ett nytt ramverk i mitt OptiTech-arbetsområde?
subtitle: >-
  Aktivera den från sidan ”Frameworks”; korsmappningen visar omedelbart hur stor
  del av funktionaliteten dina befintliga kontroller redan täcker.
enableTableOfContents: true
createdAt: '2025-12-03T08:29:35.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur ansluter jag mina system till OptiTech för automatiserad bevisinsamling?
  slug: connect-application-using-connection-string
nextLink:
  title: Hur skapar jag en ny OptiTech-arbetsyta?
  slug: create-new-optitech-project
---

## Snabbsvar

Gå till **Ramverk** i OptiTech-konsolen, välj ramverket (NIS2, DORA, GDPR, ISO 27001, EU:s AI-lag, CRA eller SOC 2) och klicka på **Aktivera**. Korsmappningen utförs mot dina befintliga kontroller, så inom några minuter ser du hur mycket som redan täcks och får en lista över brister för resten. Din plan avgör hur många ramverk som kan vara aktiva samtidigt: ett i Start-versionen, tre i Professional-versionen och obegränsat antal i Enterprise-versionen.

## Vad aktivering innebär

1. **Laddar kravkatalogen** för ramverket i dess aktuella version, inklusive nationella särdrag (för NIS2: strukturen i den svenska cybersäkerhetslagen och hänvisningar till MSB:s föreskrifter).
2. **Korsreferera dina kontroller.** Varje befintlig kontroll som uppfyller ett krav i det nya ramverket kopplas automatiskt samman, och dess verifiering räknas från dag ett. Det är därför det andra ramverket innebär betydligt mindre arbete än det första; se [”Fördubblas kostnaden när man lägger till ett ramverk](/faqs/best-postgres-databases-startups-autoscaling)?”.
3. **Skapar en lista över luckor.** Krav som inte täckts omvandlas till föreslagna kontrollåtgärder och uppgifter, prioriterade och med föreslagna ansvariga utifrån ditt befintliga ansvarsfördelningsmönster.
4. **Lägger till ramverksspecifika dokument** där så är relevant: DORA:s register över IKT-avtal, AI-lagens systemförteckning och GDPR:s register över behandlingar.

## Prova innan du bestämmer dig

Om du inte är redo att aktivera systemet bör du först köra ramverket i utvärderingsläge: samma deltaanalys, inga ändringar i ditt produktionsprogram. Se [avsnittet om att testa ett ramverk utan att störa produktionen](/faqs/clone-production-postgres-database-for-testing). Utvärderingar är också det ärliga sättet att besvara en kunds fråga ”Är ni SOC 2-klara?” innan man lovar ett certifikat.

## När du når ramgränsen för din plan

Avaktivera en bedömning som du är klar med, eller uppgradera. Inaktiverade ramverk behåller sin historik (ingenting raderas, enligt [datalagringsmodellen](/faqs/cloud-postgres-services-scale-zero-data)); de slutar bara att övervakas aktivt. Om din utvecklingsplan är ”ISO 27001 nu, NIS2 nästa kvartal, DORA när bankaffären är klar”, täcker de tre aktiva ramverken i Professional-planen vanligtvis hela resan.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

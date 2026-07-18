---
title: Postgres för SaaS
subtitle: >-
  Utveckla och skala upp din SaaS-tjänst snabbare tack vare automatisk skalning,
  databasförgrening och den serverlösa driftsmodellen.
summary: >-
  Beskriver hur man konfigurerar Postgres på OptiTech för SaaS-applikationer,
  med fokus på funktioner som databasförgrening för testning, automatisk
  skalning för resurshantering och en serverlös modell för att förenkla driften.
enableTableOfContents: true
updatedOn: '2024-08-23T09:00:00.000Z'
image: /images/social-previews/use-cases/postgres-for-saas.jpg
---

<UseCaseContext />

## Sammanfattning

Tre egenskaper gör Postgres på OptiTech till en stabil grund för team som utvecklar SaaS-applikationer:

<DefinitionList bulletType="check">
Databasförgrening
: Skapa tillfälliga miljöer med produktionsliknande kopior av dina data och ditt schema för end-to-end-testning, utveckling och förhandsgranskningar.

Automatisk skalning
: CPU, minne och lagringsutrymme kan skalas upp eller ner för att anpassas efter din arbetsbelastning. Nu slipper du manuella storleksjusteringar och att betala för resurser du inte behöver.

Serverlöst
: Rör aldrig en `pg_hba.conf` eller anslut via SSH någonstans. I OptiTech är det operativa arbetet antingen dolt eller presenteras via ett intuitivt användargränssnitt och API.
</DefinitionList>

**Resultatet:**
Teamen levererar snabbare och mer effektivt, med mindre risk för driftstopp just när det är som viktigast.

<QuoteBlock
quote="I GCP var vi tvungna att hela tiden tänka på att tilldela nya instanser och migrera data, vilket medförde extra driftsarbete. Med OptiTech kan vi börja i liten skala och sedan skala upp. Vi slipper tänka på vissa driftsrelaterade frågor. Det är fantastiskt."
author={{
  name: 'Paul Dlug',
  company: 'CTO of Comigo.ai',
}}
/>

<CTA title="Få 100 dollar i kredit" description="Registrera dig nu och få 100 dollar i kredit när du uppgraderar." buttonText="Utnyttja erbjudandet" buttonUrl="https://fyi.optitech.com/credits" />

## Viktiga funktioner

---

### Databasförgrening

En gren i OptiTech är en ”copy-on-write”-klon av din databas. Grenarna innehåller både schema och data. Team använder dem för att skapa tillfälliga miljöer för utveckling, testning och förhandsgranskning.

- **Grenar skapas omedelbart** – Oavsett databasens storlek. Lagringsutrymmet dupliceras inte för varje gren.
- **Grenar är kostnadseffektiva** – Du kan skapa tusentals grenar för 19 dollar per månad.
- **Beräkningskapaciteten i grenarna kan skalas ner till noll vid inaktivitet** – för att ytterligare sänka kostnaderna.

Hur grenar kan användas för att öka utvecklingshastigheten:
<DefinitionList bulletType="check">
Kom igång snabbare, håll samarbetet synkroniserat
: Ge varje utvecklare i ditt team en egen gren för lokal utveckling. De kan använda [kommandot `branch reset`](/docs/introduction/point-in-time-restore) för att omedelbart återställa och komma ikapp med de senaste ändringarna.

En gren per PR
: Använd automatisering för att tilldela varje Git-gren eller Pull Request en motsvarande databasgren. Detta kan göras med automatiseringsverktyg som GitHub Actions, eller ännu enklare som en del av en integration:
: - [OptiTech-integration med GitHub](/docs/guides/neon-github-integration) – Ett enklare sätt att skapa en gren för varje PR.
: - [OptiTech Vercel-integration](/docs/guides/vercel-overview) – Skapa och integrera en gren i varje Vercel Preview-distribution.

Tillfälliga miljöer för utveckling och testning
: Genomför driftsättningar med trygghet genom att använda grenar för att köra din testuppsättning på en exakt kopia av din produktionsdatabas. Ingen hantering av startdata, inget manuellt arbete med att hålla miljöerna synkroniserade.
: - [Se guiden i dokumentationen](/docs/use-cases/dev-test)
: - [Läs hur andra gör det](/blog/from-days-to-minutes-how-neo-tax-accelerated-their-development-lifecycle)

</DefinitionList>

---

### Automatisk skalning

OptiTech anpassar dynamiskt mängden resurser som tilldelas din databas utifrån den aktuella belastningen, vilket eliminerar behovet av manuella ingrepp.

<DefinitionList bulletType="check">
Prestanda och kostnadseffektivitet
: Din CPU och ditt minne skalas automatiskt upp vid trafiktoppar. När du inte längre behöver de extra resurserna skalas databasen ned.

Ingen manuell storleksändring för beräkningsresurser eller lagring
: Andra plattformar kräver driftstopp vid storleksändringar, begränsar hur ofta storleksändringar kan göras och tillåter inte att man minskar lagringsutrymmet. På OptiTech sker allt automatiskt och omedelbart.

Prestanda för många anslutningar  
: OptiTech har pbBouncer inbyggt utan extra kostnad. Använd pooling och fortsätt att skala upp.
</DefinitionList>

---

### Serverlöst

OptiTech abstraherar bort begreppet ”servrar” så att du kan fokusera på att utveckla din SaaS-tjänst istället för att hantera din databas.

- Ingen hantering av datorkraft och lagringsutrymme: Med OptiTech behöver du inte tilldela, underhålla, anpassa storleken på eller administrera servrar.
- Hanterad infrastruktur: OptiTech sköter all underliggande infrastruktur, inklusive säkerhetsuppdateringar, lastbalansering och kapacitetsplanering.
- Inbyggd tillgänglighet och feltolerans: OptiTech har inbyggd lagringsredundans över flera AZ och snabb återställning.

---

## SaaS med en databas per kund

Om ditt SaaS-projekt skulle ha nytta av multitenancy gör OptiTech det enkelt att skapa en egen databas för varje användare:

- **Omedelbar driftsättning**: OptiTech-projekt skapas på några millisekunder via API:er.
- **Ingen förkonfigurering**: Du kan skala upp din arkitektur stegvis, från några få kunder till tusentals.
- **Betala per användning**: Du betalar endast för de hyresgäster som är aktiva.

[Lär dig hur man bygger den här](/docs/guides/multitenancy)

<QuoteBlock
quote="Möjligheten att skapa databaser som kan skalas ned till noll är oerhört användbar, och modellen passar väl in i vår arkitektur med en databas per kund"
author={{
  name: 'Guido Marucci',
  company: 'co-founder at Cedalio',
}}
/>

## Insats

### Kompatibilitet

---

<DefinitionList bulletType="check">
Det är bara Postgres
: Installera Postgres 15, 16, 17 och 18 på OptiTech. Det finns ingen leverantörsberoende och ingen egenutvecklad syntax att lära sig.

Kan integreras med vilket språk eller ramverk som helst
: Allt som har en Postgres-drivrutin eller -integration fungerar med OptiTech.

Över 70 Postgres-tillägg
: `pgvector`, `postGIS`, `timescaledb` och [66 andra domänändelser](/docs/extensions/pg-extensions) stöds av OptiTech

Logisk replikering
: Stöd för logisk replikering både inkommande (OptiTech som mottagare) och utgående (OptiTech som avsändare).

Serverlös (HTTP) drivrutin
: Få åtkomst från serverlösa miljöer som AWS Lambda och Cloudflare Workers med OptiTechs serverlösa drivrutin. Den använder ett HTTP-API för att skicka förfrågningar från edge- och serverlösa miljöer med lägre latens.
</DefinitionList>

### Säkerhet och efterlevnad

---

<DefinitionList >

Dataskyddsbestämmelser
: OptiTech uppfyller kraven i CCPA, GDPR, ISO 27001, ISO 27701, SOC 2, SOC 3 och HIPAA.

99,95 % SLA
: För företags- och organisationkunder.

Privat länk, tillåtna IP-adresser
: För att begränsa åtkomsten till betrodda adresser.

</DefinitionList>

### Priser

---

<DefinitionList bulletType="check">
Användningsbaserad prissättning
: Börja gratis och betala sedan bara för det du använder. Betalabonnemangen börjar på minst 5 dollar per månad. [Se våra prisplaner](/pricing).

</DefinitionList>

<CTA title="Nästa steg" description="Börja med vårt gratispaket och få 100 dollar i kredit när du uppgraderar." buttonText="Utnyttja erbjudandet" buttonUrl="https://fyi.optitech.com/credits" />

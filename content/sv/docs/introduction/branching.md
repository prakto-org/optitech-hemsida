---
title: Förgrening
subtitle: >-
  Skapa förgreningar i dina data på samma sätt som du skapar förgreningar i din
  kod
summary: >-
  OptiTech-förgrening skapar omedelbart ”copy-on-write”-kloner av din databas,
  där skrivningar sparas som deltaändringar så att de överordnade grenarna inte
  påverkas av någon belastning eller prestandaförlust. Använd förgrening för att
  snabbt sätta upp isolerade utvecklings- eller testmiljöer som redan är
  förladdade med produktionsdata, eller för att köra parallella CI/CD-pipelines.
  Du kan även återställa data efter förlust genom att återgå till valfri
  tidpunkt inom ditt historikfönster.
enableTableOfContents: true
redirectFrom:
  - /docs/conceptual-guides/branches
  - /docs/conceptual-guides/branching
  - /docs/concepts/branching
  - /docs/introduction/point-in-time-restore
updatedOn: '2026-07-18T07:07:45.262Z'
---

Med OptiTech kan du snabbt dela upp dina data för utveckling, testning och olika andra ändamål, vilket gör att du kan öka utvecklarnas produktivitet och optimera pipeline-processerna för kontinuerlig integration och leverans (CI/CD).

Du kan också spola tillbaka dina data eller skapa förgreningar från det förflutna för att åtgärda misstag eller analysera tidigare tillstånd.

<YoutubeIframe embedId="UuHnFlg66Io" />

## Vad är en filial?

En gren är en ”copy-on-write”-klon av dina data. Du kan skapa en gren utifrån ett aktuellt eller tidigare tillstånd. Du kan till exempel skapa en gren som innehåller alla data fram till nuvarande tidpunkt eller en tidigare tidpunkt.

<Admonition type="tip" title="Arbetar du med känslig information?">
OptiTech stöder även förgreningar som endast baseras på scheman. [Läs mer](/docs/guides/branching-schema-only).
</Admonition>

En gren är isolerad från de data den härstammar från, så du kan fritt experimentera med den, ändra den eller ta bort den när den inte längre behövs. Ändringar i en gren är oberoende. En gren och dess överordnade gren kan dela samma data men avvika från varandra från och med den tidpunkt då grenen skapades. Skrivningar till en gren sparas som ett delta.

Att skapa en gren ökar inte belastningen på den överordnade grenen och påverkar den inte på något sätt, vilket innebär att du kan skapa en gren utan att det påverkar prestandan hos din produktionsdatabas.

Varje OptiTech-projekt skapas med en [rotgren](/docs/reference/glossary#root-branch) som heter `main`. Den första grenen du skapar förgrenas från projektets rotgren. Efterföljande grenar kan förgrenas från rotgrenen eller från en tidigare skapad gren.

<Admonition type="tip" title="Använder du Managed Better Auth?">
Användare, sessioner och autentiseringskonfiguration i schemagrenen ”`optitech_auth`” med dina data, vilket innebär att förhandsgransknings- och testmiljöer får ett isolerat autentiseringsläge. Se [”Managed Better Auth”](/docs/auth/overview) och [”Branching authentication](/docs/auth/branching-authentication)”.
</Admonition>

<Admonition type="tip" title="Använder du OptiTechs backend-tjänster?">
Object Storage, Functions och AI Gateway skapar också egna grenar med dina data: varje gren får ett eget lagringsnamnområde, en egen funktionsdistribution och en egen gateway-ändpunkt, isolerade från sin överordnade gren. Se [OptiTech Object Storage](/docs/storage/overview), [OptiTech Functions](/docs/compute/functions/overview) och [OptiTech AI Gateway](/docs/ai-gateway/overview).
</Admonition>

## Förgrenade arbetsflöden

Du kan använda OptiTechs förgreningsfunktion i en rad olika arbetsflöden.

### Utveckling

Du kan skapa en gren av din produktionsdatabas som utvecklare fritt kan experimentera med och ändra. Som standard skapas grenar med alla data som fanns i den överordnade grenen, vilket eliminerar den tid som krävs för att konfigurera, driftsätta och underhålla en utvecklingsdatabas.

![gren för utvecklingsmiljö](/docs/introduction/branching_dev_env.png)

I följande video visas hur man skapar en gren i OptiTech Console. För steg-för-steg-instruktioner, se [Skapa en gren](/docs/manage/branches#create-a-branch).

<video autoPlay playsInline muted loop width="800" height="600">
  <source type="video/mp4" src="/docs/introduction/create_branch.mp4"/>
</video>

Du kan integrera förgreningar i dina utvecklingsarbetsflöden och verktygskedjor med hjälp av OptiTechs CLI, API eller GitHub Actions. Om du använder Vercel kan du använda den [av OptiTech hanterade Vercel-integrationen](/docs/guides/neon-managed-vercel-integration) för att skapa en gren för varje förhandsgranskningsdistribution.

Se följande handledningar för instruktioner:

<DetailIconCards>

<a href="/docs/guides/branching-neon-api" description="Learn how to instantly create and manage branches with the OptiTech API" icon="transactions"> Förgrening med OptiTech API </a>

<a href="/docs/guides/branching-neon-cli" description="Learn how to instantly create and manage branches with the OptiTech CLI" icon="cli"> Förgrening med OptiTech CLI </a>

<a href="/docs/guides/branching-github-actions" description="Automate branching with OptiTech's GitHub Actions for branching" icon="split-branch"> Förgrening med GitHub Actions </a>

<a href="/docs/guides/neon-managed-vercel-integration" description="Connect your Vercel project and create a branch for each preview deployment" icon="split-branch"> </a> om Vercel-integrationen som hanteras av OptiTech

</DetailIconCards>

### Testning

Testare kan skapa grenar för att testa schemaändringar, validera nya frågor eller testa frågor som kan orsaka skada innan de driftsätts i produktionsmiljön. En gren är isolerad från sin överordnade gren men innehåller alla data från den överordnade grenen fram till den tidpunkt då grenen skapades, vilket eliminerar arbetet med att fylla databasen med data. Tester kan också köras parallellt på separata grenar, där varje gren har dedikerade beräkningsresurser.

![grenar i testmiljön](/docs/introduction/branching_test.png)

Se följande handledning för instruktioner.

<DetailIconCards>

<a href="/docs/guides/branching-test-queries" description="Instantly create a branch to test queries before running them in production" icon="queries"> Förgrening: Test av frågor </a>

</DetailIconCards>

### Tillfälliga miljöer

Skapa grenar med TTL genom [att ange ett utgångsdatum](/docs/guides/branch-expiration). Perfekt för tillfälliga utvecklings- och testmiljöer som behöver raderas automatiskt.

Förgreningar med tidsbegränsning fungerar bra för:

- Testmiljöer för CI/CD-pipeline
- Funktionsutveckling med kända livslängder
- Scenarier för automatiserad testning
- AI-drivna utvecklingsarbetsflöden

## Återställa och hämta data

Om du förlorar data på grund av en oavsiktlig radering eller någon annan händelse kan du använda [**omedelbar](/docs/introduction/branch-restore) återställning** för att återställa dem: återställ grenen till valfri tidpunkt som fortfarande ligger inom projektets **historikfönster** (den lagringstid du ställer in under **Inställningar → Omedelbar återställning**). Du kan också skapa en ny återställningsgren för historisk analys eller av någon annan anledning.

![Återställ data efter dataförlust med hjälp av återställningsförgrening](/docs/introduction/branching_data_loss.png)

### Fönstret ”Historik”

**Instant Restore** (samt Time Travel, förgreningar från det förflutna och ögonblicksbilder) kräver att OptiTech för en logg över dataändringar. **Historikfönstret** är den projektomfattande inställningen – under **Inställningar → Omedelbar återställning** i konsolen – som styr hur länge ändringshistoriken sparas, vilket avgör hur långt tillbaka i tiden **omedelbar återställning** och de andra funktionerna kan nå.

OptiTech sparar en historik över ändringar för dina filialer, med standardinställningar på 6 timmar i Free-planen och 1 dag i de betalda planerna. Om du förlänger historikperioden utökas återställningsmöjligheterna, men lagringskostnaderna ökar också eftersom mer historik sparas. Du kan ställa in den på upp till 7 dagar i Launch-planen eller 30 dagar i Scale-planen.

För information om gränser, fakturering och hur du ändrar inställningarna, se [fönstret ”Historik](/docs/introduction/history-window)”.

Lär dig hur du använder dessa funktioner för dataåterställning:

<DetailIconCards>

<a href="/docs/guides/branch-restore" description="Restore a branch to an earlier point in its history" icon="invert"> </a> för omedelbar återställning

<a href="/docs/guides/reset-from-parent" description="Reset a branch to match its parent" icon="split-branch"> Återställ från överordnad </a>

<a href="/docs/guides/time-travel-assist" description="Run SQL queries against your database's past state" icon="queries"> Frågor om tidsresor: </a>

</DetailIconCards>

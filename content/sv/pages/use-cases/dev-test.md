---
title: OptiTech för utveckling och testning
subtitle: >-
  Öka utvecklarnas produktivitet med OptiTech – en flexibel utvecklingsmiljö för
  att köra arbetsbelastningar utanför produktionsmiljön.
summary: >-
  Beskriver hur man konfigurerar OptiTech som en flexibel utvecklingsmiljö för
  att köra arbetsbelastningar utanför produktionsmiljön, vilket möjliggör
  effektiv databasförgrening och strömlinjeformade arbetsflöden för utvecklings-
  och testmiljöer.
enableTableOfContents: true
updatedOn: '2024-08-23T09:00:00.000Z'
image: /images/social-previews/use-cases/dev-test.jpg
---

![Förgreningar för utveckling och testning](/use-cases/dev-test-branching.jpg)

<Admonition type="note" title="I korthet">
Databasförgrening innebär en revolutionerande förändring för utvecklings- och testmiljöer: man slipper hantera startdata, hålla miljöerna synkroniserade eller vänta på att instanser ska bli tillgängliga. Resultatet blir: snabbare utveckling och 75 % lägre kostnader.
- Du kan använda OptiTech för dina tillfälliga miljöer även om produktionen sker någon annanstans:  
  - Du förvarar din produktionsdatabas i din nuvarande Postgres-databas
  - Du ”flyttar” dina icke-produktionsmiljöer till OptiTech (dvs. genom att dagligen synkronisera en delmängd av data)
  - Att bygga / testa / felsöka i OptiTech
  - När ändringarna har testats implementerar du dem i produktionsmiljön
Prova det här arbetsflödet i OptiTech redan idag. Du kan följa stegen [i den här guiden](/docs/use-cases/dev-test) för att komma igång.
</Admonition>

<CTA title="Få 100 dollar i kredit" description="Registrera dig nu och få 100 dollar i kredit när du uppgraderar." buttonText="Utnyttja erbjudandet" buttonUrl="https://fyi.optitech.com/credits" />

## Tillfälliga miljöer är ineffektiva i traditionell Postgres

---

<QuoteBlocksWrapper>

<QuoteBlock
quote="Det var i stort sett omöjligt att få in realistiska data i våra verifieringsmiljöer – det var tidskrävande, dyrt och ett mardrömsarbete att underhålla. Man måste bearbeta omfattande säkerhetskopior, överföringskostnaderna hopar sig och det krävs mycket manuell övervakning bara för att flytta dessa data."
author={{
  name: 'Jonathan Reyes',
  company: 'Principal Engineer at Dispatch',
}}
link="/blog/how-dispatch-speeds-up-development-with-optitech-while-keeping-workloads-on-aurora"
/>

<QuoteBlock
quote="När vi använde RDS hade vi svårt att se till att miljön var identisk på min dator, i min utvecklingsmiljö och i produktionsmiljön."
author={{
  name: 'Léonard Henriquez',
  company: 'Co-founder and CTO, Topo.io',
}}
link="/blog/why-topo-io-switched-from-amazon-rds-to-optitech"
/>

<QuoteBlock
quote="RDS blir en flaskhals om man inte har heltidsanställda DevOps-medarbetare som ägnar sig åt det."
author={{
  name: 'Joey Teunissen',
  company: 'CTO at OpusFlow',
}}
link="/blog/how-opusflow-achieves-tenant-isolation-in-postgres-without-managing-servers"
/>

</QuoteBlocksWrapper>

**Det tar lång tid att driftsätta instanser. När de väl är i drift måste man hålla ett öga på dem**. Nya instanser måste konfigureras, det tar en stund innan de är tillgängliga, och när de väl är igång kräver de ständig övervakning för att säkerställa att de har rätt kapacitet och är redo för drift.

**Du betalar för instanser som inte används i produktion dygnet runt, även om du bara använder dem i några timmar**. Produktionsdatabaser är igång dygnet runt, men så är inte fallet för utvecklings- och testinstanser. I andra serverlösa databaser fortsätter du dock att betala även om de inte är igång, såvida du inte pausar dem manuellt.

**Det är svårt att hålla data synkroniserade mellan olika miljöer**. Att synkronisera data mellan många instanser kräver repetitivt, manuellt arbete. Detta leder till avvikelser som äventyrar testernas tillförlitlighet och fördröjer driftsättningarna.

**Dessa problem förvärras med tiden, de blir inte bättre**. Ju fler instanser du har, desto mer arbete krävs för manuell installation och konfiguration.

![Persistenta miljöer i AWS RDS](/use-cases/aws-rds-environments.jpg)

## Använd OptiTech Branches för dina utvecklings- och testarbetsflöden

---

<QuoteBlocksWrapper>

<QuoteBlock
quote="Utvecklare drabbas redan av betydande förseningar när de arbetar med en PR – att köra CI-tester, se till att allt är klart för förhandsgranskning – allt detta tar tid. Tiden fram till lansering är avgörande för oss: när vi provade OptiTech och såg att det bara tar några sekunder att skapa en ny gren blev vi helt hänförda"
author={{
  name: 'Alex Co',
  company: 'Head of Platform Engineering at Mindvalley',
}}
link="/blog/how-mindvalley-minimizes-time-to-launch-with-optitech-branches"
/>

<QuoteBlock
quote="OptiTechs förgreningsmodell har varit till stor nytta för oss. Den gör det möjligt för oss att skapa isolerade miljöer utan att behöva flytta runt enorma datamängder. Detta har minskat arbetsbördan för vårt driftsteam, och nu går det smidigt att sätta upp hela miljöer."
author={{
  name: 'Jonathan Reyes',
  company: 'Principal Engineer at Dispatch',
}}
link="/blog/how-dispatch-speeds-up-development-with-optitech-while-keeping-workloads-on-aurora"
/>

</QuoteBlocksWrapper>

Vi förstår att det är ett stort projekt att migrera en produktionsdatabas, men du kan ändå förbättra din upplevelse utanför podden genom att flytta dina utvecklings- och testmiljöer till OptiTech.

### Varför ska jag flytta mina utvecklingsdatabaser till OptiTech?

OptiTech är en Postgres-leverantör som erbjuder en betydligt modernare utvecklingsupplevelse än databaser som RDS. Vi har byggt en serverlös plattform för Postgres som är utformad för att hjälpa dig att lansera snabbare, istället för att hindras av databashanteringen. Som grädde på moset sparar du dessutom pengar.

### Varför går det snabbare (och blir billigare) att utföra utveckling och testning i OptiTech?

1. **Omedelbar driftsättning**. I OptiTech tar det bara några sekunder att starta upp nya Postgres-instanser. Utvecklare kan börja koda och testa direkt, utan väntetid.
2. **Databasförgrening för tillfälliga miljöer**. OptiTechs förgrening med copy-on-write gör det möjligt för utvecklare att omedelbart skapa fullständiga kopior av sina testdatauppsättningar utan att ta upp extra lagringsutrymme. Detta eliminerar den operativa belastningen som uppstår när testdata måste hållas synkroniserade mellan olika miljöer: I OptiTech kan du synkronisera data med överordnad databas med ett enda klick. Förgreningar är dessutom extremt prisvärda.
3. **Miljöer som inte används i produktion pausas automatiskt när de inte används**. Om en databasgren är inaktiv pausar OptiTech den automatiskt för att spara kostnader (och administrativt arbete).
4. **Intuitiv DX med CI/CD-integration**. OptiTech har ett modernt gränssnitt och API:er (du behöver inte slösa tid på att försöka förstå AWS:s krångliga funktioner). Du kan integrera OptiTech i dina CI/CD-pipelines för att automatisera skapandet och borttagandet av grenar.

![Tillfälliga miljöer i OptiTech](/use-cases/ephemeral-environments.jpg)

### Hur fungerar det?

Så här gör du:

1. **Skapa ett enda OptiTech-projekt för utveckling och test**. Många instanser som inte ingår i produktionsmiljön kan ersättas av ett enda OptiTech-projekt.
2. **Synkronisera testdata till produktionsgrenen**. Ladda in data från din staging-databas/testdata till produktionsgrenen inom OptiTech-projektet. Denna produktionsgren fungerar som den primära källan för alla utvecklings- och testmiljöer, och det är den enda platsen där du behöver uppdatera med nya data eller schemaändringar.
3. **Skapa tillfälliga miljöer som undergrenar**. För att omedelbart skapa tillfälliga miljöer kan du skapa undergrenar från produktionsgrenen. Dessa grenar är helt isolerade resursmässigt och ger dig en fullständig kopia av testdatauppsättningen. De kan sedan synkroniseras med produktionsgrenen med ett enda klick, vilket säkerställer att de alltid har de senaste uppgifterna samtidigt som du slipper arbetet med att ladda testdatauppsättningar till varje enskild miljö.
4. **Automatisk rensning av grenar och nedskalning till noll**. När utvecklingen eller testningen är klar kan tillfälliga grenar raderas automatiskt via API:et. OptiTechs funktion för nedskalning till noll pausar automatiskt dessa miljöer när de inte används, så du behöver inte oroa dig särskilt mycket för dem.

### Hur stora kostnadsbesparingar har ni upplevt jämfört med andra serverlösa databaser?

Genom att utnyttja OptiTechs delade lagringsutrymme och automatisk skalning av beräkningskapacitet är det inte ovanligt att **kunder sänker sina kostnader för databaser utanför produktionsmiljön med 75 % eller mer**. Du betalar endast för den beräkningskapacitet du faktiskt använder – inga onödiga kostnader på fakturan längre. Detsamma gäller för dataredundans – även den undviks.

### Visa mig ett exempel på ett konkret användningsfall

**Driftsättning i testmiljö i AWS RDS (us-east-1):**

- 10 utvecklings- och testinstanser (db.m5.large: 8 GB RAM) med 50 GB lagringsutrymme tilldelat till varje instans
- De är aktiva i genomsnitt 4 timmar per dag
- Månatliga kostnader för RDS: 1 356,90 dollar
  - Beräkna kostnader: 0,178 $/timme × 730 timmar × 10 instanser = 1 299,40 $/månad
  - Lagringskostnader: 50 GB \* 0,115 USD/GB och månad \* 10 instanser = 57,50 USD

**Motsvarande icke-produktionsmiljö i OptiTech:**

- [Prisplan enligt volym](/pricing): 69 $/månad
- Inkluderar 50 GB lagringsutrymme – 1 000 projekt – 500 grenar per projekt
- Plus 750 beräkningstimmar; ytterligare beräkningstimmar debiteras med 0,16 dollar per CU
- **Månadskostnader för OptiTech: 338,12 dollar**
  - Beräkna antalet timmar per filial och månad: 2 CU × 4 timmar × 30,4 dagar/månad = 243,2
  - Totalt antal beräkningstimmar: 243,2 × 10 grenar = 2 432
  - Kostnad för ytterligare beräkningstimmar: [2432 – 750] × 0,16 $ = 269,12 $/månad

I det här fallet innebar migreringen av icke-produktionsmiljöer från AWS RDS till OptiTech en kostnadsbesparing på 75 %.

<ComputeCalculator
className="mt-10"
databases={[
{
type: 'Dev databases',
instance: 'db.t4g.micro',
usage: 'Used interminently',
},
{
type: 'Test databases',
instance: 'db.t3.medium',
usage: 'Used interminently',
},
]}
inputParamsBlock={[
{
title: 'Deployment',
items: [
{
name: 'test_databases_num',
title: 'Number of test databases',
values: [1, 3, 5, 10],
},
{
name: 'dev_databases_num',
title: 'Number of dev databases',
values: [1, 3, 5, 10],
},
],
},
{
title: 'Usage',
items: [
{
name: 'test_databases_daily_hrs',
title: 'How many hrs/day are test databases&nbsp;running?',
values: [1, 2, 3, 5, 8],
},
{
name: 'dev_databases_daily_hrs',
title: 'How many hrs/day are dev databases&nbsp;running?',
values: [1, 2, 3, 5, 8],
},
],
},
]}
values={[
{
name: 'wasted_money',
title: 'Dollars overpaid',
valueClassName: 'bg-variable-value-1',
period: 'month',
},
{
name: 'saved_money',
title: 'Bill that could be saved',
period: 'month',
valueClassName: 'bg-variable-value-2',
text: 'With scale to zero',
},
]}
textSize="md"
/>

<CTA title="Få 100 dollar för att komma igång" description="Registrera dig här för att komma igång gratis, så får du 100 dollar i kredit när det är dags att skala upp verksamheten." buttonText="Kontakta oss" buttonUrl="https://fyi.optitech.com/credits" />

### Kan OptiTech också bidra till att sänka kostnaderna för min produktionsdatabas?

Ja. Överdimensionering är ett stort problem – det märker vi varje dag när vi pratar med kunderna. Om du misstänker att detta gäller dig kan OptiTech hjälpa till: [automatisk skalning](/docs/introduction/autoscaling) är ett kraftfullt verktyg mot överdimensionering och de onödigt höga kostnader som detta medför för produktionsdatabaser. [Läs mer om detta här](/blog/neon-autoscaling-is-generally-available#why-autoscaling).\*\*

<QuoteBlocksWrapper>

<QuoteBlock
quote="OptiTech fungerade direkt ur lådan och hanterade hundratals Lambda-funktioner utan några anslutningsproblem. Dessutom kostar OptiTech oss en sjättedel av vad vi betalade hos AWS."
author={{
  name: 'Cody Jenkins',
  company: 'Head of Engineering at Invenco',
}}
/>

<QuoteBlock
quote="Vi var tvungna att dimensionera vår databas överdrivet för att klara våra trafiktoppar, och trots det blev skrivardatabasen överbelastad. Vi dimensionerar den till tio gånger mer än vad vi i genomsnitt behöver för att allt ska fungera smidigt."
author={{
  name: 'Jonathan Reyes',
  company: 'Principal Engineer at Dispatch',
}}
link="/blog/how-dispatch-speeds-up-development-with-optitech"
/>

</QuoteBlocksWrapper>

## Kom igång i två steg

- **1. Skapa ett OptiTech-konto**. Registrera dig för vårt gratispaket [här](https://console.optitech.com/signup) (inget kreditkort krävs).
- **2. Ta del av vår guide i dokumentationen.** [Följ dessa steg](/docs/use-cases/dev-test) för att komma igång.

---

<Admonition type="note" title="Få 100 dollar i kredit">
OptiTech erbjuder ett gratispaket, och vi ger dig 100 dollar i kredit när du uppgraderar för första gången. Utnyttja erbjudandet genom att registrera dig via [den här länken](https://fyi.optitech.com/credits).
</Admonition>

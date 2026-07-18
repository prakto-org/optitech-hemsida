---
title: 'En databas per användare, ingen komplexitet'
subtitle: >-
  Ge varje slutanvändare en egen Postgres-databas med fullständig isolering.
  Uppfyll efterlevnadskraven, undvik störande grannar och skala upp utan
  problem.
summary: >-
  Beskriver hur man konfigurerar en arkitektur med en databas per användare i
  OptiTech, vilket möjliggör fullständig isolering för varje kund med dedikerade
  Postgres-databaser och därmed säkerställer efterlevnad av regler, stabil
  prestanda och förenklad hantering utan ökad komplexitet.
enableTableOfContents: true
updatedOn: '2024-08-23T09:00:00.000Z'
image: /images/social-previews/use-cases/db-per-tenant.jpg
---

<Admonition type="note" title="Sammanfattning">
OptiTech gör det enkelt att isolera varje kund i en egen Postgres-databas med isolering på instansnivå, utan de kostnader eller den komplexitet som denna arkitektur medför hos andra tjänster (som AWS RDS).

- **Inga störande grannar längre** – Varje kund körs i ett separat OptiTech-projekt, vilket garanterar stabil prestanda och minskar risken för påverkan mellan olika kunder.
- **Förenklad efterlevnad** – Uppfyll strikta krav på dataskydd och datalagring genom isolering per hyresgäst och regional projektplacering.
- **Skalning av varje kund separat** – OptiTech skalar automatiskt beräkningskapacitet och lagringsutrymme per kund, utan överdimensionering – och skalar även ned kapaciteten vid behov.
- **Omedelbar återställning per kund** – Om ett problem uppstår (eller en kund framför en begäran) kan du omedelbart återställa vilken kunddatabas som helst utan att det påverkar resten av din kundbas.
- **API-baserad hantering** – Skapa, skala och hantera alla dina OptiTech-projekt programmatiskt – en enda utvecklare kan hantera tusentals kunder.

Registrera dig [via den här länken](http://fyi.optitech.com/credits) för att få 100 dollar i rabatt på din första faktura, och följ den här guiden för att komma igång.
</Admonition>

## Varför en databas per användare?

Ett av de första designbesluten du kommer att ställas inför när du bygger en applikation med Postgres är hur du ska organisera din multitenancy. För vissa användningsfall är det mest fördelaktigt att välja en modell med en databas per klient:

- **Uppfyll strikta krav på dataskydd** – Om du driver en B2B-SaaS-plattform med kunder inom reglerade branscher kan dessa kräva maximal dataisolering på instansnivå. Med en modell där varje kund får en egen databas kan du uppfylla dessa strikta krav på dataskydd genom att erbjuda varje kund en egen, isolerad databas.
- **Följa regionala dataskyddsbestämmelser** – I de fall då dataskyddsbestämmelserna kräver att kunddata lagras inom specifika regioner, är det en enkel väg till efterlevnad att skapa separata databaser i varje region.
- **Förenkla hanteringen** – Om dina kunder behöver isolerade arbetsflöden som säkerhetskopiering, PITR eller migreringar, gör ”en databas per kund” det enklare att hantera dessa utan risk för överföring mellan kunder.
- **Undvika ”bullriga grannar”** – När kunder delar en instans kan en plötslig ökning av användningen hos en hyresgäst försämra prestandan för de andra. Genom att isolera hyresgästerna säkerställs en jämn prestanda.

![En Postgres-instans per kund](/use-cases/multitenant-postgres-instance-per-tenant.jpg)

## Att skala upp arkitekturer med en databas per användare i AWS är ingen bra idé

Hanterade Postgres-tjänster som Amazon RDS är inte utformade för användningsfall med stora datamängder där varje kund har en egen databas. Även om det tekniskt sett är möjligt att isolera varje kund med en egen databas blir detta, när det sker i stor skala, operativt och ekonomiskt ohållbart.
Det finns två vanliga tillvägagångssätt som team brukar välja – båda med stora nackdelar:

### 1. Att klämma in tusentals databaser i en enda RDS-instans

Många team försöker spara pengar genom att samla alla sina hyresgäster i en enda stor RDS-instans. Men detta leder till:

- **Enskild felkälla** – Om den instansen slutar fungera drabbas alla dina kunder.
- **Bullriga grannar** – Resurskrävande användare kan försämra prestandan för andra som delar samma beräkningsresurser.
- **Komplext underhåll** – Säkerhetskopiering, PITR, övervakning och uppgraderingar blir svårare att hantera när de är kopplade till en enorm delad instans.
- **Stel skalning** – Det går inte att skala enskilda hyresgäster – man måste skala hela instansen, vilket ofta innebär att man betalar för mycket för outnyttjad kapacitet.

![Postgres-instans med flera hyresgäster för alla hyresgäster](/use-cases/multitenant-single-postgres-instance.jpg)

### 2. Starta en RDS-instans per kund

Denna metod ger dig den isolering du är ute efter, men den medför höga kostnader – både i dollar och i form av utvecklingstid. Sanningen är att RDS aldrig utformades för den här typen av arkitektur:

- **Dyrt och slösaktigt** – Varje RDS-instans har en grundkostnad, även när den är inaktiv. Multiplicera det med hundratals eller tusentals kunder, så blir din faktura snabbt ohanterlig. Lagringsutrymmet går inte heller att skala ned: när det väl har ökat måste du fortsätta betala för det.
- **Ingen dynamisk skalning** – RDS-instanser skalas inte automatiskt. För att ändra storleken på beräkningskapaciteten krävs ofta manuella ingrepp – och i många fall driftsavbrott.
- **Stor driftsbelastning** – Du kommer snart att behöva ett särskilt team enbart för att hantera instansprovisionering, övervakning, uppdateringar och logistik kring skalning. Även enkla uppgifter blir komplexa när verksamheten växer.
- **Långsam uppstart** – Det kan ta flera minuter, inte sekunder, att starta upp en ny RDS-instans – vilket är långt ifrån idealiskt ur slutanvändarens perspektiv.

<QuoteBlock
quote="Våra kunder kräver att deras data ska lagras i en isolerad databas, men att genomföra detta i RDS var besvärligt och kostsamt"
author={{
  name: 'Joey Teunissen',
  company: 'CTO at Opusflow',
}}
/>

## Postgres – så här ska SaaS med flera kunder fungera

OptiTech omformar Postgres för modern SaaS. Med serverlös infrastruktur, automatisk skalning och skalning ner till noll eliminerar OptiTech den extra belastning som vanligtvis gör arkitekturer med en databas per kund så svåra att hantera. Varje kund finns i sitt eget isolerade projekt, och allt – från driftsättning till återställning – sker via API. Du får verklig isolering på instansnivå utan de kostnader eller den komplexitet som är förknippade med att hantera tusentals traditionella Postgres-instanser.

### Ett projekt per kund

**Ett OptiTech-projekt är den logiska motsvarigheten till en ”instans”, men utan den operativa bördan.**

- Varje kunds data är helt isolerad
- Du kan genomföra fristående PITR-kontroller för en enskild kund utan att det påverkar hela din fordonsflotta
- Du kan driftsätta projekt i specifika regioner för att uppfylla lokala efterlevnadskrav
- Du slipper helt och hållet bullriga grannar – ingen konkurrens om resurserna mellan hyresgästerna

![En databas per användare](/use-cases/database-per-user.jpg)

### Skalera varje hyresgäst separat

I RDS måste man välja instansstorlek och disktilldelning i förväg – och skala manuellt när användningen förändras. Med OptiTech skalas beräkningskapaciteten automatiskt efter behov, och lagringsutrymmet utökas och minskas automatiskt. **Du behöver inte tilldela beräkningskapacitet eller lagringsutrymme i förväg.** Varje kund får sina egna resurser, och dessa resurser skalas automatiskt utifrån användningen. Ingen manuell storleksjustering, inget slöseri vid inaktivitet.

- **Ingen överdimensionering längre** – Dina mest aktiva kunder får mer kapacitet när de behöver det. Alla andra kör med minimalt med resurser – eller inte alls.
- **Skalas ner till noll vid inaktivitet** – Om en kund inte använder sin databas pausar OptiTech beräkningskapaciteten och du betalar ingenting förrän kunden återvänder.
- **Detaljerad kontroll** – Ställ in beräkningsgränser, kvoter och prestandapolicyer per kund så att de passar deras abonnemang eller användningsfall.

<Admonition type="note" title="info">
Läs vidare om hur [automatisk skalning av beräkningskapacitet](/docs/introduction/autoscaling) fungerar i OptiTech.
</Admonition>

### Återställ en enskild kund på några sekunder

I de flesta hanterade Postgres-tjänster, såsom RDS, är återställningen av en databas en långsam och manuell process. Det innebär vanligtvis att man startar upp en ny instans från en snapshot, väntar flera minuter (eller längre) och återställer alla databaser som fanns i den instansen – oavsett om de påverkades eller inte.

OptiTech har en helt annan strategi. Tack vare vår lagringsmotor med ”copy-on-write”-teknik **gör OptiTech det möjligt att omedelbart återställa databaser till valfri tidpunkt i det förflutna** – utan driftstopp, utan dataduplicering och utan att behöva förkonfigurera säkerhetskopior.

- Du kan återställa en enskild kunds databas (projekt) till valfri tidpunkt – på bara några sekunder.
- Du påverkar inte andra hyresgäster, eftersom återställningsåtgärderna är helt isolerade.
- Du behöver inte sätta upp ny infrastruktur – återställningen sker på plats, utan några driftskostnader alls.

Detta är särskilt värdefullt inom B2B-SaaS-plattformar, där kunder kan begära en återställning till ett visst datum på grund av datafel, användarfel eller efterlevnadskrav. Med OptiTech kan du tillgodose dessa önskemål på några sekunder – utan att behöva eskalera ärendet, utan avbrott och utan att påverka resten av din flotta.

<Admonition type="note" title="info">
Läs mer om hur [omedelbar återställning](/docs/introduction/branch-restore) fungerar i OptiTech.
</Admonition>

### API-inriktad hantering

OptiTech har utvecklats för att hjälpa dig att hantera tusentals Postgres-databaser som om de vore en enda. Alla åtgärder – tilldelning, konfigurering, skalning, återställning och radering – är tillgängliga via vårt offentliga API. Detta gör det möjligt för dig att helt automatisera databasernas livscykel och **hantera en omfattande kundpark med minimal teknisk insats.**

- **Skalbar tillhandahållning** – Skapa nya databaser åt kunderna programmatiskt, på några millisekunder, utan att behöva hantera eller förallokera någon infrastruktur.
- **Spåra användningen och tillämpa begränsningar** – Ställ in kvoter per projekt för lagringsutrymme, beräkningskapacitet och aktiv tid så att de stämmer överens med dina prisnivåer eller kundabonnemang.
- **Håll kostnaderna under kontroll på hyresgästnivå** – Övervaka förbrukningen och tillämpa automatiska gränsvärden eller varningar innan hyresgästerna överskrider planens gränsvärden.
- **Fakturering baserad på faktisk användning** – OptiTechs prissättning baseras på faktisk förbrukning – inte på tilldelad kapacitet – så du betalar endast för det som varje kund faktiskt använder.
- **En ingenjör kan hantera tusentals kunder** – Med rätt automatisering på plats behövs inget stort DevOps-team.

<Admonition type="note" title="Info">
Utforska [dokumentationen](/docs/reference/api) för OptiTech API och börja utveckla.
</Admonition>

### Dataskydd och datasäkerhet

När man bygger en SaaS-plattform med flera kunder – särskilt inom reglerade branscher – är dataskydd och efterlevnad av regelverk inga valfria alternativ. Med OptiTech är isolering på instansnivå inbyggd i arkitekturen, vilket gör det **enklare att uppfylla de strängaste kraven från kunder och tillsynsmyndigheter.**

- **Verklig dataisolering** – Varje kund har sitt eget OptiTech-projekt med helt separata beräknings- och lagringsresurser. Det finns ingen risk för åtkomst till andra kunders data eller konkurrens om resurser.
- **Regional projektplacering** – Distribuera hyresgästdata till specifika geografiska regioner för att uppfylla krav på datalagring, såsom GDPR, HIPAA eller branschspecifika bestämmelser.
- **Åtkomstkontroll på projektnivå** – Tilldela unika inloggningsuppgifter och anslutningssträngar per kund, och hantera åtkomsten projektvis.
- **Revisionsvänliga återställningsprocesser** – Omedelbar PITR per kund gör det möjligt att återställa data exakt till valfri tidpunkt, vilket hjälper dig att uppfylla SLA:er för datalagring och återställning.
- **Säkerhet på företagsnivå** – Alla OptiTech-projekt använder TLS för anslutningar, och inbyggd kryptering tillämpas på data både i lagring och under överföring.

<Admonition type="note" title="Info">
[Läs vår säkerhetssida](/security) för mer information om efterlevnad, SLA:er och våra fullständiga säkerhetsåtaganden.
</Admonition>

### Utvecklingsmiljöer

För att dra nytta av [arbetsflöden med databasförgreningar för utveckling och testning](/use-cases/dev-test) inom en arkitektur med ett projekt per kund, ska du skapa ett **separat OptiTech-projekt som din enda icke-produktionsmiljö**. Metoden:

- Ladda upp dina testdata till huvudgrenen. Denna huvudgren fungerar som den primära källan för alla utvecklings- och testmiljöer (det kan handla om hundratals).
- För att snabbt skapa tillfälliga miljöer kan du skapa undergrenar från huvudgrenen. Dessa grenar är helt isolerade resursmässigt och innehåller redan en uppdaterad kopia av testdatauppsättningen. De kan sedan synkroniseras med huvudgrenen med ett enda klick.
- När arbetet är klart kan tillfälliga utvecklings- och testmiljöer (undergrenar) raderas automatiskt via din CI/CD.

<Admonition type="note" title="Info">
Läs mer om [hur man skapar utvecklings- och testmiljöer i OptiTech](/use-cases/dev-test) med hjälp av grenar.  
</Admonition>

<CTA title="Börja bygga" description="Registrera dig idag och få 100 dollar i krediter när du uppgraderar." buttonText="Utnyttja erbjudandet" buttonUrl="https://fyi.optitech.com/credits" />

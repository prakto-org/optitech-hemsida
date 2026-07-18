---
title: OptiTech-agentplanen
subtitle: >-
  Lär dig mer om hur du använder OptiTech för att konfigurera och hantera
  databaser för agentbaserade plattformar
summary: >-
  OptiTech Agent Plan är en specialutvecklad prisnivå för plattformar som
  tillhandahåller och hanterar Postgres-databaser för slutanvändare i stor
  skala. Den är indelad i sponsrade organisationer (gratis och betalda), där
  varje organisation som standard stöder upp till 30 000 projekt. Plattformar
  som bygger SaaS-tjänster med flera kunder eller agentbaserade applikationer
  väljer denna plan för sponsrad infrastruktur i gratisnivån och upp till 25 000
  USD i krediter i betalnivån. Beräkningsresurser faktureras till 0,106 USD per
  beräkningsenhetstimme. För att registrera sig krävs en aktiv OptiTech
  Scale-plan och godkännande från teamet. All tilldelning och flottans hantering
  sker via OptiTech API, inklusive autoskalning, skalning till noll, förgrening
  och återställning till en viss tidpunkt.
enableTableOfContents: true
updatedOn: '2026-06-23T22:05:54.707Z'
---

<InfoBlock>
<DocsList title="Vad du kommer att lära dig:">
<p> Hur agentplanen är uppbyggd </p>
<p> Så här fungerar agentplanen </p>
<p> Så här kommer du igång </p>
</DocsList>
<DocsList title="Relaterade ämnen" theme="docs">
<a href="/docs/guides/ai-agent-integration"> Guide för integration av AI-agenter </a>
<a href="/docs/guides/platform-integration-overview"> Integration med OptiTech </a>
<a href="/docs/ai/ai-database-versioning"> Versionshantering av databaser med ögonblicksbilder </a>
</DocsList>
</InfoBlock>

## Översikt

OptiTech-agentplanen tillhandahåller infrastruktur för plattformar som driftsätter Postgres-databaser åt slutanvändare. Planen använder en struktur med två organisationer för att skilja mellan gratis- och betalnivåer, där varje organisation som standard stöder upp till 30 000 projekt. Du kan begära höjda gränser i takt med att din plattform växer.

## Varför välja OptiTech för agentplattformar?

OptiTechs arkitektur är anpassad efter hur agentplattformar fungerar:

- **Omedelbar tilldelning**: Serverlös Postgres med separata resurser för beräkning och lagring tilldelar databaser på några sekunder
- **Automatisk skalning och skalning till noll**: Beräkningskapaciteten skalas upp och ner automatiskt utifrån arbetsbelastningen, och databaser i viloläge kostar ingenting samtidigt som de förblir omedelbart tillgängliga
- **API-hantering**: Alla funktioner, inklusive tilldelning, kvoter, förgrening, omedelbar återställning och ögonblicksbilder, är tillgängliga via OptiTech-API:et
- **Versionshantering i databasen**: Lagring med ”copy-on-write”-teknik möjliggör omedelbar förgrening, ögonblicksbilder och återställning till en viss tidpunkt för kontrollpunkter och experiment
- **Integrerade tjänster**: OptiTech stöder inbyggd autentisering och ett PostgREST-kompatibelt data-API för kompletta, produktionsklara backend-lösningar

Denna kombination gör det möjligt för agentutvecklare att skapa tusentals databaser utan att behöva oroa sig för att resurserna ska ta slut eller att kostnaderna ska skena iväg.

## Antagningskrav

Så här går du med i agentprogrammet:

- Du måste ha ett aktivt OptiTech Scale-abonnemang och ha ett kreditkort registrerat

- Din ansökan måste godkännas av OptiTech-teamet

När din ansökan har godkänts övergår OptiTech-teamet ditt Scale-konto till Agent-planen och hjälper dig att skapa ett andra gratiskonto för din gratisnivå om det behövs. Efter installationen hanterar du alla projekt och konfigurationer självständigt via [OptiTech API](/docs/reference/api).

<CTA
  title="OptiTech-agentplanen"
  description="Ansök redan nu för att få anpassade användarbegränsningar och dedikerad support för din agentplattform."
  buttonText="Ansök"
  buttonUrl="/use-cases/ai-agents"
/>

## Organisationsstruktur

OptiTech skapar två organisationer i ditt konto:

### Fri organisation

Denna sponsrade, kostnadsfria organisation tillhandahåller databaser för dina användare i gratispaketet utan att det kostar dig något; OptiTech står för kostnaderna för infrastrukturen. Organisationen omfattar funktioner från OptiTech Scale-planen, men enskilda projekt har resursbegränsningar som liknar dem i OptiTechs standardgratispaket.

Du debiteras inte för användningen inom denna organisation. Använd detta för användare som inte har uppgraderat till de betalda abonnemangen på din plattform. Det innebär att din kostnadsfria nivå verkligen är kostnadsfri, utan att några kostnader för databasinfrastrukturen läggs på dig.

För en översikt över begränsningarna i Free-planen och funktionerna i Scale-planen, se [OptiTech-planerna](/docs/introduction/plans).

### En organisation som finansieras med bidrag

Den betalda organisationen tillhandahåller databaser för dina betalande användare. Denna organisation omfattar funktioner från Scale-planen, men med agent-specifik prissättning. OptiTech tillhandahåller upp till 25 000 dollar i startkrediter för att täcka användningsavgifterna.

Beräkningskapacitet debiteras med 0,106 dollar per beräkningsenhetstimme (lägre än standardpriserna i Scale). Du kan skapa en egen intern nivå-/planstruktur inom denna organisation och ställa in olika resurskvoter för olika användargrupper. Använd denna organisation för användare med betalda abonnemang som behöver flexibilitet när det gäller resurser.

## Projektledning

Efter den inledande registreringen har du som administratör full kontroll över båda organisationerna. Varje organisation stöder som standard 30 000 projekt. Alla projektåtgärder utförs via [OptiTech API](/docs/reference/api), vilket möjliggör flottaförvaltning i stor skala även med små teknikteam. Du kan:

- Skapa och ta bort projekt i vilken organisation som helst
- Ställ in resurskvoter och faktureringsgränser per projekt
- Övervaka användningen av datorkraft, lagringsutrymme och nätverk i alla projekt
- Spåra förbrukningsdata för att införa användningsbaserad fakturering för fastigheter

Med API-first-strategin kan du programmatiskt skapa och hantera tusentals databaser utan manuella ingrepp. När du behöver skala upp utöver standardgränserna kan du begära utökningar via din OptiTech-kontakt.

### Projektöverföringar mellan organisationer

Tack vare organisationsstrukturen i agentplanen, som omfattar både sponsrade gratis- och betaltjänster, kan du flytta användarprojekt mellan organisationer när de uppgraderar eller nedgraderar sina nivåer. För att överföra projekt mellan organisationer krävs en [personlig API-nyckel](/docs/manage/api-keys#types-of-api-keys) med åtkomst till båda organisationerna. Du kan överföra upp till 400 projekt per begäran.

Se [avsnittet om överföringsprojekt mellan organisationer](/docs/manage/orgs-project-transfer) för mer information.

## Priser

Agentplanen bygger på en användningsbaserad, agentspecifik prissättning med anpassade gränser och dedikerad support:

| Resurs                        | Agentplan                                                                                            |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Projekt                        | **Anpassade gränser tillgängliga** <br/> _Agenterna skapar ett nytt projekt för varje användarapplikation._            |
| Grenar per projekt            | **Anpassade gränser finns** <br/> _Agenter använder grenar för att snabbt växla mellan olika tillstånd i applikationen._ |
| Beräkning                         | **0,106 dollar per beräkningsenhetstimme** <br/> _Användningsbaserad prissättning för agent-specifika arbetsbelastningar_             |
| Lagring                         | **0,35 $ per GB-månad** <br/> _Standardpriser för lagring_                                               |
| Instant Restore (PITR)          | **0,2 $ per GB och månad** <br/> _Lagringsutrymme för återställning till en viss tidpunkt_                                          |
| Hanterings-API                  | **Högre begränsningar tillgängliga** <br/> _API för omedelbar konfiguration och hantering av databaser_     |
| Data-API (kompatibelt med PostgREST) | **Högre begränsningar för antal förfrågningar tillgängliga** <br/> _REST-API för direkt åtkomst till databasen_                          |
| Support                         | **Gemensam Slack-kanal** <br/> _Direktkontakt med OptiTech-teamet_                                       |

> _Priserna gäller endast för den betalande organisationen._

## Faktureringsmodell

Den avgiftsbelagda organisationen erhåller upp till 25 000 dollar i startkrediter som täcker kostnader för databehandling (0,106 dollar per databehandlingsenhetstimme), lagring och dataöverföring. Användningen mäts per projekt, och API:et tillhandahåller förbrukningsstatistik som gör det möjligt att integrera användningsbaserad fakturering i er plattform.

Den sponsrade kostnadsfria tjänsten medför inga faktureringsavgifter; OptiTech står för kostnaderna för infrastrukturen åt användare av den kostnadsfria nivån.

### Förbrukningsmått

Spåra beräkningstid, lagringsutrymme och nätverks-I/O per projekt för att övervaka användningen och skapa faktureringslogik. Se [guiden](/docs/guides/consumption-metrics) för förbrukningsmått för mer information.

## Programmets fördelar

Agentprogrammet omfattar följande fördelar för de deltagande plattformarna:

| Fördel                    | Beskrivning                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Din gratispaket är gratis** | OptiTech sponsrar upp till 30 000 projekt inom ditt gratispaket och står för alla infrastrukturkostnader.                                                   |
| **Krediter för allmän användning**    | Upp till 25 000 dollar i krediter för användning av betalda nivåer (för plattformar som inte redan är anslutna till [OptiTech Startup-programmet](https://optitech.com/startups)). |
| **Högre begränsningar för antal förfrågningar**     | Anpassade begränsningar för antal förfrågningar för Management API och Data API för att stödja operationer med stora volymer.                                                       |
| **Särskild support**      | Gemensam Slack-kanal med direkt tillgång till OptiTech-teamet för teknisk support.                                                             |
| **Gemensam marknadsföring**           | Blogginlägg, kampanjer i sociala medier, stöd till hackathons och möjligheter till gemensam marknadsföring.                                                     |

## Kom igång

När du har registrerat dig i agentprogrammet:

1. Du kommer att få administratörsbehörighet till båda organisationerna (den sponsrade och den betalda)
2. Skapa projekt i rätt organisation utifrån din användares behörighetsnivå
3. Konfigurera resurskvoter per projekt efter behov
4. Övervaka användning och fakturering med hjälp av OptiTech API

För steg-för-steg-instruktioner om implementering, se [integrationsguiden](/docs/guides/ai-agent-integration) för AI-agenten.

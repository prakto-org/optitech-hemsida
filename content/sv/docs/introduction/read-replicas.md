---
title: OptiTech Read Replicas
subtitle: >-
  Skala upp din app, kör ad hoc-frågor och ge läsbehörighet utan att duplicera
  data
summary: >-
  OptiTech-läsrepliker är fristående, skrivskyddade beräkningsinstanser som
  hanterar förfrågningar från samma lagringsutrymme som den primära
  beräkningsinstansen. Inga data dupliceras eller replikeras, och replikerna
  startas upp på några sekunder. Använd läsrepliker för att avlasta
  analysfrågor, fördela lästrafik eller bevilja skrivskyddad åtkomst utan att
  skrivprestandan påverkas. Läsrepliker är asynkrona och stöder automatisk
  skalning (Autoscaling) och skalning till noll (Scale to Zero). Repliker som
  sträcker sig över flera regioner kräver logisk replikering till ett separat
  OptiTech-projekt.
enableTableOfContents: true
updatedOn: '2026-07-18T07:07:45.262Z'
---

OptiTechs läsrepliker är fristående beräkningsenheter som är utformade för att utföra läsoperationer på samma data som din primära läs- och skrivberäkningsenhet. OptiTechs läsrepliker replikerar eller duplicerar inte data. Istället hanteras läsförfrågningar från samma lagringsutrymme, vilket framgår av diagrammet nedan. Medan dina läs- och skrivförfrågningar dirigeras via din primära beräkningsenhet kan läsförfrågningar avlastas till en eller flera läsrepliker.

![läsreplika – enkelt](/docs/introduction/read_replica_simple.png)

Du kan omedelbart skapa läsrepliker för vilken gren som helst i ditt OptiTech-projekt och konfigurera den beräkningskapacitet som tilldelas varje replik. Läsreplikerna stöder även OptiTechs funktioner [för automatisk skalning](/docs/introduction/autoscaling) och [skalning till noll](/docs/introduction/scale-to-zero), vilket ger dig samma kontroll över beräkningsresurserna som du har över din primära beräkningskapacitet.

## På vilket sätt skiljer sig OptiTechs läsrepliker från andra?

- **Inget extra lagringsutrymme krävs**: Eftersom läsrepliker läser från samma källa som din primära läs- och skrivinstans krävs inget extra lagringsutrymme för att skapa en läsreplik. Data dupliceras eller replikeras inte. Att skapa en läsreplik innebär att man startar en skrivskyddad instans, vilket tar några sekunder.
- **Du kan skapa dem nästan omedelbart**: Eftersom ingen datareplikering krävs kan du skapa läsrepliker nästan omedelbart.
- **De är kostnadseffektiva**: Eftersom det inte krävs någon extra lagring eller dataöverföring undviks kostnader för lagring och dataöverföring. OptiTechs läsrepliker drar dessutom nytta av OptiTechs funktioner [för automatisk skalning](/docs/introduction/autoscaling) och [”Scale to Zero”](/docs/manage/computes#scale-to-zero-configuration), vilket gör det möjligt att hantera beräkningsresursanvändningen.
- **De är omedelbart tillgängliga**: Du kan låta läsreplikerna skalas ner till noll när de inte används utan att det uppstår någon fördröjning. När en läsreplika startas upp som svar på en förfrågan är den nästan omedelbart uppdaterad i förhållande till din primära läs- och skrivserver.

## Hur skapar man läsrepliker?

Du kan skapa läsrepliker med hjälp av OptiTech Console, [OptiTech CLI](/docs/cli) eller [OptiTech API](/docs/reference/api), vilket ger dig den flexibilitet som krävs för att integrera läsreplikerna i ditt arbetsflöde eller dina CI/CD-processer.

Från OptiTech-konsolen räcker det med att utföra en enkel **Lägg till läsreplika**-åtgärd på en gren.

<Admonition type="note">
Du kan lägga till läsrepliker till en gren efter behov för att hantera din arbetsbelastning. Gratisplanen är begränsad till högst 3 läsreplik-beräkningsenheter per projekt.
</Admonition>

![Skapa en läsreplika](/docs/introduction/create_read_replica.png)

Från kommandoraden eller API:

<CodeTabs labels={["CLI", "API"]}>

```bash
optitech branches add-compute mybranch --type read_only
```

```bash
curl --request POST \
     --url https://console.optitech.com/api/v2/projects/late-bar-27572981/endpoints \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $OPTITECH_API_KEY" \
     --header 'Content-Type: application/json' \
     --data '
{
  "endpoint": {
    "type": "read_only",
    "branch_id": "br-young-fire-15282225"
  }
}
' | jq
```

</CodeTabs>

För mer information och instruktioner om hur du ansluter till en läsreplika, se [Skapa och hantera läsrepliker](/docs/guides/read-replica-guide).

## Läs om replikarkitektur

Följande diagram visar hur din primära beräkningsreplika och dina läsrepliker skickar läsförfrågningar till samma Pageserver, vilket är den komponent i [Lakebase-arkitekturen](/docs/introduction/architecture-overview) som ansvarar för att hantera läsförfrågningar.

![beräkningar av läsrepliker](/docs/introduction/read_replicas.png)

OptiTechs läsrepliker är asynkrona, vilket innebär att de är _slutligen konsistenta_. När uppdateringar görs av din primära beräkningsinstans lagrar Safekeepers dataändringarna på ett beständigt sätt tills de bearbetas av Pageservers. Samtidigt ser Safekeepers till att läsreplikernas beräkningsinstanser hålls uppdaterade med de senaste ändringarna för att upprätthålla datakonsistensen.

## Stöd över flera regioner

OptiTech stöder endast skapandet av läsrepliker **i samma region** som din databas. Det går dock att skapa en replikering över flera regioner genom att skapa ett OptiTech-projekt i en annan region och replikera data till det projektet via [logisk replikering](/docs/guides/logical-replication-guide). Du kan till exempel replikera data från ett OptiTech-projekt i en region i USA till ett OptiTech-projekt i en europeisk region enligt vår [guide för logisk replikering mellan OptiTech-projekt](/docs/guides/logical-replication-neon-to-neon). Läsbehörighet till den replikerade databasen kan hanteras på applikationsnivå.

## Användningsfall

OptiTechs läsrepliker har ett antal användningsområden:

- **Horisontell skalning**: Skala din applikation genom att fördela läsförfrågningar mellan repliker för att förbättra prestandan och öka genomströmningen.
- **Analysfrågor**: Att flytta resurskrävande analys- och rapporteringsuppgifter till andra system för att minska belastningen på den primära beräkningsmiljön.
- **Läsbehörighet**: Att bevilja läsbehörighet till användare eller applikationer som inte behöver skrivbehörighet.

## Kom igång med läsrepliker

För att komma igång med läsrepliker, se våra guider:

<DetailIconCards>

<a href="/docs/guides/read-replica-guide" description="Learn how to create, connect to, configure, delete, and monitor read replicas" icon="ladder"> Skapa och hantera läsrepliker </a>

<a href="/docs/guides/read-replica-integrations" description="Scale your app with read replicas using built-in framework support" icon="scale-up"> Skala din app med läsrepliker </a>

<a href="/docs/guides/read-replica-data-analysis" description="Leverage read replicas for running data-intensive analytics queries" icon="chart-bar"> Kör analysfrågor med läsrepliker </a>

<a href="/docs/guides/read-replica-adhoc-queries" description="Leverage read replicas for running ad-hoc queries" icon="queries"> Kör ad hoc-frågor med läsrepliker </a>

<a href="/docs/guides/read-only-access-read-replicas" description="Leverage read replicas to provide read-only access to your data" icon="screen"> Skapa skrivskyddad åtkomst med läsrepliker </a>

</DetailIconCards>

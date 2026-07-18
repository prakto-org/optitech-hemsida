---
title: Minska kostnaderna för nätverksöverföring
subtitle: Övervaka och minska kostnaderna för utgående data
enableTableOfContents: true
summary: >-
  Nätverksöverföring (utgående) i OptiTech räknar all utgående data som passerar
  via OptiTech-proxyn, med månatliga kvoter per abonnemang och avgifter för
  överskridande. Använd den här sidan för att felsöka höga kostnader för
  utgående trafik orsakade av stora resultatuppsättningar, pg_dump-exporter
  eller synkroniseringar vid logisk replikering, samt för att övervaka
  användningen via konsolen eller Consumption API. Strategier för att minska
  kostnaderna inkluderar att begränsa omfattningen av SELECT-kolumner, använda
  OptiTech-snapshots, lägga till replikeringsfilter och dirigera trafiken via
  Private Link.
updatedOn: '2026-07-18T07:07:45.262Z'
---

Nätverksöverföring är ett av de användningsmått som påverkar din OptiTech-faktura. I den här guiden förklaras vad nätverksöverföring är, vad som gör att den ökar, hur du övervakar den och hur du kan minska den. För mer allmän vägledning om kostnader, se [Kostnadsoptimering](/docs/introduction/cost-optimization). För information om abonnemangens tilldelningar och priser, se [Abonnemang](/docs/introduction/plans).

## Vad är nätverksöverföring?

OptiTech mäter data som skickas från dina databaser via [OptiTech-proxyn](/docs/introduction/architecture-overview) till klienter. Alla PostgreSQL-anslutningar går via proxyn, inklusive poolade och direkta anslutningar, primära beräkningsinstanser och [läsrepliker](/docs/introduction/read-replicas). All utgående klienttrafik räknas in i nätverksöverföringen, även kallad utgående trafik.

Det finns två typer av nätverksöverföring:

- **Överföring via det offentliga nätverket**: Data som skickas via det offentliga internet. [Logisk replikering](/docs/guides/logical-replication-neon) till vilken destination som helst räknas som överföring via det offentliga nätverket.
  - **Gratisabonnemang**: 5 GB/månad ingår. Om du överskrider denna gräns stängs din databehandlingskapacitet av fram till nästa faktureringsperiod eller tills du uppgraderar.
  - **Start- och skalningsplaner**: 500 GB/månad ingår, därefter 0,10 $/GB.
- **Överföring via privat nätverk**: Trafik som dirigeras via AWS PrivateLink. Finns endast i Scale-planen. Debiteras med 0,01 USD/GB, i båda riktningarna. Till skillnad från överföring via det offentliga nätverket, där endast utgående data räknas, räknas trafiken i båda riktningarna vid överföring via det privata nätverket: data som skickas från din databas till klienter och data som skickas från klienter till din databas.

I konsolen visas dessa som **Överföring i offentligt nätverk** och **Överföring i privat nätverk**. I Consumption API heter fälten `public_network_transfer_bytes` och `private_network_transfer_bytes`. I API-svar som visar detaljer om projekt och grenar heter det sammanslagna fältet `data_transfer_bytes`.

## Vad orsakar hög nätverkstrafik?

Nedan följer vanliga orsaker till ökad nätverkstrafik i OptiTech. Se avsnittet [”Så här övervakar du”](#how-to-monitor-network-transfer) för [att](#how-to-reduce-network-transfer) identifiera dessa mönster och avsnittet ”Så här minskar du” för lösningar.

**Stora resultatuppsättningar från sökfrågor.** Om du använder `SELECT *` och hämtar hela tabeller utan `LIMIT`, utan paginering eller med sammanfogningar som oavsiktligt multiplicerar antalet rader, skickas mer data än vad din applikation behöver. ORM:s standardinställningar kan också hämta fler rader eller kolumner än nödvändigt. Detta gäller även sökfrågor mot [läsrepliker](/docs/introduction/read-replicas), som går via samma proxy och räknas in i nätverksöverföringen.

**Upprepade förfrågningar med hög frekvens.** Om databasen frågas vid varje sidrendering eller API-förfrågan utan cachelagring överförs samma data om och om igen. Detta är vanligt i serverlösa miljöer där varje anrop startar från början. Kontrollera kolumnen ”`calls`” på `pg_stat_statements` för att upptäcka dessa mönster (se [”Diagnosing a spike](#diagnosing-a-spike)”).

**Databasexporter (pg_dump).** Vid fullständiga databasdumpningar överförs hela databasen via nätverket. Om man kör schemalagda dumpningar ofta ökar den totala datamängden. Komprimeringsflaggor som `-Fc` minskar inte den datamängd som skickas från OptiTech, eftersom komprimeringen sker på klientsidan efter överföringen.

**Logisk replikering.** Replikering av data till externa mål ger upphov till en kontinuerlig utgående dataström. Den inledande synkroniseringen av tabeller kan orsaka stora engångstoppar.

**Loggexport.** Överföring av Postgres-loggar till [Datadog](/docs/guides/datadog), [Grafana Cloud](/docs/guides/grafana-cloud) eller [OpenTelemetry](/docs/guides/opentelemetry)-samlare räknas in i nätverksöverföringen. Loggarna innehåller metadata snarare än raddata, så volymen är vanligtvis liten jämfört med andra orsaker.

## Så här övervakar du nätverksöverföringen

<Admonition type="important">
På sidan ”Fakturering” visas endast nätverksöverföring när förbrukningen överskrider den inkluderade kvoten. För att följa förbrukningen innan den leder till kostnader kan du kontrollera förbrukningspanelen på organisations- eller projektdashboardet, eller använda Consumption API.
</Admonition>

Kunder med betalda abonnemang får varje vecka en användningsrapport via e-post som innehåller uppgifter om nätverksöverföring och kostnader.

### Sidan för konsolorganisation

Användningspanelen på organisationssidan **Projekt** visar alltid den aktuella nätverksöverföringen för alla projekt. De enskilda projektens översiktssidor visar nätverksöverföringen för det respektive projektet.

![Användningspanel för organisationssidan som visar nätverksöverföring](/docs/introduction/dashboard_org_usage.png)

### Sidan för fakturering via konsolen

Gå till **Organisation > Fakturering** för att se **Överföring via det offentliga nätverket** och **Överföring via det privata nätverket**. Dessa mått visas endast när din användning överskrider den ingående kvoten och en avgift för överskridande tillkommer. För mer information om sidan Fakturering, se [Övervaka fakturering och användning](/docs/introduction/monitor-usage).

![Faktureringssida som visar avgifter för nätverksöverföring](/docs/introduction/dashboard_org_billing.png)

### Användnings-API för betalda abonnemang

<Admonition type="tip">
Använder du gratisplanen? Gå vidare till [API:er](#project-and-branch-detail-apis) för projekt- och greninformation för att se ett API-alternativ som finns tillgängligt i alla planer.
</Admonition>

Endpunkten ”[`/consumption_history/v2/projects`](/docs/reference/api/consumption/get-consumption-history-per-project-v2)” ger programmatisk åtkomst till statistik över nätverksöverföringar för betalda abonnemang.

Den stöder tre detaljnivåer:

| Granularitet | Maximalt tidsintervall |
| ----------- | ------------------ |
| `hourly`    | De senaste 7 dagarna        |
| `daily`     | De senaste 60 dagarna       |
| `monthly`   | Förra året          |

Använd detaljnivån ”`hourly`” för att analysera de senaste topparna. Uppgifterna uppdateras ungefär var 15:e minut.

<Admonition type="tip">
API-anrop för förbrukning väcker inte datorer som är i viloläge, så polling ökar inte din datoranvändning.
</Admonition>

I följande exempel hämtas data om överföringsvolymer per timme i de offentliga och privata nätverken för alla projekt inom en organisation under en sexdagarsperiod:

```bash
curl --request GET \
  --url 'https://console.optitech.com/api/v2/consumption_history/v2/projects?org_id=$ORG_ID&from=2026-02-01T00:00:00Z&to=2026-02-07T00:00:00Z&granularity=hourly&metrics=public_network_transfer_bytes,private_network_transfer_bytes' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer $OPTITECH_API_KEY'
```

<details>
<summary> Svarets innehåll (utdrag)</summary>

Svaret innehåller en post per timme för varje projekt, med de begärda mätvärdena i varje timintervall. Mätvärden utan användningsdata utelämnas från svaret.

```json
{
  "projects": [
    {
      "project_id": "delicate-dawn-54854667",
      "periods": [
        {
          "period_id": "90c7f107-3fe7-4652-b1da-c61f71043128",
          "period_plan": "launch",
          "period_start": "2026-02-02T18:04:52Z",
          "consumption": [
            {
              "timeframe_start": "2026-02-04T00:00:00Z",
              "timeframe_end": "2026-02-04T01:00:00Z",
              "metrics": [
                {
                  "metric_name": "public_network_transfer_bytes",
                  "value": 8347291
                }
              ]
            },
            {
              "timeframe_start": "2026-02-04T01:00:00Z",
              "timeframe_end": "2026-02-04T02:00:00Z",
              "metrics": [
                {
                  "metric_name": "public_network_transfer_bytes",
                  "value": 1203477
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "cursor": "delicate-dawn-54854667"
  }
}
```

</details>

För fullständig information om parametrar, paginering och avfrågning, se [”Fråga om förbrukningsstatistik](/docs/guides/consumption-metrics)”.

### API:er för projekt- och filialinformation

Fältet ”`data_transfer_bytes`” i slutpunkterna [”Get project ](/docs/reference/api/projects/get-project)[details”](/docs/reference/api/branches/get-project-branch) och ”Get branch details” returnerar den löpande summan av nätverksöverföringen för den aktuella faktureringsperioden. Till skillnad från [Consumption API](#consumption-api-for-paid-plans), som tillhandahåller uppdelningar per tidsfönster, nollställs detta värde vid början av varje faktureringscykel och delas inte upp per timme eller dag. Dessa slutpunkter är tillgängliga i alla abonnemang.

**Se projektinformation:**

```bash
curl --request GET \
  --url https://console.optitech.com/api/v2/projects/$PROJECT_ID \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer $OPTITECH_API_KEY'
```

Svaret innehåller ”`data_transfer_bytes`” i projektobjektet:

```json
{
  "project": {
    "data_transfer_bytes": 40821459,
    ...
  }
}
```

**Hämta uppgifter om filialen:**

```bash
curl --request GET \
  --url https://console.optitech.com/api/v2/projects/$PROJECT_ID/branches/$BRANCH_ID \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer $OPTITECH_API_KEY'
```

Svaret innehåller ”`data_transfer_bytes`” i grenobjektet:

```json
{
  "branch": {
    "data_transfer_bytes": 40820887,
    ...
  }
}
```

### Att diagnostisera en topp

OptiTech tillhandahåller inte detaljerade uppgifter om nätverksöverföring per fråga eller per anslutning. För att identifiera orsaken till en topp kan du använda detaljnivån ”`hourly`” från Consumption API för att begränsa tidsfönstret och sedan korrelera detta med kända händelser: schemalagda `pg_dump`-jobb, initiala synkroniseringar vid logisk replikering, applikationsdistributioner eller förändringar i frågemönster. Om du har flera projekt kan du jämföra timdata per projekt för att isolera vilket projekt som är orsaken. I Free-planen kan du jämföra `data_transfer_bytes` mellan olika grenar med hjälp av Branch Detail API för att identifiera vilken gren som bidrar mest. När du har identifierat grenen ansluter du till den och kör `pg_stat_statements`-frågorna nedan för att hitta de vanligaste frågorna.

För att ta reda på vilka frågor som returnerar flest rader kan du använda tillägget ”[`pg_stat_statements`](/docs/extensions/pg_stat_statements)”. Kolumnen ”`rows`” anger inte det exakta antalet byte, men frågor som returnerar många rader eller breda rader (kolumner av typen TEXT, JSONB och BYTEA) är de som mest sannolikt bidrar till hög nätverksöverföring.

<Tabs labels={["Total rows", "Rows per execution", "Most frequent", "Longest running"]}>

<TabItem>

Frågor som returnerade flest rader totalt sett över alla körningar:

```sql
SELECT
  query,
  calls,
  rows AS total_rows,
  rows / calls AS avg_rows_per_call
FROM pg_stat_statements
WHERE calls > 0
ORDER BY rows DESC
LIMIT 10;
```

</TabItem>

<TabItem>

Frågor som returnerar flest rader per körning, vilket tyder på SELECT-satser med dåligt avgränsade sökningar eller att paginering saknas:

```sql
SELECT
  query,
  calls,
  rows AS total_rows,
  rows / calls AS avg_rows_per_call
FROM pg_stat_statements
WHERE calls > 0
ORDER BY avg_rows_per_call DESC
LIMIT 10;
```

</TabItem>

<TabItem>

De vanligaste frågorna, som sammanfattas utifrån volym:

```sql
SELECT
  query,
  calls,
  rows AS total_rows,
  rows / calls AS avg_rows_per_call
FROM pg_stat_statements
WHERE calls > 0
ORDER BY calls DESC
LIMIT 10;
```

</TabItem>

<TabItem>

Frågor som tar längst tid att utföra totalt sett. Detta är inte ett direkt mått på nätverksöverföringen, men hjälper till att identifiera problematiska frågor under en period med trafiktoppar:

```sql
SELECT
  query,
  calls,
  rows AS total_rows,
  round(total_exec_time::numeric, 2) AS total_exec_time_ms,
  round((total_exec_time / calls)::numeric, 2) AS avg_exec_time_ms
FROM pg_stat_statements
WHERE calls > 0
ORDER BY total_exec_time DESC
LIMIT 10;
```

</TabItem>

</Tabs>

<Admonition type="tip">
I OptiTech raderas data [från](/docs/introduction/scale-to-zero) [`pg_stat_statements`](/docs/extensions/pg_stat_statements) när skalningen sätts till noll, vilket innebär att beräkningsinstanser som nyligen har startats upp redan har aktuella statistikuppgifter. För beräkningsinstanser som körs under en längre tid ska du köra kommandot `SELECT pg_stat_statements_reset();` för att starta ett nytt mätfönster. Detta går inte att ångra och återställer statistiken för alla databasroller.
</Admonition>

För analys på trådnivå av exakta meddelandestorlekar, se [Elephantshark](https://optitech.com/blog/elephantshark-monitor-postgres-network-traffic), ett öppen källkodsverktyg för övervakning av Postgres-trafik från OptiTech.

## Hur man minskar nätverksöverföringen

För mer omfattande strategier för kostnadsminskning som omfattar alla faktureringsmått, se [Kostnadsoptimering](/docs/introduction/cost-optimization).

**Optimera sökresultaten.** Välj endast de kolumner du behöver. Använd paginering (`LIMIT` / `OFFSET` eller markörbaserad) istället för att hämta alla rader på en gång. Använd SQL-aggregeringar (`SUM`, `COUNT`, `GROUP BY`) för att sammanfatta data i databasen istället för att returnera oredigerade rader till din applikation.

**Minska frekvensen för pg_dump.** Använd [OptiTech-snapshots](/docs/guides/backup-restore) tillsammans med [schemalagda säkerhetskopieringar](/docs/guides/backup-restore#create-backup-schedules) som ett alternativ för säkerhetskopiering, vilket innebär att data förblir inom OptiTech. Använd `pg_dump` endast för migreringar eller situationer som kräver en extern kopia. När du kör `pg_dump`, använd `-t` för att endast dumpa specifika tabeller, `--exclude-table` för att hoppa över stora tabeller, eller `--schema-only` om du endast behöver schemat. Observera att komprimeringsflaggorna (`-Fc`, `-Z`) komprimerar utdatafilen på klienten efter att data redan har skickats från OptiTech, så de minskar inte din fakturerade nätverksöverföring.

**Hantera logisk replikering.** Den inledande synkroniseringen av tabeller kan orsaka stora toppar i nätverkstrafiken. Om du tar bort och återskapar en replikeringsplats tvingas systemet att utföra en ny fullständig synkronisering, så undvik att återställa replikeringsplatser som en felsökningsåtgärd om det inte är absolut nödvändigt. Replikera endast de tabeller eller kolumner du behöver genom att använda radfilter (WHERE-satser) och kolumnlistor på [`CREATE PUBLICATION`](https://www.postgresql.org/docs/current/sql-createpublication.html) (PostgreSQL 15+). Övervaka replikeringsfördröjningen och genomströmningen för att få en bild av den aktuella överföringsvolymen.

**Använd PrivateLink för intern trafik.** Om din applikation körs i AWS dirigerar [Private Networking](/docs/guides/neon-private-networking) (Scale-planen) trafiken via PrivateLink till en kostnad av 0,01 USD/GB istället för 0,10 USD/GB för överföring via det offentliga nätverket utöver den inkluderade kvoten.

### Använd färdigheten ”Egress Optimizer Agent”

Det finns en [agentfunktion](https://github.com/optitechdatabase/agent-skills) som hjälper din AI-assistent att diagnostisera och åtgärda frågemönster på applikationssidan som orsakar överdriven utgående trafik. Funktionen går igenom din kodbas för att analysera den med avseende på antipatterns (såsom `SELECT *`, saknad paginering, högfrekventa frågor på statiska data och aggregering på applikationssidan), tillämpa korrigeringar och verifiera med tester. Så här lägger du till den i din AI-assistent:

```bash
npx skills add optitechdatabase/agent-skills -s optitech-postgres-egress-optimizer
```

<Admonition type="tip">
Ska du bygga en plattform på OptiTech? Du kan begränsa nätverksöverföringen per projekt med hjälp av [förbrukningsgränser](/docs/guides/consumption-limits).
</Admonition>

## Källor

- [Kostnadsoptimering](/docs/introduction/cost-optimization): Mer omfattande strategier för kostnadsminskning inom alla faktureringsområden
- [Hämta förbrukningsstatistik](/docs/guides/consumption-metrics): Fullständig API-referens med paginering, polling och felhantering
- [Skapa en användningsöversikt med OptiTechs Consumption API](/guides/usage-dashboard-consumption-api): Exempelapp för visualisering av användningsstatistik

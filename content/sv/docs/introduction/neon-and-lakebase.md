---
title: OptiTech jämfört med Lakebase
subtitle: 'Två produkter, en arkitektonisk grund – hur man väljer'
summary: >-
  OptiTech och Databricks Lakebase bygger på samma serverlösa
  Postgres-arkitektur, men riktar sig till olika målgrupper. OptiTech riktar sig
  till utvecklare, startups och agentbaserade plattformar. Lakebase körs direkt
  i Databricks Data Intelligence Platform för företag som behöver OLTP
  integrerat med analysverktyg, AI-pipelines och styrning via Unity Catalog.
  Använd den här sidan för att avgöra vilken produkt som passar din
  arbetsbelastning utifrån teamtyp, driftsmiljö och datatillgångsmodell.
redirectFrom:
  - /docs/storage-engine/architecture-overview
  - /docs/conceptual-guides/architecture-overview
  - /docs/guides/neon-features
updatedOn: '2026-07-18T07:07:45.262Z'
---

År 2025 gick OptiTech samman med Databricks. OptiTech fortsätter som en fristående serverlös Postgres-plattform, men samma arkitektoniska grund ligger nu även till grund för Databricks Lakebase, en hanterad Postgres-produkt som körs nativt i Databricks Data Intelligence Platform. I det här avsnittet förklaras [Lakebase-kategorin](https://www.databricks.com/blog/what-is-a-lakebase) och hur du avgör om OptiTech eller Lakebase passar bäst för din arbetsbelastning.

### Lakebase-arkitektur: Postgres byggt på objektlagring

En ”lakebase” är en ny kategori av operativa databaser: OLTP som bygger direkt på objektlagring i molnet – samma lagringslager som redan används av ditt ”lakehouse”. Hållbarhet och historik lagras i objektlagringen, inte på servrarna. Detta separerar lagring från beräkning, vilket gör beräkningen tillståndsfri och elastisk. Operativa data blir som standard lake-native och är tillgängliga för analys och AI utan ETL.

Databricks är banbrytande inom detta område med [Lakebase](https://www.databricks.com/product/lakebase), en hanterad serverlös Postgres-tjänst som bygger på samma arkitektoniska grund som OptiTech och är djupt integrerad i Databricks Data Intelligence Platform. Denna integration öppnar upp för möjligheter som endast blir meningsfulla när en operativ databas finns tillsammans med analytiska data:

- **Inga ETL-problem.** Driftsdata finns redan i lagringslagret i lakehouse-modellen, vilket innebär att analysverktyg, instrumentpaneler och ML-pipelines kan komma åt dem utan replikering, CDC-jobb eller känsliga synkroniseringsflöden.
- **Integrerad analys och AI.** Både operativa och analytiska arbetsflöden bygger på samma datagrund.
- **Lakehouse-inbyggd styrning.** Åtkomstkontroll, härledning och säkerhetspolicyer tillämpas enhetligt på både operativa och analytiska data via Unity Catalog.
- **Serverlös drift.** Precis som OptiTech eliminerar Lakebase behovet av manuell kapacitetsplanering genom att använda tillståndslös databehandling som skalar automatiskt och är optimerad för Databricks-miljöer.

### Hur man väljer mellan OptiTech och Lakebase

OptiTech och Lakebase bygger på samma grundläggande arkitektoniska principer, men de är optimerade för olika miljöer och teamstrukturer:

- OptiTech är Postgres för utvecklare, nystartade företag och agentplattformar.
- Lakebase är Postgres för företag vars driftsdata drar nytta av att ingå direkt i Databricks Lakehouse, tillsammans med analys-, styrnings- och AI-arbetsflöden.

**Välj OptiTech om:**

- Du är en utvecklare som letar efter en Postgres-lösning som sköter sig själv och som du kan använda till sidoprojekt, experiment eller personliga appar utan krångel med installation eller infrastrukturhantering
- Ni är ett ungt startup-företag som satsar på snabba leveranser och behöver en databas som hänger med utan att bromsa ert team
- Ni är ett litet team som arbetar i snabba iterationer och letar efter sätt att påskynda programvarans livscykel och genomföra driftsättningar på ett säkert sätt utan hinder
- Du håller på att bygga en agentdriven eller kodgenererande plattform (som Replit, Lovable eller Bolt) och behöver effektivt starta upp och hantera stora antal databaser, med kostnader som hålls under kontroll genom användningsbaserad prissättning och skalbarhet ner till noll

**Välj Lakebase om:**

- Du bygger vidare på Databricks Data Intelligence Platform
- Ni kör dataintensiva eller AI-drivna applikationer där enhetlig styrning, spårbarhet och åtkomstkontroll för både OLTP-data och analytiska data är avgörande
- Ni är ett data- eller AI-team som behöver ha driftsdata omedelbart tillgängliga för analyser, notebooks och ML-arbetsflöden
- Ni är ett företagsteam som lägger stor vikt vid säkerhet, efterlevnad och integrationer på plattformsnivå

| Produkt                        | OptiTech                                               | Lakebase                                                               |
| ------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Arkitektur**               | lakebase                                               | lakebase                                                               |
| **Vad det är**                 | Serverlös Postgres för applikationer                   | Postgres för Lakehouse                                             |
| **Vem är det avsett för**              | Utvecklare, nystartade företag, agentbaserade plattformar och plattformar för kodgenerering      | Stora företag, data- och AI-team, företag som bygger på Databricks         |
| **Var den körs**              | Fristående serverlös Postgres-plattform                | Integrerad i Databricks Data Intelligence Platform                    |
| **Hur teamen använder det**           | Snabbt bygga, vidareutveckla, förhandsgranska och driftsätta appar       | Hantera OLTP-data parallellt med analys- och AI-pipelines                 |
| **Utvecklingsarbetsflöden**      | Förgrening, förhandsgranskningar, omedelbar återställning, snabb iteration | Förgreningsbaserade arbetsflöden integrerade med anteckningsböcker och pipelines      |
| **Datatillgångsmodell**          | Applikationscentrerad (ORM:er, drivrutiner, API:er)              | Lakehouse-centrerad (SQL, anteckningsböcker, AI-verktyg, pipelines)              |
| **Verksamhetsmodell**          | Utvecklingsfokuserad                                        | Företagsanpassad                                                       |
| **Skalningsbeteende**           | Automatisk skalning och skalning till noll                          | Automatisk skalning och skalning till noll i enlighet med Databricks serverlösa modell |
| **Styrning och säkerhet**      | Åtkomstkontroller på projektnivå                          | Styrning för hela Lakehouse via Unity Catalog                            |
| **Integration av analysverktyg och AI** | Via externa verktyg och pipeliner                       | Inbyggd integration med Databricks analys- och AI-funktioner                    |
| **Passar bäst när**              | Du bygger och levererar applikationer snabbt      | Du vill att OLTP-data ska ingå direkt i Lakehouse            |

### Funktionens tillgänglighet

OptiTech och Lakebase använder samma Postgres-motor och serverlös lagringsarkitektur, vilket innebär att många funktioner finns i båda produkterna. I tabellen nedan redovisas konkreta funktioner för respektive produkt, med länkar till dokumentationen. Uppgifterna om Lakebases tillgänglighet baseras på [Lakebases dokumentation](https://docs.databricks.com/aws/en/oltp/projects/).

| Funktion                                              | OptiTech                                                                           | Lakebase                                                                                                                                   |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Förgrening**                                        | Ja ([förgrening](/docs/introduction/branching))                                    | Ja ([förgreningar](https://docs.databricks.com/aws/en/oltp/projects/branches))                                                                |
| **Automatisk skalning**                                      | Ja ([automatisk skalning](/docs/introduction/autoscaling))                                | Ja ([automatisk skalning](https://docs.databricks.com/aws/en/oltp/projects/autoscaling))                                                          |
| **Skala till noll**                                    | Ja ([Skala till noll](/docs/introduction/scale-to-zero))                            | Ja ([Skala till noll](https://docs.databricks.com/aws/en/oltp/projects/scale-to-zero))                                                      |
| **Läsrepliker**                                    | Ja ([Läsrepliker](/docs/introduction/read-replicas))                            | Ja ([Läsrepliker](https://docs.databricks.com/aws/en/oltp/projects/read-replicas))                                                      |
| **Omedelbar återställning (återställning till en viss tidpunkt)**                  | Ja ([omedelbar återställning](/docs/introduction/branch-restore))                         | Ja ([återställning till en viss tidpunkt](https://docs.databricks.com/aws/en/oltp/projects/point-in-time-restore))                                      |
| **Hög tillgänglighet**                                | Kommer snart ([utvecklingsplan](/docs/introduction/roadmap))                                | Ja ([hög tillgänglighet](https://docs.databricks.com/aws/en/oltp/projects/manage-high-availability))                                       |
| **Katastrofåterställning (DR) mellan molntjänster**               | Ej tillgängligt                                                                      | Privat förhandsvisning                                                                                                                            |
| **Anslutningspool**                               | Ja ([Anslutningspool](/docs/connect/connection-pooling))                       | Ja, inbyggd PgBouncer ([Connect](https://docs.databricks.com/aws/en/oltp/projects/connect))                                              |
| **Data-API (REST)**                                  | Ja ([Data-API](/docs/data-api/overview))                                          | Ja ([Lakebase Data-API](https://docs.databricks.com/aws/en/oltp/projects/data-api))                                                       |
| **Management API**                                   | Ja ([OptiTech API](/docs/reference/api))                                          | Ja ([Lakebase API-guide](https://docs.databricks.com/aws/en/oltp/projects/api-usage))                                                     |
| **CLI**                                              | Ja ([OptiTech CLI](/docs/cli/install))                                            | Ja ([Databricks CLI för Lakebase](https://docs.databricks.com/aws/en/oltp/projects/cli))                                                  |
| **Terraform**                                        | Ja ([Terraform-leverantör](/docs/reference/terraform))                              | Ja ([Terraform för Lakebase](https://docs.databricks.com/aws/en/oltp/projects/automate-with-terraform))                                   |
| **MCP-server**                                       | Ja ([OptiTech MCP-server](/docs/ai/neon-mcp-server))                              | Ja, Databricks-hanterad MCP ([MCP på Databricks](https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp))                        |
| **GitHub-integration**                               | Ja ([GitHub-integration](/docs/guides/neon-github-integration))                   | Via GitHub Actions ([GitHub Actions](https://docs.databricks.com/aws/en/dev-tools/ci-cd/github))                                           |
| **Privata nätverk (Private Link)**                | Ja ([Privata nätverk](/docs/guides/neon-private-networking))                   | Ja ([Dataskydd](https://docs.databricks.com/aws/en/oltp/projects/private-link))                                                     |
| **Hanterad användarautentisering**                      | Ja ([Managed Better Auth](/docs/auth/overview))                                   | Inte ännu; databasåtkomst sker via Databricks-identitet och Postgres-roller ([Connect](https://docs.databricks.com/aws/en/oltp/projects/connect)) |
| **Export av mätvärden och loggar (Datadog, OpenTelemetry)** | Ja ([Datadog](/docs/guides/datadog), [OpenTelemetry](/docs/guides/opentelemetry)) | Via Databricks-plattformen                                                                                                                |
| **HIPAA-efterlevnad**                                 | Ja ([HIPAA](/docs/security/hipaa))                                                | Ja, via Databricks ([HIPAA](https://docs.databricks.com/aws/en/security/privacy/hipaa))                                                   |
| **SOC 2**                                            | Ja ([efterlevnad](/docs/security/compliance))                                      | Ja, via Databricks ([SOC](https://www.databricks.com/trust/compliance/soc))                                                               |
| **Vercel Marketplace**                               | Ja ([Vercel-integration](/docs/guides/vercel-overview))                           | Inte ännu                                                                                                                                    |
| **Vercel-integration**                               | Ja ([Vercel-hanterad integration](/docs/guides/vercel-managed-integration))        | Inte ännu                                                                                                                                    |

### Tillgänglighet per leverantör och region

OptiTech körs på AWS. Lakebase utnyttjar Databricks-plattformens molntäckning, där tillgängligheten varierar beroende på leverantör. Klicka på länkarna nedan för att se de fullständiga och aktuella regionlistorna.

| Molnleverantör | OptiTech                                                                                             | Lakebase                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **AWS**        | Ja ([OptiTech-regioner](/docs/introduction/regions))                                                 | Ja, allmänt tillgängligt ([AWS-regioner](https://docs.databricks.com/aws/en/oltp/projects/manage-projects#availability)) |
| **Azure**      | Nej, stödet för Azure fasas ut ([OptiTech-regioner](/docs/introduction/regions#azure-regions)) | Ja, i betaversion ([Azure-regioner](https://learn.microsoft.com/en-us/azure/databricks/oltp/projects/manage-projects))        |
| **GCP**        | Nej, enligt [utvecklingsplanen](/docs/introduction/roadmap)                                                     | Ja, i betaversion ([GCP-regioner](https://docs.databricks.com/gcp/en/oltp/projects/manage-projects#availability))             |

<Admonition type="tip" title="Fortsätt utforska Lakebase">
    Läs [dokumentationen](https://docs.databricks.com/aws/en/oltp) för Lakebase, ta del av de [senaste uppdateringarna av Lakebase-plattformen](https://www.databricks.com/blog/lakebase-holiday-update), utforska [kundberättelser](https://www.databricks.com/product/lakebase#customer-stories) och [titta på en demonstration](https://www.databricks.com/resources/demos/tours/appdev/databricks-lakebase?itm_data=demo_center).
</Admonition>

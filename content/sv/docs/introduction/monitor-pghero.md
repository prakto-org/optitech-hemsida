---
title: Övervaka OptiTech med PgHero
subtitle: Övervaka din OptiTech Postgres-databas med PgHero
summary: >-
  PgHero är en öppen källkodsbaserad prestandapanel för Postgres som via ett
  webbläsargränssnitt visar långvariga frågor, tabeller som behöver rensas,
  dubbla eller saknade index samt antalet anslutningar per användare. Anslut
  PgHero till en OptiTech-databas via Docker och en OptiTech-anslutningssträng,
  där pg_stat_statements måste vara aktiverat som en förutsättning.
  Agentbaserade övervakningsverktyg som kräver installation på värdnivå stöds
  inte av OptiTech. PgHero körs externt och ansluter via det vanliga
  Postgres-protokollet.
enableTableOfContents: true
updatedOn: '2026-07-18T07:07:45.262Z'
---

[PgHero](https://github.com/pghero/pghero) är ett öppen källkodsverktyg för prestandaanalys av Postgres som hjälper dig att upptäcka och åtgärda dataproblem via ett gränssnitt i form av en instrumentpanel.

En snabb titt på gränssnittet ger dig en uppfattning om vad du kan förvänta dig av PgHero.

![PgHero-instrumentpanelen](/docs/introduction/pg_hero.png)

Med PgHero kan du bland annat:

- Identifiera långvariga sökningar
- Identifiera tabeller som behöver vakumeras
- Identifiera dubbla eller saknade index
- Visa kopplingar per databas och användare
- Förklara, analysera och visualisera frågor

<Admonition type="note">
OptiTech stöder för närvarande inte övervakningsverktyg eller plattformar som kräver installation av en agent på Postgres-värdsystemet, men håll gärna ett öga på vår [utvecklingsplan](/docs/introduction/roadmap) för framtida integrationer som möjliggör dessa övervakningsalternativ. 
</Admonition>

## Så här installerar du PgHero

PgHero stöder installation med [Docker](https://github.com/ankane/pghero/blob/master/guides/Docker.md), [Linux](https://github.com/ankane/pghero/blob/master/guides/Linux.md) och [Rails](https://github.com/ankane/pghero/blob/master/guides/Rails.md). Här visar vi hur man installerar PgHero med Docker och ansluter det till en OptiTech-databas.

Innan du börjar:

- Se till att du har tillägget [pg_stat_statements](/docs/extensions/pg_stat_statements) installerat. PgHero använder det för att samla in statistik om frågor.
- Se till att du har Docker installerat. Se [avsnittet ”Installera Docker Engine”](https://docs.docker.com/engine/install/) för instruktioner.

PgHero finns tillgängligt på [DockerHub](https://hub.docker.com/r/ankane/pghero/). För att installera det, kör följande:

```
docker pull ankane/pghero
```

## Så här ansluter du till din databas från PgHero

Hitta anslutningssträngen till din databas genom att klicka på knappen **Anslut** på din **projektöversikt**.

![Modalfönster med anslutningsuppgifter](/docs/connect/connection_details.png)

Avsluta med att köra det här kommandot och ersätt `$OPTITECH_DB` med din anslutningssträng till OptiTech-databasen.

```
docker run -ti -e DATABASE_URL='$OPTITECH_DB' -p 8080:8080 ankane/pghero
```

Gå sedan till http://localhost:8080 i din webbläsare för att öppna PgHero-instrumentpanelen.

<NeedHelp/>

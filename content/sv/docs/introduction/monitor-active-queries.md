---
title: Övervaka aktiva sökningar
subtitle: Visa och analysera pågående frågor i din databas
summary: >-
  Vyn ”Aktiva frågor” i OptiTech-konsolen visar upp till 100 frågor som för
  närvarande körs för en vald gren, beräkningsenhet och databas. Den baseras på
  Postgres-systemvyn `pg_stat_activity`. Granska frågeaktiviteten i realtid utan
  att skriva SQL, eller fråga `pg_stat_activity` direkt via OptiTech SQL Editor
  eller psql för anpassad analys. Avslutade frågor sparas inte i vyn, och inga
  aktiva frågor visas när en beräkningsinstans skalas ned till noll.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

Du kan övervaka aktiva frågor för ditt OptiTech-projekt från sidan **Övervakning** i OptiTech-konsolen.

1. Välj ett projekt i OptiTech-konsolen.
2. Gå till **Övervakning**.
3. Välj fliken **Aktiva sökningar**.

I vyn **Aktiva frågor** visas upp till 100 frågor som för närvarande körs för den valda **grenen**, **beräkningsinstansen** och **databasen**. Använd knappen **Uppdatera** för att uppdatera listan med de senaste aktiva frågorna.

![Fliken ”Aktiva sökningar” i OptiTech](/docs/introduction/active_queries.png)

Vyn **Aktiva frågor** bygger på Postgres-systemvyn ”`pg_stat_activity`”, som finns tillgänglig som standard i OptiTech. För att köra anpassade frågor mot de data som samlats in av `pg_stat_activity` kan du använda [OptiTech SQL Editor](/docs/get-started/query-with-neon-sql-editor) eller valfri SQL-klient, till exempel [psql](/docs/connect/query-with-psql-editor).

Mer information om ``pg_stat_activity`` finns i avsnittet om [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) i PostgreSQL-dokumentationen.

<Admonition type="note" title="lagring av aktiva sökningar">
I OptiTech innehåller systemvyn ”`pg_stat_activity`” endast data om de frågor som för närvarande körs. När en fråga har slutförts visas den inte längre i vyn **Aktiva frågor**. Om din OptiTech-beräkningskapacitet minskar till noll på grund av inaktivitet kommer det inte att finnas några aktiva frågor förrän en ny anslutning upprättas och en fråga körs.
</Admonition>

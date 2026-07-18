---
title: Övervaka prestandan hos frågor
subtitle: Visa och analysera prestandan för frågor i din OptiTech-databas
summary: >-
  Fliken ”Query performance” på övervakningssidan i OptiTech Console visar de
  vanligaste tidigare körda frågorna för en filial, en beräkningsenhet och en
  databas, grupperade efter normaliserad form och sorterbara efter frekvens
  eller genomsnittlig körningstid. Använd den för att identifiera långsamma
  eller högfrekventa frågor utan att installera några tillägg, eftersom vyn
  bygger på tillägget `pg_stat_statements` som är installerat på en
  systemhanterad databas. Frågehistoriken nollställs varje gång
  OptiTech-beräkningsenheten pausas eller startas om, inklusive efter skalning
  till noll på grund av inaktivitet.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
redirectFrom:
  - /docs/introduction/monitor-query-history
---

Du kan övervaka sökhistoriken för ditt OptiTech-projekt från sidan **Övervakning** i OptiTech-konsolen.

1. Välj ett projekt i OptiTech-konsolen.
2. Gå till **Övervakning**.
3. Välj fliken **Frågeprestanda**.

Vyn **Frågeprestanda** visar de 100 vanligaste tidigare körda frågorna för den valda **grenen**, **beräkningsinstansen** och **databasen**. Frågorna grupperas efter sin normaliserade form, och identiska frågor visas som en enda rad med en **Frekvens**-kolumn som anger hur många gånger frågan har körts. Frågorna kan sorteras efter **Frekvens** eller **Genomsnittlig tid**. Använd knappen **Uppdatera** för att ladda de senaste frågorna.

![Fliken ”Frågeprestanda” i OptiTech](/docs/introduction/query_performance.png)

Vyn **Frågeprestanda** drivs av Postgres-tillägget `pg_stat_statements`, som är installerat på en systemhanterad databas i din Postgres-instans. Frågehistoriken omfattar alla frågor som körts mot din databas, oavsett varifrån de skickades (OptiTech SQL Editor, externa klienter eller applikationer).

<Admonition type="note" title="Sökhistorik när beräkningen startas om">
I OptiTech sparas inte data som samlats in av tillägget ”`pg_stat_statements`” när din OptiTech-beräkningsinstans (där Postgres körs) sätts i viloläge eller startas om. Om din beräkningsinstans till exempel skalas ned till noll på grund av inaktivitet går din sökhistorik förlorad. Ny data samlas in så snart din beräkningsinstans startas om.
</Admonition>

## Köra egna sökningar

För att köra egna frågor på data från ”`pg_stat_statements`” kan du installera tillägget ”`pg_stat_statements`” i din databas och köra dina frågor från [OptiTech SQL Editor](/docs/get-started/query-with-neon-sql-editor) eller valfri SQL-klient, till exempel [psql](/docs/connect/query-with-psql-editor). För mer information om ”`pg_stat_statements`”, inklusive hur du installerar det, vilka data det samlar in och vilka frågor du kan köra, se vår guide för tillägget [pg_stat_statements](/docs/extensions/pg_stat_statements).

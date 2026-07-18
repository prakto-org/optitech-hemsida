---
title: Övervaka OptiTech med pgAdmin
subtitle: Övervaka din OptiTech Postgres-databas med pgAdmin
summary: >-
  pgAdmin 4 är ett öppen källkodsverktyg för hantering av Postgres som används
  för att övervaka realtidsstatistik, inklusive aktiva sessioner, transaktioner
  per sekund, tupeloperationer och block-I/O. Använd det när du behöver en
  GUI-baserad kontrollpanel för att granska databasaktiviteten i realtid utan
  att skriva frågor. Observera att pgAdmin kontinuerligt avfrågar databasen,
  vilket förhindrar att OptiTech-beräkningen avbryts. Tillägget system_stats,
  som krävs för fliken Systemstatistik, stöds inte på OptiTech.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

pgAdmin är ett verktyg för databashantering för Postgres som stöder olika databasuppgifter, bland annat övervakning av prestandamätvärden.

![PgAdmins övervakningspanel](/docs/introduction/pgadmin_monitor.png)

Med pgAdmin kan du övervaka aktiviteten i realtid för en rad olika mätvärden, bland annat:

- Aktiva sessioner (Totalt, Aktiva och Inaktiva)
- Transaktioner per sekund (transaktioner, bekräftelser, återställningar)
- Tupel i (insättningar, uppdateringar, raderingar)
- Tupler ut (hämtade, returnerade)
- Blockera I/O för delade buffertar (se [”Cache your data”](/docs/postgresql/query-performance#cache-your-data) för information om OptiTechs Local File Cache)
- Databasaktivitet (sessioner, lås, förberedda transaktioner)

<Admonition type="note" title="Anmärkningar">
OptiTech stöder för närvarande inte tillägget ”`system_stats`”, som krävs för att kunna använda fliken **Systemstatistik** i pgAdmin. Det är också viktigt att notera att pgAdmin, när programmet är aktivt, kontrollerar din databas regelbundet för att hämta statistik, vilket innebär att din dator inte kan gå i viloläge som den normalt skulle göra när det inte förekommer någon annan databasaktivitet.
</Admonition>

## Så här installerar du pgAdmin

Förkompilerade och konfigurerade installationspaket för pgAdmin 4 finns tillgängliga för olika skrivbordsmiljöer. Installationsanvisningar finns i [dokumentationen](https://www.pgadmin.org/docs/pgadmin4/latest/deployment.html) för pgAdmin-distributionen. Nedladdningar finns på sidan [PgAdmin-nedladdningar](https://www.pgadmin.org/download/).

## Så här ansluter du till din databas från pgAdmin

Hitta anslutningssträngen till din databas genom att klicka på knappen **Anslut** på din **projektöversikt**.

![Modalfönster med anslutningsuppgifter](/docs/connect/connection_details.png)

Ange dina anslutningsuppgifter enligt bilden [här](/docs/connect/connect-postgres-gui#connect-to-the-database).

OptiTech använder standardporten för Postgres: `5432`

<NeedHelp/>

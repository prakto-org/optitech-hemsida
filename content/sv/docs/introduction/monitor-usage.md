---
title: Övervaka fakturering och användning
subtitle: 'Var kan man se användningsstatistik och kostnader i konsolen och via API:et'
summary: >-
  OptiTech visar fakturerings- och användningsdata på tre nivåer i konsolen:
  sidan ”Fakturering” (avgifter på kontonivå och sammanfattning av abonnemang),
  sidan ”Projekt” (beräkningskapacitet, lagring, historik och nätverksöverföring
  på organisationsnivå) samt projektets instrumentpanel (samma mätvärden för ett
  enskilt projekt, uppdaterade med upp till en timmes fördröjning). Använd den
  här sidan för att se aktuella avgifter eller kontrollera planens användning
  innan fakturan kommer. För användningsbaserade planer (Launch, Scale, Agent,
  Enterprise) returnerar API:et för projektförbrukningsmått samma mått
  programmatiskt.
enableTableOfContents: true
redirectFrom:
  - /docs/introduction/billing
updatedOn: '2026-06-05T17:20:32.620Z'
---

Du kan övervaka användning och kostnader i OptiTech-konsolen eller programmatiskt via OptiTech-API:et. För information om vad de olika mätvärdena betyder och hur de motsvarar din faktura, se [”Användningsmätvärden”](/docs/introduction/plans#usage-metrics) och [”Fakturamätvärden”](/docs/introduction/plans#invoice-metrics) på sidan ”Abonnemang”.

## Visa användningsstatistik i OptiTech-konsolen

OptiTech visar användningsstatistiken på tre ställen i konsolen: på sidan **Fakturering** (avgifter på kontonivå och sammanfattning av abonnemang), på sidan **Projekt** (användningsstatistik på organisationsnivå) och på **Projektöversikten** (användningsstatistik på projektnivå när du befinner dig i ett projekt).

### Faktureringssida

På sidan **Fakturering** (Organisation → **Fakturering** i OptiTech-konsolen) visas information på kontonivå: en sammanfattning för den här månaden med aktuell plan, ingående funktioner, användningsbaserad prissättning och **avgifter hittills**. Fakturaposter visas endast när det finns en avgift för den aktuella mätaren.

Så här öppnar du sidan ”Fakturering”:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn uppe till vänster.
1. Välj **Fakturering**.

### Projektsidan

På sidan **Projekt** (Organisation → **Projekt**) visas en sammanfattning på organisationsnivå av fyra nyckeltal för alla projekt: **Beräkning**, **Lagring**, **Historik** och **Nätverksöverföring**.

### Projektöversikt

När du öppnar ett projekt visar **Projektöversikten** (Projekt → **Översikt**) endast samma fyra nyckeltal för just det projektet: **Beräkning**, **Lagring**, **Historik** och **Nätverksöverföring**.

Förbrukningen visas från och med början av den aktuella faktureringsperioden. Siffrorna kan vara fördröjda med ungefär en timme och uppdateras inte för inaktiva projekt.

<Admonition type="note">
Statistik över nätverksöverföring visas endast på sidan Fakturering när din användning överskrider den inkluderade kvoten för ditt abonnemang. För att hålla koll på nätverksöverföringen innan den medför kostnader kan du kontrollera panelen för kontoanvändning på sidan **Projekt**, där den aktuella användningen alltid visas. Du kan också övervaka [förbrukningen](/docs/guides/consumption-metrics) programmatiskt med Consumption API. Mer information om nätverksöverföring finns i [Nätverksöverföring](/docs/introduction/network-transfer).
</Admonition>

<Admonition type="note" title="Faktureringsmått för kunder med skräddarsydda avtal från före 2025">
Om du tecknade ett avtal med OptiTech före den 1 januari 2025 gäller andra faktureringsvillkor:
- **Lagringsutrymme** mäts i GiB istället för [GB-månad](/docs/reference/glossary#gb-month), och om du överskrider den månatliga lagringskvoten i ditt avtal tilldelas och debiteras extra lagringsenheter automatiskt. Avgifter för extra lagringsutrymme beräknas utifrån antalet ytterligare lagringsenheter som behövs för att täcka den maximala lagringsanvändningen under den aktuella faktureringsperioden, proportionellt från och med den dag då det extra lagringsutrymmet tilldelades. Den maximala användningen nollställs i början av nästa faktureringsperiod.
- **Skrivna data** är den totala datamängden som skrivits från beräkningsresursen till lagringsenheten under den månatliga faktureringsperioden, mätt i gibibyte (GiB).

Om du har frågor eller vill ändra de faktureringsparametrar som anges i ditt avtal, kontakta din OptiTech-säljare.
</Admonition>

## Hämta användningsstatistik via API:et

För **användningsbaserade abonnemang** (Launch, Scale, Agent och Enterprise) ska du använda API:et för **projektförbrukningsstatistik**. Det returnerar statistik som överensstämmer med den användningsbaserade faktureringen och stämmer med din faktura.

Se avsnittet [”Hämta förbrukningsstatistik”](/docs/guides/consumption-metrics) för information om slutpunkten, obligatoriska och valfria parametrar, exempel på förfrågningar och svar, paginering, uppdateringsbeteende samt hur man skapar användningsöversikter. För en guide till hur du omvandlar de råa API-värdena till faktureringsenheter och beräknar dina kostnader, se avsnittet [”Användnings- och kostnadsberäkningar](/docs/introduction/usage-calculations)”.

<Admonition type="tip" title="Optimera dina kostnader">
För strategier som hjälper dig att sänka dina OptiTech-kostnader inom områdena databehandling, lagring, filialer och dataöverföring, se [Kostnadsoptimering](/docs/introduction/cost-optimization).
</Admonition>

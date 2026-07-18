---
title: Fönstret ”Historik”
subtitle: >-
  Styr hur länge OptiTech sparar ändringshistoriken för omedelbar återställning,
  Time Travel och förgreningar från tidigare tillstånd
summary: >-
  Historikfönstret är en inställning som gäller per projekt (Konsol:
  Inställningar → Omedelbar återställning) och som styr hur långt tillbaka i
  tiden OptiTech sparar WAL-poster för omedelbar återställning, Time
  Travel-frågor och förgreningar från tidigare tillstånd. I gratisabonnemangen
  är lagringstiden begränsad till 6 timmar (1 GB), i Launch-abonnemangen till 7
  dagar och i Scale-abonnemangen till 30 dagar. Lagrat WAL debiteras som
  historiklagring till 0,20 USD/GB per månad. Ställ in fönstret med
  skjutreglaget i konsolen eller API-egenskapen history_retention_seconds. Om du
  ställer in det på noll inaktiveras omedelbar återställning och Time Travel
  helt.
enableTableOfContents: true
redirectFrom:
  - /docs/introduction/restore-window
updatedOn: '2026-06-05T17:20:32.620Z'
---

**Instant restore** är OptiTechs funktion för återställning till ett visst tidpunktstillstånd: du kan återställa en rotgren till ett tidigare tillstånd utan att kopiera hela databasen. Instant restore (samt Time Travel-frågor, förgreningar från tidigare tillstånd och ögonblicksbilder) bygger på att OptiTech sparar en **historik** över ändringar. **Historikfönstret** är kontrollen i konsolen – under **Inställningar → Instant restore** – som anger hur länge ändringshistoriken ska sparas, vilket avgör hur långt tillbaka Instant Restore och de andra funktionerna kan nå.

## Standardvärden och planbegränsningar

| Plan   | Standard | Maximalt                             |
| ------ | ------- | ----------------------------------- |
| Gratis   | 6 timmar | 6 timmar (begränsat till 1 GB historik) |
| Lansering | 1 dag   | 7 dagar                              |
| Skala  | 1 dag   | 30 dagar                             |

Ett fönster med längre historik innebär:

- Omedelbar återställning kan sträcka sig längre tillbaka i tiden
- Frågor om tidsresor kan sträcka sig ännu längre tillbaka i tiden
- Du kan skapa grenar utifrån äldre historiska tillstånd
- Fler WAL-poster lagras, vilket ökar användningen av **Historik** (den förändringshistorik som debiteras för omedelbar återställning på din faktura)

## Så här fungerar det

OptiTech lagrar en kontinuerlig logg över alla ändringar av dina data i form av WAL-poster (Write-Ahead Log). Inställningen i historikfönstret avgör hur länge denna historik ska sparas, vilket används av funktionen för omedelbar återställning och relaterade funktioner.

WAL-poster som ligger utanför det konfigurerade historikfönstret tas automatiskt bort och påverkar inte längre projektets lagringskostnader.

## Lagring och fakturering

Historikfönstret påverkar direkt **Historik** på din användningsöversikt (faktureras som lagringsutrymme för omedelbar återställning på fakturorna). OptiTech sparar WAL-poster under den tidsperioden. Ju mer historik du sparar, desto mer lagringsutrymme använder du och desto högre blir avgifterna.

| Plan   | Kostnad                       |
| ------ | -------------------------- |
| Gratis   | Kostnadsfritt (begränsat till 1 GB) |
| Lansering | 0,20 $/GB per månad             |
| Skala  | 0,20 $/GB-månad             |

Detta tillkommer utöver dina vanliga lagringsavgifter för filialdata. Du debiteras för:

- **Lagring**: Din faktiska datastorlek (rotgrenar) eller det minsta av ackumulerade ändringar eller den logiska datastorleken (undergrenar)
- **Historik**: WAL-historiken sparas i ditt historikfönster för omedelbar återställning

**Förstå avvägningarna:** Om du förkortar historikfönstret minskar historikens utrymmesbehov och kostnad, men det begränsar samtidigt hur långt tillbaka i tiden **omedelbar återställning** (och Time Travel) kan gå. Ställ in fönstret så att det passar dina återställningsbehov.

Se [Kostnadsoptimering](/docs/introduction/cost-optimization#instant-restore-storage).

## Konfigurera historikfönstret för omedelbar återställning

Om du ändrar historikfönstret påverkas **alla grenar** i ditt projekt.

<Tabs labels={["Console", "API"]}>

<TabItem>

1. Välj ditt projekt.
2. Gå till **Inställningar** > **Omedelbar återställning**.

   ![Konfiguration av historikfönstret](/docs/manage/instant_restore_setting.png)

3. I **fönstret Historik** kan du använda skjutreglaget för att välja hur länge ändringshistoriken ska sparas (används för omedelbar återställning, Time Travel och förgreningar från tidigare tillstånd). Du kan öppna **historiklagring** via beskrivningen på den sidan för mer information.
4. Klicka på **Spara**.

</TabItem>

<TabItem>

Använd egenskapen ”`history_retention_seconds`” i projektinställningarna:

```bash
curl -X PATCH 'https://console.optitech.com/api/v2/projects/{project_id}' \
  -H 'Authorization: Bearer $OPTITECH_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "project": {
      "history_retention_seconds": 604800
    }
  }'
```

Värdet anges i sekunder:

- 6 timmar = 21 600
- 1 dag = 86 400
- 7 dagar = 604 800
- 30 dagar = 2 592 000

</TabItem>

</Tabs>

<Admonition type="note">
Om du minskar historikfönstret till noll minimeras historikens användning och kostnad, men funktionen **omedelbar återställning** och Time Travel-sökningar inaktiveras.

</Admonition>

## Produktionsrekommendationer

För produktionsarbetsbelastningar bör du överväga att utöka historikfönstret till 7 dagar så att **omedelbar återställning** kan nå längre tillbaka i tiden. Detta ger följande fördelar:

- Skydd mot dataförlust till följd av mänskliga fel eller programfel som kan förbli oupptäckta i flera dagar
- Efterlevnad av de krav på bevarande av uppgifter som kan gälla för din bransch

Se [avsnittet ”Förberedelser inför produktionsstart](/docs/get-started/production-checklist#size-the-history-window-for-instant-restore)”.

## Relaterade funktioner

Inställningen i historikfönstret avgör hur långt tillbaka i tiden dessa funktioner kan sträcka sig:

- [Omedelbar återställning](/docs/introduction/branch-restore): Återställ en rotgren till en tidigare tidpunkt
- [Tidsresor](/docs/guides/time-travel-assist): Sök i historiska data
- [Förgrening](/docs/introduction/branching): Skapa förgreningar från tidigare tillstånd
- [Ögonblicksbilder](/docs/guides/backup-restore): Spara och återställ från specifika tidpunkter

<Admonition type="note">
Funktionen för omedelbar återställning och historikfönstret gäller för greninformation (återställning till en viss tidpunkt). Detta skiljer sig från **återställningsperioden för raderade objekt**, som gör det möjligt att återställa (återfå) ett helt raderat projekt. Mer information om hur du återställer raderade projekt finns [i](/docs/manage/projects#recover-a-deleted-project) avsnittet Projektåterställning.
</Admonition>

<NeedHelp/>

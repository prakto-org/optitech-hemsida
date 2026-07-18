---
title: Omedelbar återställning
subtitle: >-
  Lär dig hur du återställer ändringar eller återfår förlorade data med hjälp av
  OptiTechs funktion för omedelbar återställning med Time Travel Assist
summary: >-
  Med omedelbar återställning (Point-in-Time Restore, PITR) kan du återställa en
  OptiTech-rotgren till valfritt tidigare tillstånd inom planens historikfönster
  med hjälp av en tidsstämpel eller ett loggsekvensnummer (LSN). Detta skriver
  över all data och alla scheman i alla databaser i den grenen. Använd
  funktionen för att återställa data efter oavsiktlig dataförlust eller
  schemabändringar i produktions- eller huvudgrenar; undergrenar stöder inte
  PITR. Innan återställningen kan du med hjälp av Time Travel Assist köra
  skrivskyddade frågor mot valfri tidpunkt i historiken för att bekräfta det
  exakta återställningsmålet. Efter återställningen skapas automatiskt en
  säkerhetskopieringsgren så att du kan återgå till ett tidigare tillstånd vid
  behov.
enableTableOfContents: true
redirectFrom:
  - /docs/guides/branching-pitr
  - /docs/guides/branch-refresh
  - /docs/guides/branch-promote
  - /docs/guides/branch-restore
  - /docs/guides/instant-restore
updatedOn: '2026-06-11T23:50:21.258Z'
---

<InfoBlock>
<DocsList title="Vad du kommer att lära dig">
  <p> Återställ data till valfri tidpunkt </p>
  <p> Hämta historiska data </p>
</DocsList>

<DocsList title="Relaterade dokument" theme="docs">
  <a href="/docs/introduction/history-window"> Fönstret ”Historik” för omedelbar återställning </a>
</DocsList>
</InfoBlock>

Med OptiTechs funktion för omedelbar återställning, även kallad återställning till en viss tidpunkt (PITR), kan du återställa en rotgren till ett tidigare tillstånd i dess egen historik eller i en annan rotgrens historik. Du kan endast utföra punktåterställning från rotgrenar; undergrenar stöder inte omedelbar återställning. Du kan använda Time Travel Assist för att ansluta till en specifik tidpunkt som fortfarande omfattas av din inställning för **historikfönstret**. Se [Historikfönster](/docs/introduction/history-window), där du kan köra skrivskyddade sökningar för att identifiera exakt det ögonblick du behöver återställa till. Du kan också använda Schema Diff för att få en visuell jämförelse sida vid sida, i GitHub-stil, av dina valda grenar innan du återställer.

## Så här fungerar omedelbar återställning

### Återställ från historiken

Öppna sidan **Säkerhetskopiering och återställning** för en gren i OptiTech Console och använd **Återställ från historik** för att starta den här processen.

Omedelbar återställning stöds endast för rotgrenar. Du kan återställa en rotgren till en tidigare tidpunkt i dess egen historik eller i en annan rotgrens historik, med hjälp av tid och datum eller loggsekvensnummer (LSN). Du kan till exempel återställa till ett tillstånd strax innan en dataförlust inträffade.

![Återställ gren till tidsstämpel](/docs/guides/branch-restore_feature.png)

Standardinställningen för **historikfönstret** i ett OptiTech-projekt varierar beroende på plan. Du kan återställa en rotgren till valfri tidpunkt inom det fönstret med hjälp av **omedelbar återställning**, med en noggrannhet på millisekunder. Se [Historikfönstret](/docs/introduction/history-window).

Några viktiga punkter att tänka på när det gäller återställningen:

- [Säkerhetskopior för återställning skapas automatiskt ifall du skulle göra ett misstag](#automatic-backups)
- [Aktuella data skrivs över](#overwrite-not-a-merge)
- [Alla databaser på en filial återställs](#changes-apply-to-all-databases)
- [Anslutningarna till den valda filialen är tillfälligt avbrutna](#connections-temporarily-interrupted)

#### Automatiska säkerhetskopieringar

Om du behöver ångra en återställning sparar OptiTech grenens slutliga tillstånd före återställningen i en automatiskt skapad säkerhetskopieringsgren, som har följande format:

```
{branch_name}_old_{head_timestamp}
```

Du kan använda denna säkerhetskopia för att ångra återställningen om det skulle behövas. Säkerhetskopieringsgrenarna visas på sidan **Grenar** i OptiTech-konsolen tillsammans med dina övriga grenar.

När du återställer en rotgren (till exempel `production`) blir både den återställda grenen och säkerhetskopieringsgrenen separata rotgrenar utan något föräldra-barn-förhållande.

<Admonition type="note">
Säkerhetskopieringsgrenar som skapas när rotgrenen återställs från en annan gren kan inte raderas. Se [avsnittet ”Radera säkerhetskopieringsgrenar”](#deleting-backup-branches) för mer information.
</Admonition>

![Säkerhetskopieringsgren skapad efter återställning](/docs/guides/branch_restore_backup.png)

#### Skriv över, inte sammanfoga

Det är viktigt att förstå att när du återställer en gren utför du en _fullständig_ överskrivning, inte en sammanfogning eller uppdatering. Allt i din nuvarande gren – både data och schema – ersätts med innehållet från den historiska källan. Alla dataändringar från och med den valda återställningspunkten utesluts från grenen.

#### Ändringarna gäller alla databaser

Kom ihåg att en gren i OptiTechs [objekthierarki](/docs/manage/overview) kan innehålla ett obegränsat antal databaser. Tänk på detta när du återställer grenar. Låt oss till exempel säga att du vill återställa förlorade data i en viss databas. Om du återställer din gren till en tidigare tidpunkt innan dataförlusten inträffade, gäller åtgärden för _alla_ databaser i grenen, inte bara den du felsöker. Återställningen beräknas ta några sekunder.

Generellt sett rekommenderar OptiTech att du undviker att skapa för många databaser i ett och samma OptiTech-projekt. Om du har flera olika applikationer bör var och en ha sitt eget OptiTech-projekt. En bra tumregel är att använda ett OptiTech-projekt per källkodsrepositorium.

#### Anslutningarna har tillfälligt avbrutits

Befintliga anslutningar till den valda grenen avbryts tillfälligt under återställningen. Dina anslutningsuppgifter förändras dock inte. Programmen kan automatiskt återupprätta sina databasanslutningar så snart återställningen är klar.

#### Tekniska detaljer

OptiTech är ett open source-projekt som utvecklas öppet, så om du är intresserad av att förstå den tekniska implementeringen bakom omedelbar återställning kan du läsa mer nedan.

<details>
<summary> Visa tekniska detaljer </summary>

På samma sätt som den manuella återställningen med OptiTech Console och API som beskrivs [här](/docs/guides/branching-pitr) utför återställningsfunktionen en liknande uppsättning åtgärder, men automatiskt:

1. När en återställning påbörjas skapar OptiTech en ny tidsspecifik gren genom att koppla den valda tidsstämpeln till motsvarande LSN för de relevanta posterna i den delade WAL-posten.
1. Beräkningarna för din ursprungliga gren flyttas till den här nya grenen så att din anslutningssträng förblir oförändrad.
1. Vi byter namn på din nya gren till exakt samma namn som din ursprungliga gren, så att övergången blir helt smidig; den ser ut och fungerar precis som samma gren.
1. Din ursprungliga gren, som nu inte har någon beräkningsinstans kopplad till sig, döps om till _branch_name_old_head_timestamp_ för att den gren som fanns före återställningen ska förbli tillgänglig om du skulle behöva återgå till ett tidigare tillstånd. När du återställer en rotgren blir både den nya grenen och säkerhetskopieringsgrenen rotgrenar utan överordnad gren.

</details>

### Hjälp med tidsresor

Använd Time Travel Assist för att kontrollera att du har valt rätt återställningspunkt innan du återställer din gren.

Läs mer i avsnittet [”Time Travel Assist](/docs/guides/time-travel-assist)”.

## Så här använder du snabbåterställning

Du kan använda OptiTech Console, CLI eller API för att återställa rotgrenar. Källgrenen för en återställning till en viss tidpunkt (den gren vars historik du återställer från) måste också vara en rotgren.

<Tabs labels={["Console", "CLI", "API"]}>

<TabItem>

### Återställning från historik

Använd sidan **Återställ** för att återställa en rotgren till en tidigare tidsstämpel i dess egen historik eller i en annan rotgrens historik.

Välj först den **gren som ska återställas**. Detta är målgrenen för återställningen (måste vara en rotgren).

![Återställ gren till tidsstämpel](/docs/guides/branch_restore_timestamp.png)

#### Så här återställer du en gren från dess egen historik:

1. Se till att fliken **Från historik** är markerad.
1. Välj tidsstämpel eller växla till LSN.
1. Klicka på **Nästa**.

   Ett bekräftelsefönster öppnas med information om den kommande återställningen. Granska uppgifterna för att försäkra dig om att du har gjort rätt val.

1. Klicka på **Återställ** för att slutföra åtgärden.

#### Så här återställer du från en annan gren:

1.  Gå till fliken **Från en annan gren**.
1.  Välj den rotgren som du vill återställa data från (endast rotgrenar stöder återställning till en viss tidpunkt).
1.  Som standard hämtar åtgärden de senaste uppgifterna från källgrenen. Om du vill hämta uppgifter från en tidigare tidpunkt ska du inaktivera **Återställ från senaste data (head)**.

    Väljarfönstret för tidsstämpel visas.

1.  Välj tidsstämpel eller växla till LSN-ingången.
1.  Klicka på **Nästa**, bekräfta uppgifterna för åtgärden och klicka sedan på **Återställ** för att slutföra.

Alla databaser i den valda grenen uppdateras omedelbart med data och schema från den valda tidpunkten. På sidan **Grenar** kan du nu se att en säkerhetskopieringsgren har skapats med grenens tillstånd vid återställningstidpunkten.

<Admonition type="note">
Säkerhetskopieringsgrenar som skapas när en rotgren återställs från en annan gren kan inte raderas. Se [avsnittet ”Radera säkerhetskopieringsgrenar”](#deleting-backup-branches) för mer information.
</Admonition>

![återställa säkerhetskopia av gren till gren](/docs/guides/branch_restore_backup_file.png)

</TabItem>

<TabItem>
Med hjälp av kommandoraden kan du återställa en rotgren till en tidigare tidpunkt i dess egen historik eller i en annan rotgrens historik med följande kommando:

```bash shouldWrap
optitech branches restore <target id|name> <source id|name @ timestamp|lsn>
```

I fältet ”`target id|name`” anger du ID:t eller namnet på den gren du vill återställa. I fältet ”`source id|name timestamp|lsn`” anger du källgrenen som du vill återställa från (obligatoriskt), tillsammans med tidsidentifieraren (valfritt), som kan vara antingen en tidsstämpel i RFC 3339-format eller LSN. Om du utelämnar tidsidentifieraren används som standard de senaste uppgifterna (HEAD) för källgrenen. Sammanfoga källidentifieraren och tidsidentifieraren med `@`: till exempel `development@2023-12-12T12:00:00Z`.

#### Återställ en rotgren till sin egen historik

Om du vill återställa en rotgren till en tidigare tidpunkt använder du syntaxen `^self` i fältet `<source id|name>`. Till exempel:

```bash shouldWrap
optitech branches restore development ^self@2024-01-01T00:00:00Z --preserve-under-name development_old
```

Detta kommando återställer målgrenen `development` till det tillstånd den befann sig i vid början av 2024. Kommandot bevarar dessutom grenens ursprungliga tillstånd i en säkerhetskopia med namnet `development_old` med hjälp av parametern `preserve-under-name` (obligatorisk vid återställning till ”self”).

#### Återställ från överordnad

Om du vill återställa en målgren från dess överordnade gren kan du använda den speciella syntaxen `^parent` i fältet `<source id|name>`. Till exempel:

```bash
optitech branches restore development ^parent
```

Detta kommando återställer målgrenen `development` till de senaste uppgifterna (HEAD) i dess överordnade gren.

#### Återställ till historiken för en annan rotgren

Här är ett exempel på ett kommando som återställer en rotgren till en tidigare tidpunkt i en annan rotgrens historik:

```bash shouldWrap
optitech branches restore development production@0/12345
```

Detta kommando återställer målgrenen `development` till en tidigare tidpunkt utifrån källgrenen `main`, med hjälp av LSN-värdet `0/12345` för att ange tidpunkten. Om du utelämnar tidpunktsidentifieraren kommer kommandot som standard att använda de senaste uppgifterna (HEAD) för källgrenen `main`.

För fullständig dokumentation om kommandoradsgränssnittet (CLI) för `branches restore`, se [avsnittet ”restore](/docs/cli/branches#restore)”.
</TabItem>

<TabItem>
För att återställa en gren via API:et använder du slutpunkten nedan. Vid återställning till en viss tidpunkt (då du anger en tidsstämpel eller ett LSN) måste källgrenen vara en rotgren.

```bash
POST /projects/{project_id}/branches/{branch_id_to_restore}/restore
```

Med denna slutpunkt kan du återställa en gren med hjälp av följande förfrågningsparametrar:

| Parameter               | Typ     | Obligatorisk | Beskrivning                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **source_branch_id**    | `string` | Ja      | ID för den gren som du vill återställa från. <br /> <br /> För att återställa till de senaste uppgifterna (head) utelämnar du `source_timestamp` och `source_lsn`. <br /> <br /> För att återställa en gren till sin egen historik (där `source_branch_id` är lika med grenens eget ID) måste du ange: <br /> - En tidsperiod: `source_timestamp` eller `source_lsn` <br /> - En säkerhetskopierad gren: `preserve_under_name`                         |
| **source_lsn**          | `string` | Nej       | Ett loggsekvensnummer (LSN) på källgrenen. Grenen återställs med data fram till detta LSN.                                                                                                                                                                                                                                                                                   |
| **source_timestamp**    | `string` | Nej       | En tidsstämpel som anger den tidpunkt på källgrenen som återställningen ska utgå ifrån. Använd formatet enligt RFC 3339 för datum- och tidssträngen.                                                                                                                                                                                                                                                              |
| **preserve_under_name** | `string` | Nej       | Om detta anges skapas en säkerhetskopia: den senaste versionen av grenens tillstånd bevaras i en ny gren med det angivna namnet. <br /> <br />**Obs!** Detta fält är obligatoriskt om: <br /> - Grenen har undergrenar. Alla undergrenar flyttas till den nyskapade grenen. <br /> - Du återställer en gren till dess egen historik (`source_branch_id` är lika med grenens eget ID). |

#### Återställa en gren till sin egen historik

I följande exempel återställer vi grenen `br-twilight-river-31791249` till en tidigare tidpunkt, `2024-02-27T00:00:00Z`, med hjälp av en ny säkerhetskopieringsgren med namnet `backup-before-restore`. Observera att gren-id:t i `url` stämmer överens med värdet för `source_branch_id`.

```bash shouldWrap
curl --request POST \
     --url https://console.optitech.com/api/v2/projects/floral-disk-86322740/branches/br-twilight-river-31791249/restore \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $OPTITECH_API_KEY" \
     --header 'Content-Type: application/json' \
     --data '
{
  "source_branch_id": "br-twilight-river-31791249",
  "source_timestamp": "2024-02-27T00:00:00Z",
  "preserve_under_name": "backup-before-restore"
}
' | jq
```

### Återställning till de senaste uppgifterna från en annan gren

I det här exemplet återställer vi utvecklingsgrenen `dev/alex` (gren-ID `br-twilight-river-31791249`) till de senaste uppgifterna (head) i dess överordnade gren `br-jolly-star-07007859`. Observera att vi inte anger någon tidsidentifierare eller något namn på en säkerhetskopieringsgren; detta är en ren återställning av grenen till head i dess överordnade gren.

```bash shouldWrap
curl --request POST \ // [!code word:br-twilight-river-31791249]
     --url https://console.optitech.com/api/v2/projects/floral-disk-86322740/branches/br-twilight-river-31791249/restore \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $OPTITECH_API_KEY" \
     --header 'Content-Type: application/json' \ // [!code word:br-jolly-star-07007859]
     --data '
{
  "source_branch_id": "br-jolly-star-07007859"}
' | jq
```

### Återställning till ett tidigare tillstånd i en annan gren

I det här exemplet återställer vi grenen `dev/jordan` (gren-ID `br-damp-smoke-91135977`) till grenen `dev/alex` (gren-ID `br-twilight-river-31791249`) vid tidpunkten `Feb 26, 2024 12:00:00.000 AM`.

```bash shouldWrap
curl --request POST \ // [!code word:br-damp-smoke-91135977]
     --url https://console.optitech.com/api/v2/projects/floral-disk-86322740/branches/br-damp-smoke-91135977/restore \
     --header 'Accept: application/json' \
     --header "Authorization: Bearer $OPTITECH_API_KEY" \ //  [!code word:br-jolly-star-07007859]
     --header 'Content-Type: application/json' \
     --data '
{
  "source_branch_id": "br-jolly-star-07007859",
  "source_timestamp": "2024-02-26T12:00:00Z"
}
' | jq
```

</TabItem>
</Tabs>

För att säkerställa att du väljer rätt återställningspunkt rekommenderar vi att du använder [Time Travel Assist](/docs/guides/time-travel-assist) innan du kör en återställning, men säkerhetskopieringsgrenen finns där om du skulle behöva den.

Om du behöver ångra dina ändringar använder du [”Instant restore”](/docs/introduction/branch-restore) igen och väljer säkerhetskopieringsgrenen som källa, eftersom säkerhetskopian inte är en överordnad gren.

## Ta bort säkerhetskopierade grenar

Backup-grenar kan raderas, med undantag för två fall:

- När en rotgren återställs från en annan gren kan den gren som användes som säkerhetskopia – det vill säga den ursprungliga roten – inte raderas.
- En reservgren kan inte raderas om den har underordnade grenar.

Så här tar du bort en säkerhetskopieringsgren:

1. Gå till sidan **Filialer**.
2. Leta reda på den säkerhetskopieringsgren som du vill ta bort. Namnet har följande format:

   ```
   {branch_name}_old_{head_timestamp}
   ```

3. Välj **Radera** i menyn.

Om du inte kan ta bort en säkerhetskopieringsgren kan du ändå frigöra lagringsutrymme för den. Om du är säker på att du inte längre behöver uppgifterna i en säkerhetskopieringsgren kan du ansluta till grenen och ta bort dess databaser eller tabeller. **Se till att du ansluter till rätt gren när du gör detta**. Du kan ansluta till en säkerhetskopierad gren precis som till vilken annan gren som helst via [OptiTech SQL Editor](/docs/get-started/query-with-neon-sql-editor) eller en SQL-klient som [psql](/docs/connect/query-with-psql-editor).

För att hålla ordning på sidan **Grenar** kan du överväga att byta namn på de reservgrenar som du planerar att behålla. Du kan till exempel lägga till prefixet ”`z`” framför namnen för att flytta dem längst ner i listan. Se [”Byt namn på en gren”](/docs/manage/branches#rename-a-branch) för mer information.

## Överväganden kring fakturering

Funktionerna ”Instant Restore” och ”Time Travel Assist” har endast minimala konsekvenser för faktureringen:

- **Omedelbar återställning:** De säkerhetskopierade grenarna som skapas när du återställer en gren räknas in i det totala antalet grenar och medför lagringskostnader, men eftersom de inte är kopplade till någon beräkningskapacitet påverkar de inte beräkningskostnaderna.
- **Time Travel Assist:** Kostnaderna i samband med Time Travel-förfrågningar är minimala. Se [avsnittet om faktureringsfrågor](/docs/guides/time-travel-assist#billing-considerations).

## Begränsningar

- **Omedelbar återställning stöds endast för rotgrenar.** Du kan endast utföra en återställning till en specifik tidpunkt från rotgrenar (t.ex. `production` eller `main`). Undergrenar stöder inte omedelbar återställning. När du återställer en rotgren blir både den återställda grenen och säkerhetskopieringsgrenen separata rotgrenar utan någon över- och undergrensrelation.
- Det går endast att ta bort reservgrenar i vissa fall. Se [avsnittet ”Ta bort reservgrenar”](#deleting-backup-branches) för mer information.
- Omedelbar återställning (PITR) stöds för närvarande inte på grenar som skapats genom återställning av en ögonblicksbild. Om du återställer en ögonblicksbild för att skapa en ny gren kan du för närvarande inte utföra en återställning till en viss tidpunkt på den grenen. Om du försöker göra det visas följande felmeddelande: `restore from snapshot on target branch is still ongoing`.

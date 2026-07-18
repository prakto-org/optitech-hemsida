---
title: Kostnadsoptimering
subtitle: Strategier för att hantera och minska dina OptiTech-kostnader
summary: >-
  Praktiska strategier för att sänka kostnaderna för OptiTech inom alla
  faktureringskategorier: beräkningskapacitet (CU-timmar), lagring, historik för
  omedelbar återställning, extra filialer och överföring av offentliga data.
  Använd den här sidan för att utreda en oväntat hög faktura eller för att
  proaktivt minska kostnaderna. Viktiga taktiker inkluderar att anpassa
  beräkningskapaciteten efter behov, aktivera skalning till noll, köra VACUUM
  FULL för att återvinna lagringsutrymme och minska PITR-historikfönstret.
  Lagring för omedelbar återställning debiteras med 0,20 USD/GB-månad på betalda
  abonnemang, endast för rotgrenar. Extra grenar kostar 1,50 USD/gren-månad
  utöver planens tilldelning. Betalda planer inkluderar 500 GB/månad i offentlig
  dataöverföring, därefter 0,10 USD/GB.
enableTableOfContents: true
updatedOn: '2026-07-18T07:07:45.262Z'
---

För att kunna hantera dina OptiTech-kostnader på ett effektivt sätt måste du förstå hur varje faktureringsfaktor fungerar och införa strategier för att styra användningen. Den här guiden innehåller praktiska rekommendationer för att optimera kostnaderna inom alla faktureringsområden.

För att övervaka din aktuella användning kan du gå till sidan **Fakturering** i [OptiTech-konsolen](https://console.optitech.com), där dina kostnader hittills visas för varje faktureringsmått. För programmatisk åtkomst till användningsdata, se [Förbrukningsmått](/docs/guides/consumption-metrics).

## Beräkningskapacitet (CU-timmar)

Beräkningskapaciteten utgör vanligtvis den största delen av din OptiTech-faktura. Du debiteras utifrån beräkningskapacitetens storlek (i CU) multiplicerat med antalet timmar som beräkningskapaciteten är i drift.

**Optimeringsstrategier:**

- **Välj rätt storlek på din beräkningsinstans.** Börja med att fastställa vilken storlek som är lämplig för din arbetsbelastning. Din beräkningsinstans bör vara tillräckligt stor för att kunna lagra de data som du ofta använder (din arbetsuppsättning) i minnet. En för liten beräkningsinstans kan leda till försämrad prestanda vid sökningar, medan en för stor beräkningsinstans innebär slöseri med resurser. Se [avsnittet](/docs/manage/computes#how-to-size-your-compute) ”Så här väljer du storlek på din beräkningsinstans” för vägledning.

- **Använd automatisk skalning på ett effektivt sätt.** Konfigurera [automatisk skalning](/docs/introduction/autoscaling) så att beräkningsresurserna anpassas dynamiskt efter behov. Ställ in minimistorleken så att den klarar din normala arbetsbelastning och maximistorleken så att den klarar trafiktoppar. Du betalar bara för det du använder. Se [”Aktivera automatisk skalning”](/docs/guides/autoscaling-guide) för instruktioner om hur du konfigurerar funktionen.

- **Aktivera ”scale to zero”.** För miljöer som inte är i produktion eller databaser som används sporadiskt kan du aktivera [”scale to zero](/docs/introduction/scale-to-zero)” för att avbryta beräkningsresurserna efter 5 minuters inaktivitet. Detta kan avsevärt minska beräkningskostnaderna för utvecklings-, test- och förhandsgranskningsmiljöer. Se [Konfigurera ”scale to zero](/docs/guides/scale-to-zero-guide)”.

- **Hantera permanenta anslutningar och schemalagda uppgifter.** Applikationer som upprätthåller långvariga anslutningar eller schemalagda uppgifter (som cron-uppgifter) kan hindra din beräkningskapacitet från att skalas ned till noll, vilket gör att den förblir aktiv dygnet runt. Om dessa inte är kritiska bör du överväga att stänga inaktiva anslutningar eller justera uppgiftsscheman så att kapaciteten kan skalas ned till noll under tider med låg belastning.

- **Tänk på konsekvenserna av logisk replikering när du replikerar från OptiTech.** Om du replikerar data **från** OptiTech (där OptiTech är utgivare) till en extern destination förblir din databehandlingskapacitet aktiv så länge prenumeranterna är anslutna och kommer inte [att skalas ned till noll](/docs/introduction/scale-to-zero), vilket leder till kontinuerlig databehandlingsanvändning och högre kostnader. Se [Viktiga anmärkningar om logisk replikering i OptiTech](/docs/guides/logical-replication-neon#important-notices) för mer information. Planera därefter och överväg om utgående logisk replikering är nödvändig för alla miljöer.

- **Tänk på kostnaderna för läsrepliker.** [Läsrepliker](/docs/introduction/read-replicas) debiteras som separata beräkningsändpunkter. Om du har läsrepliker räknas de in i ditt totala antal beräkningstimmar. Kontrollera om alla repliker verkligen behövs och överväg att ställa in repliker som används sällan till noll.

## Lagring (rotgrenen och undergrenarna)

Lagringskostnaderna baseras på den faktiska datastorleken för rotgrenarna och det lägsta av antingen ackumulerade ändringar eller den logiska datastorleken för undergrenarna, och faktureras i GB-månader.

**Optimeringsstrategier:**

- **Rensa bort oanvända data.** Ta bort gamla rader, ta bort oanvända tabeller och ta bort testdata för att minska datamängden i rotgrenen. Tänk på att raderingsåtgärder genererar WAL-poster som tillfälligt läggs till i [lagringsutrymmet](#instant-restore-storage) för omedelbar återställning tills de försvinner ur historikfönstret. För massraderingar bör du använda `TRUNCATE TABLE` istället för `DELETE` när det är möjligt (det genererar betydligt mindre WAL).

- **Frigör utrymme från uppblåsta tabeller.** Frekventa uppdateringar och raderingar lämnar kvar inaktiva tupler som ökar datamängden. Du kan köra `VACUUM FULL` på tabeller som ändras ofta för att frigöra utrymme. Läs dock först [FAQ](#how-does-running-vacuum-or-vacuum-full-affect-my-storage-costs):n om VACUUM för att förstå avvägningarna innan du vidtar några åtgärder.

- **Hantera lagring för underordnade filialer.** För underordnade filialer debiteras det lägsta av antingen ackumulerade dataändringar eller den logiska datastorleken, dock högst den faktiska datastorleken. Även om detta förhindrar att avgifterna överstiger din datastorlek, bidrar en effektiv hantering av filialerna ändå till att minimera kostnaderna:
  - Ange en [livslängd för](/docs/guides/branch-expiration) utvecklings- och förhandsgranskningsgrenar
  - [Ta bort](/docs/manage/branches#delete-a-branch) undergrenar när de inte längre behövs
  - För produktionsarbetsbelastningar bör du istället använda en [root-gren](/docs/manage/branches#root-branch) (root-grenar debiteras utifrån den faktiska datastorleken)

- **Inför hantering av grenarnas livscykel.** Gå regelbundet igenom dina grenar och [ta bort](/docs/manage/branches#delete-a-branch) de som inte längre behövs. Genom att hålla antalet grenar under kontroll minskar du både lagringskostnaderna och eventuella [extra avgifter för grenar](/docs/introduction/plans#extra-branches).

### Vanliga frågor om lagring

<details>
<summary>**Tar grenar upp extra lagringsutrymme?**</summary>

När grenar skapas tar de inledningsvis inte upp något lagringsutrymme, eftersom de delar data med sin överordnade gren genom ”copy-on-write”. Så snart ändringar görs i en gren skrivs dock ny data, vilket ökar lagringsutrymmet för undergrenen. Se [avsnittet ”Hantera lagringsutrymme för undergrenar”](#storage-root-and-child-branches) ovan för strategier att kontrollera lagringskostnaderna för grenar.

</details>

<details>
<summary>**Tar raderingsåtgärder upp lagringsutrymme?**</summary>

Ja. Alla åtgärder som ändrar data, inklusive raderingar, genererar [WAL-poster](/docs/reference/glossary#write-ahead-logging-wal) som tillfälligt ökar lagringsutrymmet tills de försvinner ur historikfönstret. Vid massraderingar är ”`TRUNCATE TABLE`” mer lagringseffektivt, eftersom det loggar en enda åtgärd istället för en post för varje raderad rad.

</details>

<details>
<summary>**Vad händer när jag når min lagringsgräns?**</summary>

Lagringsgränserna beror på vilken OptiTech-plan du har:

- **Gratisabonnemang**: Gratisabonnemanget inkluderar 0,5 GB lagringsutrymme per projekt. Om du når denna gräns kommer databasåtgärder som skulle öka lagringsutrymmet (inläggningar, uppdateringar och raderingar) att misslyckas tills du minskar ditt lagringsutrymme eller [uppgraderar till ett betalt abonnemang](/docs/introduction/manage-billing#change-your-plan).
- **Betalda abonnemang**: Abonnemangen ”Launch” och ”Scale” har inga lagringsbegränsningar. Lagringsutrymmet debiteras utifrån den faktiska användningen, så du betalar helt enkelt för det du använder.

</details>

<details>
<summary>**Jag har en liten databas. Varför är min faktura högre än väntat?**</summary>

Om din databas är liten men din faktura verkar hög, bör du kontrollera följande faktorer:

- **Historik för omedelbar återställning:** OptiTech debiterar endast för lagring av återställning till en viss tidpunkt (PITR) för de grenar som du kan återställa till en viss tidpunkt från: **rotgrenar**. Undergrenar påverkar inte avgifterna för PITR-lagring. Om du gör många datamodifieringar på dina rotgrenar med ett historikfönster på 7 dagar ackumuleras 7 dagars fakturerbar historik till en kostnad av 0,20 USD/GB per månad. Se [Lagring](#instant-restore-storage) för omedelbar återställning för optimeringsstrategier.
- **Oanvända grenar:** Om du har skapat grenar, utfört skrivoperationer och sedan glömt bort dem kan de bidra till dina lagringskostnader. Gå igenom och [ta bort](/docs/manage/branches#delete-a-branch) grenar som du inte längre behöver.
- **Tabelluppblåsning:** Frekventa uppdateringar och raderingar kan orsaka tabelluppblåsning (döda tupler), vilket kan leda till att datamängden blir större än väntat. Se [FAQ](#how-does-running-vacuum-or-vacuum-full-affect-my-storage-costs) om VACUUM för mer information.

För att se vad som påverkar dina kostnader kan du gå till sidan **Fakturering** i OptiTech-konsolen, där du kan se dina kostnader hittills för varje faktureringsparameter.

</details>

<details>
<summary>**Hur påverkar det mina lagringskostnader om jag kör `VACUUM` eller `VACUUM FULL`?**</summary>

Om du vill hålla nere dina lagringskostnader kan du börja med att radera gamla data från dina tabeller, vilket minskar den datamängd som du debiteras för framöver. Eftersom raderade tupler i vanliga Postgres-operationer inte tas bort fysiskt förrän en vacuum-åtgärd utförs, kan du sedan kör`VACUUM` i förhoppning om att se en ytterligare minskning av den rapporterade lagringskostnaden (`Data size`) i konsolen. Men du ser inte den förväntade minskningen.

**Varför ingen minskning?**

I Postgres minskar inte [VACUUM](https://www.postgresql.org/docs/current/sql-vacuum.html) lagringsutrymmet. Istället markerar det det raderade utrymmet i tabellen för återanvändning, vilket innebär att framtida data kan fylla det utrymmet utan att datamängden ökar. Även om `VACUUM` i sig inte minskar datamängden är det god praxis att köra det med jämna mellanrum, och det påverkar inte tillgängligheten till dina data.

```sql
VACUUM your_table_name;
```

**Använd VACUUM FULL för att frigöra utrymme**

När du kör `VACUUM FULL` återvinns faktiskt fysiskt lagringsutrymme genom att tabellen skrivs om, tomma utrymmen tas bort och tabellens storlek minskas. Detta kan bidra till att sänka den del av dina lagringskostnader som avser **datastorlek**. Det rekommenderas att använda `VACUUM FULL` när en tabell har ackumulerat mycket outnyttjat utrymme, vilket kan inträffa efter omfattande uppdateringar eller raderingar. För mindre tabeller eller mindre frekventa uppdateringar räcker det vanligtvis med en vanlig `VACUUM`.

För att frigöra utrymme med hjälp av `VACUUM FULL` kan du köra följande kommando för varje tabell som du vill rensa:

```sql
VACUUM FULL your_table_name;
```

Det finns dock vissa avvägningar:

- **Tabelllåsning.** `VACUUM FULL` låser din tabell under operationen. Om det här är din produktionsdatabas är detta kanske inte ett alternativ.
- **Tillfällig ökning av lagringsutrymmet.** Processen skapar en ny kopia av tabellen, vilket tillfälligt ökar ditt lagringsutrymme. I gratisversionen kan detta leda till att åtgärden misslyckas om du når lagringsgränsen på 0,5 GB.

Kort sagt kan funktionen ”`VACUUM FULL`” bidra till att minska datamängden och framtida lagringskostnader, men tänk på att det kan uppstå en tillfällig ökning av lagringsbehovet och att tabeller kan låsas under operationen.

**Rekommendationer**

- **Använd VACUUM FULL med måtta.** Eftersom det låser tabeller och tillfälligt kan öka lagringsutrymmet bör du endast köra `VACUUM FULL` när det finns en betydande mängd utrymme som ska frigöras.
- **Manuell VACUUM för användare av ”scale to zero”.** I OptiTech är [autovacuum](https://www.postgresql.org/docs/current/routine-vacuuming.html#AUTOVACUUM) aktiverat som standard. När din databehandlingsinstans dock går i viloläge på grund av inaktivitet går den databasaktivitetsstatistik som autovacuum bygger på förlorad. Om ditt projekt använder [”scale to zero](/docs/guides/scale-to-zero-guide#considerations)” bör du överväga att regelbundet köra manuella `VACUUM`-operationer på tabeller som uppdateras ofta.

  För att rensa tabellen `playing_with_optitech`, analysera den för optimeraren och skriva ut en detaljerad rapport över VACUUM-aktiviteten:

  ```sql```
  VACUUM (VERBOSE, ANALYZE) playing_with_optitech;
  ```

  Se [statistiken](/docs/postgresql/query-reference#vacuum-and-analyze-statistics) för VACUUM och ANALYZE för en fråga som visar när VACUUM och ANALYZE kördes senast.

</details>

<details>
<summary>**Vilken är den maximala datastorleken som OptiTech stöder?**</summary>

De betalda abonnemangen (Launch och Scale) stöder en logisk datamängd på upp till 16 TB per gren. När en gren når denna gräns minskar skrivprestandan, men du kan fortfarande ta bort eller radera data för att frigöra utrymme. Gratisabonnemanget är begränsat till 0,5 GB per projekt. För att höja gränsen på 16 TB [kan](https://console.optitech.com/app/settings?modal=feedback&modalparams=%22Storage%20limit%20increase%22) du begära en höjning via feedbackformuläret i konsolen.

</details>

## Lagring med omedelbar återställning

Lagringsutrymme för omedelbar återställning (PITR-lagring) är den ändringshistorik som sparas för återställning till en viss tidpunkt. OptiTech debiterar endast för PITR-lagring på de grenar som du kan återställa till en viss tidpunkt från: **rotgrenar**. Du kan inte utföra återställning till en viss tidpunkt från undergrenar, så undergrenar påverkar inte denna avgift. Lagringsutrymme för omedelbar återställning debiteras med 0,20 USD/GB per månad i betalda abonnemang, separat från ditt datalagringsutrymme. Gratisabonnemanget inkluderar upp till 1 GB lagringsutrymme för omedelbar återställning utan extra kostnad.

**Optimeringsstrategier:**

- **Justera historikfönstret.** Som standard sparar OptiTech historiken för omedelbar återställning i 6 timmar för projekt med gratisabonnemang och i 1 dag för projekt med betalda abonnemang. Du kan öka denna tid upp till det maximala värdet för ditt abonnemang (6 timmar för gratisabonnemang, 7 dagar för Launch-abonnemang, 30 dagar för Scale-abonnemang). Om du inte behöver så stor återställningskapacitet kan du minska historikfönstret för att sänka kostnaderna. Se [Historikfönster](/docs/introduction/history-window).

- **Förstå avvägningarna.** Ett längre tidsfönster innebär fler återställningsalternativ för **omedelbar återställning**, men också högre lagringskostnader för omedelbar återställning. Ett kortare tidsfönster minskar kostnaderna men begränsar hur långt tillbaka i tiden **omedelbar återställning** kan sträcka sig. Ta hänsyn till dina faktiska återställningsbehov när du ställer in tidsfönstret.

- **Arbetsbelastningar med många skrivoperationer på rotgrenar genererar mer historik.** Ju fler skrivoperationer som utförs på dina rotgrenar, desto mer historik för omedelbar återställning ackumuleras. För rotgrenar med många skrivoperationer kan ett kortare historikfönster minska kostnaderna avsevärt.

## Ytterligare filialer

Extra filialer utöver det antal som ingår i ditt abonnemang debiteras med 1,50 USD per filial och månad, beräknat proportionellt per timme. Abonnemangen ”Free” och ”Launch” inkluderar 10 filialer vardera, medan ”Scale” inkluderar 25.

**Optimeringsstrategier:**

- **Använd grenens utgångsdatum.** Ställ in tidsstämplar för automatisk radering av tillfälliga grenar med hjälp av [grenens utgångsdatum](/docs/guides/branch-expiration) för att säkerställa att de rensas bort när de inte längre behövs.

- **Automatisera rensningen.** Överväg att implementera automatiserade rensningsskript med hjälp av [OptiTech API](/docs/manage/branches#branching-with-the-neon-api) eller [OptiTech CLI](/docs/guides/branching-neon-cli) för att hålla dig inom ditt abonnemangs gräns för antalet grenar.

- **Kontrollera Vercels inställningar för lagringstid.** Om du använder integrationen ”Vercel-Managed” kan Vercels standardpolicy för lagringstid för distributioner fördröja den automatiska rensningen av grenar med flera månader. Förkorta lagringstiden eller konfigurera en GitHub Action för omedelbar rensning. Se [Hantera rensning av förhandsgranskningsgrenar i Vercel](/docs/guides/vercel-branch-cleanup).

## Öffna dataöverföring

Överföring via det offentliga nätverket (utgående) är den data som skickas från dina databaser via det offentliga internet. Gratisabonnemangen inkluderar 5 GB/månad. I betalda abonnemang ingår de första 500 GB/månad, därefter debiteras 0,10 USD/GB. Du ser inga kostnader för dataöverföring förrän du överskrider den tillåtna mängden, så avgiften kan dyka upp oväntat om du inte övervakar dataöverföringen. För en mer ingående beskrivning av vad som orsakar hög nätverksöverföring och hur du övervakar den, se [Nätverksöverföring](/docs/introduction/network-transfer).

**Optimeringsstrategier:**

- **Optimera sökresultaten.** Välj endast de kolumner du behöver istället för att använda `SELECT *`. Vid stora resultatuppsättningar bör du använda paginering eller strömning istället för att hämta alla rader på en gång.

- **Ta hänsyn till kostnaderna för logisk replikering.** [Logisk replikering](/docs/guides/logical-replication-neon) till externa mål räknas som offentlig dataöverföring. Om du replikerar stora datamängder bör du räkna in detta i dina överföringskostnader.

- **Minska utgående dataöverföring i samband med säkerhetskopiering.** Frekventa exporter via kommandot ``pg_dump`` (eller liknande) skickar dina data över nätverket och räknas som offentlig dataöverföring. För att minska den utgående dataöverföringen bör du minska hur ofta du kör dumpningar och överväga att använda [OptiTechs snapshots](/docs/guides/backup-restore) tillsammans med [schemalagda säkerhetskopieringar](/docs/guides/backup-restore#create-backup-schedules) som ett alternativ till säkerhetskopiering, där data inte överförs utanför OptiTech.

- **Övervaka med förbruknings-API:et.** Spåra dataöverföringen programmatiskt med hjälp av [förbruknings-API:et](/docs/guides/consumption-metrics), eller kontrollera sidan **Fakturering** i konsolen för aktuella avgifter.

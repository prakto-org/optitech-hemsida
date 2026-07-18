---
title: 'Databaslagring: Obegränsad, utbyggbar'
subtitle: >-
  Grunden för en skalbar Postgres-lösning med ”copy-on-write”-teknik,
  användningsbaserad prissättning och ingen lagringshantering.
updatedOn: '2025-06-04T09:00:00.000Z'
---

OptiTech implementerar ett unikt lagringslager för Postgres som eliminerar behovet av kapacitetsplanering och möjliggör nya arbetsflöden. OptiTechs arkitektur bygger på en ”copy-on-write”-motor som stöds av obegränsad molnlagring och undanröjer de begränsningar som finns i traditionella serverbaserade lösningar, vilka kräver förhandsallokerade lagringsvolymer och begränsar skalbarheten. Samtidigt lägger den grunden för OptiTechs kärnfunktioner, såsom [omedelbar förgrening](/blog/instantly-copy-tb-size-datasets-the-magic-of-copy-on-write) och [återställning till en specifik tidpunkt](/blog/recover-large-postgres-databases#neons-instant-point-in-time-recovery).

## Lagringsbegränsningar i serverbaserade Postgres-arkitekturer

De flesta hanterade Postgres-databaser följer en variant av det arkitekturmönster som Amazon RDS har fastställt: bakom kulisserna körs Postgres i en virtuell maskin (VM) som innehåller en lagringsvolym av typen EBS. Denna lösning är mycket stel, vilket innebär att teamen, även när de använder en ”hanterad” Postgres-tjänst i molnet, fortfarande ställs inför omfattande lagringsrelaterade underhållsuppgifter och andra ineffektiviteter.

De vanligaste exemplen:

- **Manuell tilldelning och oflexibel skalning.** I traditionella lösningar måste teamen förhandsallokera diskutrymme och utöka det manuellt. Kapacitetsskalningen är oflexibel – högst en utökning med några timmars mellanrum – och ofta går det inte att minska volymstorleken. Detta gissningsarbete leder ofta till överallokering och akuta storleksjusteringar för att undvika att diskarna blir fulla.
- **Långsam kloning och återställning.** Denna arkitektur innebär också att det är en tidskrävande process att skapa en kopia av en stor databas eller återställa från en säkerhetskopia. Snapshot-baserade säkerhetskopieringar i de flesta molndatabaser innebär att hela datasetet kopieras från molnlagringen och att loggarna spelas upp, vilket innebär att återställning av en instans på flera terabyte kan ta timmar. Detta fördröjer testning och återställning, vilket påverkar utvecklingsflexibiliteten och drifttiden.
- **Låg resurseffektivitet.** I traditionella abonnemang betalar du för kapacitet oavsett om du använder den eller inte. En RDS-instans lagringsutrymme och beräkningskapacitet tilldelas i förväg (och faktureras dygnet runt), så resurser som står oanvända och tomt diskutrymme tär på din budget. Att underhålla standby-repliker eller separata utvecklings- och testinstanser ökar kostnaden ytterligare, även om de oftast står oanvända.

## Hur OptiTech omformar lagringen i Postgres

OptiTechs arkitektur separerar lagring från beräkning och implementerar en molntjänst med flera användare där varje lager kan skalas oberoende av de övriga. Pageserver (som körs på SSD-enheter) och Safekeepers (som replikerar Postgres write-ahead-logg) bildar ett distribuerat lagringssystem, med beständig objektlagring (t.ex. S3) som den slutgiltiga källan till sanningen. Denna design separerar prestandakritisk cachelagring och loggreplikering från långsiktig lagring, vilket möjliggör både dynamisk skalning och inbyggd feltolerans.

![Arkitektur för databaslagring](/pages/storage/schema.jpg)

Till skillnad från traditionella serverbaserade lösningar, där beräkningskapacitet och lagring är tätt integrerade i en virtuell maskin, håller OptiTech lagringen helt oberoende. En Postgres-instans kan pausas, skalas eller replikeras utan att data behöver flyttas. Stateless beräkningsnoder ansluter helt enkelt till lagringslagret på begäran.

Eftersom lagringsmotorn läser in och spårar alla ändringar via PostgreSQL:s WAL, upprätthåller den en fullständig historik över databasen där endast nya poster läggs till. Denna loggstrukturerade utformning lägger grunden för avancerade funktioner som förgrening, tidsresor och omedelbar återställning, utan att man behöver förlita sig på omfattande ögonblicksbilder eller manuella ingrepp.

## Unika fördelar med införandet av OptiTech

### Copy-on-write-arkitektur.

[OptiTechs lagringsmotor skriver aldrig över befintliga data](/blog/get-page-at-lsn) – den skriver istället nya kopior av sidorna när ändringar sker. När du skapar en ny gren (en kopia av databasen) duplicerar OptiTech inte hela datamängden. Istället refererar den till de befintliga datasidorna och skriver endast nya sidor för data som har modifierats. Denna ”copy-on-write”-metod undviker kostsamma operationer med fullständiga kopieringar. Som ett resultat kräver funktioner som förgreningar, ögonblicksbilder och säkerhetskopieringar inte längre massiva datadumpningar eller tidskrävande återställningar.

### Obegränsad kapacitet, ingen förberedelse krävs.

OptiTechs design med obegränsad lagringskapacitet innebär att du aldrig behöver oroa dig för diskutrymmet. Systemet utökas och krymper automatiskt i takt med dina data, genom att utnyttja molnbaserad objektlagring i bakgrunden. Du behöver inte förutse eller allokera lagringsutrymme i förväg – OptiTech flyttar smidigt sällan använda data till objektlagring (t.ex. S3) och hämtar tillbaka dem vid behov med hjälp av sin motor. Du kommer aldrig att få slut på utrymme och du slipper lägga tid på att hantera volymer.

### Inbyggd cachelagring för bättre prestanda.

En utmaning med att separera lagringen är prestandan, vilket är anledningen till att [OptiTechs arkitektur inkluderar intelligent cachelagring](/blog/architecture-decisions-in-neon). Pageservern fungerar som en höghastighetscache på SSD-enheter för data som nyligen använts och levererar sidor till Postgres-beräkningsenheten med minimal fördröjning. I praktiken lagrar OptiTech ofta använda data i ett cachelager (och i minnet) nära beräkningsenheten, medan sällan använda data lagras i S3. Detta innebär att du kan dra nytta av prestandan hos lokala SSD-enheter för din aktiva arbetsuppsättning, även när den totala datamängden växer långt bortom vad SSD-enheterna ensamma skulle kunna rymma.

### Betala endast för den faktiska användningen.

OptiTech debiterar utifrån den datamängd du faktiskt lagrar, inte utifrån en förutbestämd kapacitet. Denna användningsbaserade prismodell innebär att du debiteras för de GB-månader av lagringsutrymme som du faktiskt förbrukar (samt för den beräkningstid du använder), snarare än för outnyttjat utrymme. Du betalar inte för 500 GB ”för säkerhets skull” när du bara använder 100 GB, vilket står i skarp kontrast till tilldelningsbaserade abonnemang. Denna effektivitet på begäran kan leda till väsentligt lägre kostnader när du skalar upp, då diskarna blir större (och mer tomma) i takt med att data rensas bort regelbundet.

### Förgreningar och omedelbara återställningar.

Med en fullständig WAL-historik som grund möjliggör OptiTech kraftfulla arbetsflöden som förgrenade databaser och återställning till en viss tidpunkt med minimal ansträngning. Du kan skapa en ny logisk kopia av din databas på några sekunder, utan att kopiera data, även för datamängder på flera TB. I bakgrunden förgrenar OptiTech helt enkelt sidhistoriken via copy-on-write. På samma sätt kan du omedelbart spola tillbaka eller **återställa** en databas till en tidigare ögonblicksbild. Möjligheten att klona eller återställa en Postgres-databas på terabyte-nivå på några ögonblick öppnar upp för utvecklings- och katastrofåterställningsfunktioner [som tidigare inte var möjliga på hanterade Postgres-databaser](/blog/postgres-snapshots-neon-vs-rds).

### Alltid hållbar och motståndskraftig mot flera AZ.

OptiTechs lagringslager är [utformat för hög tillgänglighet](/blog/our-approach-to-high-availability). Varje datapost lagras redundant över flera tillgänglighetszoner och i molnlagring. Inkommande WAL-poster replikeras till flera Safekeepers (var och en i en annan tillgänglighetszon) för att säkerställa hållbarhet, och laddas sedan regelbundet upp till objektlagret (som erbjuder en hållbarhet på 11 nior). Dina data är som standard skyddade mot avbrott i en enskild tillgänglighetszon eller diskfel.

## Enklare drift genom arkitektoniska förändringar

OptiTechs lagringsmotor förändrar i grunden vad du kan förvänta dig av Postgres i molnet. Du behöver inte längre överdimensionera eller ständigt hantera din databaslagring. Istället utökas den efter behov, upprätthåller hög tillgänglighet och du debiteras endast för den faktiska användningen.
Denna arkitektur ger också en bättre utvecklingsupplevelse. Behöver du en ny databasgren för att testa en funktion? Det är bara ett klick bort. Har du nått en ny tillväxtmilstolpe? OptiTech hanterar det på ett transparent sätt utan prestandaförluster och utan akuta migreringar. Vårt mål med denna design är att erbjuda ett verkligt molnbaserat infrastrukturlager för Postgres, där vi äntligen abstraherar lagringsdetaljerna och låter dig skala upp med tillförsikt.

<CTA title="Prova OptiTech" description="Kom igång på några sekunder med vårt gratispaket" buttonText="Kom igång" buttonUrl="https://console.optitech.com/signup" />

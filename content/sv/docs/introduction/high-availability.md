---
title: Hög tillgänglighet (HA) i OptiTech
subtitle: Att förstå OptiTechs strategi för hög tillgänglighet
summary: >-
  OptiTechs högtillgänglighetslösning separerar lagring och beräkningskapacitet.
  WAL replikeras över tillgänglighetszoner av Safekeepers, och Pageservers
  växlar över till sekundära instanser på några sekunder, utan inaktiva
  standby-repliker för beräkningskapacitet. Objektlagring erbjuder en hållbarhet
  på 99,999999999 %. Återställningstiderna varierar beroende på typ av fel:
  Postgres-krasch och VM-fel åtgärdas inom några sekunder, nodfel inom 1–2
  minuter, AZ-fel inom 1–10 minuter och icke-svarande slutpunkter efter 5
  minuter. OptiTech HA stöder inte replikering mellan regioner. Sessionsdata,
  såsom tillfälliga tabeller och den lokala filcachen, bevaras inte vid en
  failover.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

Hos OptiTech har vår ”lakebase”-arkitektur ett annorlunda tillvägagångssätt när det gäller hög tillgänglighet. Istället för att upprätthålla inaktiva standby-repliker för beräkningsresurser uppnår vi motståndskraft över flera AZ:er genom att vi separerar lagring och beräkningsresurser.

![Arkitekturdiagram för OptiTech](/docs/introduction/neon_architecture_5.jpg)

Utifrån denna uppdelning kan vi dela upp vår metod i två huvuddelar:

- **Redundans i lagringen** — _Skyddar både dina långsiktiga och aktiva data_

  När det gäller lagring säkerhetskopieras all data i ett molnbaserat objektlagringssystem för långsiktig säkerhet, medan tjänsterna Pageserver och Safekeeper är fördelade över [olika tillgänglighetszoner](https://en.wikipedia.org/wiki/Availability_zone) för att säkerställa redundans för den cachade data som används av beräkningsinstansen.

- **Systemets motståndskraft** — _Att se till att din applikation fortsätter att fungera_

  Vår arkitektur är skalbar för att hantera trafiktoppar och startar om eller omplanerar beräkningsinstanser när problem uppstår, med återställningstider som vanligtvis varierar mellan några sekunder och några minuter. Även om detta innebär att din applikation måste klara av korta avbrott, ger det kostnadseffektivitet genom att man slipper behöva ha beräkningsinstanser i standby-läge som körs kontinuerligt.

## Redundans i lagringen

Genom att fördela lagringskomponenter över flera tillgänglighetszoner (AZ) säkerställer OptiTech både datahållbarhet och kontinuerlig åtkomst till data.

### Allmän lagringsarkitektur

Diagrammet visar hur OptiTech hanterar återställning av Safekeeper- eller Pageserver-tjänster över olika tillgänglighetszoner:

![Failover för HA-lagring](/docs/introduction/HA-storage-failover.png)

I denna arkitektur:

- **Safekeepers replikerar data mellan olika AZ:er**

  Safekeepers är fördelade över flera tillgänglighetszoner (AZ) för att hantera **Write-Ahead Log (WAL)-replikering**. WAL replikeras mellan dessa Safekeepers i flera tillgänglighetszoner, vilket säkerställer att dina data är säkra även om en enskild Safekeeper skulle sluta fungera.

- **Sidserver**

  Pageservrar fungerar som en diskcache som hämtar och indexerar data från WAL-filen som lagras av Safekeepers och levererar dessa data till din beräkningsinstans. För att säkerställa hög tillgänglighet använder OptiTech sekundära Pageservrar som håller kopior av projektdata uppdaterade.

  Om en Pageserver slutar fungera omfördelas de berörda projekten omedelbart till en reserv-Pageserver, vilket minimerar driftstoppet. Systemet övervakar kontinuerligt Pageserverns tillstånd med hjälp av en så kallad ”heartbeat”-mekanism för att säkerställa snabb upptäckt och automatisk övergång till reservservern.

- **Objektlagring**

  Dina datas primära, långsiktiga lagring sker i **objektlagring i molnet**, med en **99,999999999 %** hållbarhet, vilket skyddar mot dataförlust oavsett status för Pageserver eller Safekeeper.

#### Sammanfattning av återställningstider för lagringsutrymme

Här följer en sammanfattning av hur olika lagringskomponenter hanterar och återhämtar sig efter fel:

| Komponent      | Konsekvenser av fel                                 | Återställningsmekanism              | Återställningstid |
| -------------- | ---------------------------------------------- | ------------------------------- | ------------- |
| Safekeeper     | WAL-skrivningar fortsätter till andra Safekeepers       | Inbyggd redundans          | Omedelbart     |
| Pageserver     | Läsförfrågningar dirigeras automatiskt till sekundärserver | Automatisk övergång till sekundärserver | Sekunder       |
| Objektlagring | Ingen påverkan – 99,999999999 % hållbarhet           | Inbyggd Multi-AZ-redundans    | Omedelbart     |

## Beräkning av failover

Vår serverlösa arkitektur hanterar fel i beräkningsinstanser genom snabb återställning och automatisk omdirigering av trafiken, utan att det krävs att man underhåller inaktiva reservrepliker. Eftersom beräkningsinstanserna är tillståndsfria påverkar fel inte dina data, och din anslutningssträng förblir oförändrad. Systemet löser vanligtvis problem inom några sekunder till minuter, beroende på typen av fel. Din applikation bör dock vara konfigurerad för att hantera kortvariga avbrott och återansluta automatiskt.

### Beräkningsändpunkter är tillfälliga

Din beräkningsändpunkt existerar i huvudsak som metadata, där din anslutningssträng utgör kärnelementet. Denna utformning innebär att ändpunkter omedelbart kan tilldelas nya beräkningsresurser utan att applikationens konfiguration behöver ändras. När du ansluter för första gången tilldelar OptiTech din ändpunkt till en tillgänglig virtuell maskin från vår pool med färdiga resurser, vilket eliminerar de fördröjningar som vanligtvis uppstår vid traditionell tilldelning.

### Postgres-fel

Postgres körs inuti den virtuella maskinen. Om Postgres kraschar upptäcker en intern OptiTech-process felet och startar om Postgres automatiskt. Denna återställningsprocess är vanligtvis klar inom några sekunder.

![Postgres startar om efter ett fel](/docs/introduction/postgres_fails.png)

### VM-fel

I mer sällsynta fall kan själva den virtuella maskinen sluta fungera på grund av problem som en kernel panic eller att värdmaskinen stängs av. När detta inträffar återskapar OptiTech den virtuella maskinen och ansluter din beräkningsändpunkt på nytt. Denna process kan ta lite längre tid än att starta om Postgres, men det brukar ändå vara klart inom några sekunder.

![VM startar om efter ett fel](/docs/introduction/vm_fails.png)

### Endpunkter som inte svarar

Om en beräkningsändpunkt uppvisar fel eller inte svarar kommer vi automatiskt att upptäcka detta och koppla om den till en ny beräkningsinstans efter 5 minuter. Din applikation kan drabbas av anslutningsproblem tills ändpunkten har återställts.

### Nodfel

Kubernetes-noder utgör den underliggande infrastrukturen som hyser flera beräkningsinstanser. När en nod blir otillgänglig omfördelar OptiTech automatiskt beräkningsinstanserna till andra fungerande noder, en process som vanligtvis tar 1–2 minuter. Dina data förblir säkra under denna process, men beräkningskapaciteten kommer att påverkas tillfälligt tills omfördelningen är klar.

### Fel i tillgänglighetszoner

Tillgänglighetszoner (AZ) är fysiskt åtskilda datacenter inom en molnregion. När en AZ blir otillgänglig omfördelas beräkningsinstanser i den AZ:n automatiskt till fungerande AZ:er. Återställningstiden tar vanligtvis 1–10 minuter, beroende på nodernas tillgänglighet i mottagar-AZ:erna. Din anslutningssträng förblir oförändrad, och nya anslutningar dirigeras till den återställda instansen.

Stöd för flera AZ:er finns tillgängligt i alla regioner för återställningsändamål. Även om beräkningsinstanser vid varje given tidpunkt körs i en enda AZ, fördelas lagringskomponenterna kontinuerligt över flera AZ:er, och beräkningsinstanserna kan vid behov automatiskt omfördelas till andra AZ:er.

### Sammanfattning av övergångstider

Här följer en sammanfattning av hur olika typer av databehandlingsfel hanteras samt deras förväntade återställningstider:

| Feltyp              | Konsekvens                             | Återställningsmekanism                      | Återställningstid |
| ------------------------- | ---------------------------------- | --------------------------------------- | ------------- |
| Postgres-krasch            | Kort avbrott                 | Automatisk omstart                       | Sekunder       |
| Fel på virtuell maskin                | Kortvarigt avbrott                 | Återställning av virtuell maskin och återanslutning av slutpunkt | Sekunder       |
| Slutpunkt som inte svarar     | Intermittent anslutning          | Automatisk återställning påbörjas           | 5 minuter     |
| Nodfel              | Beräkningskapacitet otillgänglig                | Omschemaläggning till fungerande noder           | 1–2 minuter   |
| Fel i tillgänglighetszonen | Beräkningsresurser otillgängliga i den drabbade tillgänglighetszonen | Omfördelning till fungerande tillgänglighetszoner             | 1–10 minuter  |

### Hur påverkas sessionsdata efter en failover?

Även om din applikation bör hantera återanslutningar automatiskt kommer sessionsspecifika data – såsom tillfälliga tabeller, förberedda satser och den lokala filcachen ([LFC](/docs/reference/glossary#local-file-cache)), som lagrar data som används ofta – inte att bevaras vid en failover. Detta kan leda till att frågor inledningsvis körs långsammare tills Postgres minnesbuffertar och cache har återuppbyggts.

För mer information om drifttids- och prestandagarantier, se våra tillgängliga [SLA:er](/docs/introduction/support#slas).

## Begränsningar

_Ingen replikering mellan regioner._ OptiTechs HA-arkitektur är utformad för att mildra effekterna av fel inom en enskild region genom att replikera data över flera tillgänglighetszoner (AZ). Vi stöder dock för närvarande inte replikering i realtid mellan olika molnregioner. Vid ett regionomfattande avbrott replikeras inte dina data automatiskt till en annan region, och tillgängligheten beror på att molnleverantören återställer tjänsten i den drabbade regionen.

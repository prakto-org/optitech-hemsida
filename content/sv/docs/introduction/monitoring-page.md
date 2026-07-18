---
title: Övervakningspanel
summary: >-
  Övervakningspanelen i OptiTech-konsolen visar realtidsdiagram för RAM, CPU,
  antal anslutningar, databasstorlek, deadlocks, radändringar,
  replikeringsfördröjning och cacheträfffrekvens. Använd den för att tolka varje
  mätvärde, diagnostisera anslutningsöverbelastning, cachemissar eller
  replikeringsfördröjning, samt avgöra om du ska skala upp eller aktivera
  poolning. Hur länge historiska data sparas beror på vilken plan du har.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

Dashboarden **Övervakning** i OptiTech-konsolen innehåller flera diagram för övervakning av system- och databasvärden. Du kan öppna dashboarden **Övervakning** från sidofältet i OptiTech-konsolen. Värden som kan övervakas är bland annat:

Din OptiTech-plan avgör vilka data du kan se.

| OptiTech-planen | Datatillgång |
| --------- | ----------- |
| Gratis      | 1 dag       |
| Lansering    | 3 dagar      |
| Skala     | 14 dagar     |

Du kan välja olika tidsperioder eller en egen tidsperiod inom det tillåtna intervallet från menyn på instrumentpanelen.

Instrumentpanelen visar mätvärden för den valda **grenen** och **beräkningsenheten**. Använd rullgardinsmenyerna för att visa mätvärden för en annan gren eller beräkningsenhet. Använd knappen **Uppdatera** för att uppdatera de visade mätvärdena.

Om din dator har varit inaktiv eller om det inte har varit mycket aktivitet kan diagrammen visa följande meddelande: ”`There is no data to display at the moment`”. Försök i så fall att välja en annan tidsperiod eller kom tillbaka senare när mer användningsdata har samlats in.

Alla tidsvärden som visas i diagrammen anges i [universell koordinatid (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).

<Admonition type="note" title="Endpunkt inaktiv: Vad betyder det?">
Värdena och de ritade linjerna i dina diagram sjunker till `0` när din beräkningsenhet är inaktiv, eftersom en beräkningsenhet måste vara aktiv för att kunna rapportera data. Dessa inaktiva perioder visas också som ett diagonalt linjemönster i diagrammet, såsom visas här:

![Övervakningsdiagram med diagonalt mönster för inaktiv databehandling](/docs/introduction/monitor_inactive.png)
</Admonition>

## RAM

![Övervakningssida – RAM-diagram](/docs/introduction/monitor_ram.png)

Denna graf visar tilldelat RAM-minne och användning över tid för den valda beräkningsinstansen.

**TILLDELAD**: Mängden tilldelat RAM-minne.

RAM tilldelas utifrån storleken på din beräkningsinstans eller din konfiguration [för automatisk skalning](/docs/guides/autoscaling-guide), om sådan finns. Om din beräkningsinstans till exempel är 0,25 CU (1 GB RAM) är det tilldelade RAM-minnet alltid 1 (GB). Med automatisk skalning ökar och minskar det tilldelade RAM-minnet i takt med att beräkningsstorleken skalar upp och ner beroende på belastningen. Om [skalning till noll](/docs/guides/scale-to-zero-guide) är aktiverad och din beräkningsinstans övergår till ett viloläge efter en period av inaktivitet, sjunker det tilldelade RAM-minnet till 0.

**Använt**: Mängden RAM-minne som används.

Diagrammet visar en linje som illustrerar hur mycket RAM-minne som används. Om linjen regelbundet når den maximala mängden tilldelat RAM-minne bör du överväga att öka din beräkningsstorlek för att öka mängden tilldelat RAM-minne. För information om hur mycket RAM-minne som tilldelas för varje OptiTech-beräkningsstorlek, se [avsnittet](/docs/manage/computes#compute-size-and-autoscaling-configuration) ”Beräkningsstorlek och konfiguration av automatisk skalning”.

**Cache**: Mängden data som lagras i cacheminnet.

## CPU

![Övervakningssidan – CPU-diagram](/docs/introduction/monitor_cpu.png)

Denna graf visar den tilldelade CPU-kapaciteten och utnyttjandet över tid för den valda beräkningsinstansen.

**TILLDELAD**: Mängden tilldelad CPU-kapacitet.

CPU-resurser tilldelas utifrån storleken på din beräkningsinstans eller din konfiguration [för automatisk skalning](/docs/guides/autoscaling-guide), om sådan finns. Om din beräkningsinstans till exempel är 0,25 CU (1 GB RAM) skalas din tilldelade CPU proportionellt. Med automatisk skalning ökar och minskar den tilldelade CPU-kapaciteten i takt med att beräkningsstorleken skalar upp och ner beroende på belastningen. Om [skalning till noll](/docs/guides/scale-to-zero-guide) är aktiverad och din beräkningsinstans övergår till ett viloläge efter en period av inaktivitet, sjunker den tilldelade CPU-kapaciteten till 0.

**Använd**: Den andel av CPU:n som används, uttryckt i [beräkningsenheter (CU)](/docs/reference/glossary#compute-unit-cu).

Om den ritade linjen regelbundet når den maximala tilldelade CPU-kapaciteten bör du överväga att öka din beräkningsstorlek. För information om vilka beräkningsstorlekar som finns tillgängliga i OptiTech, se [avsnittet ”Beräkningsstorlek och konfiguration av automatisk skalning](/docs/manage/computes#compute-size-and-autoscaling-configuration)”.

## Antal Postgres-anslutningar

![Diagram över sidans besök](/docs/introduction/monitor_connections.png)

Diagrammet **Antal Postgres-anslutningar** visar antalet inaktiva anslutningar, aktiva anslutningar och det totala antalet anslutningar direkt till din Postgres-databas över tid för den valda beräkningsinstansen. Det rör sig om de faktiska anslutningarna på själva Postgres-servern.

**AKTIV**: Antalet aktiva anslutningar för den valda beräkningsenheten.

Genom att övervaka aktiva anslutningar kan du få en bättre förståelse för databasens arbetsbelastning vid varje given tidpunkt. Om antalet aktiva anslutningar är konstant högt kan det tyda på att databasen är hårt belastad, vilket kan leda till prestandaproblem såsom långa svarstider på frågor. Se [avsnittet ”Anslutningar”](/docs/postgresql/query-reference#connections) för relaterade SQL-frågor.

**INAKTIV**: Antalet inaktiva anslutningar för den valda beräkningsenheten.

Inaktiva anslutningar är sådana som är öppna men som för tillfället inte används. Även om ett fåtal inaktiva anslutningar i regel är ofarliga kan ett stort antal inaktiva anslutningar ta upp onödiga resurser, vilket minskar utrymmet för aktiva anslutningar och potentiellt kan påverka prestandan. Att identifiera och stänga onödiga inaktiva anslutningar kan bidra till att frigöra resurser. Se [”Hitta anslutningar som pågår länge eller är inaktiva](/docs/postgresql/query-reference#find-long-running-or-idle-connections)”.

**TOTALT**: Summan av aktiva och inaktiva anslutningar för den valda beräkningsenheten.

**MAX**: Det maximala antalet samtidiga anslutningar som tillåts för din beräkningsstorlek.

MAX-linjen hjälper dig att se hur nära du är att nå din anslutningsgräns. När ditt TOTALA antal anslutningar närmar sig MAX-linjen kan det vara värt att överväga följande:

- Öka beräkningskapaciteten för att möjliggöra fler anslutningar
- Implementering [av](/docs/connect/connection-pooling) anslutningspool, som stöder upp till 10 000 samtidiga anslutningar
- Optimera anslutningshanteringen i din applikation

Anslutningsgränsen (som definieras av inställningen Postgres `max_connections`) fastställs utifrån din konfiguration av OptiTech-beräkningsstorlek. Information om anslutningsgränsen för varje OptiTech-beräkningsstorlek finns i avsnittet [”Så här dimensionerar du din beräkningskapacitet](/docs/manage/computes#how-to-size-your-compute)”.

<Admonition type="note">
Om du använder [anslutningspoolning](/docs/connect/connection-pooling) bör du även övervaka diagrammen [”Pooler-klientanslutningar](#pooler-client-connections)” och [”Pooler-serveranslutningar](#pooler-server-connections)”. När du använder en anslutningspool representerar **Pooler-serveranslutningarna** de faktiska anslutningarna från PgBouncer till Postgres, medan diagrammet **Antal Postgres-anslutningar** visar alla direkta anslutningar till Postgres (inklusive de från poolern och eventuella direkta anslutningar).
</Admonition>

## Pooler-klientanslutningar

![Diagram över Poolers klientanslutningar](/docs/introduction/pooler_client_connections.png)

Diagrammet **Pooler-klientanslutningar** visar anslutningar från dina applikationer till OptiTechs anslutningspooler PgBouncer. Detta diagram visar endast data när du använder en [anslutningssträng från anslutningspoolen](/docs/connect/connection-pooling) (en som innehåller `-pooler` i slutpunktens värdnamn).

PgBouncer stöder upp till 10 000 samtidiga klientanslutningar, vilket är betydligt fler än gränsen för direkta Postgres-anslutningar. Diagrammet visar följande anslutningsstatusar:

**AKTIV**: Klientanslutningar som just nu utför en fråga via poolern.

Detta är anslutningar där en fråga för närvarande körs. Ett stort antal aktiva anslutningar tyder på att din applikation aktivt använder databasen.

**VÄNTAR**: Klientanslutningar som väntar på en ledig serveranslutning från poolen.

När alla tillgängliga serveranslutningar (anslutningar från PgBouncer till Postgres) är upptagna måste ytterligare klientförfrågningar vänta i en kö. Om du regelbundet ser ett stort antal väntande anslutningar kan det tyda på:

- Din arbetsbelastning kräver fler serveranslutningar än vad din nuvarande `default_pool_size` tillåter
- Långvariga sökningar upptar serveranslutningar
- Det kan bli nödvändigt att öka beräkningskapaciteten för att kunna hantera fler samtidiga serveranslutningar

Diagrammet visar även **Max väntetid**, vilket anger den maximala tiden (i sekunder) som en klientanslutning har väntat på en ledig serveranslutning. En genomgående hög maximal väntetid tyder på att klienterna upplever fördröjningar när de ska få åtkomst till databasen, vilket kan påverka applikationens prestanda

**AKTIV AVBOKNING** och **VÄNTANDE AVBOKNING**: Förbindelser som håller på att avbokas.

Dessa avser klientanslutningar där en avbrytningsbegäran har skickats (till exempel när en användare avbryter en sökning).

<Admonition type="tip">
Anslutningspoolning fungerar genom att många klientanslutningar delar på en mindre pool av faktiska Postgres-anslutningar. Även om du kan ha tusentals klientanslutningar delar dessa på ett begränsat antal serveranslutningar, vilket bestäms av inställningen ”`default_pool_size`” i PgBouncer. För mer information, se [Anslutningspoolning](/docs/connect/connection-pooling).
</Admonition>

## Anslutningar till Pooler-servern

![Diagram över Pooler-serveranslutningar](/docs/introduction/pooler_server_connections.png)

Diagrammet **Pooler-serveranslutningar** visar anslutningar från OptiTechs PgBouncer-pooler till din Postgres-databas. Detta diagram visar endast data när du använder en [poolad anslutningssträng](/docs/connect/connection-pooling) (en som innehåller `-pooler` i slutpunktens värdnamn).

Dessa serveranslutningar delas av alla klientanslutningar till poolern, vilket gör det möjligt för tusentals klienter att effektivt dela på en mindre pool av Postgres-anslutningar. Diagrammet visar följande tillstånd:

**SERVER AKTIV**: Serveranslutningar som för närvarande hanterar klientförfrågningar.

Detta är poolerens anslutningar till Postgres som aktivt bearbetar förfrågningar från klienter. Siffran anger det faktiska antalet samtidiga förfrågningar som utförs i din Postgres-databas via poolern.

**SERVER I VILOLÄGE**: Serveranslutningar i poolen som är tillgängliga men som för närvarande inte används.

PgBouncer behåller dessa inaktiva anslutningar i poolen så att de är redo att hantera nya klientförfrågningar utan den extra belastning som uppstår vid upprättandet av nya anslutningar. I transaktionspoolningsläget (som OptiTech använder) återgår anslutningarna till inaktivt läge så snart en transaktion är avslutad.

Det totala antalet serveranslutningar (aktiva + inaktiva) begränsas av inställningen ”`default_pool_size`” i PgBouncer, som är inställd på 0,9 × din dators ”`max_connections`”. Till exempel:

- En beräkningsenhet (CU) med ”`max_connections=450`” kan ha upp till 405 anslutningar till poolerservrar
- En beräkningsenhet på 2 CU med ”`max_connections=901`” kan ha upp till 810 pooler-serveranslutningar

<Admonition type="note">

Antalet **Pooler-serveranslutningar** är en delmängd av det som visas i diagrammet [över antalet Postgres-anslutningar](#postgres-connections-count). Antalet Postgres-anslutningar visar alla anslutningar till Postgres, inklusive de från poolern samt eventuella direkta (icke-poolade) anslutningar. För att få en fullständig bild av anslutningarna när du använder poolning:

- **Pooler-klientanslutningar**: Visar hur många applikationer/klienter som är anslutna till poolern
- **Pooler-serveranslutningar**: Visar hur många anslutningar poolern använder till Postgres (begränsat av `default_pool_size`)
- **Antal Postgres-anslutningar**: Visar alla anslutningar till Postgres (poolanslutningar + direkta anslutningar)

</Admonition>

## Databasens storlek

![Diagram över databasstorleken på övervakningssidan](/docs/introduction/monitor_data_size.png)

Diagrammet **Databasstorlek** visar den logiska datastorleken (storleken på dina faktiska data) för den angivna databasen samt den totala storleken för alla användarskapade databaser (**Alla databaser**) på den valda grenen. Mätvärdet **Alla databaser** visas endast när det finns mer än en databas på den valda grenen.

<Admonition type="important">
Mätvärden för databasstorlek visas endast medan din beräkningsinstans är aktiv. När din beräkningsinstans är inaktiv rapporteras inga värden för databasstorlek, och diagrammet **Databasstorlek** visar noll även om det kan finnas data.
</Admonition>

## Dödlägen

![Övervakning av diagram över dödlägen](/docs/introduction/monitor_deadlocks.png)

Diagrammet **Deadlocks** visar antalet deadlocks över tid för den angivna databasen på den valda grenen. Den angivna databasen är alltid den äldsta databasen på den valda grenen.

Dödlås uppstår i en databas när två eller flera transaktioner samtidigt blockerar varandra genom att hålla fast vid resurser som de andra transaktionerna behöver, vilket skapar en beroendecykel som hindrar alla transaktioner från att fortsätta och som potentiellt kan leda till prestandaproblem eller applikationsfel. För låsrelaterade frågor som du kan använda för att undersöka deadlocks, se [Prestandajustering](/docs/postgresql/query-reference#performance-tuning). För mer information om deadlocks i Postgres, se [Deadlocks](https://www.postgresql.org/docs/current/explicit-locking.html).

## Rader

![Diagram över sidorader](/docs/introduction/monitor_rows.png)

Diagrammet **Rader** visar antalet rader som har raderats, uppdaterats och infogats över tid för den angivna databasen på den valda grenen. Den angivna databasen är alltid den äldsta databasen på den valda grenen. Radstatistiken nollställs varje gång din beräkningsinstans startas om.

Genom att följa upp vilka rader som har lagts till, uppdaterats och raderats över tid får du insikt i aktivitetsmönstren i din databas. Du kan använda dessa uppgifter för att identifiera trender eller avvikelser, till exempel plötsliga ökningar i antalet insättningar eller ett ovanligt stort antal raderingar.

<Admonition type="note">
Radmått registrerar endast ändringar på radnivå (`INSERT`, `UPDATE`, `DELETE` osv.) och omfattar inte operationer på tabellnivå, såsom `TRUNCATE`.
</Admonition>

## Replikationsfördröjning i byte

![Replikationsfördröjning i byte](/docs/introduction/rep_delay_bytes.png)

Diagrammet **Replikationsfördröjning i byte** visar den totala storleken, i byte, på den data som har skickats från den primära beräkningsinstansen men som ännu inte har tillämpats på repliken. Ett högre värde indikerar en större kö av data som väntar på att replikeras, vilket kan tyda på problem med replikeringsgenomströmningen eller resurstillgängligheten på repliken. Denna graf visas endast när du väljer en **Replica**-beräkningsinstans från rullgardinsmenyn **Compute**.

## Replikationsfördröjning i sekunder

![Replikationsfördröjning i sekunder](/docs/introduction/rep_delay_seconds.png)

Diagrammet **Replikationsfördröjning i sekunder** visar tidsfördröjningen, i sekunder, mellan den senaste transaktionen som bekräftats på primärberäkningsenheten och tillämpningen av den transaktionen på repliken. Ett högre värde tyder på att repliken ligger efter primärservern, vilket kan bero på nätverksfördröjning, hög replikeringsbelastning eller resursbegränsningar på repliken. Denna graf visas endast när du väljer en **Replica**-beräkningsinstans från rullgardinsmenyn **Compute**.

## Träfffrekvens för lokal filcache

![Diagram över träfffrekvensen i den lokala filcachen](/docs/introduction/local_file_cache_hit_rate.png)

Diagrammet **Träfffrekvens för lokal filcache** visar andelen läsförfrågningar som hanteras från OptiTechs lokala filcache (LFC).
Frågor som inte hanteras via vare sig Postgres delade buffertar eller den lokala filcachen (LFC) hämtar data från lagringsutrymmet, vilket är mer resurskrävande och kan leda till sämre prestanda vid frågor. För mer information om hur OptiTech cachelagrar data och hur LFC samverkar med Postgres delade buffertar, se [”Vad är den lokala filcachen?”](/docs/extensions/neon#what-is-the-local-file-cache)

## Arbetsuppsättningens storlek

![Diagram över arbetsminnets storlek](/docs/introduction/working_set_size.png)

Din arbetsuppsättning är storleken på den unika uppsättningen av Postgres-sidor (relationsdata och index) som används under ett visst tidsintervall – för att optimera prestanda och uppnå jämn latens rekommenderas det att du dimensionerar din beräkningskapacitet så att arbetsuppsättningen ryms i OptiTechs [lokala filcache (LFC)](/docs/extensions/neon#what-is-the-local-file-cache) för snabb åtkomst.

Diagrammet **Arbetsminnets storlek** visar mängden data som har använts (beräknat som antalet unika sidor som har använts × sidstorlek) under ett visst tidsintervall. Så här tolkar du diagrammet:

- **5m** (5 minuter): Denna rad visar de data som har hämtats under de senaste 5 minuterna.
- **15m** (15 minuter): På samma sätt som för 5-minutersintervallet mäter detta mått vilka data som har hämtats under de senaste 15 minuterna.
- **1h** (1 timme): Denna rad visar de data som har hämtats under den senaste timmen.
- **Storlek på den lokala filcachen**: Detta är storleken på LFC, som bestäms av storleken på din beräkningsinstans. Större beräkningsinstanser har större cacher. För information om cachestorlekar, se [avsnittet ”Så här dimensionerar du din beräkningsinstans](/docs/manage/computes#how-to-size-your-compute)”.
  För optimal prestanda bör den lokala filcachen vara större än storleken på din arbetsuppsättning under ett givet tidsintervall.
  Om storleken på din arbetsuppsättning är större än LFC-storleken rekommenderas det att du ökar beräkningsenhetens maximala storlek för att förbättra LFC-träfffrekvensen och uppnå god prestanda.

Om ditt arbetsbelastningsmönster inte förändras särskilt mycket över tid rekommenderas det att du jämför storleken på arbetsminnet för 1-timmarsintervallet med LFC-storleken och ser till att arbetsminnets storlek är mindre än LFC-storleken.

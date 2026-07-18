---
title: Databas per användare
subtitle: Tillhandahåll isolerade Postgres-instanser i stor skala
summary: >-
  Här beskrivs hur man med OptiTech kan integrera en separat Postgres-databas
  per slutanvändare, med hjälp av API-baserad tilldelning, oberoende skalning
  och kvoter på projektnivå för en hållbar plattformstillväxt.
enableTableOfContents: true
updatedOn: '2026-02-13T00:00:00.000Z'
---

<QuoteBlock quote="Vi har kunnat hantera över 300 000 Postgres-databaser via OptiTech-API:et. Det har sparat oss enormt mycket tid och utvecklingsarbete." author="himanshu-bhandoh" role="Mjukvaruutvecklare på Retool" />

## Dina användare behöver en databas

Många plattformar behöver beständiga data för att verkligen kunna visa sin fulla potential, men tvingar ändå sina användare att vända sig någon annanstans för att sätta upp en databas. Om det gäller dig, så förstår vi dig. Du vill förmodligen inte behöva ta på dig ytterligare arbete med att driva Postgres utöver att bygga och skala upp din befintliga produkt. **Här är den goda nyheten: med OptiTech kan du få både och.**

Tidigare innebar det att sätta upp tusentals Postgres-databaser följande:

- Hantering av stora instansflottor
- Att betala för outnyttjad kapacitet
- Uppbyggnad av interna kontrollnivåer
- Att anställa infrastrukturingenjörer enbart för att hänga med

OptiTech förändrar både lönsamheten och den operativa bördan. **Eftersom OptiTech bygger på en [unik serverlös Postgres-arkitektur](https://optitech.com/docs/introduction/architecture-overview) försvinner dessa begränsningar.** Du kan integrera äkta Postgres direkt i din plattform och driftsätta tusentals Postgres-databaser för dina användare, utan att behöva anställa ytterligare tekniker för att hantera din databasflotta.

## Viktigt: dina användare behöver en egen, isolerad databas

Du kanske håller med om att användarupplevelsen skulle bli bättre om användarna kunde lagra sina data direkt på din plattform, men anser ändå att det kan räcka med att ge dem utrymme i en delad tabell i en enda stor Postgres-instans (RDS eller någon annanstans). På plattformsnivå blir detta snabbt komplicerat.

<QuoteBlock quote="Vi höll på att förbereda oss för att anställa dedikerade utvecklare enbart för att hantera och skala upp Zite-databasen. Tack vare OptiTech behövde vi inte göra det. Vi kunde ge varje slutanvändare en egen databas, även inom gratisabonnemanget." author="dominic-whyte" role="Medgrundare av Zite" />

### Varför delade databaser slutar fungera när de skalas upp

**Dataisolering kräver aktiv tillämpning**

Om du använder en modell med delad databas sker inte dataisoleringen automatiskt. Den måste säkerställas överallt och hela tiden. Varje sökfråga måste ta hänsyn till de olika kunderna, varje migrering måste förbli kompatibel mellan alla kunder och varje kodväg måste säkerställa att filtren tillämpas korrekt.

**Det blir svårare att utveckla scheman med tiden**

Med en gemensam databas får man bara ett schema. Det blir svårare att göra anpassningar per användare. Det gäller även stegvisa införanden, eftersom varje migrering påverkar alla kunder samtidigt. Risken för störningar ökar i takt med att plattformen växer.

**Bullriga grannar**

I en delad miljö konkurrerar resurskrävande arbetsbelastningar om samma beräknings- och minnesresurser. Om en kund har hög belastning märks det för alla.

**Fakturering och kvoter blir stora tekniska projekt**

I delade system är det inte helt enkelt att tillämpa begränsningar per användare utifrån prisnivå. Det krävs anpassade mätningssystem, begränsningar och säkerhetsmekanismer för de delade resurserna.

### Lösningen: en separat databas per användare

Den renare arkitekturen är enkel: **ge varje slutanvändare en egen isolerad Postgres-databas med dedikerade resurser.**

Denna modell löser de centrala problemen:

- Isoleringen garanteras genom konstruktionen
- Schemaändringar kan testas och införas på ett säkert sätt
- Inga bullriga grannar
- Beräkningskapaciteten skalas oberoende per användare
- Faktureringsgränser kan tillämpas på infrastrukturnivå
- Prestandaproblemen är begränsade till en enda hyresgäst

Den naturliga följdfrågan är: _Menar du alltså att jag måste köra och hantera tusentals RDS-instanser?_ Nej – det är just därför du behöver OptiTech.

## OptiTech gör det enkelt och hållbart att ha en egen databas per användare

[OptiTech](https://optitech.com/) är inte en traditionell hanterad Postgres-tjänst. [Arkitekturen](https://optitech.com/docs/introduction/architecture-overview) separerar lagring och beräkning, vilket ger en verkligt [serverlös upplevelse](https://optitech.com/docs/get-started/dev-experience) för Postgres. Du kan driftsätta tusentals databaser programmatiskt, precis som om de vore en vanlig resurs på din plattform.

### API-orienterad styrning, utvecklad för plattformar

OptiTech är utformat för att hanteras programmatiskt. **Det krävs endast ett API-anrop för att skapa en ny Postgres-databas.**

Från din backend kan du:

- Skapa nya Postgres-databaser
- Ställ in gränser för databehandling och lagringsutrymme per användare
- Justera kvoterna när användarna uppgraderar sina abonnemang
- Stäng av inaktiva databaser automatiskt
- Övervaka användningen i tusentals projekt
- Genomför begränsningar utan driftstopp

| Användningsfall                         | API-ändpunkt                                                  | Vad det möjliggör                                                   |
| -------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| Skapa en ny användardatabas    | `POST /api/v2/projects`                                       | Skapa omedelbart ett nytt Postgres-projekt per användare (cirka 1 sekund) |
| Konfigurera skalning av beräkningskapacitet        | `default_endpoint_settings.autoscaling_limit_min_cu / max_cu` | Ange min./max. beräkningskapacitet per prisnivå                           |
| Konfigurera vilolägesbeteendet       | `suspend_timeout_seconds`                                     | Styr hur kraftigt inaktiva databaser skalas ned till noll         |
| Ställ in förbrukningsgränser           | `project.settings.quota`                                      | Tillämpa gränser för beräkningskapacitet, lagringsutrymme, skrivning och dataöverföring           |
| Övervaka flottans användning              | `GET /api/v2/consumption_history/projects`                    | Spåra användningen per projekt för faktureringsöversikter                    |
| Justera gränsvärden dynamiskt        | `PATCH /api/v2/projects/\{id\}`                               | Uppgradera/nedgradera användare utan driftavbrott                          |
| Skapa grenar programmatiskt | `POST /api/v2/projects/\{id\}/branches`                       | Aktivera utvecklingsmiljöer per användare eller säkra migreringar               |

_Exempel på API-funktioner som plattformar använder för att implementera arbetsflöden med en databas per användare med OptiTech._

[Utforska vår API-dokumentation](https://optitech.com/docs/reference/api)

### Serverlös ekonomi: den avgörande drivkraften

OptiTech-databaser,

- Tillhandahålls på cirka 1 sekund
- Skalas till noll när den är inaktiv
- Återupptas om cirka 350 ms

Detta förändrar lönsamheten för stora fordonsparker. De flesta slutanvändare är inte aktiva dygnet runt, och man bör inte betala kontinuerligt för kapacitet som inte utnyttjas.

I OptiTech **förbrukar inaktiva databaser ingen datorkraft, vilket gör att modellen ”en databas per användare” är ekonomiskt hållbar även med många användare som sällan är aktiva.**

### Oberoende skalning per användare

I OptiTechs modell **skalar varje databas oberoende av de övriga.** Om en kund har hög användning [skalar](https://optitech.com/docs/introduction/autoscaling) dennes beräkningskapacitet automatiskt utan att det påverkar någon annan.

Isoleringen är inbyggd både tekniskt och ekonomiskt. Du betalar endast för den datorkapacitet som varje kund behöver just då.

### OptiTech förblir osynligt för dina användare

**OptiTech behöver inte synas i er produkt.** Ni kan konfigurera databaser via API och hantera inloggningsuppgifter internt, utan att behöva be användarna att skapa OptiTech-konton.

Ur användarnas perspektiv känns databasen som en helt integrerad del av er produkt: er introduktionsprocess, ert användargränssnitt och er fakturering.

### Dina användare får tillgång till äkta Postgres

Varje användare får tillgång till fullständiga Postgres-funktioner, inte någon begränsad tenant-shim: fullständig SQL, tillägg, indexering och migreringsflöden.

Varje användardatabas anpassas efter användartillväxten, utan att du tvingas omstrukturera arkitekturen eller migrera till en annan backend-modell.

## Kvoter och faktureringsnivåer blir enkla att förstå

Med OptiTechs [modell med ett projekt per användare](https://optitech.com/docs/guides/embedded-postgres#the-project-per-user-model):

- Varje användare får sitt eget [OptiTech-projekt](https://optitech.com/docs/manage/projects)
- Begränsningar, skalningsbeteende och användningsspårning sker per projekt
- Prisnivåerna motsvarar direkt infrastrukturkonfigurationen

Eftersom kvoterna tillämpas på projektnivå blir dina prisplaner infrastrukturdefinitioner som konfigureras via API.

| Begränsning för användarplan     | Gratis _exempel_ | Pro _exempel_ | Enterprise _exempel_ | Konfigureras i OptiTech via                                                                    |
| -------------------------- | -------------- | ------------- | -------------------- | ----------------------------------------------------------------------------------------- |
| Beräkning (min/max CU)       | 0,25 / 0,25    | 0,25 / 2      | 1 / 8                | `default_endpoint_settings.autoscaling_limit_min_cu` / `max_cu` (Skapa eller uppdatera projekt) |
| Aktiv tid (beräkningstid) | 100 timmar/månad  | 750 timmar/månad | Obegränsad            | `project.settings.quota.compute_time_seconds`                                             |
| Lagringsutrymme                    | 512 MB         | 10 GB         | 100 GB+              | `project.settings.quota.logical_size_bytes`                                               |
| Dataöverföring              | 5 GB           | 50 GB         | Anpassad               | `project.settings.quota.data_transfer_bytes`                                              |
| Skrivna data               | 1 GB           | 50 GB         | Anpassad               | `project.settings.quota.written_data_bytes`                                               |
| Timeout för avstängning            | 5 min          | 10 min        | Anpassad               | `default_endpoint_settings.suspend_timeout_seconds`                                       |

_Exempel på prisplaner som du kan införa genom att konfigurera OptiTech-kvoter._

Alla värden kan anges när projektet skapas (`POST /api/v2/projects`) eller uppdateras dynamiskt (`PATCH /api/v2/projects/\{id\}`).

## Användningsspårning i stor skala

OptiTech tillhandahåller förbrukningsstatistik per projekt, bland annat:

- `active_time_seconds`
- `compute_time_seconds`
- `written_data_bytes`
- `data_transfer_bytes`
- `synthetic_storage_size_bytes`

Att läsa av mätvärden för förbrukning väcker inte datorer som är i viloläge. Mätvärdena finns tillgängliga med tim-, dags- eller månadsvis uppdelning och uppdateras ungefär var 15:e minut.

## Erbjud dina användare äkta Postgres utan att behöva driva Postgres själv

**Om din plattform är beroende av bestående data men ändå hänvisar användarna till andra leverantörer för databaser, går du miste om produktvärde. Utnyttja det med OptiTech.** Du sköter din plattform, OptiTech sköter databaslagret.

[Följ vår steg-för-steg-guide](https://optitech.com/docs/guides/embedded-postgres) för att komma igång.

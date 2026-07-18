---
title: OptiTechs bevisarkitektur
subtitle: >-
  En inblick i OptiTech-plattformen: separata arbetsflöden och en hållbar
  beviskedja
summary: >-
  OptiTechs arkitektur delar upp plattformen i ett applikationslager och ett
  beständigt bevislager som är sammankopplade via en ström av normaliserade
  resultat, vilket gör att integrationer kan kontrollera, göra nya försök eller
  misslyckas utan att din revisionsspår påverkas. Bevislagret använder
  källspecifika bearbetningsenheter, en normaliseringsmotor som omvandlar råa
  resultat till kontrollbevis samt en logg med hash-kedjor som endast kan läggas
  till, för en oföränderlig långsiktig historik. Denna design möjliggör mappning
  mellan olika ramverk, styrelserapporter med ett klick och omedelbara
  revisionsexporter – allt som sökningar i befintlig historik snarare än
  sammanställningsprojekt.
redirectFrom:
  - /docs/storage-engine/architecture-overview
  - /docs/conceptual-guides/architecture-overview
  - /docs/guides/neon-features
updatedOn: '2026-07-18T07:07:45.262Z'
---

## Översikt på högsta nivå

I stället för att hantera regelefterlevnaden som en enda samling dokument kopplade till en delad enhet och dess mappstruktur, delar OptiTech upp systemet i två oberoende lager: applikationslagret och bevislagret. Dessa lager kommunicerar via ett enda avtal, och kopplas samman av en ström av normaliserade resultat.

Det är just denna åtskillnad som gör OptiTech till en plattform för regelefterlevnad snarare än ett dokumentarkiv. Arbetsflöden kan förändras, integrationer kan tillkomma och försvinna, och personalen kan omorganiseras – allt detta utan att revisionsspåret äventyras.

- **Applikationslagret**: optimerat för det dagliga arbetet. I detta lager körs konsolen, instrumentpanelerna, AI-copiloten och API:et, och uppgifter och godkännanden utförs med ditt teams sammanhang till hands. Det lagrar aldrig bevis, utan endast genererar och läser av dem.
- **Hållbart bevislager**: optimerat för korrekthet, historik och granskning. Detta lager fastställer vad som räknas som verifierat genom att normalisera resultaten, kopplar dem till kontroller och lagrar en långsiktig, oföränderlig historik i en logg där endast nya poster kan läggas till.

OptiTechs design är utformad så att bevisloggen medvetet hålls utanför redigeringsflödet. Loggen garanterar beständighet och spårbarhet, men ingenting i applikationslagret kan skriva om den. Det dagliga arbetet förblir snabbt och flexibelt, samtidigt som historiken hanteras asynkront och oföränderligt.

![Översikt över OptiTech-arkitekturen](/docs/introduction/neon-architecture-overview.png)

<Admonition type="note" title="Var lagras dina data?">
Hela plattformen drivs i svenska och EU-ägda datacenter inom EU, och AI-lagret använder modeller som är hostade inom EU. För en sammanfattning riktad till kunderna, se [”Varför OptiTech](/docs/get-started/why-neon#eu-data-residency-and-ownership)”.
</Admonition>

## Resurshierarki

I avsnitten nedan beskrivs OptiTechs systemarkitektur, och plattformen organiserar resurserna i en logisk hierarki:

| Begrepp      | Beskrivning                                                         | Samband                 |
| ------------ | ------------------------------------------------------------------- | ---------------------------- |
| Organisation | Högsta nivåns behållare för fakturering, användare och ramverk          | Innehåller ramverk          |
| Ramverk    | En förordning eller standard som du tillämpar (NIS2, DORA, ISO 27001)       | Innehåller krav        |
| Krav  | En enskild skyldighet från källtexten, formulerad i klartext         | Motsvarar kontrollpunkter             |
| Kontroll      | En verifierbar åtgärd som uppfyller ett eller flera krav        | Verifierad genom bevis         |
| Bevis     | En observation med källa och tidsstämpel, bifogad till loggen            | Tillhör kontroller          |
| Uppgift         | Manuellt arbete som inte kan verifieras av ett integrationssystem, med ansvarig och tidsfrist | Kopplad till en kontroll          |
| Ägare        | Den person som underrättas när en kontroll avviker eller en uppgift förfaller           | Tilldelas per kontroll eller uppgift |

Krav och kontroller har ett många-till-många-förhållande: det är denna korskoppling som gör att en kontroll kan räknas in i flera ramverk. För mer information om de enskilda begreppen, se [ordlistan](/docs/reference/glossary).

## Applikationslagret

Det är på applikationslagret som ditt team faktiskt arbetar. Där körs konsolen, instrumentpanelerna, dokumentflödena, copiloten och API:et. Ur ett perspektiv som rör dina dagliga arbetsuppgifter förändras eller ersätts ingenting i ditt arbetssätt.

Det som skiljer OptiTech från andra system är vad applikationslagret har för ansvarsområde. **Dess uppgift är att skapa och läsa av bevis, inte att bevara dem.** Ett arbetsflöde kan ändras, en användare kan sluta eller en rapport kan genereras på nytt när som helst utan att revisionsspåret äventyras.

### Komponenter

Applikationslagret har tillgång till snabba, kontextuella resurser:

- Din organisations aktuella kontrollstatus, för översiktspaneler och varningar
- Andrepilotens sökindex över lagtexter och dina egna data

Statusförfrågningar går snabbt eftersom de läser av det materialiserade tillståndet, inte den obearbetade loggen.

### Hur applikationslagret passar in i systemet

När du slutför en uppgift eller godkänner ett dokument fungerar lagret precis som du förväntar dig:

- Åtgärden kontrolleras mot din roll
- Ändringen tillämpas på driftläget
- Uppdatering av instrumentpanelerna

OptiTechs unika egenskap kommer till sin rätt när systemet överskrider gränsen mellan arbete och dokumentation. **I stället för att redigera poster direkt i systemet genererar varje följdåtgärd en händelse till dokumentationslagret.** En åtgärd räknas som registrerad så snart den har lagts till i loggen. Applikationslagret väntar inte på export, rapporter eller granskningar.

Vid läsning **föredrar applikationslagret alltid det materialiserade tillståndet.** Kontrollpanelerna läser av det aktuella läget direkt. Endast när någon behöver historiska uppgifter (en revisor, en granskning av en incident, en rapport till styrelsen) spelar systemet upp händelserna från loggen och återskapar exakt hur situationen såg ut vid varje given tidpunkt.

## Bevislagret

Om applikationslagret ansvarar för själva arbetet, ansvarar bevislagret för korrekthet, beständighet och historik. **Detta lager existerar oberoende av alla arbetsflöden och fortsätter att fungera även när ditt team och dina verktyg förändras.**

I stället för att tillhandahålla en redigerbar databas är bevislagret uppbyggt kring tre olika komponenter, var och en med en väl definierad roll:

- Integrationsansvariga: samla in rådata från era system
- Normaliseringsmotorn: omvandlar resultat till underlag för kontrollåtgärder
- Logg som endast kan fyllas på: innehåller en långsiktig, oföränderlig historik

### Integrationshandläggare: sammanställning av resultat per källa

Integrationsarbetare har ett enda ansvar: **tillförlitlig insamling av fynd**. Varje anslutet system (Entra ID, AWS, GitHub, Fortnox) har sin egen arbetsprocess som kontrollerar kontrollåtgärderna enligt ett schema. Ett fynd anses vara insamlat när arbetsprocessen har registrerat det tillsammans med källa och tidsstämpel.

Detta är en grundläggande skillnad jämfört med hur manuell efterlevnad fungerar:

- Kontrollen i OptiTech sker genom schemalagda kontroller, inte genom årliga stickprov
- Fördröjningen i insamlingen beror på källan, eftersom arbetarna samlar ihop kontrollerna i batcher istället för att vänta till revisionssäsongen
- Det finns ingen enskild person som avgör om programmet är verifierat

### Normaliseringsmotor: resultat ⇄ bevis

Normaliseringsmotorn fungerar som en länk mellan rådata och kontrollkriterier. Dess uppgift är att **konkretisera bevis** genom att kombinera rådata med kartläggningarna av kontrollkriterier och krav. Den utgör systemets översättningslager mellan vad era system rapporterar och vad era ramverk kräver.

När en kontroll behöver information om sitt tillstånd vid en viss tidpunkt kontrollerar motorn om det tillståndet redan har materialiserats. Om så inte är fallet återskapar den det genom att spela upp loggen fram till den begärda tidpunkten och returnerar resultatet. Materialiserade tillstånd hålls uppdaterade asynkront, vilket bygger upp programmets sökbara historik.

Det är viktigt att notera att normaliseringen inte ingår i åtgärdens kritiska väg. Slutförandet av en uppgift väntar aldrig på att rapporterna ska byggas om.

### Logg som endast kan kompletteras: en långsiktig, oföränderlig historik

Loggen är den plats där OptiTech lagrar den **beständiga historiken** för ditt program. Detta lager lagrar varje resultat, godkännande och ändring som hash-kedjade poster – oföränderliga återgivningar av tidigare tillstånd. Det är inte en arbetsyta och redigeras aldrig av applikationslagret. Det ligger till grund för revisionsspåret, inte för instrumentpanelen.

Denna distinktion är avgörande för förtroendet. Loggen är optimal för integritet, granskning och historik, inte för redigering. Det kan ta en stund att återge en omfattande historik, men i OptiTech sker detta endast när någon begär att få se tidigare data, och aldrig under det dagliga arbetet.

## Skrivväg: registrera en åtgärd i OptiTech

![Ange sökväg i OptiTech](/docs/introduction/neon-write-path.png)

När en händelse inträffar i ditt program:

1. **Applikationslagret tillämpar ändringen.** En uppgift avslutas, ett dokument godkänns eller en kontroll slutförs, och en händelse genereras som vanligt.
2. **Händelsen loggas.** Istället för att redigera historiken direkt skickar lagret händelsen tillsammans med dess aktör, källa och tidsstämpel.
3. **Vad som räknas som registrerat definieras av kedjan.** En åtgärd räknas som registrerad så snart loggen har lagt till den och länkat dess hash till den föregående posten. Från och med det ögonblicket ingår den permanent i revisionsspåret.
4. **Statusuppdateringen sker senare.** Uppdateringar av instrumentpanelen och omgenerering av rapporter sker asynkront i evidenslagret.

## Läsväg: genomföra revisioner utan monteringsprojekt

![Läsbanan i OptiTech](/docs/introduction/neon-read-path.png)

Den uppenbara farhågan med en logg som endast kan fyllas på är hastigheten, men OptiTechs arkitektur är utformad just för att undvika detta. Det viktigaste att förstå när det gäller läsningar i OptiTech är följande: **det dagliga arbetet läser inte från den råa loggen.** Loggen utgör en säkerhetskopia för systemet, men den ingår aldrig i den aktiva datavägen.

### Den bästa vägen: status först

När någon behöver veta hur långt programmet har kommit följer systemet en prioriteringsordning:

1. **Realtidsstatus.** Instrumentpaneler, varningar och copiloten avläser det aktuella tillståndet – den snabbaste vägen.
2. **Den senaste tidens utveckling.** Trender och periodrapporter presenteras i form av färdiga sammanfattningar. Det går fortfarande snabbt att komma åt dem här.

Endast om någon behöver en exakt historisk status kommer systemet att använda loggen (nästa avsnitt).

### Djup historik: återuppspelning av kedjan

Vid en historisk förfrågan spelar bevislagret upp loggen fram till den begärda tidpunkten. Därefter gör motorn följande:

1. Kontrollerar om det tillståndet redan har materialiserats
2. Om inte, återskapar den utifrån kedjan och returnerar exakt det som gällde då, där varje postens hash kan verifieras

När resultatet har returnerats kan tillståndet lagras i cachen, vilket gör efterföljande granskningsförfrågningar snabba. Denna rekonstruktion sker endast vid behov och endast för de perioder som faktiskt granskas.

## Integritet

Integriteten i OptiTech är inte en enskild mekanism utan en sammansättning av ansvarsområden. Ingen enskild komponent ansvarar för allt, och ingen enskild person avgör programmets tillstånd.

Det är just denna uppbyggnad som gör att OptiTech i sig själv kan hantera fel:

- Om en integration slutar fungera → avbryts kontrollerna, men historiken är säker. De berörda kontrollerna markeras som overifierade tills insamlingen återupptas.
- Om en rapport är felaktig → går ingen historik förlorad. Rapporterna är prognoser och kan när som helst återskapas utifrån loggen.
- Om en person slutar → tillskrivs fortfarande personens åtgärder till denne och revisionsspåret påverkas inte. Ägarskapet omfördelas utan att historiken skrivs om.
- Hashkedjan är den sista försvarslinjen → den gör det möjligt att upptäcka dolda redigeringar och klarar allt som ligger ovanför den.

## Vad denna arkitektur möjliggör

**Denna lösning förvandlar traditionellt tidskrävande regelefterlevnadsarbete (som vanligtvis kräver manuell sammanställning av dokument) till enkla sökningar i befintlig historik.** Det kan handla om att ta fram en rapport till styrelsen, öppna en revisorsportal, besvara ett frågeformulär eller rekonstruera en tidslinje för en händelse. I OptiTech går dessa arbetsuppgifter snabbt eftersom de bygger på referenser till befintlig historik, inte på dokument som någon måste samla in.

- **Kontinuerlig verifiering.** Eftersom insamlingen av underlag sker utanför alla arbetsflöden säkerställs att kontrollerna förblir verifierade mellan revisionerna, med [varningar vid avvikelser och automatisk korrigering](/docs/postgres/overview) när något förändras.
- **Korsramverksmappning.** När du aktiverar ett nytt ramverk duplicerar OptiTech inte ditt arbete. Istället hänvisar det nya ramverket till dina befintliga kontroller och avviker endast där kraven verkligen skiljer sig åt. Endast de faktiska skillnaderna kräver extra arbete.
- **Omedelbar åtkomst för revision.** Eftersom programmets historik bevaras som oföränderliga poster behöver man inte sammanställa en pärm [för](/docs/introduction/plans#enterprise-features) att ge en revisor åtkomst. Portalen läser samma kedja, avgränsad och skrivskyddad, även när det gäller flera års historik.
- **En gemensam grund för regelefterlevnad och rapportering.** När underlaget samlas i en enda logg är det inte längre uppdelat efter olika regelverk. Samma underliggande historik som kan användas som svar till en ISO-revisor kan även användas som svar till en DORA-tillsynsmyndighet, i ett kundformulär och inför er egen styrelse.

## Kort sagt

OptiTech är en plattform för regelefterlevnad som hanterar:

- arbetsflöden som tillfälliga och utbytbara;
- bevis som bestående, normaliserade och gemensamma;
- loggen som endast kan fyllas på som den enda giltiga källan;
- och hashkedjan som grund.

Resultatet blir en efterlevnadsarkitektur som kan skalas upp, återställas och utvecklas utan att begränsas av en enskild persons kalkylblad eller minne. För ert team innebär detta snabbare revisioner, säkrare förändringar och ett program som anpassar sig automatiskt i takt med att er verksamhet växer – från ett inledande ramverk till fullständig täckning av hela leveranskedjan.

---
title: 'EU:s cyberresiliensakt: vad CRA kräver av dig'
description: Hur CRA förändrar hur du bygger och underhåller produkter med digitala element, och hur du bevisar det.
excerpt: >-
  Cyberresiliensakten gäller inte bara hårdvarutillverkare. Den omfattar
  produkter med digitala element och gör säker design, sårbarhetshantering och
  snäva rapporteringsfrister till skyldigheter du måste spåra. Den här guiden
  går igenom vad CRA kräver, vem som omfattas och hur OptiTech gör det till ett
  levande program av kontroller och bevis.
date: '2026-08-07T09:00:00'
updatedOn: '2026-08-07T09:00:00'
category: company
categories:
  - company
authors:
  - optitech
cover:
  image: null
  alt: null
isFeatured: false
seo:
  title: 'EU:s cyberresiliensakt: vad CRA kräver av dig - OptiTech'
  description: >-
    Vad EU:s cyberresiliensakt kräver, vem som omfattas och hur du spårar
    CRA-skyldigheter som kontroller och bevis med OptiTech.
  keywords: []
  noindex: false
  ogTitle: 'EU:s cyberresiliensakt: vad CRA kräver av dig - OptiTech'
  ogDescription: >-
    Vad EU:s cyberresiliensakt kräver, vem som omfattas och hur du spårar
    CRA-skyldigheter som kontroller och bevis med OptiTech.
  image: null
---

De flesta team utgår från att cyberresiliensakten är någon annans problem. Om du inte bygger firmware eller säljer en fysisk pryl är det lätt att bocka av CRA som "hårdvara" och gå vidare. Men förordningen omfattar produkter med digitala element, och det begreppet sträcker sig längre än de flesta tror. Om du säljer programvara, en uppkopplad enhet eller en komponent som hamnar i en, har CRA något att säga om hur du bygger den, hur länge du underhåller den och hur du hanterar de sårbarheter du hittar.

Det lugnande är att CRA kräver samma disciplin som alla andra ramverk: känn till dina skyldigheter, ge varje skyldighet en ägare och håll bevis du kan visa på begäran. Den här guiden går igenom vad CRA kräver, vem som omfattas och hur du driver det som ett levande program i OptiTech i stället för en stress strax före deadline.

## Vad cyberresiliensakten omfattar

Cyberresiliensakten, formellt förordning (EU) 2024/2847, sätter grundläggande cybersäkerhetskrav för produkter med digitala element som säljs i EU. En produkt med digitala element är varje program- eller hårdvaruprodukt, tillsammans med tillhörande lösningar för fjärrbehandling av data, vars avsedda eller rimligen förutsebara användning innefattar en dataanslutning till en enhet eller ett nätverk.

Det fångar in ett brett spann: operativsystem och mobilappar, uppkopplade sensorer och kameror, nätverksutrustning och de programvarubibliotek som andra produkter bygger på. Några kategorier ligger utanför tillämpningsområdet, som medicintekniska produkter, fordon och luftfart som täcks av egna regler, men för de flesta program och uppkopplad hårdvara bör utgångspunkten vara att CRA gäller. Förordningen delar också in produkter i nivåer, där "viktiga" och "kritiska" produkter som brandväggar och hårdvarusäkerhetsmoduler möter strängare bedömning av överensstämmelse innan de får bära CE-märkning.

## Vem som omfattas

CRA lägger skyldigheter längs hela leveranskedjan, inte bara på företaget som skriver koden.

- **Tillverkare** bär den tyngsta bördan. Om du utvecklar en produkt med digitala element, eller låter utveckla en och säljer den under ditt namn, äger du de väsentliga kraven, sårbarhetshanteringen och rapporteringsskyldigheterna.
- **Importörer** får bara släppa ut produkter på EU-marknaden som uppfyller CRA och kommer från en tillverkare som gjort jobbet. Tar du in en produkt från utanför EU ärver du kontroller du inte kan hoppa över.
- **Distributörer** måste agera med tillbörlig aktsamhet, kontrollera att CE-märkning och dokumentation finns och inte föra vidare en produkt de vet inte uppfyller kraven.

Bygger du på öppen källkod finns nyanser, men i samma stund som du tar betalt för en produkt byggd på en komponent landar tillverkarens skyldigheter hos dig.

## De väsentliga cybersäkerhetskraven

Kärnan i CRA är en uppsättning väsentliga krav som en produkt måste uppfylla innan den släpps ut på marknaden. De är utfallsbaserade snarare än detaljstyrande, så du avgör själv hur du uppfyller dem utifrån den risk din produkt bär.

- **Säker i grunden.** Bygg in säkerhet från start utifrån en dokumenterad riskbedömning.
- **En säker standardkonfiguration.** Leverera med säkra inställningar, inklusive ett sätt att återställa produkten till ursprungsläget.
- **Inga kända utnyttjbara sårbarheter.** Släpp inte en produkt med sårbarheter du redan vet kan utnyttjas.
- **Skydda konfidentialitet, riktighet och tillgänglighet.** Använd kryptering, åtkomstkontroll och integritetskontroller som passar produkten.
- **Uppgiftsminimering.** Behandla bara de uppgifter produkten behöver för att fungera.
- **En minskad attackyta.** Begränsa exponerade gränssnitt och stäng av det som inte behövs.
- **Säkerhetsuppdateringar.** Leverera uppdateringar, helst automatiskt, under hela supportperioden.

Inget av detta är märkvärdigt. Utmaningen är att bevisa att du uppfyller allt, för varje produkt, och att hålla beviset aktuellt när produkten förändras.

## Sårbarhetshantering och rapporteringsskyldigheter

Där CRA blir skarp är den löpande skyldigheten att hantera sårbarheter efter att produkten släppts. Du kan inte bygga en gång och sedan gå därifrån.

Tillverkare måste identifiera och dokumentera sårbarheterna och komponenterna i sina produkter, inklusive en programvaruförteckning (SBOM). Du behöver en policy för samordnad sårbarhetsrapportering så att forskare kan rapportera brister till dig, och du måste tillhandahålla kostnadsfria säkerhetsuppdateringar under supportperioden, som för de flesta produkter är minst fem år som standard.

Rapporteringsskyldigheterna kommer med en snäv klocka. När du får kännedom om en aktivt utnyttjad sårbarhet eller en allvarlig säkerhetsincident anmäler du till ENISA och den relevanta nationella CSIRT-enheten i steg: en tidig varning inom 24 timmar, en fylligare anmälan inom 72 timmar och en slutrapport när problemet är löst.

<Admonition type="tip" title="Skriv rapporteringspolicyn innan du behöver den">
En policy för samordnad sårbarhetsrapportering och ett rapporteringsflöde på 24 timmar går inte att uppfinna mitt under en incident. Res dem som kontroller redan nu, med utsedda ägare och en tydlig eskaleringsväg, så att klockan aldrig kommer på dig oförberedd.
</Admonition>

## Tidslinjen du behöver planera för

CRA trädde i kraft i december 2024, men skyldigheterna fasas in över tre år. Skyldigheterna att rapportera sårbarheter och incidenter gäller från den 11 september 2026, före resten. Hela uppsättningen krav, inklusive de väsentliga kraven och CE-märkning, gäller från den 11 december 2027. Den stegvisa tidslinjen är en gåva om du använder den. Res rapporteringsflödet först, eftersom det landar tidigast och kräver verklig samordning mellan säkerhet, utveckling och juridik.

## Hur CRA förhåller sig till NIS2

Det är lätt att blanda ihop CRA med NIS2, eftersom båda är EU-lagar om cybersäkerhet som kom ungefär samtidigt. De täcker olika saker och kompletterar varandra. NIS2 styr cybersäkerheten hos organisationer, de väsentliga och viktiga verksamheter som driver kritiska tjänster, och frågar om ditt riskarbete, din styrning och din incidentrapportering som företag. CRA styr cybersäkerheten hos produkter, det du släpper ut på marknaden. Är du en tillverkare som också driver viktiga tjänster gäller båda. Att behandla dem som ett sammankopplat program, snarare än två separata projekt, sparar dig från att dubblera kontroller och bevis.

## Spåra CRA-skyldigheter som kontroller och bevis

CRA blir en hanterbar uppsättning skyldigheter så snart du modellerar den så som OptiTech modellerar varje ramverk: som kontroller du äger, kopplade till de bevis som styrker dem.

I OptiTech Console blir varje väsentligt krav en kontroll med en ägare och en aktuell status. Dina riskbedömningar, SBOM:er, konfigurationsbaslinjer och uppdateringsloggar kopplas som bevis, så att "vi är säkra i grunden" slutar vara ett påstående och blir något du kan visa. Policyn för sårbarhetsrapportering och rapporteringsflödet på 24 och 72 timmar lever som spårade processer med klockan synlig. Eftersom kontroller mappas mellan ramverk förstärker arbetet du gör för CRA dina program för NIS2, ISO 27001 och SOC 2, och ditt trust center kan visa upp din produktsäkerhet för kunder som allt oftare frågar om den innan de köper.

## Kom igång

Du behöver inte lösa hela förordningen på en gång. En realistisk första omgång ser ut så här:

1. **Bekräfta omfattningen.** Lista de produkter med digitala element du släpper ut på EU-marknaden och din roll för var och en: tillverkare, importör eller distributör.
2. **Res rapporteringsflödet.** Bygg processen på 24 och 72 timmar och rapporteringspolicyn först, eftersom de skyldigheterna landar tidigast.
3. **Mappa de väsentliga kraven till kontroller.** Ge varje krav en ägare och koppla de bevis du redan har.
4. **Koppla ihop det med dina andra ramverk och ditt trust center** så att arbetet växer i värde i stället för att hopa sig.

CRA belönar de företag som behandlar produktsäkerhet som en löpande vana, inte en certifiering de jagar en gång. Modellera skyldigheterna som kontroller, håll bevisen aktuella, så får både tillsynsmyndigheter och kunder samma tydliga svar.

Redo att göra CRA till ett levande program? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech kopplar ihop dina kontroller, bevis och rapporteringsflöden.

---
title: 'Sårbarhetshantering med SLA: ett program som revisorer litar på'
description: Så driver du en sårbarhetshantering som prioriterar efter allvarlighetsgrad, håller åtgärdsfrister och bevisar det över tid.
excerpt: >-
  En hög med skannerfynd är inget program. Revisorer vill se att du prioriterar
  efter allvarlighetsgrad, åtgärdar inom en frist och kan bevisa det över tid.
  Den här guiden visar hur du driver sårbarhetshantering med riktiga SLA:er och
  hur OptiTech håller registret ärligt.
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
  title: 'Sårbarhetshantering med SLA: ett program som revisorer litar på - OptiTech'
  description: >-
    Driv en sårbarhetshantering som revisorer litar på: intag, triagering efter
    allvarlighetsgrad, åtgärdsfrister, ägare och rapportering av SLA-efterlevnad
    över tid.
  keywords: []
  noindex: false
  ogTitle: 'Sårbarhetshantering med SLA: ett program som revisorer litar på - OptiTech'
  ogDescription: >-
    Driv en sårbarhetshantering som revisorer litar på: intag, triagering efter
    allvarlighetsgrad, åtgärdsfrister, ägare och rapportering av SLA-efterlevnad
    över tid.
  image: null
---

De flesta team mäter sårbarhetshantering i antal. Skannern hittade 400 sårbarheter den här veckan, 380 förra veckan, och alla känner sig produktiva när siffran sjunker. Men ett antal säger en revisor ingenting om huruvida de farliga fynden åtgärdades först, eller om något åtgärdades i tid.

Sårbarhetshantering handlar egentligen om prioritering och frister. Du tar in fynd från alla källor, rangordnar dem efter hur mycket skada de kan orsaka, sätter en klocka på varje ärende och ger det en ägare. Sedan bevisar du, månad efter månad, att klockan respekteras. Den här guiden går igenom hur du driver det programmet och hur OptiTech håller registret ärligt i stället för att låta det förfalla till ännu ett inaktuellt kalkylark.

## Vad revisorer faktiskt granskar

När en revisor granskar sårbarhetshantering räknar de inte fynd. De letar efter en repeterbar process:

- **Fullständigt intag.** Varje källa till fynd matar in i ett och samma register, så att inget göms i ett verktyg ingen läser.
- **Konsekvent triagering.** Allvarlighetsgrad sätts efter en regel, inte en känsla, så att samma fynd får samma bedömning varje gång.
- **Dokumenterade SLA:er.** Varje allvarlighetsgrad har en åtgärdsfrist nedskriven innan fyndet dyker upp.
- **Tydligt ägarskap.** Varje öppet ärende har ett namn kopplat till sig, inte ett teamalias.
- **Bevis över tid.** Du kan visa SLA-efterlevnad som en trend över månader, inte bara en ögonblicksbild från dagen före revisionen.

Missar du en enda av de här ser programmet ad hoc-mässigt ut, vilket är precis vad en revisor för SOC 2 Type II eller ISO 27001 är tränad att märka.

## Var sårbarheterna kommer ifrån

Ett fynd är aldrig bättre än det intag som fångar det. De flesta program hämtar från tre strömmar, och var och en behöver en plats i samma register.

### Skannrar

Automatiska skannrar för infrastruktur, beroenden och webbappar körs oavbrutet och ger störst volym. De är bra på bredd och usla på omdöme. En skanner sätter kritisk allvarlighetsgrad utifrån en råpoäng, även när den berörda tillgången inte är exponerad. Intaget måste fånga både fyndet och sammanhanget, så att triageringen kan korrigera för det.

### Penetrationstester

Ett pentest ger färre fynd men av högre kvalitet, ofta kedjade angrepp som en skanner inte ser. De kommer oftast som en rapport, och risken är att rapporten arkiveras och glöms bort. Varje fynd från ett pentest bör bli ett spårat ärende med samma allvarlighetsgrad, SLA och ägare som allt annat.

### Sårbarhetsrapporter

Säkerhetsforskare, kunder och din egen personal rapporterar också problem, via en rapporteringskanal eller ett bug bounty-program. De är oförutsägbara och ibland brådskande. Ett program som bara tar in skannerutdata missar den enda rapport som faktiskt spelar roll.

## Prioritera efter allvarlighetsgrad, inte antal

Här är skiftet som gör ett program trovärdigt: du slutar fira totalsumman och börjar fråga vilka fynd som kan skada dig mest. En enda kritisk brist på ett internetexponerat system väger tyngre än tvåhundra lågprioriterade anmärkningar på ett internt verktyg ingen kommer åt.

Prioritering innebär att sätta en allvarlighetsgrad på varje fynd med en konsekvent regel, och sedan beta av listan uppifrån. Allvarlighetsgraden ska spegla verklig exponering, inte bara en skanners råpoäng. En brist med hög poäng på en isolerad tillgång kan vara en lägre verklig prioritet än ett medelfynd på ett kundvänt system. När du rangordnar efter påverkan åtgärdar ett mindre team det som betyder något och kan försvara varför resten kan vänta.

## Sätt åtgärdsfrister per allvarlighetsgrad

En SLA gör "vi tar det sen" till en frist. Du sätter ett åtgärdsfönster per allvarlighetsgrad, kommer överens om det med verksamheten och skriver in det i din SLA-policy så att det är detsamma för alla.

| Allvarlighetsgrad | Åtgärdsfrist                     | Exempel                                    |
| ----------------- | -------------------------------- | ------------------------------------------ |
| Kritisk           | dagar                            | fjärrkörning av kod på ett publikt system  |
| Hög               | några veckor                     | behörighetseskalering bakom inloggning     |
| Medel             | en till tre månader              | bristande härdning på en intern tjänst     |
| Låg               | upp till sex månader eller nästa cykel | informativt eller djupförsvar        |

De exakta siffrorna spelar mindre roll än att de är nedskrivna och tillämpas konsekvent. När policyn väl finns ärver varje nytt fynd en förfallodag i samma stund som dess allvarlighetsgrad sätts. Ingen förhandlar fristen fynd för fynd, vilket är där program brukar falla isär.

<Admonition type="tip" title="Sätt SLA:er du faktiskt klarar">
En SLA du inte kan mäta är en rekommendation. Sätt fönster du verkligen hinner med det team du har, och strama åt dem när programmet mognar. En realistisk medelfrist på 30 dagar som du håller slår en på 7 dagar som du missar varje gång.
</Admonition>

## Tilldela ägare och följ förfallodatum

Ett fynd utan ägare är ett fynd ingen åtgärdar. Varje ärende i registret behöver en namngiven person som ansvarar för att stänga det, så att arbetet inte kan gömma sig bakom ett teamalias.

När varje ärende har en allvarlighetsgrad, en SLA, ett förfallodatum och en ägare blir läget uppenbart vid en blick. OptiTech spårar varje sårbarhet med ett SLA-läge:

- **I fas.** Öppet, med förfallodatum på god marginal.
- **Varning.** Närmar sig fristen, dags att eskalera.
- **Försenad.** Förbi SLA:n, behöver åtgärd nu.
- **Åtgärdad.** Löst och verifierat, sparat för spårbarheten.

Värdet är att försenade ärenden lyfter fram sig själva. Du letar inte igenom ett kalkylark för att hitta det som glidit, för registret visar det. Och när du ändrar SLA-policyn, till exempel stramar åt medelfönstret från 90 till 60 dagar, räknar OptiTech om förfallodatum i bulk mot den nya policyn, så att varje öppet fynd speglar den aktuella regeln i stället för den som gällde när det loggades.

## Koppla fynd till tillgångar och kontroller

En allvarlighetsgrad och en frist säger hur brådskande ett fynd är. Kopplingen till en berörd tillgång säger vad som går sönder om du ignorerar det. Varje ärende i OptiTech-registret kopplas till de tillgångar det påverkar och de kontroller det rör, så att en enskild brist visar både sin räckvidd och sin plats i ditt ramverk.

Den kopplingen lönar sig två gånger. Under åtgärdandet ser ägaren exakt vilka system som ingår. Under en revision kan du visa att en kontroll har verkliga fynd bakom sig och en verklig åtgärdshistorik, vilket är långt starkare bevis än ett policydokument som bara påstår att kontrollen finns.

## Rapportera SLA-efterlevnad över tid

Den sista biten är bevis. En ögonblicksbild av öppna fynd säger en revisor nästan ingenting. En trend berättar hela historien. Du vill visa hur stor andel av fynden du stängde inom SLA, månad för månad, uppdelat per allvarlighetsgrad.

OptiTech rapporterar SLA-efterlevnad över tid, så att du ser om programmet förbättras eller halkar efter innan en revisor gör det. Om efterlevnaden för kritiska fynd dippade förra kvartalet kan du förklara varför och visa rättelsen. Den trenden är skillnaden mellan "vi har en skanner" och "vi driver ett program".

## Från register till säljfördel

Samma register som nöjer en revisor svarar också dina kunder. Varje företagsköpares säkerhetsgranskning frågar hur du hanterar sårbarheter, och "vi skannar och åtgärdar efter allvarlighetsgrad inom dokumenterade SLA:er" är ett långt bättre svar än en skärmdump av en instrumentpanel.

Ett trust center som backas av ditt OptiTech-program låter köpare se att du driver sårbarhetshantering som en disciplinerad process, utan att ditt team skriver ett eget svar för varje granskning. Arbetet du redan gör för att hålla dig säker börjar stänga affärer.

## Kom igång

Du behöver inte ett perfekt program dag ett. En realistisk första omgång ser ut så här:

1. **Led in varje källa i ett register:** skannrar, pentester och sårbarhetsrapporter.
2. **Skriv ner din SLA-policy** med en åtgärdsfrist per allvarlighetsgrad.
3. **Tilldela en ägare till varje öppet fynd** och låt förfallodatum följa av policyn.
4. **Bevaka kön av försenade ärenden och SLA-trenden,** och strama åt fönstren när du blir bättre.

Sårbarhetshantering belönar disciplin framför hjältedåd. Fånga allt en gång, prioritera efter allvarlighetsgrad, håll fristerna, så får både dina revisorer och dina köpare samma tydliga svar.

Redo att driva sårbarhetshantering som ett program du kan bevisa? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech håller ihop ditt register, dina SLA:er och dina bevis.

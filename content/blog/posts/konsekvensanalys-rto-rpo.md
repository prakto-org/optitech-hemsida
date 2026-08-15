---
title: 'Konsekvensanalys: så sätter du RTO och RPO som håller'
description: Så förvandlar en konsekvensanalys återställningsmål från gissningar till beslut du kan försvara.
excerpt: >-
  En konsekvensanalys talar om vilka funktioner som betyder mest, hur snabbt du
  behöver dem tillbaka och hur mycket data du har råd att förlora. Den här guiden
  går igenom vad en konsekvensanalys är, hur den ligger till grund för kontinuitet
  och DORA, och hur OptiTech håller den aktuell mot ditt tillgångsregister.
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
  title: 'Konsekvensanalys: så sätter du RTO och RPO som håller - OptiTech'
  description: >-
    Vad en konsekvensanalys är, hur den ligger till grund för
    kontinuitetsplanering och DORA, och hur du sätter RTO och RPO du kan försvara.
  keywords: []
  noindex: false
  ogTitle: 'Konsekvensanalys: så sätter du RTO och RPO som håller - OptiTech'
  ogDescription: >-
    Vad en konsekvensanalys är, hur den ligger till grund för
    kontinuitetsplanering och DORA, och hur du sätter RTO och RPO du kan försvara.
  image: null
---

De flesta team skriver en kontinuitetsplan ungefär som de skriver ett PM om en brandövning. De väljer ett återställningsmål som låter ansvarsfullt, skriver in det i ett dokument och går vidare. Sedan slår en verklig störning till och målet visar sig vara en gissning, för ingen har mätt vad verksamheten faktiskt förlorar när en kritisk funktion slås ut.

En konsekvensanalys löser det. Det är arbetet som talar om vilka funktioner som betyder mest, hur snabbt du behöver ha dem tillbaka och hur mycket data du har råd att förlora på vägen. Utan den vilar din kontinuitetsplan på tyckande. Med den kan varje återställningsmål spåras till verklig påverkan. Den här guiden går igenom vad en konsekvensanalys är, hur den ligger till grund för kontinuitetsplanering och DORA:s krav på motståndskraft, och hur du driver den som ett levande program med OptiTech.

## Vad en konsekvensanalys egentligen är

En konsekvensanalys (BIA) svarar på en fråga: om den här funktionen stannar, vad kostar det oss och hur snabbt växer kostnaden? Det är inte en riskbedömning. En riskbedömning frågar hur sannolikt ett hot är. En konsekvensanalys utgår från att störningen redan har hänt och mäter skadan över tid.

Resultatet är en rangordnad bild av din verksamhet. För varje verksamhetsfunktion fångar du den ekonomiska, operativa, juridiska och anseendemässiga påverkan av ett avbrott, och hur påverkan trappas upp ju längre funktionen ligger nere. En timmes avbrott kan vara en irritation för en funktion och ett regelbrott för en annan. Konsekvensanalysen är det som skiljer dem åt, så att du lägger din återställningsbudget där den faktiskt skyddar verksamheten.

## Varför en konsekvensanalys ligger till grund för kontinuitet och DORA

Du kan inte planera en återställning du inte har kartlagt. Kontinuitetsplanering bygger på att du känner dina prioriteringar innan en incident, och det är i konsekvensanalysen de prioriteringarna föds. Den sätter de återställningsmål som resten av planen måste klara, och den motiverar investeringen i säkerhetskopior, redundans och reservkapacitet.

För finansiella aktörer i EU är det inte frivilligt. DORA (Digital Operational Resilience Act) kräver att företag förstår hur störningar i kritiska funktioner påverkar verksamheten och sätter återställningsmål som vilar på den förståelsen. NIS2 driver väsentliga och viktiga verksamheter åt samma håll. En konsekvensanalys är beviset på att dina återställningsmål är genomtänkta snarare än önsketänkande, och det är precis vad en tillsynsmyndighet eller revisor frågar efter när de prövar din motståndskraft.

## Hitta dina kritiska verksamhetsfunktioner

Börja med funktioner, inte system. En kritisk verksamhetsfunktion är något organisationen gör som kunder, myndigheter eller verksamheten själv är beroende av: att hantera betalningar, att ta ombord kunder, att köra lön, att hålla en tjänst tillgänglig. Lista dem i verksamhetstermer först, för det är på det språket påverkan mäts.

Rangordna dem sedan efter påverkan, inte efter hur omtyckt teamet som sköter dem är. Funktionerna som genererar intäkter, bär juridiska skyldigheter eller skyddar kunder hamnar oftast högst. Var ärlig med vilka som kan vänta ett dygn och vilka som inte kan vänta en timme. Den rangordningen är ryggraden i allt som följer.

### Koppla funktioner till tillgångarna som stöder dem

En funktion står aldrig ensam. Bakom "hantera betalningar" finns en kedja av stödjande tillgångar: en applikation, en leverantör, en integration, ett team, kanske en fysisk plats. Om du sätter ett återställningsmål för funktionen men aldrig kartlägger vad den är beroende av, upptäcker du glappet mitt under incidenten, vilket är sämsta tänkbara tidpunkt.

Beroendekartläggning är där en konsekvensanalys gör verklig nytta. För varje kritisk funktion noterar du tillgångarna den vilar på och i vilken ordning de behöver komma tillbaka. Ett återställningsmål på funktionen är bara trovärdigt om varje tillgång under den också kan klara målet. När ett beroende är långsammare än funktionens mål har du hittat en svag länk värd att åtgärda innan den brister.

## Att definiera RTO och RPO i klartext

Två tal förvandlar en konsekvensanalys till en användbar plan. De låter tekniska, men idéerna är enkla.

### Mål för återställningstid (RTO)

RTO (recovery time objective) är hur länge en funktion kan ligga nere innan påverkan blir oacceptabel. Om lönehanteringen har en RTO på åtta timmar förbinder du dig att återställa den inom åtta timmar från ett avbrott. Det är ett mål för hastighet, och det ska komma direkt ur den påverkan du mätt. En funktion vars påverkan skjuter i höjden inom en timme behöver en kort RTO. En som försämras långsamt tål en längre.

### Mål för återställningspunkt (RPO)

RPO (recovery point objective) är hur mycket data eller arbete du har råd att förlora, mätt som ett tidsfönster. En RPO på femton minuter betyder att du kan acceptera att förlora upp till femton minuters senaste arbete om du måste falla tillbaka på din senaste fungerande kopia. Det styr hur ofta du skyddar funktionens data och hur mycket färsk aktivitet du kan tvingas återskapa för hand. En kort RPO kostar mer att upprätthålla, så du reserverar den för funktionerna där förlorat arbete gör verklig skada.

Fällan är att sätta båda till noll för allt för att det känns tryggt. Nära omedelbar återställning och noll dataförlust är dyrt, och att tillämpa det överallt bränner budget du borde lägga på funktionerna som verkligen behöver det. Konsekvensanalysen är det som motiverar ett snävare mål här och ett lösare där.

## Eskaleringströsklar och påverkan över tid

Påverkan är sällan en rak linje. En funktion kan vara uthärdlig i två timmar, smärtsam vid fyra och ett avtalsbrott vid åtta. Att fånga den kurvan, inte ett enda tal, är det som gör en konsekvensanalys användbar under press.

Eskaleringströsklar förvandlar kurvan till handling. Du definierar punkten där ett avbrott slutar vara en operativ fråga och blir en ledningsfråga: när ledningen ska larmas, när kontinuitetsplanen ska utlösas, när en myndighet ska informeras. Under en verklig incident har ingen lugnet att uppfinna de trösklarna. Sätt dem i förväg, så följer responsen planen i stället för den högsta rösten i rummet.

<Admonition type="tip" title="Förankra målen i påverkan, inte vana">
Kopiera inte en RTO från en annan funktion för att den känns tillräckligt nära. Sätt varje mål utifrån den påverkan konsekvensanalysen mätt, så att du kan försvara det inför en kund, en myndighet eller din egen styrelse utan att vifta med händerna.
</Admonition>

## Varför en konsekvensanalys bara är användbar om den hålls aktuell

En konsekvensanalys är en ögonblicksbild av en verksamhet som hela tiden rör sig. Du lägger till en funktion, byter leverantör, avvecklar en applikation, och var och en av de förändringarna kan flytta ett återställningsmål eller bryta ett beroende du kartlade förra året. En konsekvensanalys som lever i ett dokument från arton månader tillbaka beskriver ett företag som inte längre finns.

Det är det här felläget som fångar de flesta team. Analysen var gedigen när den skrevs, men ingen äger att hålla den aktuell, så den glider tills en incident eller en revision blottar glappet. En konsekvensanalys når sitt värde bara när den följer verksamheten i realtid, vilket betyder att den måste vara kopplad till tillgångarna den beskriver snarare än kopierad bort från dem.

## Att driva din konsekvensanalys i OptiTech

OptiTech kör din konsekvensanalys mot samma tillgångsregister som ditt program redan underhåller. Varje kritisk funktion kopplas till sina stödjande tillgångar, så att en förändring i registret syns i analysen i stället för att i tysthet göra den fel. RTO och RPO lever på funktionen, knutna till den påverkan du noterat, och eskaleringströsklarna sätts där alla kan se dem.

Eftersom analysen sitter inne i ditt efterlevnadsprogram är påverkansbedömningarna, beroendena och återställningsmålen bevis du kan visa upp. När du behöver mata en kontinuitetsplan eller besvara en DORA-fråga exporterar du den aktuella konsekvensanalysen från OptiTech Console i stället för att återskapa den ur minnet. Arbetet du lade på att förstå din verksamhet blir beviset på att din motståndskraft är genomtänkt.

## Kom igång

Du behöver inte analysera allt på en gång. En realistisk första omgång ser ut så här:

1. **Lista dina kritiska verksamhetsfunktioner** i verksamhetstermer, och rangordna dem efter påverkan.
2. **Koppla varje funktion till sina stödjande tillgångar** så att varje återställningsmål har beroenden bakom sig.
3. **Sätt en RTO och RPO för varje funktion** utifrån den påverkan du mätt, inte utifrån vana.
4. **Definiera eskaleringströsklar** så att responsen bestäms innan incidenten, inte under den.
5. **Koppla konsekvensanalysen till ditt tillgångsregister** så att den hålls aktuell när verksamheten förändras.

En konsekvensanalys belönar de företag som behandlar den som en levande bild av verksamheten snarare än ett dokument de blir klara med en gång. Mät påverkan, sätt mål du kan försvara, och håll dem aktuella, så håller din kontinuitetsplan när du verkligen behöver den.

Redo att göra din konsekvensanalys till ett levande program? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech knyter dina återställningsmål till ditt tillgångsregister.

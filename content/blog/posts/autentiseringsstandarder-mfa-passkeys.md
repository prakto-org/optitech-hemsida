---
title: 'Autentiseringsstandarder: MFA och passkeys'
description: Varför lösenord ensamma inte räcker och hur du gör stark autentisering till en kontroll du kan bevisa.
excerpt: >-
  Flerfaktorsautentisering och passkeys har gått från trevligt-att-ha till ett
  baskrav i varje ramverk och varje cyberförsäkring. Den här guiden går igenom
  varför lösenord ensamma inte räcker, hur nätfiskeresistent autentisering ser
  ut, och hur OptiTech gör din autentiseringspolicy till en kontroll med bevis
  du kan visa på begäran.
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
  title: 'Autentiseringsstandarder: MFA och passkeys - OptiTech'
  description: >-
    Varför lösenord ensamma inte räcker och hur flerfaktorsautentisering,
    passkeys och SSO blir en dokumenterad kontroll med bevis du kan visa.
  keywords: []
  noindex: false
  ogTitle: 'Autentiseringsstandarder: MFA och passkeys - OptiTech'
  ogDescription: >-
    Varför lösenord ensamma inte räcker och hur flerfaktorsautentisering,
    passkeys och SSO blir en dokumenterad kontroll med bevis du kan visa.
  image: null
---

Fråga de flesta team hur de hanterar autentisering och du får en axelryckning. Alla har en lösenordspolicy någonstans, ett par personer använder tvåfaktor på adminpanelen, och resten sköts av vana. Det dög när ett läckt lösenord innebar ett komprometterat konto. Det duger inte längre, när en enda återanvänd inloggningsuppgift kan lämna över hela din miljö till en angripare.

Autentisering har i tysthet blivit en av de kontroller som revisorer, kunder och försäkringsbolag tittar på först. Den här guiden går igenom vad stark autentisering faktiskt betyder i dag, varför flerfaktorsautentisering och passkeys har gått från trevligt-att-ha till baskrav, och hur du gör allt det till en dokumenterad kontroll med bevis du kan visa på begäran. Den ligger bredvid åtkomstkontroll snarare än upprepar den: åtkomstkontroll avgör vem som släpps in och vad de får röra, och autentisering bevisar att personen vid dörren verkligen är den hen utger sig för att vara.

## Varför lösenord ensamma inte räcker

Lösenord fallerar av skäl som inte har något med hur smarta dina regler är. Folk återanvänder dem mellan tjänster, så ett intrång någonstans blir ett intrång överallt. Nätfiskesidor fångar dem på sekunder, och den som skriver in dem märker sällan något. Verktyg för automatiserade inloggningsförsök spelar upp stulna kombinationer av användarnamn och lösenord mot din inloggning i miljontal, till nästan ingen kostnad för angriparen.

Längre lösenord och tvingad rotation löser inget av detta. Ett lösenord på 16 tecken är precis lika lätt att nätfiska som ett på 8, och obligatoriska byten var 90:e dag driver folk mot förutsägbara mönster och lappar på skärmen. Säkerhetsbranschen har i stort övergett komplexitetsteatern. Det som faktiskt gör skillnad är att lägga till en andra faktor och, ännu hellre, använda faktorer som inte går att nätfiska alls.

## Flerfaktorsautentisering är baskravet nu

För några år sedan var flerfaktorsautentisering (MFA) något du aktiverade för administratörer och hoppades att alla andra kom igång med. I dag är det ett uttalat krav nästan överallt du tittar.

- **SOC 2** granskar om logisk åtkomst skyddas av stark autentisering, och MFA på kritiska system är standardsvaret granskarna förväntar sig.
- **ISO 27001** behandlar autentisering som en del av åtkomsthanteringen, och ditt statement of applicability måste visa hur du hanterar den.
- **NIS2** höjer ribban för väsentliga och viktiga entiteter, med flerfaktors- eller kontinuerlig autentisering direkt namngiven bland baskraven.
- **DORA** förväntar sig att finansiella entiteter tillämpar stark autentisering på åtkomst till kritiska funktioner och data.

Cyberförsäkring har rört sig ännu snabbare. Förnyelser kräver numera rutinmässigt MFA på e-post, fjärråtkomst och privilegierade konton innan ett bolag ens lämnar offert, och en lucka kan ogiltigförklara en skadeanmälan. Med andra ord är MFA inte längre en säkerhetsuppgradering du väljer. Det är ett villkor för att göra affärer, bli certifierad och förbli försäkrad.

## Nätfiskeresistenta metoder och passkeys

All MFA är inte likvärdig. En engångskod via SMS är bättre än inget, men den kan avlyssnas, SIM-kapas eller nätfiskas på en falsk inloggningssida tillsammans med lösenordet. Push-notiser är starkare, men angripare tröttar ut folk med upprepade förfrågningar tills någon trycker godkänn av ren utmattning.

Nätfiskeresistent autentisering stänger den luckan. De här metoderna binder inloggningen till den riktiga sajten, så att en falsk sida inte kan slutföra den:

- **Passkeys** (lösenordsnycklar) ersätter lösenordet helt med en kryptografisk nyckel som lagras på din enhet och låses upp med ditt fingeravtryck, ansikte eller din PIN-kod. Det finns inget att skriva in, så det finns inget att nätfiska.
- **Hårdvarusäkerhetsnycklar** byggda på FIDO2-standarden gör samma jobb med en fysisk enhet, vilket många team fortfarande föredrar för sina känsligaste konton.

Du behöver inte byta ut allt över en natt. Ett rimligt mål är nätfiskeresistent autentisering för administratörer och alla som kan nå känsliga data, med stark MFA för övriga. Poängen för styrningen är att bestämma standarden med avsikt och dokumentera den, inte att lämna valet till vad varje tjänst råkar ha som förval.

<Admonition type="tip" title="Sätt ett golv, höj det sedan">
Välj en lägsta godtagbar faktor för varje åtkomstnivå och skriv ner den: passkeys eller hårdvarunycklar för administratörer, appbaserad MFA för alla andra, och SMS bara där inget starkare finns. När golvet är dokumenterat kan du spåra undantag och stänga dem ett i taget i stället för att gissa var de svaga punkterna sitter.
</Admonition>

## Enkel inloggning som styrhävstång

Enkel inloggning (SSO) säljs ofta in som en bekvämlighetsfunktion, och det är den. Men dess verkliga värde för efterlevnad är kontroll. När varje applikation autentiserar via en identitetsleverantör tillämpar du din autentiseringsstandard på ett ställe i stället för app för app. Slå på MFA hos leverantören så ärver varje ansluten tjänst den.

SSO löser också den stökigaste delen av offboarding. Inaktivera en avgående medarbetare hos identitetsleverantören så faller åtkomsten till alla underliggande appar med den, vilket är precis den sortens bevis en revisor vill se. Det är där autentisering och åtkomstkontroll möts: SSO är mekanismen som gör båda bevisbara på en gång. Det krymper antalet separata inloggningsuppgifter i omlopp, och varje uppgift du tar bort är en som en angripare inte kan stjäla.

## Skriv ner din autentiseringspolicy

En kontroll du inte kan beskriva är en kontroll du inte kan bevisa. Din autentiseringspolicy behöver inte vara lång, men den måste tydligt ange:

- Vilka faktorer som är godtagbara för vilka system och roller.
- Var MFA är obligatoriskt och var nätfiskeresistenta metoder krävs.
- Hur du hanterar delade konton eller tjänstekonton som inte kan använda vanlig MFA.
- Vad som händer när någon tappar en faktor, och hur du återställer åtkomst säkert.
- Hur ofta du ser över policyn och vem som äger den.

Nedskriven blir den referensen som varje revision, säkerhetsgranskning och försäkringsförnyelse pekar tillbaka på. Kvar i folks huvuden blir den det som faller isär i samma stund som någon ber dig bevisa den.

## Så spårar OptiTech autentiseringskontrollen

I OptiTech Console är autentisering inte ett stycke begravt i ett policydokument. Det är en kontroll i ditt program, kopplad till varje ramverk som kräver den. Kartlägg den enda autentiseringskontrollen en gång så visar OptiTech den uppfylla motsvarande krav i SOC 2, ISO 27001, NIS2 och DORA samtidigt, så att du inte underhåller fyra frånkopplade svar på samma fråga.

Varje kontroll bär sitt bevis. För autentisering betyder det oftast en konfigurationsexport från din identitetsleverantör som visar att MFA tillämpas, en täckningsrapport som listar vilka konton som är anslutna, och den signerade autentiseringspolicyn själv. OptiTech håller det beviset kopplat till kontrollen, spårar när det senast uppdaterades och påminner ägaren innan det blir inaktuellt. När en revisor frågar hur du tillämpar stark autentisering behöver du inte leta bland skärmdumpar. Kontrollen, dess status och dess bevis sitter redan tillsammans.

Och eftersom samma program matar ditt trust center kan du visa kunder att du tillämpar MFA utan att blotta något känsligt. En enda rad i ditt trust center om att stark autentisering krävs i hela organisationen besvarar en fråga som annars hade landat i din inkorg som en säkerhetsgranskning.

## Kom igång

Du kan komma en bra bit på några få fokuserade steg:

1. **Tillämpa MFA på dina konton med högst risk först**, alltså e-post, din identitetsleverantör och allt med administrativ räckvidd.
2. **Flytta administratörer och roller med känsliga data till nätfiskeresistenta metoder**, antingen passkeys eller hårdvarunycklar.
3. **Samla appar bakom SSO** så att din standard tillämpas på ett ställe.
4. **Skriv ner autentiseringspolicyn** och spåra den som en kontroll i OptiTech, med bevis kopplat.

Stark autentisering var förr projektet ingen hade tid med. Nu är det kontrollen alla granskar först: revisorer, köpare och försäkringsbolag lika mycket. Sätt standarden med avsikt, bevisa den en gång, och håll beviset aktuellt i stället för att bygga om det under press.

Redo att göra autentisering till en dokumenterad och bevisbar kontroll? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech kopplar ihop dina kontroller, ramverk och bevis.

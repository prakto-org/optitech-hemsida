---
title: 'Kryptering i vila och under överföring: en kontroll du kan bevisa'
description: Vad kryptering i vila och under överföring betyder, varför ramverken kräver dem och hur du dokumenterar en standard du kan stå för.
excerpt: >-
  Alla vet att data ska vara krypterad. Betydligt färre kan peka på en nedskriven
  standard, namnge den som äger kontrollen och lämna över beviset som styrker det.
  Det här inlägget förklarar kryptering i vila och under överföring i klartext,
  varför ramverk och köpare förväntar sig båda, och hur OptiTech spårar
  krypteringskontrollen tillsammans med dess bevis.
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
  title: 'Kryptering i vila och under överföring: en kontroll du kan bevisa - OptiTech'
  description: >-
    Vad kryptering i vila och under överföring betyder, varför SOC 2, ISO 27001,
    GDPR, NIS2 och DORA kräver dem, och hur du dokumenterar och spårar kontrollen.
  keywords: []
  noindex: false
  ogTitle: 'Kryptering i vila och under överföring: en kontroll du kan bevisa - OptiTech'
  ogDescription: >-
    Vad kryptering i vila och under överföring betyder, varför SOC 2, ISO 27001,
    GDPR, NIS2 och DORA kräver dem, och hur du dokumenterar och spårar kontrollen.
  image: null
---

Kryptering är något av det första en köpare frågar om och något av det sista team dokumenterar ordentligt. Alla vet att data ska vara krypterad. Betydligt färre kan peka på en nedskriven standard, namnge den som äger den och lämna över beviset som styrker det. När en säkerhetsgranskning landar blir den luckan till stress.

Kryptering i vila och under överföring är egentligen två kontroller som bär ett namn, och båda spelar roll för ramverken du jagar. Det här inlägget förklarar vad var och en betyder i klartext, varför revisorer och köpare förväntar sig dem, grunderna i nyckelhantering som du inte kan hoppa över, och hur du skriver en krypteringsstandard som du faktiskt kan stå för. Det håller sig på policynivå, för det är där det mesta av arbetet ligger.

## Vad kryptering i vila och under överföring faktiskt betyder

Kryptering i vila skyddar data som ligger still: filer på en disk, säkerhetskopior, arkiv, allt som sparats till lagring. Om någon går iväg med hårdvaran eller kopierar filerna innebär kryptering i vila att det de får tag på är oläsbart utan nyckeln. Datan finns där, men den är förvrängd till något oanvändbart för alla som inte ska ha den.

Kryptering under överföring skyddar data som är i rörelse: en förfrågan från en webbläsare till din applikation, en fil som synkas mellan två tjänster, ett meddelande som korsar nätverket. Kryptering under överföring innebär att även om någon fångar upp trafiken på vägen kan de inte läsa vad som finns inuti.

Du behöver båda, för data tillbringar hela sitt liv i båda tillstånden. Den rör sig, sedan lägger den sig, sedan rör den sig igen. Att skydda det ena och strunta i det andra lämnar en uppenbar lucka, och det är precis den sortens lucka som ett säkerhetsformulär är byggt för att hitta.

## Varför ramverk och köpare kräver kryptering

Varje ramverk som OptiTech stödjer behandlar kryptering som en grundförväntan snarare än en avancerad funktion. SOC 2 Type II letar efter den under kriterierna för säkerhet och konfidentialitet. ISO 27001 kräver kryptografiska kontroller och en policy som styr hur du använder dem. GDPR nämner kryptering som ett exempel på en lämplig teknisk åtgärd för att skydda personuppgifter. NIS2 och DORA förväntar sig båda starkt skydd för informationen bakom samhällsviktiga tjänster och finansiell verksamhet.

Mönstret är genomgående. Ramverket dikterar sällan en specifik algoritm eller produkt. I stället frågar det om du har fattat ett medvetet beslut, skrivit ner det och kan visa att du följer det i praktiken. Det är den verkliga skillnaden mellan att säga "vi använder kryptering" och att ha en kontroll du kan bevisa.

Köpare tänker på samma sätt fast från andra hållet. Deras säkerhetsteam skickar ett formulär, och krypteringsfrågorna är aldrig frivilliga. De vill veta att data i vila är krypterad, att trafiken använder modern överföringssäkerhet och att du hanterar dina nycklar ansvarsfullt. Ett tydligt och tryggt svar för affären framåt. Ett vagt svar bjuder in till ett uppföljningssamtal och en fördröjning.

## Nyckelhantering är delen som ställer till det

Kryptering är bara så stark som sättet du hanterar nycklarna på. Du kan välja den bästa algoritmen som finns, men om nycklarna ligger blottade, delas slarvigt eller aldrig byts ut är skyddet tunt. Det är här de flesta team har minst nedskrivet, och det är här granskare tenderar att gräva.

Du behöver ingen djup kryptografi för att få grunderna rätt. Ett vettigt upplägg besvarar några enkla frågor:

- **Var finns nycklarna?** Nycklar bör lagras skilt från datan de skyddar, i ett system byggt för uppgiften, inte inklistrade i en konfigurationsfil eller ett delat dokument.
- **Vem har åtkomst till dem?** Åtkomst till nycklar tillhör en liten, namngiven grupp, och varje användning bör gå att spåra.
- **Hur ofta roteras de?** Nycklar bör bytas enligt ett schema, så att en enda blottad nyckel har en begränsad livslängd.
- **Vad händer om en tappas bort eller komprometteras?** Du behöver en plan för att återkalla och ersätta en nyckel utan att förlora åtkomsten till datan.

Skriv ner de här svaren som policy. När en revisor frågar om nyckelhantering är registret av beslut beviset, och en kort, tydlig standard slår ett långt samtal varje gång.

## TLS under överföring, i klartext

Transport layer security, oftast förkortat TLS, är standarden som krypterar data under överföring. Det är samma teknik bakom hänglåset i en webbläsare, och det är den som gör en vanlig anslutning privat. När folk säger att en tjänst använder HTTPS är det TLS som gör jobbet under ytan.

På policynivå bryr du dig om några saker snarare än de djupa detaljerna. Du vill att trafik som bär känslig data använder aktuella TLS-versioner, eftersom äldre har kända svagheter. Du vill att det gäller anslutningar mellan dina egna tjänster, inte bara de som dina kunder ser. Och du vill ha en uttalad hållning om att okrypterad överföring inte är acceptabel för den data som betyder något.

Det räcker för att uppfylla ett ramverk och för att svara en köpare ärligt. Poängen är inte att bli en kryptografiexpert. Den är att fatta ett tydligt beslut, tillämpa det överallt där data rör sig och kunna beskriva det utan att slingra sig.

## Att dokumentera din krypteringsstandard

En kontroll som bara lever i folks huvuden är ingen kontroll. Det är en vana, och vanor överlever varken personalbyten eller revisioner. Lösningen är en kort krypteringsstandard som fastställer din hållning i skrift.

En användbar standard är kortfattad och konkret. Den säger vad du krypterar i vila och under överföring, namnger den som äger kontrollen, sätter reglerna för nyckelhantering och pekar på hur du kontrollerar att verkligheten stämmer med policyn. Den behöver inte vara lång. Den behöver vara aktuell och lätt att hitta, för värdet ligger i att kunna ta fram den i samma stund som någon frågar.

<Admonition type="tip" title="Skriv standarden innan du ombeds om den">
Sämsta tillfället att skriva din krypteringsstandard är mitt under en säkerhetsgranskning med en affär på spel. Utkasta den medan det är lugnt, håll den kort och utse en tydlig ägare. En enkelsidig standard du kan lämna över på begäran är värd mer än ett perfekt dokument du fortfarande skriver på när formuläret dyker upp.
</Admonition>

## Att spåra krypteringskontrollen i OptiTech

Det är här ett program slår en pärm med dokument. I OptiTech är kryptering en kontroll du styr, inte ett påstående du upprepar. Kontrollen har en ägare, en nedskriven standard kopplad till sig och en plats för beviset som visar att den är verklig.

Eftersom OptiTech kopplar en kontroll till många ramverk besvarar din krypteringsstandard SOC 2-kriteriet, ISO 27001-kravet, GDPR:s tekniska åtgärd och förväntningarna i NIS2 och DORA på samma gång. Du dokumenterar beslutet en gång, och det uppfyller varje ramverk som frågar. När standarden ändras uppdaterar du den på ett ställe i stället för att jaga kopior tvärs över fem uppsättningar papper.

Beviset lever intill kontrollen, så det blir ingen separat jakt. När en revisor eller en köpare frågar hur du hanterar kryptering pekar du på en aktuell kontroll med en namngiven ägare och kopplat bevis, i stället för att rekonstruera svaret ur minnet. Och ditt trust center kan visa upp samma hållning för köpare direkt, så att krypteringsfrågan på deras formulär börjar besvara sig själv. Allt det här körs i OptiTech Console, på infrastruktur som hålls inom EU.

## Kom igång

Du behöver inget kryptografiprojekt för att få det här rätt. En realistisk första omgång ser ut så här:

1. **Skriv en enkelsidig krypteringsstandard.** Ange vad du krypterar i vila och under överföring, och håll det enkelt.
2. **Besvara frågorna om nyckelhantering.** Var nycklarna finns, vem som når dem, hur de roteras och vad som händer om en komprometteras.
3. **Utse en ägare.** En person som är ansvarig för att hålla kontrollen och dess bevis aktuella.
4. **Koppla den till dina ramverk och ditt trust center** så att arbetet du redan gjort bevisar sig självt för både revisorer och köpare.

Kryptering slutar vara en stress i samma stund som du behandlar den som en dokumenterad kontroll i stället för ett antagande. Skriv standarden en gång, håll den aktuell, så får både dina revisorer och dina köpare samma trygga svar.

Redo att göra kryptering till en kontroll du kan bevisa? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech kopplar ihop dina kontroller, standarder och bevis.

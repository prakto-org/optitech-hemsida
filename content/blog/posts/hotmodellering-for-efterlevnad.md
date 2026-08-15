---
title: 'Hotmodellering för efterlevnad: ett praktiskt arbetssätt'
description: Så hittar du verkliga risker innan revisorn gör det, och gör dem till kontroller du kan bevisa.
excerpt: >-
  Hotmodellering är inte bara en säkerhetsövning. Det är ett snabbt sätt att
  hitta vad som kan gå fel innan en revisor eller angripare gör det, och göra
  varje risk till en kontroll du kan bevisa. Den här guiden går igenom ett
  praktiskt arbetssätt och hur OptiTech kopplar resultatet till dina risker och
  kontroller.
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
  title: 'Hotmodellering för efterlevnad: ett praktiskt arbetssätt - OptiTech'
  description: >-
    En praktisk guide till hotmodellering för efterlevnad: identifiera
    tillgångar, använd STRIDE för att namnge hot, bestäm motåtgärder och för in
    resultatet i ditt riskregister och dina kontroller.
  keywords: []
  noindex: false
  ogTitle: 'Hotmodellering för efterlevnad: ett praktiskt arbetssätt - OptiTech'
  ogDescription: >-
    En praktisk guide till hotmodellering för efterlevnad: identifiera
    tillgångar, använd STRIDE för att namnge hot, bestäm motåtgärder och för in
    resultatet i ditt riskregister och dina kontroller.
  image: null
---

De flesta säkerhetsprogram börjar med ett ramverk och jobbar baklänges. Du väljer SOC 2 eller ISO 27001, får en lista med kontroller och lägger månader på att bevisa att du uppfyller var och en. Det fungerar, men det hoppar över en fråga som är värd att ställa först: vad är det egentligen du försöker skydda, och vad kan gå fel?

Hotmodellering svarar på den frågan innan du skriver en enda kontroll. Det är ett strukturerat sätt att titta på ett system, lista ut vad som kan skada det och bestämma vad du ska göra åt saken. Gjort rätt gör det ditt efterlevnadsprogram skarpare, för dina kontroller kopplas till verkliga risker i stället för en generisk checklista. Den här guiden går igenom hotmodellering på en praktisk nivå och visar hur OptiTech gör resultatet till risker och kontroller du kan följa.

## Vad hotmodellering faktiskt är

Hotmodellering är ett samtal med struktur. Du tar ett system, en applikation eller till och med en affärsprocess och ställer några få frågor: vad bygger vi, vad kan gå fel, vad gör vi åt det och gjorde vi ett tillräckligt bra jobb. Det är hela loopen, och du behöver ingen doktorsexamen i säkerhet för att köra den.

Poängen är inte att förutse varje attack. Det är att lyfta fram riskerna du annars skulle missa tills en revisor, en kund eller en angripare hittar dem åt dig. En timmes möte med rätt personer i rummet slår en perfekt modell som aldrig blir av.

## Börja med dina tillgångar

Du kan inte skydda det du inte har namngett. Så första steget är att lista det som betyder något: datan, systemen och processerna som skulle orsaka verklig skada om de fallerade eller läckte.

För de flesta företag är kronjuvelerna uppenbara när du väl säger dem högt:

- **Kunddata**, särskilt personuppgifter som omfattas av GDPR.
- **Autentisering och åtkomst**, nycklarna som låser upp allt annat.
- **Din produktionsmiljö**, där ett avbrott eller intrång drabbar kunder direkt.
- **Ekonomisk och affärskritisk data** som skulle skada ditt rykte om den kom ut.

Skriv ner de här innan du tänker på hot. Tillgångar ger resten av övningen ett mål. När du vet att ett system håller kunders personuppgifter i EU hamnar både hoten du bryr dig om och lagringsreglerna du måste följa i fokus.

## Namnge hoten med STRIDE

När du väl vet vad du skyddar behöver du ett sätt att tänka på vad som kan gå fel utan att stirra på ett tomt papper. STRIDE är en lättviktig checklista som gör precis det. Det är sex kategorier av hot, och du går igenom var och en och frågar "kan det här hända hos oss?"

- **Spoofing (förfalskad identitet).** Kan någon utge sig för att vara en användare eller ett system de inte är?
- **Tampering (manipulation).** Kan någon ändra data eller kod de inte borde röra?
- **Repudiation (förnekande).** Kan någon göra något och sedan förneka det, utan spår som bevisar motsatsen?
- **Information disclosure (informationsläckage).** Kan data läcka till någon som inte borde se den?
- **Denial of service (överbelastning).** Kan någon slå ut systemet?
- **Elevation of privilege (utökade behörigheter).** Kan någon få åtkomst utöver vad de har rätt till?

Du behöver inga specialverktyg. En whiteboard, en skiss över hur data rör sig och de sex frågorna lyfter fram mer verklig risk på en timme än de flesta team hittar på ett kvartal. Kategorierna håller samtalet ärligt, för det är lätt att fastna vid en spektakulär attack och glömma den tråkiga som faktiskt sätter dig.

<Admonition type="tip" title="Håll första omgången liten">
Försök inte modellera hela företaget på en gång. Välj ett system som håller känsliga uppgifter, kör STRIDE mot det och slutför. En liten modell du gör klart slår en stor du överger halvvägs.
</Admonition>

## Bestäm motåtgärder

Ett hot du har namngett men inte gjort något åt är bara en oro. Värdet dyker upp när varje hot får ett beslut. För varje hot värt att ta på allvar har du fyra ärliga alternativ:

- **Åtgärda.** Lägg till en kontroll som minskar risken, som att kräva multifaktorautentisering mot förfalskad identitet.
- **Acceptera.** Bedöm att risken är låg nog att leva med, och skriv ner varför.
- **Överför.** Flytta risken någon annanstans, till exempel genom försäkring eller en leverantörs ansvar.
- **Undvik.** Sluta göra det riskfyllda helt.

De flesta hot slutar i "åtgärda", och det är där hotmodellering möter ditt ramverk. Motåtgärden för ett manipulationshot kan vara en integritetskontroll. Motåtgärden för informationsläckage kan vara kryptering och stramare åtkomst. Var och en är en kontroll du kan peka på senare.

## När du ska göra det

Hotmodellering är inte en engångshändelse, men det är inte heller något du gör varje vecka. Rätt tillfällen är de där riskbilden ändras:

- **När du designar något nytt.** En ny funktion som rör kunddata är det billigaste tillfället att fånga ett designfel.
- **När något ändras väsentligt.** En ny integration, ett nytt dataflöde eller ett steg in på en ny marknad förändrar vad som kan gå fel.
- **Med jämna mellanrum för kritiska system.** Dina känsligaste system förtjänar en ny genomgång en eller två gånger om året, även om inget uppenbart har ändrats.

Vanan betyder mer än frekvensen. Ett team som hotmodellerar nya funktioner av reflex bygger säkrare system än ett som kör en heroisk årlig övning och sedan glömmer den.

## Från hotmodell till riskregister och kontroller

Det är här mycket hotmodellering faller isär. Teamet kör ett bra möte, fyller en whiteboard, och sedan dör resultatet i ett dokument ingen öppnar igen. Hoten blir aldrig risker någon följer, och motåtgärderna blir aldrig kontroller någon verifierar.

OptiTech täpper till det glappet. Varje hot du identifierar blir en post i ditt riskregister, med en ägare, en allvarlighetsgrad och ett beslut. Varje motåtgärd kopplas till en kontroll i ditt program, så att det du lovade göra är det du mäts mot. När en revisor frågar varför en kontroll finns är svaret ett specifikt hot, inte "ramverket sa åt oss".

Kopplingen går åt båda hållen. När en kontrolls bevis blir inaktuellt kan du spåra tillbaka till risken den ska täcka. När ett nytt hot dyker upp kan du se vilka kontroller som redan hanterar det och vilka luckor du fortfarande behöver stänga. Dina hotmodeller slutar vara engångsdokument och blir ett levande underlag till samma program som producerar dina bevis för SOC 2, ISO 27001 och NIS2.

Och eftersom allt är ett program syns resultatet där köpare kan se det. Ett trust center som backas av OptiTech låter kunder se att du tar säkerhet på allvar, utan att du behöver gå igenom din whiteboard.

## Kom igång

Du behöver inget formellt program för att börja. En realistisk första omgång ser ut så här:

1. **Välj ett system** som håller känsliga uppgifter, och skissa hur data rör sig genom det.
2. **Kör STRIDE** mot det tillsammans med de som kan det bäst, och skriv ner vad du hittar.
3. **Besluta om varje hot**: åtgärda, acceptera, överför eller undvik.
4. **För in resultatet i OptiTech**, så att hot blir följda risker och motåtgärder blir kontroller med ägare.

Hotmodellering belönar team som gör det till en vana i stället för ett projekt. Gör det litet, gör det ofta och koppla resultatet till riskerna och kontrollerna du redan hanterar. Dina revisorer får tydligare bevis, och dina system blir på riktigt säkrare.

Redo att koppla hotmodellering till dina risker och kontroller? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech gör det som kan gå fel till ett program du kan bevisa.

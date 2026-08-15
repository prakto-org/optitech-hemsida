---
title: 'Delat ansvar i molnet: vad ditt efterlevnadsteam faktiskt äger'
description: Vad din molnleverantör säkrar, vad som förblir ditt jobb och hur du bevisar din sida.
excerpt: >-
  Ett efterlevande moln gör inte dig efterlevande. Din leverantör säkrar
  infrastrukturen, men konfiguration, åtkomst och data ligger kvar på din sida
  av linjen. Det här inlägget förklarar modellen för delat ansvar, varför en
  leverantörs certifikat inte räcker, och hur OptiTech hjälper dig att äga och
  bevisa din halva med kontroller och bevis.
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
  title: 'Delat ansvar i molnet: vad ditt efterlevnadsteam faktiskt äger - OptiTech'
  description: >-
    Vad din molnleverantör säkrar jämfört med vad du fortsatt ansvarar för, och
    hur du dokumenterar och bevisar din sida med kontroller och bevis.
  keywords: []
  noindex: false
  ogTitle: 'Delat ansvar i molnet: vad ditt efterlevnadsteam faktiskt äger - OptiTech'
  ogDescription: >-
    Vad din molnleverantör säkrar jämfört med vad du fortsatt ansvarar för, och
    hur du dokumenterar och bevisar din sida med kontroller och bevis.
  image: null
---

Många team utgår från att ett efterlevande moln gör dem efterlevande. De väljer en leverantör med en vägg av certifieringar, pekar på loggorna under ett säljmöte och tänker att det svåra är löst. Sedan frågar en revisor hur ni styr åtkomsten till miljön, och det blir tyst i rummet.

Sanningen som loggorna döljer är enkel: din molnleverantör säkrar molnet, och du säkrar det du lägger i det. Den uppdelningen har ett namn, modellen för delat ansvar, och att läsa den fel är ett av de snabbaste sätten att falla på en säkerhetsgranskning. Det här inlägget reder ut vem som äger vad, varför en leverantörs certifikat aldrig täcker din sida, och hur du dokumenterar uppdelningen så att du kan bevisa den på begäran.

## Vad modellen för delat ansvar faktiskt betyder

Modellen för delat ansvar fördelar säkerhetsuppgifterna mellan din leverantör och dig. Leverantören sköter det du inte kan röra: de fysiska datacentren, serverhårdvaran, hypervisorn och nätverksstommen. Du sköter allt du sätter upp och driver ovanpå den grunden.

Var linjen går beror på tjänsten du köper:

- **Infrastruktur som tjänst.** Du äger operativsystemet, patchning, konfiguration, åtkomst och data. Leverantören stannar vid den virtuella maskinen.
- **Plattform som tjänst.** Leverantören hanterar mer av stacken, men du äger fortfarande hur tjänsten konfigureras, vem som når den och datan i den.
- **Programvara som tjänst.** Leverantören driver applikationen, men du bestämmer ändå vem som har åtkomst, hur den är inställd och vilken data du matar in.

En sak är konstant i alla modeller: din data, och vem som kan nå den, är alltid din att skydda. Ingen leverantör tar bort det från ditt bord.

## "Vi använder ett efterlevande moln" räcker inte

En leverantörs certifiering säger en sak: deras lager uppfyller en standard. Den säger ingenting om hur du driver din sida. När en revisor granskar din SOC 2 Type II eller ISO 27001 vill de se bevis på dina åtkomstgranskningar, din ändringshantering och dina konfigurationsbeslut. Leverantörens rapport bevisar deras kontroller, inte dina.

Det klassiska misslyckandet gör det konkret. En lagringsplats lämnas öppen mot internet och känsliga uppgifter läcker. Plattformen under var certifierad mot varenda standard som finns, men exponeringen kom från en inställning du ägde. Leverantörens certifikat hjälper dig inte att förklara det för en tillsynsmyndighet eller en kund.

Samma logik löper genom NIS2 och DORA. Båda lägger ansvaret för säkerheten och motståndskraften i tjänsterna du levererar på din organisation. Du får luta dig mot en leverantör, men du kan inte lägga ut ansvaret på deras certifikat. När myndigheten frågar måste svaret vara ditt.

## Var ditt ansvar faktiskt ligger

Din sida av linjen kokar ner till tre områden som en leverantör aldrig kan äga åt dig.

### Konfiguration

Felkonfiguration är den vanligaste orsaken till molnincidenter, och varje standardval du accepterar eller ändrar är en kontroll du äger. Krypteringsinställningar, nätverksregler, loggning och gallring ligger hos dig. Leverantören ger dig säkra alternativ, men att välja och underhålla dem är ditt jobb.

### Åtkomst

Vem som kan logga in, med vilka behörigheter och hur du verifierar det över tid. Flerfaktorsautentisering, minsta möjliga behörighet och en ren process för när folk börjar, byter roll och slutar är dina att driva. Detsamma gäller de återkommande åtkomstgranskningar en revisor vill se.

### Data

Klassning, datalagringsort, gallring och radering stannar hos dig. Hanterar du personuppgifter från EU spelar det roll var de finns, och "leverantören är certifierad" svarar inte på frågan om datalagringsort. Du bestämmer vad du samlar in, var det ligger och när det tas bort.

## Dokumentera uppdelningen så att du kan bevisa den

Att känna till uppdelningen är inte samma sak som att bevisa den. Verktyget som stänger gapet är en ansvarsmatris. För varje tjänst du använder skriver du ner vad leverantören täcker, vad du täcker och var ansvaret delas. Ett delat ansvar, som patchning i vissa plattformstjänster, är där incidenter gömmer sig, så utse en ägare för det uttryckligen.

Koppla sedan varje punkt på din sida till en verklig kontroll med en ägare och bevis bakom. Det är skillnaden mellan att påstå att du hanterar åtkomst och att visa den senaste kvartalsvisa åtkomstgranskningen med datum och signatur.

<Admonition type="tip" title="Ärv inte det du måste bevisa">
En leverantörs certifikat kan stödja en delad kontroll, men det kan inte ersätta bevisen för din egen. Behandla ärvda kontroller som en utgångspunkt, och lägg sedan till dina egna bevis för allt på din sida av linjen.
</Admonition>

## Så hjälper OptiTech dig att äga din sida

OptiTech driver din efterlevnad som ett enda program av ramverk, kontroller och bevis, vilket är precis den form modellen för delat ansvar behöver.

Du väljer de ramverk som gäller, oavsett om det är SOC 2 Type II, ISO 27001, GDPR, NIS2 eller DORA. Varje kontroll på din sida av linjen får en ägare och en plats att samla bevis, så att konfiguration, åtkomst och datahantering slutar vara antaganden och blir register du kan visa upp.

För de delade och leverantörsägda delarna speglar du leverantörens certifieringar direkt i programmet. Koppla deras rapporter till kontrollerna de stödjer, så är delarna du ärver dokumenterade i stället för antagna. Eftersom OptiTech håller all datalagring inom EU, i Stockholm och Frankfurt, har frågan om datalagringsort ett tydligt svar i stället för en axelryckning.

Till sist publicerar ditt trust center resultatet. Köpare ser dina certifieringar, leverantörscertifieringarna du lutar dig mot och din datalagringsort på ett ställe, utan att mejla ditt team. Modellen för delat ansvar slutar vara ett obekvämt ögonblick i revisionen och blir något du visar upp.

## Kom igång

Du kan få det här på plats utan ett jätteprojekt:

1. **Kartlägg modellen för varje molntjänst du använder.** Notera om det är infrastruktur, plattform eller programvara, eftersom det flyttar linjen.
2. **Skriv en ansvarsmatris.** Leverantör, du och delat, med en utsedd ägare för varje delat ansvar.
3. **Gör om din sida till kontroller** i OptiTech Console, var och en med en ägare och en plats för bevis.
4. **Koppla leverantörscertifieringar** till de delade kontrollerna så att de ärvda delarna är dokumenterade.
5. **Publicera uppdelningen i ditt trust center** så att köpare och revisorer ser samma tydliga bild.

Modellen för delat ansvar är ingen fälla. Den är en tydlig linje, och företagen som lyckas under den är de som skriver ner linjen och äger sin sida högt och tydligt. Gör det en gång, håll bevisen aktuella, så förvandlas "hur säkrar ni ert moln?" från en tvekan till en styrka.

Redo att äga din sida av molnet? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech kopplar ihop dina kontroller, bevis och leverantörscertifieringar i ett program.

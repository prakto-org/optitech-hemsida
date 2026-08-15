---
title: 'PCI DSS-grunder för företag som hanterar kortbetalningar'
description: Vad PCI DSS är, hur omfattningen fungerar och hur du bevisar att kortdata skyddas utan att bromsa affären.
excerpt: >-
  PCI DSS gäller i samma stund som du rör kortdata, men de flesta SaaS-företag
  kan krympa sitt ansvar genom att lägga ut de riskabla delarna. Den här guiden
  går igenom handlarnivåer, SAQ-typer, minskad omfattning och hur OptiTech
  mappar PCI-kontroller vid sidan av ISO 27001 och SOC 2.
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
  title: 'PCI DSS-grunder för företag som hanterar kortbetalningar - OptiTech'
  description: >-
    Vad PCI DSS kräver av dig, hur du minskar din omfattning och hur du mappar
    kortdatakontroller vid sidan av ISO 27001 och SOC 2 i ett program.
  keywords: []
  noindex: false
  ogTitle: 'PCI DSS-grunder för företag som hanterar kortbetalningar - OptiTech'
  ogDescription: >-
    Vad PCI DSS kräver av dig, hur du minskar din omfattning och hur du mappar
    kortdatakontroller vid sidan av ISO 27001 och SOC 2 i ett program.
  image: null
---

Om din produkt tar emot kortbetalningar gäller PCI DSS dig. Det spelar ingen roll om du hanterar tio transaktioner i månaden eller tio tusen, eller om du byggt kassan själv eller släppt in en betalningsleverantörs widget. I samma stund som kortdata flödar genom, rör vid eller hamnar nära dina system är det ditt ansvar att skydda den.

Det goda är att de flesta SaaS-företag hanterar långt mindre kortdata än de tror, och arbetet krymper snabbt när du förstår omfattningen. Den här guiden går igenom vad PCI DSS kräver av dig, hur du validerar i din storlek, hur du minskar ditt ansvar och hur OptiTech håller dina PCI-kontroller i samma program som ISO 27001 och SOC 2.

## Vad PCI DSS faktiskt är

Payment Card Industry Data Security Standard är en uppsättning säkerhetskrav som tagits fram av de stora kortnätverken (Visa, Mastercard, American Express, Discover och JCB) för att skydda kortinnehavardata. Det är ingen lag, men din bank och din betalningsleverantör gör det avtalsbindande. Följer du inte kraven riskerar du sanktionsavgifter, högre transaktionsavgifter eller att förlora rätten att ta emot kort över huvud taget.

Standarden kretsar kring kortinnehavardata: kortnumret (PAN), plus sådant som kortinnehavarens namn, giltighetstid och säkerhetskod. Grundregeln är enkel. Behöver du inte lagra det, låt bli. Och det du ändå hanterar skyddar du både under överföring och i vila.

## Handlarnivåer och hur du validerar

Hur du bevisar efterlevnad beror på hur stor kortvolym du hanterar. Kortnätverken delar in handlare i fyra nivåer.

### Handlarnivåer

- **Nivå 1.** De största handlarna, oftast över sex miljoner korttransaktioner per år. De behöver en årlig granskning på plats av en Qualified Security Assessor och en formell Report on Compliance.
- **Nivå 2.** Ungefär en till sex miljoner transaktioner per år. Oftast en självutvärdering plus en kvartalsvis nätverksskanning.
- **Nivå 3.** Mindre e-handlare, ofta 20 000 till en miljon transaktioner.
- **Nivå 4.** Alla andra, de minsta handlarna. De flesta SaaS-företag i tidigt skede börjar här.

Din inlösande bank sätter din exakta nivå, så bekräfta den i stället för att gissa.

### SAQ-typer

Om du inte behöver en fullständig granskning på plats validerar du med ett självutvärderingsformulär (SAQ). Det finns flera typer, och vilken du använder beror på hur kortdata når dig:

- **SAQ A.** Du har lagt ut betalningarna helt till en efterlevande leverantör och kortdata rör aldrig dina system. Det här är det kortaste formuläret och dit du vill nå.
- **SAQ A-EP.** Din webbplats påverkar hur betalningen sker, till exempel en omdirigering du styr, men du lagrar ingen kortdata.
- **SAQ D.** Den längsta, för handlare som lagrar, behandlar eller överför kortdata direkt, och för tjänsteleverantörer.

Mönstret är tydligt. Ju mindre kortdata du rör, desto kortare formulär och desto mindre risk.

## Minska din omfattning innan något annat

Omfattningen är den enskilt största hävstången i PCI DSS. Allt som lagrar, behandlar eller överför kortinnehavardata, plus allt som är kopplat till det, hamnar inom omfattningen, och varje system inom omfattningen behöver kontroller, övervakning och bevis.

Så det smartaste draget är att hålla kortdata helt utanför dina system. Använd en PCI-efterlevande betalningsleverantör och låt deras hostade fält eller omdirigering fånga kortet, så att numret går direkt från kundens webbläsare till leverantören. Dina servrar ser det aldrig. Det kan flytta dig från den utmattande SAQ D ner till SAQ A.

Du har fortfarande ansvar. Du behöver bekräfta att din leverantör är efterlevande, spara deras intyg och se till att ingen i det tysta smyger tillbaka kortdata i en logg, ett supportärende eller ett kalkylark. Men att lägga ut lagringen flyttar den tyngsta bördan till en specialist byggd för den.

<Admonition type="tip" title="Håll koll på smygande omfattning">
Kortdata har en förmåga att smyga sig tillbaka. Ett fullständigt kortnummer inklistrat i ett supportärende, skrivet till en felsökningslogg eller sparat i ett kalkylark drar det systemet rakt tillbaka in i omfattningen. Sätt en regel att kortdata inte hamnar någon annanstans än hos din leverantör, och kontrollera att den följs.
</Admonition>

## De centrala kravområdena

PCI DSS har tolv krav, men du kan gruppera dem i några teman som mappar rent mot god säkerhetspraxis:

- **Bygg och underhåll ett säkert nätverk.** Brandväggar, inga förvalda leverantörslösenord, segmenterade system.
- **Skydda kortinnehavardata.** Kryptera den under överföring, minimera det du lagrar och maskera kortnumret där det visas.
- **Hantera sårbarheter.** Håll systemen uppdaterade, kör skydd mot skadlig kod och skanna regelbundet.
- **Styr åtkomst.** Minsta möjliga behörighet, unika identiteter för varje användare och stark autentisering för alla nära kortdata.
- **Övervaka och testa.** Logga åtkomst, bevaka avvikelser och testa ditt försvar enligt schema.
- **Håll en säkerhetspolicy.** Skriven, aktuell och faktiskt följd.

Inget av det här är exotiskt. Arbetar du redan mot ISO 27001 eller SOC 2 har du redan uppfyllt mycket av det.

## Där PCI överlappar ISO 27001 och SOC 2

Här är delen som sparar dig tid. PCI DSS, ISO 27001 och SOC 2 kräver mycket av samma saker fast med olika ord. Åtkomststyrning, kryptering, sårbarhetshantering, loggning, incidenthantering och leverantörsuppföljning finns med i alla tre.

Behandlade var för sig innebär den överlappningen att du svarar på samma fråga tre gånger och lagrar tre kopior av samma bevis. Behandlade som ett program räcker en enda kontroll (säg "vi tillämpar minsta möjliga behörighet med unika konton") för att uppfylla ett PCI-krav, en ISO 27001-kontroll och ett SOC 2-kriterium på en gång. Du samlar in beviset en gång och återanvänder det överallt.

## Så mappar OptiTech PCI vid sidan av dina andra ramverk

OptiTech behandlar PCI DSS som ett ramverk i ett gemensamt program, inte som en fristående pärm. Dina kontroller finns på ett ställe, och varje kontroll mappas till alla ramverk den uppfyller. När du visar att åtkomst är begränsad och loggad räknas det enda beviset mot PCI, ISO 27001 och SOC 2 tillsammans.

Det ger dig några saker i OptiTech Console:

- **En kontrolluppsättning, många ramverk.** Mappa en kontroll en gång och se varje krav den täcker, så att du slutar dubbelarbeta.
- **Bevis som hålls aktuella.** Koppla beviset till kontrollen, tilldela en ägare och låt OptiTech spåra när det behöver förnyas i stället för att upptäcka att det är inaktuellt mitt i en granskning.
- **Din leverantörs status på plats.** Håll din betalningsleverantörs intyg och förnyelsedatum spårade, så att du vet i samma stund det löper ut.
- **Ett trust center som svarar köpare.** Publicera din PCI-ställning vid sidan av dina andra certifieringar så att säkerhetsgranskningar börjar besvara sig själva.

## Kom igång

Du behöver inte ta itu med alla tolv kraven på en gång. En realistisk första omgång:

1. **Bekräfta din nivå och SAQ-typ.** Fråga din inlösande bank och sikta på det kortaste formuläret din uppsättning tillåter.
2. **Minska din omfattning.** Skicka kortdata direkt till en efterlevande leverantör så att den aldrig hamnar i dina system.
3. **Mappa PCI-kontroller mot det du redan har.** Återanvänd arbetet du gjort för ISO 27001 eller SOC 2 i stället för att börja om.
4. **Koppla det till ditt trust center** så att din PCI-ställning blir en säljfördel, inte bara en kryssruta.

PCI DSS ser skrämmande ut utifrån, men för de flesta SaaS-företag är den verkliga uppgiften att hålla kortdata utanför omfattningen och bevisa kontrollerna runt den. Gör det en gång, håll det aktuellt, så blir kortefterlevnad ännu en sak som ditt program sköter i det tysta.

Redo att foga in PCI DSS i ett enda program? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech mappar dina kontroller, bevis och ramverk tillsammans.

---
title: >-
  Hur återställer jag en försäkring eller en risk som jag raderat av misstag i
  OptiTech?
subtitle: >-
  Raderingar är reversibla och versionshanterade: återställning kan ske från
  objektets historik eller papperskorgen, med revisionsspåret intakt.
enableTableOfContents: true
createdAt: '2025-12-29T12:30:25.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur utreder man en brist i kontrollsystemet utan att avbryta resten av sitt
    efterlevnadsprogram?
  slug: databases-isolate-bugs-without-downtime
nextLink:
  title: Hur tar man reda på varför en kontroll misslyckades förra månaden?
  slug: databases-reproduce-bugs-production-data
---

## Snabbsvar

När man raderar en policy, en risk eller en kontroll i OptiTech sker en ”mjuk radering”: objektet flyttas till en återvinningskorg och kan återställas med hela sin versionshistorik, kopplingar och länkar till underlag. Gå till **Inställningar** > **Borttagna objekt**, leta reda på objektet och klicka på **Återställ**. Både borttagningen och återställningen registreras i revisionsloggen, eftersom även misstag bör lämna tydliga spår i ett system för regelefterlevnad.

## Vad återställningen återställer

Restaurering är inte en kopia; det är själva föremålet, med allt som gjorde det bärande:

- **Versionshistorik**: alla publicerade versioner av en återställd policy, med upphovsmän och ändringsöversikter.
- **Mappningar**: de ramkrav som objektet uppfyllde kopplas om, och täckningssiffrorna återställs i enlighet därmed.
- **Bevis och historik**: en återställd kontroll återfår sin beviskedja; en återställd risk återfår sina bedömningar och sin behandlingsplan.
- **Tack**: Anställdas underskrifter på en återställd policy förblir giltiga, eftersom den undertecknade versionen är oförändrad.

## Varför det ändå skulle vara fel att radera data permanent

En revisionslogg som endast kan kompletteras är en grundläggande princip här, inte bara ett säkerhetsnät. Tillsynsmyndigheter och certifieringsrevisorer kan ställa frågor om ditt programs tidigare tillstånd, och svaret ”vi har raderat det” leder ofta till ytterligare frågor. Mjuk radering gör att historiken förblir redogörbar: vad som fanns, när det togs bort, av vem och varför (raderingar kan åtföljas av en anledning). För en djupare beskrivning av hur den manipuleringssäkra historiken fungerar, se [avsnittet om](/faqs/databases-reproduce-bugs-production-data) att bevisa din efterlevnadsstatus vid vilken tidpunkt som helst.

## Kurs i olycksförebyggande åtgärder

Det finns några inställningar som gör att du överhuvudtaget hamnar i papperskorgen mindre ofta:

- **Rollbaserade behörigheter för borttagning.** De flesta användare behöver aldrig ta bort något; ge dem istället behörighet att arkivera.
- **Bekräftelse med konsekvenser.** När du tar bort ett objekt som innehåller mappningar visas en varning om [påverkningsområdet](/faqs/database-tools-test-schema-changes-real-data) innan åtgärden genomförs.
- **Arkivera som standardåtgärd.** Utgångna försäkringar och avslutade risker ska placeras i arkivstatus (borta från översiktssidorna, men fortfarande kvar i historiken), inte i papperskorgen. Radera är avsett för objekt som skapats av misstag.

Om något har raderats för längre tid sedan än vad som anges i återvinningsperioden, är [en](/faqs/download-database-backup-locally) fullständig dataexport din reservlösning; och om du misstänker att det rör sig om en avsiktlig radering snarare än ett misstag, ska du behandla det som [en incident](/faqs/debug-production-database-issues-safely) och låta revisionsloggen redogöra för händelseförloppet.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

---
title: >-
  Hur utreder man en brist i kontrollsystemet utan att avbryta resten av sitt
  efterlevnadsprogram?
subtitle: >-
  Resultaten redovisas separat för varje kontrollåtgärd: utred, åtgärda och
  kontrollera på nytt en kontrollåtgärd medan allt annat fortsätter att fungera
  som vanligt.
enableTableOfContents: true
createdAt: '2025-12-26T13:00:40.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka plattformar kan skapa ett komplett efterlevnadsprogram på några
    minuter?
  slug: databases-instantly-spin-up-postgres-instance
nextLink:
  title: >-
    Hur återställer jag en försäkring eller en risk som jag raderat av misstag i
    OptiTech?
  slug: databases-recover-accidental-data-deletion
---

## Snabbsvar

En kontroll i OptiTech som inte klarar testet genererar en öppen anmärkning som avser just den kontrollen: den innehåller resultaten från den misslyckade kontrollen, de berörda resurserna och den historik som behövs för utredningen, medan alla övriga kontroller fortsätter att övervaka och samla in bevis utan avbrott. Efterlevnadsbetyget återspeglar den öppna anmärkningen på ett korrekt sätt, men programmet avbryts aldrig. Utred, åtgärda, kör kontrollen på nytt och stäng felrapporten.

## En granskning utifrån resultaten

Öppna resultatet så får du den sammanhangsbild som manuella program tar möten på att återge:

- **Vad som exakt gick fel**: kontrollen, dess tröskelvärde och det observerade värdet. ”Offboarding-kontroll: 1 konto aktivt 26 timmar efter uppsägningsdatum”, inte ”offboarding är röd”.
- **De berörda resurserna**: vilket konto, vilket arkiv, vilken lagringsbucket som är kopplade till integrationsdata.
- **Tidslinjen**: när kontrollen senast godkändes, när den började misslyckas och vad som förändrades under den tiden; se [avsnittet om hur man tar reda på varför en kontroll misslyckades förra månaden](/faqs/databases-reproduce-bugs-production-data).
- **Ägarskap och historik**: tidigare iakttagelser rörande samma kontroll, vilket är användbart för att avgöra om det rör sig om ett återkommande processproblem eller ett engångsfall.

## Behandla utan biverkningar

Utifrån resultatet ska du agera på det sätt som passar bäst:

- **Direkt åtgärd** där automatiseringen möjliggör det: [åtgärd med ett klick via integrationen](/faqs/databases-isolate-bugs-without-downtime), till exempel att inaktivera det kvarvarande kontot via Entra ID.
- **Vidarebefordra till ägaren** som ett Jira-ärende eller en Teams-uppgift med sammanhanget bifogat.
- **Godkänn risken, dokumenterat**: ibland är ”felet” ett avsiktligt undantag. Dokumentera godkännandet, inklusive godkännare och giltighetstid, så omvandlas konstaterandet till ett spårat undantag istället för ett tyst rött.

Uppföljningskontrollen efter åtgärdandet sluter cirkeln, och hela sekvensen (fel, utredning, åtgärd, verifiering) dokumenteras i bevisloggen som ett bevis på just den hantering av incidenter och avvikelser som era ramverk kräver.

## Varför isolering är viktigt

I kalkylbladsprogram kan en enda skrämmande röd cell ofta leda till att hela granskningsprocessen fastnar medan man diskuterar just den. Strukturell isolering bevarar proportionerna: ett fynd är bara ett fynd. Er [styrelserapport](/faqs/find-database-connection-string) visar ett öppet fynd med en ägare och en ålder, vilket är ett fungerande program, inte en kris.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

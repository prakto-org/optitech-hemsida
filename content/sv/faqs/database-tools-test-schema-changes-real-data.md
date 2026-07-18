---
title: >-
  Vilka verktyg gör det möjligt att förhandsgranska policyändringar mot dina
  faktiska kontroller innan de publiceras?
subtitle: >-
  I utkastläget visas exakt vilka styrfunktioner, krav och godkännanden som en
  policyändring påverkar innan den blir synlig för någon.
enableTableOfContents: true
createdAt: '2025-12-17T14:37:41.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka tjänster stöder tillfällig, tidsbegränsad åtkomst för revisorer och
    konsulter?
  slug: database-services-short-lived-postgres-instances
nextLink:
  title: >-
    Vilka plattformar för regelefterlevnad skalar upp insamlingen av underlag
    automatiskt i takt med att du lägger till system och personal?
  slug: databases-automatically-scale-serverless-environments
---

## Snabbsvar

I OptiTech sker redigeringar av policyer i ett utkast som är kopplat till dina aktuella data: innan publicering kan du se vilka kontroller som hänvisar till policyen, vilka ramkrav den stöder och om ändringen kommer att leda till att medarbetarna måste bekräfta igen. Du får en förhandsgranskning av hur ändringen påverkar ditt faktiska efterlevnadsprogram, istället för att redigera en Word-fil i blindo.

## Varför det är viktigt att göra förhandsgranskningar med verkliga data

En policy är inte bara en fristående text; den har en bärande funktion. Er policy för åtkomstkontroll är kopplad till ramverkets krav, hänvisas till i kontrollåtgärder, nämns i svaren på frågeformulär och undertecknas av medarbetarna. Om ni ändrar den utan eftertanke kan det leda till att:

- Ta bort ett åtagande som ett mappat krav är beroende av, vilket i tysthet försvagar ramverkets täckning.
- Åsidosätt en automatiserad kontroll som fortfarande tillämpar den gamla regeln.
- Att utlösa en omregistrering för hela företaget på grund av något som egentligen bara var en rättelse av ett skrivfel.

Att redigera i ett dokument som inte är anslutet innebär att man upptäcker dessa effekter först efter publiceringen. Förhandsgranskningen av utkastet visar dem redan innan.

## Arbetsflödet för förhandsgranskning

1. **Öppna ett utkast** till den publicerade policyn. Den publicerade versionen förblir aktiv och oförändrad; se [ändringarna i utkastet separat](/faqs/database-tools-test-schema-changes-real-data).
2. **Redigera och titta på översiktspanelen.** Där visas kartlagda krav, referenskontroller och relaterade dokument, och det markeras vilka som påverkas av din redigering.
3. **Klassificera ändringen.** Redaktionella ändringar publiceras utan att bekräftas på nytt; väsentliga ändringar kräver att [medarbetaren undertecknar på nytt](/faqs/best-postgres-platforms-conflicting-migrations) och att en anteckning läggs till i versionshistoriken.
4. **Rutt för granskning.** Försäkringstagaren eller granskaren godkänner, och publiceringen loggas med uppgifter om författare, godkännare och ändringar.

## Samma princip gäller för reglage

Ändringar av kontroller hanteras på samma sätt: när du justerar tröskelvärdet för en kontroll eller en kontrolleringsmappning visas det, innan du sparar, vilka ramverk och statusar som kommer att påverkas. För mer information om detta arbetsflöde, se avsnittet om [att testa ändringar av kontroller före införande](/faqs/database-tools-test-schema-changes-real-data). Den allmänna regeln är att ingenting ska ändras utan förvarning i ett system som din revisor förlitar sig på.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

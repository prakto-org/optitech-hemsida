---
title: Hur tar man reda på varför en kontroll misslyckades förra månaden?
subtitle: >-
  I loggen över testresultat sparas varje testresultat med tidsstämplar, vilket
  innebär att tidigare fel går att söka fram och inte är något som tillhör det
  förflutna.
enableTableOfContents: true
createdAt: '2025-12-31T11:16:17.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur återställer jag en försäkring eller en risk som jag raderat av misstag i
    OptiTech?
  slug: databases-recover-accidental-data-deletion
nextLink:
  title: Kan jag testa OptiTech i en testmiljö innan jag ansluter riktiga system?
  slug: databases-support-disposable-postgres-instances-testing
---

## Snabbsvar

Öppna kontrollen och granska dess historik: varje kontrollkörning sparas med tidsstämpel, resultat och de uppmätta värdena, så att frågan ”Varför var det här rött den 12 juni?” kan besvaras konkret flera månader senare. Du ser när felet uppstod, vilka värden som var felaktiga, vad som förändrades vid den tidpunkten samt när och hur felet åtgärdades. I OptiTech rekonstrueras inte det förflutna utifrån minnet; det läses istället ur loggen med mätdata.

## Läsa en kontrolls tidslinje

Översikten över kontrollhistoriken ger dig en tydlig bild av utredningen:

1. **Övergångspunkten.** Kontrollerna godkändes dagligen fram till den 9 juni, men underkändes från och med den 10 juni. Vad som än hände, så hände det under den perioden.
2. **De felaktiga värdena.** Inte ”säkerhetskopieringen misslyckades” utan ”säkerhetskopieringsuppdraget för ekonomisystemet: senaste lyckade körningen 8 juni”. Detaljerna avslöjar oftast vad som är orsaken.
3. **Samband mellan förändringar.** Revisionsloggen kring övergången: en integrationsautentiseringsuppgift byttes ut, en konfiguration ändrades, en ägare byttes ut. Det är genom att jämföra tidpunkten för felets uppkomst med ändringshistoriken som de flesta grundorsakerna kan identifieras.
4. **Lösningen.** När ärendet inleddes, vem det vidarebefordrades till, vad de gjorde och den efterföljande kontrollen som avslutade ärendet – hela processen som genomfördes vid [utredningen av en bristfällig kontroll](/faqs/databases-isolate-bugs-without-downtime).

## Varför detta är viktigt utöver ren nyfikenhet

En historisk förklaring är ett krav på efterlevnad i förklädnad:

- **Revisorer granskar det förflutna.** ”Förklara det här felet i era loggar för mig” är ett vanligt tillvägagångssätt vid revision; en sammanhängande tidslinje ger svaret på några minuter.
- **Incidentrapporter måste innehålla en tidslinje.** Om felet ingick i en rapporteringspliktig incident hämtas avsnittet om händelseförloppet [i](/faqs/debug-production-database-issues-safely) MSB-rapporten direkt från denna historik.
- **Återkommande misslyckanden avslöjar brister i processen.** Tre misslyckanden vid avgång under ett kvartal är inte tre tillfälliga händelser; det är ett bristfälligt samarbete mellan HR och IT, och mönstret blir tydligt först när man ser tillbaka på historiken.

## En förutsättning är korrekt loggning

Inget av detta fungerar om historiken kan redigeras. Kontrollresultaten i OptiTech-miljön sparas i en logg där endast tillägg tillåts; ett fel kan åtgärdas men kan aldrig göras ogjort. Det är just den egenskapen som gör historiken tillförlitlig, både för dig och för alla [som granskar din efterlevnadsstatus vid en viss tidpunkt](/faqs/databases-reproduce-bugs-production-data).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

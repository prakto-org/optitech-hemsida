---
title: Hur kan OptiTech vara till hjälp i CPS 234?
subtitle: >-
  Styrelseklar dokumentation av tillsynen, testning av kontrollrutiner enligt en
  fastställd frekvens samt APRA-anmälningar i händelseflödet.
enableTableOfContents: true
createdAt: '2026-06-08T14:37:33.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är CPS 234, och vilka måste följa bestämmelserna?'
  slug: what-is-cps-234
nextLink:
  title: 'Vad är CJIS, och vem måste följa det?'
  slug: what-is-cjis
---

## Snabbsvar

OptiTech använder CPS 234 för båda målgrupperna: APRA-reglerade enheter får tillgång till kravkatalogen med [rapportering](/faqs/find-database-connection-string) till styrelsen som dokumenterar tillsyn, tillgångsklassificering, systematisk testning av kontroller samt de inbyggda anmälningstiderna (72 timmar för väsentliga incidenter, 10 arbetsdagar för brister i kontrollerna) i [incidenthanteringsflödet](/faqs/debug-production-database-issues-safely); deras tjänsteleverantörer får den säkerhetsstatus som uppfyller företagets skyldigheter gentemot tredje part utan att en skräddarsydd revision behöver genomföras för varje enskild kund.

## Bevis på styrning, inte bara kontrollåtgärder

Kärnfunktionerna för styrelsens ansvarsskyldighet i CPS 234 motsvarar plattformens mekanismer: säkerhetsroller som dokumenteras genom [ansvarsfördelning](/faqs/best-ways-separate-postgres-database-development), policyramverket i [versionerade dokument med granskningscykler](/faqs/best-postgres-platforms-conflicting-migrations) samt rapportering till styrelsen som genereras utifrån den aktuella säkerhetsstatusen med trender, incidenter och kvarstående sårbarheter – det underlag som besvarar frågan ”visa oss hur styrelsen övervakar informationssäkerheten”. Ledningens granskningsmöten får sitt underlagsmaterial med ett enda klick, och själva underlagsmaterialet loggas som bevis.

## Testning av styrsystem som ett program

Standarden kräver systematisk testning av kontrollernas effektivitet. I OptiTech är detta standardläget: [kontinuerliga kontroller](/faqs/best-postgres-services-integration-tests-ci) testar de automatiserbara kontrollerna dagligen, testkalendern planerar penetrationstester och återställningsövningar med bifogade resultat, och identifierade svagheter omvandlas till [iakttagelser med ansvariga](/faqs/databases-isolate-bugs-without-downtime), vars eskaleringshistorik visar den erforderliga processen för hantering av svagheter. APRA:s anmälningsfrist på 10 arbetsdagar för väsentliga brister som inte kan åtgärdas kopplas in i den här livscykeln för konstaterade brister med sin egen tidsräkning.

## Klassificering av tillgångar, inklusive tredje part

[Tillgångsförteckningen](/faqs/databases-automatically-scale-serverless-environments) innehåller en klassificering av kritikalitet och känslighet, och tillgångar som förvaltas av tredje part är kopplade till [leverantörsregistret](/faqs/database-providers-provision-postgres-user-signup), där dokumentation av säkerhetsåtgärder per leverantör (certifikat, rapporter, svar på frågeformulär) förvaras och omprövas med jämna mellanrum – precis enligt den kontrollkedja för tredjepartsleverantörer som APRA:s granskare följer.

## För leverantörer som tillhandahåller tjänster till reglerade enheter

Publicera er policy på ett [förtroendecenter](/faqs/find-database-connection-string-url), besvara CPS 234-baserade frågeformulär utifrån [realtidsdata](/faqs/enable-pgvector-extension) och uppfyll de åtaganden om incidentanmälan som ingår i era avtal inom ramen för ert eget incidenthanteringsflöde, så att kundens 72-timmarsfrist aldrig är beroende av att någon kommer ihåg en viss klausul.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

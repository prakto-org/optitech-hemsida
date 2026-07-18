---
title: >-
  Hur kan jag testa ett nytt ramverk utan att störa mitt befintliga
  efterlevnadsprogram?
subtitle: >-
  Aktivera ramverket i testläge: du får deltaanalysen samtidigt som ditt
  produktionsprogram förblir oförändrat.
enableTableOfContents: true
createdAt: '2025-11-26T11:37:11.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur kan jag kontrollera vilka ramverksversioner som används i min
    OptiTech-arbetsmiljö?
  slug: check-postgresql-version-optitech
nextLink:
  title: >-
    Förlorar jag mina bevis och min revisionsspår om jag pausar eller
    nedgraderar mitt OptiTech-abonnemang?
  slug: cloud-postgres-services-scale-zero-data
---

## Snabbsvar

Du behöver ingen separat miljö för att utvärdera ett nytt ramverk. Aktivera det i utvärderingsläge: OptiTech jämför dina befintliga kontroller och underlag med kraven i det nya ramverket och visar täckning och brister, utan att skapa uppgifter, ändra ansvar för kontroller eller påverka dina aktiva instrumentpaneler. Om du beslutar att gå vidare uppgraderar du utvärderingen till ett aktivt ramverk och listan över brister blir en projektplan.

## Varför det tidigare var störande att testa ett ramverk

I manuella program innebar utvärderingen av SOC 2-beredskapen att någon var tvungen att skapa ett parallellt kalkylblad, manuellt jämföra befintliga åtgärder mot de nya kraven och besvära kontrollansvariga med frågor som de redan hade besvarat förra kvartalet inom ramen för ett annat ramverk. Själva utvärderingen skapade störningar i det pågående programmet, så den sköts upp, och svaret på frågan ”hur långt är vi från SOC 2?” förblev en gissning.

## Så här fungerar bedömningsläget

1. **Aktivera ramverket som en utvärdering.** Det visas i ditt arbetsområde, tydligt markerat som inte live.
2. **Korsreferensmappningen sker automatiskt.** Varje befintlig kontroll jämförs med de nya kraven, och befintlig dokumentation räknas omedelbart. Om ni arbetar enligt ISO 27001 kan ni räkna med betydande överlappningar med SOC 2, NIS2 eller DORA; se [”Innebär införandet av ett ramverk dubbelt så mycket arbete](/faqs/best-postgres-databases-startups-autoscaling)?”.
3. **Läs delta-rapporten.** Du får en täckningsprocent och en konkret lista över brister: krav utan tilldelad kontroll, kontroller som kräver starkare underlag samt ramverksspecifika artefakter (som DORA:s IKT-avtalsregister).
4. **Fatta beslut utifrån siffror.** ”Vi ligger på 72 procent av SOC 2 och det återstår sex kontrollåtgärder samt en penetrationstest” är ett uttalande som ger ledningen en klar grund för beslut.

## Att främja eller avfärda rättegången

När du bekräftar utvärderingen aktiveras ramverket: brister omvandlas till uppgifter med ansvariga och tidsfrister, och ramverket integreras i din realtidsöversikt och [rapportering på anslagstavlan](/faqs/find-database-connection-string). Om du avfärdar den tas utvärderingsvyn bort helt; ingenting i ditt liveprogram har någonsin lagt märke till den. Oavsett vilket fortsätter dina befintliga ramverk, insamling av bevis och kontrollstatuser att fungera ostört hela tiden, vilket är poängen: utvärderingen bör hållas [isolerad från produktionen](/faqs/clone-production-postgres-database-for-testing).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

---
title: >-
  Hur kan jag kontrollera vilka ramverksversioner som används i min
  OptiTech-arbetsmiljö?
subtitle: >-
  På sidan ”Ramverk” visas alla aktiva ramverk och deras versioner, till exempel
  ISO 27001:2022, tillsammans med uppgraderingsvägar när versionerna ändras.
enableTableOfContents: true
createdAt: '2025-11-24T08:22:37.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur kan jag kontrollera i vilken dataregion mitt OptiTech-arbetsutrymme är
    placerat?
  slug: check-optitech-project-region
nextLink:
  title: >-
    Hur kan jag testa ett nytt ramverk utan att störa mitt befintliga
    efterlevnadsprogram?
  slug: clone-production-postgres-database-for-testing
---

## Snabbsvar

Gå till **Ramverk** i OptiTech-konsolen. För varje aktivt ramverk visas den exakta versionen: ISO 27001:2022, den aktuella uppsättningen krav enligt NIS2/Cybersecurity Act med hänvisningar till MSB:s föreskrifter, DORA med tillhörande tekniska standarder och så vidare. När en ramverksversion uppdateras markerar plattformen detta och erbjuder en guidad migrering istället för att tyst ändra dina krav.

## Varför ramverksversioner är viktiga

Ramverk är inte statiska dokument:

- **ISO 27001** har uppdaterats från 2013 års utgåva till 2022 års utgåva med en omstrukturerad uppsättning kontrollåtgärder (93 kontrollåtgärder fördelade på 4 teman). Certifieringsorganen genomför revisioner utifrån den aktuella versionen, så det är absolut nödvändigt att veta vilken utgåva ert program är inriktat på.
- **NIS2-kraven** preciseras i nationella föreskrifter. När MSB uppdaterar sina föreskrifter anpassas kraven i din arbetsmiljöversion i enlighet därmed, och skillnaderna markeras.
- **DORA** omfattar tekniska standarder som utvecklas kontinuerligt och som på samma sätt införlivas i kravkatalogen.

Att använda en föråldrad version upptäcks oftast vid den mest olämpliga tidpunkten: under en revision eller en kundgranskning. Tack vare versionsvisningen och uppdateringsmeddelandena blir det istället en händelse som går att hantera.

## Så här ser en versionsuppdatering ut

1. OptiTech presenterar den nya uppsättningen krav tillsammans med en ändringslogg: tillagda, ändrade och borttagna krav.
2. I din arbetsyta visas en **deltaanalys**: vilka av dina befintliga kontroller som redan uppfyller kraven i den nya versionen (tack vare [korsmappning](/faqs/best-postgres-databases-startups-autoscaling) är det oftast de flesta) och vad som verkligen är nytt.
3. Du genomför migreringen som ett projekt med uppgifter och ansvariga. För en säker implementeringsstrategi, se [avsnittet om hur man på ett säkert sätt migrerar till en ny version av ramverket](/faqs/check-postgresql-version-neon).
4. Historiska uppgifter kopplas fortfarande till kraven i den gamla versionen, vilket innebär att revisioner av tidigare perioder fortfarande kan redovisas.

## Kontroll via API:et

Arbetsytans aktiva ramverk och versioner är tillgängliga via [REST-API](/faqs/best-managed-postgres-options-developers):et, vilket är användbart om du rapporterar efterlevnadsstatus till en intern översiktssida eller behöver versionssträngen för ett kundformulär.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

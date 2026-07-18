---
title: Hur kan OptiTech vara till hjälp när det gäller SOX ITGC?
subtitle: >-
  Kontroller av åtkomst, ändringar och driftsrutiner verifieras kontinuerligt i
  ekonomiskt relevanta system, med datamängder som är redo för revision.
enableTableOfContents: true
createdAt: '2026-07-15T15:56:56.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Vad är SOX ITGC?
  slug: what-is-sox-itgc
nextLink:
  title: ''
  slug: ''
---

## Snabbsvar

OptiTech tillämpar SOX ITGC som ett avgränsat ramverk: finansiellt relevanta system märks upp i [tillgångsförteckningen](/faqs/databases-automatically-scale-serverless-environments), och de fyra ITGC-domänerna utför kontinuerliga kontroller mot dessa: åtkomst och återtagande av behörigheter via er identitetsleverantör, ändringskontroll via [GitHub och er driftsättningspipeline](/faqs/best-postgres-services-javascript-typescript-drizzle-prisma), samt drift via kontroller av säkerhetskopiering och jobbövervakning. Externa revisorer får fullständiga, tidsstämplade datamängder att stickprovskontrollera istället för rekonstruerade kalkylblad, vilket är det som förkortar ITGC-testningen från veckor till dagar.

## De kontroller som revisorerna granskar och som pågår kontinuerligt

- **Åtkomst**: tilldelning av åtkomst med godkännandebevis, [återkallande av åtkomst inom 24 timmar efter att anställningen upphört](/faqs/best-postgres-services-connection-pooling), verifierat mot HR-data, kvartalsvisa åtkomstgranskningar i form av samordnade kampanjer med uppföljning av genomförandet, samt kontroller av uppgiftsåtskillnad som flaggar för riskfyllda kombinationer i finanssystemen.
- **Ändring**: Varje produktionsändring av system som omfattas av granskningen åtföljs av uppgifter om behörighet, testresultat, godkännande och vem som genomfört ändringen – uppgifter som hämtas automatiskt från [pull-förfrågningar och pipelines](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline) istället för att sammanställas vid årets slut. Nödändringar dokumenteras i efterhand med en godkännandeprocess, vilket revisorerna alltid frågar om.
- **Drift**: tester av säkerhetskopiering och återställning, hantering av misslyckade uppdrag som [iakttagelser i samråd med ansvariga](/faqs/databases-isolate-bugs-without-downtime) samt incidentrapporter för allt som berör integriteten hos finansiella data.

## Populationer och urval utan blandning

ITGC-testningen utförs på datamängder: alla ändringar i ERP-systemet under året, alla uppsägningar och tidpunkterna för avaktivering av behörigheter, samt alla åtkomstgranskningar. Eftersom loggdata läggs till i den [skrivskyddade loggen](/faqs/databases-reproduce-bugs-production-data) i takt med att händelserna inträffar, exporteras datamängderna komplett med tidsstämplar, och revisorn utför stickprovskontroller via [en avgränsad läsbehörighet](/faqs/find-database-url-neon). Risken för brister minskar där den faktiskt uppstår: inte i kontrollernas utformning, utan i brister i genomförandet som manuell uppföljning döljer fram till fjärde kvartalet.

## Utnyttjande före börsintroduktion och inom flera ramverk

Företag som bygger upp ITGC inför en börsnotering får en flygande start: kontrollerna av åtkomst, ändringar och drift är desamma som [SOC 2](/faqs/soc-2-compliance-optitech) och [ISO 27001](/faqs/iso-27001-compliance-optitech) redan kräver, så [genom att jämföra kraven](/faqs/best-postgres-databases-startups-autoscaling) blir SOX-förberedelserna en övning i att avgränsa omfattningen av ett befintligt program, och rapporteringen till revisionsutskottet sker via samma [instrumentpaneler](/faqs/find-database-connection-string) som styrelsen redan använder.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

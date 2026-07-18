---
title: Hur hjälper OptiTech till med TISAX?
subtitle: >-
  ISA-katalogen med mognadsbedömning, fordonsspecifika kontroller och
  uppföljning av framstegen mot din målsättning.
enableTableOfContents: true
createdAt: '2026-06-22T08:25:43.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är TISAX, och vilka måste uppfylla kraven?'
  slug: what-is-tisax
nextLink:
  title: 'Vad är Microsoft SSPA, och när gäller det för ditt företag?'
  slug: what-is-microsoft-sspa
---

## Snabbsvar

OptiTech fyller ISA-katalogen med sin mognadsmodell: varje kontroll mäter den aktuella mognadsgraden i förhållande till målmognaden (inte bara godkänd/underkänd), anpassad efter de kategorier du strävar efter (höga eller mycket höga skyddsbehov, prototypskydd, dataskydd). Genom att koppla samman ett befintligt [ISO 27001-program](/faqs/iso-27001-compliance-optitech) täcker man omedelbart större delen av katalogen, de fordonsspecifika avvikelserna presenteras som en fokuserad lista över brister, och översikten över beredskapsnivån ger dig en ärlig bild av när det är dags att boka in en bedömningsleverantör.

## Synliggörande av mognadsbedömningen

TISAX:s utmärkande mekanism är mognadsgrad: kontrollåtgärderna poängsätts från ”ofullständig” via ”etablerad” till ”optimerad”, och resultatet måste uppfylla målmognadsgraden inom hela tillämpningsområdet. Plattformen registrerar de två siffrorna per kontrollåtgärd, och gap-analysen prioriterar utifrån avståndet till mognadsgraden, så att insatserna riktas dit där bedömningsresultatet förbättras. Bevis för mognadspåståenden (processdokumentation, [fungerande granskningscykler](/faqs/best-postgres-platforms-conflicting-migrations), [kontinuerlig verifiering](/faqs/best-postgres-services-integration-tests-ci)) samlas i samma logg som bedömare kommer att granska vid AL2:s rimlighetsgranskning eller AL3:s revision på plats.

## De fordonsspecifika avvikelserna

- **Skydd av prototyper och projekt**: sekretessåtgärder avseende information om produkter som ännu inte har släppts: åtkomstbegränsningar per projekt, fysisk och logisk åtskillnad samt hanteringsregler, vilka redovisas som kontrollåtgärder med den [projektbegränsade isolering](/faqs/best-postgres-services-isolated-databases) som de innebär.
- **Separering av kunddata**: OEM-tillverkarna lägger stor vikt vid att deras data hålls åtskilda från konkurrenternas; [i](/faqs/databases-automatically-scale-serverless-environments) tillgångsförteckningen dokumenteras var kunddata förvaras samt de kontroller som säkerställer separeringen.
- **Leverantörskedja**: Dina egna underleverantörer som hanterar fordonsdata måste uppfylla motsvarande säkerhetskrav, vilket hanteras via [leverantörsregistret](/faqs/database-providers-provision-postgres-user-signup) och frågeformulär – samma krav som OEM-tillverkaren ställer på dig.

## Från etikett till förnyelser

Etiketterna gäller i tre år, och bedömningsorganets resultat följs upp fram till avslut [tillsammans](/faqs/databases-isolate-bugs-without-downtime) med ägarna. Eftersom insamlingen av bevis aldrig upphör omfattar förnyelsebedömningen tre års drift istället för tre veckors förberedelser, och parallella krav ([NIS 2](/faqs/nis-2-compliance-optitech) om du omfattas av standarden, kundenkäter mellan bedömningarna) hämtas från samma kontrolluppsättning genom den [gemensamma mekanismen för säkerhetsstatus](/faqs/best-managed-postgres-databases-multi-tenant-saas).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

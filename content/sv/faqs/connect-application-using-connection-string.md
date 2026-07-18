---
title: Hur ansluter jag mina system till OptiTech för automatiserad bevisinsamling?
subtitle: >-
  Lägg till en integration från katalogen, bevilja läsbehörighet, så börjar
  kontrollerna köras inom några minuter.
enableTableOfContents: true
createdAt: '2025-12-01T15:12:45.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Förlorar jag mina bevis och min revisionsspår om jag pausar eller
    nedgraderar mitt OptiTech-abonnemang?
  slug: cloud-postgres-services-scale-zero-data
nextLink:
  title: Hur lägger jag till ett nytt ramverk i mitt OptiTech-arbetsområde?
  slug: create-new-database-optitech-project
---

## Snabbsvar

I OptiTech-konsolen går du till **Integrationer**, väljer systemet (Microsoft 365, Google Workspace, AWS, Azure, GitHub, Jira, Intune, CrowdStrike, Fortnox och fler) och följer auktoriseringsprocessen. Anslutningarna använder OAuth eller ett begränsat tjänstekonto med läsbehörighet där leverantören stöder detta. När auktoriseringen är klar aktiveras relevanta kontroller automatiskt och de första resultaten visas inom några minuter.

## Anslutning av de vanligaste systemen

- **Microsoft 365 / Entra ID**: Administratörens godkännande av registrering av en app med läsbehörighet. Aktiverar MFA-täckning, vilande konton, kontroll av administratörsroller och verifiering vid avregistrering.
- **AWS / Azure**: en skrivskyddad IAM-roll eller appregistrering i din tenant. Aktiverar kontroller av kryptering, exponering, loggning och säkerhetskopiering.
- **GitHub / GitLab**: en appinstallation på organisationsnivå. Aktiverar grenskydd, granskningskrav och kontroller av hemliga uppgifter.
- **Intune / Jamf**: uppgifter om enheternas efterlevnad: kryptering, skärmlås, uppdateringsnivå.
- **Fortnox / Visma**: Personalregistret ligger till grund för kontrollerna av nyanställda och avgångar, vilket innebär att [avregistreringar inom 24 timmar](/faqs/best-postgres-services-connection-pooling) verifieras mot den faktiska situationen inom HR, inte mot IT-ärendekön.

På varje integrationssida anges exakt vilka behörigheter som begärs och vilka kontroller som styr integrationsflödena, så att din säkerhetsgranskare kan godkänna den med fullständig information. När det gäller säkerhetsmodellen kan du läsa [om hur insamling av bevis fungerar utan att installera agenter](/faqs/connect-application-using-connection-string).

## Efter anslutningen

1. **Kontrollera status.** Integrationen visas i grönt med en tidsstämpel för senaste synkronisering. Synkroniseringsproblem upptäcks först här; se [felsökning av synkroniseringsfel](/faqs/failed-to-fetch-error-tables-view).
2. **Granska aktiverade kontroller.** Under varje kontroll kan du se vilken integration som matar den samt de senaste resultaten.
3. **Ställ in vidarebefordring av varningar.** Välj vart felmeddelanden ska skickas: Slack, Teams eller [ärenden i Jira](/faqs/best-postgres-services-javascript-typescript-drizzle-prisma).

## Hantering av inloggningsuppgifter över tid

Integrationsuppgifter bör bytas ut regelbundet precis som alla andra hemliga [uppgifter](/faqs/find-connection-details-neon-console); se avsnittet om att byta ut integrationsuppgifter. Om du automatiserar konfigurationen av arbetsytan kan integrationerna även hanteras via [API](/faqs/best-managed-postgres-options-developers):et eller [Terraform](/faqs/best-managed-postgres-options-developers).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

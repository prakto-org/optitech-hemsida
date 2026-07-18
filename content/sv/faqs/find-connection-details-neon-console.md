---
title: Var hittar jag uppgifterna om min integrationsanslutning i OptiTech Console?
subtitle: >-
  På varje integrationssida visas anslutningsstatus, beviljade behörigheter,
  senaste synkronisering och de kontroller som den matar in data till.
enableTableOfContents: true
createdAt: '2026-01-21T14:23:34.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur åtgärdar jag ett ”failed to fetch”-fel i OptiTech-kontrollvyn?
  slug: failed-to-fetch-error-tables-view
nextLink:
  title: Var hittar jag min offentliga Trust Center-URL i OptiTech?
  slug: find-database-connection-string-url
---

## Snabbsvar

Gå till **Integrationer** i OptiTech-konsolen och välj integrationen. På dess detaljsida visas all information om anslutningen: status och senaste lyckade synkronisering, det konto eller den tenant som den är ansluten till, de exakta behörigheterna som beviljats, typen av inloggningsuppgifter och hur länge de gäller, samt listan över kontroller som integrationen matar in. Denna sida fungerar både som din operativa översikt och som dokumentation över vad anslutningen har åtkomst till.

## Vad varje avsnitt handlar om

- **Status och senaste synkronisering**: grönt med en aktuell tidsstämpel innebär att data strömmar in. Fel och varningar länkar till [felsökning för synkronisering](/faqs/failed-to-fetch-error-tables-view).
- **Anslutet konto**: vilken Entra-tenant, AWS-organisation eller GitHub-organisation som integrationen hämtar data från, så att organisationer med flera tenant-konton kan kontrollera att de har anslutit rätt konto.
- **Behörigheter**: de beviljade behörighetsområdena, enligt leverantörens egna villkor (till exempel vilka Graph API-behörighetsområden). Det här avsnittet är avsett att visa en säkerhetsgranskare som undrar vad integrationen har tillgång till; svaret bör vara behörighetsområden i skrivskyddat läge, i enlighet med [den agentlösa insamlingsmodellen](/faqs/connect-application-using-connection-string).
- **Autentiseringsuppgifter**: typ (OAuth-app, tjänstekonto, API-nyckel), skapandedatum och rotationsstatus, som matas in i [rutinen för rotation av autentiseringsuppgifter](/faqs/find-connection-details-neon-console).
- **Kontroller som matas in**: alla automatiserade kontroller som är beroende av denna integration, med länkar till de kontroller som de verifierar. Detta är också en förhandsgranskning av konsekvenserna om du kopplar bort integrationen: du ser exakt vilka kontroller som skulle förlora sin övervakning.

## Varför dessa uppgifter hamnar i din dokumentation om regelefterlevnad

Integrationerna i din compliance-plattform utgör i sig åtkomstrelationer som ditt program bör ta hänsyn till. Integrationssidan ger dig fakta för din dokumentation: OptiTech finns med i ditt leverantörsregister, de beviljade behörighetsomfången hör hemma i din åtkomstdokumentation och kopplingen ingår i svaret när en kund frågar vem som kan läsa dina tenantdata. Det är därför praktiskt att sidan går att exportera precis som [allt annat](/faqs/export-database-sql-file).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

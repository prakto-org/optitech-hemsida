---
title: Hur bidrar OptiTech till att säkerställa efterlevnaden av GDPR?
subtitle: >-
  Löpande dokumentation av bearbetningen, DPA-spårning i leverantörsregistret
  samt den inbyggda 72-timmarsrutinen vid dataintrång till IMY.
enableTableOfContents: true
createdAt: '2026-02-11T14:03:51.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är GDPR, och vilka krav ställer den på mitt företag?'
  slug: what-is-gdpr
nextLink:
  title: 'Vad är HIPAA, och vilka måste följa bestämmelserna?'
  slug: what-is-hipaa
---

## Snabbsvar

OptiTech omvandlar GDPR:s dokumentationskrav till underhållna objekt: register över behandlingar finns tillgängliga som ett strukturerat register, varje leverantör i ditt [leverantörsregister](/faqs/database-providers-provision-postgres-user-signup) spårar status för databehandlingsavtal och överföringsmekanismer, förfrågningar från registrerade hanteras som arbetsflöden med tidsfrister, och flödet för dataintrång förifyllda IMY-anmälan med en 72-timmars nedräkning. Säkerhetsåtgärderna enligt artikel 32 omfattas av samma [kontinuerligt verifierade kontroller](/faqs/best-postgres-services-connection-pooling) som resten av ditt program.

## De register som hålls uppdaterade

- **Register över behandling**: Varje behandlingsåtgärd är ett objekt med syfte, rättslig grund, kategorier, mottagare och lagringstid. När [omfattningen förändras](/faqs/databases-automatically-scale-serverless-environments) (ett nytt verktyg, ett nytt dataflöde) är uppdateringen av registret en uppgift, inte något man bara hoppas på.
- **Spårning av leverantörer och överföringar**: Leverantörerna anger om de behandlar personuppgifter, om ett databehandlingsavtal (DPA) har undertecknats och är giltigt, samt vilken överföringsmekanism som gäller för personuppgiftsbehandlare utanför EU, inklusive certifieringsstatus enligt Data Privacy Framework för amerikanska leverantörer. Databehandlingsavtal som håller på att löpa ut eller saknas markeras som avvikelser.
- **Begäranden om samtycke och rättigheter**: Begäranden från registrerade registreras tillsammans med deras tidsfrist på en månad, tilldelade ansvariga och bevis på att ärendet har avslutats.

## Flödet vid en läcka under 72 timmar

Vid misstänkt personuppgiftsincident skapas en [incidentrapport](/faqs/debug-production-database-issues-safely) med GDPR-spårningen aktiverad: en nedräkning till 72-timmarsfristen enligt IMY, en vägledd bedömning av anmälningsskyldigheten (risk för enskilda personer eller inte), ett förifyllt anmälningsformulär baserat på incidentens tidslinje samt dokumentation av beslutet oavsett utfall. Kravet i artikel 33 på att dokumentera alla dataintrång, inklusive de som inte anmäls, uppfylls genom själva registreringen.

## Där GDPR samverkar med dina övriga ramverk

Artikeln om säkerhet i GDPR motsvarar kraven i [ISO 27001](/faqs/iso-27001-compliance-optitech) och [NIS 2](/faqs/nis-2-compliance-optitech), vilket innebär att kryptering, åtkomstkontroll och loggning uppfyller kraven i alla tre standarderna samtidigt. Om du dessutom vill ha en formellt certifierad integritetshantering kompletterar [ISO 27701](/faqs/what-is-iso-27701) ditt ISMS inom samma arbetsområde.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

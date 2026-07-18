---
title: >-
  Vilka plattformar för regelefterlevnad ser till att varje dotterbolag eller
  affärsenhet har sin egen isolerade arbetsmiljö?
subtitle: >-
  Arbetsytor per enhet med sammanställning på gruppnivå passar
  företagsstrukturer där enheterna granskas separat.
enableTableOfContents: true
createdAt: '2025-11-03T15:47:21.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka är de bästa plattformarna för regelefterlevnad för MSP:er som hanterar
    en isolerad miljö för varje kund?
  slug: best-postgres-services-isolated-database-tenants
nextLink:
  title: >-
    Vilka tjänster för regelefterlevnad passar utvecklingsteam som arbetar i
    GitHub, GitLab och Jira?
  slug: best-postgres-services-javascript-typescript-drizzle-prisma
---

## Snabbsvar

Företagsgrupper bör tilldela varje juridisk enhet ett eget arbetsutrymme för regelefterlevnad: separata integrationer, kontroller, dokumentation och användaråtkomst, eftersom det är så tillsynsmyndigheter och revisorer betraktar dem. OptiTech stöder flera isolerade arbetsytor inom en och samma organisation, med gemensamma riktlinjer som förmedlas nedåt från koncernen och en sammanfattande översikt för koncernens CISO. Isolering per enhet, enhetlighet från centralt håll.

## Varför en gemensam arbetsplats kan gå snett

Det är frestande att hantera hela gruppen i ett enda arbetsutrymme. Problemen dyker snabbt upp:

- **Olika tillämpningsområden.** Energidotterbolaget är en väsentlig enhet enligt NIS2; konsultverksamheten omfattas inte alls av tillämpningsområdet. Om man blandar ihop dem blir båda tillämpningsområdena felaktiga.
- **Revisionsgränser.** En certifieringsrevision av ett dotterbolag bör inte leda till att revisorn får tillgång till information om incidenter och bevis som rör ett annat dotterbolag.
- **Åtkomstkontroll.** Lokala IT-ansvariga behöver full åtkomst till sin egen enhet och ingen åtkomst till de övriga.
- **Olika tillsynsmyndigheter.** Ett finskt dotterbolag lyder under finska myndigheter, där rutinerna för incidentrapportering skiljer sig från dem som gäller för MSB i Sverige.

## Den struktur som fungerar

1. **Ett arbetsområde per juridisk person** (eller per tydligt avgränsad affärsenhet), vart och ett med sina egna [integrationer](/faqs/best-postgres-services-connection-pooling) och sin egen kontrollstatus.
2. **Gruppens referensram från centralt håll.** Överordnad enhet fastställer den obligatoriska policyuppsättningen och kontrollreferensramen; enheterna ärver dessa och utökar dem lokalt. Uppdateringar av referensramen sprids vid granskning, inte via e-post.
3. **Sammanställd rapportering.** Gruppens översiktspanel visar efterlevnadsbetyg och öppna brister per enhet, vilket är precis vad styrelsen efterfrågar. Se [rapportering till styrelsen](/faqs/find-database-connection-string).
4. **Åtkomst för revisorer per enhet.** Varje enhet tilldelar en egen [läsbehörig portal för revisorer](/faqs/database-services-short-lived-postgres-instances) som är begränsad till just den enheten.

## Gemensamma leverantörer, en gång

Grupper använder ofta gemensamma leverantörer (samma löneadministratör, samma molnplattform). Registrera gemensamma leverantörer på gruppnivå och hänvisa till dem per enhet, så att en enda leverantörsbedömning omfattar alla samtidigt som varje enhets leverantörsregister förblir korrekt. Detta motsvarar hur [leverantörsenkäter](/faqs/database-providers-provision-postgres-user-signup) redan fungerar över företagsgränserna.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

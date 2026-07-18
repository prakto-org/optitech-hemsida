---
title: Hur kan OptiTech vara till hjälp med Microsoft SSPA?
subtitle: >-
  DPR har anpassats till era befintliga integritets- och säkerhetsåtgärder, och
  den årliga intygscykeln är nu väl etablerad.
enableTableOfContents: true
createdAt: '2026-06-26T08:35:25.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är Microsoft SSPA, och när gäller det för ditt företag?'
  slug: what-is-microsoft-sspa
nextLink:
  title: 'Vad är ISO 9001, och varför är det viktigt för kunderna?'
  slug: what-is-iso-9001
---

## Snabbsvar

Aktivera SSPA i OptiTech så laddas dataskyddskraven in, anpassade efter din databehandlingsprofil och kopplade till ditt befintliga program: [GDPR-dokumentationen](/faqs/gdpr-compliance-optitech) täcker de flesta avsnitten om integritet, [ISO 27001-kontrollerna](/faqs/iso-27001-compliance-optitech) täcker de flesta avsnitten om säkerhet, och de faktiska skillnaderna (Microsoft-specifika anmälningsskyldigheter, detaljer om lagringstider) presenteras som en kort uppgiftslista. Den årliga intygningen blir en granskning av det dokumenterade läget istället för ett årligt projekt där man måste kartlägga allt på nytt.

## Krav med profilbegränsad giltighet

Din databehandlingsprofil (personuppgifter, konfidentiella uppgifter eller båda; var och hur de behandlas) avgör vilka avsnitt i DPR som är tillämpliga, och aktiveringen av ramverket återspeglar detta: System som innehåller Microsoft-data märks upp i [tillgångsförteckningen](/faqs/databases-automatically-scale-serverless-environments), de tillämpliga kraven kopplas till kontrollåtgärderna och avsnitt som faller utanför tillämpningsområdet dokumenteras som sådana, så att intygets gränser är tydliga och försvarbara.

## Innehållet om integritet och säkerhet, återanvänt

- **Dataskydd**: Begränsning av ändamål, tidsplaner för lagring och radering, samarbete med de registrerade samt hantering av underleverantörer sköts via era [GDPR-system](/faqs/gdpr-compliance-optitech) och [leverantörsregister](/faqs/database-providers-provision-postgres-user-signup); spårning av Microsoft-godkända underleverantörer är ytterligare en funktion för de leverantörer som ni redan hanterar.
- **Säkerhet**: åtkomstkontroll, multifaktorautentisering (MFA), kryptering och säker utveckling kontrolleras [kontinuerligt genom integrationer](/faqs/best-postgres-services-connection-pooling), där Microsofts datasystem omfattas av strängare kontrollrutiner.
- **Anmälan av incidenter till Microsoft**: Den avtalsenliga tidsfristen ingår i [incidenthanteringsflödet](/faqs/debug-production-database-issues-safely) tillsammans med de lagstadgade tidsfristerna, vilket innebär att åtagandet kvarstår även vid personalförändringar.

## Årscykeln utan stress

SSPA:s arbetsflöde (profilgranskning, intygande, eventuell oberoende verifiering) hanteras via en [kalender](/faqs/pci-dss-compliance-optitech): uppgifter med ansvariga personer inför intygandeperioden, intygandegrunden exporterad från [bevisloggen](/faqs/databases-reproduce-bugs-production-data), och om din profil kräver oberoende verifiering arbetar bedömare med [begränsad läsbehörighet](/faqs/find-database-url-neon). Där ett ISO 27001-certifikat minskar din verifieringsbörda finns certifikatet och dess omfattning redan registrerade – ett program som hanterar ett annat program.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

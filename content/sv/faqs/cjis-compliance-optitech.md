---
title: Hur bidrar OptiTech till att säkerställa efterlevnaden av CJIS-kraven?
subtitle: >-
  Kontroller enligt CJI-ramverket, uppföljning av säkerhetsprövningar av
  personal samt revisionsklara åtkomstloggar för myndighetens och FBI:s
  granskningscykler.
enableTableOfContents: true
createdAt: '2026-06-12T12:28:41.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är CJIS, och vem måste följa det?'
  slug: what-is-cjis
nextLink:
  title: 'Vad är 23 NYCRR 500, och vilka omfattas av bestämmelsen?'
  slug: what-is-23-nycrr-500
---

## Snabbsvar

OptiTech hanterar CJIS på samma sätt som vid en revision: System som innehåller CJI-information är märkta i [tillgångsförteckningen](/faqs/databases-automatically-scale-serverless-environments) så att omfattningen är tydlig, policyområdena är implementerade som kontroller med kontinuerlig verifiering av de tekniska kontrollerna (MFA, kryptering, sessionspolicyer, revisionsloggning), personalkrav (bakgrundskontroller, utbildningscykler) spåras per person med utgångsdatum, och avtalslagret (säkerhetstillägg, avtal om ledningskontroll) underhålls som versionerade artefakter. När delstatens CSA eller FBI kommer på revision finns bevisen tillgängliga i en [portalvy](/faqs/find-database-url-neon), inte i form av en jakt på dokument.

## Omfattning och personalregistret

Omfattningen av CJI påverkar kostnaderna, så var noggrann med att kartlägga: vilka system som lagrar eller behandlar CJI, vilken personal som har tillgång till den och vilka underleverantörer som ingår i kedjan. Personalsidan är CJIS:s särskilda börda och hanteras som ett spårbart register: fingeravtrycksbaserad säkerhetsklassificering per person, genomförd utbildning enligt de föreskrivna cyklerna samt åtkomst kopplad till båda dessa, så att en utgången säkerhetsklassificering eller förfallen utbildning [flaggas innan en revisor upptäcker det](/faqs/databases-avoid-connection-limits-serverless-applications). Kontroller vid avslutad anställning stänger åtkomsten samma dag som någon slutar, vilket är den typ av iakttagelse som revisorerna älskar att skriva om.

## De tekniska kontrollerna, som kontinuerligt granskas

- **MFA och åtkomst**: verifieras mot din identitetsleverantör för system som omfattas av CJI, i enlighet med de skärpta kraven på avancerad autentisering i de senaste versionerna av riktlinjerna.
- **Kryptering**: Kontroller av CJI-lagringsplatser både vid lagring och överföring, där konfigurationen verifieras snarare än att den endast anges.
- **Revisionsloggning**: Åtkomstloggningen i CJI-systemen kontrolleras kontinuerligt med avseende på täckning och lagringstid, och loggarna själva kan sökas för att besvara frågan ”vem har haft åtkomst till denna post” – en fråga som bokstavligen ställs vid CJIS-revisioner.
- **Beredskap vid incidenter**: [Incidenthanteringsflödet](/faqs/debug-production-database-issues-safely) innebär att myndigheterna har särskilda rapporteringsskyldigheter enligt CJI-reglerna, utöver de tidsfrister som gäller enligt andra regelverk.

## Variation över flera delstater utan parallella program

Olika delstatsspecifika CSA:er, en kontrolluppsättning: delstatsspecifika tolkningar läggs till som kravvarianter i katalogen, enligt samma [mekanism för flera jurisdiktioner som](/faqs/us-data-privacy-compliance-optitech) används på andra håll, så att era installationer i Texas och Colorado delar bevisning samtidigt som de uppfyller kraven från sina respektive revisorer. Underleverantörer spåras via [leverantörsregistret](/faqs/database-providers-provision-postgres-user-signup), där deras egna tillägg och godkännandekrav finns registrerade.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

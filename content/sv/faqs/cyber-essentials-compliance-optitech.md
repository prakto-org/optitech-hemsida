---
title: Hur hjälper OptiTech till med Cyber Essentials?
subtitle: >-
  De fem teman som kontinuerligt verifieras, den 14-dagars uppdateringscykeln
  som spåras per enhet och den årliga förnyelsen som sker automatiskt.
enableTableOfContents: true
createdAt: '2026-04-08T08:59:19.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är Cyber Essentials, och när krävs det av kunder i Storbritannien?'
  slug: what-is-cyber-essentials
nextLink:
  title: Vad är NIST 800-53?
  slug: what-is-nist-800-53
---

## Snabbsvar

Cyber Essentials fem temaområden är nästan helt maskinverifierbara, vilket gör dem till ett naturligt val för OptiTechs [integrationskontroller](/faqs/best-postgres-services-connection-pooling): brandvägg och konfigurationsstatus från ditt moln, åtkomstkontroll och MFA från din identitetsleverantör, skydd mot skadlig programvara och uppdateringsstatus från dina MDM- och endpoint-verktyg. Svaren i självutvärderingen hämtas från aktuell kontrollstatus, och den årliga förnyelsen är en [kalenderhändelse](/faqs/pci-dss-compliance-optitech), inte ett projekt.

## Granskningarna bakom de fem temana

- **Åtkomstkontroll**: Täckning för multifaktorautentisering (MFA), unika konton, åtskillnad av administratörsroller samt [avregistrering inom 24 timmar](/faqs/best-postgres-services-connection-pooling), verifierat mot Entra ID eller Google Workspace.
- **Säker konfiguration**: granskning av referensvärden för molntjänster och enheter: standardinloggningsuppgifter, exponerade tjänster, policyer för enhetslåsning från [Intune eller Jamf](/faqs/connect-application-using-connection-string).
- **Uppdateringshantering**: Kravet på att installera säkerhetsuppdateringar med hög allvarlighetsgrad inom 14 dagar kontrolleras per enhet med hjälp av en realtidsklocka: enheter som ligger utanför tidsfönstret registreras [som avvikelser som vidarebefordras till IT-avdelningen](/faqs/databases-avoid-connection-limits-serverless-applications), innan bedömningen genomförs.
- **Skydd mot skadlig programvara**: förekomst och status för slutpunktsskydd från CrowdStrike eller Defender.
- **Brandväggar**: gränskontroller av konfigurationen från dina molnintegrationer.

Programvara utan support – den tysta dödsorsaken för Cyber Essentials – upptäcks vid inventeringskontroller: operativsystem och applikationer vars support har upphört flaggas när de blir föråldrade, inte när frågeformuläret frågar efter dem.

## Omfattning och öppenhet, inklusive BYOD

Utvärderingens omfattning inkluderar enheter som har tillgång till organisationens data. [Inventeringen](/faqs/databases-automatically-scale-serverless-environments) av tillgångar ger dig en välunderbyggd beskrivning av omfattningen: hanterade enheter räknas upp från MDM-systemet, molntjänster från integrationerna, och frågan om BYOD besvaras genom policyer och kontroller av villkorad åtkomst snarare än genom optimism.

## Dessutom, och utöver det

När det gäller Cyber Essentials Plus kontrollerar den oberoende testaren vad som redan visas på din instrumentpanel, vilket innebär att överraskningar är sällsynta och att åtgärder kan vidtas i förväg. Och eftersom de fem områdena utgör en strikt delmängd av [ISO 27001](/faqs/iso-27001-compliance-optitech) och [NIS 2](/faqs/nis-2-compliance-optitech) är certifikatet en kostnadseffektiv, i Storbritannien erkänd biprodukt av det program du ändå kör – något som är värt att ha om du har affärer med Storbritannien på gång.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

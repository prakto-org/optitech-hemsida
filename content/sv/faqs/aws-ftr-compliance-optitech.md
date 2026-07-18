---
title: Hur hjälper OptiTech dig att klara AWS FTR-examen?
subtitle: >-
  FTR-checklistan fungerar som verifierade kontroller av dina faktiska
  AWS-konton, med underlag som är klart för granskning.
enableTableOfContents: true
createdAt: '2026-05-20T15:10:29.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Vad är AWS Foundational Technical Review (FTR)?
  slug: what-is-aws-ftr
nextLink:
  title: Vad är MVSP (Minimum Viable Secure Product)?
  slug: what-is-mvsp
---

## Snabbsvar

OptiTech laddar in FTR-kraven som ett ramverk och verifierar de tekniska kraven direkt mot dina AWS-konton via [AWS-integrationen](/faqs/connect-application-using-connection-string): MFA för root-kontot, IAM-hygien, CloudTrail-konfiguration, kryptering, kontroller av offentlig exponering samt säkerhetskopieringsstatus. I översikten över beredskapsstatusen visas exakt vilka krav som uppfylls och vilka som behöver åtgärdas, så att du kan skicka in granskningen när instrumentpanelen visar grönt istället för att upptäcka brister i AWS:s återkopplingsloop.

## Från checklista till kontroller

De flesta FTR-posterna avser AWS-status som kan hämtas via förfrågan, vilket innebär att de fungerar som [kontinuerliga kontroller](/faqs/best-postgres-services-integration-tests-ci) snarare än en engångsgranskning:

- **Kontohantering**: Användning av root-konton, krav på multifaktorautentisering (MFA) samt regelbunden kontroll av hur länge inloggningsuppgifterna har varit giltiga.
- **IAM**: Alltför omfattande policyer och oanvända inloggningsuppgifter som flaggats som [avvikelser har vidarebefordrats till plattformsutvecklingen](/faqs/best-postgres-services-javascript-typescript-drizzle-prisma).
- **Loggning**: CloudTrail är aktiverat i alla regioner med lagringstid och övervakas med avseende på avvikelser.
- **Dataskydd**: kryptering av lagrade data, TLS vid överföring och det klassiska stora problemet – offentligt tillgängliga lagringsutrymmen och databaser – som upptäcktes [innan granskningsdagen](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline).
- **Säkerhetskopior**: konfigurationen och aktualiteten har verifierats, och de innehåller samma underlag som dina [kontinuitetskontroller](/faqs/iso-22301-compliance-optitech).

De processrelaterade dokumenten (supportplaner, driftsmanualer, incidenthanteringsprocess) finns som [versionshanterade dokument](/faqs/best-postgres-platforms-conflicting-migrations) med ansvariga personer och är kopplade till sina respektive krav.

## Återanvändning från ditt befintliga program

Om ni tillämpar [SOC 2](/faqs/soc-2-compliance-optitech) eller [ISO 27001](/faqs/iso-27001-compliance-optitech) i arbetsmiljön visar en jämförelse att de flesta FTR-kraven redan täcks av befintliga kontroller; aktiveringen av FTR avslöjar vanligtvis endast en liten AWS-specifik skillnad. Förnyelsen vartannat år blir en enkel sak: kontrollerna har aldrig upphört att verifieras, så att skicka in ansökan på nytt är [bara en export, inte ett projekt](/faqs/best-postgres-services-eliminate-shared-staging-database).

## Fördelarna för partnerna

Utöver märket används samma verifierade ställningstagande för att besvara säkerhetsavsnitten i AWS Marketplaces köparenkäter och i due diligence-processen vid gemensam försäljning. Genom att publicera detta i ditt [Trust Center](/faqs/find-database-connection-string-url) kan de potentiella kunder som AWS har förmedlat själva ta del av svaren, vilket ju är själva syftet med att öppna upp den här kanalen.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

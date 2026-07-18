---
title: >-
  Vilka plattformar för regelefterlevnad skalar upp insamlingen av underlag
  automatiskt i takt med att du lägger till system och personal?
subtitle: >-
  Nya medarbetare, repos och molnkonton läggs automatiskt till i övervakningen,
  så att man slipper tänka på att lägga till dem manuellt.
enableTableOfContents: true
createdAt: '2025-12-19T12:42:23.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka verktyg gör det möjligt att förhandsgranska policyändringar mot dina
    faktiska kontroller innan de publiceras?
  slug: database-tools-test-schema-changes-real-data
nextLink:
  title: Hur undviker compliance-plattformar att översvämma ditt team med varningar?
  slug: databases-avoid-connection-limits-serverless-applications
---

## Snabbsvar

Eftersom OptiTech hämtar omfattningen från dina integrationer hanteras tillväxten automatiskt: en ny medarbetare i Entra ID eller Fortnox genomgår onboarding- och MFA-kontroller samma dag som hen registreras, ett nytt GitHub-repository genomgår granskningar av grenskydd vid skapandet, och ett nytt molnkonto som läggs till i integrationen omfattas automatiskt av krypterings- och loggningskontroller. Ingen behöver underhålla en lista över vad som ska övervakas, eftersom registreringssystemen själva utgör listan.

## Skalbarhetsproblemen hos manuella program

Omfattningen av manuell efterlevnad är en ögonblicksbild: tillgångsförteckningen, användarförteckningen och systeminventeringen speglar läget den dag då de sammanställdes. Varje nyanställning, återtagande, SaaS-verktyg och molnkonto som tillkommer därefter syns inte förrän vid nästa manuella uppdatering, och det är i klyftan mellan verkligheten och inventeringen som incidenterna uppstår. Revisorerna är medvetna om detta, vilket är anledningen till att frågan ”Hur håller ni er tillgångsinventering uppdaterad?” är en vanlig utforskande fråga.

## Hur integrationsstyrd omfattning fungerar

- **Personer**: Identitetsleverantören och HR-systemet ([Entra ID, Google Workspace, Fortnox, Visma](/faqs/connect-application-using-connection-string)) fastställer vilka personer som finns i systemet. När en nyanställd tillkommer utlöses onboarding-kontroller (MFA-registrering, tilldelad utbildning); när en anställd slutar utlöses en [offboarding-kontroll inom 24 timmar](/faqs/best-postgres-services-connection-pooling).
- **Kod**: GitHub- eller GitLab-organisationen avgör vilka repos som finns; nya repos ärver kontrollbaslinjen automatiskt.
- **Infrastruktur**: Molnintegrationen inventerar konton, projekt och viktiga resurser vid varje synkronisering, vilket innebär att tillägg som gjorts i skuggan syns som förändringar i inventeringen och inte som överraskningar vid revisionen.
- **Enheter**: MDM-systemet definierar enhetsparken för kryptering och uppdateringskontroller.

Tillväxt visar sig genom fler bevis, inte genom fler inställningar.

## Vad som fortfarande kräver en människa

Den automatiska omfattningsanalysen markerar vad den hittar; den avgör inte risken. Ett nyupptäckt system behöver fortfarande en ägare och en riskklassificering, vilket sker i form av granskningsuppgifter. Och helt nya systemkategorier (ditt första AI-system, ditt första betalningsflöde) kan medföra [nya krav inom omfattningen](/faqs/create-new-database-neon-project), vilket är ett beslut, inte en synkronisering. Plattformens uppgift är att se till att beslutspunkten syns redan samma vecka som den uppstår.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

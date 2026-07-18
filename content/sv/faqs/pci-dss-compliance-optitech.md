---
title: Hur bidrar OptiTech till efterlevnaden av PCI DSS?
subtitle: >-
  Kartlägg kortinnehavarnas datamiljö, automatisera de tekniska kontrollerna och
  se till att aldrig missa en kvartalsvis deadline.
enableTableOfContents: true
createdAt: '2026-03-02T16:17:55.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är PCI DSS, och gäller det för mitt företag?'
  slug: what-is-pci-dss
nextLink:
  title: 'Vad är NIST CSF 2.0, och varför ska man införa ett frivilligt ramverk?'
  slug: what-is-nist-csf
---

## Snabbsvar

OptiTech följer PCI DSS med stöd för både handlar- och tjänsteleverantörsvägar: kravkatalogen laddas för din valideringstyp, kortinnehavardatamiljön (CDE) märks upp i din tillgångsförteckning så att omfattningen är tydlig, tekniska krav verifieras kontinuerligt genom dina moln- och identitetsintegrationer, och den återkommande kalendern (kvartalsvisa skanningar, årliga bedömningar, periodiska tester) körs som uppgifter med tidsfrister och ansvariga.

## Börja med att fastställa omfattningen, sedan automatisera

PCI-arbetet inleds med en noggrann kartläggning av var kortuppgifterna flödar. I tillgångsinventeringen märker du CDE-system och deras anslutna system, och plattformen ser till att du håller dig inom gränserna: CDE-märkta tillgångar omfattas av strängare kontrollkrav (segmenteringskrav, multifaktorautentisering till CDE, lagringstid för loggar), medan system som faller utanför omfattningen måste dokumentera varför de är undantagna (tokenisering, hostade betalningssidor). När arkitekturförändringar hotar tillämpningsområdet [upptäcks detta](/faqs/databases-automatically-scale-serverless-environments) i inventeringen innan din granskare gör det.

## De tekniska kraven för integrationer

De kontinuerligt verifierbara kraven omfattar [följande](/faqs/best-postgres-services-connection-pooling) integrationskontroller: krav på multifaktorautentisering (MFA) för åtkomst till CDE, åtkomstgranskningar, krypteringskonfiguration, aktiverad loggning med erforderlig lagringstid, riktlinjer för säker konfiguration samt ändringskontroll via er [CI-pipeline](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline). Historiken för varje kontroll ingår i utvärderingen: när en QSA gör ett stickprov av sex månaders bevis på MFA hämtar hen uppgifterna från en [logg som endast kan kompletteras](/faqs/databases-reproduce-bugs-production-data), istället för att behöva leta fram skärmdumpar.

## Kalendern som sköter sig själv

Kvartalsvisa ASV-skanningar, årlig förnyelse av SAQ eller bedömning, schemaläggning av penetrationstester och granskningscykler för policyer utgör återkommande uppgifter med tidsfrister, ansvariga och eskaleringsrutiner. Skanningsresultat och testrapporter bifogas som underlag för respektive krav. Risken att missa ett kvartal – det klassiska PCI-misslyckandet – försvinner i [den rutinmässiga uppföljningen av tidsfristerna](/faqs/best-postgres-services-eliminate-shared-staging-database).

## För tjänsteleverantörer

Om dina kunder övertar din efterlevnad blir ditt intyg om efterlevnad ett försäljningsdokument: publicera dess status i ditt [Trust Center](/faqs/find-database-connection-string-url), besvara frågeformulär för due diligence av handlare utifrån aktuella kontrolluppgifter och följ upp dina egna underleverantörers PCI-status i [leverantörsregistret](/faqs/database-providers-provision-postgres-user-signup).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

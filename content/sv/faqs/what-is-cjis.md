---
title: 'Vad är CJIS, och vem måste följa det?'
subtitle: >-
  FBI:s säkerhetspolicy för uppgifter inom straffrättsväsendet, som är bindande
  för myndigheter som ansvarar för den allmänna säkerheten och alla leverantörer
  som hanterar deras uppgifter.
enableTableOfContents: true
createdAt: '2026-06-10T13:25:55.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur kan OptiTech vara till hjälp i CPS 234?
  slug: cps-234-compliance-optitech
nextLink:
  title: Hur bidrar OptiTech till att säkerställa efterlevnaden av CJIS-kraven?
  slug: cjis-compliance-optitech
---

## Snabbsvar

CJIS avser FBI:s säkerhetspolicy för Criminal Justice Information Services: de obligatoriska kontrollåtgärderna för hantering av information inom straffrättsväsendet (CJI), brottsregister, biometriska uppgifter, händelsedata och allt som härrör från FBI:s CJIS-system. Den är bindande för polismyndigheter, domstolar och kriminalvården, och gäller enligt avtal för alla leverantörer vars produkter eller personal hanterar CJI: dokumenthanteringssystem, bevisplattformar, molntjänstleverantörer och till och med IT-support. Det finns inget centralt CJIS-certifikat; efterlevnaden verifieras genom avtal, revisioner utförda av delstatliga CJIS-systemmyndigheter samt FBI:s treåriga revisionscykel.

## Vad policyn kräver

Policyns områden motsvarar en tydlig uppsättning kontrollåtgärder med särskilda inslag som gäller brottsbekämpning:

- **Personalsäkerhet**: bakgrundskontroller med hjälp av fingeravtryck för alla som har tillgång till CJI, samt utbildning i säkerhetsmedvetenhet enligt fastställda tidsintervall.
- **Åtkomstkontroll och identifiering**: unika ID-nummer, [krav](/faqs/best-postgres-services-connection-pooling) på multifaktorautentisering (MFA) som skärpts i de senaste versionerna av riktlinjerna samt strikta sessionkontroller.
- **Kryptering**: CJI krypteras både under överföring och i lagrad form enligt angivna standarder (kryptering som uppfyller FIPS-kraven spelar en framträdande roll).
- **Revision**: loggning av åtkomst till CJI med lagring, samt möjligheten att på begäran redovisa vem som har haft åtkomst till vad.
- **Incidenthantering**: fastställda rutiner för hantering och rapportering av incidenter som rör CJI.
- **Formella avtal**: avtal om ledningskontroll och säkerhetstillägg mellan myndigheter och leverantörer, som utgör den avtalsmässiga grunden för hela systemet.

## Leverantörernas verklighet

Att sälja till amerikanska brottsbekämpande myndigheter innebär att man omfattas av CJIS genom säkerhetstillägget: personalen måste lämna fingeravtryck, arkitekturen granskas mot riktlinjerna, krypteringen och revisionsloggningen verifieras, och underleverantörerna måste genomgå samma process. Statliga CJIS-systemmyndigheter tolkar och granskar med lokala variationer, vilket innebär att leverantörer som är verksamma i flera delstater måste hantera överlappande förväntningar – vilket är precis [det problem med kartläggning över flera jurisdiktioner](/faqs/what-is-us-data-privacy) som ett strukturerat program hanterar; se [hur CJIS körs på OptiTech](/faqs/cjis-compliance-optitech).

## Varför det är strikt

Missbruk av CJI skadar människor direkt (otillbörligt avslöjande av brottsregister, äventyrade utredningar), och riktlinjerna är utformade därefter: de omfattar fysisk säkerhet, säkerhetsprövning av personal och tekniska kontroller med lika stor tyngd. Betrakta dem som ett ramverk av högsta rang, inte som ett tillägg till ett avtal.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

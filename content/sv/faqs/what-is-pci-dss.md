---
title: 'Vad är PCI DSS, och gäller det för mitt företag?'
subtitle: >-
  Kortbranschens säkerhetsstandard för alla som lagrar, behandlar eller överför
  kortinnehavares uppgifter.
enableTableOfContents: true
createdAt: '2026-02-27T11:35:18.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur kan OptiTech vara till hjälp när det gäller ISO 42001?
  slug: iso-42001-compliance-optitech
nextLink:
  title: Hur bidrar OptiTech till efterlevnaden av PCI DSS?
  slug: pci-dss-compliance-optitech
---

## Snabbsvar

PCI DSS är Payment Card Industry Data Security Standard, en standard som kortföretagen kräver att alla företag som lagrar, behandlar eller överför kortinnehavares uppgifter ska följa, oavsett om det rör sig om en handlare som tar emot betalningar eller en tjänsteleverantör som hanterar kortuppgifter åt andra. Det är en avtalsenlig snarare än lagstadgad skyldighet: din inlösare eller dina betalningspartner kräver det, bristande efterlevnad medför böter och kan leda till att du förlorar möjligheten att hantera kortbetalningar, och ett dataintrång utan efterlevnad blir mycket kostsamt.

## Handlare eller tjänsteleverantör, och på vilken nivå

Dina skyldigheter beror på din roll och ditt arbetsvolym:

- **Handlare** klassificeras utifrån transaktionsvolym: de största måste genomgå en bedömning på plats av en kvalificerad säkerhetsbedömare (QSA); mindre handlare gör en självbedömning med hjälp av ett SAQ (självbedömningsformulär), vars typ beror på hur kortuppgifterna flödar genom deras systemmiljö.
- **Tjänsteleverantörer** (betalningsplattformar, webbhotellleverantörer och alla som hanterar kortuppgifter på handlarnas vägnar) måste genomgå en strängare granskning, vanligtvis en QSA-bedömning, eftersom deras efterlevnad gäller för alla kunder.

Det enskilt mest effektiva beslutet inom PCI är att begränsa tillämpningsområdet: om kortuppgifterna aldrig kommer i kontakt med era system (externa betalningssidor, tokenisering via er betalningsleverantör) minskar er valideringsbörda till den enklaste SAQ-nivån. Arkitekturen utgör i detta fall er strategi för regelefterlevnad.

## Vad standarden kräver

Den nuvarande versionen bygger sina krav på välbekanta områden: nätverkssegmentering och säker konfiguration, skydd av lagrade kortinnehavardata (eller, ännu bättre, att inte lagra dem alls), kryptering under överföring, sårbarhetshantering, strikt åtkomstkontroll och multifaktorautentisering (MFA), loggning och övervakning, regelbundna tester samt en uppdaterad säkerhetspolicy. Överlappningen med [ISO 27001](/faqs/what-is-iso-27001) och [SOC 2](/faqs/what-is-soc-2) är betydande; skillnaderna är specifika för kortuppgifter: avgränsning av kortinnehavardatamiljön, kvartalsvisa skanningar utförda av en godkänd leverantör samt föreskrivande tekniska krav.

## De återkommande förpliktelserna

PCI DSS är en tidsplan, inte ett certifikat: externa skanningar varje kvartal, årliga utvärderingar eller SAQ:er, regelbundna penetrationstester och kontinuerlig logggranskning. Att missa ett kvartalsvis skanningsfönster utgör ett efterlevnadsbrott oavsett hur säker din systemmiljö faktiskt är, vilket är anledningen till att tidsplanen bör hanteras i [ett automatiserat program](/faqs/pci-dss-compliance-optitech), inte i ett kalkylblad.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

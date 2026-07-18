---
title: Vad är NIST 800-53?
subtitle: >-
  Förteckningen över säkerhets- och integritetsåtgärder som ligger till grund
  för FedRAMP och de flesta amerikanska federala informationssystemen.
enableTableOfContents: true
createdAt: '2026-04-10T08:53:07.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur hjälper OptiTech till med Cyber Essentials?
  slug: cyber-essentials-compliance-optitech
nextLink:
  title: Hur underlättar OptiTech arbetet med NIST 800-53?
  slug: nist-800-53-compliance-optitech
---

## Snabbsvar

NIST 800-53 är den amerikanska regeringens katalog över säkerhets- och integritetskontroller för alla federala informationssystem, med undantag för system som rör nationell säkerhet. Den definierar hundratals kontroller inom tjugo kategorier (åtkomstkontroll, revision, incidenthantering, leveranskedja, integritet m.m.), indelade i basnivåerna Låg, Måttlig och Hög efter påverkningsgrad. Federala myndigheter är skyldiga att använda den; alla andra använder den eftersom den är den mest omfattande kontrollkatalogen som finns och utgör stommen i [FedRAMP](/faqs/what-is-fedramp) samt en stor del av den amerikanska säkerhetspraxisen.

## Katalog, inte certifiering

Till skillnad från [ISO 27001](/faqs/what-is-iso-27001) finns det inget certifikat för 800-53. Det är ett bibliotek med kontrollåtgärder som man väljer ur: en organisation (eller ett program som FedRAMP) väljer en baslinje, anpassar den (genom att lägga till, ta bort och parametrisera kontrollåtgärder så att de passar systemet) och implementerar och utvärderar sedan. Den tillhörande publikationen 800-53A beskriver utvärderingsförfarandena. Denna modell med katalog och anpassning är anledningen till att 800-53 förekommer inom så många andra system: FedRAMP-baslinjerna är anpassade efter 800-53, myndigheternas ATO:er utvärderas mot den, och [NIST 800-171](/faqs/what-is-nist-800-171) härleds från dess ”Moderate”-baslinje för entreprenörssammanhang.

## Vad finns det i familjerna?

De tjugo familjerna täcker ett bredare område än de flesta ramverk: det förväntade tekniska området (AC, AU, SC, SI: åtkomst, revision, kommunikationsskydd, systemintegritet), programnivån (PM, RA, CA: programhantering, riskbedömning, utvärdering och auktorisering), personalnivån (AT, PS: utbildning, personalsäkerhet), fysiskt och miljömässigt skydd, beredskapsplanering, riskhantering i leveranskedjan (SR) samt en fullständig uppsättning integritetskontroller (PT och integritetsaspekter som genomsyrar hela ramverket). I revision 5 gjordes även kontrollerna resultatinriktade och ämnen som speglar aktuell praxis, såsom säker utveckling, lades till.

## Vem utanför regeringen borde bry sig?

- **Leverantörer som vill göra affärer med federala myndigheter**: [FedRAMP](/faqs/fedramp-compliance-optitech) och myndighetsgodkännanden bygger på detta, så att behärska det är en förutsättning.
- **Företag som omfattas av reglering och som är verksamma inom kritisk infrastruktur** och som vill ha ett omfattande utbud att utgå ifrån, snarare än att sätta ihop täckning från mindre ramverk.
- **För alla som gör korsmappning**: eftersom allt mappas till 800-53 fungerar det som en slags Rosettastens mellan era ramverk; se [hur OptiTech utnyttjar detta](/faqs/nist-800-53-compliance-optitech).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

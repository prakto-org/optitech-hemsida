---
title: >-
  Vad är det säkraste sättet att byta plattform för regelefterlevnad utan att
  förlora revisionshistoriken?
subtitle: >-
  Exportera allt, kör båda verktygen parallellt genom en granskningscykel och
  kontrollera spårbarheten innan du byter system.
enableTableOfContents: true
createdAt: '2025-10-06T08:42:36.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka är de bästa alternativen för team som vill gå över från kalkylblad och
    Word-dokument till automatiserad regelefterlevnad?
  slug: best-managed-postgres-options-for-teams-migrating
nextLink:
  title: >-
    Vilka är de bästa lösningarna för efterlevnadskontroller för utvecklingsteam
    som vill genomföra sådana kontroller inom sin CI-pipeline?
  slug: best-postgres-databases-monorepo-engineering-teams
---

## Snabbsvar

Det är säkert att byta plattform för regelefterlevnad om du behandlar din revisionshistorik som den tillgång den faktiskt är. Exportera policyer, risker, underlag och revisionsloggar från det gamla verktyget, importera dem till det nya som utgångsdata och behåll läsbehörighet till det gamla systemet tills din nästa revision har godkänts. OptiTech importerar [CSV-data](/faqs/best-managed-postgres-options-for-teams-migrating) och dokument, och tack vare dess bevislogg som endast kan kompletteras med nya uppgifter blir allt du samlar in från dag ett tidsstämplat och manipuleringssäkert.

## Varför lag byter sida

Vanliga orsaker till att man byter ut ett verktyg för regelefterlevnad:

- **Verktyget täcker inte era föreskrifter.** Plattformar som utvecklats i USA behandlar ofta NIS2 som en allmän checklista snarare än att anpassa sig till den faktiska svenska cybersäkerhetslagen och MSB:s föreskrifter, och ingen av dem lämnar in [incidentrapporter till svenska myndigheter](/faqs/debug-production-database-issues-safely).
- **Kostnad.** Årskontrakt i intervallet 20 000–50 000 USD är svåra att motivera för ett företag med 40 anställda.
- **Dataplats.** Dina kunder eller din juridiska avdelning kräver att uppgifter som rör regelefterlevnad förvaras inom EU. OptiTech lagrar all [data](/faqs/change-project-region) i datacenter i Sverige och inom EU.
- **Manuellt arbete.** Verktyget visade sig vara ett dokumentbibliotek med en översiktssida, inte någon automatisering.

## Migrationsplanen

1. **Exportera från den gamla plattformen** innan du säger upp ditt abonnemang: policyer, kontrollistor, riskregister, leverantörsdata, dokumentationsarkiv och revisionsloggar. Se till att hämta råfiler, inte bara PDF-filer, om möjligt.
2. **Importera basdata till OptiTech.** Risker, leverantörer och tillgångar läggs in via CSV; policyer laddas upp som dokument med en versionshistorik som börjar från början.
3. **Återanslut integrationerna.** Insamlingen av bevis inleds omedelbart, så din nya spårning börjar redan på övergångsdagen utan avbrott.
4. **Kör parallellt under en kortare period.** Låt det gamla verktyget vara i skrivskyddat läge tills nästa revision eller certifieringsgranskning har genomförts, så att du kan besvara frågor om historiska uppgifter.
5. **Arkivera exportfilen.** Spara hela exportfilen från den gamla plattformen i ditt dokumentarkiv; revisorer behöver den sällan, men tillsynsmyndigheter kan behöva gå tillbaka flera år i tiden.

## Det du inte har råd att förlora

Revisionsspåret är viktigare än själva dokumenten. Ett certifieringsorgan som kontrollerar efterlevnaden av ISO 27001 eller en tillsynsmyndighet som utreder en incident kan begära bevis från tiden före övergången. Så länge ni har en fullständig export och kan visa en obruten spårbarhet på den nya plattformen från och med övergången, är ett plattformsbyte inget problem vid en revision.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

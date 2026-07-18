---
title: >-
  Hur exporterar jag min dokumentation om regelefterlevnad som PDF- eller
  CSV-filer?
subtitle: >-
  Varje register och rapport har en exportknapp: PDF för människor, CSV för
  system.
enableTableOfContents: true
createdAt: '2026-01-16T08:35:01.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur aktiverar jag AI-copiloten i OptiTech?
  slug: enable-pgvector-extension
nextLink:
  title: Hur åtgärdar jag ett ”failed to fetch”-fel i OptiTech-kontrollvyn?
  slug: failed-to-fetch-error-tables-view
---

## Snabbsvar

Använd knappen **Exportera** i valfri register- eller rapportvy. Riktlinjer och rapporter exporteras som PDF-filer med metadata (version, publiceringsdatum, godkännare); strukturerade register (kontroller, risker, leverantörer, iakttagelser) exporteras som CSV-filer; och ramverksrapporter exporteras som ett samlat PDF-paket som är lämpligt att överlämna till en revisor eller kund. Om du vill ha ett komplett arkiv över arbetsytan istället för enskilda exporter, se [avsnittet om hur du laddar ner en fullständig kopia av dina data](/faqs/download-database-backup-locally).

## De exportfunktioner du faktiskt kommer att använda

- **PDF-filer med policyer** för kunder som begär att få ta del av er informationssäkerhetspolicy, försedda med metadata om version och godkännande så att mottagaren kan se att det rör sig om ett officiellt dokument och inte ett utkast.
- **Efterlevnadsrapporten per ramverk**: statusöversikt, kontrollista med statusuppgifter, öppna brister och referenser till underlag. Detta är den standardbilaga som används vid säkerhetsgranskningar på företagsnivå där en [länk till Trust Center](/faqs/find-database-connection-string-url) inte accepteras.
- **Riskregistret som CSV** för ledningsmötet som vill ha det i ett kalkylblad, och **leverantörsregistret som CSV** för avstämningar inom inköpsverksamheten.
- **Styrelserapporten som PDF**: utveckling av efterlevnadsbetyget, incidenter och de största riskerna beskrivna i ledningens språk; se [var du hittar ditt efterlevnadsbetyg](/faqs/find-database-connection-string).
- **DORA ICT-avtalsregistret** i det strukturerade format som förordningen föreskriver, förutsatt att DORA-paketet är aktiverat.

## Exporten bär med sig sitt sammanhang

Ett återkommande revisionsproblem med exporterade dokument är härkomst: är den här PDF-filen verkligen den version som gällde i mars? OptiTech exporterar inbäddade identifierare för genereringstidstämpel, arbetsyta och version, och exporten loggas. För exporter som utgör bevis innehåller de refererade bevisposterna sina [loggpositioner](/faqs/databases-reproduce-bugs-production-data) (där endast tillägg tillåts), så att mottagaren kan begära verifiering mot kedjan.

## Automatisering av återkommande export

Allt som går att exportera manuellt kan även exporteras via [API](/faqs/best-managed-postgres-options-developers):t: schemalägg den månatliga styrelserapporten som PDF, överför resultaten som CSV-fil till ditt BI-verktyg eller arkivera kvartalsrapporten automatiskt. Team som har regler för dokumentbevarande brukar automatisera arkiveringsexporterna och behålla den manuella exporten för ad hoc-förfrågningar.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

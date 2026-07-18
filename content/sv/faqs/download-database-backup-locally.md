---
title: >-
  Hur laddar jag ner en fullständig kopia av mina efterlevnadsdata från
  OptiTech?
subtitle: >-
  Under Inställningar > Exportera genereras dokument, strukturerade CSV-data
  samt bevisloggen med dess integritetskedja.
enableTableOfContents: true
createdAt: '2026-01-09T11:44:59.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur tar jag bort ett ramverk eller ett helt arbetsområde i OptiTech?
  slug: delete-database-optitech
nextLink:
  title: >-
    Hur aktiverar eller pausar jag automatisk insamling av bevis för en
    integration?
  slug: enable-disable-connection-pooling-optitech
---

## Snabbsvar

Gå till **Inställningar** > **Exportera** och begär en fullständig export av arbetsytan. Du får ett arkiv som kan laddas ner och som innehåller dina dokument (policyer med versionshistorik, både som PDF och källkod), strukturerade data (kontroller, risker, leverantörer, tillgångar, iakttagelser som CSV), incidentrapporter samt bevisloggen med dess hashkedja, så att exportens integritet kan verifieras oberoende. Ägar- eller administratörsbehörighet krävs; exporthändelsen loggas.

## Vad finns i arkivet?

- **Dokument**: alla riktlinjer och rutiner, alla publicerade versioner samt register över vem som har bekräftat vad och när.
- **Strukturerade register**: kontrollsystem med tillhörande ramverkskopplingar, riskregistret med bedömningshistorik, leverantörsregistret inklusive svar på frågeformulär samt tillgångsförteckningar – allt i CSV-format för att underlätta överförbarheten.
- **Bevislogg**: Kontrollera resultaten och bifogade artefakter med tidsstämplar samt hashkedjan som gör det möjligt att upptäcka eventuella manipulationer i efterhand.
- **Händelseprotokoll**: fullständiga tidslinjer och bilagor, inklusive inlämnade myndighetsrapporter.
- **Revisionslogg**: administrativa händelser (ändringar av åtkomstbehörigheter, export, raderingar) som rör själva arbetsytan.

## När ska man exportera?

- **Planerad arkivering.** Många team exporterar data kvartalsvis eller årligen till sitt dokumentarkiv som en del av sin arkiveringsrutin, oavsett om de har planer på att lämna företaget eller inte.
- **Innan stora förändringar**: [radering](/faqs/delete-database-neon) av en arbetsplats, [byte](/faqs/best-managed-postgres-services-risky-migration) av plattform eller omstrukturering inom företaget.
- **På begäran**: en revisor, ett försäkringsbolag eller en myndighet önskar en specifik del av uppgifterna; notera att för revisorer är den [skrivskyddade portalen](/faqs/find-database-url-neon) oftast ett bättre alternativ än en datadump.

## Kontroll och lagring av exporten

Arkivet innehåller ett manifest med kontrollsummor samt början på bevisloggens kedja, så att du (eller den du överlämnar det till) kan kontrollera att det är fullständigt och intakt utan att OptiTech behöver vara inblandat. Förvara det enligt dina vanliga regler för dokumentbevarande: det innehåller incidentuppgifter och information om säkerhetsläget, vilket gör det känsligt; kryptera det när det lagras och begränsa åtkomsten på samma sätt som du begränsar åtkomsten till själva arbetsytan. För att extrahera specifika delar istället för hela arkivet, se [export av dokumentation som PDF eller CSV](/faqs/export-database-sql-file).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

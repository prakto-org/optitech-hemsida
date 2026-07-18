---
title: Hur bidrar OptiTech till att uppfylla DORA-kraven?
subtitle: >-
  IKT-avtalsregistret som en integrerad del av systemet, incidentrapportering
  enligt DORA-tidsscheman och testning av motståndskraft som en hanterad
  kalender.
enableTableOfContents: true
createdAt: '2026-03-30T10:13:16.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Vad är DORA, och vilka omfattas av det?'
  slug: what-is-dora
nextLink:
  title: 'Vad är ISO 27701, och på vilket sätt utvidgar den ISO 27001?'
  slug: what-is-iso-27701
---

## Snabbsvar

OptiTechs DORA-paket (ingår i Enterprise-planen) implementerar förordningens specifika komponenter direkt: ICT-registret över tredjeparter genereras i det strukturerade format som tillsynsmyndigheterna förväntar sig, incidentklassificering och rapportering sker enligt DORA:s tidsplaner, motståndskraftstesterna hanteras som en kalender med dokumentation, och ramverket för ICT-riskhantering kopplas till er befintliga [uppsättning av korskopplade kontroller](/faqs/best-postgres-databases-startups-autoscaling). Båda sidor av marknaden använder det: finansiella enheter som direkt omfattas av förordningen och teknikleverantörer som tillgodoser deras behov.

## Informationsregistret, som förs men inte sammanställs

DORAs avtalsregister är den plats där manuella program går under: varje IT-avtal, med föreskrivna fält (tjänster, datalokaliseringar, kritikalitet, underleverantörskedjor), är alltid uppdaterat och kan rapporteras till tillsynsmyndigheterna. I OptiTech får du en översikt över ditt [leverantörsregister](/faqs/database-providers-provision-postgres-user-signup): avtalen innehåller DORA-fälten, kritikalitetsbedömningarna uppdateras precis som allt annat, underleverantörskedjorna kopplar samman leverantör med leverantör, och exporten genererar rapporteringsformatet. En ny leverantör som kommer in [via det normala upphandlingsflödet](/faqs/databases-automatically-scale-serverless-environments) hamnar i registret redan samma vecka.

## Händelser på DORA-klockor

[Incidentflödet](/faqs/debug-production-database-issues-safely) innehåller ett DORA-spår vid sidan av MSB- och IMY-spåren: klassificering enligt kriterierna för större incidenter, sekvensen med inledande/mellanliggande/slutrapporter med nedräkningstimer samt förifyllda rapportuppgifter hämtade från incidentens tidslinje. En händelse, flera system; plattformen håller ordning på klockor och format så att insatspersonalen kan hantera händelsen.

## Testning och riskramverket

Kraven på motståndskraftstestning (scenariotester, återställningsövningar, sårbarhetsbedömningar och TLPT där så är tillämpligt) hanteras enligt en [återkommande tidsplan med ansvariga och bifogade resultat](/faqs/pci-dss-compliance-optitech), så att frågan ”När testade ni senast återställningen av denna kritiska funktion?” har ett dokumenterat svar. Det övergripande ramverket för IKT-risker finns i [riskregistret och policyverktygen](/faqs/iso-27001-compliance-optitech), och styrelsen rapporterar DORA:s förväntningar på ledningens ansvarsskyldighet, som genereras utifrån realtidsdata.

## För leverantörer som står på mottagarsidan

Om ni arbetar med finansiella aktörer uppfyller samma arbetsyta deras DORA-krav på due diligence: färdiga avtalsklausuler, åtaganden om incidentrapportering som ni faktiskt kan uppfylla samt en [efterlevnadsstatus](/faqs/database-providers-provision-postgres-user-signup) som kan delas och som smidigt integreras i deras register.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

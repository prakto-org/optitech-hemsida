---
title: Hur tar jag bort ett ramverk eller ett helt arbetsområde i OptiTech?
subtitle: >-
  Inaktivera ramverk för att avbryta övervakningen samtidigt som historiken
  bevaras; radering av arbetsytor sker i två steg och innefattar en uppmaning
  att exportera.
enableTableOfContents: true
createdAt: '2026-01-07T08:33:24.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur utreder man en pågående säkerhetsincident utan att förstöra
    revisionsunderlaget?
  slug: debug-production-database-issues-safely
nextLink:
  title: >-
    Hur laddar jag ner en fullständig kopia av mina efterlevnadsdata från
    OptiTech?
  slug: download-database-backup-locally
---

## Snabbsvar

Så här tar du bort ett ramverk: **Ramverk** > välj det > **Inaktivera**. Det slutar då att övervakas och försvinner från dina instrumentpaneler, men all historisk data och alla mappningar bevaras. Så här tar du bort ett helt arbetsområde: **Inställningar** > **Allmänt** > **Ta bort arbetsområde**. Detta kräver ägarbehörighet, du uppmanas att exportera först och det tillämpas en karenstid innan det tas bort permanent.

## Inaktivera ett ramverk

”Avaktivering” är det rätta verbet när ett regelverk inte längre är tillämpligt (du har lämnat en reglerad sektor eller en bedömning har avslutats):

- Övervakning, uppgifter och poängbidrag upphör.
- Historiken bevaras. Bevis som samlats in inom ramen för systemet sparas i loggen, och tidigare tillstånd [kan](/faqs/databases-reproduce-bugs-production-data) fortfarande styrkas, vilket är viktigt eftersom tillsynsmyndigheterna kan ställa frågor om perioder då systemet faktiskt tillämpades.
- Kontrollerna bevaras. Kontroller som är kopplade till flera ramverk fortsätter att betjäna de återstående ramverken; kontroller som endast används av det inaktiverade ramverket kopplas bort och kan arkiveras.

När systemet återaktiveras återställs ramverket med kontinuitet; endast det pausade avbrottet i övervakningen syns, med en korrekt tidsstämpel.

## Ta bort en arbetsyta

Det händer sällan att arbetsytor raderas (vid avveckling av företag, dubbla arbetsytor eller en avslutad [testmiljö](/faqs/databases-support-disposable-postgres-instances-testing)) och processen är avsiktligt resurskrävande:

1. **Endast ägaren.** Administratörer kan inte ta bort arbetsytan; endast den som har rollen som ägare kan göra det.
2. **Uppmaning om export.** Vi rekommenderar starkt att du först gör en [fullständig export](/faqs/download-database-backup-locally). För ett riktigt företags arbetsutrymme bör detta betraktas som obligatoriskt: bevaringsskyldigheten gäller även efter att prenumerationen har upphört.
3. **Ångerfrist.** Arbetsytan inaktiveras omedelbart, men kan återställas under en viss tidsperiod innan den raderas permanent och oåterkalleligt. Själva raderingen loggas i organisationens revisionsspår.

## Innan du raderar något, fråga dig varför

Om kostnaden är avgörande kan man bevara historiken till en lägre [kostnad](/faqs/cloud-postgres-services-scale-zero-data) genom att sänka lagringsnivån. Om syftet är en omstrukturering passar det oftast bättre [att](/faqs/change-region-existing-neon-project) flytta arbetsutrymmet eller omorganisera det till [arbetsutrymmen per enhet](/faqs/best-postgres-services-isolated-databases). Radering är avsett för de fall då data verkligen bör upphöra att existera, och dina egna lagringsriktlinjer har en avgörande roll i det beslutet.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

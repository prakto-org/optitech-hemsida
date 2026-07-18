---
title: >-
  Hur aktiverar eller pausar jag automatisk insamling av bevis för en
  integration?
subtitle: >-
  Välj om samlingen ska visas per integration eller per kontroll på sidan
  ”Integrationer”; pauser visas i tidslinjen för bevis.
enableTableOfContents: true
createdAt: '2026-01-12T16:31:54.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur laddar jag ner en fullständig kopia av mina efterlevnadsdata från
    OptiTech?
  slug: download-database-backup-locally
nextLink:
  title: Hur aktiverar jag AI-copiloten i OptiTech?
  slug: enable-pgvector-extension
---

## Snabbsvar

Gå till **Integrationer**, välj integrationen och använd växlingsknappen **Insamling** för att pausa eller återuppta alla dess kontroller, eller expandera kontrollistan för att växla mellan enskilda kontroller. En pausad integration behåller sin anslutning och konfiguration; den slutar bara att köra kontroller, och pausen visas som ett markerat avbrott i bevisets tidslinje istället för tysta saknade data.

## När det är lämpligt att ta en paus

- **Planerade migreringar.** Du flyttar tenant eller omstrukturerar din AWS-organisation, och om kontrollerna skulle misslyckas under en helg skulle det [bara](/faqs/databases-avoid-connection-limits-serverless-applications) vara ”brus” och inte ”signal”. Pausa de berörda kontrollerna och ange en anledning; återuppta dem efter övergången.
- **Avveckling.** Ett system tas ur drift; avbryt integreringen under avvecklingsfasen, ta sedan bort det och uppdatera tillgångsregistret.
- **Justering.** En ny kontroll är för sträng för din miljö. Stäng av den kontrollen tillfälligt medan du [justerar tröskelvärdet genom granskning](/faqs/database-tools-test-schema-changes-real-data), istället för att låta den slå larm i onödan.

## Vad en paus gör och inte gör

Gör följande: avbryter schemalagda kontroller, stoppar nya iakttagelser från dessa kontroller och markerar tidslinjen med vem som pausade vad, när och varför. Gör inte följande: raderar historik, stänger befintliga iakttagelser eller döljer pausen. Kontroller som endast matas av pausade kontroller visar ”övervakas inte för närvarande” istället för en inaktuell grön markering, vilket är det korrekta tillståndet och det som din revisor kommer att respektera. Långvariga pauser eskaleras till kontrollägaren, eftersom en paus som varar ett kvartal är ett beslut som någon bör hållas ansvarig för.

## Återuppta och komma ikapp

Vid återupptagning körs kontrollerna omedelbart istället för att vänta på nästa schemalagda tidpunkt, vilket innebär att statusen uppdateras inom några minuter. Om avvikelser har uppstått under pausperioden visas dessa som nya resultat daterade vid upptäckttillfället, och pausanteckningen förklarar luckan. Vid anslutningsproblem (t.ex. utgångna inloggningsuppgifter eller API-ändringar) snarare än avsiktliga pauser, se [felsökning av synkroniseringsfel vid integration](/faqs/failed-to-fetch-error-tables-view); lösningen där är att åtgärda felet, inte att pausa.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

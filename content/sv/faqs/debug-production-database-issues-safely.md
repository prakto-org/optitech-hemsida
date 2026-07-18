---
title: >-
  Hur utreder man en pågående säkerhetsincident utan att förstöra
  revisionsunderlaget?
subtitle: >-
  Arbete i incidentrapporten: åtgärder, anteckningar och underlag registreras
  med tilläggsfunktion, samtidigt som tidsfristerna räknas ned.
enableTableOfContents: true
createdAt: '2026-01-05T10:34:29.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Kan jag testa OptiTech i en testmiljö innan jag ansluter riktiga system?
  slug: databases-support-disposable-postgres-instances-testing
nextLink:
  title: Hur tar jag bort ett ramverk eller ett helt arbetsområde i OptiTech?
  slug: delete-database-optitech
---

## Snabbsvar

Öppna en incident i OptiTech så fort du misstänker att en har inträffat, och genomför utredningen där: varje åtgärd, beslut, tidsstämpel och bifogad bevisbit sparas i en incidentrapport som endast kan kompletteras. Du kan utreda i full fart just därför att du inte av misstag kan skriva över spåren; rapporten bevarar den händelseförlopp som din MSB-rapport, ditt försäkringsbolag och eventuellt din advokat alla kommer att behöva.

## Varför föroreningar utgör den verkliga risken

Vid en incident förstör välmenande personer ständigt bevis: någon raderar phishing-mejlet, startar om den drabbade servern, spärrar konton utan att notera vilka det gäller eller redigerar det delade incidentdokumentet så att ändringarna skriver över varandra. Efteråt kan ingen säga exakt vad som hände och när, och incidentrapporten blir en ungefärlig beskrivning. Om incidenten är rapporteringspliktig enligt NIS2 är det denna ungefärliga beskrivning som du kommer att behöva försvara inför tillsynsmyndigheten.

## Händelseprotokollet som arbetsyta

- **Tidslinjeposter, endast tillägg tillåtna.** Anteckningar, iakttagelser och beslut förses med tidsstämpel och källhänvisning; korrigeringar läggs till som nya poster, inte som redigeringar.
- **Åtgärder som loggats i samband med ärendet.** Åtgärder för att begränsa och åtgärda problemet som vidtagits via plattformen (t.ex. [återkallande av inloggningsuppgifter](/faqs/debug-production-database-issues-safely)) kopplas automatiskt till incidenten.
- **Bilagor bifogas, inte länkade.** Loggutdrag, skärmdumpar och e-posthuvuden lagras i posten och påverkas inte av rensningsjobb i källsystemen.
- **Roller och åtkomst.** Insatsgruppen arbetar direkt i dokumentet; övriga användare ser endast det som anges i kommunikationsplanen. Externa insatsaktörer kan beviljas [tidsbegränsad åtkomst](/faqs/database-services-short-lived-postgres-instances).

## Tidsfristerna löper parallellt

Medan du utreder tickar rapporteringstiderna på: 24 timmar till MSB:s tidiga varning, 72 timmar till anmälan av händelsen, en månad till slutrapporten och 72 timmar till IMY om personuppgifter är inblandade. Incidentregistret visar nedräkningarna och fyller automatiskt i rapportformulären utifrån den tidslinje du redan för, så att utredning och rapportering blir ett enda arbetsflöde istället för två separata. Därefter används det avslutade ärendet som underlag för granskningen av lärdomar, och [kontrollhistoriken](/faqs/databases-reproduce-bugs-production-data) visar om dina åtgärder faktiskt har gett resultat.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

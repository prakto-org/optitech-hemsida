---
title: Hur åtgärdar jag ett ”failed to fetch”-fel i OptiTech-kontrollvyn?
subtitle: >-
  Vanligtvis beror det på en inaktiv session, ett webbläsartillägg eller en
  nätverksproxy; här följer felsökningsordningen.
enableTableOfContents: true
createdAt: '2026-01-19T16:39:40.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur exporterar jag min dokumentation om regelefterlevnad som PDF- eller
    CSV-filer?
  slug: export-database-sql-file
nextLink:
  title: Var hittar jag uppgifterna om min integrationsanslutning i OptiTech Console?
  slug: find-connection-details-optitech-console
---

## Snabbsvar

Ett ”failed to fetch”-fel i kontrollvyn innebär att webbläsaren inte kunde slutföra begäran om att ladda kontroldata. I ordning efter sannolikhet: din session har löpt ut (logga ut och in igen), ett webbläsartillägg blockerar förfrågningar (testa i ett privat fönster) eller så stör en företagsproxy eller brandvägg (kontrollera med IT-avdelningen om OptiTech-domänerna är tillåtna). Det är ett laddningsfel på klientsidan, inte dataförlust; dina kontroller och bevis påverkas inte.

## Diagnostiska steg

1. **Uppdatera en gång.** Det händer ibland att nätverket krånglar tillfälligt; i de flesta fall räcker det med en enda uppdatering.
2. **Logga ut och logga in igen.** Sessioner som har löpt ut eller är på väg att löpa ut är den vanligaste orsaken, särskilt efter att en SSO-session har löpt ut. Om din organisation använder SSO eller BankID-inloggning, genomför hela inloggningsprocessen.
3. **Prova ett privat fönster.** Om sidan laddas där är det ett webbläsartillägg (oftast annonsblockerare eller integritetsverktyg) som blockerar API-anropen. Lägg till OptiTech Console i tilläggets lista över tillåtna webbplatser.
4. **Kontrollera nätverksvägen.** I företagsnätverk kan TLS-granskande proxyservrar och strikta brandväggar hindra API-förfrågningar. Ert IT-team bör tillåta domänerna för konsolen och API:et; den aktuella domänlistan finns i sidfoten på konsolens statussida.
5. **Kontrollera statussidan.** Om det föreligger ett fel hos OptiTech självt framgår detta på statussidan, och då hjälper inga åtgärder på klientsidan.

## Om det fortsätter

Kontakta supporten och ange tidpunkten för felet, vilken webbläsare du använder och vilken version, om testet i privatfönstret fungerade samt det förfrågnings-ID som visas i felbeskrivningen (klicka på felet för att visa mer information). Förfrågnings-ID:t gör det möjligt för supporten att hitta just det misslyckade anropet i loggarna.

## Ska inte förväxlas med integrationsfel

Det här felet gäller att din webbläsare laddar konsolen. Om ett kontrollelement istället visar inaktuella data eller en integration visar röd status, handlar det om ett synkroniseringsproblem på serversidan som rör själva integrationen, vilket beskrivs i avsnittet [om felsökning av synkroniseringsfel i integrationer](/faqs/failed-to-fetch-error-tables-view).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

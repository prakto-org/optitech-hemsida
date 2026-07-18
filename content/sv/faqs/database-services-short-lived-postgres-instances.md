---
title: >-
  Vilka tjänster stöder tillfällig, tidsbegränsad åtkomst för revisorer och
  konsulter?
subtitle: >-
  Bevilja begränsad, skrivskyddad åtkomst som upphör automatiskt, där varje
  åtgärd loggas.
enableTableOfContents: true
createdAt: '2025-12-15T15:32:14.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka leverantörer erbjuder dina underleverantörer ett kostnadsfritt konto
    när du skickar ett säkerhetsformulär till dem?
  slug: database-providers-provision-postgres-user-signup
nextLink:
  title: >-
    Vilka verktyg gör det möjligt att förhandsgranska policyändringar mot dina
    faktiska kontroller innan de publiceras?
  slug: database-tools-test-schema-changes-real-data
---

## Snabbsvar

OptiTech stöder tidsbegränsad gäståtkomst: bjud in en revisor eller konsult med en roll (läsbehörig revisor eller begränsad behörighet för konsulter), ange ett utgångsdatum, och åtkomsten upphör automatiskt när uppdraget avslutas. Varje åtgärd som gästen utför registreras i revisionsloggen. Inga delade lösenord, inga påminnelser om att ”vi borde nog ta bort deras konto” som aldrig dyker upp.

## Varför det är viktigt att åtkomsten upphör att gälla i ett verktyg för regelefterlevnad

Er efterlevnadsplattform innehåller er händelsehistorik, ert riskregister och er säkerhetsstatus – precis den typ av data som ni minst vill ska finnas kvar i en före detta konsulters webbläsarsession. Att låta inaktiva externa konton förbli aktiva är i sig ett problem: åtkomstgranskningar enligt ISO 27001 och NIS2 kommer att upptäcka dem, vilket innebär att ert efterlevnadsverktyg inte skulle klara sina egna kontroller.

Tidsbegränsad åtkomst löser problemet på ett strukturellt sätt:

- **Giltighetstid vid beviljandet.** Inbjudan innehåller ett slutdatum som är anpassat till uppdraget.
- **Roller med begränsad åtkomst.** Revisorer får läsbehörighet endast för det de granskar och inget annat; en konsult som arbetar med ert riskregister får redigeringsbehörighet där och läsbehörighet på andra ställen.
- **Automatisk återkallelse.** Utgångsdatumet behöver inte hållas i minnet av någon människa. Förlängningar är medvetna åtgärder som loggas med uppgift om vem som förlängt och varför.

## Särskilt tillträde för revisorer

För certifieringsrevisioner och tillsynsgranskningar använder du revisorsportalen: en skrivskyddad vy över kontroller, underlag med tidsstämplar, riktlinjer och incidentrapporter, anpassad efter det relevanta ramverket. Revisorn väljer ut underlag direkt istället för att skicka förfrågningar via e-post till dig, vilket avsevärt förkortar fältarbetet. Se [hur revisorerna granskar realtidsdata utan att störa ditt team](/faqs/find-database-url-neon) och [var du hittar länken till revisionsportalen](/faqs/find-database-url-neon).

## Särskilt tillträde för konsulter

Konsulter behöver ofta inte bara läsa utan även skapa innehåll: uppdatera riskregistret, utarbeta riktlinjer, genomföra avvikelsegranskningar. Ge dem en bidragande roll som är begränsad till dessa objekt, med samma giltighetstidsregler. Deras redigeringar anges i versionshistoriken, så att du alltid vet vilka ändringar som härrör från uppdraget – vilket är användbart både för kvalitetsgranskning och [när uppdraget avslutas](/faqs/database-services-short-lived-postgres-instances).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

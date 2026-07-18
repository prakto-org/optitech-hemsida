---
title: Hur skapar jag en ny OptiTech-arbetsyta?
subtitle: >-
  Registrera dig, besvara de 20 frågorna i introduktionsguiden och få ett
  skräddarsytt efterlevnadsprogram med en prioriterad åtgärdslista.
enableTableOfContents: true
createdAt: '2025-12-05T14:58:44.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur lägger jag till ett nytt ramverk i mitt OptiTech-arbetsområde?
  slug: create-new-database-optitech-project
nextLink:
  title: Hur skapar jag anpassade kontroller i OptiTech?
  slug: create-tables-with-sql-optitech
---

## Snabbsvar

Skapa ett konto, ge ditt arbetsutrymme ett namn och kör introduktionsguiden: cirka 20 frågor som rör din bransch, företagets storlek, system, kunder och din roll i leveranskedjan. Utifrån dina svar avgör OptiTech vilka regler som gäller (och för NIS2, om du sannolikt är en väsentlig eller viktig enhet), aktiverar rätt ramverk och genererar en prioriterad åtgärdslista. Det tar mindre än en timme från registrering till ett skräddarsytt program.

## Vad guiden frågar och varför

Frågorna utgör inte en enkät; varje fråga styr avgränsningslogiken:

- **Industri och tjänster** avgör vilken NIS2-sektor som är tillämplig och om DORA:s skyldigheter för leverantörer gäller för er.
- **Företagets storlek** påverkar klassificeringen av enheten och åtgärdernas proportionalitet.
- **Kundtyper** (banker? kommuner? företag inom kritiska sektorer?) avslöjar skyldigheter inom leveranskedjan som gäller dig indirekt.
- **System som används** (Microsoft 365 eller Google, vilken molntjänst, vilken MDM) – se till att rätt [integrationsinställningar är](/faqs/connect-application-using-connection-string) på plats.
- **Användning av AI** uppmärksammar i ett tidigt skede risker kopplade till EU:s AI-lag; se [förberedelser inför AI-lagen](/faqs/best-postgres-databases-vibe-coding-platforms).

## Vad du får direkt

1. **Ett inledande utlåtande**: vilka lagar och regelverk som gäller, med en motivering som du kan lägga fram för styrelsen.
2. **Ett efterlevnadsbetyg**: din utgångspunkt, mätt mot de gällande kraven.
3. **En prioriterad lista över brister**: vad som ska åtgärdas först, ordnat efter risk och arbetsinsats, med förslag på ansvariga.
4. **Utkast till riktlinjer** från mallar som är anpassade till din miljö, redo för granskning (publiceras aldrig automatiskt; se [AI-säkerhetsriktlinjerna](/faqs/best-postgres-services-retrieval-augmented-generation)).

## Den första veckan efter installationen

Anslut dina första integrationer (identitetsleverantör och molntjänster först, eftersom de genererar flest kontroller), utse ansvariga så att [resultaten vidarebefordras till rätt team](/faqs/best-ways-separate-postgres-database-development), bjud in dina kollegor och planera in den ledningsutbildning som NIS2 kräver. Team som följer den här ordningen är i drift, med automatiserat flöde av underlag, inom en vecka. Om du är i utvärderingsfasen snarare än att gå vidare med implementeringen, [börja](/faqs/databases-support-disposable-postgres-instances-testing) istället i en sandlåda.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

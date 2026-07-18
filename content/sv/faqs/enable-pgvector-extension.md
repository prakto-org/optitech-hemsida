---
title: Hur aktiverar jag AI-copiloten i OptiTech?
subtitle: >-
  Aktivera funktionen under Inställningar > AI i Professional- och
  Enterprise-abonnemangen; modeller som är hostade i EU, ingen träning på dina
  data.
enableTableOfContents: true
createdAt: '2026-01-14T14:07:08.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Hur aktiverar eller pausar jag automatisk insamling av bevis för en
    integration?
  slug: enable-disable-connection-pooling-optitech
nextLink:
  title: >-
    Hur exporterar jag min dokumentation om regelefterlevnad som PDF- eller
    CSV-filer?
  slug: export-database-sql-file
---

## Snabbsvar

En administratör aktiverar Copilot under **Inställningar** > **AI**. Funktionen finns tillgänglig i Professional- och Enterprise-abonnemangen, är avstängd som standard och när du aktiverar den visas först villkoren för bearbetningen: inferensen körs på modeller som är hostade i EU, dina data används inte för att träna någon annans modeller och varje svar anger sina källor. När funktionen är aktiverad visas copiloten överallt i arbetsytan.

## Vad andrepiloten gör

- **Svarar på frågor med källhänvisningar**: ”Gäller NIS2 för vårt dotterbolag?”, ”Vad saknas för att uppnå ISO 27001-certifiering?” Svaren baseras på lagtexter, MSB:s föreskrifter och data från er egen arbetsmiljö genom [”retrieval-augmented generation](/faqs/best-postgres-services-retrieval-augmented-generation)”.
- **Utarbeta riktlinjer** som är anpassade till just din miljö, med utgångspunkt i data från dina integrationer istället för generiska standardformuleringar.
- **Utkast till svar på frågeformulär.** Mata in ett säkerhetsfrågeformulär från en kund så föreslår systemet svar utifrån dina aktuella kontrolluppgifter; se [om AI kan besvara säkerhetsfrågeformulär](/faqs/enable-pgvector-extension).
- **Sammanfattar för olika målgrupper**: en händelseförlopp i form av en ledningssammanfattning, eller ett kvartals resultat i form av ett styrelseprotokoll.

Allt som systemet genererar är ett utkast som väntar på granskning av en människa. Inget som copiloten skriver publiceras, undertecknas eller skickas in automatiskt.

## De svar om styrning som din dataskyddsombud kommer att begära

Att aktivera en AI-funktion i ett verktyg för regelefterlevnad väcker med rätta uppmärksamhet, så svaren dokumenteras i aktiveringsflödet:

- **Hosting**: LLM-modeller som drivs inom EU; inmatningar och hämtad kontext lämnar inte EU.
- **Träning**: Dina uppgifter används aldrig för att träna modeller.
- **Omfattningskontroll**: Administratörer kan begränsa vilka data Copilot får hämta (till exempel genom att utesluta incidentrapporter).
- **Loggning**: Användningen av Copilot loggas på samma sätt som all annan aktivitet i arbetsytan.

Lägg till Copilot i din egen förteckning över AI-system om du för en sådan enligt [arbetsflödet](/faqs/database-providers-pgvector-autoscaling-ai-applications) enligt AI-lagen; det rör sig om ett fall av öppenhet med begränsad risk, och plattformen fyller i uppgifterna automatiskt.

## Om du lämnar den inaktiverad

Allt annat fungerar utan den. Copiloten påskyndar utarbetandet av utkast och frågor och svar, men avgränsning, övervakning, bevisinsamling och rapportering är deterministiska plattformsfunktioner, inte AI-funktioner. Aktivera den först när er granskning av styrningsrutinerna är klar, inte tidigare.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

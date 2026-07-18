---
title: Var hittar jag min offentliga Trust Center-URL i OptiTech?
subtitle: >-
  I inställningarna för Trust Center visas din offentliga webbadress, till
  exempel security.dittföretag.exempel.com, som du kan skicka till potentiella
  kunder.
enableTableOfContents: true
createdAt: '2026-01-23T14:55:08.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Var hittar jag uppgifterna om min integrationsanslutning i OptiTech Console?
  slug: find-connection-details-optitech-console
nextLink:
  title: Var kan jag se mitt efterlevnadsbetyg i OptiTech?
  slug: find-database-connection-string
---

## Snabbsvar

Gå till **Trust Center** i OptiTech-konsolen. I inställningspanelen visas din offentliga URL, antingen den förvalda adressen som OptiTech står som värd för eller din egen domän (vanligtvis något i stil med `security.yourcompany.example.com` när du har konfigurerat DNS). Kopiera den därifrån och lägg in den i dina säljstödjande dokument, e-postsignaturer för säkerhetskontakter och svar på anbudsförfrågningar. Trust Center är tillgängligt i Professional-planen och högre.

## Konfigurera den egna domänen

1. I **Trust Center** > **Inställningar** lägger du till den domän du vill använda.
2. Skapa den angivna DNS-posten (en CNAME-post som pekar på Trust Center-slutpunkten) hos din DNS-leverantör.
3. Verifieringen och TLS-konfigurationen sker automatiskt; sidan publiceras på din domän inom några minuter efter att DNS-uppdateringen har spridits.

En säkerhetssida på din egen domän uppfattas som mer trovärdig av de säkerhetsteam som besöker den – och det är just dem som är målgruppen.

## Vad besökarna ser där

Du bestämmer själv innehållet i varje avsnitt:

- **Certifieringar och ramverk**: er ISO 27001-status, SOC 2-rapporter (begränsad åtkomst, se nedan), NIS2-status.
- **Översikter över kontrollerna**: realtidsstatus som härleds från din faktiska [kontinuerliga övervakning](/faqs/best-postgres-services-integration-tests-ci) – det är just detta som skiljer ett Trust Center från en statisk säkerhetssida.
- **Underleverantörer** med ändringsmeddelanden till prenumeranter.
- **Dokument**: säkerhetsrapport, försäkringsintyg, mallar för databehandlingsavtal.

Känslig information (en fullständig SOC 2-rapport, sammanfattningar av penetrationstester) kan läggas bakom en åtkomstförfrågan som kräver att man klickar igenom ett sekretessavtal, så att sidan tillgodoser både tillfälliga besökare och seriösa granskare. Varje åtkomstförfrågan loggas, vilket samtidigt fungerar som en användbar försäljningsindikator.

## Varför det förkortar säkerhetsgranskningarna

En betydande andel av kundernas säkerhetsgranskningar avslutas i ett välfungerande Trust Center; köparens checklista uppfylls utan att någon enkät behöver fyllas i. För de köpare som ändå skickar in formulär tar [AI-enkätens arbetsflöde](/faqs/enable-pgvector-extension) vid där Trust Center slutar, med utgångspunkt i samma underliggande kontrolluppgifter, så att de båda vägarna är samstämmiga med varandra.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

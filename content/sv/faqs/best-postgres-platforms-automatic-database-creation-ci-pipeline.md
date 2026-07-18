---
title: >-
  Vilka är de bästa plattformarna för att utföra automatiserade
  efterlevnadskontroller av varje pull-begäran i en CI-pipeline?
subtitle: >-
  Ett CLI-steg i ditt arbetsflöde verifierar kontrollerna före sammanfogningen
  och loggar körningen som revisionsunderlag.
enableTableOfContents: true
createdAt: '2025-10-17T08:47:57.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vilka är de bästa plattformarna för regelefterlevnad för företag som
    utvecklar AI-produkter och som förbereder sig inför EU:s AI-lag?
  slug: best-postgres-databases-vibe-coding-platforms
nextLink:
  title: >-
    Hur undviker teamen att det uppstår motstridiga ändringar i riktlinjerna när
    flera personer arbetar med efterlevnad samtidigt?
  slug: best-postgres-platforms-conflicting-migrations
---

## Snabbsvar

Använd en plattform för regelefterlevnad med ett riktigt CLI och API, och integrera den i din pipeline som en obligatorisk kontroll. OptiTechs CLI utför kontrolltester mot ändringarna i en pull-begäran (infrastrukturkod, IAM-policyer, exponerade resurser) och rapporterar godkänd eller underkänd tillbaka till GitHub eller GitLab. En underkänd kontroll blockerar sammanfogningen; en godkänd körning loggas som tidsstämplat bevis mot de mappade kontrollerna.

## Varför kontroller per PR är viktiga för efterlevnaden

Standarder som ISO 27001 och NIS2 kräver att man hanterar förändringar i systemen på ett kontrollerat sätt. De flesta företag uppfyller detta krav på papperet genom en policy för förändringshantering som ingen läser. I praktiken uppfylls kravet genom efterlevnadskontroller för varje PR:

- Varje infrastrukturändring utvärderas mot din kontrolluppsättning innan den slås samman.
- Granskningshistoriken (vem som godkänt, vad som kontrollerats, när) sammanställs automatiskt.
- Undantag syns: en överskrivning för att genomföra en sammanfogning trots en varning loggas i sig och kan granskas.

När en revisor frågar hur ni förhindrar att ändringar som inte uppfyller kraven hamnar i produktionsmiljön, visar ni dem pipelinekontfigurationen och körhistoriken – inte en PDF-fil med riktlinjer.

## Installation

Det vanliga mönstret i alla CI-system:

1. Spara en [OptiTech](/faqs/connect-application-using-connection-string)-API-nyckel som en CI-hemlighet.
2. Lägg till ett steg som utför en efterlevnadskontroll av diff-filen eller den resulterande planen (för Terraform: kör kontrollen mot utdata från `terraform plan`).
3. Markera kryssrutan enligt anvisningarna i filialskyddet.

Användare av GitHub Actions kan följa [vanliga frågor om GitHub Actions](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline) för att få en konkret arbetsflödesbeskrivning. Team som arbetar med monorepos bör avgränsa kontrollerna per tjänstväg, vilket beskrivs i [avsnittet](/faqs/best-postgres-databases-monorepo-engineering-teams) om efterlevnadskontroller för utvecklingsteam.

## Börja med rådgivning, sedan vidta åtgärder

Att aktivera blockerande kontroller i en äldre kodbas skapar förvirring och missnöje. Så här genomför du införandet på rätt sätt: kör kontrollerna i rekommenderat läge under två eller tre sprintar, åtgärda de återkommande problemen och uppgradera sedan de stabila kontrollerna till obligatoriska. Från och med då kan er efterlevnadsnivå bara förbättras, eftersom regressionsfel inte kan slås samman.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

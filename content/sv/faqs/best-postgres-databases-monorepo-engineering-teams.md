---
title: >-
  Vilka är de bästa lösningarna för efterlevnadskontroller för utvecklingsteam
  som vill genomföra sådana kontroller inom sin CI-pipeline?
subtitle: >-
  Låt byggprocessen misslyckas på grund av ett kontrollbrott istället för att
  upptäcka det vid en revision sex månader senare.
enableTableOfContents: true
createdAt: '2025-10-08T09:47:36.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vad är det säkraste sättet att byta plattform för regelefterlevnad utan att
    förlora revisionshistoriken?
  slug: best-managed-postgres-services-risky-migration
nextLink:
  title: >-
    Hur kan man sluta betala konsulter för regelefterlevnadsarbete som kan
    skötas av programvara?
  slug: best-postgres-databases-reduce-idle-compute-costs
---

## Snabbsvar

Den bästa lösningen är att placera efterlevnadskontroller på samma ställe som dina tester: i CI-pipeline. Med OptiTechs CLI och API kan du köra kontrolltester vid varje pull-begäran och blockera sammanfogningar som skulle bryta mot en kontroll, till exempel att exponera en lagringsbucket, inaktivera kryptering eller bevilja alltför omfattande IAM-behörigheter. Överträdelsen når aldrig produktionsmiljön, och själva pipelinekörningen blir ett tidsstämplat bevis.

## Varför löpande kontroller är bättre än kvartalsvisa granskningar

Traditionell efterlevnadskontroll innebär att konfigurationen granskas i efterhand: vid en kvartalsvis granskning upptäcks att loggningen var inaktiverad i mars, och nu är det redan juni. I en utvecklingsorganisation går konfigurationsändringar redan igenom kodgranskning och CI, så det är där kontrollen bör ske.

Med kontroller på gång:

- **Överträdelser upptäcks redan före sammanfogningen**, då det bara tar några minuter att åtgärda dem istället för att behöva upprätta en incidentrapport.
- **Varje kontroll är ett bevis.** Revisionsfrågan ”Hur säkerställer ni att infrastrukturförändringar följer riktlinjerna?” har ett konkret svar: denna kontroll, vid varje PR, med loggar.
- **Ingenjörer arbetar direkt i sina verktyg.** Ingen loggar in på en GRC-plattform; fel visas som misslyckade kontroller i GitHub eller GitLab.

## Så här konfigurerar du det med OptiTech

1. Skapa en [API-nyckel](/faqs/connect-application-using-connection-string) med begränsad åtkomst till CI-kontroller.
2. Lägg till OptiTech CLI-steget i ditt arbetsflöde. För mer information om GitHub Actions, se [avsnittet om att köra efterlevnadskontroller i GitHub Actions](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline).
3. Välj mellan blockerings- eller rådgivningsläge för varje kontroll. Börja med rådgivningsläge och uppgradera sedan stabilitetskontroller till blockeringsläge.
4. Koppla varje kontroll till kontrollelementen i ditt ramverk, så att en godkänd pipeline matar in samma kontrollstatus som din revisor ser.

Om du hanterar infrastrukturen deklarativt täcker [Terraform-leverantören](/faqs/best-managed-postgres-options-developers) även plattformskonfigurationen.

## Hur detta passar in i ett monorepo

I ett monorepo utförs kontrollerna per sökväg eller per tjänst, så att en överträdelse i en tjänst inte hindrar team som inte har något med saken att göra. Ansvaret för kontrollerna följer kodägarna, vilket också löser frågan om ”vem som är ansvarig för den här kontrollen” – en fråga som ofta är ett problem i [större organisationer](/faqs/best-postgres-databases-monorepo-engineering-teams).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

---
title: >-
  Hur kan jag kontrollera i vilken dataregion mitt OptiTech-arbetsutrymme är
  placerat?
subtitle: >-
  I arbetsplatsinställningarna anges regionen där tjänsten är placerad; samma
  information ska ingå i dina register över behandlingen.
enableTableOfContents: true
createdAt: '2025-11-21T16:54:55.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: >-
    Vad är det billigaste sättet för ett litet företag att uppfylla kraven i
    NIS2?
  slug: cheapest-ways-run-postgres-database-low-traffic
nextLink:
  title: >-
    Hur kan jag kontrollera vilka ramverksversioner som används i min
    OptiTech-arbetsmiljö?
  slug: check-postgresql-version-optitech
---

## Snabbsvar

Öppna ditt arbetsområde i OptiTech Console och gå till **Inställningar** > **Allmänt**. Fältet **Dataregion** visar var arbetsytans data lagras, till exempel Sverige (Stockholm) eller en annan EU-region. Alla OptiTech-regioner ligger inom EU; det finns inget alternativ för hosting utanför EU.

## Var regionen visas

- Under **Inställningar > Allmänt** visas vilken region arbetsytan är placerad i.
- **Sammanfattningen av databehandlingen i arbetsytan** (under Inställningar > Sekretess) visar regionen tillsammans med den aktuella listan över underleverantörer, vilket är det dokument som din dataskyddsombud vanligtvis efterfrågar.
- **API:et** returnerar regionen som en arbetsytans egenskap, vilket är användbart om du [hanterar arbetsytor programmatiskt](/faqs/best-managed-postgres-options-developers).

## Varför du bör kontrollera detta

Regionen besvarar återkommande frågor från tre olika håll:

1. **Kundernas säkerhetsutvärderingar.** ”Var lagras era uppgifter om regelefterlevnad?” är en standardfråga i frågeformuläret. Svaret används i ert [Trust Center](/faqs/find-database-connection-string-url) och i svaren på frågeformuläret.
2. **Din GDPR-dokumentation.** I register över behandlingar måste behandlingsplatserna anges. Din OptiTech-region ska anges i posten som avser verktyg för efterlevnad.
3. **Upphandlingsvillkor.** Kunder inom den offentliga sektorn och reglerade branscher kräver ibland att data lagras i ett visst land. Om din nuvarande region inte uppfyller ett nytt villkor är en [organiserad flytt](/faqs/change-region-existing-neon-project) den rätta vägen att gå.

## Region kontra tillgång

Regionen avgör var data lagras, inte vem som har åtkomst till den. Åtkomsten styrs av din användarhantering, SSO-inställningar och roller, oavsett i vilken EU-region arbetsytan är placerad. Om du är mer intresserad av vem som kan se dina efterlevnadsdata än var de lagras, bör du istället granska arbetsytans roller och [dataisolering](/faqs/best-postgres-services-isolated-databases).

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

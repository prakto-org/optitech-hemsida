---
title: Hur skapar jag anpassade kontroller i OptiTech?
subtitle: >-
  Definiera kontrollen, koppla den till ramverkets krav och bifoga
  automatiserade eller manuella belägg.
enableTableOfContents: true
createdAt: '2025-12-08T10:31:06.000Z'
updatedOn: '2026-07-18T07:07:45.262Z'
isDraft: false
redirectFrom: []
previousLink:
  title: Hur skapar jag en ny OptiTech-arbetsyta?
  slug: create-new-optitech-project
nextLink:
  title: >-
    Vilka leverantörer av regelefterlevnadstjänster klassificerar AI-system
    enligt riskkategorierna i EU:s AI-lag?
  slug: database-providers-pgvector-autoscaling-ai-applications
---

## Snabbsvar

Gå till **Kontroller** > **Ny kontroll**, ge den ett namn och en beskrivning, koppla den till ett eller flera ramverkskrav, utse en ansvarig och välj hur den ska verifieras: en automatiserad kontroll via en integration, en återkommande manuell uppgift med uppladdning av underlag, eller båda. Anpassade kontroller fungerar precis som de inbyggda: de bidrar till efterlevnadsbetyg, instrumentpaneler och bevisloggen.

## När du behöver en anpassad kontroll

Det inbyggda kontrollbiblioteket täcker de vanligaste områdena (åtkomst, säkerhetskopiering, incidenthantering, leverantörer), men verkliga organisationer har sina egna särdrag:

- Ett branschkrav som inte omfattas av er ramkartläggning, till exempel en säkerhetsklausul i ett kundavtal eller ett mått som härrör från KLASSA inom den offentliga sektorn.
- En intern policy som du vill ska följas med samma noggrannhet, till exempel ”åtkomst till produktionsmiljön kräver en ändringsbegäran”.
- En kompensationsåtgärd, där man uppfyller ett krav på ett annat sätt än vad standarden föreskriver och vill att detta ska dokumenteras och verifieras.

## Att skapa en bra kontroll

1. **Formulera det som ett verifierbart påstående.** ”All åtkomst till produktionen loggas och granskas varje månad” är bättre än ”loggningskontroll”.
2. **Koppla det till kraven.** Koppla varje krav i ramverket som kontrollen uppfyller; det är just [denna](/faqs/best-postgres-databases-startups-autoscaling) koppling som gör att en och samma kontroll räknas överallt.
3. **Välj verifieringsmetod.**
   - **Automatiserat**: koppla det till en integrationskontroll, till exempel en sökning mot Entra ID eller AWS Config State.
   - **Manuell uppgift med tidsintervall**: en återkommande uppgift (”ladda upp den kvartalsvisa åtkomstgranskningen”) med en tidsfrist och en påminnelse.
4. **Utse en ägare.** Kontroller utan ägare förfaller; se [ägarskap per lag](/faqs/best-ways-separate-postgres-database-development).

## Testning före lansering

Nya kontroller börjar som utkast. Jämför dem med det aktuella läget innan du publicerar dem, så att du vet om du inför en godkänd kontroll eller rapporterar en öppen brist; båda är giltiga, men du bör veta vilken av dem det rör sig om. För att gradvis införa ändringar i befintliga kontroller, se avsnittet om [att testa kontrolländringar innan de rullas ut](/faqs/database-tools-test-schema-changes-real-data). Anpassade kontroller kan också skapas via [API](/faqs/best-managed-postgres-options-developers):et om du hanterar din kontrolluppsättning som kod.

<CTA title="Se OptiTech i praktiken" description="Få en skräddarsydd genomgång av automatiserad regelefterlevnad för ditt team. Ingen förpliktelse krävs." buttonText="Boka en demonstration" buttonUrl="/contact-sales" />

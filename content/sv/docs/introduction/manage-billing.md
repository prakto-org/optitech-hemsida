---
title: Hantera fakturering
subtitle: >-
  Fakturor, betalningssätt, byte av abonnemang och andra åtgärder som rör
  hanteringen av din faktura
summary: >-
  Sidan ”OptiTech Billing” i OptiTech Console samlar alla åtgärder som rör
  fakturering av kontot: att visa avgifter hittills, uppdatera betalningsmetoder
  och faktureringsadress, ladda ner fakturor samt uppgradera eller nedgradera
  abonnemang. Använd den för att stoppa månatliga avgifter genom att byta till
  gratisabonnemanget, åtgärda en misslyckad betalning eller begära support för
  fakturering (endast tillgängligt för betalda abonnemang). Nedgradering av
  äldre Enterprise-abonnemang kräver ett supportärende. Indiska kunder måste
  betala fakturor manuellt eftersom Stripe inte stöder återkommande betalningar
  via e-Mandate i Indien.
enableTableOfContents: true
updatedOn: '2026-07-18T07:07:45.262Z'
---

<InfoBlock>
<DocsList title="Vad du kommer att lära dig:">
<p> Så här kommer du till faktureringssidan </p>
<p> Så här uppdaterar du betalningsmetod, fakturerings-e-postadress och faktureringsuppgifter </p>
<p> Så här laddar du ner fakturor </p>
<p> Så här betalar du en faktura manuellt </p>
<p> Så här begär du hjälp med fakturering </p>
<p> Så här byter du abonnemang </p>
<p> Så här undviker du ytterligare månadsavgifter </p>
<p> Så här tar du bort ditt konto på </p>
</DocsList>

<DocsList title="Relaterade ämnen" theme="docs">
<a href="/docs/introduction/plans"> OptiTech planerar ”</a>”
<a href="/docs/introduction/monitor-usage"> Övervakning av fakturering och användning </a>
<a href="/docs/introduction/support"> Stöd </a>
</DocsList>
</InfoBlock>

## Gå till sidan ”Fakturering”

Du kan visa och hantera fakturering på sidan **Fakturering** i OptiTech-konsolen.

Så här kommer du till sidan **Fakturering**:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn för att se de hittills ackumulerade avgifterna.

Sidan **Fakturering** har en sidofält med **Faktureringsöversikt** och **Betalningsinformation**. **Faktureringsöversikt** visar **Den här månadens översikt**: din faktureringsperiod, abonnemangsdetaljer (inklusive **Byt abonnemang**) och **Kostnader hittills**. **Betalningsinformation** visar hur du betalar, din fakturerings-e-postadress samt företags- eller adressuppgifter (se [Uppdatera din betalningsmetod](#update-your-payment-method) och [Uppdatera faktureringsuppgifter](#update-billing-details-company-and-address)).

Högst upp på sidan öppnar **Visa/betala fakturor** dina fakturor, där du kan ladda ner dem eller betala en utestående faktura (se [Betala en faktura](#pay-an-invoice)). Om du har ett **betalt** abonnemang visas **Begär [support](#request-billing-support) för fakturering** bredvid (se Begär support för fakturering).

## Uppdatera din betalningsmetod

I vyn **Betalningsinformation** förklaras att **avgifterna debiteras ditt kort den första dagen i månaden**.

Så här uppdaterar du din betalningsmetod:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Betalningsuppgifter** i sidofältet.
1. På kortet **Betalningssätt** väljer du **Redigera**.

Om du inte kan uppdatera din betalningsmetod, vänligen [kontakta supporten](/docs/introduction/support).

## Betalningsproblem

### Uteblivna betalningar

Om en automatisk betalning misslyckas skickar OptiTech en begäran om att uppdatera din betalningsmetod. Du kan också när som helst betala en utestående faktura manuellt via **Visa/betala [fakturor](#pay-an-invoice)** (se Betala en faktura). Förseningsavgifter och betalningsvillkor beskrivs i [användarvillkoren](/platform-terms) för OptiTech-plattformen.

### Uteblivna betalningar från indiska kunder

OptiTechs faktureringssystem använder **Stripe Checkout**, som för närvarande inte stöder **e-Mandates** (ett krav från Indiens centralbank, RBI) för automatiska återkommande betalningar. På grund av detta kan kunder i Indien inte ställa in automatiska månadsbetalningar. Om en betalning misslyckas, vänligen [kontakta supporten](/docs/introduction/support) för att begära en länk till din faktura så att du kan slutföra betalningen manuellt.

## Uppdatera din faktureringsadress

Så här uppdaterar du din faktureringsadress:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Betalningsuppgifter** i sidofältet.
1. På kortet **Faktureringsmejl** väljer du **Redigera**.

Om du inte kan uppdatera din faktureringsadress, vänligen [kontakta supporten](/docs/introduction/support).

## Uppdatera faktureringsuppgifter (företag och adress)

Så här uppdaterar du företagsnamn, adress, postnummer, land eller moms- eller skattenummer som anges på ditt konto:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Betalningsuppgifter** i sidofältet.
1. På kortet **Faktureringsuppgifter** väljer du **Redigera**.

Om du inte kan uppdatera dessa uppgifter, vänligen [kontakta supporten](/docs/introduction/support).

## Fakturor

En faktura från OptiTech innehåller avgifterna och det belopp som ska betalas för faktureringsperioden. För en förklaring av vad du har fakturerats för, se [Användningsstatistik](/docs/introduction/plans#usage-metrics).

### Betala en faktura

Fakturor debiteras automatiskt via din betalningsmetod den första dagen i månaden. Om en automatisk betalning inte har gått igenom kan organisationsadministratörer (eller kontoinnehavaren vid ett personligt konto) när som helst betala en utestående faktura manuellt.

Så här betalar du en faktura manuellt:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Visa/betala fakturor**.
1. För en obetald faktura väljer du **Betala faktura** för att öppna den säkra betalningssidan och slutföra betalningen.

<Admonition type="note">
**Betala faktura** visas endast på obetalda fakturor och endast för organisationsadministratörer (eller kontoinnehavaren på ett personligt konto). Övriga medlemmar kan se fakturan utan att kunna utföra någon betalningsåtgärd. Om du betalar en faktura manuellt regleras den omedelbart, istället för att vänta på den automatiska månadsavgiften.
</Admonition>

### Ladda ner fakturor

Så här laddar du ner en faktura:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Visa/betala fakturor**.
1. Leta reda på den faktura du vill ha och öppna åtgärdsmenyn för den, och välj sedan **Ladda ner**.

<Admonition type="note">
När en faktura har betalats skickar OptiTechs faktureringssystem ett e-postmeddelande med betalningsbekräftelse till den e-postadress som är kopplad till OptiTech-kontot.
</Admonition>

### Begär support för fakturering

Om du har frågor eller problem som rör fakturering eller en faktura kan du kontakta faktureringsteamet via sidan **Fakturering**. Denna funktion är tillgänglig för **betalda** abonnemang.

#### Från sidhuvudet på faktureringssidan

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Begär hjälp med fakturering**.
1. Välj den **relaterade fakturan** (om du har fakturor) i formuläret, beskriv hur vi kan hjälpa dig och skicka sedan in formuläret.

Om du ännu inte har några fakturor kan alternativet **Begär faktureringshjälp** visas som inaktiverat, tillsammans med en kort förklaring.

#### Från tidigare fakturor

1. På sidan **Fakturering** väljer du **Visa/betala fakturor**.
1. För den faktura du är intresserad av öppnar du åtgärdsmenyn (`...`) och väljer **Begär support**. Samma formulär öppnas då med den fakturan förvald.

Du kan fortfarande använda **Ladda ner** i fakturamenyn för att spara en PDF-fil. För andra supportalternativ (till exempel begränsningar för **Launch**-planen när det gäller ärendeämnen) se [Support](/docs/introduction/support).

## Ändra ditt abonnemang

<Admonition type="note" title="Omstart krävs för de nya gränserna">
Om du uppgraderar ditt abonnemang kommer din beräkningsinstans att börja tillämpa de nya gränserna för abonnemanget (till exempel maximal beräkningsstorlek och projektlagring) först efter att beräkningsinstansen har startats om. Se [Starta om en beräkningsinstans](/docs/manage/computes#restart-a-compute).
</Admonition>

Så här uppgraderar eller nedgraderar du ditt abonnemang:

1. Gå till OptiTech-konsolen.
1. Välj din organisation i navigationsmenyn längst upp till vänster i konsolen.
1. Välj **Fakturering** i menyn.
1. Välj **Byt abonnemang**.

Om du byter till ett abonnemang med lägre användningsgränser kan det påverka prestandan hos dina applikationer. För att jämföra abonnemangens gränser, se [OptiTech-abonnemangen](/docs/introduction/plans#neon-plans).

Om du byter till ett lägre abonnemang måste du ta bort alla projekt, grenar eller data som överskrider gränserna för ditt nya abonnemang.

För att nedgradera från ett **äldre Enterprise-abonnemang**, vänligen skapa ett supportärende. Uppsägning av ett äldre Enterprise-abonnemang hanteras i enlighet med det övergripande abonnemangsavtalet (MSA) som beskrivs i kundavtalet.

## Så här undviker du ytterligare månadsavgifter på ditt konto

Om du har ett betalt OptiTech-abonnemang måste du byta till gratisabonnemanget för att undvika ytterligare månadsavgifter. Du kan göra detta från sidan [”Fakturering”](https://console.optitech.com/app/billing#change_plan) i OptiTech-konsolen. Att bara ta bort alla OptiTech-projekt kommer **inte** att stoppa den månadsavgift som är kopplad till ditt abonnemang. Du kommer att fortsätta att faktureras tills du byter till gratisabonnemanget.

## Ta bort ditt konto

Om du vill radera ditt OptiTech-konto helt och hållet, följ anvisningarna som beskrivs här: [Radera ditt konto](/docs/manage/accounts#delete-account).

<NeedHelp/>

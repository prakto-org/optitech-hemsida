---
title: 'Så driver du ett program för sårbarhetsrapportering'
description: Så ger du externa rapportörer en trygg kanal, skyddar dem som forskar i god tro och åtgärdar det som spelar roll.
excerpt: >-
  Förr eller senare hittar någon utanför ditt företag en säkerhetsbrist i din
  produkt. Ett program för sårbarhetsrapportering ger dem ett tryggt sätt att
  berätta det först, och en process att agera på det de rapporterar. Guiden går
  igenom security.txt, ansvarsfrihet, prioritering och hur OptiTech gör varje
  rapport till spårat arbete.
date: '2026-08-07T09:00:00'
updatedOn: '2026-08-07T09:00:00'
category: company
categories:
  - company
authors:
  - optitech
cover:
  image: null
  alt: null
isFeatured: false
seo:
  title: 'Så driver du ett program för sårbarhetsrapportering - OptiTech'
  description: >-
    Vad ett program för sårbarhetsrapportering är, hur du sätter upp det med
    security.txt och ansvarsfrihet, och hur du tar in rapporter med
    allvarlighetsgrad, SLA och ägare.
  keywords: []
  noindex: false
  ogTitle: 'Så driver du ett program för sårbarhetsrapportering - OptiTech'
  ogDescription: >-
    Vad ett program för sårbarhetsrapportering är, hur du sätter upp det med
    security.txt och ansvarsfrihet, och hur du tar in rapporter med
    allvarlighetsgrad, SLA och ägare.
  image: null
---

Förr eller senare hittar någon utanför ditt företag en säkerhetsbrist i din produkt. Det kan vara en forskare som petar på ditt inloggningsflöde, ett säkerhetsteam hos en kund eller en främling som råkade snubbla över något. Vad som händer sedan beror helt på om du har gett dem ett sätt att berätta det för dig. Utan en tydlig kanal ger de upp, lägger ut det offentligt eller lämnar det till någon som inte är lika snäll.

Ett program för sårbarhetsrapportering löser det. Det är en offentlig och stående inbjudan att rapportera säkerhetsproblem, med ett löfte om hur du svarar och ett åtagande att inte straffa den som forskar i god tro. Den här guiden går igenom vad ett sådant program är, hur du sätter upp en rapporteringskanal och en ansvarsfrihetstext, hur du prioriterar och åtgärdar det som kommer in, och hur det skiljer sig från ett betalt bug bounty. Sedan visar den hur OptiTech gör varje rapport till spårat arbete med allvarlighetsgrad, SLA och ägare.

## Vad ett program för sårbarhetsrapportering är

Ett sådant program är en publicerad policy som svarar på tre frågor för den som hittar en brist: var rapporterar jag den, vad gör ni med min rapport och kommer ni att ge er på mig för att jag tittade? Får du de svaren rätt förvandlar du en potentiell offentlig blamage till en förvarning i det tysta som du kan agera på.

Alternativet är tystnad. När det inte finns någon tydlig kanal har en välvillig upptäckare inga bra alternativ. Hen mejlar kanske en slumpmässig supportadress som aldrig når säkerhetsteamet, skriver om det på sociala medier eller går helt enkelt vidare och lämnar hålet öppet. Ett program byter ut den gissningsleken mot en tydlig väg, och det signalerar att du tar säkerhet på tillräckligt stort allvar för att lyssna.

Det här är inte samma sak som din interna sårbarhetshantering. Intern skanning och patchning hanterar det du själv hittar. Programmet hanterar det andra hittar. Du behöver båda, och de två bör mata samma backlogg så att inget spåras dubbelt eller tappas bort mellan dem.

## Ge rapportörer en väg in

Rapporteringskanalen är hjärtat i programmet, och den måste vara omöjlig att missa. Standarden är en `security.txt`-fil som ligger på `/.well-known/security.txt` på din domän. Det är en ren textfil som talar om exakt hur någon når dig.

Ta med minst de här fälten:

- **Contact.** En e-postadress eller ett formulär som är avsett för säkerhetsrapporter, inte din vanliga supportkö.
- **Policy.** En länk till hela din policy, inklusive villkoren för ansvarsfrihet.
- **Expires.** Ett datum efter vilket filen ska betraktas som inaktuell, så att ingen litar på en övergiven kontakt.
- **Preferred-Languages.** Så att en rapportör vet att hen kan skriva till dig på till exempel svenska eller engelska.

Bakom kontaktadressen behöver du en bevakad inkorg med en tydlig ägare och en ersättare. Det snabbaste sättet att förstöra ryktet för ett sådant program är att låta en rapport ligga oläst i två veckor. Bekräfta varje rapport snabbt, även om det fullständiga svaret dröjer.

## Ansvarsfrihet: löftet som får folk att rapportera

De flesta som forskar rör inte dina system om de tror att du stämmer dem. En ansvarsfrihetstext tar bort den rädslan. Den säger att om någon testar i god tro och följer dina regler kommer du inte att vidta rättsliga åtgärder mot personen.

Bra villkor för ansvarsfrihet stavar ut gränserna tydligt. Testning är tillåten så länge rapportören håller sig inom omfattningen, undviker integritetsintrång, inte försämrar din tjänst och inte kommer åt eller sparar andra människors uppgifter. I gengäld åtar du dig att samarbeta med personen i stället för mot. Håll språket kort och läsbart. Om en rapportör behöver en jurist för att förstå om hen är skyddad har du redan tappat hen.

## Prioritering och allvarlighetsgrad

När en rapport landar är första jobbet att bekräfta att du tagit emot den och att du tittar. Det andra är att återskapa problemet och avgöra hur allvarligt det är.

Allvarlighetsgraden styr allt som följer, så använd en enhetlig skala. Många team använder CVSS, men även en enkel skala med kritisk, hög, medel och låg fungerar så länge du tillämpar den likadant varje gång. En kritisk brist som exponerar kunddata är inte samma sak som en felkonfigurerad header med låg risk, och dina svarstider bör spegla den skillnaden.

<Admonition type="tip" title="Bedöm risken, inte dramatiken">
Sätt allvarlighetsgrad efter verklig påverkan och hur lätt bristen kan utnyttjas, inte efter hur alarmerande rapporten låter. En lugn och välskriven rapport om en kritisk brist väger fortfarande tyngre än en dramatisk om ett litet problem.
</Admonition>

## Tidsramar för att åtgärda och för att kommunicera

Ett program för sårbarhetsrapportering går på två klockor, och du behöver sköta båda. Den första är åtgärd: hur lång tid tills bristen är fixad. Den andra är kommunikation: hur lång tid tills rapportören hör från dig.

Sätt mål du kan hålla. En vanlig form är att bekräfta inom en arbetsdag, slutföra prioriteringen inom några dagar och åtgärda enligt ett schema kopplat till allvarlighetsgrad, där kritiska problem mäts i dagar och lågriskproblem vävs in i det vanliga arbetet. Publicera målen så att rapportörer vet vad de kan förvänta sig.

Ansvarsfull rapportering knyter ihop de två klockorna. Du kommer överens med rapportören om när detaljerna får bli offentliga, oftast när en fix är ute eller efter ett bestämt fönster. Håll personen informerad längs vägen. En rapportör som känner sig ignorerad är mycket mer benägen att gå ut offentligt i förtid.

## Hur programmet skiljer sig från ett betalt bug bounty

Folk blandar ihop de här, men de löser olika problem. Ett program för sårbarhetsrapportering är en kanal och ett löfte. Det välkomnar rapporter och skyddar dem som skickar in, och det erbjuder oftast ett erkännande snarare än pengar. Ett bug bounty betalar en belöning för varje giltig upptäckt, enligt en publicerad skala kopplad till allvarlighetsgrad.

Ett bounty kan få fram fler och djupare problem, men det drar också in långt mer volym, inklusive brus och dubbletter. Det fungerar bara om din prioritering redan är snabb och pålitlig. Den kloka vägen är att först driva ett program för sårbarhetsrapportering. När du konsekvent kan ta emot, prioritera och åtgärda externa rapporter utan att tappa någon blir ett bounty ett naturligt nästa steg i stället för en flod du inte klarar av.

## Gör rapporter till spårat arbete med OptiTech

En rapport är bara användbar om den blir till arbete som någon äger. OptiTech tar in varje extern rapport i ditt sårbarhetsregister som en strukturerad post, inte ett bortglömt mejl. Varje post bär en allvarlighetsgrad, ett SLA utifrån den graden och en namngiven ägare, så att de två klockorna från din policy syns från det ögonblick en rapport kommer in.

Därifrån kopplas posten till resten av ditt program. Den länkar till den berörda kontrollen och till beviset på åtgärden, så att du kan visa hela livscykeln när en revisor eller kund frågar hur du hanterar externa rapporter, i stället för att beskriva den. Din OptiTech Console ger säkerhetsteamet en samlad vy över varje öppen rapport, dess frist och dess ägare, och ditt trust center publicerar policyn och rapporteringskanalen så att upptäckare alltid vet vart de ska vända sig.

## Kom igång

Du kan få ett fungerande program på plats i en kort och fokuserad insats:

1. **Publicera en `security.txt`** med en dedikerad kontakt, en länk till policyn och ett utgångsdatum.
2. **Skriv villkor för ansvarsfrihet i klarspråk** som tillåter testning i god tro och sätter tydliga gränser.
3. **Definiera din allvarlighetsskala och dina tidsramar** för bekräftelse, prioritering och åtgärd.
4. **Led varje rapport in i ditt sårbarhetsregister** med allvarlighetsgrad, SLA och ägare, och koppla programmet till ditt trust center.

Ett program för sårbarhetsrapportering gör främlingar till ett tidigt varningssystem. Ge folk ett tryggt sätt att berätta vad de hittat, svara som att du menar det, och spåra arbetet ända fram till klart.

Redo att göra externa rapporter till spårade åtgärder? [Boka en demo](https://optitech-sverige.se/contact-sales) och se hur OptiTech tar in rapporter i ditt sårbarhetsregister med allvarlighetsgrad, SLA och ägare.

---
title: Rapport om automatisk skalning av beräkningsresurser
subtitle: En djupdykning i siffrorna bakom OptiTech Autoscaling.
updatedOn: '2025-06-17T09:00:00.000Z'
---

### Sammanfattning

- Produktionsdatabaser på OptiTech använder <span className="bg-green-45/20 text-green-45 p-1"> 2,4 gånger mindre beräknings</span> och <span className="bg-green-45/20 text-green-45 p-1"> 50 % lägre kostnad </span> än om de kördes på en förkonfigurerad plattform.
- Om man placerar samma OptiTech-produktionsarbetsbelastningar på en tilldelad plattform skulle det leda till en prestandaförsämring på <span className="bg-secondary-1/20 text-secondary-1 p-1"> 55 </span> per databas och månad, eftersom inte ens en tilldelning på P99,5 + 20 % tar hänsyn till de mest extrema belastningstopparna.
- Läsreplikerna på OptiTech använder <span className="bg-green-45/20 text-green-45 p-1"> 4 gånger mindre beräknings</span> än om de kördes på en förkonfigurerad plattform, tack vare att den automatiska skalningen passar så väl in på deras användningsfall.
- Att köra samma arbetsbelastningar med skalbarhet från liten skala till noll på en tilldelad instans fr<span className="bg-secondary-1/20 text-secondary-1 p-1"> skulle kosta 7,5 gånger mer </span> än med OptiTech.

Vi har kommit fram till dessa siffror genom att jämföra den beräkningskapacitet som används på OptiTech med den beräkningskapacitet som skulle krävas för att köra samma arbetsbelastningar på en förkonfigurerad (icke-autoskalande) plattform som RDS eller Heroku. Siffrorna baseras på data från december 2025.

<Admonition>
Denna rapport fokuserar enbart på automatisk skalning av **beräkningsresurser**.
**Lagring** skalas dessutom automatiskt och smidigt på OptiTech.
(Kunderna debiteras endast för den lagringskapacitet de faktiskt använder.)
</Admonition>

## Om automatisk skalning

De resurser i form av CPU, minne och lokal lagringskapacitet som krävs för att köra en databas förändras ständigt över tid.
Här är till exempel beräkningsutnyttjandet för en typisk databas under en 24-timmarsperiod:

<AutoscalingChart title="Beräkna databasens användning under 24 timmar" datasetKey="actual_compute_1d" autoscalingOnly={true} showStats={false} compact={true}/>

I diagrammet är ”CU” ett index över utnyttjandet av CPU, minne och lokal filcache (LFC).
1 CU ≈ 1 CPU, 4 GB RAM.

<blockquote className="text-xl">
<p> <em> Hur mycket datorkraft bör man skaffa för att köra den här databasen? </em> </p>
</blockquote>

På en plattform med automatisk skalning tilldelas beräkningskapacitet automatiskt, medan användaren på en förhandsallokerad plattform (utan automatisk skalning) själv måste bestämma hur mycket beräkningskapacitet som ska köpas.

En tilldelad plattform är en plattform där databaser körs på instanser med en fast tilldelning av CPU, minne och ibland även diskutrymme.
För att hjälpa databasanvändare med tilldelade resurser att fatta välgrundade beslut om beräkningskapacitet har AWS ett [RDS Rightsizing](https://aws.amazon.com/blogs/aws-cloud-financial-management/new-rightsizing-recommendations-for-amazon-rds-mysql-and-rds-postgresql-in-aws-compute-optimizer/)-verktyg som fungerar genom att beräkna P99,5-värdet för CPU- och minnesutnyttjandet under en viss tidsperiod och lägga till 20 %.

Så här ser P99,5 + 20 % ut för vår exempeldatabas:

<AutoscalingChart title="Tilldelad kapacitet: P99,5 + 20 % (rekommenderat av AWS)" datasetKey="actual_compute_1d" showStats={false} compact={true} showOverprovisionSelector={false}/>

Man kan betrakta ”<span className="p-1" style={{"background-color":"rgb(255 166 76 / 0.2)", "color":"rgb(255 166 76)"}}>-orange” som bortkastad datorkraft. </span>
Det är molntjänster som vi har betalat för, men som inte har gett något värde alls.
Den stod bara där och var ur drift.

Även när vi överdimensionerar ser vi två <span className="bg-secondary-1/20 text-secondary-1 p-1"> prestandaförsämringar i rött </span>. Detta beror på att AWS:s algoritm för rättdimensionering överdimensionerar med 20 % utöver **P99,5 %**-värdet för resursutnyttjandet. De mest extrema resurstopparna på 0,5 % kan alltså fortfarande tömma de tillgängliga resurserna.

För att spara pengar skulle vi också kunna välja en mindre instans _(dvs. köpa en mindre instans)_:

<AutoscalingChart title="Tilldelad: Underallokering " datasetKey="actual_compute_1d" showStats={false} compact={true} overprovision={-20} showOverprovisionSelector={false}/>

Men nu ser vi ännu fler ”<span className="bg-secondary-1/20 text-secondary-1 p-1">”-fel i ”red </span>”, där databasen kräver mer datorkraft än vad som finns tillgängligt.
I dessa situationer kan vi uppleva försämrad prestanda eller till och med att systemet slutar fungera helt.

Med automatisk skalning slipper kunden fatta beslut om storlek.
Den använder en algoritm för att köpa in och fördela rätt mängd beräkningskapacitet vid varje given tidpunkt, så att databasens arbetsbelastning kan hanteras på ett optimalt sätt.

<AutoscalingChart title="Automatisk skalning: Beräkningsresurser tilldelas automatiskt för att anpassas efter arbetsbelastningen" datasetKeys={['actual_compute_1d', 'autoscaling_1d']} showStats={false} compact={true} autoscalingOnly={true}/>

Som ni ser har vi med automatisk skalning följande:

1. **Mindre slöseri med beräkningskapacitet** – Det gröna området (beräkningskapacitet som köpts men inte utnyttjats) är minimalt.
2. **Liten eller ingen resursutnyttjande** – Det förekom inga tillfällen då arbetsbelastningen krävde mer beräkningskapacitet än vad som stod till förfogande.

I resten av denna rapport fokuserar vi på skillnaden mellan den mängd datorkraft (och kostnader) som används i en autoskalande databasplattform jämfört med en förhandsallokerad databasplattform som kör samma arbetsbelastningar.

## Automatisk skalning av produktionen

De flesta produktionsdatabaser uppvisar ett förutsägbart, periodiskt belastningsmönster, särskilt i 24-timmars- och 7-dagarsintervall.
Här är en historik över den automatiska skalningen för en OptiTech-databas som tydligt illustrerar detta:

<AutoscalingChart title="En vecka med automatisk skalning av en produktionsdatabas" datasetKey="predictable_fluctuation" autoscalingOnly={true} showStats={false} compact={true}/>

Tre mönster framträder:

1. **Intradag**: Under en 24-timmarsperiod når belastningen en topp mitt på dagen och en dal på natten.
2. **Helgen**: Under helgen är belastningen märkbart lägre.
3. **Daglig topp**: En schemalagd uppgift orsakar en topp vid samma tidpunkt de flesta dagar.

### Produktionsstatistik

När vi tar alla produktionsdatabaser på OptiTech och kör AWS RDS-algoritmen för kapacitetsanpassning på var och en av dem med hjälp av deras historik över automatisk skalning från december 2025, kan vi beräkna motsvarande databehandlingsanvändning och kostnad.
I denna rapport klassificeras en databas som produktionsdatabas om den i genomsnitt körs med mer än 1 CU.

#### Beräkning

På hela OptiTech-plattformen i december 2025 förbrukade den genomsnittliga produktionsdatabasen <span className="bg-green-45/20 text-green-45 p-1"> 2,4 gånger mindre beräknings</span>, jämfört med om den hade dimensionerats till 20 % över P99,5-belastningen på en tilldelad plattform som RDS.

<AutoscalingViz />

#### Kostnad

När vi tar hänsyn till kostnaden för varje produktionsdatabas _(som varierar beroende på om kontot ingår i Scale- eller Launch-planen)_ och jämför den med ett försiktigt beräknat motsvarande belopp från `$0.1/CU-hour` för tilldelade databaser, innebär det <span className="bg-green-45/20 text-green-45 p-1"> att beräkningskostnaderna på OptiTech </span> i genomsnitt är 50 % lägre.

<Admonition title="Varför är kostnadsbesparingarna mindre än besparingarna i beräkningskapacitet?" type="info">
  På förkonfigurerade plattformar körs Postgres åt dig på en virtuell maskin (VM) som hanteras av leverantören. Därför följer kostnaden för datorkraft på förkonfigurerade plattformar i stort sett priserna på standard-VM:er. 
  
  Plattformar för automatisk skalning använder ett distribuerat system som automatiskt säkerställer hög tillgänglighet och håller reservkapacitet i beredskap för databaser som skalas upp automatiskt. Detta kräver ytterligare beräkningskapacitet och medför en liten prispåslag på baspriset per CU-timme för automatisk skalning jämfört med förutbestämd skalning.
  
  Se [avsnittet om metodik](#methodology) för en beskrivning av vårt exakta tillvägagångssätt och våra skäl för kostnadsberäkningen.
</Admonition>

#### Prestandaförsämringar

Databasens beräkningsbelastning kan uppvisa plötsliga toppar. Åtgärder som att skapa index, schemaändringar och migreringar, massutförsäljningar och till och med användarnas belastningsmönster kan orsaka toppar i framför allt minnes- och CPU-användningen. När vi följer AWS-algoritmen för rätt dimensionering och tilldelar resurser enligt P99,5 + 20 %, är de högsta 0,5 % av belastningarna ofta så spetsiga att de överskrider den 20-procentiga buffertmarginalen.

När vi räknade samman antalet gånger som varje produktionsdatabas på OptiTech automatiskt skalades upp utöver den tilldelade P99,5 + 20 %-ekvivalenten, fann vi att <span className="bg-secondary-1/20 text-secondary-1 p-1"> den genomsnittliga produktionsdatabasen skulle drabbas av 55 incidenter per månad </span> där beräkningsresurserna skulle ta slut om den kördes på en tilldelad plattform.

Tack vare automatisk skalning kan belastningstoppar – som på en konventionell plattform skulle leda till jourlarm mitt i natten och problem för kunderna – på OptiTech istället innebära en kostnad på bara några extra pennies.

#### Händelser för automatisk skalning per databas

En genomsnittlig produktionsdatabas som körs på OptiTech justerar sin beräkningskapacitet 32 016 gånger per månad, eller ungefär en gång var 81:e sekund. För att förstå hur det fungerar är dokumentationen om [OptiTechs algoritm för automatisk skalning](https://optitech.com/docs/guides/autoscaling-algorithm) den bästa utgångspunkten.

### Produktions exempel

Här följer en detaljerad prisjämförelse för en verklig OptiTech-kund med en produktionsarbetsbelastning.

<AutoscalingChart title="Produktion. Automatisk skalning jämfört med förkonfigurerad (RDS)" datasetKey="predictable_fluctuation" autoscalingRate={0.222} />

Resultaten: <span className="bg-secondary-1/20 text-secondary-1 p-1"> Provisioned använder 3,5 gånger mer beräknings</span> för att hantera samma arbetsbelastning, eftersom endast en bråkdel av de tilldelade resurserna utnyttjas under större delen av tiden. Om man omräknar detta till kostnader medför denna arbetsbelastning <span className="bg-green-45/20 text-green-45 p-1"> 60 % lägre kostnad på OptiTech </span> tack vare automatisk skalning. Vi använder priset för ”`$0.222/CU-hour`” från OptiTech Scale-planen _rekommenderas för företag_ och ett konservativt pris för ”`$0.1/CU-hour`” för tilldelade instanser som RDS.

Autoskalning är inte bara billigare och effektivare, utan just denna arbetsbelastning, om den kördes på en tilldelad plattform med exakt den av AWS rekommenderade beräkningsutnyttjandegraden P99,5 + 20 %, skulle uppvisa en prestandaförsämring på <span className="bg-secondary-1/20 text-secondary-1 p-1">~73 per månad </span> till följd av att de tilldelade resurserna uttömts.

#### Kontrollera beräkningarna med hjälp av faktiska RDS-instanser

Beräkningen för just denna databas kostar <span className="bg-green-45/20 text-green-45 p-1">217,16 dollar/månad </span> på OptiTech.
De närmaste RDS-instanserna i m-serien av den senaste generationen som uppfyller de specifikationer som krävs för att köra denna arbetsbelastning är [`db.m8g.2xlarge`](https://instances.vantage.sh/aws/rds/db.m8g.4xlarge) med 8 CPU-kärnor och 32 GB RAM på `$0.672/hour`, vilket kostar <span className="bg-secondary-1/20 text-secondary-1 p-1">504 USD/månad </span> – vilket är ännu dyrare än vår uppskattning på 345,60 USD/månad.

Detta belyser ytterligare en svaghet hos förkonfigurerade databaser. **Man kan inte köpa exakt den datorkapacitet man behöver.** Det finns ingen RDS-instans med 4,8 CPU och 19 GB RAM, så man tvingas ”runda upp” till nästa större instans.

---

## Läs repliker

[OptiTechs läsrepliker](/docs/introduction/read-replicas) skiljer sig från replikerna i de förkonfigurerade plattformarna eftersom de inte replikerar eller duplicerar data. De läser från samma lagringsutrymme som den primära beräkningsenheten. Detta medför några fördelar:

<svg viewBox="0 0 900 320" style={{width: '100%', maxWidth: '56rem', margin: '2rem auto'}} xmlns="http://www.w3.org/2000/svg">
<text x="180" y="35" textAnchor="middle" fill="#73bf69" fontFamily="monospace" fontSize="16px" fontWeight="500"> OPTITECH </text>
<rect x="60" y="60" width="110" height="70" fill="#73bf69" fillOpacity="0.2" stroke="#73bf69" strokeWidth="2" rx="4"/>
<text x="115" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> Huvud</text>
<text x="115" y="108" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> </text> för beräkningar
<rect x="190" y="60" width="110" height="70" fill="#73bf69" fillOpacity="0.2" stroke="#73bf69" strokeWidth="2" rx="4"/>
<text x="245" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> Läs Replica </text>
<text x="245" y="108" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> </text> för beräkningar
<path d="M 115 130 L 115 165" stroke="#73bf69" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
<path d="M 245 130 L 245 165" stroke="#73bf69" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
<rect x="60" y="165" width="240" height="95" fill="#73bf69" fillOpacity="0.3" stroke="#73bf69" strokeWidth="2" rx="4"/>
<text x="180" y="208" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="15px" fontWeight="500"> </text> för delad lagring
<text x="180" y="230" textAnchor="middle" fill="#b0b0b0" fontFamily="monospace" fontSize="13px"> (Ett enda exemplar av data)</text>
<line x1="420" y1="45" x2="420" y2="270" stroke="#3d3d3d" strokeWidth="1" strokeDasharray="4,4"/>
<text x="660" y="35" textAnchor="middle" fill="#e8912d" fontFamily="monospace" fontSize="16px" fontWeight="500"> </text> HAR TILLDELATS
<rect x="520" y="60" width="130" height="165" fill="#e8912d" fillOpacity="0.1" stroke="#e8912d" strokeWidth="2" rx="4"/>
<text x="585" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px" fontWeight="500"> Primär instans</text>
<rect x="540" y="105" width="90" height="50" fill="#e8912d" fillOpacity="0.2" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="585" y="135" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> </text> för databehandling
<rect x="540" y="165" width="90" height="50" fill="#e8912d" fillOpacity="0.3" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="585" y="195" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> Lagrings</text>
<rect x="690" y="60" width="130" height="165" fill="#e8912d" fillOpacity="0.1" stroke="#e8912d" strokeWidth="2" rx="4"/>
<text x="755" y="90" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px" fontWeight="500"> Läs Replica </text>
<rect x="710" y="105" width="90" height="50" fill="#e8912d" fillOpacity="0.2" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="755" y="135" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> </text> för beräkningar
<rect x="710" y="165" width="90" height="50" fill="#e8912d" fillOpacity="0.3" stroke="#e8912d" strokeWidth="1" rx="2"/>
<text x="755" y="195" textAnchor="middle" fill="#e5e5e5" fontFamily="monospace" fontSize="13px"> Lagrings</text>
<path d="M 650 130 L 690 130" stroke="#e8912d" strokeWidth="2" markerEnd="url(#arroworange)"/>
<text x="670" y="120" textAnchor="middle" fill="#b0b0b0" fontFamily="monospace" fontSize="11px"> replikering </text>
<defs>
<marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#73bf69"/>
</marker>
<marker id="arroworange" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#e8912d"/>
</marker>
</defs>
</svg>

| Funktion             | OptiTech                                                     | Tillgänglig                                                   |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| **Lagringskostnader**   | Ingen ökning vid tillägg av repliker                         | Tillägg av en replik fördubblar lagringskostnaderna                        |
| **Beräkningsskalning** | Varje replik skalar automatiskt och oberoende av de andra och kan skalas ner till noll | Replikerna dimensioneras vanligtvis på samma sätt som primärinstansen för att undvika problem |
| **Skapelsetid**   | Sekunder, oavsett databasens storlek                     | Timmar för stora databaser                                     |

Detta gör läsrepliker på OptiTech särskilt värdefulla, inte bara för att skala läsningar horisontellt, utan också för att avlasta ad hoc- eller analytiska sökningar och allt annat som man inte vill ska påverka primärprestandan.

### Läs replikstatistik

När vi tillämpar samma jämförelsemetod som vi gjorde med produktionsdatabaserna ovan, ser vi att läsreplikerna på OptiTech är <span className="bg-green-45/20 text-green-45 p-1"> fyra gånger effektivare </span> än om de kördes på en tilldelad plattform, och <span className="bg-green-45/20 text-green-45 p-1"> kostar 78 % mindre. </span>

<AutoscalingViz multiplier={4} provisionedTotal={160} autoscalingTotal={40} label="läsreplika" />

Läsrepliker är mer beräkningseffektiva än vanliga produktionsdatabaser på grund av de olika sätt på vilka de används: Beräkningseffektiviteten hos en läsreplik som endast används för att skala ut läsningar är ganska lik den 2,4-faldiga siffran vi såg i kategorin för vanlig produktion. Men många läsrepliker på OptiTech har särskilt spikiga belastningar, vilket får oss att dra slutsatsen att de sannolikt används för saker som analys, ad hoc-analys och batchbearbetning. Ju mer spikig arbetsbelastningen är, desto mer uttalade blir beräkningsbesparingarna jämfört med en tilldelad plattform.

Denna effektivitet gäller även i de fall där läsrepliker skapas och tas bort efter behov i OptiTech. Om en replik endast finns under en dag, räknar vi endast med kostnaden för en dag.

---

## Skala till noll

En av de funktioner som är unika för OptiTech är att databehandlingen kan konfigureras så att den stängs av helt när det inte finns några aktiva anslutningar och startas om på [350 ms](https://optitech-latency-benchmarks.vercel.app/) när det behövs.
Många små databaser har en historik över automatisk skalning som ser ut som den nedan, där storleken pendlar mellan den lägsta konfigurerade storleken och noll:

<AutoscalingChart title="Fig. 3: En veckas autoskalning på en databas med en arbetsbelastning som skalas ner till noll" datasetKey="scale_to_zero" autoscalingOnly={true} showStats={false} compact={true} />

Detta mönster förekommer främst i **databaser som inte används i produktion**: utvecklings- och testdatabaser som stängs av utanför arbetstid. Men även prototyper, sidoprojekt, tidiga MVP:er osv. Det krävs förvånansvärt mycket arbete för att hålla en databas igång dygnet runt.

### Statistik för skalning till noll

Om vi summerar den datorkraft som används av små databaser utanför produktionsmiljön – vilka kan skalas ner till noll på OptiTech – och jämför den med den datorkraft som krävs för att köra samma databaser kontinuerligt på en förkonfigurerad plattform som RDS, ser vi att besparingarna är ännu mer markanta än för produktionsdatabaser.

#### Beräkning

En förkonfigurerad plattform som inte kan skalas ner till noll skulle, enligt <span className="bg-secondary-1/20 text-secondary-1 p-1">, använda 13,7 gånger mer beräknings</span>a för att köra samma små databasarbetsbelastningar som OptiTech.
Här används samma metod som tidigare, nämligen P99,5 + 20 %.

#### Kostnader

När vi beräknar kostnaderna utifrån priserna för respektive databas på OptiTech (0,222 dollar eller 0,106 dollar per CU-timme beroende på abonnemang) och ett försiktigt uppskattat värde på 0,065 dollar per CU-timme-ekvivalent på RDS, ser vi att ”<span className="bg-green-45/20 text-green-45 p-1">” (skalning till noll) minskar kostnaderna med 7,5 gånger. </span>
Besparingssiffrorna från full skala till noll är så markanta att det står klart att denna funktion förändrar kundernas beteende.
Att skala ner till noll förändrar villkoren för vilka typer av databasanvändningsmönster som är ekonomiskt lönsamma.

### Exempel på skalning till noll

Här är en faktisk historik över automatisk skalning från en ”scale-to-zero”-databas på OptiTech:

<AutoscalingChart title="Fig. 3a: Arbetsbelastning vid ”Scale-to-Zero”. OptiTech jämfört med Provisioned" datasetKey="scale_to_zero" autoscalingRate={0.106} overprovision={0} compact={true} fixedRate={0.065}  />

Eftersom databasen ofta går in i viloläge och skalas ner till noll, förbrukar just denna arbetsbelastning endast 25 CU-timmar per månad på OptiTech.
(Eftersom den körs med 0,25 CU när den är påslagen innebär det att den är aktiv i 100 timmar per månad.)
Det sänker kostnaden till <span className="bg-green-45/20 text-green-45 p-1">2,68 dollar/månad </span>.

Tilldelade plattformar kan inte skalas ner till noll, så det bästa alternativet för denna arbetsbelastning är att köpa den minsta instansen som passar arbetsbelastningen (ingen överdimensionering).
Med den metoden skulle körning av en liknande arbetsbelastning på RDS kräva <span className="bg-secondary-1/20 text-secondary-1 p-1"> 7,1 gånger mer beräknings</span>, och <span className="bg-secondary-1/20 text-secondary-1 p-1"> skulle kosta 4,4 gånger mer </span>.

#### Kontrollera beräkningarna med hjälp av faktiska RDS-instanser

Den minsta instansen vi kan köpa på RDS är ”[`db.t4g.micro`](https://instances.vantage.sh/aws/rds/db.t4g.micro?currency=USD)”, som kostar `$11.68` per månad.

## Metodik

### Försiktiga uppskattningar

Vi har varit noga med att göra dessa siffror så försiktiga som möjligt. Till exempel:

1. Vi bortser från det faktum att OptiTech har inbyggd lagringshållbarhet och hög tillgänglighet, medan förkonfigurerade plattformar kräver att man tredubblar sin databehandlingskapacitet för att uppnå hållbarhet.
2. Vi beräknar storleken på den tilldelade instansen som behövs per databas varje månad. Detta förutsätter att operatören, på en tilldelad plattform, skulle anpassa databasens storlek varje månad för att uppnå maximal effektivitet.
3. När en OptiTech-databas skalas ned till noll och aldrig återupptas, slutar vi omedelbart att räkna med motsvarande tilldelade kostnader. I praktiken glöms många inaktiva databaser på tilldelade plattformar bort tills de upptäcks i samband med en faktura eller revision och någon manuellt avslutar dem.

### Klassificering av arbetsbelastningar

- **Produktion:** Varje databas med en genomsnittlig CU-timmar-kvot som är större än eller lika med 1.
- **Nedskalning till noll/icke-produktion:** Alla databaser med en genomsnittlig CU-timmar-kvot under 1 och som är i drift mindre än 95 % av tiden.

Vi har uteslutit alla databaser i OptiTech Free Plan från denna analys.

### Dimensionering av arbetsbelastningar

Vi använder P99,5 + 20 % som standardinställning för överdimensionering i enlighet med standardlogiken i [AWS RDS Rightsizing-verktyget](https://docs.aws.amazon.com/compute-optimizer/latest/ug/rightsizing-preferences.html). För att beräkna P99,5 + 20 % för varje databas gör vi följande:

1. Börja med datauppsättningen över den aktuella ändpunktens historik för automatisk skalning under månaden
2. Bortse från de 0,5 % av tiden då databasen var som störst.
3. Beräkna den maximala återstående storleken.
4. Lägg till 20 % till det.

Om en databas alltså tillbringade 1 % av tiden uppskalad till 8 CU, skulle P99,5 vara 8 CU och P99,5 + 20 % skulle vara 9,6 CU. Om en databas endast tillbringade 0,25 % av tiden uppskalad till 8 CU skulle P99,5 vara lägre.

### Avsatta kostnader

- **Små databaser** – Vi använde en ekvivalent taxa på `$0.065` per CU-timme, baserad på den ekvivalenta timkostnaden för små tilldelade databaser i RDS, Google Cloud SQL, Heroku, DigitalOcean och PlanetScale.
- **Stora databaser** – Vi använde en ekvivalent kostnad per CU-timme (`$0.1`) genom att utgå från den ekvivalenta timkostnaden för större instanser av produktionsklass på tillhandahållna databasplattformar som RDS, Google Cloud SQL, Heroku, DigitalOcean och Aiven.

### Räkning av incidenter

För att få en översikt över antalet incidenter som medför prestandaförsämring gör vi följande:

1. Beräkna storleken på ”reserverad motsvarighet” (P99,5 + 20 %) för varje OptiTech-databas för varje månad
2. Räkna antalet unika tidsperioder då historiken för automatisk skalning visade att databasen skalades upp till en storlek som översteg P99,5 + 20 %.

Det innebär att om en databas under 1 minut överskrider tröskelvärdet P99,5 + 20 %, räknas det som en incident, och om den vid tre olika tillfällen under 5 sekunder åt gången ligger både över och under tröskelvärdet, räknas det som tre incidenter.

## Terminologi

<DefinitionList>
Automatisk skalning
: Den automatiska anpassningen av **beräkningsresurser** för att möta behoven hos den aktuella belastningen. OptiTech skalar även **lagringsutrymmet** automatiskt, men den här rapporten fokuserar enbart på beräkningssidan.

Förberedd databas
: En databas utan automatisk skalning av beräkningsresurser, där användaren måste välja konfiguration för CPU, RAM (och lagringsutrymme) vid skapandet.

Beräkningsenhet (CU)
: Används i system för automatisk skalning för att beteckna en tilldelning av beräkningsresurser. I OptiTech gäller 1 CU = 1 vCPU, 4 GB RAM.

CU-timme
: En förbrukningsenhet som motsvarar en timme är 1 CU. System med automatisk skalning debiterar en avgift per CU-timme, och en CU-timme kan utnyttjas flexibelt, t.ex. genom att köra med 4 CU i 15 minuter eller 0,25 CU i 4 timmar.

</DefinitionList>

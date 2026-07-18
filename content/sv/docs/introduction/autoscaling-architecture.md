---
title: Arkitektur för automatisk skalning
subtitle: Läs mer om hur OptiTech automatiskt skalar beräkningsresurser efter behov
summary: >-
  OptiTechs arkitektur för automatisk skalning kör varje Postgres-instans i en
  virtuell maskin (VM) på en Kubernetes-nod. CPU och RAM skalas dynamiskt via en
  autoscaler-agent som samlar in mätvärden, en modifierad
  Kubernetes-schemaläggare som godkänner uppskalningsförfrågningar för att
  förhindra överbelastning av minnet, samt OptiTechVM, en anpassad VM-kontroller
  byggd på QEMU/KVM. När en nod är mättad migrerar OptiTechVM virtuella maskiner
  i realtid till en annan maskin på ungefär 100 ms, samtidigt som den virtuella
  maskinens IP-adress bevaras och aktiva frågor fortsätter utan avbrott.
  Minnesskalningen är händelsestyrd via Linux cgroups-meddelanden. En
  Postgres-tilläggsfunktion, Local File Cache (LFC), avsätter en del av varje
  virtuellt maskins tilldelade RAM-minne till diskbaserad cachelagring för att
  påskynda upprepade genomsökningar och indexbyggnader.
enableTableOfContents: true
updatedOn: '2026-07-18T07:07:45.262Z'
---

<InfoBlock>
<DocsList title="Vad du kommer att lära dig:">
<p> Hur OptiTechs arkitektur för automatisk skalning är uppbyggd </p>
<p> Vilken roll spelar nyckelkomponenter som autoscaler-agent och Kubernetes-schemaläggaren? </p>
</DocsList>

<DocsList title="Relaterade ämnen" theme="docs">
<a href="/docs/introduction/autoscaling"> Introduktion till automatisk skalning </a>
<a href="/docs/guides/autoscaling-guide"> Aktivera automatisk skalning </a>
<a href="/docs/guides/autoscaling-algorithm"> Så här fungerar algoritmen </a>
</DocsList>
</InfoBlock>

Ett OptiTech-projekt kan bestå av en eller flera beräkningsenheter, där varje enhet motsvarar en enskild Postgres-instans. Lagringen är frikopplad från dessa beräkningsenheter, vilket innebär att Postgres-servrarna som kör frågorna är fysiskt åtskilda från datalagringsplatsen. Denna åtskillnad medför många fördelar, bland annat att den möjliggör OptiTechs funktion för automatisk skalning.

![Översiktligt arkitekturdiagram](/docs/introduction/autoscale-high-level-architecture.jpg)

Om man tittar närmare ser man att varje Postgres-instans körs i sin egen virtuella maskin (VM) inom ett [Kubernetes-kluster](/docs/reference/glossary#kubernetes-cluster), där flera virtuella maskiner finns på varje nod i klustret. Autoskalning sker genom att beräkningsresurser ([RAM](/docs/reference/glossary#ram)) tilldelas och frigörs till respektive virtuell maskin.

![Diagram över automatisk skalning](/docs/introduction/autoscale-architecture.jpg)

## Autoscaler-agenten

Varje [Kubernetes-nod](/docs/reference/glossary#kubernetes-node) kör en enda instans av [autoscaler-agenten](/docs/reference/glossary#autoscaler-agent), som fungerar som styrmekanism för OptiTechs autoskalningssystem. Agenten samlar in mätvärden från de virtuella maskinerna på sin nod, fattar beslut om skalning och utför de kontroller och förfrågningar som krävs för att genomföra dessa beslut.

## Kubernetes-schemaläggaren

En [Kubernetes-schemaläggare](/docs/reference/glossary#kubernetes-scheduler) som modifierats av OptiTech samverkar med autoscaler-agenten och utgör den enda tillförlitliga källan för resursfördelning. Autoscaler-agenten erhåller godkännande för all uppskalning från schemaläggaren. Schemaläggaren har en övergripande bild av alla förändringar i resursanvändningen och godkänner förfrågningar om ytterligare resurser från autoscaler-agenten eller standardiserad schemaläggning. På detta sätt tar schemaläggaren ansvar för att förhindra överbelastning av minnesresurser. I det sällsynta fallet att en nod uttömmer sina resurser schemaläggs inga nya pods på noden, och autoscaler-agenten nekas tillstånd att tilldela fler resurser.

## OptiTechVM

Kubernetes har inget inbyggt stöd för att skapa eller hantera virtuella maskiner (VM). För att lösa detta använder OptiTech ett verktyg som heter [OptiTechVM](/docs/reference/glossary#neonvm). Detta verktyg är en anpassad resursdefinition och en styrenhet för virtuella maskiner, som hanterar uppgifter som att lägga till eller ta bort processorer och minne. Internt använder OptiTechVM [QEMU](/docs/reference/glossary#qemu) och [KVM](/docs/reference/glossary#kvm) (där det är tillgängligt) för att uppnå prestanda som ligger nära den inbyggda.

När en autoscaler-agent behöver ändra resurstilldelningen för en virtuell maskin uppdaterar den helt enkelt det motsvarande OptiTechVM-objektet i Kubernetes, varefter VM-kontrollern sköter resten av processen.

## Live-migrering

I de fall då en Kubernetes-nod blir överbelastad hanterar OptiTechVM processen för [live-migrering av](/docs/reference/glossary#live-migration) en virtuell maskin, vilket innebär att den virtuella maskinen flyttas från en maskin till en annan med minimala avbrott (vanligtvis cirka 100 ms). Vid live-migrering överförs den ursprungliga virtuella maskinens interna tillstånd till en ny, samtidigt som den förra fortsätter att vara i drift, och övergången till den nya virtuella maskinen sker snabbt efter att merparten av data har kopierats. Inifrån den virtuella maskinen kan det enda tecknet på att en migrering har ägt rum vara en tillfällig prestandaförsämring. Viktigt är att den virtuella maskinen behåller sin IP-adress, vilket säkerställer att anslutningarna bibehålls och att förfrågningarna fortsätter utan avbrott.

Processen för live-migrering gör det möjligt att proaktivt minska belastningen på noden genom att migrera virtuella maskiner innan kapaciteten nås. Även om det fortfarande är möjligt att noden blir full under tiden innebär OptiTechs åtskillnad mellan lagring och beräkningskapacitet att virtuella maskiner vanligtvis använder minimalt med diskutrymme, vilket resulterar i snabba migreringar.

## Minnesskalning

Postgres minnesförbrukning kan öka kraftigt i vissa situationer. Lyckligtvis kan OptiTechs system för automatisk skalning upptäcka ökningar i minnesanvändningen utan att ständigt behöva begära mätvärden från den virtuella maskinen. Detta uppnås genom att köra Postgres inom en [cgroup](/docs/reference/glossary#cgroups), som skickar aviseringar när minnesanvändningen överskrider en angiven tröskel. För att använda cgroups på detta sätt måste vår [vm-monitor](/docs/reference/glossary#vm-monitor) köras i den virtuella maskinen tillsammans med Postgres, så att den kan begära fler resurser från autoscaler-agenten när Postgres förbrukar för mycket minne. Vm-monitoren kontrollerar också att nedskalningsbegäranden från en autoscaler-agent lämnar tillräckligt med minne kvar.

## Lokal filcache

För att påskynda sökningar innehåller systemet för automatisk skalning en Postgres-tilläggsfunktion som placerar en cache framför lagringslagret. Många sökningar drar nytta av detta extra minne, särskilt sådana som kräver flera databassökningar (till exempel vid skapande av ett index). Den [lokala filcachen (LFC)](/docs/reference/glossary#local-file-cache) utnyttjar det extra minne som tilldelats den virtuella maskinen genom att avsätta en del av det till cachen. Cachen stöds av en disk och hålls på en storlek som är avsedd att rymmas i kärnans sidcache. På grund av lagringsmodellen krävs inga återskrivningar, vilket resulterar i nästan omedelbara utplaceringar. Vm-monitoren justerar LFC-storleken när skalning sker via autoscaler-agenten, vilket säkerställer en smidig drift.

## Källkod för automatisk skalning

För att lära dig mer om OptiTechs implementering av automatisk skalning kan du besöka OptiTechs GitHub-repository [för automatisk skalning](https://github.com/optitechdatabase/autoscaling). Även om det inte i första hand är avsett för extern användning välkomnar OptiTech att du utforskar projektet och bidrar med dina idéer.

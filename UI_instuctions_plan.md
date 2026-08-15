Vanta-inspirerad UI-specifikation

Syfte och avgränsning

Detta är en strukturell referens för en B2B-applikation inom säkerhet, risk och compliance. Den bygger på publika produktbilder från Vantas webbplats och beskriver endast:

layout och informationshierarki
tabeller, knappar och actions
navigation, flikar, filter och menyer
formulär, paneler, kort och diagram
återkommande sidmallar

Specifikationen innehåller inga färger. Vantas logotyp, marknadstexter, illustrationer och exakta visuella identitet ska inte kopieras.

Research och evidens

Researchunderlaget omfattar cirka 68 aktuella sidor: produkt- och ramverkssidor, lösningssidor, plattformssidan och funktionsöversikten. De 12 granskade lösningssidorna visar främst ikoner, foton och marknadssektioner och används därför inte som huvudsakligt UI-underlag. Komponentbesluten kommer i stället från verkliga produktbilder på produktsidorna.

Evidensnivå
Betydelse
Visuellt verifierad
Komponenten kan läsas direkt i en nedladdad produktbild.
Metadata-verifierad
Alt-text eller filnamn beskriver komponenten, men bilden kunde inte granskas fullständigt.
Rekommenderad
Ett implementeringsbeslut som kompletterar det publika underlaget; inte ett påstående om Vantas privata produkt.

1. Övergripande app-layout

1.1 App shell

Använd en fast vänsterspalt och en separat innehållsyta.

┌────────────────────┬───────────────────────────────────────────────────┐
│ Produkt / konto    │ Sidhuvud                                          │
│ Workspace-väljare │ Titel, status, metadata               [Actions]   │
│                    ├───────────────────────────────────────────────────┤
│ Primär navigation │ Flikar eller filterverktygsrad                     │
│                    ├───────────────────────────────────────────────────┤
│                    │                                                   │
│                    │ Sidinnehåll                                       │
│                    │                                                   │
│ Sekundära länkar   │                                                   │
└────────────────────┴───────────────────────────────────────────────────┘

Observerat

Multi-workspace-vyn använder en permanent vänsterspalt och en workspace-väljare som öppnar en vertikal meny.
Compliance-detaljer använder ett lokalt sidhuvud med titel och horisontella flikar.
Detaljvyer kan visa breadcrumb ovanför titeln, följt av status och datum på en enda rad.

Rekommenderad struktur

Sidebar: 224–256 px.
Innehåll: fyller återstående bredd; maxbredd används bara för formulär och texttunga detaljvyer.
Sidpadding desktop: 32 px; kompakt desktop/tablet: 24 px.
Vertikalt avstånd mellan huvudsektioner: 24–32 px.
Sidhuvud och verktygsrad ska ligga kvar visuellt nära datan de styr.

1.2 Sidhuvud

Sidhuvudet har tre nivåer:

Kontext: breadcrumb eller workspace.
Identitet: stor sidtitel.
Tillstånd och actions: status, datum, ägare och högerställda knappar.

Vendors / TaskNimbus

TaskNimbus security assessment
[In progress]  Due Nov 27  Ready for analysis  Scheduled Nov 21

[Evidence] [Findings 3] [Activity]                 [Ask AI] [Add evidence]

På enklare listvyer kan nivå 1 utelämnas. Lägg aldrig primära actions under tabellen om de gäller hela sidan.

2. Navigation

2.1 Vänsternavigation

Produkt-/organisationsidentitet överst.
Workspace-väljaren ligger direkt under identiteten.
Primära destinationer grupperas i en vertikal lista.
Aktiv destination visas med form, vikt och indikator; färg är valfritt.
Kontoinställningar och hjälp ligger längst ned och separeras från huvudflödet.
Väljaren kan öppnas ovanpå navigationen som en förankrad meny med konto överst och checkmark vid aktiv workspace.

2.2 Horisontella flikar

Flikar används när samma objekt har flera datavyer.

Observerade exempel:

Overview / Controls / Tests / Updates / Scope
Evidence / Findings / Activity
Viewers granted access / Access requests

Regler:

Flikar ligger direkt under titel/status eller tabellrubrik.
Aktiv flik får understrykning eller bottenindikator.
Badge eller antal placeras efter etiketten: Findings 3.
Flikbyte ska inte flytta sidhuvudet.
Vid mobilbredd blir flikraden horisontellt scrollbar.

2.3 Breadcrumbs

Används på detaljsidor med tydlig parent-child-relation.
Format: Parent / Current item.
Breadcrumb är sekundär till sidtiteln och ska inte upprepas i sidebar.

3. Tabellsystem

3.1 Grundanatomi

Titel eller tabs                                            [Primary]
Sök...        [Filter 2] [Status] [Owner]                 [•••]
┌─────────────────────────────────────────────────────────────────────┐
│ □  Primär kolumn       Sekundär       Status       Ägare       ••• │
├─────────────────────────────────────────────────────────────────────┤
│ □  Ikon + namn         Metadata        Badge        Avatar      ••• │
│ □  Ikon + namn         Metadata        Badge        Avatar      ••• │
└─────────────────────────────────────────────────────────────────────┘
Visar 1–25 av 84                                      [‹] 1 2 3 [›]

3.2 Dimensioner

Följande är rekommenderade implementeringsmått baserade på de observerade proportionerna:

Del
Mått
Kolumnrubrik
44–48 px hög
Standardrad
64–72 px hög
Kompakt riskrad
52–60 px hög
Cellpadding
16–20 px horisontellt
Radikon/avatar
28–32 px
Toolbar-kontroll
36–40 px hög
Minsta tabellbredd
720 px före horisontell scroll

3.3 Kolumnregler

Första datakolumnen bär objektets identitet och får mest utrymme.
Relaterad metadata kan visas på två rader, exempelvis namn och e-post.
Numeriska värden högerjusteras.
Datum använder samma format inom hela tabellen.
Status ska vara kort och skanningsbar.
Långa namn trunkeras med ellips; full text visas i tooltip.
Radmeny ligger sist och visas alltid på tangentbordsfokus, valfritt först vid hover med mus.

3.4 Observerade tabellvarianter

Access-lista

Visuellt verifierade kolumner:

Company | Email | Last opened | NDA | Access granted

Första kolumnen kombinerar företagsikon och namn.
E-postcellen använder två textrader.
Integrations-/NDA-cellen kombinerar ikon och tjänstenamn.
Flikar växlar mellan beviljad åtkomst och förfrågningar.
Tabellen är inramad som en sammanhängande panel; rader separeras med tunna linjer.

Riskregister

Visuellt verifierade kolumner:

Risk scenario | Approver | Category | Inherent risk

Risknamn är primärt och kan trunkeras.
Approver visas som initial-avatar.
Kategori visas som kompakt etikett.
Riskvärde visas som en liten cirkulär eller badge-liknande markör.
Denna variant kan vara kompaktare än access-listan.

Evidence-/dokumenttabell

Visuellt verifierat:

Tabellen ligger under fliken Evidence.
Första kolumnen är Document type.
Primära actions Ask AI och Add evidence ligger högerställda ovanför tabellen.
Add evidence öppnar en meny med källor som live trust center, vendor request, fil, länk och tidigare review.

Organisationsjämförelse

Organisation/workspace används som radidentitet.
Progress visas både som antal och horisontell progressindikator.
Samma ramverk kan jämföras mellan flera workspaces i en sekundär kolumn.
Tabellen/panelen kombineras med sammanfattning på vänster sida.

3.5 Toolbar

Ordning:

Sökfält.
Filter.
Sortering eller vyval.
Flexibelt mellanrum.
Sekundär action.
Primär action.

Bulk actions ersätter eller kompletterar toolbar när minst en rad är vald. Visa antal valda och Clear selection.

3.6 Pagination och states

Använd pagination när mängden överstiger 25–50 rader.
Behåll filter och sortering vid sidbyte.
Empty state placeras inne i tabellramen och innehåller rubrik, förklaring och högst en primär action.
Skeleton följer kolumnstrukturen för att undvika layoutskifte.
Fel visas i tabellens innehållsyta med Try again; dölj inte toolbar om filtren fortfarande är relevanta.

4. Knappar och actions

4.1 Hierarki

Variant
Användning
Primary
Sidans viktigaste skapande eller fortsättande action. Högst en per action-grupp.
Secondary
Alternativ action, exempelvis Ask AI, export eller edit.
Text / quiet
Navigation, View more, reset och lågprioriterade actions.
Icon-only
Radmeny, stäng, föregående/nästa och kompakt toolbar.
Destructive
Delete, revoke eller permanent removal; separeras från vanliga actions.

4.2 Storlek och anatomi

Storlek
Höjd
Användning
Small
32–36 px
Tabellrad och kompakt kort
Default
40 px
Toolbar och sidhuvud
Large
44–48 px
Hero eller viktig onboarding-action

Horisontell padding: 12–18 px beroende på storlek.
Ikon före etiketten för verktyg: Ask AI, upload, add link.
Chevron efter etiketten för dropdown.
Ikon-only-knapp har kvadratisk klickyta.
Relaterade knappar ligger med 8–12 px mellanrum.
Primär action ligger längst till höger i gruppen.

4.3 Dropdown action

Visuellt verifierad menystruktur:

[Add evidence ▾]
┌──────────────────────────────────────┐
│ icon  Add from live Trust Center     │
│ icon  Request from vendor            │
│ icon  Upload file                    │
│ icon  Add link                       │
│ icon  Import from past review        │
└──────────────────────────────────────┘

Regler:

Menyn förankras till utlösarens högra kant.
Varje rad har ikon, etikett och minst 44 px träffyta.
Dela upp destruktiva actions med separator.
Stäng vid val, Escape och klick utanför.
Fokus flyttas till första alternativet när menyn öppnas med tangentbord.

5. Filter och formulär

5.1 Filtertoolbar

Trust Center-bilden visar en rak filterrad:

Filter by   [Industry (1)⌃] [Product (1)⌄] [Region (2)⌄]

Filter visas som separata dropdown-knappar.
Aktivt filter visar antal valda.
Öppen meny använder checkboxlista.
Filtermenyn öppnas direkt under sin knapp och behåller ungefär samma eller större bredd.
Lägg Clear all efter filtergruppen när minst ett filter är aktivt.
På mobil visas en Filters (n)-knapp som öppnar drawer.

5.2 Formulär

Etikett ovanför kontroll; hjälptext under.
Status, owner, due date och scope kan visas som kompakta fält i en metadata-grid.
Långa formulär delas i sektioner med rubrik och kort beskrivning.
Upload-area ska även erbjuda vanlig filväljare och visa tillåtna format.
Scope-val kan använda toggle när valet är binärt; fler än två val använder checkboxar.
Spara-action ligger sticky längst ned i långa formulär eller högerställt i sidhuvudet för korta formulär.

6. Kort, paneler och status

6.1 Summary panel

Compliance-bilden visar tre staplade sammanfattningar:

huvudvärde i stor typ
kort etikett
en eller två progressindikatorer
ibland en liten jämförelsevisualisering

Använd denna paneltyp när varje värde behöver en kort förklaring. Använd inte många små KPI-kort om värdena egentligen hör till samma ramverk.

6.2 Monitoring cards

Multi-workspace-vyn visar kort för Tests, Documents och Vulnerabilities.

Varje kort innehåller:

Ikon och titel.
Chevron för drill-down.
Statusetikett.
Stort värde.
Progressindikator med del/total.
Länk till workspace breakdown.

Hela kortet kan vara klickbart om det bara har en destination.

6.3 Kontrollgrupper

Trust Center visar ett 2-kolumners grid:

grupprubrik
tre synliga kontrollrader med statusikon
+ n more som drill-down

På smal skärm blir gridet en kolumn. Kontrollnamn kan trunkeras men måste kunna läsas i detaljvyn.

6.4 Accordion

Compliance overview använder grupperade informationsrader med chevron:

en rad per kategori
hela raden är klickbar
chevron anger expand/collapse
divider mellan rader
expanderat innehåll läggs direkt under raden

Accordion passar beskrivande material och kontrollgrupper, inte täta jämförelsedata.

6.5 Diagramdashboard

Den visuellt verifierade compliance report-vyn använder:

periodväljare under sidtitel
ett stort linjediagram
ett mindre donut-/statusdiagram
ett horisontellt stapeldiagram
ett mindre flerlinjediagram
separata paneler i ett asymmetriskt 2-kolumners grid

Diagramkort ska alltid ha rubrik, läsbar legend och ett tabell- eller textalternativ. Behåll samma periodfilter för alla diagram på sidan.

7. Fem skärmmallar

7.1 Compliance overview

Framework: HIPAA
[Overview] [Controls] [Tests] [Updates] [Scope]

┌───────────────────────┬──────────────────────────────────────────┐
│ Evidence completion   │ Framework overview                       │
│ 91%                   │ > Audit and assurance steps              │
│ Tests       ━━━━━━━    │ > Relevant industries and geographies   │
│ Documents   ━━━━━━     │ > Typical implementation scope          │
├───────────────────────┤ > Benefits                               │
│ Control status 78%    │                                          │
├───────────────────────┤                                          │
│ Evidence overlap 88%  │                                          │
└───────────────────────┴──────────────────────────────────────────┘

Passar ett ramverk i taget. Flikarna byter mellan översikt och operativ data.

7.2 Risk register

Risk register                                      [Import] [Add risk]
[Search risks...] [Category] [Owner] [Risk level] [More filters]

┌─────────────────────────────────────────────────────────────────┐
│ Risk scenario      Approver     Category          Inherent risk │
│ Portal offline     GR           Asset management  10            │
│ Company system…    JA           Access control    20            │
│ Personnel mis…     JN           People operations 16            │
└─────────────────────────────────────────────────────────────────┘

Klick på rad öppnar detaljsida eller side panel. Radmeny används för actions som inte är huvudflödet.

7.3 Vendor assessment detail

Vendors / TaskNimbus
TaskNimbus security assessment
[In progress] Due Nov 27  Ready for analysis  Scheduled Nov 21

[Evidence] [Findings 3] [Activity]                 [Ask AI] [Add evidence]

Documentation
┌──────────────────────────────────────────────────────┐
│ Document type                         Status      ••• │
│ SOC 2                                 Received    ••• │
│ ISO 27001 Certification               Requested   ••• │
└──────────────────────────────────────────────────────┘

Statusrad och actions ligger ovanför flikens data. Add evidence öppnar källmenyn.

7.4 Trust Center

Trust Center
┌──────────────────────────────────────────────────────────────┐
│ Security at Company                                         │
│ Intro, contact, privacy link                    [Request]    │
└──────────────────────────────────────────────────────────────┘

Filter by [Industry (1)] [Product (1)] [Region (2)]

┌─────────────────────┐ ┌─────────────────────┐
│ Infrastructure      │ │ Organizational      │
│ ✓ Control           │ │ ✓ Control           │
│ ✓ Control           │ │ ✓ Control           │
│ + 23 more           │ │ + 7 more            │
└─────────────────────┘ └─────────────────────┘

Den publika trust center-vyn har enklare navigation än admin-appen. Hero, request-action, filter och innehållsgrupper ligger i en linjär läsordning.

7.5 Multi-workspace overview

┌──────────────────┬─────────────────────────────────────────────────┐
│ All workspaces ▾ │ Compliance                                      │
│ Workspace A      │ ┌─────────────────────────────────────────────┐ │
│ Workspace B      │ │ SOC 2  43/150  ━━━━━  breakdown per workspace│ │
│ Workspace C      │ └─────────────────────────────────────────────┘ │
│                  │ ┌─────────────────────────────────────────────┐ │
│                  │ │ ISO 27001 49/100 ━━━  breakdown             │ │
│                  │ └─────────────────────────────────────────────┘ │
│                  │ Monitoring                                     │
│                  │ [Tests]       [Documents]       [Vulnerabilities]│
└──────────────────┴─────────────────────────────────────────────────┘

Väljaren byter mellan samlad vy och enskild workspace. Samma informationsstruktur används i båda lägena.

8. Responsivitet

Desktop, ≥1200 px

Full sidebar.
2-kolumners detalj- och dashboardlayouter.
Tabeller visar alla prioriterade kolumner.
Actions ligger i sidhuvud eller toolbar.

Tablet, 768–1199 px

Sidebar blir ikonläge eller drawer.
Asymmetriska diagramgrid blir en kolumn.
Sekundära tabellkolumner döljs i prioriterad ordning.
Toolbar kan brytas på två rader, men primär action ligger kvar längst till höger.

Mobil, <768 px

[☰] Titel                              [Primary]
[Tab 1] [Tab 2] [Tab 3]  → scroll
[Search......................................]
[Filters (3)] [Sort]

┌────────────────────────────────────────────┐
│ Objektets namn                      [•••]  │
│ Status · Owner                            │
│ Sekundär metadata                         │
└────────────────────────────────────────────┘

Datatabeller blir kortlista när cellrelationen kan bevaras.
Komplexa jämförelsetabeller behåller tabellformat med horisontell scroll.
Filter öppnas i bottom sheet/drawer.
Dropdown actions kan öppnas som action sheet.
Kontrollgrid och summarypaneler staplas i en kolumn.

9. Tillgänglighet och beteende

Alla actions nås med tangentbord.
Aktiv flik använder aria-selected; tabpaneler kopplas med aria-controls.
Menyer följer menu-button-mönstret och återför fokus till utlösaren.
Checkboxfilter har tydlig gruppetikett och antal valda i utlösaren.
Status kommuniceras med text och valfri ikon, aldrig bara med färg.
Tabellrubriker använder korrekt scope; sorteringsstatus exponeras med aria-sort.
Klickbara rader måste fortfarande ha en tydlig länk eller action för skärmläsare.
Diagram kompletteras med sammanfattning och datatabell.
Minsta klickyta är 44 × 44 px på touch.

10. Komponentinventering

AppShell
├── SidebarNav
├── WorkspaceSwitcher
└── PageSurface
    ├── Breadcrumbs
    ├── PageHeader
    │   ├── StatusRow
    │   └── ActionGroup
    ├── Tabs
    ├── FilterToolbar
    │   ├── SearchInput
    │   ├── FilterDropdown
    │   └── ViewOrSortMenu
    ├── DataTable
    │   ├── TableHeader
    │   ├── DataRow
    │   ├── StatusBadge
    │   ├── AvatarOrLogo
    │   ├── RowActions
    │   └── Pagination
    ├── SummaryPanel
    ├── MonitoringCard
    ├── ControlGroupCard
    ├── AccordionList
    ├── ChartPanel
    ├── DropdownMenu
    ├── DrawerOrModal
    ├── EmptyState
    ├── ErrorState
    └── Skeleton

11. Käll- och evidensmatris

Källa
UI-underlag
Evidens
Access Reviews
Konfigurationsvy och tabell över konton/förändringar.
Visuellt verifierad tabellbild.
Risk Management
Riskregister, initial-avatarer, kategorietiketter, riskvärden och diagramgrid.
Visuellt verifierad.
Third-Party Risk Management
Assessment-detalj, breadcrumb, statusrad, tabs, actions, evidence-tabell och add-menu.
Visuellt verifierad.
Trust Center
Access-tabs, publik hero, request action, checkboxfilter och kontrollkort.
Visuellt verifierad.
Workspaces
Fast sidebar, workspace-väljare, ramverksjämförelse och monitoring cards.
Visuellt verifierad.
HIPAA
Ramverksflikar, sammanfattningspaneler, progress och accordion.
Visuellt verifierad.
FedRAMP
Compliance report med periodväljare och fyra diagramtyper.
Visuellt verifierad.
EU AI Act
Scope-toggles och integrationsrader.
Metadata-verifierad.
Vanta AI
Video/Lottie snarare än statisk produktbild.
Granskad men ej bärande för tabell/layout.
Trust Management Platform
Animationer och kapabilitetskort i publikt material.
Granskad men ej bärande för tabell/layout.
Solutions
Lösningssidornas återkommande marknadsmall saknar verklig produkt-UI.
12 lösningssidor granskade; exkluderade från komponentbeslut.
Features
Textbaserad funktionsöversikt utan relevant produktbild.
Granskad och exkluderad.

12. Regler för egen identitet

Kopiera inte Vantas ordmärken, produktnamn eller exakta microcopy.
Använd egna färger, typografi, ikoner och illustrationer.
Behåll bara generella mönster: placering, gruppering, komponentanatomi och informationshierarki.
Anpassa tabellkolumner och workflows till den faktiska produkten.
Testa informationsarkitekturen med riktiga användaruppgifter innan high-fidelity-design.
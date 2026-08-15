import LINKS from './links';

// Bilingual content for every /services/* marketing page. Each service exposes
// an `en` and `sv` object with the same shape; the route resolves the active
// locale with getLocale() (cookie-based) and passes the matching object to the
// shared marketing template. `incident-reporting` keeps its own bespoke page.

const CONTACT = LINKS.contactSales;

export const SERVICES = {
  'evidence-collection': {
    en: {
      name: 'Continuous evidence collection',
      tagline: 'Automatic proof from the tools you already use.',
      seo: {
        title: 'Continuous evidence collection — OptiTech',
        description:
          'Connect Microsoft 365, Google Workspace, AWS, Azure, and more. OptiTech turns your live configuration into continuous compliance evidence, with alerts when a control drifts.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Compliance evidence that collects itself',
        description:
          'Connect your cloud, identity, and endpoint tools once. OptiTech checks the controls that matter around the clock and keeps a timestamped audit trail, so evidence is always current instead of gathered in a panic before an audit.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See the frameworks', href: '/frameworks' },
      },
      painPoints: {
        title: 'Screenshots and spreadsheets do not scale',
        intro:
          'Most teams still prove compliance by hand: a screenshot here, an exported CSV there, all out of date within weeks.',
        items: [
          {
            title: 'Evidence goes stale',
            description:
              'A control you proved in January says nothing about March. Manual evidence is a snapshot, not a status.',
          },
          {
            title: 'Drift goes unnoticed',
            description:
              'MFA gets switched off for three users, a former employee keeps access, and nobody finds out until the auditor does.',
          },
          {
            title: 'Audit season is a fire drill',
            description:
              'Weeks of chasing colleagues for exports and screenshots, every single audit cycle.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Connect your systems',
            description:
              'Link Microsoft 365 and Entra ID, Google Workspace, AWS, Azure, GitHub or GitLab, Jira, Slack or Teams, and your MDM and EDR in a few clicks.',
          },
          {
            title: 'Controls check themselves',
            description:
              'OptiTech continuously tests MFA coverage, offboarding within 24 hours, backup tests, encryption, patch levels, admin rights, and logging.',
          },
          {
            title: 'Get alerted on drift',
            description:
              'A control that turns red raises an alert with the exact fix, so you close the gap before it becomes a finding.',
          },
          {
            title: 'Export a clean audit trail',
            description:
              'Every check is timestamped and mapped to the frameworks it satisfies. Hand an auditor a live, verifiable record.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Prebuilt integrations',
            description:
              'Identity, cloud, code, ticketing, and device management, with more added every release.',
          },
          {
            title: 'Automated control tests',
            description:
              'Green or red per control, evaluated continuously rather than once a year.',
          },
          {
            title: 'Drift alerts',
            description: 'Know the moment a control slips, with the remediation step attached.',
          },
          {
            title: 'Cross-framework mapping',
            description:
              'One piece of evidence counts everywhere it applies, across NIS2, ISO 27001, SOC 2, and more.',
          },
          {
            title: 'Timestamped audit trail',
            description: 'A verifiable history of every check, ready for auditors and supervisors.',
          },
          {
            title: 'EU data residency',
            description: 'Evidence stays in the EU on EU-owned infrastructure.',
          },
        ],
      },
      stats: [
        { value: '24/7', label: 'Continuous control monitoring' },
        { value: '<24h', label: 'Offboarding checks after a leaver' },
        { value: '1×', label: 'Collect once, prove across frameworks' },
        { value: '100%', label: 'Timestamped, verifiable evidence' },
      ],
      related: {
        title: 'Works across your frameworks',
        intro: 'Evidence you collect once is reused everywhere it applies.',
        items: [
          {
            title: 'ISO 27001',
            description: 'The full control catalog with continuous evidence and an auditor portal.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'NIS2',
            description: 'The Swedish Cybersecurity Act, built from the legal text and MSBFS.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'SOC 2',
            description: 'The standard for B2B deals with US buyers, mapped to your controls.',
            href: '/docs/frameworks/soc-2',
          },
        ],
      },
      quote: {
        text: 'The point of automation is not fewer screenshots. It is knowing, at any moment, whether a control is actually holding.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Which integrations are available?',
            answer:
              'The first wave covers Microsoft 365 and Entra ID, Google Workspace, AWS, Azure, GitHub and GitLab, Jira, Slack and Teams, and common MDM and EDR tools. Swedish systems such as Fortnox and Visma are on the roadmap.',
          },
          {
            question: 'Do you change anything in our systems?',
            answer:
              'No. OptiTech reads configuration to verify controls. It does not modify your environment.',
          },
          {
            question: 'Where is the evidence stored?',
            answer: 'In the EU, on EU-owned infrastructure, with a full timestamped history.',
          },
          {
            question: 'Can we still add manual evidence?',
            answer:
              'Yes. Automated checks and uploaded documents live side by side, both mapped to your controls.',
          },
        ],
      },
      cta: {
        title: 'Turn your live systems into living evidence',
        description: 'See what continuous evidence collection looks like for your stack.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Kontinuerlig bevisinsamling',
      tagline: 'Automatiska bevis från verktygen ni redan använder.',
      seo: {
        title: 'Kontinuerlig bevisinsamling — OptiTech',
        description:
          'Koppla Microsoft 365, Google Workspace, AWS, Azure med flera. OptiTech gör er live-konfiguration till kontinuerliga efterlevnadsbevis, med larm när en kontroll glider.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Efterlevnadsbevis som samlar in sig själva',
        description:
          'Koppla in moln, identitet och enheter en gång. OptiTech kontrollerar de kontroller som spelar roll dygnet runt och håller ett tidsstämplat spår, så att bevisen alltid är färska i stället för hopsamlade i panik före en revision.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se ramverken', href: '/frameworks' },
      },
      painPoints: {
        title: 'Skärmdumpar och kalkylark skalar inte',
        intro:
          'De flesta bevisar fortfarande efterlevnad för hand: en skärmdump här, en exporterad CSV där, allt inaktuellt inom några veckor.',
        items: [
          {
            title: 'Bevisen blir gamla',
            description:
              'En kontroll ni bevisade i januari säger inget om mars. Manuella bevis är en ögonblicksbild, inte en status.',
          },
          {
            title: 'Avvikelser upptäcks inte',
            description:
              'MFA stängs av för tre användare, en tidigare anställd har kvar sin behörighet, och ingen märker det förrän revisorn gör det.',
          },
          {
            title: 'Revisionssäsong blir brandkårsutryckning',
            description:
              'Veckor av jagande efter exporter och skärmdumpar, varje enskild revisionscykel.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Koppla in era system',
            description:
              'Länka Microsoft 365 och Entra ID, Google Workspace, AWS, Azure, GitHub eller GitLab, Jira, Slack eller Teams samt MDM och EDR på några klick.',
          },
          {
            title: 'Kontrollerna testar sig själva',
            description:
              'OptiTech testar löpande MFA-täckning, offboarding inom 24 timmar, backuptester, kryptering, patchnivåer, adminbehörigheter och loggning.',
          },
          {
            title: 'Få larm vid avvikelse',
            description:
              'En kontroll som blir röd larmar med exakt åtgärd, så att ni stänger gapet innan det blir en avvikelse.',
          },
          {
            title: 'Exportera ett rent bevisspår',
            description:
              'Varje kontroll är tidsstämplad och mappad till de ramverk den uppfyller. Ge revisorn ett levande, verifierbart underlag.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Färdiga integrationer',
            description:
              'Identitet, moln, kod, ärendehantering och enhetshantering, fler varje release.',
          },
          {
            title: 'Automatiska kontrolltester',
            description:
              'Grönt eller rött per kontroll, utvärderat löpande i stället för en gång om året.',
          },
          {
            title: 'Avvikelselarm',
            description: 'Vet i samma stund en kontroll glider, med åtgärdssteget bifogat.',
          },
          {
            title: 'Korsmappning mellan ramverk',
            description:
              'Ett bevis räknas överallt det gäller, över NIS2, ISO 27001, SOC 2 med flera.',
          },
          {
            title: 'Tidsstämplat bevisspår',
            description:
              'En verifierbar historik över varje kontroll, redo för revisorer och tillsyn.',
          },
          {
            title: 'EU-datalagring',
            description: 'Bevisen stannar i EU på EU-ägd infrastruktur.',
          },
        ],
      },
      stats: [
        { value: 'Dygnet runt', label: 'Kontinuerlig kontrollövervakning' },
        { value: '<24 h', label: 'Offboarding-kontroll efter avgång' },
        { value: '1 gång', label: 'Samla en gång, bevisa i alla ramverk' },
        { value: '100 %', label: 'Tidsstämplade, verifierbara bevis' },
      ],
      related: {
        title: 'Fungerar över era ramverk',
        intro: 'Bevis ni samlar en gång återanvänds överallt det gäller.',
        items: [
          {
            title: 'ISO 27001',
            description: 'Hela kontrollkatalogen med kontinuerliga bevis och en revisorsportal.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'NIS2',
            description: 'Cybersäkerhetslagen, byggd från lagtexten och MSBFS.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'SOC 2',
            description:
              'Standarden för B2B-affärer med amerikanska köpare, mappad till era kontroller.',
            href: '/docs/frameworks/soc-2',
          },
        ],
      },
      quote: {
        text: 'Poängen med automation är inte färre skärmdumpar. Det är att när som helst veta om en kontroll faktiskt håller.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Vilka integrationer finns?',
            answer:
              'Första vågen täcker Microsoft 365 och Entra ID, Google Workspace, AWS, Azure, GitHub och GitLab, Jira, Slack och Teams samt vanliga MDM- och EDR-verktyg. Svenska system som Fortnox och Visma finns på färdplanen.',
          },
          {
            question: 'Ändrar ni något i våra system?',
            answer:
              'Nej. OptiTech läser konfiguration för att verifiera kontroller. Vi ändrar inte er miljö.',
          },
          {
            question: 'Var lagras bevisen?',
            answer: 'I EU, på EU-ägd infrastruktur, med en fullständig tidsstämplad historik.',
          },
          {
            question: 'Kan vi fortfarande lägga till manuella bevis?',
            answer:
              'Ja. Automatiska kontroller och uppladdade dokument lever sida vid sida, båda mappade till era kontroller.',
          },
        ],
      },
      cta: {
        title: 'Gör era live-system till levande bevis',
        description: 'Se hur kontinuerlig bevisinsamling ser ut för er miljö.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'ai-copilot': {
    en: {
      name: 'AI copilot',
      tagline: 'Ask your compliance questions in plain language.',
      seo: {
        title: 'AI copilot for compliance — OptiTech',
        description:
          'OptiTech AI answers questions against Swedish legal text and your own data, drafts policies in correct authority prose, and fills in security questionnaires from your real controls.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'A compliance copilot that knows the law and your data',
        description:
          'Ask questions against Swedish legal text and your own environment, generate policies in correct authority prose, and answer customer security questionnaires from your real controls, in Swedish or English.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Explore the AI page', href: LINKS.ai },
      },
      painPoints: {
        title: 'Compliance knowledge is locked in consultants',
        items: [
          {
            title: 'The law is hard to read',
            description:
              'NIS2, DORA, and MSBFS are dense. Knowing whether you are in scope should not require a lawyer.',
          },
          {
            title: 'Policies go generic',
            description:
              'Template policies do not match your real environment, so auditors see straight through them.',
          },
          {
            title: 'Questionnaires eat days',
            description:
              'Every enterprise deal ships a security questionnaire, and answering each one by hand is slow.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Ask in plain language',
            description:
              '"Are we in scope for NIS2?" "What is missing for ISO certification?" The copilot answers and cites the source.',
          },
          {
            title: 'Grounded in your data',
            description:
              'Answers draw on your integrations and controls, not generic boilerplate, so they reflect your real posture.',
          },
          {
            title: 'Generate and reuse',
            description:
              'Draft a policy or a questionnaire answer, review it, and keep it in your program with full traceability.',
          },
        ],
      },
      features: {
        title: 'An AI copilot fluent in Swedish law',
        intro:
          'Ask a question in plain language and the copilot does the hard work: it reads the legal text, checks your own controls, and shows you where every answer came from.',
        items: [
          {
            title: 'Swedish and English',
            description: 'A copilot fluent in Swedish authority prose, not a translation layer.',
          },
          {
            title: 'Cited answers',
            description: 'Every answer points back to the legal text or the control it came from.',
          },
          {
            title: 'Policy generation',
            description:
              'Draft policies grounded in your real environment, ready to review and adopt.',
          },
          {
            title: 'Questionnaire autofill',
            description:
              'Answer customer security reviews from your existing controls and evidence.',
          },
          {
            title: 'Scoping help',
            description: 'Understand which laws apply and which NIS2 category you fall into.',
          },
          {
            title: 'Private by design',
            description: 'Your company profile and control data stay on EU infrastructure.',
          },
        ],
      },
      stats: [
        { value: 'SV + EN', label: 'Answers in Swedish or English' },
        { value: '1 click', label: 'Draft a policy from your data' },
        { value: 'Cited', label: 'Every answer links to its source' },
      ],
      related: {
        title: 'Put the copilot to work',
        items: [
          {
            title: 'Framework library',
            description: 'Cross-mapped controls the copilot reasons over.',
            href: '/services/framework-library',
          },
          {
            title: 'Trust Center',
            description: 'Answer security reviews and publish your posture.',
            href: '/services/trust-center',
          },
          {
            title: 'NIS2',
            description: 'Scoping and the full MSB incident flow.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'A copilot is only useful in compliance if it can show its work. Every answer has to trace back to a law or a control.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Does it just wrap a general chatbot?',
            answer:
              'No. It is grounded in Swedish legal text and your own control and integration data, and it cites its sources.',
          },
          {
            question: 'Is our data used to train public models?',
            answer:
              'No. Your company profile and control data stay on EU infrastructure and are not shared.',
          },
          {
            question: 'Can it write in correct Swedish?',
            answer:
              'Yes. Policies are generated in correct Swedish authority prose, adapted to your real environment.',
          },
          {
            question: 'Can it answer customer questionnaires?',
            answer:
              'Yes. It drafts answers from your existing controls and evidence, which you review before sending.',
          },
        ],
      },
      cta: {
        title: 'Give your team a compliance copilot',
        description: 'Ask the law and your own data in one place.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'AI-copilot',
      tagline: 'Ställ era efterlevnadsfrågor på vanligt språk.',
      seo: {
        title: 'AI-copilot för efterlevnad — OptiTech',
        description:
          'OptiTech AI svarar på frågor mot svensk lagtext och er egen data, skriver policyer i korrekt myndighetsprosa och fyller i säkerhetsenkäter från era verkliga kontroller.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'En copilot som kan både lagen och er data',
        description:
          'Ställ frågor mot svensk lagtext och er egen miljö, generera policyer i korrekt myndighetsprosa och besvara kunders säkerhetsenkäter från era verkliga kontroller, på svenska eller engelska.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Utforska AI-sidan', href: LINKS.ai },
      },
      painPoints: {
        title: 'Efterlevnadskunskap sitter inlåst hos konsulter',
        items: [
          {
            title: 'Lagen är svårläst',
            description:
              'NIS2, DORA och MSBFS är täta. Att veta om ni omfattas borde inte kräva en jurist.',
          },
          {
            title: 'Policyer blir generiska',
            description:
              'Mallpolicyer matchar inte er verkliga miljö, så revisorer ser rakt igenom dem.',
          },
          {
            title: 'Enkäter äter dagar',
            description:
              'Varje enterprise-affär kommer med en säkerhetsenkät, och att svara på var och en för hand är långsamt.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Fråga på vanligt språk',
            description:
              '"Omfattas vi av NIS2?" "Vad saknas för ISO-certifiering?" Copiloten svarar och anger källan.',
          },
          {
            title: 'Grundad i er data',
            description:
              'Svaren utgår från era integrationer och kontroller, inte generiska mallar, så de speglar er verkliga status.',
          },
          {
            title: 'Generera och återanvänd',
            description:
              'Utkasta en policy eller ett enkätsvar, granska det och behåll det i ert program med full spårbarhet.',
          },
        ],
      },
      features: {
        title: 'En AI-copilot som kan svensk lagtext',
        intro:
          'Ställ en fråga på vanligt språk så gör copiloten grovjobbet: den läser lagtexten, stämmer av mot era egna kontroller och visar var varje svar kommer ifrån.',
        items: [
          {
            title: 'Svenska och engelska',
            description:
              'En copilot som behärskar svensk myndighetsprosa, inte ett översättningslager.',
          },
          {
            title: 'Svar med källor',
            description: 'Varje svar pekar tillbaka på lagtexten eller kontrollen det kom från.',
          },
          {
            title: 'Policygenerering',
            description:
              'Utkasta policyer grundade i er verkliga miljö, redo att granska och anta.',
          },
          {
            title: 'Autofyll av enkäter',
            description:
              'Besvara kunders säkerhetsgranskningar från era befintliga kontroller och bevis.',
          },
          {
            title: 'Hjälp med scoping',
            description: 'Förstå vilka lagar som gäller och vilken NIS2-kategori ni hamnar i.',
          },
          {
            title: 'Privat som standard',
            description: 'Er bolagsprofil och kontrolldata stannar på EU-infrastruktur.',
          },
        ],
      },
      stats: [
        { value: 'SV + EN', label: 'Svar på svenska eller engelska' },
        { value: '1 klick', label: 'Utkasta en policy från er data' },
        { value: 'Källor', label: 'Varje svar länkar till sin källa' },
      ],
      related: {
        title: 'Sätt copiloten i arbete',
        items: [
          {
            title: 'Ramverksbibliotek',
            description: 'Korsmappade kontroller som copiloten resonerar kring.',
            href: '/services/framework-library',
          },
          {
            title: 'Trust Center',
            description: 'Besvara säkerhetsgranskningar och publicera er status.',
            href: '/services/trust-center',
          },
          {
            title: 'NIS2',
            description: 'Scoping och hela MSB-incidentflödet.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'En copilot är bara användbar i efterlevnad om den kan visa hur den tänkt. Varje svar måste kunna spåras till en lag eller en kontroll.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Är det bara en vanlig chattbot?',
            answer:
              'Nej. Den är grundad i svensk lagtext och er egen kontroll- och integrationsdata, och den anger sina källor.',
          },
          {
            question: 'Används vår data för att träna publika modeller?',
            answer:
              'Nej. Er bolagsprofil och kontrolldata stannar på EU-infrastruktur och delas inte.',
          },
          {
            question: 'Kan den skriva på korrekt svenska?',
            answer:
              'Ja. Policyer genereras i korrekt svensk myndighetsprosa, anpassade efter er verkliga miljö.',
          },
          {
            question: 'Kan den besvara kunders enkäter?',
            answer:
              'Ja. Den utkastar svar från era befintliga kontroller och bevis, som ni granskar innan ni skickar.',
          },
        ],
      },
      cta: {
        title: 'Ge teamet en efterlevnads-copilot',
        description: 'Fråga lagen och er egen data på ett ställe.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'supplier-risk': {
    en: {
      name: 'Supplier & third-party risk',
      tagline: 'Assess, classify, and monitor your vendors and their contracts.',
      seo: {
        title: 'Supplier and third-party risk management (TPRM) — OptiTech',
        description:
          'A vendor register, automated security questionnaires, risk classification, and contract tracking, including the DORA ICT contract register as a ready report.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Know the risk in your supply chain',
        description:
          'Keep a live register of every vendor, send security questionnaires automatically, classify risk, and track contracts, with the DORA ICT contract register produced for you as a supervisor-ready report.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See DORA', href: '/docs/frameworks/dora' },
      },
      painPoints: {
        title: 'Your risk is only as strong as your weakest supplier',
        items: [
          {
            title: 'The register is a spreadsheet',
            description:
              'Vendors, contracts, and renewal dates scattered across files nobody keeps up to date.',
          },
          {
            title: 'Questionnaires never come back',
            description:
              'Sending and chasing supplier security assessments by email is slow and impossible to audit.',
          },
          {
            title: 'DORA raised the bar',
            description:
              'Financial entities must maintain a formal ICT contract register, and their providers must prove it too.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Build the vendor register',
            description:
              'Add suppliers, the services they deliver, and their contracts, with DORA classification where it applies.',
          },
          {
            title: 'Send assessments automatically',
            description:
              'Issue security questionnaires, track responses, and score each vendor by risk.',
          },
          {
            title: 'Watch contracts and renewals',
            description:
              'Renewal reminders and contract fields keep you ahead of expiries and obligations.',
          },
          {
            title: 'Export the DORA register',
            description: 'Generate the ICT contract register as a ready report for supervisors.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Vendor register',
            description: 'Every supplier, service, and contract in one place.',
          },
          {
            title: 'Automated questionnaires',
            description: 'Send, track, and score supplier security assessments.',
          },
          {
            title: 'Risk classification',
            description: 'Rank vendors by criticality and residual risk.',
          },
          {
            title: 'Contract tracking',
            description: 'Renewal reminders and the fields DORA expects on ICT agreements.',
          },
          {
            title: 'DORA ICT register',
            description: 'The register of information produced as a supervisor-ready export.',
          },
          {
            title: 'Supply-chain view',
            description: 'See concentration and substitutability across your providers.',
          },
        ],
      },
      stats: [
        { value: 'DORA', label: 'ICT contract register, ready to export' },
        { value: '90d', label: 'Contract renewal reminders' },
        { value: '1 register', label: 'Vendors, services, and contracts together' },
      ],
      related: {
        title: 'Related frameworks',
        items: [
          {
            title: 'DORA',
            description: 'For financial entities and their ICT providers.',
            href: '/docs/frameworks/dora',
          },
          {
            title: 'NIS2',
            description: 'Supply-chain security obligations for essential and important entities.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'ISO 27001',
            description: 'Supplier relationships as part of your ISMS.',
            href: '/docs/frameworks/iso-27001',
          },
        ],
      },
      quote: {
        text: 'Regulators stopped accepting "our vendor handles that." You have to be able to show the chain.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Does this produce the DORA register of information?',
            answer:
              'Yes. The ICT contract register is generated as a ready, supervisor-facing export from your vendor and contract data.',
          },
          {
            question: 'Can suppliers respond without a login?',
            answer:
              'Yes. Questionnaires can be sent and completed without every supplier needing an account.',
          },
          {
            question: 'Can we classify vendors by criticality?',
            answer: 'Yes. Each vendor carries a risk classification that feeds your reporting.',
          },
          {
            question: 'Does it track contract renewals?',
            answer: 'Yes. Renewal reminders and contract fields keep you ahead of expiries.',
          },
        ],
      },
      cta: {
        title: 'Get control of third-party risk',
        description: 'From vendor register to the DORA ICT contract register.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Leverantörsrisk',
      tagline: 'Bedöm, klassa och bevaka era leverantörer och deras avtal.',
      seo: {
        title: 'Leverantörs- och tredjepartsrisk (TPRM) — OptiTech',
        description:
          'Ett leverantörsregister, automatiska säkerhetsenkäter, riskklassning och avtalsbevakning, inklusive DORA:s IKT-avtalsregister som färdig rapport.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Känn risken i er leverantörskedja',
        description:
          'Håll ett levande register över varje leverantör, skicka säkerhetsenkäter automatiskt, klassa risk och bevaka avtal, med DORA:s IKT-avtalsregister framtaget åt er som en tillsynsklar rapport.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se DORA', href: '/docs/frameworks/dora' },
      },
      painPoints: {
        title: 'Er risk är bara så stark som er svagaste leverantör',
        items: [
          {
            title: 'Registret är ett kalkylark',
            description:
              'Leverantörer, avtal och förnyelsedatum utspridda i filer som ingen håller aktuella.',
          },
          {
            title: 'Enkäter kommer aldrig tillbaka',
            description:
              'Att skicka och jaga leverantörers säkerhetsbedömningar via mejl är långsamt och omöjligt att revidera.',
          },
          {
            title: 'DORA höjde ribban',
            description:
              'Finansiella enheter måste hålla ett formellt IKT-avtalsregister, och deras leverantörer måste bevisa det också.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Bygg leverantörsregistret',
            description:
              'Lägg till leverantörer, tjänsterna de levererar och deras avtal, med DORA-klassning där det gäller.',
          },
          {
            title: 'Skicka bedömningar automatiskt',
            description:
              'Skicka säkerhetsenkäter, följ upp svar och poängsätt varje leverantör efter risk.',
          },
          {
            title: 'Bevaka avtal och förnyelser',
            description:
              'Förnyelsepåminnelser och avtalsfält håller er steget före utgångar och skyldigheter.',
          },
          {
            title: 'Exportera DORA-registret',
            description: 'Generera IKT-avtalsregistret som en färdig rapport för tillsyn.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Leverantörsregister',
            description: 'Varje leverantör, tjänst och avtal på ett ställe.',
          },
          {
            title: 'Automatiska enkäter',
            description: 'Skicka, följ upp och poängsätt leverantörers säkerhetsbedömningar.',
          },
          {
            title: 'Riskklassning',
            description: 'Rangordna leverantörer efter kritikalitet och restrisk.',
          },
          {
            title: 'Avtalsbevakning',
            description: 'Förnyelsepåminnelser och fälten DORA förväntar sig på IKT-avtal.',
          },
          {
            title: 'DORA IKT-register',
            description: 'Registret över information framtaget som en tillsynsklar export.',
          },
          {
            title: 'Leverantörskedjevy',
            description: 'Se koncentration och utbytbarhet över era leverantörer.',
          },
        ],
      },
      stats: [
        { value: 'DORA', label: 'IKT-avtalsregister, redo att exportera' },
        { value: '90 dgr', label: 'Påminnelser om avtalsförnyelse' },
        { value: '1 register', label: 'Leverantörer, tjänster och avtal ihop' },
      ],
      related: {
        title: 'Relaterade ramverk',
        items: [
          {
            title: 'DORA',
            description: 'För finansiella enheter och deras IKT-leverantörer.',
            href: '/docs/frameworks/dora',
          },
          {
            title: 'NIS2',
            description: 'Krav på leverantörskedjans säkerhet för väsentliga och viktiga enheter.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'ISO 27001',
            description: 'Leverantörsrelationer som del av ert ledningssystem.',
            href: '/docs/frameworks/iso-27001',
          },
        ],
      },
      quote: {
        text: 'Tillsynen slutade acceptera "det sköter vår leverantör". Ni måste kunna visa hela kedjan.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Tar det fram DORA:s register över information?',
            answer:
              'Ja. IKT-avtalsregistret genereras som en färdig, tillsynsvänd export från er leverantörs- och avtalsdata.',
          },
          {
            question: 'Kan leverantörer svara utan inloggning?',
            answer:
              'Ja. Enkäter kan skickas och fyllas i utan att varje leverantör behöver ett konto.',
          },
          {
            question: 'Kan vi klassa leverantörer efter kritikalitet?',
            answer: 'Ja. Varje leverantör bär en riskklassning som matar er rapportering.',
          },
          {
            question: 'Bevakar det avtalsförnyelser?',
            answer: 'Ja. Förnyelsepåminnelser och avtalsfält håller er steget före utgångar.',
          },
        ],
      },
      cta: {
        title: 'Få kontroll på tredjepartsrisken',
        description: 'Från leverantörsregister till DORA:s IKT-avtalsregister.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'gap-analysis': {
    en: {
      name: 'Gap analysis & onboarding',
      tagline: 'Answer a short questionnaire, get a prioritized action list.',
      seo: {
        title: 'Gap analysis and onboarding — OptiTech',
        description:
          'A guided onboarding wizard scopes which laws apply to you, which NIS2 category you fall into, and which controls you need, then hands you a prioritized action list.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Know exactly where you stand in an afternoon',
        description:
          'Answer around twenty questions about your industry, size, systems, and customers. OptiTech scopes which regulations apply, which NIS2 category you fall into, and which controls you need, then gives you a prioritized action list.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See the frameworks', href: '/frameworks' },
      },
      painPoints: {
        title: 'Most teams do not know where to start',
        items: [
          {
            title: 'Scope is unclear',
            description: 'Do NIS2, DORA, or the AI Act even apply to you? Guessing is expensive.',
          },
          {
            title: 'Consultants are slow and pricey',
            description:
              'A scoping engagement costs weeks and thousands, and the output is a static document.',
          },
          {
            title: 'No prioritization',
            description: 'Even with a control list, teams do not know which gaps to close first.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Answer the wizard',
            description:
              'Around twenty questions about your industry, size, systems, and customer base.',
          },
          {
            title: 'Automatic scoping',
            description:
              'OptiTech determines which laws apply, your NIS2 category, and the controls you need.',
          },
          {
            title: 'Get a prioritized plan',
            description:
              'A ready action list ordered by impact, so you start with what matters most.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          { title: 'Guided wizard', description: 'A short questionnaire, not a blank ISMS.' },
          {
            title: 'Automatic scoping',
            description: 'Which laws apply and which NIS2 category you fall into.',
          },
          {
            title: 'Prioritized action list',
            description: 'Ordered by impact, ready to work through.',
          },
          {
            title: 'Cross-framework view',
            description: 'See where a single control satisfies several regulations.',
          },
          {
            title: 'Onboarding in under a week',
            description: 'From sign-up to a working program fast.',
          },
          {
            title: 'Free to start',
            description: 'Run a gap analysis before you commit to anything.',
          },
        ],
      },
      stats: [
        { value: '~20', label: 'Questions to full scoping' },
        { value: '<1 week', label: 'From sign-up to a live program' },
        { value: '10,000+', label: 'Swedish companies now in NIS2 scope' },
      ],
      related: {
        title: 'What comes next',
        items: [
          {
            title: 'Framework library',
            description: 'The controls your scoping maps you to.',
            href: '/services/framework-library',
          },
          {
            title: 'Evidence collection',
            description: 'Start proving the controls automatically.',
            href: '/services/evidence-collection',
          },
          {
            title: 'NIS2',
            description: 'The Swedish Cybersecurity Act in detail.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'Half the companies now in scope for NIS2 do not know it yet. Scoping should take an afternoon, not a consulting project.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Is the gap analysis really free?',
            answer:
              'Yes. You can run a gap analysis and see your scope before committing to anything.',
          },
          {
            question: 'Will it tell me if NIS2 applies?',
            answer:
              'Yes. The wizard determines whether you are in scope and, if so, whether you are essential or important.',
          },
          {
            question: 'How long does onboarding take?',
            answer: 'Most teams go from sign-up to a working program in under a week.',
          },
          {
            question: 'What do I get at the end?',
            answer:
              'A prioritized action list mapped to the controls and frameworks that apply to you.',
          },
        ],
      },
      cta: {
        title: 'Find out what applies to you',
        description: 'Run a free gap analysis and get a prioritized plan.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Gap-analys & onboarding',
      tagline: 'Svara på en kort enkät, få en prioriterad åtgärdslista.',
      seo: {
        title: 'Gap-analys och onboarding — OptiTech',
        description:
          'En guidad onboarding-wizard avgör vilka lagar som gäller er, vilken NIS2-kategori ni hamnar i och vilka kontroller ni behöver, och ger er sedan en prioriterad åtgärdslista.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Vet exakt var ni står på en eftermiddag',
        description:
          'Svara på ett tjugotal frågor om bransch, storlek, system och kunder. OptiTech avgör vilka regelverk som gäller, vilken NIS2-kategori ni hamnar i och vilka kontroller ni behöver, och ger er sedan en prioriterad åtgärdslista.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se ramverken', href: '/frameworks' },
      },
      painPoints: {
        title: 'De flesta vet inte var de ska börja',
        items: [
          {
            title: 'Omfattningen är oklar',
            description: 'Gäller NIS2, DORA eller AI Act ens er? Att gissa är dyrt.',
          },
          {
            title: 'Konsulter är långsamma och dyra',
            description:
              'Ett scoping-uppdrag kostar veckor och tusenlappar, och resultatet är ett statiskt dokument.',
          },
          {
            title: 'Ingen prioritering',
            description: 'Även med en kontrollista vet team inte vilka gap som ska stängas först.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Svara på wizarden',
            description: 'Ett tjugotal frågor om bransch, storlek, system och kundbas.',
          },
          {
            title: 'Automatisk scoping',
            description:
              'OptiTech avgör vilka lagar som gäller, er NIS2-kategori och kontrollerna ni behöver.',
          },
          {
            title: 'Få en prioriterad plan',
            description:
              'En färdig åtgärdslista ordnad efter effekt, så ni börjar med det viktigaste.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          { title: 'Guidad wizard', description: 'En kort enkät, inte ett tomt ledningssystem.' },
          {
            title: 'Automatisk scoping',
            description: 'Vilka lagar som gäller och vilken NIS2-kategori ni hamnar i.',
          },
          {
            title: 'Prioriterad åtgärdslista',
            description: 'Ordnad efter effekt, redo att beta av.',
          },
          {
            title: 'Tvärgående vy',
            description: 'Se var en enda kontroll uppfyller flera regelverk.',
          },
          {
            title: 'Onboarding under en vecka',
            description: 'Från registrering till ett fungerande program snabbt.',
          },
          {
            title: 'Gratis att börja',
            description: 'Kör en gap-analys innan ni binder er till något.',
          },
        ],
      },
      stats: [
        { value: '~20', label: 'Frågor till full scoping' },
        { value: '<1 vecka', label: 'Från registrering till ett live-program' },
        { value: '10 000+', label: 'Svenska bolag nu inom NIS2-scope' },
      ],
      related: {
        title: 'Vad som kommer sedan',
        items: [
          {
            title: 'Ramverksbibliotek',
            description: 'Kontrollerna er scoping mappar er till.',
            href: '/services/framework-library',
          },
          {
            title: 'Bevisinsamling',
            description: 'Börja bevisa kontrollerna automatiskt.',
            href: '/services/evidence-collection',
          },
          {
            title: 'NIS2',
            description: 'Cybersäkerhetslagen i detalj.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'Hälften av bolagen som nu omfattas av NIS2 vet inte om det än. Scoping ska ta en eftermiddag, inte ett konsultprojekt.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Är gap-analysen verkligen gratis?',
            answer:
              'Ja. Ni kan köra en gap-analys och se er omfattning innan ni binder er till något.',
          },
          {
            question: 'Säger den om NIS2 gäller oss?',
            answer:
              'Ja. Wizarden avgör om ni omfattas och, i så fall, om ni är väsentliga eller viktiga.',
          },
          {
            question: 'Hur lång tid tar onboarding?',
            answer:
              'De flesta går från registrering till ett fungerande program på under en vecka.',
          },
          {
            question: 'Vad får jag i slutet?',
            answer:
              'En prioriterad åtgärdslista mappad till kontrollerna och ramverken som gäller er.',
          },
        ],
      },
      cta: {
        title: 'Ta reda på vad som gäller er',
        description: 'Kör en kostnadsfri gap-analys och få en prioriterad plan.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'policy-management': {
    en: {
      name: 'Policy & document management',
      tagline: 'Swedish policy templates with review cycles and e-signing.',
      seo: {
        title: 'Policy and document management — OptiTech',
        description:
          'Over fifty Swedish policy templates, version control, annual review cycles with reminders, and employee e-signing with read receipts.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Policies that stay alive, not PDFs that rot',
        description:
          'Start from more than fifty Swedish templates, keep every document under version control, run annual review cycles with reminders, and collect employee read receipts, all in one place.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See ISO 27001', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Policy documents die in SharePoint',
        items: [
          {
            title: 'Out of date on arrival',
            description: 'A policy written once and never reviewed is a liability, not a control.',
          },
          {
            title: 'No proof anyone read it',
            description:
              'NIS2 expects staff, and the board, to be trained. A file nobody opened does not count.',
          },
          {
            title: 'No version history',
            description: 'Auditors ask what changed and when. Word files cannot answer that.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Start from a template',
            description:
              'Over fifty Swedish templates: information security policy, incident plan, continuity plan, and more.',
          },
          {
            title: 'Review and approve',
            description:
              'A workflow moves each document from draft to review to published, with the history kept.',
          },
          {
            title: 'Collect read receipts',
            description:
              'Employees e-sign that they have read a policy, giving you auditable proof of awareness.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: '50+ Swedish templates',
            description: 'Written in correct authority prose, ready to adapt.',
          },
          {
            title: 'Version control',
            description: 'Every revision kept, with a clear change history.',
          },
          {
            title: 'Review cycles',
            description: 'Annual reviews with reminders so nothing lapses.',
          },
          { title: 'E-signing', description: 'Employee read receipts for auditable awareness.' },
          {
            title: 'Approval workflow',
            description: 'Draft, review, approve, and publish with roles.',
          },
          {
            title: 'Linked to controls',
            description: 'Policies map to the controls and frameworks they support.',
          },
        ],
      },
      stats: [
        { value: '50+', label: 'Swedish policy templates' },
        { value: 'Annual', label: 'Review cycles with reminders' },
        { value: 'Signed', label: 'Employee read receipts on record' },
      ],
      related: {
        title: 'Related frameworks',
        items: [
          {
            title: 'ISO 27001',
            description: 'Documented policies as part of your ISMS.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'NIS2',
            description: 'Governance and training obligations, including the board.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Training',
            description: 'Turn policies into awareness training.',
            href: '/services/training',
          },
        ],
      },
      quote: {
        text: 'A policy is only a control if someone reviews it and someone reads it. Everything else is a document.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Are the templates in Swedish?',
            answer:
              'Yes. More than fifty templates are written in correct Swedish authority prose, ready to adapt.',
          },
          {
            question: 'Can employees sign that they read a policy?',
            answer: 'Yes. E-signing produces auditable read receipts per employee.',
          },
          {
            question: 'Do documents have version history?',
            answer: 'Yes. Every revision is kept with a clear record of what changed and when.',
          },
          {
            question: 'Can the AI copilot draft a policy?',
            answer:
              'Yes. Policies can be generated from your real environment and then reviewed here.',
          },
        ],
      },
      cta: {
        title: 'Keep your policies current and provable',
        description: 'Templates, review cycles, and read receipts in one place.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Policy- & dokumenthantering',
      tagline: 'Svenska policymallar med granskningscykler och e-signering.',
      seo: {
        title: 'Policy- och dokumenthantering — OptiTech',
        description:
          'Över femtio svenska policymallar, versionshantering, årliga granskningscykler med påminnelser och e-signering med läskvitton.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Policyer som lever, inte PDF:er som ruttnar',
        description:
          'Utgå från över femtio svenska mallar, håll varje dokument under versionshantering, kör årliga granskningscykler med påminnelser och samla läskvitton från anställda, allt på ett ställe.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se ISO 27001', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Policydokument dör i SharePoint',
        items: [
          {
            title: 'Inaktuella vid ankomst',
            description:
              'En policy som skrivs en gång och aldrig granskas är en risk, inte en kontroll.',
          },
          {
            title: 'Inget bevis att någon läst',
            description:
              'NIS2 förväntar sig att personal, och styrelsen, utbildas. En fil ingen öppnat räknas inte.',
          },
          {
            title: 'Ingen versionshistorik',
            description:
              'Revisorer frågar vad som ändrats och när. Word-filer kan inte svara på det.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Utgå från en mall',
            description:
              'Över femtio svenska mallar: informationssäkerhetspolicy, incidentplan, kontinuitetsplan med flera.',
          },
          {
            title: 'Granska och godkänn',
            description:
              'Ett arbetsflöde för varje dokument från utkast till granskning till publicerat, med historiken sparad.',
          },
          {
            title: 'Samla läskvitton',
            description:
              'Anställda e-signerar att de läst en policy, vilket ger revisionsbart bevis på medvetenhet.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: '50+ svenska mallar',
            description: 'Skrivna i korrekt myndighetsprosa, redo att anpassa.',
          },
          {
            title: 'Versionshantering',
            description: 'Varje revision sparad, med tydlig ändringshistorik.',
          },
          {
            title: 'Granskningscykler',
            description: 'Årliga granskningar med påminnelser så inget löper ut.',
          },
          {
            title: 'E-signering',
            description: 'Läskvitton från anställda för revisionsbar medvetenhet.',
          },
          {
            title: 'Godkännandeflöde',
            description: 'Utkast, granska, godkänn och publicera med roller.',
          },
          {
            title: 'Kopplat till kontroller',
            description: 'Policyer mappas till kontrollerna och ramverken de stödjer.',
          },
        ],
      },
      stats: [
        { value: '50+', label: 'Svenska policymallar' },
        { value: 'Årlig', label: 'Granskningscykel med påminnelser' },
        { value: 'Signerat', label: 'Läskvitton från anställda på plats' },
      ],
      related: {
        title: 'Relaterade ramverk',
        items: [
          {
            title: 'ISO 27001',
            description: 'Dokumenterade policyer som del av ert ledningssystem.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'NIS2',
            description: 'Styrnings- och utbildningskrav, inklusive styrelsen.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Utbildning',
            description: 'Gör policyer till medvetenhetsutbildning.',
            href: '/services/training',
          },
        ],
      },
      quote: {
        text: 'En policy är bara en kontroll om någon granskar den och någon läser den. Allt annat är ett dokument.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Är mallarna på svenska?',
            answer:
              'Ja. Över femtio mallar är skrivna i korrekt svensk myndighetsprosa, redo att anpassa.',
          },
          {
            question: 'Kan anställda signera att de läst en policy?',
            answer: 'Ja. E-signering ger revisionsbara läskvitton per anställd.',
          },
          {
            question: 'Har dokumenten versionshistorik?',
            answer: 'Ja. Varje revision sparas med tydligt spår av vad som ändrats och när.',
          },
          {
            question: 'Kan AI-copiloten utkasta en policy?',
            answer: 'Ja. Policyer kan genereras från er verkliga miljö och sedan granskas här.',
          },
        ],
      },
      cta: {
        title: 'Håll era policyer aktuella och bevisbara',
        description: 'Mallar, granskningscykler och läskvitton på ett ställe.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'risk-register': {
    en: {
      name: 'Risk register',
      tagline: 'Structured risk assessment linked to controls and evidence.',
      seo: {
        title: 'Risk register — OptiTech',
        description:
          'Structured risk assessment with likelihood times impact, linking each risk to its controls and evidence, treatment plans, and a one-click management report.',
      },
      hero: {
        eyebrow: 'Service',
        title: '<gray>A risk register</gray> your board can actually read',
        description:
          'Assess risk with likelihood times impact, link each risk to the controls and evidence that treat it, track treatment plans, and produce a management report in one click.',
        primaryCta: { label: 'Book a demo', href: CONTACT },
        secondaryCta: { label: 'See ISO 27001', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Risk lives in a spreadsheet nobody trusts',
        items: [
          {
            title: 'Disconnected from controls',
            description:
              'A risk with no link to the control that treats it cannot show whether it is handled.',
          },
          {
            title: 'No treatment tracking',
            description:
              'Risks get identified once and then drift, with no owner and no follow-up.',
          },
          {
            title: 'Hard to report up',
            description: 'The board needs a clear view, not a color-coded spreadsheet tab.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Assess the risk',
            description: 'Score likelihood and impact on a matrix to get a consistent risk level.',
          },
          {
            title: 'Link to controls and evidence',
            description:
              'Connect each risk to the controls that treat it and the evidence that proves them.',
          },
          {
            title: 'Track treatment and report',
            description:
              'Assign treatment plans with owners and produce a board-ready report on demand.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Likelihood times impact',
            description: 'A consistent scoring matrix for every risk.',
          },
          {
            title: 'Risk to control to evidence',
            description: 'Trace each risk to what actually treats it.',
          },
          {
            title: 'Treatment plans',
            description: 'Owners, actions, and follow-up on every risk.',
          },
          {
            title: 'Residual risk',
            description: 'See risk before and after controls take effect.',
          },
          { title: 'Management report', description: 'A board-ready view produced in one click.' },
          {
            title: 'Quantitative option',
            description: 'Convert a qualitative assessment into a quantitative study.',
          },
        ],
      },
      stats: [
        { value: 'L × I', label: 'Consistent risk scoring' },
        { value: '1 click', label: 'Board-ready risk report' },
        { value: 'Linked', label: 'Risk, control, and evidence together' },
      ],
      related: {
        title: 'Related frameworks',
        items: [
          {
            title: 'ISO 27001',
            description: 'Risk assessment at the heart of your ISMS.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'NIS2',
            description: 'Risk management measures for essential and important entities.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'DORA',
            description: 'ICT risk management for the financial sector.',
            href: '/docs/frameworks/dora',
          },
        ],
      },
      quote: {
        text: 'A risk that is not linked to a control is just a worry. The register has to connect the two.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Can we link risks to controls?',
            answer:
              'Yes. Each risk connects to the controls that treat it and the evidence that proves them.',
          },
          {
            question: 'Does it show residual risk?',
            answer: 'Yes. You see the risk level before and after controls are applied.',
          },
          {
            question: 'Can we report to the board easily?',
            answer: 'Yes. A management report is produced on demand from the live register.',
          },
          {
            question: 'Is quantitative risk supported?',
            answer: 'Yes. A qualitative assessment can be converted into a quantitative study.',
          },
        ],
      },
      cta: {
        title: 'Make risk something you can show',
        description: 'Assess, treat, and report risk in one connected register.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Riskregister',
      tagline: 'Strukturerad riskbedömning kopplad till kontroller och bevis.',
      seo: {
        title: 'Riskregister — OptiTech',
        description:
          'Strukturerad riskbedömning med sannolikhet gånger konsekvens, som kopplar varje risk till sina kontroller och bevis, behandlingsplaner och en ledningsrapport med ett klick.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: '<gray>Ett riskregister</gray> som styrelsen faktiskt kan läsa',
        description:
          'Bedöm risk med sannolikhet gånger konsekvens, koppla varje risk till kontrollerna och bevisen som behandlar den, följ behandlingsplaner och ta fram en ledningsrapport med ett klick.',
        primaryCta: { label: 'Boka demo', href: CONTACT },
        secondaryCta: { label: 'Se ISO 27001', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Risk lever i ett kalkylark ingen litar på',
        items: [
          {
            title: 'Frånkopplad från kontroller',
            description:
              'En risk utan länk till kontrollen som behandlar den kan inte visa om den är hanterad.',
          },
          {
            title: 'Ingen behandlingsuppföljning',
            description:
              'Risker identifieras en gång och glider sedan, utan ägare och utan uppföljning.',
          },
          {
            title: 'Svårt att rapportera uppåt',
            description: 'Styrelsen behöver en tydlig vy, inte en färgkodad kalkylarksflik.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Bedöm risken',
            description:
              'Poängsätt sannolikhet och konsekvens på en matris för en konsekvent risknivå.',
          },
          {
            title: 'Koppla till kontroller och bevis',
            description:
              'Koppla varje risk till kontrollerna som behandlar den och bevisen som styrker dem.',
          },
          {
            title: 'Följ behandling och rapportera',
            description:
              'Tilldela behandlingsplaner med ägare och ta fram en styrelseklar rapport på begäran.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Sannolikhet gånger konsekvens',
            description: 'En konsekvent poängmatris för varje risk.',
          },
          {
            title: 'Risk till kontroll till bevis',
            description: 'Spåra varje risk till det som faktiskt behandlar den.',
          },
          {
            title: 'Behandlingsplaner',
            description: 'Ägare, åtgärder och uppföljning på varje risk.',
          },
          { title: 'Restrisk', description: 'Se risk före och efter att kontroller får effekt.' },
          { title: 'Ledningsrapport', description: 'En styrelseklar vy framtagen med ett klick.' },
          {
            title: 'Kvantitativt alternativ',
            description: 'Konvertera en kvalitativ bedömning till en kvantitativ studie.',
          },
        ],
      },
      stats: [
        { value: 'S × K', label: 'Konsekvent riskpoängsättning' },
        { value: '1 klick', label: 'Styrelseklar riskrapport' },
        { value: 'Kopplat', label: 'Risk, kontroll och bevis ihop' },
      ],
      related: {
        title: 'Relaterade ramverk',
        items: [
          {
            title: 'ISO 27001',
            description: 'Riskbedömning i hjärtat av ert ledningssystem.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'NIS2',
            description: 'Riskhanteringsåtgärder för väsentliga och viktiga enheter.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'DORA',
            description: 'IKT-riskhantering för finanssektorn.',
            href: '/docs/frameworks/dora',
          },
        ],
      },
      quote: {
        text: 'En risk som inte är kopplad till en kontroll är bara en oro. Registret måste knyta ihop de två.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Kan vi koppla risker till kontroller?',
            answer:
              'Ja. Varje risk kopplas till kontrollerna som behandlar den och bevisen som styrker dem.',
          },
          {
            question: 'Visar det restrisk?',
            answer: 'Ja. Ni ser risknivån före och efter att kontroller tillämpats.',
          },
          {
            question: 'Kan vi rapportera till styrelsen enkelt?',
            answer: 'Ja. En ledningsrapport tas fram på begäran från det levande registret.',
          },
          {
            question: 'Stöds kvantitativ risk?',
            answer: 'Ja. En kvalitativ bedömning kan konverteras till en kvantitativ studie.',
          },
        ],
      },
      cta: {
        title: 'Gör risk till något ni kan visa',
        description: 'Bedöm, behandla och rapportera risk i ett sammankopplat register.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  training: {
    en: {
      name: 'Security training & awareness',
      tagline: 'Swedish awareness training, including for the board.',
      seo: {
        title: 'Security training and awareness — OptiTech',
        description:
          'Security awareness training in Swedish, including a dedicated module for the board and management that NIS2 requires, plus onboarding and offboarding checklists.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Training that reaches the board, not just IT',
        description:
          'NIS2 requires training for management and the board, not only staff. OptiTech delivers security awareness training in Swedish, with onboarding and offboarding checklists tied to your HR system.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See NIS2', href: '/docs/frameworks/nis2' },
      },
      painPoints: {
        title: 'Awareness is a control, and regulators check it',
        items: [
          {
            title: 'The board is skipped',
            description:
              'NIS2 puts personal responsibility on management, yet training rarely reaches them.',
          },
          {
            title: 'Onboarding is ad hoc',
            description:
              'New joiners get access before training, and leavers keep it after they go.',
          },
          {
            title: 'No proof of completion',
            description: 'Without records, training you ran does not count in an audit.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Assign training',
            description:
              'Roll out awareness training in Swedish to staff, management, and the board.',
          },
          {
            title: 'Tie it to HR events',
            description: 'Onboarding and offboarding checklists trigger from your HR system.',
          },
          {
            title: 'Track completion',
            description: 'Completion is recorded per person, giving you auditable proof.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Swedish content',
            description: 'Awareness training written for a Swedish audience.',
          },
          {
            title: 'Board module',
            description: 'A dedicated module for management and the board, as NIS2 expects.',
          },
          {
            title: 'Onboarding checklists',
            description: 'New joiners get the right access and training in order.',
          },
          {
            title: 'Offboarding checklists',
            description: 'Access is removed on time when someone leaves.',
          },
          {
            title: 'Completion tracking',
            description: 'Auditable records of who trained and when.',
          },
          { title: 'HR integration', description: 'Checklists trigger from your HR system.' },
        ],
      },
      stats: [
        { value: 'Board', label: 'Training management, not just staff' },
        { value: '<24h', label: 'Offboarding access removal target' },
        { value: 'Tracked', label: 'Completion recorded per person' },
      ],
      related: {
        title: 'Related',
        items: [
          {
            title: 'NIS2',
            description: 'The training obligations that reach the board.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Policy management',
            description: 'Turn policies into read receipts and training.',
            href: '/services/policy-management',
          },
          {
            title: 'Evidence collection',
            description: 'Prove offboarding happens within 24 hours.',
            href: '/services/evidence-collection',
          },
        ],
      },
      quote: {
        text: 'NIS2 made the board personally responsible. Training that stops at the IT team misses the point.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Is there training for the board?',
            answer:
              'Yes. A dedicated module covers management and the board, which NIS2 specifically requires.',
          },
          {
            question: 'Is the content in Swedish?',
            answer: 'Yes. Awareness training is written for a Swedish audience.',
          },
          {
            question: 'Does it connect to onboarding and offboarding?',
            answer:
              'Yes. Checklists trigger from your HR system so access and training stay in sync.',
          },
          {
            question: 'Can we prove completion?',
            answer: 'Yes. Completion is recorded per person for audit.',
          },
        ],
      },
      cta: {
        title: 'Make awareness provable',
        description: 'Train staff and the board, and record it.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Personal & utbildning',
      tagline: 'Svensk medvetenhetsutbildning, även för styrelsen.',
      seo: {
        title: 'Säkerhetsutbildning och medvetenhet — OptiTech',
        description:
          'Säkerhetsmedvetenhetsutbildning på svenska, inklusive en särskild modul för styrelse och ledning som NIS2 kräver, plus onboarding- och offboarding-checklistor.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Utbildning som når styrelsen, inte bara IT',
        description:
          'NIS2 kräver utbildning av ledning och styrelse, inte bara personal. OptiTech levererar säkerhetsmedvetenhetsutbildning på svenska, med onboarding- och offboarding-checklistor kopplade till ert HR-system.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se NIS2', href: '/docs/frameworks/nis2' },
      },
      painPoints: {
        title: 'Medvetenhet är en kontroll, och tillsynen granskar den',
        items: [
          {
            title: 'Styrelsen hoppas över',
            description:
              'NIS2 lägger personligt ansvar på ledningen, men utbildningen når sällan dem.',
          },
          {
            title: 'Onboarding är ad hoc',
            description:
              'Nyanställda får behörighet före utbildning, och avgående behåller den efteråt.',
          },
          {
            title: 'Inget bevis på genomförande',
            description: 'Utan register räknas inte utbildningen ni körde i en revision.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Tilldela utbildning',
            description:
              'Rulla ut medvetenhetsutbildning på svenska till personal, ledning och styrelse.',
          },
          {
            title: 'Koppla till HR-händelser',
            description: 'Onboarding- och offboarding-checklistor utlöses från ert HR-system.',
          },
          {
            title: 'Följ genomförande',
            description: 'Genomförande registreras per person, vilket ger revisionsbart bevis.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Svenskt innehåll',
            description: 'Medvetenhetsutbildning skriven för en svensk publik.',
          },
          {
            title: 'Styrelsemodul',
            description: 'En särskild modul för ledning och styrelse, som NIS2 förväntar sig.',
          },
          {
            title: 'Onboarding-checklistor',
            description: 'Nyanställda får rätt behörighet och utbildning i ordning.',
          },
          {
            title: 'Offboarding-checklistor',
            description: 'Behörighet tas bort i tid när någon slutar.',
          },
          {
            title: 'Genomförandespårning',
            description: 'Revisionsbara register över vem som utbildats och när.',
          },
          { title: 'HR-integration', description: 'Checklistor utlöses från ert HR-system.' },
        ],
      },
      stats: [
        { value: 'Styrelse', label: 'Utbilda ledningen, inte bara personal' },
        { value: '<24 h', label: 'Mål för borttagen behörighet vid avgång' },
        { value: 'Spårat', label: 'Genomförande registrerat per person' },
      ],
      related: {
        title: 'Relaterat',
        items: [
          {
            title: 'NIS2',
            description: 'Utbildningskraven som når styrelsen.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Policyhantering',
            description: 'Gör policyer till läskvitton och utbildning.',
            href: '/services/policy-management',
          },
          {
            title: 'Bevisinsamling',
            description: 'Bevisa att offboarding sker inom 24 timmar.',
            href: '/services/evidence-collection',
          },
        ],
      },
      quote: {
        text: 'NIS2 gjorde styrelsen personligt ansvarig. Utbildning som stannar vid IT-teamet missar poängen.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Finns utbildning för styrelsen?',
            answer:
              'Ja. En särskild modul täcker ledning och styrelse, vilket NIS2 specifikt kräver.',
          },
          {
            question: 'Är innehållet på svenska?',
            answer: 'Ja. Medvetenhetsutbildningen är skriven för en svensk publik.',
          },
          {
            question: 'Kopplas det till onboarding och offboarding?',
            answer:
              'Ja. Checklistor utlöses från ert HR-system så att behörighet och utbildning hålls i takt.',
          },
          {
            question: 'Kan vi bevisa genomförande?',
            answer: 'Ja. Genomförande registreras per person för revision.',
          },
        ],
      },
      cta: {
        title: 'Gör medvetenhet bevisbar',
        description: 'Utbilda personal och styrelse, och registrera det.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'trust-center': {
    en: {
      name: 'Trust Center',
      tagline: 'Show your compliance before anyone asks.',
      seo: {
        title: 'Trust Center — OptiTech',
        description:
          'Publish a live trust center backed by your OptiTech program: share certifications and status, answer security reviews with AI, and turn compliance into a sales asset.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Turn compliance into a sales asset',
        description:
          'Publish a public trust page backed by your live OptiTech program. Show certifications and status, share reports under NDA, and shorten your customers sales cycles by answering their security questions before they ask.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See the product page', href: LINKS.productTrustCenter },
      },
      painPoints: {
        title: 'Security reviews slow down every deal',
        items: [
          {
            title: 'Buyers ask the same questions',
            description:
              'Every prospect runs a security review, and you answer the same things by hand each time.',
          },
          {
            title: 'Proof is scattered',
            description:
              'Certifications, reports, and status live in different places, hard to share safely.',
          },
          {
            title: 'Trust is hard to signal',
            description:
              'Without a public posture, prospects cannot see you take security seriously.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Publish your posture',
            description:
              'A public trust page shows your certifications and live compliance status.',
          },
          {
            title: 'Share under NDA',
            description:
              'Gate sensitive reports behind an NDA so buyers get proof without exposure.',
          },
          {
            title: 'Answer with AI',
            description: 'The AI copilot drafts questionnaire answers from your real controls.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Public trust page',
            description: 'A live page backed by your OptiTech program.',
          },
          {
            title: 'Certification display',
            description: 'Show the frameworks you meet, kept current.',
          },
          {
            title: 'NDA-gated reports',
            description: 'Share sensitive documents safely with buyers.',
          },
          {
            title: 'AI questionnaire answers',
            description: 'Draft responses from your existing controls.',
          },
          {
            title: 'Framework snapshots',
            description: 'Publish a frozen view of a framework to share externally.',
          },
          {
            title: 'Backed by live status',
            description: 'What you publish reflects your real posture.',
          },
        ],
      },
      stats: [
        { value: 'Public', label: 'A trust page prospects can self-serve' },
        { value: 'NDA', label: 'Gated sharing of sensitive reports' },
        { value: 'AI', label: 'Draft answers from real controls' },
      ],
      related: {
        title: 'Related',
        items: [
          {
            title: 'Trust Center product',
            description: 'The full product page.',
            href: LINKS.productTrustCenter,
          },
          {
            title: 'AI copilot',
            description: 'Answer security reviews from your controls.',
            href: '/services/ai-copilot',
          },
          {
            title: 'SOC 2',
            description: 'The standard US buyers look for.',
            href: '/docs/frameworks/soc-2',
          },
        ],
      },
      quote: {
        text: 'Compliance stops being a cost center the moment it starts closing deals for you.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Is the trust page public?',
            answer:
              'Yes, and sensitive reports can be gated behind an NDA so buyers get proof without exposure.',
          },
          {
            question: 'Does it stay current?',
            answer:
              'Yes. The page is backed by your live program, so it reflects your real status.',
          },
          {
            question: 'Can it answer security questionnaires?',
            answer:
              'Yes. The AI copilot drafts answers from your existing controls for you to review.',
          },
          {
            question: 'Can we share a single framework?',
            answer: 'Yes. Publish a framework snapshot to share a specific view externally.',
          },
        ],
      },
      cta: {
        title: 'Let prospects see your posture',
        description: 'Publish a trust center backed by your live program.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Trust Center',
      tagline: 'Visa er efterlevnad innan någon frågar.',
      seo: {
        title: 'Trust Center — OptiTech',
        description:
          'Publicera ett levande trust center som backas av ert OptiTech-program: dela certifieringar och status, besvara säkerhetsgranskningar med AI och gör efterlevnad till en säljtillgång.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Gör efterlevnad till en säljtillgång',
        description:
          'Publicera en publik trust-sida som backas av ert levande OptiTech-program. Visa certifieringar och status, dela rapporter under sekretess och korta era kunders säljcykler genom att besvara deras säkerhetsfrågor innan de frågar.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se produktsidan', href: LINKS.productTrustCenter },
      },
      painPoints: {
        title: 'Säkerhetsgranskningar bromsar varje affär',
        items: [
          {
            title: 'Köpare ställer samma frågor',
            description:
              'Varje prospekt kör en säkerhetsgranskning, och ni svarar samma saker för hand varje gång.',
          },
          {
            title: 'Bevisen är utspridda',
            description:
              'Certifieringar, rapporter och status ligger på olika ställen, svåra att dela säkert.',
          },
          {
            title: 'Förtroende är svårt att signalera',
            description:
              'Utan en publik status kan prospekt inte se att ni tar säkerhet på allvar.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Publicera er status',
            description:
              'En publik trust-sida visar era certifieringar och er levande efterlevnadsstatus.',
          },
          {
            title: 'Dela under sekretess',
            description:
              'Lås känsliga rapporter bakom sekretess så köpare får bevis utan exponering.',
          },
          {
            title: 'Svara med AI',
            description: 'AI-copiloten utkastar enkätsvar från era verkliga kontroller.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Publik trust-sida',
            description: 'En levande sida som backas av ert OptiTech-program.',
          },
          {
            title: 'Certifieringsvisning',
            description: 'Visa ramverken ni uppfyller, hållna aktuella.',
          },
          {
            title: 'Sekretesslåsta rapporter',
            description: 'Dela känsliga dokument säkert med köpare.',
          },
          { title: 'AI-enkätsvar', description: 'Utkasta svar från era befintliga kontroller.' },
          {
            title: 'Ramverksavtryck',
            description: 'Publicera en fryst vy av ett ramverk att dela externt.',
          },
          {
            title: 'Backat av live-status',
            description: 'Det ni publicerar speglar er verkliga status.',
          },
        ],
      },
      stats: [
        { value: 'Publik', label: 'En trust-sida prospekt kan självbetjäna' },
        { value: 'Sekretess', label: 'Låst delning av känsliga rapporter' },
        { value: 'AI', label: 'Utkasta svar från verkliga kontroller' },
      ],
      related: {
        title: 'Relaterat',
        items: [
          {
            title: 'Trust Center-produkten',
            description: 'Den fullständiga produktsidan.',
            href: LINKS.productTrustCenter,
          },
          {
            title: 'AI-copilot',
            description: 'Besvara säkerhetsgranskningar från era kontroller.',
            href: '/services/ai-copilot',
          },
          {
            title: 'SOC 2',
            description: 'Standarden amerikanska köpare letar efter.',
            href: '/docs/frameworks/soc-2',
          },
        ],
      },
      quote: {
        text: 'Efterlevnad slutar vara en kostnadspost i samma stund den börjar stänga affärer åt er.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Är trust-sidan publik?',
            answer:
              'Ja, och känsliga rapporter kan låsas bakom sekretess så köpare får bevis utan exponering.',
          },
          {
            question: 'Hålls den aktuell?',
            answer: 'Ja. Sidan backas av ert levande program, så den speglar er verkliga status.',
          },
          {
            question: 'Kan den besvara säkerhetsenkäter?',
            answer:
              'Ja. AI-copiloten utkastar svar från era befintliga kontroller för er att granska.',
          },
          {
            question: 'Kan vi dela ett enskilt ramverk?',
            answer: 'Ja. Publicera ett ramverksavtryck för att dela en specifik vy externt.',
          },
        ],
      },
      cta: {
        title: 'Låt prospekt se er status',
        description: 'Publicera ett trust center som backas av ert levande program.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'audit-mode': {
    en: {
      name: 'Auditor & supervisor mode',
      tagline: 'A read-only portal with a complete, timestamped evidence trail.',
      seo: {
        title: 'Auditor and supervisor mode — OptiTech',
        description:
          'A read-only portal for auditors and supervisory authorities, with a complete timestamped evidence chain and export to PDF and CSV.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Hand auditors a portal, not a shoebox',
        description:
          'Give an auditor or a supervisory authority a read-only portal with the complete, timestamped evidence chain behind every control, and export the whole thing to PDF or CSV.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See ISO 27001', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Audits are painful because evidence is messy',
        items: [
          {
            title: 'Evidence is scattered',
            description: 'Auditors wait while you dig through drives, inboxes, and chat threads.',
          },
          {
            title: 'No chain of custody',
            description: 'Without timestamps, evidence is hard to trust and easy to dispute.',
          },
          {
            title: 'Access is all or nothing',
            description: 'Giving an auditor a login to everything is risky and awkward.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Open a read-only portal',
            description: 'Grant an auditor or supervisor scoped, read-only access to the evidence.',
          },
          {
            title: 'Show the full chain',
            description:
              'Every control links to timestamped evidence, so nothing has to be assembled by hand.',
          },
          {
            title: 'Export the record',
            description: 'Produce a complete PDF or CSV package for the file.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          { title: 'Read-only access', description: 'Scoped access for auditors and supervisors.' },
          { title: 'Timestamped chain', description: 'A verifiable history behind every control.' },
          { title: 'PDF and CSV export', description: 'A complete package for the audit file.' },
          {
            title: 'Statement of Applicability',
            description: 'The SoA ISO 27001 auditors expect.',
          },
          { title: 'Scoped by domain', description: 'Show only what a given reviewer needs.' },
          { title: 'Always current', description: 'The portal reflects your live program.' },
        ],
      },
      stats: [
        { value: 'Read-only', label: 'Safe access for reviewers' },
        { value: 'PDF + CSV', label: 'Complete export for the file' },
        { value: 'Timestamped', label: 'Verifiable evidence chain' },
      ],
      related: {
        title: 'Related frameworks',
        items: [
          {
            title: 'ISO 27001',
            description: 'The auditor portal and Statement of Applicability.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'SOC 2',
            description: 'Evidence packaged for your SOC 2 auditor.',
            href: '/docs/frameworks/soc-2',
          },
          {
            title: 'NIS2',
            description: 'Show supervisory authorities active governance.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'An auditor should never have to ask you for a screenshot. The chain of custody should already be there.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Can auditors see everything or just what I choose?',
            answer:
              'Access is read-only and can be scoped by domain, so reviewers see only what they need.',
          },
          {
            question: 'Is the evidence timestamped?',
            answer: 'Yes. Every control links to a verifiable, timestamped evidence chain.',
          },
          {
            question: 'Can we export the record?',
            answer: 'Yes. Produce a complete PDF or CSV package for the audit file.',
          },
          {
            question: 'Does it include the Statement of Applicability?',
            answer: 'Yes. The SoA is produced per assessment for ISO 27001.',
          },
        ],
      },
      cta: {
        title: 'Make your next audit boring',
        description: 'Give reviewers a portal with the whole chain already in place.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Revisions- & tillsynsläge',
      tagline: 'En läsbehörig portal med ett komplett, tidsstämplat bevisspår.',
      seo: {
        title: 'Revisions- och tillsynsläge — OptiTech',
        description:
          'En läsbehörig portal för revisorer och tillsynsmyndigheter, med en komplett tidsstämplad beviskedja och export till PDF och CSV.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Ge revisorn en portal, inte en skokartong',
        description:
          'Ge en revisor eller tillsynsmyndighet en läsbehörig portal med den kompletta, tidsstämplade beviskedjan bakom varje kontroll, och exportera alltihop till PDF eller CSV.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se ISO 27001', href: '/docs/frameworks/iso-27001' },
      },
      painPoints: {
        title: 'Revisioner gör ont för att bevisen är röriga',
        items: [
          {
            title: 'Bevisen är utspridda',
            description: 'Revisorer väntar medan ni gräver genom diskar, inkorgar och chattrådar.',
          },
          {
            title: 'Ingen spårbarhetskedja',
            description: 'Utan tidsstämplar är bevis svåra att lita på och lätta att ifrågasätta.',
          },
          {
            title: 'Åtkomst är allt eller inget',
            description: 'Att ge en revisor inloggning till allt är riskabelt och obekvämt.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Öppna en läsbehörig portal',
            description: 'Ge en revisor eller tillsyn avgränsad, läsbehörig åtkomst till bevisen.',
          },
          {
            title: 'Visa hela kedjan',
            description:
              'Varje kontroll länkar till tidsstämplade bevis, så inget behöver sättas ihop för hand.',
          },
          {
            title: 'Exportera underlaget',
            description: 'Ta fram ett komplett PDF- eller CSV-paket för akten.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Läsbehörig åtkomst',
            description: 'Avgränsad åtkomst för revisorer och tillsyn.',
          },
          {
            title: 'Tidsstämplad kedja',
            description: 'En verifierbar historik bakom varje kontroll.',
          },
          { title: 'PDF- och CSV-export', description: 'Ett komplett paket för revisionsakten.' },
          {
            title: 'Tillämplighetsförklaring',
            description: 'Den SoA som ISO 27001-revisorer förväntar sig.',
          },
          { title: 'Avgränsat per domän', description: 'Visa bara det en viss granskare behöver.' },
          { title: 'Alltid aktuell', description: 'Portalen speglar ert levande program.' },
        ],
      },
      stats: [
        { value: 'Läsbehörig', label: 'Säker åtkomst för granskare' },
        { value: 'PDF + CSV', label: 'Komplett export för akten' },
        { value: 'Tidsstämplat', label: 'Verifierbar beviskedja' },
      ],
      related: {
        title: 'Relaterade ramverk',
        items: [
          {
            title: 'ISO 27001',
            description: 'Revisorsportalen och tillämplighetsförklaringen.',
            href: '/docs/frameworks/iso-27001',
          },
          {
            title: 'SOC 2',
            description: 'Bevis paketerade för er SOC 2-revisor.',
            href: '/docs/frameworks/soc-2',
          },
          {
            title: 'NIS2',
            description: 'Visa tillsynsmyndigheter aktiv styrning.',
            href: '/docs/frameworks/nis2',
          },
        ],
      },
      quote: {
        text: 'En revisor ska aldrig behöva be er om en skärmdump. Spårbarhetskedjan ska redan finnas där.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Ser revisorer allt eller bara det jag väljer?',
            answer:
              'Åtkomsten är läsbehörig och kan avgränsas per domän, så granskare ser bara det de behöver.',
          },
          {
            question: 'Är bevisen tidsstämplade?',
            answer: 'Ja. Varje kontroll länkar till en verifierbar, tidsstämplad beviskedja.',
          },
          {
            question: 'Kan vi exportera underlaget?',
            answer: 'Ja. Ta fram ett komplett PDF- eller CSV-paket för revisionsakten.',
          },
          {
            question: 'Ingår tillämplighetsförklaringen?',
            answer: 'Ja. SoA tas fram per bedömning för ISO 27001.',
          },
        ],
      },
      cta: {
        title: 'Gör er nästa revision tråkig',
        description: 'Ge granskare en portal med hela kedjan redan på plats.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  dashboards: {
    en: {
      name: 'Dashboards & board reporting',
      tagline: 'Compliance score per framework, trend over time, board report in one click.',
      seo: {
        title: 'Dashboards and board reporting — OptiTech',
        description:
          'A compliance score per framework, trend over time, and a board report in one click, because NIS2 expects the board to demonstrate active governance.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'Governance the board can see at a glance',
        description:
          'Track a compliance score per framework and its trend over time, and produce a board report in one click. NIS2 expects the board to show active oversight, so give them a view they can act on.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'See NIS2', href: '/docs/frameworks/nis2' },
      },
      painPoints: {
        title: 'The board is accountable but flying blind',
        items: [
          {
            title: 'No single score',
            description:
              'Compliance status is buried in tools and spreadsheets, not summarized anywhere.',
          },
          {
            title: 'No trend',
            description: 'A snapshot cannot show whether things are getting better or worse.',
          },
          {
            title: 'Reporting is manual',
            description: 'Building a board deck by hand every quarter is slow and error-prone.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'See your score',
            description:
              'A live compliance score per framework, from your real controls and evidence.',
          },
          {
            title: 'Track the trend',
            description: 'Watch progress over time so you can show direction, not just a number.',
          },
          {
            title: 'Report in one click',
            description: 'Produce a board report that demonstrates active governance on demand.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Score per framework',
            description: 'A clear compliance score for each active framework.',
          },
          { title: 'Trend over time', description: 'Progress tracked so direction is obvious.' },
          {
            title: 'One-click board report',
            description: 'Governance evidence the board can present.',
          },
          {
            title: 'Custom dashboards',
            description: 'Build views around the metrics you care about.',
          },
          {
            title: 'Live metrics',
            description: 'Backed by continuous evidence, not manual entry.',
          },
          {
            title: 'Empty-state guidance',
            description: 'Clear next steps when a framework has no data yet.',
          },
        ],
      },
      stats: [
        { value: '1 click', label: 'Board report on demand' },
        { value: 'Per framework', label: 'Compliance score at a glance' },
        { value: 'Trend', label: 'Progress tracked over time' },
      ],
      related: {
        title: 'Related',
        items: [
          {
            title: 'NIS2',
            description: 'The governance the board must demonstrate.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Evidence collection',
            description: 'The live data behind your score.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Risk register',
            description: 'Feed risk into your board reporting.',
            href: '/services/risk-register',
          },
        ],
      },
      quote: {
        text: 'NIS2 asks the board to govern, not just approve. That takes a number they can trust and a trend they can read.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'Is the score based on real data?',
            answer:
              'Yes. It is computed from your actual controls and evidence, not entered by hand.',
          },
          {
            question: 'Can we show a trend?',
            answer: 'Yes. Progress is tracked over time so you can show direction.',
          },
          {
            question: 'Can we produce a board report quickly?',
            answer: 'Yes. A board report is generated in one click from the live program.',
          },
          {
            question: 'Can we customize dashboards?',
            answer: 'Yes. Build views around the metrics that matter to you.',
          },
        ],
      },
      cta: {
        title: 'Give the board a view they can govern with',
        description: 'Score, trend, and a one-click board report.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Dashboards & ledningsrapportering',
      tagline: 'Efterlevnadspoäng per ramverk, trend över tid, styrelserapport med ett klick.',
      seo: {
        title: 'Dashboards och ledningsrapportering — OptiTech',
        description:
          'En efterlevnadspoäng per ramverk, trend över tid och en styrelserapport med ett klick, eftersom NIS2 förväntar sig att styrelsen visar aktiv styrning.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'Styrning styrelsen ser med en blick',
        description:
          'Följ en efterlevnadspoäng per ramverk och dess trend över tid, och ta fram en styrelserapport med ett klick. NIS2 förväntar sig att styrelsen visar aktiv tillsyn, så ge dem en vy de kan agera på.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Se NIS2', href: '/docs/frameworks/nis2' },
      },
      painPoints: {
        title: 'Styrelsen är ansvarig men flyger blint',
        items: [
          {
            title: 'Ingen samlad poäng',
            description:
              'Efterlevnadsstatus ligger begravd i verktyg och kalkylark, inte sammanfattad någonstans.',
          },
          {
            title: 'Ingen trend',
            description: 'En ögonblicksbild kan inte visa om det blir bättre eller sämre.',
          },
          {
            title: 'Rapportering är manuell',
            description:
              'Att bygga ett styrelseunderlag för hand varje kvartal är långsamt och felbenäget.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Se er poäng',
            description:
              'En levande efterlevnadspoäng per ramverk, från era verkliga kontroller och bevis.',
          },
          {
            title: 'Följ trenden',
            description: 'Se framsteg över tid så ni kan visa riktning, inte bara ett tal.',
          },
          {
            title: 'Rapportera med ett klick',
            description: 'Ta fram en styrelserapport som visar aktiv styrning på begäran.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Poäng per ramverk',
            description: 'En tydlig efterlevnadspoäng för varje aktivt ramverk.',
          },
          { title: 'Trend över tid', description: 'Framsteg följt så att riktningen är tydlig.' },
          {
            title: 'Styrelserapport med ett klick',
            description: 'Styrningsbevis styrelsen kan presentera.',
          },
          { title: 'Egna dashboards', description: 'Bygg vyer kring de mått ni bryr er om.' },
          {
            title: 'Live-mått',
            description: 'Backat av kontinuerliga bevis, inte manuell inmatning.',
          },
          {
            title: 'Vägledning vid tom vy',
            description: 'Tydliga nästa steg när ett ramverk saknar data än.',
          },
        ],
      },
      stats: [
        { value: '1 klick', label: 'Styrelserapport på begäran' },
        { value: 'Per ramverk', label: 'Efterlevnadspoäng med en blick' },
        { value: 'Trend', label: 'Framsteg följt över tid' },
      ],
      related: {
        title: 'Relaterat',
        items: [
          {
            title: 'NIS2',
            description: 'Styrningen styrelsen måste visa.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'Bevisinsamling',
            description: 'Live-datan bakom er poäng.',
            href: '/services/evidence-collection',
          },
          {
            title: 'Riskregister',
            description: 'Mata risk in i er styrelserapportering.',
            href: '/services/risk-register',
          },
        ],
      },
      quote: {
        text: 'NIS2 ber styrelsen att styra, inte bara godkänna. Det kräver ett tal de kan lita på och en trend de kan läsa.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Bygger poängen på verklig data?',
            answer:
              'Ja. Den räknas fram från era faktiska kontroller och bevis, inte inmatad för hand.',
          },
          {
            question: 'Kan vi visa en trend?',
            answer: 'Ja. Framsteg följs över tid så ni kan visa riktning.',
          },
          {
            question: 'Kan vi ta fram en styrelserapport snabbt?',
            answer: 'Ja. En styrelserapport genereras med ett klick från det levande programmet.',
          },
          {
            question: 'Kan vi anpassa dashboards?',
            answer: 'Ja. Bygg vyer kring de mått som betyder något för er.',
          },
        ],
      },
      cta: {
        title: 'Ge styrelsen en vy de kan styra med',
        description: 'Poäng, trend och en styrelserapport med ett klick.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },

  'framework-library': {
    en: {
      name: 'Framework library & control mapping',
      tagline: 'Do it once, prove it everywhere.',
      seo: {
        title: 'Framework library and control mapping — OptiTech',
        description:
          'A library of frameworks with cross-mapped controls, so one control satisfies requirements across NIS2, DORA, GDPR, ISO 27001, and more. Do it once, prove it everywhere.',
      },
      hero: {
        eyebrow: 'Service',
        title: 'One control, every framework it satisfies',
        description:
          'A library of frameworks built from the source texts, with controls cross-mapped between them. Collect evidence once and it counts everywhere it applies, so adding a new framework starts from what you already have.',
        primaryCta: { label: 'Book a free gap analysis', href: CONTACT },
        secondaryCta: { label: 'Browse all frameworks', href: '/frameworks' },
      },
      painPoints: {
        title: 'Every new framework feels like starting over',
        items: [
          {
            title: 'Duplicated effort',
            description: 'The same control is documented separately for ISO, SOC 2, and NIS2.',
          },
          {
            title: 'Generic mappings',
            description:
              'Off-the-shelf NIS2 support is a mapping, not built from the Swedish legal text.',
          },
          {
            title: 'No reuse',
            description: 'Adding a framework means redoing evidence you already have.',
          },
        ],
      },
      steps: {
        title: 'How it works',
        items: [
          {
            title: 'Activate a framework',
            description:
              'Start from the controls you already have; your plan sets how many can be active at once.',
          },
          {
            title: 'Controls cross-map',
            description:
              'Each control links to the requirements it satisfies across every framework.',
          },
          {
            title: 'Prove once, everywhere',
            description:
              'Evidence collected for one framework counts wherever the same control applies.',
          },
        ],
      },
      features: {
        title: 'What you get',
        items: [
          {
            title: 'Source-built frameworks',
            description: 'The Nordic core built from the legal texts and MSBFS.',
          },
          {
            title: 'Cross-mapping engine',
            description: 'One control mapped across many frameworks.',
          },
          {
            title: 'Reuse on activation',
            description: 'A new framework starts from your existing controls.',
          },
          {
            title: 'Coverage view',
            description: 'See which frameworks a control reaches and the gaps.',
          },
          {
            title: 'Growing catalog',
            description: 'NIS2, DORA, GDPR, ISO 27001, the AI Act, CRA, SOC 2, and more.',
          },
          {
            title: 'AI-reviewed mappings',
            description: 'Cross-mappings surfaced as suggestions, clearly labeled.',
          },
        ],
      },
      stats: [
        { value: '10', label: 'Frameworks and standards covered' },
        { value: '1×', label: 'Collect evidence once' },
        { value: 'Mapped', label: 'Controls linked across frameworks' },
      ],
      related: {
        title: 'Explore the frameworks',
        items: [
          {
            title: 'All frameworks',
            description: 'Browse the full catalog.',
            href: '/frameworks',
          },
          {
            title: 'NIS2',
            description: 'Built from the Swedish legal text and MSBFS.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'ISO 27001',
            description: 'The full control catalog.',
            href: '/docs/frameworks/iso-27001',
          },
        ],
      },
      quote: {
        text: 'Do it once, prove it everywhere. Compliance should compound, not repeat.',
        author: 'OptiTech',
        role: 'Product principle',
      },
      faq: {
        title: 'Questions',
        items: [
          {
            question: 'How many frameworks can we run at once?',
            answer:
              'Your plan sets how many frameworks can be active at the same time; a new one reuses your existing controls.',
          },
          {
            question: 'Is NIS2 a generic mapping?',
            answer:
              'No. The Nordic core is built from the source legal texts and MSB regulations, not mapped from a foreign standard.',
          },
          {
            question: 'Does one control really count in several frameworks?',
            answer:
              'Yes. Controls are cross-mapped, so evidence counts everywhere the control applies.',
          },
          {
            question: 'Which frameworks are included?',
            answer:
              'NIS2, DORA, GDPR, ISO 27001, the EU AI Act, CRA, SOC 2, ISO 27701, ISO 22301, and TISAX.',
          },
        ],
      },
      cta: {
        title: 'Stop redoing the same work',
        description: 'Map your controls once and prove them across every framework.',
        button: { label: 'Book a free gap analysis', href: CONTACT },
      },
    },
    sv: {
      name: 'Ramverksbibliotek & kravmappning',
      tagline: 'Gör en gång, bevisa överallt.',
      seo: {
        title: 'Ramverksbibliotek och kravmappning — OptiTech',
        description:
          'Ett bibliotek av ramverk med korsmappade kontroller, så att en kontroll uppfyller krav över NIS2, DORA, GDPR, ISO 27001 med flera. Gör en gång, bevisa överallt.',
      },
      hero: {
        eyebrow: 'Tjänst',
        title: 'En kontroll, varje ramverk den uppfyller',
        description:
          'Ett bibliotek av ramverk byggt från källtexterna, med kontroller korsmappade mellan dem. Samla bevis en gång och det räknas överallt det gäller, så att lägga till ett nytt ramverk börjar från det ni redan har.',
        primaryCta: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
        secondaryCta: { label: 'Bläddra bland alla ramverk', href: '/frameworks' },
      },
      painPoints: {
        title: 'Varje nytt ramverk känns som att börja om',
        items: [
          {
            title: 'Dubbelarbete',
            description: 'Samma kontroll dokumenteras separat för ISO, SOC 2 och NIS2.',
          },
          {
            title: 'Generiska mappningar',
            description: 'Färdigt NIS2-stöd är en mappning, inte byggt från den svenska lagtexten.',
          },
          {
            title: 'Ingen återanvändning',
            description: 'Att lägga till ett ramverk innebär att göra om bevis ni redan har.',
          },
        ],
      },
      steps: {
        title: 'Så fungerar det',
        items: [
          {
            title: 'Aktivera ett ramverk',
            description:
              'Börja från kontrollerna ni redan har; er plan avgör hur många som kan vara aktiva samtidigt.',
          },
          {
            title: 'Kontroller korsmappas',
            description: 'Varje kontroll länkar till kraven den uppfyller över varje ramverk.',
          },
          {
            title: 'Bevisa en gång, överallt',
            description: 'Bevis som samlats för ett ramverk räknas där samma kontroll gäller.',
          },
        ],
      },
      features: {
        title: 'Det här får ni',
        items: [
          {
            title: 'Källbyggda ramverk',
            description: 'Den nordiska kärnan byggd från lagtexterna och MSBFS.',
          },
          { title: 'Korsmappningsmotor', description: 'En kontroll mappad över många ramverk.' },
          {
            title: 'Återanvändning vid aktivering',
            description: 'Ett nytt ramverk börjar från era befintliga kontroller.',
          },
          { title: 'Täckningsvy', description: 'Se vilka ramverk en kontroll når och gapen.' },
          {
            title: 'Växande katalog',
            description: 'NIS2, DORA, GDPR, ISO 27001, AI Act, CRA, SOC 2 med flera.',
          },
          {
            title: 'AI-granskade mappningar',
            description: 'Korsmappningar visas som förslag, tydligt märkta.',
          },
        ],
      },
      stats: [
        { value: '10', label: 'Ramverk och standarder som täcks' },
        { value: '1 gång', label: 'Samla bevis en gång' },
        { value: 'Mappat', label: 'Kontroller länkade över ramverk' },
      ],
      related: {
        title: 'Utforska ramverken',
        items: [
          {
            title: 'Alla ramverk',
            description: 'Bläddra i hela katalogen.',
            href: '/frameworks',
          },
          {
            title: 'NIS2',
            description: 'Byggt från den svenska lagtexten och MSBFS.',
            href: '/docs/frameworks/nis2',
          },
          {
            title: 'ISO 27001',
            description: 'Hela kontrollkatalogen.',
            href: '/docs/frameworks/iso-27001',
          },
        ],
      },
      quote: {
        text: 'Gör en gång, bevisa överallt. Efterlevnad ska ackumuleras, inte upprepas.',
        author: 'OptiTech',
        role: 'Produktprincip',
      },
      faq: {
        title: 'Frågor',
        items: [
          {
            question: 'Hur många ramverk kan vi köra samtidigt?',
            answer:
              'Er plan avgör hur många ramverk som kan vara aktiva samtidigt; ett nytt återanvänder era befintliga kontroller.',
          },
          {
            question: 'Är NIS2 en generisk mappning?',
            answer:
              'Nej. Den nordiska kärnan är byggd från källtexterna och MSB:s föreskrifter, inte mappad från en utländsk standard.',
          },
          {
            question: 'Räknas en kontroll verkligen i flera ramverk?',
            answer: 'Ja. Kontroller är korsmappade, så bevis räknas överallt kontrollen gäller.',
          },
          {
            question: 'Vilka ramverk ingår?',
            answer:
              'NIS2, DORA, GDPR, ISO 27001, EU:s AI Act, CRA, SOC 2, ISO 27701, ISO 22301 och TISAX.',
          },
        ],
      },
      cta: {
        title: 'Sluta göra om samma arbete',
        description: 'Mappa era kontroller en gång och bevisa dem över varje ramverk.',
        button: { label: 'Boka en kostnadsfri gap-analys', href: CONTACT },
      },
    },
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES);

// Product scene per service, so no two pages open with the same visual.
const VISUALS = {
  'evidence-collection': 'evidence',
  'ai-copilot': 'orbit',
  'supplier-risk': 'register',
  'gap-analysis': 'mapping',
  'policy-management': 'register',
  'risk-register': 'register',
  training: 'timeline',
  'trust-center': 'console',
  'audit-mode': 'evidence',
  dashboards: 'console',
  'framework-library': 'mapping',
};

export const getServiceVisual = (slug) => VISUALS[slug] || 'console';

// Widget shown next to the mid-page section; falls back to a contrasting scene.
const DETAIL_VISUALS = {
  'ai-copilot': 'chat',
  'trust-center': 'chat',
  'gap-analysis': 'console',
  'framework-library': 'console',
};

export const getServiceDetailVisual = (slug) =>
  DETAIL_VISUALS[slug] || (VISUALS[slug] === 'console' ? 'evidence' : 'console');

export const getService = (slug) => SERVICES[slug] || null;

export const getServiceList = (locale) =>
  SERVICE_SLUGS.map((slug) => {
    const entry = SERVICES[slug][locale] || SERVICES[slug].en;
    return { slug, href: `/services/${slug}`, name: entry.name, tagline: entry.tagline };
  });

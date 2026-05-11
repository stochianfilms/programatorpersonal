export type IndustryPageConfig = {
  slug: string;
  industryName: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  operationalProblems: string[];
  usefulModules: { title: string; description: string }[];
  exampleWorkflows: { title: string; body: string }[];
  recommendedServices: string[];
  architectureModules: string[];
  beforeAfter: { before: string; after: string };
  faqs: { q: string; a: string }[];
  ctaText: string;
  relatedIndustrySlugs: string[];
  relatedServiceSlugs: string[];
  visualType: string;
};

const industryPages: Record<string, IndustryPageConfig> = {
  "software-pentru-service-uri": {
    slug: "software-pentru-service-uri",
    industryName: "Service-uri auto",
    title: "Software pentru service-uri auto — fișe, programări, stoc și rapoarte într-un singur sistem.",
    seoTitle: "Software pentru service auto | Programator Personal",
    seoDescription: "Sistem custom pentru service-uri auto: fișe electronice, programări, gestiune piese, devize și notificări clienți.",
    heroLead: "Fișele service pe hârtie, devizele în Excel și clientul care sună să întrebe statusul mașinii — există un mod mai clar de a conduce un service.",
    operationalProblems: [
      "Fișele de service pe hârtie se pierd sau nu sunt completate corect",
      "Clientul sună mereu să întrebe statusul mașinii",
      "Stocul de piese e urmărit în Excel sau din memorie",
      "Devizele se fac manual — erori de calcul și timp pierdut",
      "Tehnicienii nu au vizibilitate clară asupra programului zilei",
      "Rapoartele de productivitate per tehnician lipsesc sau se fac greu",
    ],
    usefulModules: [
      { title: "Fișă service electronică", description: "Înregistrare completă: client, mașină, defect, diagnoză, lucrări, piese, durata." },
      { title: "Programări online", description: "Clientul rezervă singur, tehnicianul vede programul, capacitatea e vizibilă." },
      { title: "Gestiune piese", description: "Stoc în timp real, rezervare automată la creare fișă, alertă la epuizare." },
      { title: "Generator devize", description: "Deviz generat automat din fișă — manoperă plus piese, cu TVA calculat." },
      { title: "Notificări clienți", description: "SMS sau email automat la intrare, la diagnoză, la finalizare." },
      { title: "Dashboard productivitate", description: "Lucrări per tehnician, timp mediu pe tip intervenție, venit per zi." },
    ],
    exampleWorkflows: [
      {
        title: "Flux complet service auto",
        body: "Client rezervă → fișă creată automat → tehnicianul preia → piese rezervate → deviz generat → client notificat la finalizare → factură emisă automat.",
      },
    ],
    recommendedServices: ["crm-custom", "platforma-rezervari", "dashboard-rapoarte", "automatizari-business"],
    architectureModules: ["Programări online", "Fișă service", "Gestiune piese", "Generator devize", "Notificări SMS/email", "Dashboard management"],
    beforeAfter: {
      before: "Fișe pe hârtie, stoc din memorie, devize manuale, client care sună pentru status",
      after: "Fișe electronice, stoc live, devize automate, notificări automate la fiecare etapă",
    },
    faqs: [
      {
        q: "Sistemul funcționează și pentru un service mic, cu 2-3 tehnicieni?",
        a: "Da, sistemul se dimensionează pe nevoile tale. Un service mic beneficiază la fel de mult — mai puțin haos, fișe clare, clienți mulțumiți că primesc notificări fără să sune.",
      },
      {
        q: "Pot integra sistemul cu programul meu de facturare existent?",
        a: "În cele mai multe cazuri da. Conectăm cu SmartBill, Saga, sau alte soluții de facturare prin export/import sau API. Devizul devine factură cu un singur click.",
      },
      {
        q: "Clienții văd statusul mașinii în timp real sau doar primesc notificări?",
        a: "Ambele variante sunt posibile. Poți trimite SMS/email la fiecare etapă sau poți oferi un link de tracking unde clientul vede singur unde e mașina în flux.",
      },
    ],
    ctaText: "Vreau software pentru service-ul meu",
    relatedIndustrySlugs: ["software-pentru-clinici", "software-pentru-saloane"],
    relatedServiceSlugs: ["crm-custom", "platforma-rezervari", "dashboard-rapoarte"],
    visualType: "booking-calendar",
  },

  "software-pentru-clinici": {
    slug: "software-pentru-clinici",
    industryName: "Clinici și cabinete medicale",
    title: "Software pentru clinici — pacienți, programări, dosare și documente organizate.",
    seoTitle: "Software pentru clinici medicale | Programator Personal",
    seoDescription: "Sistem custom pentru clinici: programări online, dosar pacient, consimțăminte, notificări și rapoarte medicale.",
    heroLead: "O clinică cu programări pe WhatsApp, dosare pe hârtie și fișe completate manual — are toate ingredientele pentru erori și timp pierdut.",
    operationalProblems: [
      "Programările vin pe telefon și WhatsApp — suprapuneri frecvente",
      "Dosarele pacienților sunt pe hârtie sau în fișiere Word dispersate",
      "Consimțămintele și documentele medicale se gestionează greu",
      "Recepția pierde timp cu confirmări manuale de programări",
      "Rapoartele per medic sau per tip consultație lipsesc",
      "Plata și facturarea se fac manual per pacient",
    ],
    usefulModules: [
      { title: "Calendar programări", description: "Calendar online per medic sau cabinet, rezervare 24/7, sloturi configurabile." },
      { title: "Dosar electronic pacient", description: "Fișă completă: consultații, analize, documente, tratamente, alergii, istoric." },
      { title: "Consimțăminte digitale", description: "Formulare generate automat, completate de pacient înainte de consultație." },
      { title: "Reminder-uri automate", description: "SMS sau email cu 24h și 2h înainte de programare — no-show scade dramatic." },
      { title: "Rapoarte per medic", description: "Număr consultații, tip intervenție, venit generat per medic și perioadă." },
      { title: "Facturare integrată", description: "Factură emisă automat la finalizarea consultației, integrare cu Casa de Sănătate." },
    ],
    exampleWorkflows: [
      {
        title: "Flux pacient nou",
        body: "Pacient rezervă online → completează formular înainte → reminder cu 24h → consultație → document medical generat → factură emisă → reminder pentru urmărire.",
      },
    ],
    recommendedServices: ["platforma-rezervari", "crm-custom", "generator-contracte", "automatizari-business"],
    architectureModules: ["Calendar programări", "Dosar pacient", "Consimțăminte", "Notificări automate", "Rapoarte medicale", "Facturare"],
    beforeAfter: {
      before: "Telefon și WhatsApp, dosare pe hârtie, no-show frecvent, recepție suprasolicitată",
      after: "Calendar online, dosar electronic, confirmare automată, no-show redus, rapoarte live",
    },
    faqs: [
      {
        q: "Sistemul respectă GDPR pentru datele medicale ale pacienților?",
        a: "Da, construim cu GDPR integrat: stocare securizată, acces pe roluri, posibilitate de ștergere la cerere și log complet al accesărilor. Datele medicale sunt tratate cu protecție maximă.",
      },
      {
        q: "Poate un pacient să-și vadă istoricul de consultații online?",
        a: "Opțional, da. Poți activa un portal pacient unde acesta vede consultațiile anterioare, rezultatele analizelor și programările viitoare — fără să mai sune recepția.",
      },
      {
        q: "Cum funcționează sistemul dacă am mai mulți medici cu specialități diferite?",
        a: "Fiecare medic are propriul calendar cu tipurile lui de consultații și duratele specifice. Pacientul alege specialitatea și medicul, vede disponibilitatea reală și rezervă.",
      },
    ],
    ctaText: "Vreau software pentru clinica mea",
    relatedIndustrySlugs: ["software-pentru-saloane", "software-pentru-service-uri"],
    relatedServiceSlugs: ["platforma-rezervari", "crm-custom"],
    visualType: "booking-calendar",
  },

  "software-pentru-saloane": {
    slug: "software-pentru-saloane",
    industryName: "Saloane de înfrumusețare",
    title: "Software pentru saloane — calendar, clienți, abonamente și vânzări într-un singur loc.",
    seoTitle: "Software pentru saloane de înfrumusețare | Programator Personal",
    seoDescription: "Sistem custom pentru saloane: calendar online, fișă client, abonamente, produse și rapoarte de vânzări.",
    heroLead: "Un salon cu programările pe hârtie, clienții ținuți minte și abonamentele în Excel — poate face mult mai mult cu un sistem simplu și clar.",
    operationalProblems: [
      "Programările se suprapun sau au goluri pentru că nu e vizibilitate clară",
      "Nu știi câte vizite a avut un client și ce servicii a ales",
      "Abonamentele se urmăresc manual — consumul nu e clar",
      "Produsele vândute nu sunt urmărite consistent",
      "Nu știi care specialist generează cel mai mult venit",
      "Clienții uită programările — no-show frecvent",
    ],
    usefulModules: [
      { title: "Calendar per specialist", description: "Fiecare specialist cu calendarul lui, sloturi configurabile, vizibilitate totală." },
      { title: "Fișă client completă", description: "Istoric servicii, produse cumpărate, preferințe, alergii, abonamente active." },
      { title: "Gestiune abonamente", description: "Abonamente cu număr de ședințe, expirate automat, consum urmărit." },
      { title: "Rezervare online", description: "Clientul rezervă singur, alege specialistul și serviciul, confirmare automată." },
      { title: "Rapoarte vânzări", description: "Venit per specialist, tip serviciu, produs vândut, perioadă." },
      { title: "Notificări clienți", description: "Reminder cu 24h, urare de ziua de naștere, oferte speciale." },
    ],
    exampleWorkflows: [
      {
        title: "Flux client cu abonament",
        body: "Client rezervă online → alege specialistul → confirmare → programarea consumă o ședință din abonament → la final primește bon și urmărire.",
      },
    ],
    recommendedServices: ["platforma-rezervari", "crm-custom", "dashboard-rapoarte"],
    architectureModules: ["Calendar", "Rezervare online", "Fișă client", "Abonamente", "Vânzări produse", "Rapoarte"],
    beforeAfter: {
      before: "Agendă fizică, clienți ținuți minte, abonamente în Excel, no-show frecvent",
      after: "Calendar digital, fișe complete, abonamente automate, programări 24/7, no-show redus",
    },
    faqs: [
      {
        q: "Cum gestionez abonamentele cu număr de ședințe versus abonamentele lunare?",
        a: "Ambele tipuri sunt suportate. Abonamentul cu ședințe scade la fiecare vizită, cel lunar se resetează la data fixă. Clientul vede oricând câte ședințe mai are disponibile.",
      },
      {
        q: "Clienții pot rezerva și pe mobil, fără o aplicație instalată?",
        a: "Da, platforma de rezervări e accesibilă de pe orice dispozitiv, în browser. Nu e nevoie de aplicație instalată — clientul intră pe un link și rezervă în 30 de secunde.",
      },
      {
        q: "Pot vedea care sunt cele mai profitabile servicii sau specialiști?",
        a: "Da, dashboardul include rapoarte de venit per specialist, per tip serviciu și per perioadă. Poți vedea rapid ce funcționează și unde e loc de optimizat.",
      },
    ],
    ctaText: "Vreau software pentru salonul meu",
    relatedIndustrySlugs: ["software-pentru-clinici", "software-pentru-service-uri"],
    relatedServiceSlugs: ["platforma-rezervari", "crm-custom"],
    visualType: "booking-calendar",
  },

  "software-pentru-agentii-imobiliare": {
    slug: "software-pentru-agentii-imobiliare",
    industryName: "Agenții imobiliare",
    title: "Software pentru agenții imobiliare — lead-uri, proprietăți, agenți și tranzacții organizate.",
    seoTitle: "Software pentru agenții imobiliare | CRM imobiliar | Programator Personal",
    seoDescription: "CRM și sistem de gestiune pentru agenții imobiliare. Lead-uri, proprietăți, agenți, follow-up automat și rapoarte de performanță.",
    heroLead: "O agenție imobiliară cu lead-urile în inbox, proprietățile în Excel și follow-up-urile din memorie — pierde tranzacții pe care le-a câștigat deja.",
    operationalProblems: [
      "Lead-uri venite din mai multe surse — neorganizate și neatribuite",
      "Nu știi în ce stadiu e fiecare tranzacție sau negociere",
      "Follow-up-urile depind de memoria agentului, nu de sistem",
      "Proprietățile sunt ținute în Excel sau în aplicații separate",
      "Rapoartele de performanță per agent se fac manual și greu",
      "Documentele de tranzacție se gestionează haotic",
    ],
    usefulModules: [
      { title: "Pipeline tranzacții", description: "Vizualizare clară a fiecărei tranzacții: lead, vizionare, ofertă, negociere, contract." },
      { title: "Bază de date proprietăți", description: "Proprietăți cu toate detaliile, poze, documente, disponibilitate, preț." },
      { title: "Gestiune lead-uri", description: "Lead-uri din site, portale, telefon — centralizate și atribuite automat." },
      { title: "Follow-up automat", description: "Reminder la 3, 7, 14 zile pentru fiecare lead necontactat sau neînchis." },
      { title: "Matching client-proprietate", description: "Filtrare automată a proprietăților potrivite pentru cerințele unui client." },
      { title: "Rapoarte per agent", description: "Lead-uri, vizionări, oferte, tranzacții — per agent și perioadă." },
    ],
    exampleWorkflows: [
      {
        title: "Flux lead imobiliar",
        body: "Lead din site → atribuit agentului → email automat de confirmare → reminder vizionare → ofertă înregistrată → negociere urmărită → contract generat → tranzacție finalizată.",
      },
    ],
    recommendedServices: ["crm-custom", "automatizari-business", "dashboard-rapoarte", "generator-contracte"],
    architectureModules: ["Pipeline vânzări", "Bază proprietăți", "Gestiune lead-uri", "Follow-up automat", "Generator contracte", "Rapoarte agenți"],
    beforeAfter: {
      before: "Lead-uri în inbox, proprietăți în Excel, follow-up din memorie, rapoarte manuale",
      after: "Pipeline vizual, bază de date proprietăți, follow-up automat, rapoarte live per agent",
    },
    faqs: [
      {
        q: "Pot importa portofoliul de proprietăți existent?",
        a: "Da, migrăm portofoliul din Excel sau din alte sisteme. Mapăm câmpurile existente și importăm tot, inclusiv pozele și documentele asociate.",
      },
      {
        q: "Sistemul se integrează cu portalele imobiliare pentru importul automat de lead-uri?",
        a: "Putem integra cu principalele portale imobiliare din România pentru importul automat de lead-uri. Lead-urile ajung direct în CRM și sunt atribuite automat agentului responsabil.",
      },
      {
        q: "Cum funcționează sistemul dacă un agent pleacă din agenție?",
        a: "Toate datele rămân în sistem — lead-uri, clienți, istoricul comunicărilor. Poți reatribui portofoliul agentului plecat altui coleg, fără să pierzi nimic.",
      },
    ],
    ctaText: "Vreau software pentru agenția mea imobiliară",
    relatedIndustrySlugs: ["software-pentru-firme-de-constructii", "software-pentru-firme-de-evenimente"],
    relatedServiceSlugs: ["crm-custom", "dashboard-rapoarte"],
    visualType: "crm-pipeline",
  },

  "software-pentru-firme-de-constructii": {
    slug: "software-pentru-firme-de-constructii",
    industryName: "Firme de construcții",
    title: "Software pentru firme de construcții — șantiere, echipe, documente și facturi controlate.",
    seoTitle: "Software pentru firme de construcții | Programator Personal",
    seoDescription: "Sistem de management pentru firme de construcții: șantiere, echipe, devize, situații de lucrări și rapoarte.",
    heroLead: "O firmă de construcții cu șantierele urmărite în Excel, devizele în Word și situațiile de lucrări trimise cu întârziere — pierde bani pe care i-a câștigat deja.",
    operationalProblems: [
      "Urmărirea mai multor șantiere simultan e dificilă și imprecisă",
      "Devizele se fac manual, cu risc de erori și lipsă de standarde",
      "Situațiile de lucrări se emit cu întârziere — impact asupra fluxului de numerar",
      "Echipele de pe teren nu au vizibilitate asupra sarcinilor și materialelor",
      "Documentele de șantier (PV-uri, procese verbale) se gestionează haotic",
      "Rapoartele de profitabilitate per șantier lipsesc sau sunt incomplete",
    ],
    usefulModules: [
      { title: "Gestiune șantiere", description: "Fiecare șantier cu echipă, faze, documente, materiale și status." },
      { title: "Generator devize", description: "Devize standardizate cu manoperă, materiale, cote — generate rapid." },
      { title: "Situații de lucrări", description: "Situații generate automat din progresul șantierului, trimise la termen." },
      { title: "Gestiune echipe", description: "Pontaj, alocare pe șantier, vizibilitate asupra disponibilității." },
      { title: "Documente de șantier", description: "PV-uri, procese verbale, avize — generate, semnate și arhivate." },
      { title: "Dashboard profitabilitate", description: "Cost real vs. buget, per șantier și total firmă, în timp real." },
    ],
    exampleWorkflows: [
      {
        title: "Flux lucrare de construcții",
        body: "Proiect deschis → echipă alocată → materiale comandate → pontaj zilnic → avansare faze → situație generată → factură emisă → dosar finalizat.",
      },
    ],
    recommendedServices: ["aplicatii-web-custom", "generator-contracte", "dashboard-rapoarte", "automatizari-business"],
    architectureModules: ["Gestiune șantiere", "Devize", "Situații lucrări", "Pontaj echipă", "Documente", "Dashboard financiar"],
    beforeAfter: {
      before: "Șantiere în Excel, devize în Word, situații cu întârziere, pontaj pe hârtie",
      after: "Șantiere urmărite digital, devize standardizate, situații automate, pontaj digital",
    },
    faqs: [
      {
        q: "Cum gestionez situațiile de lucrări lunare pentru mai multe șantiere simultan?",
        a: "Sistemul generează situațiile automat pe baza progresului înregistrat. Poți emite situațiile pentru toate șantierele active dintr-un singur loc, la data stabilită.",
      },
      {
        q: "Echipele de pe teren pot înregistra progresul fără laptop?",
        a: "Da, aplicația e accesibilă de pe telefon. Șeful de șantier înregistrează progresul, pontajul și consumul de materiale direct de pe teren — datele apar instant în sistem.",
      },
      {
        q: "Pot urmări profitabilitatea unui șantier față de devizul inițial?",
        a: "Da, devizul devine bugetul de referință. Pe măsură ce înregistrezi cheltuieli reale, sistemul compară cu bugetul și îți arată unde ești pe plus sau pe minus.",
      },
    ],
    ctaText: "Vreau software pentru firma mea de construcții",
    relatedIndustrySlugs: ["software-pentru-agentii-imobiliare", "software-pentru-firme-de-evenimente"],
    relatedServiceSlugs: ["aplicatii-web-custom", "dashboard-rapoarte"],
    visualType: "dashboard-kpi",
  },

  "software-pentru-firme-de-evenimente": {
    slug: "software-pentru-firme-de-evenimente",
    industryName: "Firme de evenimente",
    title: "Software pentru firme de evenimente — clienți, furnizori, calendare și bugete organizate.",
    seoTitle: "Software pentru firme de organizare evenimente | Programator Personal",
    seoDescription: "Sistem de management pentru firme de evenimente: calendar, clienți, furnizori, bugete și coordonare echipă.",
    heroLead: "O firmă de evenimente care gestionează furnizorii pe WhatsApp, bugetele în Excel și coordonarea echipei pe hârtie — se apropie de un accident operațional.",
    operationalProblems: [
      "Mai multe evenimente simultan — gestionare haotică și risc de suprapuneri",
      "Furnizorii sunt contactați și confirmați manual per eveniment",
      "Bugetele se fac în Excel, devierile nu se văd în timp real",
      "Coordonarea echipei de zi de eveniment e dificilă și imprecisă",
      "Contractele cu clienții și furnizorii se gestionează separat",
      "Nu există o vedere de ansamblu a vânzărilor și profitabilității per tip eveniment",
    ],
    usefulModules: [
      { title: "Calendar evenimente", description: "Calendar cu toate evenimentele, evitare suprapuneri, vizibilitate echipă." },
      { title: "Gestiune clienți și brief", description: "Fișă client cu brief, cerințe, buget aprobat și comunicare." },
      { title: "Gestiune furnizori", description: "Bază de furnizori cu disponibilitate, prețuri și contracte." },
      { title: "Bugete și costuri", description: "Budget per eveniment cu costuri reale vs. estimate, actualizat live." },
      { title: "Generator contracte", description: "Contracte cu clienții și furnizorii generate rapid din template-uri." },
      { title: "Checklist eveniment", description: "Task-uri per eveniment cu responsabili și termene — vizibile echipei." },
    ],
    exampleWorkflows: [
      {
        title: "Flux organizare eveniment",
        body: "Brief client → buget propus → furnizori contactați → contracte generate → echipă alocată → checklist activat → eveniment → decontare finalizată.",
      },
    ],
    recommendedServices: ["crm-custom", "generator-contracte", "dashboard-rapoarte", "automatizari-business"],
    architectureModules: ["Calendar", "Gestiune clienți", "Furnizori", "Bugete", "Contracte", "Coordonare echipă"],
    beforeAfter: {
      before: "WhatsApp cu furnizorii, Excel pentru bugete, coordonare pe hârtie, suprapuneri",
      after: "Calendar unificat, furnizori organizați, bugete live, echipă coordonată digital",
    },
    faqs: [
      {
        q: "Cum gestionez confirmările de la furnizori pentru un eveniment specific?",
        a: "Fiecare furnizor are o fișă cu statusul confirmării per eveniment. Sistemul trimite remindere automate la furnizorii neconfirmați și te alertează cu câteva zile înainte de eveniment.",
      },
      {
        q: "Pot urmări bugetul în timp real și vedea devierile față de estimare?",
        a: "Da, bugetul estimat devine referința. Pe măsură ce adaugi cheltuieli reale, sistemul calculează automat devierea și îți arată dacă ești pe profit sau sub așteptări.",
      },
      {
        q: "Echipa de teren poate vedea checklist-ul și bifa task-urile în ziua evenimentului?",
        a: "Da, aplicația e accesibilă de pe mobil. Fiecare membru al echipei vede task-urile lui, le bifează în timp real și poate trimite alerte dacă ceva nu merge conform planului.",
      },
    ],
    ctaText: "Vreau software pentru firma mea de evenimente",
    relatedIndustrySlugs: ["software-pentru-agentii-imobiliare", "software-pentru-firme-de-constructii"],
    relatedServiceSlugs: ["crm-custom", "generator-contracte"],
    visualType: "crm-pipeline",
  },

  "software-pentru-ecommerce": {
    slug: "software-pentru-ecommerce",
    industryName: "E-commerce",
    title: "Software pentru e-commerce — comenzi, stoc, livrare și clienți fără haos operațional.",
    seoTitle: "Software pentru e-commerce | Magazin online custom | Programator Personal",
    seoDescription: "Sistem custom pentru e-commerce: catalog, comenzi, stoc, curierat, facturare și dashboard vânzări.",
    heroLead: "Un magazin online care crește are nevoie de sisteme care cresc cu el — nu de platforme standard care devin limitări.",
    operationalProblems: [
      "Comenzile vin pe mai multe canale și se procesează manual",
      "Stocul nu e sincronizat în timp real — comenzi pe produse epuizate",
      "AWB-urile se generează manual per comandă",
      "Facturile se emit manual sau semi-automat cu erori",
      "Nu ai vizibilitate clară asupra profitabilității per produs sau categorie",
      "Returnările și reclamațiile se gestionează haotic",
    ],
    usefulModules: [
      { title: "Catalog produse", description: "Produse cu variații, stoc per depozit, prețuri speciale per client." },
      { title: "Gestiune comenzi", description: "Comenzi din toate canalele centralizate, status în timp real, note interne." },
      { title: "Integrare curierat", description: "AWB generat automat, tracking live, alegere curier la comandă." },
      { title: "Facturare automată", description: "Factură emisă automat la confirmarea comenzii, integrare SmartBill." },
      { title: "Gestiune stoc", description: "Stoc în timp real, rezervare la comandă, alertă la epuizare, stoc negativ blocat." },
      { title: "Dashboard vânzări", description: "Vânzări per produs, categorie, canal, perioadă — cu marjă și retur." },
    ],
    exampleWorkflows: [
      {
        title: "Flux comandă e-commerce",
        body: "Comandă plasată → stoc rezervat → AWB generat → factură emisă → SMS tracking client → livrată → review solicitat automat.",
      },
    ],
    recommendedServices: ["magazin-online-custom", "automatizari-business", "dashboard-rapoarte"],
    architectureModules: ["Catalog", "Gestiune comenzi", "Stoc", "Curierat", "Facturare", "Dashboard"],
    beforeAfter: {
      before: "Comenzi procesate manual, stoc în Excel, AWB-uri generate individual, facturi manuale",
      after: "Comenzi automate, stoc live, AWB automat, facturare automată, dashboard vânzări",
    },
    faqs: [
      {
        q: "Puteți construi un magazin online de la zero sau lucrați și cu magazine existente?",
        a: "Ambele variante. Construim magazine online custom de la zero sau integrăm și automatizăm un magazin existent — WooCommerce, Shopify sau altă platformă.",
      },
      {
        q: "Cum funcționează integrarea cu curierele pentru AWB automat?",
        a: "Integrăm cu principalii curieri din România: FanCourier, DPD, Cargus, Sameday. AWB-ul se generează automat la confirmarea comenzii, clientul primește numărul de tracking prin SMS sau email.",
      },
      {
        q: "Pot gestiona mai multe depozite sau locații de livrare?",
        a: "Da, sistemul suportă mai multe depozite cu stoc independent. La plasarea comenzii, sistemul verifică disponibilitatea și alocă automat din depozitul cu stoc.",
      },
    ],
    ctaText: "Vreau software pentru magazinul meu online",
    relatedIndustrySlugs: ["software-pentru-firme-de-constructii", "software-pentru-agentii-imobiliare"],
    relatedServiceSlugs: ["magazin-online-custom", "automatizari-business"],
    visualType: "ecommerce-checkout",
  },

  "software-pentru-restaurante": {
    slug: "software-pentru-restaurante",
    industryName: "Restaurante și HoReCa",
    title: "Software pentru restaurante — rezervări, comenzi, stoc și rapoarte fără haos.",
    seoTitle: "Software pentru restaurante | HoReCa | Programator Personal",
    seoDescription: "Sistem pentru restaurante: rezervări de mese, comenzi, gestiune stoc ingrediente și rapoarte operaționale.",
    heroLead: "Un restaurant care gestionează rezervările pe telefon, comenzile pe hârtie și stocul din memorie — are probleme operaționale care se rezolvă cu un sistem simplu.",
    operationalProblems: [
      "Rezervările se gestionează pe telefon și agendă — suprapuneri și no-show",
      "Nu ai o imagine clară a stocului de ingrediente în timp real",
      "Rapoartele de vânzări pe categorie sau perioadă se fac manual",
      "Comenzile speciale sau alergiile clienților nu sunt sistematizate",
      "Costul per porție nu e calculat consistent — marje imprecise",
      "Nu știi care sunt cele mai profitabile produse de pe meniu",
    ],
    usefulModules: [
      { title: "Rezervări online mese", description: "Calendar cu mese disponibile, rezervare online, confirmare automată." },
      { title: "Gestiune stoc ingrediente", description: "Stoc live, scădere automată la comandă, alertă la nivel critic." },
      { title: "Rapoarte vânzări", description: "Vânzări per categorie, per produs, per zi — cu marje și comparații." },
      { title: "Fișă client VIP", description: "Preferințe, alergii, ocazii speciale, istoric vizite." },
      { title: "Cost rețetă", description: "Calculul costului per porție, urmărirea marjei per produs." },
      { title: "Gestiune furnizori", description: "Comenzi de aprovizionare generate automat la atingerea nivelului minim." },
    ],
    exampleWorkflows: [
      {
        title: "Flux rezervare restaurant",
        body: "Client rezervă online → confirmare automată → reminder cu 2h → masă pregătită → comandă înregistrată → stoc scăzut → bon generat → recenzie solicitată.",
      },
    ],
    recommendedServices: ["platforma-rezervari", "crm-custom", "dashboard-rapoarte"],
    architectureModules: ["Rezervări mese", "Gestiune stoc", "Comenzi", "Rapoarte", "Fișă client", "Furnizori"],
    beforeAfter: {
      before: "Rezervări pe telefon, stoc din memorie, rapoarte manuale, no-show frecvent",
      after: "Rezervări online, stoc live, rapoarte automate, clienți organizați",
    },
    faqs: [
      {
        q: "Sistemul funcționează și pentru un restaurant mic, nu doar pentru lanțuri?",
        a: "Da, construim pe dimensiunea ta. Un restaurant cu 30 de mese și o echipă mică beneficiază la fel — rezervări online, mai puține no-show-uri, vizibilitate asupra stocului.",
      },
      {
        q: "Cum funcționează scăderea automată din stoc la fiecare comandă?",
        a: "Fiecare preparat are o rețetă cu ingredientele și cantitățile. Când o comandă e înregistrată, stocul se scade automat. Primești alertă când un ingredient ajunge la nivelul minim.",
      },
      {
        q: "Pot vedea ce zile sau ore sunt cele mai aglomerate și optimiza personal?",
        a: "Da, dashboardul include rapoarte de trafic per zi, per oră și per tip de masă. Poți vedea tendințele și ajusta personalul sau meniul în funcție de cerere reală.",
      },
    ],
    ctaText: "Vreau software pentru restaurantul meu",
    relatedIndustrySlugs: ["software-pentru-saloane", "software-pentru-clinici"],
    relatedServiceSlugs: ["platforma-rezervari", "dashboard-rapoarte"],
    visualType: "booking-calendar",
  },
};

export { industryPages };

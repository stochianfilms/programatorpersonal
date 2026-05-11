export type ModuleFeature = { title: string; description: string };
export type ModuleFaq = { q: string; a: string };

export type ModuleConfig = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  problemSolved: string;
  features: ModuleFeature[];
  usedIn: string[];
  relatedServiceSlugs: string[];
  relatedIndustrySlugs: string[];
  mockupType: string;
  primaryCta: { label: string; href: string };
  faqs: ModuleFaq[];
};

const modules: Record<string, ModuleConfig> = {
  "crm-customer-360": {
    slug: "crm-customer-360",
    title: "CRM & Customer 360 — toți clienții, toate interacțiunile, într-un singur loc.",
    shortTitle: "CRM & Customer 360",
    description: "Un modul central care adună toate datele unui client: conversații, contracte, documente, facturi, istoricul activităților.",
    problemSolved: "Datele clientului sunt împrăștiate în email, WhatsApp, Excel și documente separate. Nimeni din echipă nu are imaginea completă.",
    features: [
      { title: "Fișă client completă", description: "Toate interacțiunile, documentele, proiectele și facturile unui client, în același loc." },
      { title: "Pipeline vizual", description: "Etapele relației cu clientul: lead, ofertă, contract, activ, inactiv — urmărite clar." },
      { title: "Istoric activități", description: "Emailuri, apeluri, întâlniri, note — cronologic, cu filtre." },
      { title: "Follow-up automat", description: "Reminder-uri și emailuri declanșate automat dacă un client nu a primit răspuns." },
      { title: "Roluri și permisiuni", description: "Agentul vede doar clienții lui, managerul vede tot." },
      { title: "Rapoarte vânzări", description: "Conversii, venit, performanță per agent — actualizate automat." },
    ],
    usedIn: ["Agenții și firme de servicii", "Service-uri", "Clinici și cabinete", "Firme de construcții", "Consultanți"],
    relatedServiceSlugs: ["crm-custom", "automatizari-business", "generator-contracte"],
    relatedIndustrySlugs: ["software-pentru-agentii-imobiliare", "software-pentru-clinici", "software-pentru-service-uri"],
    mockupType: "crm-pipeline",
    primaryCta: { label: "Vreau un CRM pentru firma mea", href: "/contact" },
    faqs: [
      {
        q: "Cât costă un modul CRM custom?",
        a: "Depinde de complexitate, dar un modul CRM de bază pornește de la câteva mii de euro și poate fi extins treptat. Poți începe cu funcțiile esențiale și adaugi ce lipsește pe parcurs.",
      },
      {
        q: "Cât durează să fie gata?",
        a: "Un CRM funcțional pentru uzul echipei e gata în 3-5 săptămâni. Lucrăm iterativ — folosești prima versiune în timp ce adăugăm restul.",
      },
      {
        q: "Pot importa clienții existenți din Excel sau alt CRM?",
        a: "Da. Migrarea datelor existente face parte din proces — curățăm, structurăm și importăm totul fără să pierzi ce ai acumulat.",
      },
      {
        q: "Se poate integra cu emailul firmei?",
        a: "Da — Google Workspace, Microsoft 365 sau orice provider IMAP/SMTP. Emailurile se asociază automat cu clientul.",
      },
    ],
  },

  "ticketing-helpdesk": {
    slug: "ticketing-helpdesk",
    title: "Ticketing & Helpdesk — solicitările clienților urmărite clar, de la intrare la rezolvare.",
    shortTitle: "Ticketing / Helpdesk",
    description: "Un sistem de gestionare a solicitărilor interne sau externe: creare, alocare, prioritizare, status și rezolvare.",
    problemSolved: "Solicitările vin pe email, formular, telefon sau WhatsApp și nu sunt urmărite nicăieri. Unele cad printre crăpături, altele sunt rezolvate tardiv.",
    features: [
      { title: "Creare ticket din mai multe surse", description: "Email, formular web, API sau manual — fiecare solicitare devine un ticket cu număr unic." },
      { title: "Alocare și prioritizare", description: "Ticketele sunt alocate automat sau manual pe baza regulilor de business." },
      { title: "Status și SLA", description: "Fiecare ticket are un status clar și un termen de rezolvare urmărit." },
      { title: "Notificări automate", description: "Clientul e anunțat la deschidere, la actualizări și la rezolvare." },
      { title: "Comentarii interne", description: "Echipa poate adăuga note interne vizibile doar intern, fără să le vadă clientul." },
      { title: "Dashboard helpdesk", description: "Număr de tickete deschise, timp mediu de rezolvare, performanță per agent." },
    ],
    usedIn: ["Firme cu echipă de suport", "Service-uri", "Furnizori de software", "Firme cu clienți B2B"],
    relatedServiceSlugs: ["aplicatii-web-custom", "automatizari-business", "crm-custom"],
    relatedIndustrySlugs: ["software-pentru-service-uri", "software-pentru-ecommerce"],
    mockupType: "maintenance-system",
    primaryCta: { label: "Vreau un sistem de ticketing", href: "/contact" },
    faqs: [
      {
        q: "Diferența față de un tool SaaS ca Freshdesk sau Zendesk?",
        a: "Un tool SaaS e construit pentru mii de clienți și are sute de funcții pe care nu le folosești. Al tău e construit pe procesul tău real — cu câmpuri, statusuri și reguli specifice firmei tale.",
      },
      {
        q: "Poate fi accesat și de clienți, nu doar de echipă?",
        a: "Da. Poți activa un portal client unde clienții văd statusul ticketelor lor fără să sune.",
      },
      {
        q: "Se poate integra cu emailul pentru a crea tickete automat din emailuri?",
        a: "Da. Emailurile primite pe o adresă dedicată (ex: suport@firmata.ro) pot fi transformate automat în tickete.",
      },
    ],
  },

  "contract-generator": {
    slug: "contract-generator",
    title: "Contract Generator — contracte corecte în secunde, fără copy-paste în Word.",
    shortTitle: "Contract Generator",
    description: "Un modul care generează contracte, devize sau documente din template-uri cu variabile completate automat din datele sistemului.",
    problemSolved: "Contractele se copiază manual dintr-un Word în altul, cu risc de greșeli la date, sume sau clauze. Statusul fiecărui contract e neclar.",
    features: [
      { title: "Template-uri editabile", description: "Definești structura contractului o dată — datele clientului se completează automat." },
      { title: "Variabile din sistem", description: "Nume, CUI, adresă, serviciu, sumă, dată — preluate direct din CRM sau formular." },
      { title: "Preview înainte de trimitere", description: "Verifici contractul înainte să îl trimiți — nicio surpriză." },
      { title: "Export PDF instant", description: "PDF generat automat, gata de descărcat sau trimis direct din sistem." },
      { title: "Trimitere email integrată", description: "Contractul ajunge la client direct din sistem, cu template de email personalizat." },
      { title: "Status urmărit", description: "Trimis, vizualizat, semnat, expirat — fiecare contract cu statusul lui clar." },
    ],
    usedIn: ["Firme de servicii", "Consultanți", "Agenții", "Service-uri", "Firme cu contracte repetitive"],
    relatedServiceSlugs: ["generator-contracte", "crm-custom", "automatizari-business"],
    relatedIndustrySlugs: ["software-pentru-agentii-imobiliare", "software-pentru-firme-de-evenimente"],
    mockupType: "contract-preview",
    primaryCta: { label: "Vreau să generez contracte mai rapid", href: "/contact" },
    faqs: [
      {
        q: "Pot folosi template-urile mele existente?",
        a: "Da. Preluăm documentele tale Word sau PDF și le transformăm în template-uri cu variabile. Conținutul juridic rămâne al tău.",
      },
      {
        q: "Contractele generate au valoare legală?",
        a: "Da, dacă au semnătura olografă sau digitală. Putem integra și semnătură electronică prin servicii certificate.",
      },
      {
        q: "Pot genera tipuri diferite de contracte pentru servicii diferite?",
        a: "Da. Ai câte template-uri ai nevoie, fiecare cu câmpurile potrivite serviciului respectiv.",
      },
    ],
  },

  "workflow-automation": {
    slug: "workflow-automation",
    title: "Workflow Automation — sarcinile repetitive dispar din rutina echipei.",
    shortTitle: "Workflow Automation",
    description: "Un motor de automatizare care leagă acțiunile din sistem: declanșatori, condiții, acțiuni automate, notificări și sincronizări.",
    problemSolved: "Sarcinile repetitive — emailuri de confirmare, crearea de documente, actualizarea statusurilor — consumă timp și depind de oameni care pot uita.",
    features: [
      { title: "Declanșatori configurabili", description: "Formular completat, dată ajunsă, status schimbat — orice eveniment poate porni un flux." },
      { title: "Condiții și ramificări", description: "Dacă clientul e din categoria X, trimite Y. Dacă suma depășește Z, notifică managerul." },
      { title: "Acțiuni automate", description: "Email, SMS, creare document, actualizare câmp, creare task — declanșate fără intervenție umană." },
      { title: "Loguri detaliate", description: "Fiecare flux rulat e înregistrat — când a pornit, ce a făcut, dacă a reușit." },
      { title: "Alerte la erori", description: "Dacă o automatizare dă eroare, ești notificat înainte să devină problemă." },
      { title: "Vizualizare flux", description: "Fluxurile sunt vizualizate grafic — ușor de înțeles, modificat și extins." },
    ],
    usedIn: ["Firme cu procese repetitive zilnice", "Echipe de vânzări", "Firme cu volum mare de documente", "E-commerce"],
    relatedServiceSlugs: ["automatizari-business", "crm-custom", "aplicatii-web-custom"],
    relatedIndustrySlugs: ["software-pentru-ecommerce", "software-pentru-firme-de-evenimente"],
    mockupType: "automation-flow",
    primaryCta: { label: "Spune-mi ce vrei să automatizăm", href: "/contact" },
    faqs: [
      {
        q: "Am nevoie de cunoștințe tehnice ca să configurez automatizările?",
        a: "Nu. Configurăm automatizările împreună cu tine, pe baza proceselor tale. Tu descrii cum lucrezi, noi traducem în logică de sistem.",
      },
      {
        q: "Pot modifica o automatizare după ce e lansată?",
        a: "Da. Regulile pot fi ajustate fără să rescrii totul. Adaugi un pas, schimbi o condiție, modifici un template.",
      },
      {
        q: "Ce se întâmplă dacă o automatizare dă eroare?",
        a: "Construim loguri și alerte. Știi imediat dacă ceva nu a funcționat, înainte să devină problemă vizibilă pentru clienți.",
      },
    ],
  },

  "dashboard-bi": {
    slug: "dashboard-bi",
    title: "Dashboard & BI — datele firmei vizibile într-un singur loc, actualizate live.",
    shortTitle: "Dashboard & BI",
    description: "Un modul de vizualizare a datelor din toate sistemele firmei: vânzări, operațiuni, echipă, clienți — filtrate și afișate în timp real.",
    problemSolved: "Managerul nu vede datele firmei într-un singur loc. Rapoartele se fac manual la final de lună și sunt deja vechi când ajung.",
    features: [
      { title: "KPI-uri la prima vedere", description: "Vânzări, lead-uri, comenzi, încasări — vizibile imediat la deschiderea sistemului." },
      { title: "Grafice interactive", description: "Tendințe, comparații, distribuții — vizualizate clar, nu ca tabele de numere." },
      { title: "Filtre pe orice dimensiune", description: "Filtrezi pe perioadă, agent, client, produs, locație — instant." },
      { title: "Rapoarte periodice automate", description: "La final de săptămână sau lună, raportul e trimis automat pe email." },
      { title: "Export PDF și Excel", description: "Raportul e gata de export cu un click, pentru contabil sau board." },
      { title: "Date din sisteme multiple", description: "Conectăm CRM, facturare, e-commerce, ERP — totul într-o singură vedere." },
    ],
    usedIn: ["Manageri și directori", "Echipe de vânzări", "E-commerce", "Firme cu mai mulți angajați sau locații"],
    relatedServiceSlugs: ["dashboard-rapoarte", "automatizari-business", "crm-custom"],
    relatedIndustrySlugs: ["software-pentru-firme-de-constructii", "software-pentru-ecommerce", "software-pentru-agentii-imobiliare"],
    mockupType: "dashboard-kpi",
    primaryCta: { label: "Vreau să văd datele firmei într-un singur loc", href: "/contact" },
    faqs: [
      {
        q: "Se poate conecta la sistemele pe care le am deja?",
        a: "Da. Putem extrage date din SmartBill, Facturis, Stripe, Google Sheets, orice sistem cu API sau bază de date accesibilă.",
      },
      {
        q: "Cine poate accesa dashboard-ul?",
        a: "Tu definești rolurile. Directorul vede tot. Agentul vede doar datele lui. Contabilul vede doar financiarele.",
      },
      {
        q: "Datele sunt actualizate în timp real sau cu întârziere?",
        a: "Depinde de surse. Cu API-uri moderne — aproape real-time. Cu sisteme mai vechi — la interval definit (orar, zilnic).",
      },
    ],
  },

  "client-portal": {
    slug: "client-portal",
    title: "Client Portal — spațiu privat pentru clienți, fără emailuri de status.",
    shortTitle: "Client Portal",
    description: "Un modul care oferă fiecărui client un cont securizat unde vede statusul proiectului, descarcă documente, plătește facturi și comunică direct.",
    problemSolved: "Clienții cer status, documente și fișiere prin telefon sau email. Fiecare răspuns manual consumă timp care nu e facturat.",
    features: [
      { title: "Cont client securizat", description: "Login cu email sau link magic — fără parole complicate de reținut." },
      { title: "Status proiect live", description: "Clientul vede progresul pas cu pas — faze finalizate, ce urmează, estimare." },
      { title: "Documente și livrabile", description: "Fișiere versionare, contracte, facturi — toate accesibile oricând." },
      { title: "Plăți online", description: "Clientul vede facturile și poate plăti direct din portal." },
      { title: "Canal de comunicare", description: "Mesaje directe în portal — fără emailuri pierdute." },
      { title: "Notificări automate", description: "Clientul e anunțat când apare ceva nou — document, factură, actualizare status." },
    ],
    usedIn: ["Agenții creative", "Firme de consultanță", "Firme de software", "Contabili", "Avocați"],
    relatedServiceSlugs: ["portal-clienti", "crm-custom", "automatizari-business"],
    relatedIndustrySlugs: ["software-pentru-agentii-imobiliare", "software-pentru-firme-de-constructii"],
    mockupType: "client-portal",
    primaryCta: { label: "Vreau portal pentru clienții mei", href: "/contact" },
    faqs: [
      {
        q: "Poate fi personalizat cu brandingul meu?",
        a: "Da. Logo, culori, domeniu propriu (portal.firmata.ro) — arată ca produsul tău, nu ca un tool generic.",
      },
      {
        q: "Fiecare client vede doar datele lui?",
        a: "Da, izolarea datelor e construită în arhitectură. Fiecare client vede exclusiv ce îl privește.",
      },
      {
        q: "Se integrează cu sistemul meu de facturare?",
        a: "Da. Facturile din SmartBill sau Facturis pot apărea automat în portalul clientului.",
      },
    ],
  },

  "booking-calendar": {
    slug: "booking-calendar",
    title: "Booking Calendar — programări online fără telefon, fără WhatsApp, fără no-show.",
    shortTitle: "Booking Calendar",
    description: "Un modul de rezervări online cu calendar, disponibilitate în timp real, confirmare automată, reminder-uri anti no-show și integrare cu CRM.",
    problemSolved: "Programările sunt gestionate manual pe telefon sau WhatsApp. Suprapunerile, no-show-urile și orele pierdute cu confirmări sunt inevitabile.",
    features: [
      { title: "Calendar cu disponibilitate", description: "Definești orele, pauzele, zilele libere — clientul vede doar sloturile disponibile." },
      { title: "Rezervare 24/7", description: "Clientul rezervă singur, inclusiv noaptea sau în weekend." },
      { title: "Confirmare automată", description: "Email sau SMS imediat la rezervare, cu toate detaliile." },
      { title: "Reminder anti no-show", description: "SMS sau email cu 24h și 2h înainte — no-show-ul scade dramatic." },
      { title: "Multiple servicii sau specialiști", description: "Fiecare specialist cu calendarul lui, fiecare serviciu cu durata lui." },
      { title: "Plată la rezervare", description: "Avans sau plată completă la momentul rezervării, cu Stripe sau Netopia." },
    ],
    usedIn: ["Clinici și cabinete", "Saloane de înfrumusețare", "Consultanți și coachi", "Service-uri", "Fotografi"],
    relatedServiceSlugs: ["platforma-rezervari", "crm-custom", "automatizari-business"],
    relatedIndustrySlugs: ["software-pentru-clinici", "software-pentru-saloane", "software-pentru-service-uri"],
    mockupType: "booking-calendar",
    primaryCta: { label: "Vreau o platformă de rezervări", href: "/contact" },
    faqs: [
      {
        q: "Se poate integra cu Google Calendar?",
        a: "Da. Rezervările din platformă apar automat în Google Calendar și invers.",
      },
      {
        q: "Clientul poate anula sau reprograma?",
        a: "Da, cu regulile definite de tine — de exemplu, anulare gratuită cu minim 24h înainte.",
      },
      {
        q: "Cât de repede pot lansa un sistem de rezervări?",
        a: "Un sistem de rezervări de bază poate fi gata în 2-3 săptămâni. Integrările suplimentare (CRM, plăți, SMS) adaugă timp.",
      },
    ],
  },

  "rma-warranty": {
    slug: "rma-warranty",
    title: "RMA / Warranty — garanții, retururi și fișe tehnice urmărite fără haos.",
    shortTitle: "RMA / Warranty",
    description: "Un modul de gestionare a garanțiilor, retururilor și solicitărilor de service — cu istoricul complet al fiecărui produs sau dosar.",
    problemSolved: "Garanțiile, retururile, fișele tehnice și deciziile sunt greu de urmărit. Clientul sună pentru statusul unui produs trimis în service acum 2 săptămâni.",
    features: [
      { title: "Înregistrare RMA", description: "Fiecare retur sau garanție primește un dosar cu număr unic, client, produs, defect." },
      { title: "Flux de aprobare", description: "Dosar primit → evaluat → aprobat/respins → rezolvat — fiecare etapă înregistrată." },
      { title: "Istoric produs", description: "Toate intervențiile, garanțiile și returnările unui produs, la un loc." },
      { title: "Notificări client", description: "Clientul e anunțat la fiecare schimbare de status, fără să sune." },
      { title: "Documente generate", description: "Procese verbale, decizii de garanție, devize — generate automat din dosar." },
      { title: "Rapoarte RMA", description: "Rate de retur, defecte frecvente, timp mediu de rezolvare — vizibile în dashboard." },
    ],
    usedIn: ["Service-uri auto și tehnice", "Magazine online cu retururi", "Producători cu garanții", "Importatori de echipamente"],
    relatedServiceSlugs: ["aplicatii-web-custom", "automatizari-business", "crm-custom"],
    relatedIndustrySlugs: ["software-pentru-service-uri", "software-pentru-ecommerce"],
    mockupType: "maintenance-system",
    primaryCta: { label: "Vreau un sistem de garanții și retururi", href: "/contact" },
    faqs: [
      {
        q: "Pot urmări garanțiile pe termen lung, pe mai mulți ani?",
        a: "Da. Fiecare dosar are dată de înregistrare, durată garanție și alertă automată la expirare.",
      },
      {
        q: "Se poate integra cu magazinul online pentru retururi?",
        a: "Da. O solicitare de retur din magazin poate crea automat un dosar RMA în sistem.",
      },
      {
        q: "Clientul poate urmări statusul returului singur?",
        a: "Da, opțional. Poți activa un portal unde clientul vede statusul dosarului fără să sune.",
      },
    ],
  },

  "document-hub": {
    slug: "document-hub",
    title: "Document Hub — documentele firmei organizate, găsite în secunde.",
    shortTitle: "Document Hub",
    description: "Un modul de gestionare a documentelor: upload, organizare pe categorii, căutare rapidă, versionare, partajare controlată.",
    problemSolved: "Documentele sunt pierdute prin email, foldere locale sau conversații de WhatsApp. Găsirea unui document vechi durează minute sau ore.",
    features: [
      { title: "Upload și organizare", description: "Documente structurate pe proiecte, clienți, tipuri — nu în foldere haotice." },
      { title: "Căutare rapidă", description: "Găsești orice document după nume, client, dată sau tip în câteva secunde." },
      { title: "Versionare", description: "Fiecare versiune a unui document e salvată — știi exact ce s-a schimbat și când." },
      { title: "Partajare controlată", description: "Trimiți un link securizat cu acces limitat în timp — fără să atașezi pe email." },
      { title: "Permisiuni pe roluri", description: "Fiecare angajat vede doar documentele la care are acces." },
      { title: "Integrare cu alte module", description: "Documentele sunt legate automat de clientul, proiectul sau contractul din sistem." },
    ],
    usedIn: ["Firme cu volum mare de documente", "Birouri notariale și juridice", "Firme de contabilitate", "Constructori", "Agenții"],
    relatedServiceSlugs: ["aplicatii-web-custom", "portal-clienti", "automatizari-business"],
    relatedIndustrySlugs: ["software-pentru-firme-de-constructii", "software-pentru-firme-de-evenimente"],
    mockupType: "client-portal",
    primaryCta: { label: "Vreau un sistem de documente", href: "/contact" },
    faqs: [
      {
        q: "Se poate face backup automat al documentelor?",
        a: "Da. Documentele sunt stocate securizat în cloud cu backup automat. Poți restaura orice versiune oricând.",
      },
      {
        q: "Poate accesa clientul documente direct, fără să mă contacteze?",
        a: "Da, cu modulul Client Portal activ. Clientul vede și descarcă documentele lui fără să sune sau să scrie pe email.",
      },
      {
        q: "Cât spațiu de stocare am?",
        a: "Configurăm spațiul pe nevoile tale. Poți porni cu un volum mic și crești pe măsură ce baza de documente crește.",
      },
    ],
  },

  "integrations-api": {
    slug: "integrations-api",
    title: "Integrations & API — sistemele firmei conectate într-un flux coerent.",
    shortTitle: "Integrations API",
    description: "Un strat de integrare care conectează sistemele existente ale firmei — facturare, email, plăți, curierat, calendar, ERP — printr-un flux automatizat.",
    problemSolved: "Sistemele firmei nu comunică între ele. Datele se copiază manual dintr-un sistem în altul, cu risc de erori și timp pierdut.",
    features: [
      { title: "Integrări email", description: "Gmail, Outlook, IMAP/SMTP — emailurile intra și ies din sistem automat." },
      { title: "Facturare", description: "SmartBill, Oblio, FGO — facturi emise și sincronizate automat." },
      { title: "Plăți", description: "Stripe, Netopia — plăți procesate și confirmate direct în sistem." },
      { title: "Curierat", description: "FanCourier, DPD, Cargus, Sameday — AWB generat automat la confirmarea comenzii." },
      { title: "Calendar", description: "Google Calendar, Outlook Calendar — sincronizare bidirecțională." },
      { title: "Webhooks și API custom", description: "Orice sistem cu API poate fi conectat — inclusiv ERP-uri sau platforme proprii." },
    ],
    usedIn: ["E-commerce cu volum mare", "Firme cu multiple sisteme software", "Firme care vor să automatizeze fluxuri end-to-end"],
    relatedServiceSlugs: ["automatizari-business", "aplicatii-web-custom", "crm-custom"],
    relatedIndustrySlugs: ["software-pentru-ecommerce", "software-pentru-firme-de-constructii"],
    mockupType: "automation-flow",
    primaryCta: { label: "Vreau să conectăm sistemele firmei", href: "/contact" },
    faqs: [
      {
        q: "Ce facem dacă sistemul meu nu are API?",
        a: "Există alternative: export/import periodic, scraping controlat sau construirea unui adaptor. Evaluăm ce e fezabil înainte să promitem ceva.",
      },
      {
        q: "Cât durează să conectăm două sisteme?",
        a: "O integrare simplă (formular → CRM) poate fi gata în câteva zile. O integrare complexă cu mai mulți pași și condiții — 2-4 săptămâni.",
      },
      {
        q: "Ce se întâmplă dacă o integrare dă eroare?",
        a: "Construim monitorizare și alerte. Dacă un flux eșuează, ești notificat imediat cu detalii despre ce s-a întâmplat.",
      },
    ],
  },
};

export { modules };

export function getModuleBySlug(slug: string): ModuleConfig | undefined {
  return modules[slug];
}

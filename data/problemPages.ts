export type ProblemPageSymptom = string;

export type ProblemPageConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroLead: string;
  problemStatement: string;
  symptoms: ProblemPageSymptom[];
  whyItMatters: string;
  solutionOverview: string;
  recommendedServices: string[];
  exampleScenario: { title: string; body: string };
  beforeAfter: { before: string; after: string };
  faq: { q: string; a: string }[];
  ctaText: string;
  relatedProblemSlugs: string[];
  relatedServiceSlugs: string[];
  visualType: string;
};

const problemPages: Record<string, ProblemPageConfig> = {
  "scapa-de-excel": {
    slug: "scapa-de-excel",
    title: "Scapă de Excel când firma ta are nevoie de un sistem clar.",
    seoTitle: "Scapă de Excel | Software pentru firme | Programator Personal",
    seoDescription: "Transformă Excel-ul în CRM, dashboard și automatizări. Software custom care se potrivește pe fluxul firmei tale.",
    heroLead: "Dacă ai 5 fișiere și nu știi care e versiunea corectă, problema nu e Excel-ul — e lipsa unui sistem.",
    problemStatement: "Excel nu e rău. E rău când firma ta a crescut și tu conduci cu o unealtă pentru date simple, nu pentru un business cu clienți, echipă și procese reale.",
    symptoms: [
      "Ai 5-6 fișiere Excel cu date similare și nu știi care e corect",
      "Fiecare coleg ține evidența altfel — nu există un singur loc cu datele reale",
      "Pierzi date când un angajat pleacă sau un fișier se corupe",
      "Rapoartele le faci manual, de la zero, la finalul fiecărei luni",
      "Nu poți vedea în timp real ce se întâmplă cu clienții sau comenzile",
      "Accesul pe mobil e imposibil sau complicat",
    ],
    whyItMatters: "Fiecare zi cu un proces bazat pe Excel e o zi în care deciziile se iau cu date de ieri sau de săptămâna trecută. Asta se traduce în clienți pierduți, facturi uitate și echipă dezorganizată.",
    solutionOverview: "Înlocuim tabelele cu un sistem real: CRM, dashboard de date și automatizări care fac ce făceai tu manual. Datele sunt live, accesibile, sigure.",
    recommendedServices: ["crm-custom", "dashboard-rapoarte", "automatizari-business"],
    exampleScenario: {
      title: "Firmă de servicii, 8 angajați",
      body: "Excel cu 3 fișiere pentru clienți, oferte și contracte. Înlocuit cu un CRM cu pipeline, generator de contracte și dashboard. Timp de raportare: de la 4h/lună la 0.",
    },
    beforeAfter: {
      before: "Excel, fișiere multiple, date incomplete, rapoarte manuale la final de lună",
      after: "CRM live, date centralizate, rapoarte automate, acces de pe orice dispozitiv",
    },
    faq: [
      {
        q: "Cât durează tranziția de la Excel la un sistem custom?",
        a: "Depinde de complexitate, dar în general primele module sunt funcționale în 3-6 săptămâni. Migrăm datele existente din Excel, deci nu pierzi nimic din ce ai acumulat.",
      },
      {
        q: "Trebuie să renunț complet la Excel sau pot păstra unele fișiere?",
        a: "Poți păstra Excel pentru ce face bine — calcule ad-hoc, analize punctuale. Sistemul custom preia ceea ce se repeta: clienți, oferte, contracte, rapoarte lunare.",
      },
      {
        q: "Ce se întâmplă dacă angajații nu vor să folosească un sistem nou?",
        a: "Construim sisteme simple, nu complicate. Dacă e mai ușor de folosit decât Excel-ul actual, adopția vine natural. Oferim și sesiuni de onboarding cu echipa ta.",
      },
    ],
    ctaText: "Vreau să transform Excel-ul în sistem",
    relatedProblemSlugs: ["gestiune-clienti-firma", "rapoarte-automate-firma"],
    relatedServiceSlugs: ["crm-custom", "dashboard-rapoarte"],
    visualType: "crm-pipeline",
  },

  "gestiune-clienti-firma": {
    slug: "gestiune-clienti-firma",
    title: "Gestiune clienți firmă — toți clienții într-un loc, nu în inboxuri și telefoane.",
    seoTitle: "Gestiune clienți pentru firme | CRM custom | Programator Personal",
    seoDescription: "Sistem de gestiune clienți construit pe procesele firmei tale. Lead-uri, oferte, contracte, follow-up — totul organizat.",
    heroLead: "Clienții tăi nu se pierd singuri. Se pierd în conversații neterminate, follow-up-uri uitate și procese fără vizibilitate.",
    problemStatement: "O firmă care crește are nevoie de un sistem de gestiune a clienților, nu de un WhatsApp mai bine organizat.",
    symptoms: [
      "Lead-uri primite pe email, WhatsApp și telefon — pierdute în conversații",
      "Nu știi exact în ce stadiu e fiecare ofertă sau negociere",
      "Follow-up-urile se fac când îți aduci aminte, nu sistematic",
      "Istoricul cu un client e în 3 locuri diferite — email, telefon, note fizice",
      "Când pleacă un angajat, pleacă și relațiile cu clienții lui",
      "Rapoartele de vânzări le faci manual la cerere",
    ],
    whyItMatters: "Fiecare lead neîngrijit e o oportunitate pierdută. Fiecare client fără follow-up sistematic e un client care poate pleca la concurență.",
    solutionOverview: "Un CRM custom care reflectă fluxul tău de vânzări: de la lead până la contract semnat și client activ. Pipeline vizual, fișe complete, follow-up automat.",
    recommendedServices: ["crm-custom", "automatizari-business", "generator-contracte"],
    exampleScenario: {
      title: "Agenție imobiliară, 12 agenți",
      body: "Lead-uri din 4 surse, follow-up haotic, contracte în Word. Implementat CRM cu pipeline, follow-up automat la 3/7/14 zile, generator contracte. Rata de conversie +28% în 3 luni.",
    },
    beforeAfter: {
      before: "Lead-uri în WhatsApp, oferte în email, contracte în Word, urmărire din memorie",
      after: "Pipeline vizual, fișe complete, follow-up automat, contracte generate în secunde",
    },
    faq: [
      {
        q: "CRM-ul custom e mai bun decât Salesforce sau HubSpot?",
        a: "Nu neapărat mai bun ca funcționalitate brută, dar mult mai potrivit pentru procesul tău specific. Nu plătești pentru funcții pe care nu le folosești și nu adaptezi firma la software — software-ul se adaptează la firmă.",
      },
      {
        q: "Pot importa clienții existenți din Excel sau dintr-un alt CRM?",
        a: "Da, migrarea datelor existente face parte din proces. Curățăm, structurăm și importăm tot ce ai acumulat — fără să începi de la zero.",
      },
      {
        q: "Cum gestionez accesul diferit pentru agenți și management?",
        a: "Sistemul are roluri și permisiuni configurabile. Agentul vede doar clienții lui, managerul vede tot. Totul e configurabil pe structura reală a firmei tale.",
      },
    ],
    ctaText: "Vreau un sistem de gestiune clienți",
    relatedProblemSlugs: ["scapa-de-excel", "automatizare-contracte"],
    relatedServiceSlugs: ["crm-custom", "generator-contracte"],
    visualType: "crm-pipeline",
  },

  "automatizare-contracte": {
    slug: "automatizare-contracte",
    title: "Automatizare contracte — contracte corecte în secunde, nu în ore.",
    seoTitle: "Automatizare contracte pentru firme | Generator contracte | Programator Personal",
    seoDescription: "Generează contracte corecte automat din datele clientului. Fără copy-paste în Word, fără greșeli de date, fără timp pierdut.",
    heroLead: "Dacă generarea unui contract durează mai mult de 5 minute, pierzi timp care nu mai vine înapoi.",
    problemStatement: "Copy-paste în Word, modificat manual datele clientului, trimis pe email, așteptat confirmarea — un proces care se poate automatiza complet.",
    symptoms: [
      "Contractele se copiază manual dintr-un Word în altul",
      "Greșeli frecvente: nume greșit, sumă incorectă, dată lipsă",
      "Nu știi câte contracte active ai și care expiră curând",
      "Template-urile există în mai multe versiuni, nu știi care e corect",
      "Trimiterea unui contract durează 10-20 minute per client",
      "Nu ai un status clar: trimis, văzut, semnat, expirat",
    ],
    whyItMatters: "O greșeală într-un contract poate costa mai mult decât valoarea contractului respectiv. Timpul pierdut pe copy-paste e timp luat din vânzări sau din livrare.",
    solutionOverview: "Generator de contracte integrat cu datele din CRM. Selectezi clientul, alegi serviciul, apeși un buton — contractul e gata, corect, trimis automat.",
    recommendedServices: ["generator-contracte", "crm-custom", "automatizari-business"],
    exampleScenario: {
      title: "Agenție de marketing, 6 angajați",
      body: "15 contracte noi pe lună, fiecare creat manual în 30-45 minute. Generator implementat — timp per contract: 2 minute. Plus statusul clar al fiecărui contract.",
    },
    beforeAfter: {
      before: "Word editat manual, greșeli de date, emailuri pierdute, status neclar",
      after: "Contract generat automat, trimis instant, status urmărit, arhivat automat",
    },
    faq: [
      {
        q: "Pot folosi template-urile mele existente de contracte?",
        a: "Da, pornim de la template-urile tale actuale și le transformăm în template-uri dinamice cu variabile. Conținutul juridic rămâne al tău — automatizăm doar completarea datelor.",
      },
      {
        q: "Ce se întâmplă dacă am nevoie de un contract cu clauze speciale, ne-standard?",
        a: "Poți adăuga secțiuni opționale, clauze condiționale sau câmpuri personalizate. Generatorul e flexibil — nu ești limitat la un singur template rigid.",
      },
      {
        q: "Pot integra și semnătura electronică?",
        a: "Da, putem integra servicii de semnătură electronică legală. Clientul primește contractul pe email, semnează online, tu primești confirmarea automat.",
      },
    ],
    ctaText: "Vreau să automatizez contractele",
    relatedProblemSlugs: ["gestiune-clienti-firma", "scapa-de-excel"],
    relatedServiceSlugs: ["generator-contracte", "crm-custom"],
    visualType: "contract-preview",
  },

  "rapoarte-automate-firma": {
    slug: "rapoarte-automate-firma",
    title: "Rapoarte automate pentru firmă — date live, nu Excel la final de lună.",
    seoTitle: "Rapoarte automate pentru firme | Dashboard | Programator Personal",
    seoDescription: "Rapoarte generate automat din datele firmei tale. Dashboard live cu KPI-uri, vânzări, clienți și performanță echipă.",
    heroLead: "Dacă raportul lunar îți mănâncă o zi și jumătate, ceva e greșit fundamental în modul în care colectezi datele.",
    problemStatement: "Rapoartele nu ar trebui să fie o muncă — ar trebui să fie rezultatul unui sistem care colectează datele automat.",
    symptoms: [
      "Rapoartele lunare se fac manual, extragând date din mai multe sisteme",
      "Datele sunt întotdeauna cu câteva zile întârziere față de realitate",
      "Nu știi KPI-urile firmei în timp real — afli la finalul lunii",
      "Diferite persoane raportează date diferite pentru aceeași perioadă",
      "Rapoartele se fac în Excel, care devine din ce în ce mai complicat",
      "Nu poți filtra rapid pe agent, client, produs sau perioadă",
    ],
    whyItMatters: "Deciziile luate cu date vechi duc la acțiuni greșite. Un manager care știe ce se întâmplă azi poate acționa azi.",
    solutionOverview: "Dashboard live care agregă datele din toate sistemele tale — CRM, facturare, e-commerce — și le afișează filtrat pe ce contează pentru tine. Rapoarte automate trimise periodic.",
    recommendedServices: ["dashboard-rapoarte", "automatizari-business", "crm-custom"],
    exampleScenario: {
      title: "Distribuitor, 15 angajați",
      body: "Raport lunar: 6 ore de colectare manuală din 3 sisteme. Dashboard implementat — raportul e gata în 0 ore. Directorul vede datele live în fiecare dimineață.",
    },
    beforeAfter: {
      before: "Excel manual, date cu întârziere, rapoarte care durează ore, nicio vizibilitate live",
      after: "Dashboard live, date din toate sistemele, rapoarte automate, filtre pe orice dimensiune",
    },
    faq: [
      {
        q: "Pot conecta dashboardul la sistemele pe care le folosesc deja?",
        a: "Da, conectăm la majoritatea sistemelor: ERP, CRM, facturare, e-commerce, Google Sheets. Dacă sistemul are un API sau un export de date, îl putem integra.",
      },
      {
        q: "Cine poate vedea dashboardul și ce date vede fiecare?",
        a: "Sistemul are roluri diferite: directorul vede totul, managerul de vânzări vede echipa lui, agentul vede doar datele lui proprii. Totul e configurat pe structura reală a firmei.",
      },
      {
        q: "Pot trimite rapoartele automat pe email la un anumit interval?",
        a: "Da, poți configura rapoarte automate zilnice, săptămânale sau lunare, trimise pe email la persoanele relevante — fără nicio intervenție manuală.",
      },
    ],
    ctaText: "Vreau rapoarte automate pentru firma mea",
    relatedProblemSlugs: ["scapa-de-excel", "gestiune-clienti-firma"],
    relatedServiceSlugs: ["dashboard-rapoarte", "automatizari-business"],
    visualType: "dashboard-kpi",
  },

  "programari-online-firma": {
    slug: "programari-online-firma",
    title: "Programări online pentru firmă — fără WhatsApp, fără no-show, fără haos.",
    seoTitle: "Sistem programări online pentru firme | Platformă rezervări | Programator Personal",
    seoDescription: "Platformă de programări online cu confirmare automată și reminder-uri. Clienții rezervă singuri — tu ești anunțat.",
    heroLead: "Dacă gestionezi programările pe WhatsApp și telefon, cheltuiești timp pe ceva ce un sistem poate face singur.",
    problemStatement: "Rezervările vin pe 4 canale diferite, se suprapun, se uită și clienții nu apar. Există o soluție mai bună pentru toată lumea.",
    symptoms: [
      "Programările vin pe WhatsApp, telefon, email și direct — greu de centralizat",
      "Suprapuneri de programări sau sloturi goale din cauza lipsei de vizibilitate",
      "Clienții uită programările — no-show frecvent",
      "Secretara sau tu petreceți ore pe zi gestionând programări",
      "Nu ai un calendar centralizat pentru toată echipa",
      "Clienții nu pot vedea disponibilitatea și sună să întrebe",
    ],
    whyItMatters: "Fiecare no-show e un slot pierdut. Fiecare oră petrecută gestionând programări e o oră luată din livrare sau vânzări.",
    solutionOverview: "Platformă de programări online cu calendar, disponibilitate în timp real, confirmare automată și reminder-uri. Clienții rezervă singuri, tu primești notificarea.",
    recommendedServices: ["platforma-rezervari", "crm-custom", "automatizari-business"],
    exampleScenario: {
      title: "Clinică medicală, 8 medici",
      body: "Programări pe WhatsApp și telefon, 25% no-show, recepție ocupată 5h/zi. Platformă implementată — no-show la 5%, recepția liberă pentru pacienți fizici.",
    },
    beforeAfter: {
      before: "WhatsApp și telefon, suprapuneri, no-show frecvent, ore pierdute zilnic",
      after: "Calendar online, rezervare 24/7, confirmare automată, reminder anti no-show",
    },
    faq: [
      {
        q: "Clienții mei pot rezerva fără să creeze un cont?",
        a: "Da, poți configura sistemul să permită rezervări fără cont, doar cu email și telefon. Sau poți solicita înregistrare dacă vrei să construiești o bază de date de clienți.",
      },
      {
        q: "Cum se trimit reminder-urile? SMS sau email?",
        a: "Ambele variante sunt disponibile. Poți trimite email la confirmare și SMS cu 24h și 2h înainte de programare. Costul SMS-urilor e inclus sau facturat separat, după volum.",
      },
      {
        q: "Pot configura sloturi diferite per angajat sau per serviciu?",
        a: "Da, fiecare specialist are propriul calendar cu durata serviciilor lui. Un client poate vedea disponibilitatea unui anumit specialist și alege slotul potrivit.",
      },
    ],
    ctaText: "Vreau o platformă de programări",
    relatedProblemSlugs: ["gestiune-clienti-firma", "rapoarte-automate-firma"],
    relatedServiceSlugs: ["platforma-rezervari", "crm-custom"],
    visualType: "booking-calendar",
  },

  "portal-clienti-firma": {
    slug: "portal-clienti-firma",
    title: "Portal clienți pentru firmă — clienții văd singuri statusul, fără să te sune.",
    seoTitle: "Portal clienți pentru firme | Programator Personal",
    seoDescription: "Portal cu cont client securizat — documente, status proiect, facturi și comunicare directă. Clienții găsesc singuri ce au nevoie.",
    heroLead: "Dacă clienții te sună de 3-4 ori pe săptămână să întrebe statusul, nu ai o problemă de comunicare — ai o problemă de vizibilitate.",
    problemStatement: "Clienții vor să știe ce se întâmplă cu proiectul lor. Fără un portal, singura soluție e să îi suni sau să trimiți emailuri manuale.",
    symptoms: [
      "Clienții sună sau scriu zilnic să întrebe statusul proiectului",
      "Documentele și livrabilele sunt trimise pe email — se pierd",
      "Facturile se trimit manual, urmărirea plăților e haotică",
      "Nu ai un canal structurat de comunicare cu clienții",
      "Clientul nu are vizibilitate asupra progresului — generează anxietate și neîncredere",
      "Trimiți actualizări de status manual, per client, periodic",
    ],
    whyItMatters: "Un client care nu vede progresul devine un client agitat. Un client agitat ocupă timp care nu e facturat. Un portal rezolvă asta sistemic.",
    solutionOverview: "Portal client cu cont securizat, status proiect live, documente, facturi și canal de comunicare. Clientul intră, vede ce are nevoie, tu economisești timp.",
    recommendedServices: ["portal-clienti", "crm-custom", "automatizari-business"],
    exampleScenario: {
      title: "Firmă de contabilitate, 4 contabili",
      body: "Clienții trimiteau documentele pe email, contabilii le procesau, confirmările se pierdeau. Portal implementat — documentele intră direct, statusul e vizibil, 40% mai puține apeluri.",
    },
    beforeAfter: {
      before: "Email, WhatsApp, apeluri zilnice, documente pierdute, clienți anxioși",
      after: "Portal securizat, status live, documente organizate, comunicare centralizată",
    },
    faq: [
      {
        q: "Clientul meu e mai puțin tehnic — va reuși să folosească un portal?",
        a: "Portalul e proiectat pentru utilizatori non-tehnici. Interfața e simplă: intri cu email și parolă, vezi ce ai nevoie. Nu e nevoie de training special.",
      },
      {
        q: "Documentele din portal sunt securizate? Cine le poate accesa?",
        a: "Fiecare client vede doar documentele lui proprii. Accesul e protejat prin autentificare și toate fișierele sunt stocate securizat. Poți configura și expiarea accesului.",
      },
      {
        q: "Pot trimite notificări clienților când apar documente noi sau statusul se schimbă?",
        a: "Da, clienții primesc email automat la fiecare actualizare importantă — document nou, factură emisă, status schimbat. Notificările sunt configurabile.",
      },
    ],
    ctaText: "Vreau portal pentru clienții mei",
    relatedProblemSlugs: ["gestiune-clienti-firma", "automatizare-contracte"],
    relatedServiceSlugs: ["portal-clienti", "crm-custom"],
    visualType: "client-portal",
  },
};

export { problemPages };

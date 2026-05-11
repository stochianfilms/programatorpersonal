export interface NavItem {
  label: string;
  href: string;
}

export interface NavItemRich extends NavItem {
  description: string;
}

export interface CtaItem {
  label: string;
  href: string;
}

export interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
}

const primaryNav: NavItem[] = [
  { label: "Servicii", href: "/servicii" },
  { label: "Soluții", href: "/servicii" },
  { label: "Industrii", href: "/servicii" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Prețuri", href: "/preturi" },
  { label: "Contact", href: "/contact" },
];

const servicesNav: NavItemRich[] = [
  { label: "CRM custom", href: "/crm-custom", description: "Pipeline, clienți, urmăriri" },
  { label: "Automatizări business", href: "/automatizari-business", description: "Procese care rulează singure" },
  { label: "Aplicații web custom", href: "/aplicatii-web-custom", description: "Software pe fluxul tău" },
  { label: "Generator contracte", href: "/generator-contracte", description: "Contracte generate în secunde" },
  { label: "Dashboard-uri și rapoarte", href: "/dashboard-rapoarte", description: "Date live din firmă" },
  { label: "Platformă rezervări", href: "/platforma-rezervari", description: "Programări online automate" },
  { label: "Portal clienți", href: "/portal-clienti", description: "Spațiu privat pentru clienți" },
  { label: "Magazin online custom", href: "/magazin-online-custom", description: "E-commerce pe procesele tale" },
  { label: "Mentenanță software", href: "/mentenanta-software", description: "Aplicația evoluează fără tine" },
];

const solutionsNav: NavItemRich[] = [
  { label: "Scapă de Excel", href: "/scapa-de-excel", description: "CRM și automatizări în loc de tabele" },
  { label: "Gestiune clienți firmă", href: "/gestiune-clienti-firma", description: "Toți clienții, organizați" },
  { label: "Automatizare contracte", href: "/automatizare-contracte", description: "Contracte fără copy-paste" },
  { label: "Rapoarte automate", href: "/rapoarte-automate-firma", description: "Date la zi, nu la final de lună" },
  { label: "Programări online", href: "/programari-online-firma", description: "Calendar fără WhatsApp" },
  { label: "Portal clienți firmă", href: "/portal-clienti-firma", description: "Clienții văd statusul singuri" },
];

const industriesNav: NavItemRich[] = [
  { label: "Service-uri auto", href: "/software-pentru-service-uri", description: "Programări, fișe auto, status lucrări" },
  { label: "Clinici", href: "/software-pentru-clinici", description: "Pacienți, programări, documente" },
  { label: "Saloane", href: "/software-pentru-saloane", description: "Calendar, clienți, abonamente" },
  { label: "Restaurante", href: "/software-pentru-restaurante", description: "Comenzi, rezervări, operațiuni" },
  { label: "Agenții imobiliare", href: "/software-pentru-agentii-imobiliare", description: "Lead-uri, proprietăți, follow-up" },
  { label: "Construcții", href: "/software-pentru-firme-de-constructii", description: "Șantiere, documente, rapoarte" },
  { label: "Evenimente", href: "/software-pentru-firme-de-evenimente", description: "Calendar, furnizori, clienți" },
  { label: "E-commerce", href: "/software-pentru-ecommerce", description: "Checkout, comenzi, integrări" },
];

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://programatorpersonal.ro",
  brand: {
    name: "Programator Personal",
    legalName: null,
    tagline: "Software custom pentru firme care vor să lucreze mai clar.",
    description:
      "Programator Personal construiește CRM-uri custom, aplicații web și automatizări pentru firme care vor să scape de Excel, WhatsApp și procese manuale.",
    shortDescription:
      "CRM-uri, aplicații web și automatizări construite pe procesele reale ale firmei tale.",
    location: "București · România",
  },
  contact: {
    email: "hai@programatorpersonal.ro",
    phone: null,
    phoneHref: null,
    whatsapp: null,
    calendly: null,
    address: "București · România",
    location: "București · România",
  },
  ctas: {
    primary: { label: "Programează o discuție", href: "/contact" },
    diagnostic: { label: "Spune-mi ce vrei să automatizăm", href: "/contact" },
    estimate: { label: "Cere o estimare", href: "/contact" },
    portfolio: { label: "Vreau un sistem asemănător", href: "/contact" },
    serviceDefault: { label: "Vreau o soluție pentru firma mea", href: "/contact" },
  },
  cta: {
    primary: "Programează o discuție",
    diagnostic: "Spune-mi ce vrei să automatizăm",
    estimate: "Cere o estimare",
    portfolio: "Vreau un sistem asemănător",
    industry: "Vreau software pentru firma mea",
    problem: "Vreau să rezolv problema asta",
    serviceDefault: "Vreau o soluție pentru firma mea",
  },
  navigation: {
    primary: primaryNav,
    marketing: primaryNav,
    megaMenus: {
      services: {
        label: "Servicii",
        lead: "Software construit pe procesele firmei tale.",
        cols: 3,
      },
      solutions: {
        label: "Soluții",
        lead: "Alege ce problemă vrei să rezolvi.",
        cols: 2,
      },
      industries: {
        label: "Industrii",
        lead: "Software specific domeniului tău.",
        cols: 2,
      },
    },
    services: servicesNav,
    solutions: solutionsNav,
    industries: industriesNav,
    resources: [
      { label: "Portofoliu", href: "/portofoliu" },
      { label: "Blog", href: "/blog" },
      { label: "Prețuri", href: "/preturi" },
      { label: "Contact", href: "/contact" },
    ] as NavItem[],
    company: [
      { label: "Prețuri", href: "/preturi" },
      { label: "Portofoliu", href: "/portofoliu" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ] as NavItem[],
    legal: [
      { label: "Politică de confidențialitate", href: "/privacy" },
      { label: "Termeni și condiții", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ] as NavItem[],
  },
  social: {
    linkedin: null,
    github: null,
    facebook: null,
  },
  media: {
    heroDashboard: {
      src: "/media/showcase/hero-dashboard.webp",
      alt: "Dashboard custom cu indicatori operaționali pentru o firmă de servicii",
      caption: "Dashboard operațional custom",
    },
    crmPipeline: {
      src: "/media/showcase/crm-pipeline.webp",
      alt: "Pipeline CRM custom cu lead-uri, oferte, clienți și contracte",
      caption: "Pipeline CRM pe etapele firmei",
    },
    automationFlow: {
      src: "/media/showcase/automation-flow.webp",
      alt: "Flux de automatizare business cu trigger, reguli și acțiuni automate",
      caption: "Automatizare cap-coadă",
    },
    contractGenerator: {
      src: "/media/showcase/contract-generator.webp",
      alt: "Generator de contracte cu variabile completate automat",
      caption: "Contracte generate fără copy-paste",
    },
    dashboardReports: {
      src: "/media/showcase/dashboard-reports.webp",
      alt: "Dashboard cu rapoarte și KPI pentru management",
      caption: "Rapoarte live pentru decizii rapide",
    },
    bookingCalendar: {
      src: "/media/showcase/booking-calendar.webp",
      alt: "Calendar de rezervări cu sloturi și notificări automate",
      caption: "Programări online sincronizate",
    },
    clientPortal: {
      src: "/media/showcase/client-portal.webp",
      alt: "Portal client cu documente, status proiect și facturi",
      caption: "Spațiu privat pentru clienți",
    },
    ecommerceCheckout: {
      src: "/media/showcase/ecommerce-checkout.webp",
      alt: "Checkout e-commerce custom cu produse, plăți și livrare",
      caption: "Checkout adaptat procesului tău",
    },
    serviceTicketSystem: {
      src: "/media/showcase/service-ticket-system.webp",
      alt: "Sistem de mentenanță cu ticket board, uptime și monitorizare",
      caption: "Mentenanță vizibilă și măsurabilă",
    },
    architectureMap: {
      src: "/media/showcase/architecture-map.webp",
      alt: "Hartă de arhitectură pentru o aplicație web custom modulară",
      caption: "Arhitectură modulară, pregătită să crească",
    },
    ogImage: {
      src: "/og/programator-personal.webp",
      alt: "Programator Personal - software custom pentru firme",
    },
  } satisfies Record<string, MediaItem>,
  footer: {
    miniCta: {
      title: "Ai un proces care îți mănâncă timp?",
      text: "Spune-mi cum lucrezi acum și îți pot propune o variantă clară de sistem, automatizare sau aplicație custom.",
      cta: { label: "Programează o discuție", href: "/contact" },
    },
  },
  sitemap: {
    staticPages: [
      "/",
      "/servicii",
      "/preturi",
      "/contact",
      "/about",
      "/portofoliu",
      "/blog",
      "/privacy",
      "/terms",
      "/cookies",
    ],
  },
  name: "Programator Personal",
  description:
    "Programator Personal construiește CRM-uri custom, aplicații web și automatizări pentru firme care vor să scape de Excel, WhatsApp și procese manuale.",
};

export type SiteConfig = typeof siteConfig;
export type MediaKey = keyof typeof siteConfig.media;

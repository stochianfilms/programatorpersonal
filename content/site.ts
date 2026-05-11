export interface NavItem {
  label: string;
  href: string;
}

export interface NavItemRich extends NavItem {
  description: string;
}

export const siteConfig = {
  name: "Programator Personal",
  description:
    "Programator Personal construiește CRM-uri custom, aplicații web și automatizări pentru firme care vor să scape de Excel, WhatsApp și procese manuale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://programatorpersonal.ro",
  contact: {
    email: "hai@programatorpersonal.ro",
    phone: "+40 7XX XXX XXX",
    phoneHref: "+40700000000",
    location: "București · România",
  },
  cta: {
    primary: "Programează o discuție",
    diagnostic: "Spune-mi ce vrei să automatizăm",
    portfolio: "Vreau un sistem asemănător",
    industry: "Vreau software pentru firma mea",
    problem: "Vreau să rezolv problema asta",
  },
  navigation: {
    marketing: [
      { label: "Servicii", href: "/servicii" },
      { label: "Soluții", href: "/servicii" },
      { label: "Industrii", href: "/servicii" },
      { label: "Portofoliu", href: "/portofoliu" },
      { label: "Prețuri", href: "/preturi" },
      { label: "Contact", href: "/contact" },
    ] as NavItem[],
    services: [
      { label: "CRM custom", href: "/crm-custom", description: "Pipeline, clienți, urmăriri" },
      { label: "Automatizări business", href: "/automatizari-business", description: "Procese care rulează singure" },
      { label: "Aplicații web custom", href: "/aplicatii-web-custom", description: "Software pe fluxul tău" },
      { label: "Generator contracte", href: "/generator-contracte", description: "Contracte generate în secunde" },
      { label: "Dashboard-uri și rapoarte", href: "/dashboard-rapoarte", description: "Date live din firmă" },
      { label: "Platformă rezervări", href: "/platforma-rezervari", description: "Programări online automate" },
      { label: "Portal clienți", href: "/portal-clienti", description: "Spațiu privat pentru clienți" },
      { label: "Magazin online custom", href: "/magazin-online-custom", description: "E-commerce pe procesele tale" },
      { label: "Mentenanță software", href: "/mentenanta-software", description: "Aplicația evoluează fără tine" },
    ] as NavItemRich[],
    solutions: [
      { label: "Scapă de Excel", href: "/scapa-de-excel", description: "CRM și automatizări în loc de tabele" },
      { label: "Gestiune clienți firmă", href: "/gestiune-clienti-firma", description: "Toți clienții, organizați" },
      { label: "Automatizare contracte", href: "/automatizare-contracte", description: "Contracte fără copy-paste" },
      { label: "Rapoarte automate", href: "/rapoarte-automate-firma", description: "Date la zi, nu la final de lună" },
      { label: "Programări online", href: "/programari-online-firma", description: "Calendar fără WhatsApp" },
      { label: "Portal clienți firmă", href: "/portal-clienti-firma", description: "Clienții văd statusul singuri" },
    ] as NavItemRich[],
    industries: [
      { label: "Service-uri auto", href: "/software-pentru-service-uri" },
      { label: "Clinici", href: "/software-pentru-clinici" },
      { label: "Saloane", href: "/software-pentru-saloane" },
      { label: "Restaurante", href: "/software-pentru-restaurante" },
      { label: "Agenții imobiliare", href: "/software-pentru-agentii-imobiliare" },
      { label: "Construcții", href: "/software-pentru-firme-de-constructii" },
      { label: "Evenimente", href: "/software-pentru-firme-de-evenimente" },
      { label: "E-commerce", href: "/software-pentru-ecommerce" },
    ] as NavItem[],
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
};

export type SiteConfig = typeof siteConfig;

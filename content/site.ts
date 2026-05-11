export const siteConfig = {
  name: "Programator Personal",
  description: "Website pentru servicii software, clienți și proiecte.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://programatorpersonal.ro",
  contact: {
    email: "hai@programatorpersonal.ro",
    phone: "+40 7XX XXX XXX",
    phoneHref: "+40700000000",
    location: "București · România",
  },
  navigation: {
    marketing: [
      { label: "Servicii", href: "/servicii" },
      { label: "Automatizări", href: "/automatizari-business" },
      { label: "CRM", href: "/crm-custom" },
      { label: "Portofoliu", href: "/portofoliu" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "CRM custom", href: "/crm-custom" },
      { label: "Automatizări business", href: "/automatizari-business" },
      { label: "Aplicații web custom", href: "/aplicatii-web-custom" },
      { label: "Generator contracte", href: "/generator-contracte" },
      { label: "Dashboard-uri și rapoarte", href: "/dashboard-rapoarte" },
      { label: "Platformă rezervări", href: "/platforma-rezervari" },
      { label: "Portal clienți", href: "/portal-clienti" },
      { label: "Magazin online custom", href: "/magazin-online-custom" },
      { label: "Mentenanță software", href: "/mentenanta-software" },
    ],
    company: [
      { label: "Prețuri", href: "/preturi" },
      { label: "Portofoliu", href: "/portofoliu" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Politică de confidențialitate", href: "/privacy" },
      { label: "Termeni și condiții", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
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
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = SiteConfig["navigation"]["marketing"][number];

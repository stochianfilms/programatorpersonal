import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { siteConfig } from "@/content/site";
import { BusinessOSMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Servicii | Programator Personal",
  description: "Software custom pentru firme din România — CRM, automatizări, aplicații web, magazine online și mentenanță.",
  alternates: { canonical: `${siteConfig.url}/servicii` },
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const serviceList = [
  {
    href: "/crm-custom",
    tag: "CRM",
    title: "CRM custom",
    body: "Toți clienții, toate etapele, toate urmăririle — într-un singur loc construit pe felul tău de lucru. Fără Excel, fără WhatsApp pierdut.",
  },
  {
    href: "/automatizari-business",
    tag: "Automatizări",
    title: "Automatizări business",
    body: "Procese repetitive care rulează singure. Emailuri, rapoarte, sincronizări, notificări — fără să te atingi de ele.",
  },
  {
    href: "/aplicatii-web-custom",
    tag: "Aplicații web",
    title: "Aplicații web custom",
    body: "Software construit exact pe fluxul tău de lucru. Nu un produs generic adaptat, ci o aplicație care reflectă procesele reale ale firmei.",
  },
  {
    href: "/generator-contracte",
    tag: "Documente",
    title: "Generator de contracte",
    body: "Contract generat cu datele clientului în câteva secunde. Fără copy-paste în Word, fără greșeli de date.",
  },
  {
    href: "/dashboard-rapoarte",
    tag: "Date",
    title: "Dashboard-uri și rapoarte",
    body: "Date live din toate sursele firmei tale — vânzări, clienți, stoc, echipă — vizibile la un click, nu la final de lună.",
  },
  {
    href: "/platforma-rezervari",
    tag: "Rezervări",
    title: "Platformă de rezervări",
    body: "Programări online cu confirmare automată, reminder-uri și calendar sincronizat. Fără WhatsApp, fără no-show neașteptat.",
  },
  {
    href: "/portal-clienti",
    tag: "Portal",
    title: "Portal clienți",
    body: "Un spațiu privat unde clienții tăi văd statusul proiectelor, documentele și facturile — fără să te sune să întrebe.",
  },
  {
    href: "/magazin-online-custom",
    tag: "E-commerce",
    title: "Magazin online custom",
    body: "Magazin construit pe procesele tale: catalog, stoc, comenzi, livrare, facturare — integrat cu ce folosești deja.",
  },
  {
    href: "/mentenanta-software",
    tag: "Mentenanță",
    title: "Mentenanță software",
    body: "Aplicația ta funcționează, evoluează și e actualizată fără să te ocupi tu. Update-uri, intervenții, dezvoltare continuă.",
  },
];

export default function ServiciiPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section style={{ paddingTop: "calc(var(--s-10) + 40px)", paddingBottom: "var(--s-8)", position: "relative" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="pp-visual-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(360px, 540px)", gap: "var(--s-8)", alignItems: "start" }}>
            <div>
              <div className="chip" style={{ marginBottom: "var(--s-4)" }}>
                <span className="dot pulse-dot" /> disponibil pentru proiecte noi
              </div>
              <h1 className="h-display" style={{ maxWidth: 700, fontSize: "clamp(32px, 5vw, 64px)", marginBottom: "var(--s-4)" }}>
                Software custom pentru firma ta.
              </h1>
              <p className="lead" style={{ maxWidth: 580, color: "var(--fg-2)", marginBottom: "var(--s-6)" }}>
                Nu vând produse generice. Construiesc sisteme care se potrivesc pe procesele reale ale firmei tale — CRM, automatizări, aplicații web și mai mult.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Discutăm proiectul tău <Arrow />
              </Link>
            </div>
            <div className="pp-only-desktop">
              <BusinessOSMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Business OS visual */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">ce construim împreună</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Un sistem complet, nu o colecție de tool-uri.</h2>
          </div>
          <BusinessOSMockup />
        </div>
      </section>

      {/* Services grid */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="grid grid-3">
            {serviceList.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
              >
                <span className="chip" style={{ alignSelf: "flex-start", fontSize: 11 }}>{s.tag}</span>
                <h2 className="h-3">{s.title}</h2>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>{s.body}</p>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)", display: "flex", alignItems: "center", gap: 4 }}>
                  Vezi detalii <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pp-final" id="contact">
        <div className="container">
          <div className="pp-final-card">
            <div className="pp-final-grid-bg" />
            <div className="pp-final-content" style={{ textAlign: "center" }}>
              <div className="chip" style={{ marginBottom: 24 }}>
                <span className="dot" /> răspund în 24h, în zilele lucrătoare
              </div>
              <h2 className="h-1" style={{ marginBottom: "var(--s-4)" }}>
                Nu ești sigur ce ai nevoie?
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)", maxWidth: 560, margin: "0 auto var(--s-6)" }}>
                Spune-mi ce problemă vrei să rezolvi. Îți propun o soluție clară și realistă — fără audit de 2 săptămâni.
              </p>
              <Link href="/contact" className="btn btn-primary">
                {siteConfig.ctas.estimate.label} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

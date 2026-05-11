import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { IndustrySystemMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Software custom pentru industrii | Programator Personal",
  description:
    "Software construit pe realitățile fiecărei industrii: service-uri, clinici, saloane, restaurante, imobiliare, construcții, evenimente, e-commerce.",
  alternates: { canonical: "https://programatorpersonal.ro/industrii" },
  openGraph: {
    title: "Software custom pentru industrii | Programator Personal",
    description:
      "Software construit pe realitățile fiecărei industrii: service-uri, clinici, saloane, restaurante, imobiliare, construcții, evenimente, e-commerce.",
    type: "website",
  },
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const industries = [
  {
    slug: "software-pentru-service-uri",
    industryName: "Service-uri auto",
    title: "Software pentru service auto",
    problems: ["Fișe service pe hârtie", "Stoc piese din memorie", "Client care sună pentru status"],
  },
  {
    slug: "software-pentru-clinici",
    industryName: "Clinici și cabinete",
    title: "Software pentru clinici",
    problems: ["Programări pe WhatsApp", "Dosare pe hârtie", "No-show frecvent"],
  },
  {
    slug: "software-pentru-saloane",
    industryName: "Saloane de înfrumusețare",
    title: "Software pentru saloane",
    problems: ["Agendă fizică", "Abonamente în Excel", "Nu știi cine generează cel mai mult"],
  },
  {
    slug: "software-pentru-restaurante",
    industryName: "Restaurante și HoReCa",
    title: "Software pentru restaurante",
    problems: ["Rezervări pe telefon", "Stoc din memorie", "Rapoarte manuale"],
  },
  {
    slug: "software-pentru-agentii-imobiliare",
    industryName: "Agenții imobiliare",
    title: "Software pentru agenții imobiliare",
    problems: ["Lead-uri în inbox", "Follow-up din memorie", "Tranzacții pierdute"],
  },
  {
    slug: "software-pentru-firme-de-constructii",
    industryName: "Firme de construcții",
    title: "Software pentru construcții",
    problems: ["Șantiere în Excel", "Devize în Word", "Situații cu întârziere"],
  },
  {
    slug: "software-pentru-firme-de-evenimente",
    industryName: "Firme de evenimente",
    title: "Software pentru evenimente",
    problems: ["Furnizori pe WhatsApp", "Bugete în Excel", "Coordonare haotică"],
  },
  {
    slug: "software-pentru-ecommerce",
    industryName: "E-commerce",
    title: "Software pentru e-commerce",
    problems: ["Comenzi procesate manual", "Stoc desincronizat", "AWB-uri generate individual"],
  },
];

export default function IndustriiPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section
        style={{
          paddingTop: "calc(var(--s-10) + 40px)",
          paddingBottom: "var(--s-9)",
          position: "relative",
        }}
      >
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="pp-visual-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(360px, 540px)", gap: "var(--s-8)", alignItems: "start" }}>
            <div>
              <div style={{ marginBottom: "var(--s-5)" }}>
                <span className="chip">
                  <span className="dot pulse-dot" /> software pe industria ta
                </span>
              </div>
              <h1
                className="h-display"
                style={{
                  maxWidth: 820,
                  fontSize: "clamp(32px, 5vw, 68px)",
                  marginBottom: "var(--s-5)",
                }}
              >
                Software custom pentru industrii cu procese clare, dar tool-uri improvizate.
              </h1>
              <p className="lead" style={{ maxWidth: 640, color: "var(--fg-2)" }}>
                Fiecare industrie are propriul haos: fișe, programări, comenzi, contracte, stocuri. Construim software în jurul realității tale.
              </p>
            </div>
            <div className="pp-only-desktop">
              <IndustrySystemMockup variant="service-uri" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry system visual */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">exemplu sistem industry</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Fiecare industrie primește un sistem complet, adaptat proceselor ei.</h2>
          </div>
          <IndustrySystemMockup variant="service-uri" />
        </div>
      </section>

      {/* Industry cards */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">alege industria ta</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Din ce industrie ești?</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Selectează industria ta și vezi exact ce probleme rezolvăm și cum.
            </p>
          </div>
          <div className="grid grid-2">
            {industries.map((ind) => (
              <div key={ind.slug} className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {ind.industryName}
                </div>
                <h3 className="h-3">{ind.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                  {ind.problems.map((prob, i) => (
                    <li key={i} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-2)", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--line-2)", flexShrink: 0 }}>—</span>
                      {prob}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${ind.slug}`}
                  className="mono"
                  style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "var(--s-2)" }}
                >
                  Software pentru {ind.industryName} <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pp-final" id="contact">
        <div className="container">
          <div className="pp-final-card">
            <div className="pp-final-grid-bg" />
            <div className="pp-final-content">
              <div className="chip" style={{ marginBottom: 24 }}>
                <span className="dot" /> răspund în 24h, în zilele lucrătoare
              </div>
              <h2 className="h-1" style={{ marginBottom: "var(--s-4)" }}>
                Vreau software pentru industria mea
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
                Nu ai văzut industria ta în lista de mai sus? Nu contează — construim software pentru orice tip de firmă cu procese clare de automatizat.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Vorbim despre industria ta <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

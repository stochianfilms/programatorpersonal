import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { siteConfig } from "@/content/site";
import { ProblemToSolutionMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Soluții software pentru firme | Programator Personal",
  description:
    "Software custom care rezolvă problemele operaționale ale firmei tale — Excel, contracte, rapoarte, programări, portal clienți. Fără să știi ce tehnologie vrei.",
  alternates: { canonical: "https://programatorpersonal.ro/solutii" },
  openGraph: {
    title: "Soluții software pentru firme | Programator Personal",
    description:
      "Software custom care rezolvă problemele operaționale ale firmei tale — Excel, contracte, rapoarte, programări, portal clienți. Fără să știi ce tehnologie vrei.",
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

const problems = [
  {
    slug: "scapa-de-excel",
    label: "Scapă de Excel",
    description: "Fișiere multiple, versiuni confuze, date incomplete. Transformăm Excel-ul în sistem.",
  },
  {
    slug: "gestiune-clienti-firma",
    label: "Gestiune clienți",
    description: "Lead-uri pierdute, follow-up din memorie. Toți clienții, organizați.",
  },
  {
    slug: "automatizare-contracte",
    label: "Automatizare contracte",
    description: "Copy-paste în Word, greșeli de date. Contracte în secunde, fără erori.",
  },
  {
    slug: "rapoarte-automate-firma",
    label: "Rapoarte automate",
    description: "Rapoarte manuale la final de lună. Date live, rapoarte generate singure.",
  },
  {
    slug: "programari-online-firma",
    label: "Programări online",
    description: "WhatsApp și telefon, no-show frecvent. Calendar online cu confirmare automată.",
  },
  {
    slug: "portal-clienti-firma",
    label: "Portal clienți",
    description: "Clienții te sună zilnic. Un portal unde văd singuri ce au nevoie.",
  },
];

const cta = siteConfig.ctas.diagnostic;

export default function SolutiiPage() {
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
                  <span className="dot pulse-dot" /> soluții operaționale
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
                Soluții pentru problemele operaționale care încetinesc firma ta.
              </h1>
              <p className="lead" style={{ maxWidth: 620, color: "var(--fg-2)", marginBottom: "var(--s-6)" }}>
                Nu trebuie să știi ce tehnologie vrei. Trebuie să știi unde pierzi timp, clienți sau control.
              </p>
              <Link href={cta.href} className="btn btn-primary">
                {cta.label} <Arrow />
              </Link>
            </div>
            <div className="pp-only-desktop">
              <ProblemToSolutionMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Problem to solution visual */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">transformarea digitală</span>
              <span className="line" />
            </div>
            <h2 className="h-2">De la tooluri disparate la un sistem unitar.</h2>
          </div>
          <ProblemToSolutionMockup />
        </div>
      </section>

      {/* Problem cards */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">alege problema</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce problemă vrei să rezolvi?</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Alege situația care seamănă cel mai mult cu ce se întâmplă în firma ta.
            </p>
          </div>
          <div className="grid grid-2">
            {problems.map((p) => (
              <div key={p.slug} className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  problemă operațională
                </div>
                <h3 className="h-3">{p.label}</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>
                  {p.description}
                </p>
                <Link
                  href={`/${p.slug}`}
                  className="mono"
                  style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6 }}
                >
                  Citește mai mult <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">înainte și după</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum arată firma înainte și după un sistem clar.</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
            }}
          >
            <div
              className="card"
              style={{
                borderColor: "var(--line-2)",
                background: "var(--bg-1)",
              }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: "var(--s-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                înainte
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                {[
                  "Excel cu fișiere multiple și versiuni contradictorii",
                  "WhatsApp pentru programări, clienți și furnizori",
                  "Word editat manual pentru fiecare contract",
                  "Emailuri pierdute cu documente importante",
                  "Procese manuale care depind de o singură persoană",
                  "Rapoarte lunare care durează zile întregi",
                ].map((item, i) => (
                  <li key={i} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-3)" }}>
                    <span style={{ color: "var(--line-2)", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="card"
              style={{
                borderColor: "var(--accent-line)",
                background: "var(--accent-soft)",
              }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: "var(--s-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                după
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                {[
                  "CRM cu date centralizate, accesibile oricând",
                  "Dashboard cu KPI-uri live, actualizate automat",
                  "Automatizări care rulează singure, fără intervenție manuală",
                  "Portal client unde văd singuri statusul și documentele",
                  "Date live din toate sistemele firmei",
                  "Rapoarte generate automat, trimise la interval fix",
                ].map((item, i) => (
                  <li key={i} className="body-sm" style={{ color: "var(--fg-2)", display: "flex", gap: "var(--s-3)" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
                {cta.label}
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
                Spune-mi unde pierzi cel mai mult timp. Îți propun o soluție concretă — fără audit de 2 săptămâni.
              </p>
              <Link href={cta.href} className="btn btn-primary">
                {cta.label} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import {
  Customer360Mockup,
  ReportsDashboardMockup,
  BookingCalendarMockup,
  EcommerceOpsMockup,
  ServiceTicketDashboardMockup,
} from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Portofoliu | Programator Personal",
  description: "Proiecte software livrate pentru firme din România — CRM-uri custom, automatizări, aplicații web și platforme.",
  alternates: { canonical: "https://programatorpersonal.ro/portofoliu" },
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const caseStudies = [
  {
    tag: "CRM custom",
    industry: "Atlas Imobiliare · 8 angajați",
    title: "CRM cu vedere completă client și follow-up automat",
    problem: "Lead-uri pierdute în inbox și WhatsApp. Nimeni nu știa care ofertă e în ce stadiu.",
    result: "Zero lead-uri pierdute din prima lună. Timp de răspuns la contacte: sub 2 ore.",
    stats: [
      { val: "↓ 70%", label: "timp de răspuns" },
      { val: "0", label: "lead-uri pierdute" },
      { val: "6 săpt.", label: "livrat în" },
    ],
    Mockup: Customer360Mockup,
  },
  {
    tag: "Automatizări & Rapoarte",
    industry: "Nova Service · 5 angajați",
    title: "Dashboard live și rapoarte automate lunare",
    problem: "Fiecare angajat pierdea 3h/lună să genereze manual rapoartele și să trimită emailuri.",
    result: "Rapoartele se trimit singure în prima zi lucrătoare. 15h economisite lunar.",
    stats: [
      { val: "15h", label: "economisite/lună" },
      { val: "0", label: "erori de trimitere" },
      { val: "4 săpt.", label: "livrat în" },
    ],
    Mockup: ReportsDashboardMockup,
  },
  {
    tag: "Platformă rezervări",
    industry: "Clinica Atlas · 12 medici",
    title: "Platformă de programări online cu reminder-uri automate",
    problem: "Programări pe WhatsApp, 30% no-show, secretara ocupată 4h/zi cu telefoane.",
    result: "No-show redus cu 60%. Programări 24/7 fără intervenție umană.",
    stats: [
      { val: "↓ 60%", label: "no-show" },
      { val: "24/7", label: "disponibil" },
      { val: "5 săpt.", label: "livrat în" },
    ],
    Mockup: BookingCalendarMockup,
  },
  {
    tag: "E-commerce",
    industry: "ShopNova · 20 angajați",
    title: "Sistem de gestiune comenzi și stoc în timp real",
    problem: "Stoc pe foi Excel, comenzi procesate manual, AWB-uri generate individual.",
    result: "Erori de comandă eliminate. Stocul e vizibil live pentru toată echipa.",
    stats: [
      { val: "0", label: "erori comenzi" },
      { val: "live", label: "stoc vizibil" },
      { val: "8 săpt.", label: "livrat în" },
    ],
    Mockup: EcommerceOpsMockup,
  },
];

export default function PortofoliuPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section
        style={{
          paddingTop: "calc(var(--s-10) + 40px)",
          paddingBottom: "var(--s-8)",
          position: "relative",
        }}
      >
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="pp-visual-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(360px, 540px)", gap: "var(--s-8)", alignItems: "start" }}>
            <div>
              <div className="chip" style={{ marginBottom: "var(--s-4)" }}>proiecte livrate</div>
              <h1
                className="h-display"
                style={{
                  maxWidth: 700,
                  fontSize: "clamp(32px, 5vw, 64px)",
                  marginBottom: "var(--s-4)",
                }}
              >
                Ce am construit și ce rezultate a produs.
              </h1>
              <p className="lead" style={{ maxWidth: 560, color: "var(--fg-2)" }}>
                Fiecare proiect de mai jos a pornit de la o problemă concretă și a livrat rezultate măsurabile în primele 30 de zile de utilizare.
              </p>
            </div>
            <div className="pp-only-desktop">
              <ServiceTicketDashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section" style={{ background: "var(--bg-1)", paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-8)" }}>
            {caseStudies.map((cs, i) => {
              const { Mockup } = cs;
              return (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: "var(--s-7)",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--s-8)",
                    alignItems: "start",
                  }}
                >
                  {/* Left: content */}
                  <div>
                    <div style={{ display: "flex", gap: "var(--s-3)", marginBottom: "var(--s-5)", flexWrap: "wrap" }}>
                      <span className="chip" style={{ fontSize: 11 }}>{cs.tag}</span>
                      <span
                        className="mono"
                        style={{ fontSize: 11, color: "var(--fg-4)", display: "flex", alignItems: "center" }}
                      >
                        {cs.industry}
                      </span>
                    </div>
                    <h2 className="h-2" style={{ marginBottom: "var(--s-4)", fontSize: "clamp(18px, 2vw, 24px)" }}>
                      {cs.title}
                    </h2>
                    <div style={{ marginBottom: "var(--s-5)" }}>
                      <div
                        className="mono"
                        style={{ fontSize: 11, color: "var(--fg-4)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}
                      >
                        problema
                      </div>
                      <p className="body-sm" style={{ color: "var(--fg-3)" }}>{cs.problem}</p>
                    </div>
                    <div
                      style={{
                        background: "var(--accent-soft)",
                        border: "1px solid var(--accent-line)",
                        borderRadius: "var(--r-2)",
                        padding: "var(--s-4)",
                        marginBottom: "var(--s-5)",
                      }}
                    >
                      <div
                        className="mono"
                        style={{ fontSize: 11, color: "var(--accent)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}
                      >
                        rezultat
                      </div>
                      <p className="body-sm">{cs.result}</p>
                    </div>
                    <div style={{ display: "flex", gap: "var(--s-5)" }}>
                      {cs.stats.map((s) => (
                        <div key={s.label}>
                          <div className="mono" style={{ fontSize: 24, fontWeight: 600, color: "var(--fg-1)", lineHeight: 1 }}>
                            {s.val}
                          </div>
                          <div className="body-sm" style={{ color: "var(--fg-3)", marginTop: 4 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: mockup */}
                  <div>
                    <Mockup />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pp-final">
        <div className="container">
          <div className="pp-final-card">
            <div className="pp-final-grid-bg" />
            <div className="pp-final-content" style={{ textAlign: "center" }}>
              <div className="chip" style={{ marginBottom: 24 }}>
                <span className="dot" /> răspund în 24h, în zilele lucrătoare
              </div>
              <h2 className="h-1" style={{ marginBottom: "var(--s-4)" }}>
                Și eu vreau ceva similar.
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)", maxWidth: 520, margin: "0 auto var(--s-6)" }}>
                Spune-mi care din proiectele de mai sus seamănă cel mai mult cu problema ta. Îți propun o soluție în 24h.
              </p>
              <div style={{ display: "flex", gap: "var(--s-4)", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Cere estimare gratuită <Arrow />
                </Link>
                <Link href="/preturi" className="btn btn-secondary">
                  Vezi prețuri orientative
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

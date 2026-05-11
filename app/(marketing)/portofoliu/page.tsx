import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import {
  Customer360Mockup,
  ReportsDashboardMockup,
  BookingCalendarMockup,
  EcommerceOpsMockup,
  BusinessOSMockup,
} from "@/components/marketing/mockups";
import { ServiceTicketHeroPreview } from "@/components/marketing/hero-previews";
import { CTAGroup, FinalCTASection } from "@/components/marketing/cta/index";

export const metadata: Metadata = {
  title: "Portofoliu | Programator Personal",
  description:
    "Sisteme software livrate și concepte demo pentru firme din România — CRM-uri custom, automatizări, aplicații web și platforme operaționale.",
  alternates: { canonical: "https://programatorpersonal.ro/portofoliu" },
};

type BadgeType = "real" | "demo" | "concept" | "intern";

const badgeConfig: Record<BadgeType, { label: string; color: string; bg: string }> = {
  real: { label: "proiect real", color: "var(--accent)", bg: "var(--accent-soft)" },
  demo: { label: "demo funcțional", color: "var(--fg-2)", bg: "var(--bg-2)" },
  concept: { label: "concept", color: "var(--fg-3)", bg: "var(--bg-2)" },
  intern: { label: "uz intern", color: "var(--fg-3)", bg: "var(--bg-2)" },
};

const caseStudies = [
  {
    badge: "real" as BadgeType,
    tag: "CRM custom",
    industry: "Atlas Imobiliare · 8 angajați",
    title: "CRM cu vedere completă client și follow-up automat",
    problem:
      "Lead-uri pierdute în inbox și WhatsApp. Nimeni nu știa care ofertă e în ce stadiu.",
    result:
      "Zero lead-uri pierdute din prima lună. Timp de răspuns la contacte: sub 2 ore.",
    modules: ["CRM & Customer 360", "Workflow Automation", "Contract Generator"],
    stats: [
      { val: "↓ 70%", label: "timp de răspuns" },
      { val: "0", label: "lead-uri pierdute" },
      { val: "6 săpt.", label: "livrat în" },
    ],
    Mockup: Customer360Mockup,
  },
  {
    badge: "real" as BadgeType,
    tag: "Automatizări & Rapoarte",
    industry: "Nova Service · 5 angajați",
    title: "Dashboard live și rapoarte automate lunare",
    problem:
      "Fiecare angajat pierdea 3h/lună să genereze manual rapoartele și să trimită emailuri.",
    result: "Rapoartele se trimit singure în prima zi lucrătoare. 15h economisite lunar.",
    modules: ["Dashboard & BI", "Workflow Automation"],
    stats: [
      { val: "15h", label: "economisite/lună" },
      { val: "0", label: "erori de trimitere" },
      { val: "4 săpt.", label: "livrat în" },
    ],
    Mockup: ReportsDashboardMockup,
  },
  {
    badge: "real" as BadgeType,
    tag: "Platformă rezervări",
    industry: "Clinica Atlas · 12 medici",
    title: "Platformă de programări online cu reminder-uri automate",
    problem:
      "Programări pe WhatsApp, 30% no-show, secretara ocupată 4h/zi cu telefoane.",
    result: "No-show redus cu 60%. Programări 24/7 fără intervenție umană.",
    modules: ["Booking Calendar", "Workflow Automation", "CRM & Customer 360"],
    stats: [
      { val: "↓ 60%", label: "no-show" },
      { val: "24/7", label: "disponibil" },
      { val: "5 săpt.", label: "livrat în" },
    ],
    Mockup: BookingCalendarMockup,
  },
  {
    badge: "real" as BadgeType,
    tag: "E-commerce",
    industry: "ShopNova · 20 angajați",
    title: "Sistem de gestiune comenzi și stoc în timp real",
    problem:
      "Stoc pe foi Excel, comenzi procesate manual, AWB-uri generate individual.",
    result: "Erori de comandă eliminate. Stocul e vizibil live pentru toată echipa.",
    modules: ["Dashboard & BI", "Workflow Automation", "Integrations & API"],
    stats: [
      { val: "0", label: "erori comenzi" },
      { val: "live", label: "stoc vizibil" },
      { val: "8 săpt.", label: "livrat în" },
    ],
    Mockup: EcommerceOpsMockup,
  },
];

const ArrowRight = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M2 7H12M12 7L8 3M12 7L8 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
          <div
            className="pp-visual-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              gap: "var(--s-8)",
              alignItems: "start",
            }}
          >
            <div>
              <div className="chip" style={{ marginBottom: "var(--s-4)" }}>
                proiecte livrate
              </div>
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
              <p
                className="lead"
                style={{ maxWidth: 560, color: "var(--fg-2)", marginBottom: "var(--s-6)" }}
              >
                Proiectele de mai jos sunt sisteme reale pentru firme din România. Unde e marcată
                sursa — e real. Demo-urile funcționale arată ce se poate construi pe același tip de
                problemă.
              </p>
              <CTAGroup
                primaryLabel="Programează o discuție de 30 min"
                primaryHref="/contact"
              />
            </div>
            <div className="pp-hero-preview-wrap">
              <ServiceTicketHeroPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Featured showcase — back-office */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">showcase</span>
              <span className="line" />
            </div>
            <h2 className="h-1">
              Back-office complet: fișe, tickete, garanții, statusuri, dashboard.
            </h2>
            <p className="lead" style={{ margin: 0, maxWidth: 620 }}>
              Un sistem construit din module independente — fiecare rezolvă o problemă, toate
              comunică într-un flux operațional coerent.
            </p>
          </div>
          <div
            className="card"
            style={{
              padding: "var(--s-6)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-8)",
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "var(--s-3)", marginBottom: "var(--s-5)", flexWrap: "wrap" }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 4,
                    border: "1px solid var(--line-2)",
                    color: "var(--fg-3)",
                    background: "var(--bg-2)",
                  }}
                >
                  demo funcțional
                </span>
                <span className="chip" style={{ fontSize: 11 }}>Back-office custom</span>
              </div>
              <h3 className="h-2" style={{ marginBottom: "var(--s-4)" }}>
                Sistem service: de la fișă la livrare, fără haos.
              </h3>
              <div style={{ marginBottom: "var(--s-4)" }}>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--fg-4)",
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  problema
                </div>
                <p className="body-sm" style={{ color: "var(--fg-3)" }}>
                  Fișe de service în Excel, documente generate manual, statusuri comunicate
                  pe WhatsApp. Nimeni nu știe fără să întrebe unde e mașina sau aparatul.
                </p>
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
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  soluție
                </div>
                <p className="body-sm">
                  Fișă digitală cu număr unic, flux de statusuri, deviz generat automat,
                  notificare client la finalizare — totul într-un singur sistem.
                </p>
              </div>
              <div style={{ marginBottom: "var(--s-5)" }}>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--fg-4)",
                    marginBottom: "var(--s-3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  module folosite
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)" }}>
                  {["Ticketing / Helpdesk", "Contract Generator", "Dashboard & BI", "Workflow Automation"].map(
                    (m) => (
                      <span key={m} className="chip" style={{ fontSize: 11 }}>
                        {m}
                      </span>
                    )
                  )}
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Vreau un sistem asemănător <ArrowRight />
              </Link>
            </div>
            <div>
              <BusinessOSMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">proiecte livrate</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Sisteme reale, rezultate măsurabile.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-8)" }}>
            {caseStudies.map((cs, i) => {
              const { Mockup } = cs;
              const badge = badgeConfig[cs.badge];
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
                    <div
                      style={{
                        display: "flex",
                        gap: "var(--s-3)",
                        marginBottom: "var(--s-5)",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="mono"
                        style={{
                          fontSize: 11,
                          padding: "3px 10px",
                          borderRadius: 4,
                          border: `1px solid ${badge.color}33`,
                          color: badge.color,
                          background: badge.bg,
                        }}
                      >
                        {badge.label}
                      </span>
                      <span className="chip" style={{ fontSize: 11 }}>{cs.tag}</span>
                      <span
                        className="mono"
                        style={{ fontSize: 11, color: "var(--fg-4)", display: "flex", alignItems: "center" }}
                      >
                        {cs.industry}
                      </span>
                    </div>
                    <h2
                      className="h-2"
                      style={{ marginBottom: "var(--s-4)", fontSize: "clamp(18px, 2vw, 24px)" }}
                    >
                      {cs.title}
                    </h2>
                    <div style={{ marginBottom: "var(--s-5)" }}>
                      <div
                        className="mono"
                        style={{
                          fontSize: 11,
                          color: "var(--fg-4)",
                          marginBottom: 6,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        problema
                      </div>
                      <p className="body-sm" style={{ color: "var(--fg-3)" }}>
                        {cs.problem}
                      </p>
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
                        style={{
                          fontSize: 11,
                          color: "var(--accent)",
                          marginBottom: 6,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        rezultat
                      </div>
                      <p className="body-sm">{cs.result}</p>
                    </div>
                    <div style={{ marginBottom: "var(--s-5)" }}>
                      <div
                        className="mono"
                        style={{
                          fontSize: 11,
                          color: "var(--fg-4)",
                          marginBottom: "var(--s-3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        module
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)" }}>
                        {cs.modules.map((m) => (
                          <span key={m} className="chip" style={{ fontSize: 11 }}>
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "var(--s-5)", marginBottom: "var(--s-5)" }}>
                      {cs.stats.map((s) => (
                        <div key={s.label}>
                          <div
                            className="mono"
                            style={{
                              fontSize: 24,
                              fontWeight: 600,
                              color: "var(--fg-1)",
                              lineHeight: 1,
                            }}
                          >
                            {s.val}
                          </div>
                          <div className="body-sm" style={{ color: "var(--fg-3)", marginTop: 4 }}>
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn btn-ghost btn-sm">
                      Vreau un sistem asemănător <ArrowRight />
                    </Link>
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
      <FinalCTASection
        title="Și eu vreau ceva similar."
        text="Spune-mi care din proiectele de mai sus seamănă cel mai mult cu problema ta. Îți propun o soluție în 24h."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref="/contact"
        secondaryLabel="Vezi prețuri orientative"
        secondaryHref="/preturi"
      />
    </MarketingShell>
  );
}

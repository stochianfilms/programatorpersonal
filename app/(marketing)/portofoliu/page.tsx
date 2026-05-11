import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

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

/* ── Inline CSS-mockup widgets ── */

const PipelineMockup = () => (
  <div
    style={{
      background: "var(--bg-0)",
      border: "1px solid var(--line-1)",
      borderRadius: "var(--r-3)",
      padding: "var(--s-5)",
      fontFamily: "var(--font-mono)",
    }}
  >
    <div style={{ fontSize: 11, color: "var(--fg-4)", marginBottom: "var(--s-4)" }}>
      pipeline vânzări · live
    </div>
    {[
      { label: "Lead nou", count: 23, pct: 100, color: "var(--fg-4)" },
      { label: "Ofertă trimisă", count: 15, pct: 65, color: "var(--fg-3)" },
      { label: "Negociere", count: 8, pct: 35, color: "var(--accent)" },
      { label: "Câștigat", count: 5, pct: 22, color: "var(--accent)" },
    ].map((row) => (
      <div key={row.label} style={{ marginBottom: "var(--s-3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 4 }}>
          <span style={{ color: "var(--fg-3)" }}>{row.label}</span>
          <span style={{ color: "var(--fg-2)" }}>{row.count}</span>
        </div>
        <div style={{ height: 6, background: "var(--bg-2)", borderRadius: 3 }}>
          <div
            style={{
              height: "100%",
              width: `${row.pct}%`,
              background: row.color === "var(--accent)"
                ? "var(--accent)"
                : "rgba(255,255,255,0.12)",
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ))}
    <div
      style={{
        marginTop: "var(--s-4)",
        padding: "var(--s-3)",
        background: "var(--accent-soft)",
        border: "1px solid var(--accent-line)",
        borderRadius: "var(--r-2)",
        fontSize: 12,
      }}
    >
      <span style={{ color: "var(--accent)" }}>↑ 18%</span>{" "}
      <span style={{ color: "var(--fg-2)" }}>lead-uri vs luna trecută</span>
    </div>
  </div>
);

const AutomationMockup = () => (
  <div
    style={{
      background: "var(--bg-0)",
      border: "1px solid var(--line-1)",
      borderRadius: "var(--r-3)",
      padding: "var(--s-5)",
      fontFamily: "var(--font-mono)",
    }}
  >
    <div style={{ fontSize: 11, color: "var(--fg-4)", marginBottom: "var(--s-4)" }}>
      flux automatizat · rapoarte lunare
    </div>
    {[
      { step: "01", label: "Extrage date din sistem", status: "done" },
      { step: "02", label: "Generează PDF personalizat", status: "done" },
      { step: "03", label: "Trimite pe email clienți", status: "running" },
      { step: "04", label: "Arhivează în Drive", status: "pending" },
    ].map((s) => (
      <div
        key={s.step}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--s-3)",
          padding: "var(--s-3) 0",
          borderBottom: "1px solid var(--line-1)",
        }}
      >
        <span style={{ color: "var(--fg-4)", fontSize: 11, minWidth: 20 }}>{s.step}</span>
        <span style={{ flex: 1, fontSize: 12, color: "var(--fg-2)" }}>{s.label}</span>
        <span
          style={{
            fontSize: 10,
            padding: "2px 8px",
            borderRadius: "var(--r-pill)",
            background:
              s.status === "done"
                ? "var(--accent-soft)"
                : s.status === "running"
                  ? "rgba(255,200,0,0.1)"
                  : "var(--bg-2)",
            color:
              s.status === "done"
                ? "var(--accent)"
                : s.status === "running"
                  ? "#e0b800"
                  : "var(--fg-4)",
            border: `1px solid ${
              s.status === "done"
                ? "var(--accent-line)"
                : s.status === "running"
                  ? "rgba(255,200,0,0.2)"
                  : "var(--line-2)"
            }`,
          }}
        >
          {s.status === "done" ? "✓ gata" : s.status === "running" ? "● rulează" : "○ urmează"}
        </span>
      </div>
    ))}
    <div style={{ marginTop: "var(--s-4)", fontSize: 12, color: "var(--fg-3)" }}>
      Rulat automat <span style={{ color: "var(--accent)" }}>1 iun 2026, 08:00</span>
    </div>
  </div>
);

const BookingMockup = () => (
  <div
    style={{
      background: "var(--bg-0)",
      border: "1px solid var(--line-1)",
      borderRadius: "var(--r-3)",
      padding: "var(--s-5)",
      fontFamily: "var(--font-mono)",
    }}
  >
    <div style={{ fontSize: 11, color: "var(--fg-4)", marginBottom: "var(--s-4)" }}>
      calendar programări · săptămâna curentă
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 4,
        marginBottom: "var(--s-4)",
      }}
    >
      {["Lun", "Mar", "Mie", "Joi", "Vin"].map((d) => (
        <div key={d} style={{ textAlign: "center", fontSize: 10, color: "var(--fg-4)", marginBottom: 4 }}>
          {d}
        </div>
      ))}
      {[
        [1,1,0,1,0],
        [0,1,1,0,1],
        [1,0,1,1,0],
        [1,1,0,0,1],
        [0,1,1,1,0],
        [1,0,0,1,1],
      ].flatMap((row, ri) =>
        row.map((occupied, ci) => (
          <div
            key={`${ri}-${ci}`}
            style={{
              height: 20,
              borderRadius: "var(--r-1)",
              background: occupied
                ? "var(--accent)"
                : "var(--bg-2)",
              border: `1px solid ${occupied ? "var(--accent-line)" : "var(--line-1)"}`,
              opacity: occupied ? 0.8 : 0.4,
            }}
          />
        ))
      )}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
      <span style={{ color: "var(--fg-3)" }}>Ocupat</span>
      <span style={{ color: "var(--accent)" }}>22 programări</span>
    </div>
    <div
      style={{
        marginTop: "var(--s-3)",
        padding: "var(--s-3)",
        background: "var(--accent-soft)",
        border: "1px solid var(--accent-line)",
        borderRadius: "var(--r-2)",
        fontSize: 12,
        color: "var(--accent)",
      }}
    >
      ↓ 60% no-show față de luna anterioară
    </div>
  </div>
);

const StockMockup = () => (
  <div
    style={{
      background: "var(--bg-0)",
      border: "1px solid var(--line-1)",
      borderRadius: "var(--r-3)",
      padding: "var(--s-5)",
      fontFamily: "var(--font-mono)",
    }}
  >
    <div style={{ fontSize: 11, color: "var(--fg-4)", marginBottom: "var(--s-4)" }}>
      gestiune stoc · multi-depozit
    </div>
    {[
      { sku: "PRD-001", name: "Produs A", stoc: 142, status: "ok" },
      { sku: "PRD-002", name: "Produs B", stoc: 8, status: "low" },
      { sku: "PRD-003", name: "Produs C", stoc: 0, status: "out" },
      { sku: "PRD-004", name: "Produs D", stoc: 55, status: "ok" },
    ].map((row) => (
      <div
        key={row.sku}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--s-3)",
          padding: "var(--s-3) 0",
          borderBottom: "1px solid var(--line-1)",
        }}
      >
        <span style={{ fontSize: 10, color: "var(--fg-4)", minWidth: 52 }}>{row.sku}</span>
        <span style={{ flex: 1, fontSize: 12, color: "var(--fg-2)" }}>{row.name}</span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color:
              row.status === "out"
                ? "var(--danger)"
                : row.status === "low"
                  ? "#e0b800"
                  : "var(--fg-1)",
          }}
        >
          {row.stoc}
        </span>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background:
              row.status === "out"
                ? "var(--danger)"
                : row.status === "low"
                  ? "#e0b800"
                  : "var(--accent)",
          }}
        />
      </div>
    ))}
    <div style={{ marginTop: "var(--s-4)", fontSize: 12, color: "var(--fg-3)" }}>
      <span style={{ color: "var(--danger)" }}>1 produs</span> epuizat ·{" "}
      <span style={{ color: "#e0b800" }}>1 produs</span> critic
    </div>
  </div>
);

const caseStudies = [
  {
    tag: "CRM custom",
    industry: "Agenție imobiliară · 8 angajați",
    title: "CRM cu pipeline de vânzări și follow-up automat",
    problem: "Lead-uri pierdute în inbox și WhatsApp. Nimeni nu știa care ofertă e în ce stadiu.",
    result: "Zero lead-uri pierdute din prima lună. Timp de răspuns la contacte: sub 2 ore.",
    stats: [
      { val: "↓ 70%", label: "timp de răspuns" },
      { val: "0", label: "lead-uri pierdute" },
      { val: "6 săpt.", label: "livrat în" },
    ],
    Mockup: PipelineMockup,
  },
  {
    tag: "Automatizări",
    industry: "Firmă de contabilitate · 5 angajați",
    title: "Automatizarea rapoartelor lunare și notificărilor clienți",
    problem: "Fiecare contabil pierdea 3h/lună să genereze manual rapoartele și să trimită emailuri.",
    result: "Rapoartele se trimit singure în prima zi lucrătoare. 15h economisite lunar.",
    stats: [
      { val: "15h", label: "economisite/lună" },
      { val: "0", label: "erori de trimitere" },
      { val: "4 săpt.", label: "livrat în" },
    ],
    Mockup: AutomationMockup,
  },
  {
    tag: "Platformă rezervări",
    industry: "Clinică medicală · 12 medici",
    title: "Platformă de programări online cu reminder-uri automate",
    problem: "Programări pe WhatsApp, 30% no-show, secretara ocupată 4h/zi cu telefoane.",
    result: "No-show redus cu 60%. Programări 24/7 fără intervenție umană.",
    stats: [
      { val: "↓ 60%", label: "no-show" },
      { val: "24/7", label: "disponibil" },
      { val: "5 săpt.", label: "livrat în" },
    ],
    Mockup: BookingMockup,
  },
  {
    tag: "Aplicație internă",
    industry: "Distribuitor en-gros · 20 angajați",
    title: "Sistem de gestiune comenzi și stoc în timp real",
    problem: "Stoc pe foi Excel, comenzi trimise greșit, sincronizare cu furnizori durând 2 zile.",
    result: "Erori de comandă eliminate. Stocul e vizibil live pentru toată echipa.",
    stats: [
      { val: "0", label: "erori comenzi" },
      { val: "live", label: "stoc vizibil" },
      { val: "8 săpt.", label: "livrat în" },
    ],
    Mockup: StockMockup,
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

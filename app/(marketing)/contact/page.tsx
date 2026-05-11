import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ServiceContactForm } from "@/components/marketing/ServiceContactForm";

export const metadata: Metadata = {
  title: "Contact | Programator Personal",
  description: "Discutăm proiectul tău. Răspund în 24h cu o propunere concretă — fără pitch, fără audit de 2 săptămâni.",
  alternates: { canonical: "https://programatorpersonal.ro/contact" },
};

const steps = [
  "Primești un răspuns în max. 24h, în zilele lucrătoare.",
  "Programăm un apel scurt de 20-30 min — fără pitch, doar întrebări.",
  "Îți trimit o propunere scrisă cu soluție, timp și cost estimat.",
  "Decidem împreună dacă și cum mergem mai departe.",
];

const trustItems = [
  { label: "Proiecte livrate", value: "20+" },
  { label: "Timp mediu la lansare", value: "4-6 săpt." },
  { label: "Clienți care revin", value: "100%" },
];

export default function ContactPage() {
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
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <div className="chip" style={{ marginBottom: "var(--s-4)" }}>
            <span className="dot pulse-dot" /> disponibil pentru proiecte noi
          </div>
          <h1
            className="h-display"
            style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: "var(--s-4)" }}
          >
            Să vedem dacă putem lucra împreună.
          </h1>
          <p className="lead" style={{ color: "var(--fg-2)" }}>
            Completează formularul și îți răspund în 24h cu primele întrebări concrete. Fără oferte generice, fără pitch.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pp-cf">
            {/* Form */}
            <ServiceContactForm
              sourcePage="contact_page"
              ctaText="Trimite mesajul"
              serviceName=""
            />

            {/* Sidebar */}
            <div className="pp-cf-side">
              {/* Process */}
              <div className="pp-cf-card">
                <div className="eyebrow" style={{ marginBottom: 4 }}>ce se întâmplă după</div>
                <ol className="pp-cf-steps">
                  {steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>

              {/* Trust */}
              <div className="pp-cf-card">
                <div className="eyebrow" style={{ marginBottom: 16 }}>în cifre</div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "var(--s-4)",
                  }}
                >
                  {trustItems.map((t) => (
                    <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <span className="body-sm" style={{ color: "var(--fg-3)" }}>{t.label}</span>
                      <span className="mono" style={{ fontSize: 18, color: "var(--fg-1)", fontWeight: 500 }}>
                        {t.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="pp-cf-card">
                <div className="eyebrow" style={{ marginBottom: 12 }}>preferi direct?</div>
                <div
                  className="pp-cf-alt"
                  style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}
                >
                  <a
                    href="mailto:hai@programatorpersonal.ro"
                    style={{ color: "var(--fg-2)", display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>@</span>
                    hai@programatorpersonal.ro
                  </a>
                  <a
                    href="tel:+40700000000"
                    style={{ color: "var(--fg-2)", display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>☎</span>
                    +40 7XX XXX XXX
                  </a>
                </div>
                <p className="body-sm" style={{ marginTop: 12, color: "var(--fg-4)" }}>
                  Luni–Vineri, 9:00–18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

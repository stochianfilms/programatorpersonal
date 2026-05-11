import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { ServiceContactForm } from "@/components/marketing/ServiceContactForm";
import { siteConfig } from "@/content/site";
import { ContactBriefMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Contact | Programator Personal",
  description: "Discutăm proiectul tău. Răspund în 24h cu o propunere concretă — fără pitch, fără audit de 2 săptămâni.",
  alternates: { canonical: `${siteConfig.url}/contact` },
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
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="pp-visual-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(360px, 540px)", gap: "var(--s-8)", alignItems: "start" }}>
            <div>
              <div className="chip" style={{ marginBottom: "var(--s-4)" }}>
                <span className="dot pulse-dot" /> disponibil pentru proiecte noi
              </div>
              <h1
                className="h-display"
                style={{ maxWidth: 760, fontSize: "clamp(32px, 5vw, 60px)", marginBottom: "var(--s-4)" }}
              >
                Să vedem dacă putem lucra împreună.
              </h1>
              <p className="lead" style={{ maxWidth: 620, color: "var(--fg-2)" }}>
                Completează formularul și îți răspund în 24h cu primele întrebări concrete. Fără oferte generice, fără pitch.
              </p>
            </div>
            <div className="pp-only-desktop">
              <ContactBriefMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Contact brief visual */}
      <section className="section" style={{ paddingTop: "var(--s-6)", paddingBottom: "var(--s-6)" }}>
        <div className="container">
          <ContactBriefMockup />
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
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{ color: "var(--fg-2)", display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>@</span>
                    {siteConfig.contact.email}
                  </a>
                  {siteConfig.contact.phone && siteConfig.contact.phoneHref && (
                    <a
                      href={siteConfig.contact.phoneHref}
                      style={{ color: "var(--fg-2)", display: "flex", gap: 8, alignItems: "center" }}
                    >
                      <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>tel</span>
                      {siteConfig.contact.phone}
                    </a>
                  )}
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

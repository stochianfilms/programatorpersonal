import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { modules } from "@/data/modules";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { BusinessOSMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Module software custom | Programator Personal",
  description:
    "Modulele software pe care le putem construi în sistemul firmei tale: CRM, ticketing, contracte, automatizări, dashboard, portal clienți, rezervări, RMA și integrări API.",
  alternates: { canonical: `${siteConfig.url}/module` },
  openGraph: {
    title: "Module software custom | Programator Personal",
    description:
      "Modulele software pe care le putem construi în sistemul firmei tale: CRM, ticketing, contracte, automatizări, dashboard, portal clienți, rezervări, RMA și integrări API.",
    type: "website",
  },
};

const ArrowRight = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const moduleList = Object.values(modules);

const combinationSteps = [
  { label: "Email client", sub: "solicitare primită" },
  { label: "Ticketing", sub: "dosar deschis automat" },
  { label: "Customer 360", sub: "client identificat" },
  { label: "Contract Generator", sub: "document generat" },
  { label: "Dashboard & BI", sub: "vizibil în rapoarte" },
  { label: "Client Portal", sub: "clientul vede statusul" },
];

export default function ModulePage() {
  const cta = siteConfig.ctas.primary;

  return (
    <MarketingShell>
      <PageHero
        chip="componente de sistem"
        title="Module software pe care le putem construi în sistemul firmei tale."
        lead="Un sistem custom nu înseamnă o aplicație uriașă din prima. Înseamnă module clare, construite pe procesele firmei: clienți, tickete, contracte, rapoarte, portaluri și automatizări."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref="/contact"
        secondaryLabel="Vezi serviciile complete"
        secondaryHref="/servicii"
        preview={getHeroPreview("module")}
      />

      {/* Modules grid */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">modulele disponibile</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce module putem construi?</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Fiecare modul rezolvă o problemă concretă și poate fi combinat cu celelalte.
            </p>
          </div>
          <div className="grid grid-3">
            {moduleList.map((mod) => (
              <div
                key={mod.slug}
                className="card card-elev"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
              >
                <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  modul software
                </div>
                <h3 className="h-3">{mod.shortTitle}</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)", flex: 1 }}>
                  {mod.problemSolved}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--s-2)",
                  }}
                >
                  {mod.features.slice(0, 3).map((f, i) => (
                    <li
                      key={i}
                      className="body-sm"
                      style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-2)", alignItems: "flex-start" }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>
                      {f.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mono"
                  style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "var(--s-2)" }}
                >
                  Vreau acest modul <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How modules combine */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">cum se combină</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Modulele nu lucrează izolat — se leagă într-un flux.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 600 }}>
              Poți porni cu un singur modul și adăuga celelalte pe măsură ce firma crește.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--s-3)",
              alignItems: "center",
            }}
          >
            {combinationSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
                <div
                  className="card"
                  style={{
                    padding: "var(--s-4) var(--s-5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--s-1)",
                    minWidth: 140,
                    borderColor: i === 0 ? "var(--accent-line)" : undefined,
                    background: i === 0 ? "var(--accent-soft)" : undefined,
                  }}
                >
                  <span className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {step.label}
                  </span>
                  <span className="body-sm" style={{ color: "var(--fg-3)" }}>{step.sub}</span>
                </div>
                {i < combinationSteps.length - 1 && (
                  <span style={{ color: "var(--fg-3)", fontSize: 18 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System OS visual */}
      <section className="section" style={{ background: "var(--bg-1)", paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">exemplu de sistem</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Back-office service: fișe, tickete, garanții, statusuri și dashboard.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 600 }}>
              Un sistem complet construit din module independente care comunică între ele.
            </p>
          </div>
          <BusinessOSMockup />
        </div>
      </section>

      {/* CRM modular link */}
      <section className="section-pad-sm">
        <div className="container">
          <div
            style={{
              padding: "var(--s-5) var(--s-6)",
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-line)",
              borderRadius: "var(--radius-2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "var(--s-4)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>CRM modular</span>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", maxWidth: 500 }}>
                Vrei să pornești cu mai multe module deodată, pre-integrate? Descoperă modelul CRM modular — o bază deja construită, adaptată pe procesele firmei tale.
              </p>
            </div>
            <Link href="/crm-modular" className="btn btn-primary btn-sm">
              Descoperă CRM-ul modular →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection
        title="Nu știi ce module îți trebuie?"
        text="Spune-mi cum lucrezi acum și îți propun o structură realistă de sistem, pornind de la ce ai nevoie cu adevărat."
        primaryLabel={cta.label}
        primaryHref={cta.href}
        secondaryLabel="Vezi serviciile"
        secondaryHref="/servicii"
      />
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { problemPages } from "@/data/problemPages";
import { ProblemToSolutionMockup } from "@/components/marketing/mockups";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { WebsiteMapSection } from "@/components/marketing/WebsiteMapSection";

export const metadata: Metadata = {
  title: "Soluții software pentru firme | Programator Personal",
  description:
    "Software custom care rezolvă problemele operaționale ale firmei tale — Excel, contracte, rapoarte, programări, portal clienți. Fără să știi ce tehnologie vrei.",
  alternates: { canonical: `${siteConfig.url}/solutii` },
  openGraph: {
    title: "Soluții software pentru firme | Programator Personal",
    description:
      "Software custom care rezolvă problemele operaționale ale firmei tale — Excel, contracte, rapoarte, programări, portal clienți. Fără să știi ce tehnologie vrei.",
    type: "website",
  },
};

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const problemList = Object.values(problemPages);
const cta = siteConfig.ctas.diagnostic;

export default function SolutiiPage() {
  return (
    <MarketingShell>
      <PageHero
        chip="soluții operaționale"
        title="Soluții pentru problemele operaționale care încetinesc firma ta."
        lead="Nu trebuie să știi ce tehnologie vrei. Trebuie să știi unde pierzi timp, clienți sau control."
        primaryLabel={cta.label}
        primaryHref={cta.href}
        showSecondary={false}
        preview={getHeroPreview("solutii")}
      />

      {/* Problem cards — from data */}
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
            {problemList.map((p) => (
              <div key={p.slug} className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  problemă operațională
                </div>
                <h3 className="h-3">{p.title}</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>
                  {p.heroLead}
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

      {/* Before / After — agregat din problemPages */}
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
                {problemList.map((p) => (
                  <li key={p.slug} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-3)" }}>
                    <span style={{ color: "var(--line-2)", flexShrink: 0 }}>—</span>
                    {p.beforeAfter.before}
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
                {problemList.map((p) => (
                  <li key={p.slug} className="body-sm" style={{ color: "var(--fg-2)", display: "flex", gap: "var(--s-3)" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>
                    {p.beforeAfter.after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WebsiteMapSection title="Cauți altceva?" />

      {/* Final CTA */}
      <FinalCTASection
        title={cta.label}
        text="Spune-mi unde pierzi cel mai mult timp. Îți propun o soluție concretă, fără audit de 2 săptămâni."
        primaryLabel={cta.label}
        primaryHref={cta.href}
      />
    </MarketingShell>
  );
}

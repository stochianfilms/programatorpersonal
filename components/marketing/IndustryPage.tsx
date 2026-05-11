import Link from "next/link";
import { MarketingShell } from "./MarketingShell";
import { FaqAccordion } from "./FaqAccordion";
import { ServiceContactForm } from "./ServiceContactForm";
import { services } from "@/data/services";
import type { IndustryPageConfig } from "@/data/industryPages";
import {
  EcommerceOpsMockup,
  IndustrySystemMockup,
  OperationsDashboardMockup,
  ServiceTicketDashboardMockup,
  WarrantyRmaMockup,
  type IndustryVariant,
} from "@/components/marketing/mockups";

const slugToVariant: Record<string, IndustryVariant> = {
  "software-pentru-service-uri": "service-uri",
  "software-pentru-clinici": "clinici",
  "software-pentru-saloane": "saloane",
  "software-pentru-restaurante": "restaurante",
  "software-pentru-agentii-imobiliare": "imobiliare",
  "software-pentru-firme-de-constructii": "constructii",
  "software-pentru-firme-de-evenimente": "evenimente",
  "software-pentru-ecommerce": "ecommerce",
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

export function IndustryPage({ industry }: { industry: IndustryPageConfig }) {
  const recommendedServices = industry.recommendedServices
    .map((slug) => services[slug])
    .filter(Boolean);
  const mockupVariant = slugToVariant[industry.slug];
  const heroVisual = industry.slug === "software-pentru-service-uri"
    ? <ServiceTicketDashboardMockup />
    : industry.slug === "software-pentru-ecommerce"
      ? <EcommerceOpsMockup />
      : mockupVariant
        ? <IndustrySystemMockup variant={mockupVariant} />
        : null;

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
          <div
            className="pp-visual-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: heroVisual ? "minmax(0, 1fr) minmax(360px, 540px)" : "1fr",
              gap: "var(--s-8)",
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ marginBottom: "var(--s-5)" }}>
                <span className="chip">
                  <span className="dot pulse-dot" /> {industry.industryName}
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
                {industry.title}
              </h1>
              <p className="lead" style={{ maxWidth: 620, color: "var(--fg-2)", marginBottom: "var(--s-6)" }}>
                {industry.heroLead}
              </p>
              <Link href="/contact" className="btn btn-primary">
                {industry.ctaText} <Arrow />
              </Link>
            </div>
            {heroVisual && (
              <div className="pp-only-desktop" style={{ width: "100%" }}>
                {heroVisual}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* System mockup visual */}
      {industry.slug === "software-pentru-service-uri" ? (
        <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
              <div className="eyebrow-row">
                <span className="eyebrow">garanții, RMA și management</span>
                <span className="line" />
              </div>
              <h2 className="h-2">Fluxul complet: service, garanție și dashboard operațional.</h2>
            </div>
            <div style={{ display: "grid", gap: "var(--s-5)" }}>
              <WarrantyRmaMockup />
              <OperationsDashboardMockup />
            </div>
          </div>
        </section>
      ) : mockupVariant && (
        <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
              <div className="eyebrow-row">
                <span className="eyebrow">sistem demonstrativ</span>
                <span className="line" />
              </div>
              <h2 className="h-2">Cum arată în practică.</h2>
            </div>
            {industry.slug === "software-pentru-ecommerce" ? (
              <EcommerceOpsMockup />
            ) : (
              <IndustrySystemMockup variant={mockupVariant} />
            )}
          </div>
        </section>
      )}

      {/* Operational problems */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">problemele din industrie</span>
              <span className="line" />
            </div>
            <h2 className="h-1" style={{ textWrap: "balance" }}>
              Ce se întâmplă de obicei în {industry.industryName}.
            </h2>
          </div>
          <div className="grid grid-3">
            {industry.operationalProblems.map((problem, i) => (
              <div key={i} className="card">
                <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)", display: "block", marginBottom: 8 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="body" style={{ margin: 0 }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful modules */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">ce poate include sistemul</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Module utile pentru {industry.industryName}.</h2>
          </div>
          <div className="grid grid-3">
            {industry.usefulModules.map((mod, i) => (
              <div key={i} className="card card-elev">
                <h3 className="h-3" style={{ fontSize: 15, marginBottom: 6 }}>
                  {mod.title}
                </h3>
                <p className="body-sm" style={{ margin: 0 }}>
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example workflow */}
      {industry.exampleWorkflows.length > 0 && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow-row">
                <span className="num">03</span>
                <span className="eyebrow">flux exemplu</span>
                <span className="line" />
              </div>
              <h2 className="h-1">Cum funcționează în practică.</h2>
            </div>
            <div className="pp-cases">
              {industry.exampleWorkflows.map((wf, i) => (
                <div key={i} className="pp-case">
                  <div className="pp-case-tag mono">{wf.title}</div>
                  <div className="pp-case-num mono">0{i + 1}</div>
                  <p className="body" style={{ color: "var(--fg-2)", margin: "var(--s-4) 0 0", maxWidth: 540 }}>
                    {wf.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before / After */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">04</span>
              <span className="eyebrow">înainte și după</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum se schimbă lucrurile.</h2>
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
              <p className="body" style={{ margin: 0, color: "var(--fg-3)" }}>
                {industry.beforeAfter.before}
              </p>
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
              <p className="body" style={{ margin: 0, color: "var(--fg-1)" }}>
                {industry.beforeAfter.after}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended services */}
      {recommendedServices.length > 0 && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow-row">
                <span className="num">05</span>
                <span className="eyebrow">servicii recomandate</span>
                <span className="line" />
              </div>
              <h2 className="h-1">Ce construim pentru {industry.industryName}.</h2>
            </div>
            <div className="grid grid-3">
              {recommendedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/${svc.slug}`}
                  className="card card-elev"
                  style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
                >
                  <h3 className="h-3">{svc.shortTitle}</h3>
                  <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>
                    {svc.tagline}
                  </p>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Află mai mult <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">06</span>
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Întrebări despre software pentru {industry.industryName}.</h2>
          </div>
          <FaqAccordion faqs={industry.faqs} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section pp-final" id="contact">
        <div className="container">
          <div className="pp-final-card">
            <div className="pp-final-grid-bg" />
            <div className="pp-final-content">
              <div className="chip" style={{ marginBottom: 24 }}>
                <span className="dot" /> răspund în 24h, în zilele lucrătoare
              </div>
              <h2 className="h-1" style={{ marginBottom: "var(--s-4)" }}>
                {industry.ctaText}
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
                Spune-mi cum lucrezi acum în {industry.industryName}. Îți propun un sistem construit pe procesele tale reale.
              </p>
              <ServiceContactForm
                sourcePage={industry.slug}
                ctaText={industry.ctaText}
                serviceName={industry.title}
              />
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

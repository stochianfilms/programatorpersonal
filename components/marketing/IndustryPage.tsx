import Link from "next/link";
import { MarketingShell } from "./MarketingShell";
import { FaqAccordion } from "./FaqAccordion";
import { PageHero } from "./PageHero";
import { services } from "@/data/services";
import type { IndustryPageConfig } from "@/data/industryPages";
import {
  EcommerceOpsMockup,
  IndustrySystemMockup,
  OperationsDashboardMockup,
  WarrantyRmaMockup,
  type IndustryVariant,
} from "@/components/marketing/mockups";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { ProjectBriefSection } from "@/components/marketing/cta/index";

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
  const heroPreview = getHeroPreview(industry.slug);

  return (
    <MarketingShell>
      <PageHero
        chip={industry.industryName}
        title={industry.title}
        lead={industry.heroLead}
        primaryLabel={industry.ctaText}
        primaryHref="/contact"
        showSecondary={false}
        preview={heroPreview}
        urgencyNote="Disponibil pentru proiecte noi · Răspund în 24h · Fără angajament"
      />

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

      {industry.slug === "software-pentru-service-uri" && (
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
                <span className="eyebrow" style={{ color: "var(--accent)" }}>Pornire mai rapidă</span>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", maxWidth: 500 }}>
                  Vrei să pornești repede cu un sistem pentru service? Descoperă CRM-ul modular — o bază pre-construită cu fișe, ticketing și back-office, customizată pe procesele tale.
                </p>
                <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap", marginTop: "var(--s-1)" }}>
                  <Link href="/crm-modular" className="btn btn-primary btn-sm">CRM modular →</Link>
                  <Link href="/back-office-custom" className="btn btn-ghost btn-sm">Back-office custom →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ProjectBriefSection
        title={industry.ctaText}
        text={`Spune-mi cum lucrezi acum în ${industry.industryName}. Îți propun un sistem construit pe procesele tale reale.`}
        sourcePage={industry.slug}
        ctaText={industry.ctaText}
        serviceName={industry.title}
      />
    </MarketingShell>
  );
}

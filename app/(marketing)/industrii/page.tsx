import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { industryPages } from "@/data/industryPages";
import { IndustrySystemMockup } from "@/components/marketing/mockups";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { WebsiteMapSection } from "@/components/marketing/WebsiteMapSection";

export const metadata: Metadata = {
  title: "Software custom pentru industrii | Programator Personal",
  description:
    "Software construit pe realitățile fiecărei industrii: service-uri, clinici, saloane, restaurante, imobiliare, construcții, evenimente, e-commerce.",
  alternates: { canonical: `${siteConfig.url}/industrii` },
  openGraph: {
    title: "Software custom pentru industrii | Programator Personal",
    description:
      "Software construit pe realitățile fiecărei industrii: service-uri, clinici, saloane, restaurante, imobiliare, construcții, evenimente, e-commerce.",
    type: "website",
  },
};

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const industryList = Object.values(industryPages);
const cta = siteConfig.ctas.primary;

export default function IndustriiPage() {
  return (
    <MarketingShell>
      <PageHero
        chip="software pe industria ta"
        title="Software custom pentru industrii cu procese clare, dar tool-uri improvizate."
        lead="Fiecare industrie are propriul haos: fișe, programări, comenzi, contracte, stocuri. Construim software în jurul realității tale."
        primaryLabel={cta.label}
        primaryHref={cta.href}
        showSecondary={false}
        preview={getHeroPreview("industrii")}
      />

      {/* Industry cards — from data */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">alege industria ta</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Din ce industrie ești?</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Selectează industria ta și vezi exact ce probleme rezolvăm și cum.
            </p>
          </div>
          <div className="grid grid-2">
            {industryList.map((ind) => (
              <div key={ind.slug} className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {ind.industryName}
                </div>
                <h3 className="h-3">{ind.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                  {ind.operationalProblems.slice(0, 3).map((prob, i) => (
                    <li key={i} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-2)", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--line-2)", flexShrink: 0 }}>—</span>
                      {prob}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${ind.slug}`}
                  className="mono"
                  style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "var(--s-2)" }}
                >
                  Software pentru {ind.industryName} <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry system visual */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">exemplu sistem industrie</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Fiecare industrie primește un sistem complet, adaptat proceselor ei.</h2>
          </div>
          <IndustrySystemMockup variant="service-uri" />
        </div>
      </section>

      <WebsiteMapSection title="Nu ești sigur pe unde să intri?" />

      {/* Final CTA */}
      <FinalCTASection
        title="Vreau software pentru industria mea"
        text="Nu ai văzut industria ta în lista de mai sus? Nu contează. Construim software pentru orice tip de firmă cu procese clare de automatizat."
        primaryLabel={cta.label}
        primaryHref={cta.href}
      />
    </MarketingShell>
  );
}

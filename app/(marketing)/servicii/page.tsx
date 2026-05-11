import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { services } from "@/data/services";
import { BusinessOSMockup } from "@/components/marketing/mockups";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { WebsiteMapSection } from "@/components/marketing/WebsiteMapSection";

export const metadata: Metadata = {
  title: "Servicii | Programator Personal",
  description: "Software custom pentru firme din România — CRM, automatizări, aplicații web, magazine online și mentenanță.",
  alternates: { canonical: `${siteConfig.url}/servicii` },
};

const ArrowRight = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const serviceTags: Record<string, string> = {
  "crm-custom": "CRM",
  "automatizari-business": "Automatizări",
  "aplicatii-web-custom": "Aplicații web",
  "generator-contracte": "Documente",
  "dashboard-rapoarte": "Date",
  "platforma-rezervari": "Rezervări",
  "portal-clienti": "Portal",
  "magazin-online-custom": "E-commerce",
  "mentenanta-software": "Mentenanță",
};

const serviceList = Object.values(services);

export default function ServiciiPage() {
  return (
    <MarketingShell>
      <PageHero
        chip="disponibil pentru proiecte noi"
        title="Software custom pentru firma ta."
        lead="Nu vând produse generice. Construiesc sisteme care se potrivesc pe procesele reale ale firmei tale — CRM, automatizări, aplicații web și mai mult."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref="/contact"
        preview={getHeroPreview("servicii")}
      />

      {/* Services grid */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="grid grid-3">
            {serviceList.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
              >
                <span className="chip" style={{ alignSelf: "flex-start", fontSize: 11 }}>{serviceTags[service.slug] ?? "Software custom"}</span>
                <h2 className="h-3">{service.shortTitle}</h2>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>{service.pageAngle || service.tagline}</p>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)", display: "flex", alignItems: "center", gap: 4 }}>
                  Vezi detalii <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business OS visual */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">ce construim împreună</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Un sistem complet, nu o colecție de tool-uri.</h2>
          </div>
          <BusinessOSMockup />
        </div>
      </section>

      <WebsiteMapSection title="Nu știi de unde să începi?" />

      {/* CTA */}
      <FinalCTASection
        title="Nu ești sigur ce ai nevoie?"
        text="Spune-mi ce problemă vrei să rezolvi. Îți propun o soluție clară și realistă, fără audit de 2 săptămâni."
      />
    </MarketingShell>
  );
}

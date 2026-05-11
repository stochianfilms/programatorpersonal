import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { siteConfig } from "@/content/site";
import { PricingComplexityMockup } from "@/components/marketing/mockups";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection, PrimaryCTA, SecondaryCTA } from "@/components/marketing/cta/index";

export const metadata: Metadata = {
  title: "Prețuri | Programator Personal",
  description: "Prețuri orientative pentru proiecte software custom — site-uri, CRM, automatizări și platforme complexe.",
  alternates: { canonical: `${siteConfig.url}/preturi` },
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg width={13} height={13} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const tiers = [
  {
    name: "Start",
    tag: "site / landing / micro-automatizări",
    price: "de la 1.500 €",
    desc: "Pentru când ai nevoie de un site curat, o pagină de prezentare premium sau o automatizare clară.",
    bullets: [
      "Site de prezentare sau landing page",
      "Optimizare SEO de bază",
      "Formular de contact + integrări simple",
      "Hosting setup + lansare",
      "1 lună mentenanță inclusă",
    ],
    cta: "Discutăm un Start",
    featured: false,
  },
  {
    name: "Business",
    tag: "CRM / dashboard / aplicații interne",
    price: "de la 4.500 €",
    desc: "Pentru firme care vor să-și pună ordine în clienți, contracte, comenzi sau echipă.",
    bullets: [
      "CRM sau aplicație internă custom",
      "Roluri și permisiuni pe utilizator",
      "Rapoarte și dashboard-uri",
      "Integrări (email, plăți, facturare)",
      "3 luni mentenanță inclusă",
      "Sesiuni de training pentru echipă",
    ],
    cta: "Vorbim de un Business",
    featured: true,
  },
  {
    name: "Custom",
    tag: "platforme / magazine / integrări complexe",
    price: "la discuție",
    desc: "Pentru proiecte mai mari: produse software, magazine online complexe sau integrări multiple.",
    bullets: [
      "Platformă custom end-to-end",
      "Multi-tenant / multi-locație",
      "Integrări API multiple",
      "Plăți, facturare, curierat, ERP",
      "Suport pe termen lung",
      "Roadmap pe etape",
    ],
    cta: "Construim ceva mai mare",
    featured: false,
  },
];

const faqs = [
  {
    q: "Cât costă o aplicație custom?",
    a: "Depinde de complexitate, dar dau cifre orientative chiar de la prima discuție. Un site premium pornește de la ~1.500 €, un CRM mic de la ~4.500 €, iar platformele complexe sunt la discuție.",
  },
  {
    q: "Cât durează dezvoltarea?",
    a: "Un proiect mic — 2-3 săptămâni. Un CRM sau o aplicație internă — 4-8 săptămâni. Platformele mari — 2-4 luni. Lucrez în iterații săptămânale, deci vezi progresul tot timpul.",
  },
  {
    q: "Pot începe cu o versiune simplă?",
    a: "Da, și chiar recomand asta. Construim prima versiune mică, o folosești în firmă, vezi ce merge și ce nu, iar apoi adăugăm. E mai sănătos decât un caiet de sarcini de 40 de pagini.",
  },
  {
    q: "Oferiți mentenanță?",
    a: "Da. După lansare am pachete de mentenanță lunare sau la oră. Nu te las cu codul în brațe.",
  },
  {
    q: "Prețul include și hosting?",
    a: "Configurez hosting-ul și te ajut să înțelegi costurile. De obicei sunt 10-50 €/lună, plătite direct de tine la furnizor — nu am markup pe infrastructură.",
  },
];

export default function PreturiPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section style={{ paddingTop: "calc(var(--s-10) + 40px)", paddingBottom: "var(--s-8)", position: "relative" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="pp-visual-hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: "var(--s-8)", alignItems: "start" }}>
            <div>
              <div className="chip" style={{ marginBottom: "var(--s-4)" }}>investiție orientativă</div>
              <h1 className="h-display" style={{ maxWidth: 680, fontSize: "clamp(32px, 5vw, 64px)", marginBottom: "var(--s-4)" }}>
                Cât costă, în mare.
              </h1>
              <p className="lead" style={{ maxWidth: 560, color: "var(--fg-2)" }}>
                Nu e grilă fixă. Sunt 3 forme de colaborare în care intră majoritatea proiectelor. Prețul final îl stabilim împreună, după ce înțelegem exact ce ai nevoie.
              </p>
            </div>
            <div className="pp-hero-preview-wrap">
              {getHeroPreview("preturi")}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="pp-pricing">
            {tiers.map((t) => (
              <div key={t.name} className={`pp-tier ${t.featured ? "pp-tier-featured" : ""}`}>
                {t.featured && <div className="pp-tier-flag mono">cel mai des ales</div>}
                <div className="pp-tier-head">
                  <div>
                    <div className="h-2" style={{ fontSize: 28 }}>{t.name}</div>
                    <div className="mono" style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 4 }}>{t.tag}</div>
                  </div>
                </div>
                <p className="body-sm" style={{ margin: 0 }}>{t.desc}</p>
                <div className="pp-tier-price">
                  <span className="mono">{t.price}</span>
                </div>
                <ul className="pp-tier-bullets">
                  {t.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="pp-tier-check"><Check /></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {t.featured ? (
                  <PrimaryCTA label={t.cta} href="/contact" />
                ) : (
                  <SecondaryCTA label={t.cta} href="/contact" />
                )}
              </div>
            ))}
          </div>

          <div className="pp-pricing-foot">
            <span className="mono" style={{ fontSize: 13, color: "var(--fg-3)" }}>nu te încadrezi într-un pachet?</span>
            <Link href="/contact" className="btn btn-ghost">
              {siteConfig.ctas.estimate.label} <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing complexity visual */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="eyebrow">cum se calculează prețul</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Modulele alese determină prețul. Nu pachetele fixe.</h2>
          </div>
          <PricingComplexityMockup />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Răspunsuri rapide.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--line-1)", padding: "var(--s-5) 0" }}>
                <h3 className="h-3" style={{ marginBottom: "var(--s-3)" }}>{f.q}</h3>
                <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTASection
        title="Vrei o estimare pentru proiectul tău?"
        text="Spune-mi ce problemă vrei să rezolvi. Îți răspund în 24h cu o propunere clară."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref="/contact"
      />
    </MarketingShell>
  );
}

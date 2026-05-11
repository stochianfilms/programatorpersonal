import { SectionHead } from "./atoms/SectionHead";
import { Check, Arrow } from "./atoms/Icons";
import { siteConfig } from "@/content/site";

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

export function PricingSection() {
  return (
    <section className="section" id="preturi">
      <div className="container">
        <SectionHead
          num="08"
          eyebrow="investiție orientativă"
          title="Cât costă, în mare."
          lead="Nu e grilă fixă. Sunt 3 forme de colaborare în care intră majoritatea proiectelor. Prețul final îl stabilim împreună, după ce înțelegem exact ce ai nevoie."
        />
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
                    <span className="pp-tier-check"><Check size={11} /></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={siteConfig.ctas.estimate.href} className={`btn ${t.featured ? "btn-primary" : "btn-secondary"} pp-tier-cta`}>
                {t.cta} <Arrow />
              </a>
            </div>
          ))}
        </div>
        <div className="pp-pricing-foot">
          <span className="mono" style={{ fontSize: 13, color: "var(--fg-3)" }}>nu te încadrezi într-un pachet?</span>
          <a href={siteConfig.ctas.estimate.href} className="btn btn-ghost">
            {siteConfig.ctas.estimate.label} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

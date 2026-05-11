import Link from "next/link";
import { MarketingShell } from "./MarketingShell";
import { FaqAccordion } from "./FaqAccordion";
import { ServiceContactForm } from "./ServiceContactForm";
import { services, type ServiceConfig } from "@/data/services";
import { ServiceVisual } from "./ServiceVisual";

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

const Check = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export function ServicePage({ service }: { service: ServiceConfig }) {
  const relatedServices = service.relatedSlugs
    .map((slug) => services[slug])
    .filter(Boolean);

  const processSteps = [
    { n: "01", t: "Discutăm problema", d: "O conversație de 30 de minute. Tu îmi spui ce nu funcționează, eu pun întrebări." },
    { n: "02", t: "Schițăm soluția", d: "Desenez cum ar arăta sistemul — wireframe, diagramă, flux de date." },
    { n: "03", t: "Construim MVP-ul", d: "Prima versiune funcțională — suficient să o folosești și să ne dai feedback real." },
    { n: "04", t: "Testăm cu tine", d: "Tu îl folosești în firmă. Ajustăm până se așază pe felul tău de lucru." },
    { n: "05", t: "Lansăm și îmbunătățim", d: "Lansare reală, cu utilizatori reali. Adăugăm funcții pe măsură ce firma crește." },
  ];

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
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "var(--s-8)",
              alignItems: "start",
            }}
          >
            {/* Text */}
            <div>
              <div style={{ marginBottom: "var(--s-5)" }}>
                <span className="chip">
                  <span className="dot pulse-dot" /> disponibil pentru proiecte noi
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
                {service.title}
              </h1>
              <p className="lead" style={{ maxWidth: 620, color: "var(--fg-2)" }}>
                {service.heroLead}
              </p>
              <div style={{ display: "flex", gap: "var(--s-4)", flexWrap: "wrap", marginTop: "var(--s-6)" }}>
                <a href="#contact" className="btn btn-primary">
                  {service.ctaText} <Arrow />
                </a>
                <Link href="/portofoliu" className="btn btn-secondary">
                  Proiecte similare <ArrowRight />
                </Link>
              </div>
            </div>

            {/* Service visual mockup */}
            <div className="pp-only-desktop">
              <ServiceVisual visualType={service.visualType} />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">problema</span>
              <span className="line" />
            </div>
            <h2 className="h-1" style={{ textWrap: "balance" }}>
              Recunoști măcar una din astea?
            </h2>
          </div>
          <div className="grid grid-3">
            {service.problems.map((p, i) => (
              <div key={i} className="card">
                <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)", display: "block", marginBottom: 8 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="body" style={{ margin: 0 }}>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">soluția</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum ajută {service.shortTitle}.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 620 }}>
              {service.tagline}
            </p>
          </div>
          <div className="grid grid-3">
            {service.howItHelps.map((h, i) => (
              <div key={i} className="card card-elev">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "var(--r-2)",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "var(--s-4)",
                    color: "var(--accent)",
                  }}
                >
                  <Check />
                </div>
                <h3 className="h-3">{h.title}</h3>
                <p className="body-sm" style={{ margin: 0 }}>
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">03</span>
              <span className="eyebrow">ce include</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce poate include sistemul.</h2>
          </div>
          <div className="grid grid-4">
            {service.features.map((f, i) => (
              <div key={i} className="card">
                <h3 className="h-3" style={{ fontSize: 15, marginBottom: 6 }}>
                  {f.title}
                </h3>
                <p className="body-sm" style={{ margin: 0 }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Used by */}
      <section className="section-pad-sm">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">04</span>
              <span className="eyebrow">pentru cine</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Potrivit pentru.</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3)" }}>
            {service.usedBy.map((u, i) => (
              <span key={i} className="chip" style={{ fontSize: 14, padding: "8px 16px" }}>
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      {service.examples.length > 0 && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow-row">
                <span className="num">05</span>
                <span className="eyebrow">exemple concrete</span>
                <span className="line" />
              </div>
              <h2 className="h-1">Cum funcționează în practică.</h2>
            </div>
            <div className="pp-cases">
              {service.examples.map((ex, i) => (
                <div key={i} className="pp-case">
                  <div className="pp-case-tag mono">{ex.title}</div>
                  <div className="pp-case-num mono">0{i + 1}</div>
                  <p className="body" style={{ color: "var(--fg-2)", margin: "var(--s-4) 0 0", maxWidth: 540 }}>
                    {ex.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">06</span>
              <span className="eyebrow">cum lucrăm</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Procesul, fără surprize.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 600 }}>
              Nu primești totul la final. Lucrăm iterativ — tu vezi progresul săptămânal și ne ajustăm pe parcurs.
            </p>
          </div>
          <div className="pp-process">
            {processSteps.map((s, i) => (
              <div key={s.n} className="pp-process-step">
                <div className="pp-process-num mono">{s.n}</div>
                <div className="pp-process-bar">
                  <div className="pp-process-dot" />
                  {i < processSteps.length - 1 && <div className="pp-process-line" />}
                </div>
                <div className="pp-process-content">
                  <div className="pp-process-head">
                    <h3 className="h-3">{s.t}</h3>
                  </div>
                  <p className="body-sm" style={{ margin: 0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">07</span>
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Răspunsuri rapide.</h2>
          </div>
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-pad-sm">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: "var(--s-5)" }}>
              servicii conexe
            </div>
            <div className="grid grid-3">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${rel.slug}`}
                  className="card"
                  style={{ display: "block" }}
                >
                  <h3 className="h-3" style={{ marginBottom: 8 }}>
                    {rel.shortTitle}
                  </h3>
                  <p className="body-sm" style={{ margin: "0 0 12px" }}>
                    {rel.tagline}
                  </p>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>
                    Vezi detalii <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Strategic next steps */}
      <section className="section-pad-sm" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: "var(--s-5)", textAlign: "center" }}>
            nu ești sigur? explorează mai departe
          </div>
          <div className="grid grid-3" style={{ gap: "var(--s-4)" }}>
            <Link
              href="/portofoliu"
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>dovadă că funcționează</div>
              <h3 className="h-3">Proiecte livrate</h3>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)", flex: 1 }}>
                Vezi cum arată rezultatele pentru firme din România cu aceleași probleme ca tine.
              </p>
              <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>
                Portofoliu <ArrowRight />
              </span>
            </Link>
            <Link
              href="/preturi"
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>investiție</div>
              <h3 className="h-3">Cât costă?</h3>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)", flex: 1 }}>
                Prețuri orientative și forme de colaborare. Fără surprize după.
              </p>
              <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>
                Prețuri <ArrowRight />
              </span>
            </Link>
            <Link
              href="/contact"
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-3)",
                borderColor: "var(--accent-line)",
                background: "var(--accent-soft)",
              }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>
                <span className="dot pulse-dot" /> disponibil acum
              </div>
              <h3 className="h-3">Vorbim direct</h3>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>
                Spune-mi problema ta. Îți răspund în 24h cu o propunere concretă.
              </p>
              <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>
                Contact <ArrowRight />
              </span>
            </Link>
          </div>
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
                {service.ctaText}
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
                Spune-mi ce problemă vrei să rezolvi. Îți propun o soluție clară și realistă — fără audit de 2 săptămâni.
              </p>
              <ServiceContactForm
                sourcePage={service.sourcePage}
                ctaText={service.ctaText}
                serviceName={service.shortTitle}
              />
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

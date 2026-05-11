import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingShell } from "./MarketingShell";
import { FaqAccordion } from "./FaqAccordion";
import { PageHero } from "./PageHero";
import { services, type ServiceConfig } from "@/data/services";
import { siteConfig } from "@/content/site";
import {
  ArchitectureMapMockup,
  BookingCalendarMockup,
  BusinessOSMockup,
  ClientPortalMockup,
  ContractGeneratorMockup,
  Customer360Mockup,
  EcommerceOpsMockup,
  EmailToTicketMockup,
  MaintenanceCenterMockup,
  OperationsDashboardMockup,
  ReportsDashboardMockup,
} from "@/components/marketing/mockups";
import {
  getHeroPreview,
} from "@/components/marketing/hero-previews";
import { ProjectBriefSection } from "@/components/marketing/cta/index";

const serviceMockups: Record<string, { eyebrow: string; title: string; lead: string; visuals: ReactNode[] }> = {
  "crm-custom": {
    eyebrow: "crm operațional",
    title: "Un CRM construit în jurul clientului, nu al unui tabel.",
    lead: "Customer 360, tickete, produse, comenzi și emailuri transformate în lucru urmărit.",
    visuals: [<Customer360Mockup key="customer" />, <EmailToTicketMockup key="email" />],
  },
  "automatizari-business": {
    eyebrow: "automatizări business",
    title: "Procese care pornesc singure din evenimente reale.",
    lead: "Un email, formular sau status poate crea ticket, aloca responsabil, porni SLA și pregăti răspunsul.",
    visuals: [<EmailToTicketMockup key="email" />, <BusinessOSMockup key="os" />],
  },
  "aplicatii-web-custom": {
    eyebrow: "arhitectură aplicație",
    title: "Aplicația poate fi modulară de la început.",
    lead: "Frontend, logică, date, roluri, integrări și automatizări într-o arhitectură care poate crește.",
    visuals: [<ArchitectureMapMockup key="architecture" />],
  },
  "generator-contracte": {
    eyebrow: "documente automate",
    title: "Contracte generate din date curate, nu din copy-paste.",
    lead: "Template-uri, clauze, date client, previzualizare și PDF pregătit pentru semnare.",
    visuals: [<ContractGeneratorMockup key="contracts" />],
  },
  "dashboard-rapoarte": {
    eyebrow: "date și management",
    title: "Dashboard-uri pentru decizii, nu doar grafice decorative.",
    lead: "Rapoarte programate, KPI operaționali și indicatori de status pentru management.",
    visuals: [<ReportsDashboardMockup key="reports" />, <OperationsDashboardMockup key="ops" />],
  },
  "platforma-rezervari": {
    eyebrow: "calendar rezervări",
    title: "Programările devin un sistem, nu o conversație.",
    lead: "Sloturi, responsabili, reminder-uri, confirmări și no-show tracking într-un calendar clar.",
    visuals: [<BookingCalendarMockup key="booking" />],
  },
  "portal-clienti": {
    eyebrow: "portal client",
    title: "Clientul vede singur statusul, documentele și mesajele.",
    lead: "Un spațiu privat pentru documente, facturi, progres și conversații organizate.",
    visuals: [<ClientPortalMockup key="portal" />],
  },
  "magazin-online-custom": {
    eyebrow: "operațiuni e-commerce",
    title: "Magazinul online poate controla și operațiunile din spate.",
    lead: "Comenzi, stoc, retururi, AWB-uri, facturare și sincronizări într-un flux coerent.",
    visuals: [<EcommerceOpsMockup key="ecommerce" />],
  },
  "mentenanta-software": {
    eyebrow: "mentenanță software",
    title: "Mentenanța devine vizibilă: status, backup, intervenții și securitate.",
    lead: "Monitoring, deploy-uri, backup-uri, certificate și istoricul intervențiilor într-un centru clar.",
    visuals: [<MaintenanceCenterMockup key="maintenance" />],
  },
};


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
  const primaryCta = service.primaryCta ?? siteConfig.ctas.primary;
  const secondaryCta = service.secondaryCta ?? { label: "Vezi exemple de sisteme", href: "/portofoliu" };
  const visibleProblems = service.problems.slice(0, 3);
  const extraProblems = service.problems.slice(3);
  const mockupSet = serviceMockups[service.slug];
  const heroPreview = getHeroPreview(service.slug);

  const processSteps = [
    { n: "01", t: "Discutăm problema", d: "O conversație de 30 de minute. Tu îmi spui ce nu funcționează, eu pun întrebări." },
    { n: "02", t: "Schițăm soluția", d: "Desenez cum ar arăta sistemul — wireframe, diagramă, flux de date." },
    { n: "03", t: "Construim MVP-ul", d: "Prima versiune funcțională — suficient să o folosești și să ne dai feedback real." },
    { n: "04", t: "Testăm cu tine", d: "Tu îl folosești în firmă. Ajustăm până se așază pe felul tău de lucru." },
    { n: "05", t: "Lansăm și îmbunătățim", d: "Lansare reală, cu utilizatori reali. Adăugăm funcții pe măsură ce firma crește." },
  ];

  return (
    <MarketingShell>
      <PageHero
        chip="disponibil pentru proiecte noi"
        title={service.title}
        lead={service.heroLead}
        sub={service.pageAngle}
        primaryLabel={primaryCta.label}
        primaryHref={primaryCta.href}
        secondaryLabel={secondaryCta.label}
        secondaryHref={secondaryCta.href}
        preview={heroPreview}
        urgencyNote="Disponibil pentru proiecte noi · Răspund în 24h · Fără angajament"
      />

      {mockupSet && (
        <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
              <div className="eyebrow-row">
                <span className="num">00</span>
                <span className="eyebrow">{mockupSet.eyebrow}</span>
                <span className="line" />
              </div>
              <h2 className="h-1">{mockupSet.title}</h2>
              <p className="lead" style={{ margin: 0, maxWidth: 720 }}>{mockupSet.lead}</p>
            </div>
            <div style={{ display: "grid", gap: "var(--s-5)" }}>
              {mockupSet.visuals.map((visual, index) => (
                <div key={index}>{visual}</div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            {visibleProblems.map((p, i) => (
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
          {extraProblems.length > 0 && (
            <details className="card" style={{ marginTop: "var(--s-4)" }}>
              <summary className="mono" style={{ cursor: "pointer", color: "var(--accent)", fontSize: 12 }}>
                Vezi mai multe semnale că sistemul actual te încetinește
              </summary>
              <div className="grid grid-3" style={{ marginTop: "var(--s-4)" }}>
                {extraProblems.map((p, i) => (
                  <div key={i} style={{ borderTop: "1px solid var(--line-1)", paddingTop: "var(--s-3)" }}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)", display: "block", marginBottom: 8 }}>
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)" }}>
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          )}
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

      {/* CRM modular vs CRM custom — only for crm-custom page */}
      {service.slug === "crm-custom" && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow-row">
                <span className="eyebrow">variante disponibile</span>
                <span className="line" />
              </div>
              <h2 className="h-2">CRM custom vs CRM modular vs software de la zero.</h2>
              <p className="lead" style={{ margin: 0, maxWidth: 600 }}>
                Nu există o singură variantă corectă. Totul depinde de complexitatea proceselor și de cât de repede vrei să pornești.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: "var(--s-6)" }}>
              <div className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)", borderColor: "var(--accent-line)" }}>
                <span className="eyebrow" style={{ color: "var(--accent)" }}>CRM modular</span>
                <h3 className="h-3">Alegi baza și customizăm</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>
                  Pornim de la module deja construite — clienți, lead-uri, tickete, contracte — și le adaptăm pe procesele firmei tale. Implementare mai rapidă, costuri mai mici.
                </p>
                <Link href="/crm-modular" className="btn btn-ghost btn-sm" style={{ marginTop: "auto" }}>
                  Află mai multe →
                </Link>
              </div>
              <div className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <span className="eyebrow">CRM custom</span>
                <h3 className="h-3">Construim fluxuri specifice</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>
                  Potrivit când ai fluxuri mai complexe sau nișate, care nu se potrivesc pe o bază modulară standard. Mai mult timp, mai multă flexibilitate.
                </p>
                <span className="body-sm" style={{ color: "var(--accent)", marginTop: "auto" }}>Ești deja pe pagina potrivită</span>
              </div>
              <div className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <span className="eyebrow">Software de la zero</span>
                <h3 className="h-3">Pentru cazuri foarte complexe</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>
                  Când procesele sunt atât de specifice încât nicio bază existentă nu se apropie de ce ai nevoie. Cel mai mult timp și resurse, dar control total.
                </p>
                <Link href="/aplicatii-web-custom" className="btn btn-ghost btn-sm" style={{ marginTop: "auto" }}>
                  Aplicații web custom →
                </Link>
              </div>
            </div>
            <div
              style={{
                marginTop: "var(--s-6)",
                padding: "var(--s-4) var(--s-5)",
                background: "var(--bg-0)",
                border: "1px solid var(--line-1)",
                borderRadius: "var(--radius-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "var(--s-4)",
              }}
            >
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)" }}>
                Nu știi ce variantă ți se potrivește? Hai să discutăm.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Programează o discuție
              </Link>
            </div>
          </div>
        </section>
      )}

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

      <ProjectBriefSection
        title={primaryCta.label}
        sourcePage={service.sourcePage}
        ctaText={primaryCta.label}
        serviceName={service.shortTitle}
      />
    </MarketingShell>
  );
}

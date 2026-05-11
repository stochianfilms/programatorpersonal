import Link from "next/link";
import { MarketingShell } from "./MarketingShell";
import { FaqAccordion } from "./FaqAccordion";
import { ServiceContactForm } from "./ServiceContactForm";
import { services } from "@/data/services";
import type { ProblemPageConfig } from "@/data/problemPages";
import type { ReactNode } from "react";
import {
  ProblemToSolutionMockup,
  Customer360Mockup,
  ContractGeneratorMockup,
  ReportsDashboardMockup,
  BookingCalendarMockup,
  ClientPortalMockup,
} from "@/components/marketing/mockups";

const problemMockups: Record<string, ReactNode> = {
  "scapa-de-excel": <ProblemToSolutionMockup />,
  "gestiune-clienti-firma": <Customer360Mockup />,
  "automatizare-contracte": <ContractGeneratorMockup />,
  "rapoarte-automate-firma": <ReportsDashboardMockup />,
  "programari-online-firma": <BookingCalendarMockup />,
  "portal-clienti-firma": <ClientPortalMockup />,
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

export function ProblemPage({ problem }: { problem: ProblemPageConfig }) {
  const recommendedServices = problem.recommendedServices
    .map((slug) => services[slug])
    .filter(Boolean);
  const mockup = problemMockups[problem.slug];

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
          <div style={{ marginBottom: "var(--s-5)" }}>
            <span className="chip">
              <span className="dot" /> problemă operațională
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
            {problem.title}
          </h1>
          <p className="lead" style={{ maxWidth: 620, color: "var(--fg-2)", marginBottom: "var(--s-4)" }}>
            {problem.heroLead}
          </p>
          <p className="body" style={{ maxWidth: 620, color: "var(--fg-3)", marginBottom: "var(--s-6)" }}>
            {problem.problemStatement}
          </p>
          <Link href="/contact" className="btn btn-primary">
            {problem.ctaText} <Arrow />
          </Link>
        </div>
      </section>

      {/* Problem mockup visual */}
      {mockup && (
        <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
          <div className="container">
            <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
              <div className="eyebrow-row">
                <span className="eyebrow">soluție vizualizată</span>
                <span className="line" />
              </div>
              <h2 className="h-2">Cum arată sistemul care rezolvă asta.</h2>
            </div>
            {mockup}
          </div>
        </section>
      )}

      {/* Symptoms */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">semnele problemei</span>
              <span className="line" />
            </div>
            <h2 className="h-1" style={{ textWrap: "balance" }}>
              Recunoști măcar una din astea?
            </h2>
          </div>
          <div className="grid grid-3">
            {problem.symptoms.map((symptom, i) => (
              <div key={i} className="card">
                <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)", display: "block", marginBottom: 8 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="body" style={{ margin: 0 }}>
                  {symptom}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">de ce contează</span>
              <span className="line" />
            </div>
          </div>
          <div
            className="card"
            style={{
              borderColor: "var(--accent-line)",
              background: "var(--accent-soft)",
              maxWidth: 720,
            }}
          >
            <p className="lead" style={{ margin: 0, color: "var(--fg-1)" }}>
              {problem.whyItMatters}
            </p>
          </div>
        </div>
      </section>

      {/* Solution + Before/After */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">03</span>
              <span className="eyebrow">soluția</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum rezolvăm problema.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 620 }}>
              {problem.solutionOverview}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-6)",
              marginTop: "var(--s-7)",
            }}
          >
            <div
              className="card"
              style={{
                borderColor: "var(--line-2)",
                background: "var(--bg-2)",
              }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: "var(--s-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                înainte
              </div>
              <p className="body" style={{ margin: 0, color: "var(--fg-3)" }}>
                {problem.beforeAfter.before}
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
                {problem.beforeAfter.after}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended services */}
      {recommendedServices.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow-row">
                <span className="num">04</span>
                <span className="eyebrow">servicii recomandate</span>
                <span className="line" />
              </div>
              <h2 className="h-1">Ce construim pentru a rezolva asta.</h2>
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

      {/* Example scenario */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">05</span>
              <span className="eyebrow">exemplu real</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum arată în practică.</h2>
          </div>
          <div className="pp-cases">
            <div className="pp-case">
              <div className="pp-case-tag mono">{problem.exampleScenario.title}</div>
              <div className="pp-case-num mono">01</div>
              <p className="body" style={{ color: "var(--fg-2)", margin: "var(--s-4) 0 0", maxWidth: 540 }}>
                {problem.exampleScenario.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">06</span>
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Răspunsuri rapide.</h2>
          </div>
          <FaqAccordion faqs={problem.faq} />
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
                {problem.ctaText}
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
                Spune-mi ce problemă vrei să rezolvi. Îți propun o soluție clară și realistă — fără audit de 2 săptămâni.
              </p>
              <ServiceContactForm
                sourcePage={problem.slug}
                ctaText={problem.ctaText}
                serviceName={problem.title}
              />
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { FAQSection } from "@/components/marketing/FAQSection";
import { siteConfig } from "@/content/site";
import { modules, getModuleBySlug } from "@/data/modules";
import {
  AutomationHeroPreview,
  BookingHeroPreview,
  ContractHeroPreview,
  CustomerHeroPreview,
  DashboardHeroPreview,
  PortalHeroPreview,
  ServiceTicketHeroPreview,
  GenericSystemHeroPreview,
} from "@/components/marketing/hero-previews";

const previewByMockupType: Record<string, React.ReactNode> = {
  "crm-pipeline": <CustomerHeroPreview />,
  "maintenance-system": <ServiceTicketHeroPreview />,
  "contract-preview": <ContractHeroPreview />,
  "automation-flow": <AutomationHeroPreview />,
  "dashboard-kpi": <DashboardHeroPreview />,
  "client-portal": <PortalHeroPreview />,
  "booking-calendar": <BookingHeroPreview />,
};

function getModulePreview(mockupType: string): React.ReactNode {
  return previewByMockupType[mockupType] ?? <GenericSystemHeroPreview />;
}

export async function generateStaticParams() {
  return Object.keys(modules).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return {};

  const title = `${mod.shortTitle} — modul software custom | Programator Personal`;
  const description = mod.description;

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/module/${slug}` },
    openGraph: { title, description, type: "website" },
  };
}

const ArrowRight = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M2 7H12M12 7L8 3M12 7L8 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Check = () => (
  <svg width={13} height={13} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M2.5 7.5L5.5 10.5L11.5 3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const workflowStepsByType: Record<string, { label: string; sub: string }[]> = {
  "crm-pipeline": [
    { label: "Contact primit", sub: "email, formular, telefon" },
    { label: "Lead creat", sub: "câmpuri completate automat" },
    { label: "Pipeline vizual", sub: "etapa corectă, vizibilă" },
    { label: "Follow-up", sub: "reminder sau email automat" },
    { label: "Contract generat", sub: "din datele clientului" },
  ],
  "maintenance-system": [
    { label: "Solicitare primită", sub: "email, formular sau manual" },
    { label: "Dosar deschis", sub: "număr unic, alocat automat" },
    { label: "Status urmărit", sub: "fiecare etapă înregistrată" },
    { label: "Notificare client", sub: "la fiecare schimbare" },
    { label: "Dosar rezolvat", sub: "arhivat cu istoricul complet" },
  ],
  "contract-preview": [
    { label: "Date din sistem", sub: "client, sumă, serviciu" },
    { label: "Template aplicat", sub: "variabile completate automat" },
    { label: "Preview verificat", sub: "înainte de trimitere" },
    { label: "PDF generat", sub: "instant, gata de semnat" },
    { label: "Status urmărit", sub: "trimis, vizualizat, semnat" },
  ],
  "automation-flow": [
    { label: "Eveniment declanșat", sub: "formular, dată, status" },
    { label: "Condiție verificată", sub: "regula de business" },
    { label: "Acțiune automată", sub: "email, document, task" },
    { label: "Log înregistrat", sub: "ce s-a executat și când" },
    { label: "Alertă la eroare", sub: "ești notificat imediat" },
  ],
  "dashboard-kpi": [
    { label: "Date din sisteme", sub: "CRM, facturare, e-commerce" },
    { label: "Procesate automat", sub: "la interval definit" },
    { label: "Vizualizate live", sub: "grafice și KPI-uri" },
    { label: "Filtrate pe nevoie", sub: "perioadă, agent, produs" },
    { label: "Raport exportat", sub: "PDF sau Excel, un click" },
  ],
  "client-portal": [
    { label: "Client invitat", sub: "link magic sau email" },
    { label: "Login securizat", sub: "fără parolă complicată" },
    { label: "Vede statusul", sub: "proiect, documente, facturi" },
    { label: "Comunică direct", sub: "mesaje în portal" },
    { label: "Plătește online", sub: "facturi în portal" },
  ],
  "booking-calendar": [
    { label: "Client intră pe site", sub: "oricând, 24/7" },
    { label: "Alege serviciu", sub: "durata și specialistul" },
    { label: "Selectează slot", sub: "disponibil în timp real" },
    { label: "Confirmare automată", sub: "email sau SMS imediat" },
    { label: "Reminder anti no-show", sub: "24h și 2h înainte" },
  ],
};

const defaultWorkflow = [
  { label: "Date introduse", sub: "manual sau automat" },
  { label: "Sistem procesează", sub: "regulile de business" },
  { label: "Acțiune executată", sub: "notificare, document, status" },
  { label: "Log înregistrat", sub: "trasabilitate completă" },
  { label: "Raport disponibil", sub: "la cerere sau automat" },
];

export default async function ModuleSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  const workflow = workflowStepsByType[mod.mockupType] ?? defaultWorkflow;
  const preview = getModulePreview(mod.mockupType);

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
              gridTemplateColumns: "minmax(0,1fr) auto",
              gap: "var(--s-8)",
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ marginBottom: "var(--s-4)" }}>
                <span className="chip">
                  <span className="mono" style={{ fontSize: 10 }}>modul software</span>
                </span>
              </div>
              <h1
                className="h-display"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", marginBottom: "var(--s-5)" }}
              >
                {mod.title}
              </h1>
              <p className="lead" style={{ maxWidth: 600, color: "var(--fg-2)", marginBottom: "var(--s-6)" }}>
                {mod.description}
              </p>
              <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
                <Link href={mod.primaryCta.href} className="btn btn-primary btn-md">
                  {mod.primaryCta.label} <ArrowRight />
                </Link>
                <Link href="/module" className="btn btn-ghost btn-md">
                  Toate modulele
                </Link>
              </div>
            </div>
            <div className="pp-hero-preview-wrap">{preview}</div>
          </div>
        </div>
      </section>

      {/* Problema rezolvată */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">problema</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce problemă rezolvă acest modul.</h2>
          </div>
          <div
            className="card"
            style={{
              borderColor: "var(--line-2)",
              background: "var(--bg-2)",
              maxWidth: 760,
            }}
          >
            <p className="lead" style={{ margin: 0, color: "var(--fg-1)" }}>
              {mod.problemSolved}
            </p>
          </div>
        </div>
      </section>

      {/* Workflow vizual */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">cum funcționează</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Fluxul modulului — de la intrare la rezultat.</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--s-3)",
              alignItems: "center",
            }}
          >
            {workflow.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
                <div
                  className="card"
                  style={{
                    padding: "var(--s-4) var(--s-5)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--s-1)",
                    minWidth: 130,
                    borderColor: i === 0 ? "var(--accent-line)" : undefined,
                    background: i === 0 ? "var(--accent-soft)" : undefined,
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: i === 0 ? "var(--accent)" : "var(--fg-1)",
                      fontWeight: 500,
                    }}
                  >
                    {step.label}
                  </span>
                  <span className="body-sm" style={{ color: "var(--fg-3)" }}>
                    {step.sub}
                  </span>
                </div>
                {i < workflow.length - 1 && (
                  <span style={{ color: "var(--fg-4)", fontSize: 18 }}>→</span>
                )}
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
              <span className="eyebrow">funcționalități</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce include modulul.</h2>
          </div>
          <div className="grid grid-3">
            {mod.features.map((f, i) => (
              <div key={i} className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                <div style={{ display: "flex", gap: "var(--s-2)", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>
                    <Check />
                  </span>
                  <h3 className="h-3" style={{ margin: 0 }}>{f.title}</h3>
                </div>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unde se folosește */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">04</span>
              <span className="eyebrow">potrivit pentru</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Unde se folosește acest modul.</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3)" }}>
            {mod.usedIn.map((item, i) => (
              <span key={i} className="chip" style={{ fontSize: 14, padding: "8px 16px" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Servicii + Industrii conexe */}
      {(mod.relatedServiceSlugs.length > 0 || mod.relatedIndustrySlugs.length > 0) && (
        <section className="section" style={{ background: "var(--bg-1)" }}>
          <div className="container">
            <div className="section-head">
              <div className="eyebrow-row">
                <span className="num">05</span>
                <span className="eyebrow">contexte conexe</span>
                <span className="line" />
              </div>
              <h2 className="h-1">Servicii și industrii în care apare.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)" }}>
              {mod.relatedServiceSlugs.length > 0 && (
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--fg-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "var(--s-4)",
                    }}
                  >
                    Servicii conexe
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                    {mod.relatedServiceSlugs.map((s) => (
                      <Link
                        key={s}
                        href={`/${s}`}
                        className="mono"
                        style={{
                          fontSize: 13,
                          color: "var(--accent)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        {s.replace(/-/g, " ")} <ArrowRight />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {mod.relatedIndustrySlugs.length > 0 && (
                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--fg-3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "var(--s-4)",
                    }}
                  >
                    Industrii conexe
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                    {mod.relatedIndustrySlugs.map((s) => (
                      <Link
                        key={s}
                        href={`/${s}`}
                        className="mono"
                        style={{
                          fontSize: 13,
                          color: "var(--accent)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        {s.replace(/-/g, " ")} <ArrowRight />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {mod.faqs.length > 0 && (
        <FAQSection
          num="06"
          faqs={mod.faqs}
          title={`Întrebări despre ${mod.shortTitle}.`}
        />
      )}

      {/* Final CTA */}
      <FinalCTASection
        title={`Vreau modulul ${mod.shortTitle} în sistemul meu.`}
        text="Spune-mi cum lucrezi acum și construim exact ce lipsește — fără funcții în plus."
        primaryLabel={mod.primaryCta.label}
        primaryHref={mod.primaryCta.href}
        secondaryLabel="Vezi toate modulele"
        secondaryHref="/module"
      />
    </MarketingShell>
  );
}

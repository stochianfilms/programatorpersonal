import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { FinalCTASection } from "@/components/marketing/cta/index";

export const metadata: Metadata = {
  title: "CRM modular pentru firme | Programator Personal",
  description:
    "Pornim de la o bază CRM deja construită — clienți, lead-uri, tickete, contracte, dashboard-uri — și o adaptăm pe fluxul real al businessului tău. Mai rapid decât de la zero, mai flexibil decât un SaaS.",
  alternates: { canonical: `${siteConfig.url}/crm-modular` },
  openGraph: {
    title: "CRM modular pentru firme | Programator Personal",
    description:
      "Pornim de la o bază CRM deja construită — clienți, lead-uri, tickete, contracte, dashboard-uri — și o adaptăm pe fluxul real al businessului tău.",
    type: "website",
  },
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const problems = [
  {
    label: "SaaS-ul e prea rigid",
    description:
      "Ajungi să adaptezi firma la software, nu invers. Câmpuri pe care nu le folosești, lipsesc altele de care ai nevoie, fluxuri care nu se potrivesc pe cum lucrezi tu de fapt.",
    example: "Exemplu: un CRM generic nu știe că tu ai 3 statusuri de ofertă și că trebuie să trimiți un email automat la fiecare tranziție.",
  },
  {
    label: "De la zero durează prea mult",
    description:
      "Un sistem construit complet de la zero înseamnă 3-6 luni minimum înainte să ai ceva funcțional. Bani cheltuiți, timp pierdut, iar când e gata, procesele s-au schimbat.",
    example: "Exemplu: angajezi un dev, sau o agenție, aștepți specificații, estimări, sprint-uri. La final primești ceva, dar nu neapărat ce aveai nevoie.",
  },
  {
    label: "Excel-ul nu mai ține pasul",
    description:
      "La 2-3 oameni în echipă, Excel-ul mai merge. La 5+, e haos. Versiuni diferite, date pierdute, nimeni nu știe ce s-a vorbit cu un client acum 3 săptămâni.",
    example: "Exemplu: un client sună și nu știi cine a vorbit cu el, ce s-a promis, unde e contractul lui.",
  },
];

const modules = [
  {
    title: "Lead Management",
    core: true,
    why: "Știi câți clienți potențiali ai, în ce etapă e fiecare și cine urmărește ce.",
    includes: ["Pipeline vizual pe etape", "Follow-up automat", "Surse de trafic urmărite"],
  },
  {
    title: "Customer 360",
    core: true,
    why: "Fișa completă a clientului: tot istoricul, documentele, comunicările, într-un singur loc.",
    includes: ["Istoric complet per client", "Documente atașate", "Note interne"],
  },
  {
    title: "Ticketing / Helpdesk",
    core: false,
    why: "Solicitările nu se mai pierd în email. Fiecare are un responsabil, un status și un termen.",
    includes: ["Alocare automată", "SLA urmărit", "Notificări client la fiecare schimbare"],
  },
  {
    title: "Contract Generator",
    core: false,
    why: "Contractele se generează din datele clientului deja existente în sistem — fără copy-paste.",
    includes: ["Template-uri cu variabile", "Previzualizare înainte de trimitere", "Export PDF"],
  },
  {
    title: "Dashboard & BI",
    core: true,
    why: "Indicatorii importanți pentru tine, live — fără să exporti nimic în Excel.",
    includes: ["KPI configurabili", "Rapoarte programate", "Acces diferit per rol"],
  },
  {
    title: "Workflow Automation",
    core: false,
    why: "Regulile automate înlocuiesc sarcinile repetitive: dacă X, atunci Y.",
    includes: ["Triggere pe status sau dată", "Notificări automate", "Alocare după reguli"],
  },
  {
    title: "Client Portal",
    core: false,
    why: "Clientul vede singur statusul, documentele, facturile — fără să sune.",
    includes: ["Login dedicat per client", "Documente partajate controlat", "Mesagerie internă"],
  },
  {
    title: "Integrations API",
    core: false,
    why: "Conectăm ce folosești deja: email, facturare, ERP, WhatsApp, calendar.",
    includes: ["Email to ticket", "Facturare automată", "Webhook-uri configurabile"],
  },
];

const implementationSteps = [
  {
    week: "Săpt. 1",
    title: "Discuție + decizie",
    description: "30 minute în care înțeleg cum lucrezi acum. Stabilim ce module pornim, ce câmpuri și statusuri ai nevoie.",
  },
  {
    week: "Săpt. 2-3",
    title: "Baza configurată",
    description: "Sistemul e pornit cu datele tale reale: câmpuri, statusuri, roluri, utilizatori. Deja funcțional, deja al tău.",
  },
  {
    week: "Săpt. 4",
    title: "Integrări + testare",
    description: "Conectăm emailul, facturarea sau ce mai folosești. Testăm cu tine pe date reale, nu pe demo.",
  },
  {
    week: "Lansare",
    title: "MVP live",
    description: "Echipa îl folosește. Eu urmăresc, ascult feedbackul și ajustez rapid în primele săptămâni.",
  },
  {
    week: "Continuu",
    title: "Extensie controlată",
    description: "Pe măsură ce crești, adăugăm module, fluxuri sau automatizări noi — fără să repornim de la zero.",
  },
];

const comparisonRows = [
  { feature: "Timp până la primul MVP", modular: "2-4 săptămâni", standard: "Imediat (rigid)", scratch: "3-6 luni" },
  { feature: "Câmpuri și statusuri custom", modular: "Complet", standard: "Limitat", scratch: "Complet" },
  { feature: "Fluxuri specifice firmei", modular: "Da", standard: "Parțial sau deloc", scratch: "Da" },
  { feature: "Cost inițial", modular: "Mediu", standard: "Mic/abonament", scratch: "Mare" },
  { feature: "Abonament lunar forțat", modular: "Nu", standard: "Da", scratch: "Nu" },
  { feature: "Scalabilitate reală", modular: "Înaltă", standard: "Depinde de vendor", scratch: "Înaltă" },
  { feature: "Integrare cu sisteme existente", modular: "Da", standard: "Parțial", scratch: "Da" },
];

const audiences = [
  { type: "Firme de servicii B2B", pain: "Urmărești clienți și contracte în mai multe locuri deodată." },
  { type: "Service-uri auto sau tehnice", pain: "Fișele de lucru, garanțiile și statusurile nu au un sistem comun." },
  { type: "Agenții de marketing / consultanță", pain: "Proiectele, taskurile și raportările stau în tool-uri separate." },
  { type: "Clinici și cabinete", pain: "Pacienții, programările și documentele sunt în sisteme diferite sau în Excel." },
  { type: "Firme de organizare evenimente", pain: "Clienții, furnizorii, datele și statusurile evenimentelor nu sunt centralizate." },
  { type: "Companii cu echipă internă 5+", pain: "Echipa nu știe ce a vorbit colegul cu un client. Informațiile se pierd." },
];

const faqs = [
  {
    q: "Este CRM gata sau custom?",
    a: "Nici, nici. Pornim de la module deja construite, dar tot ce ține de câmpuri, statusuri, fluxuri și interfață se adaptează pe procesele tale. Rezultatul final arată și funcționează ca un sistem custom — dar fără să plătești arhitectura de la zero.",
  },
  {
    q: "Cât durează implementarea?",
    a: "De obicei 2-4 săptămâni până la primul MVP funcțional. Depinde de câte module, câte integrări și cât de complex e fluxul. Înainte de orice, îți spun o estimare clară.",
  },
  {
    q: "Ce pot customiza exact?",
    a: "Câmpuri, statusuri, tipuri de documente, roluri, permisiuni, fluxuri automate, notificări, rapoarte, interfață. Practic tot ce ține de modul în care lucrează firma ta. Ce nu poți schimba: infrastructura de bază (baza de date, autentificarea, securitatea).",
  },
  {
    q: "Pot porni cu un singur modul?",
    a: "Da, și chiar asta recomand. Pornim cu ce rezolvă cel mai mare durere — de obicei Lead Management sau Customer 360 — și adăugăm restul pe parcurs, când echipa e pregătită.",
  },
  {
    q: "Se integrează cu emailul sau cu facturarea?",
    a: "Da. Emailurile pot deveni automat tickete sau lead-uri. Pot conecta sisteme de facturare, calendar, WhatsApp sau orice alt tool cu API. Înainte de implementare verific dacă integrarea e posibilă tehnic.",
  },
  {
    q: "Cine îl întreține după lansare?",
    a: "Eu. Am pachete de mentenanță lunare: bug-uri corectate, actualizări, funcții mici adăugate. Nu ești lăsat singur cu codul. Dacă vrei să adaugi ceva mai mare, estimăm separat.",
  },
];

export default function CRMModularPage() {
  const cta = siteConfig.ctas.primary;

  return (
    <MarketingShell>
      <PageHero
        chip="crm modular"
        title="CRM modular, gata de pornire, customizat pe procesele firmei tale."
        lead="Pornim de la o bază CRM deja construită și o adaptăm pe fluxul tău real. Mai rapid decât de la zero. Mai flexibil decât orice SaaS standard."
        primaryLabel="Vreau să văd ce module mi se potrivesc"
        primaryHref="/contact"
        secondaryLabel="Cum funcționează →"
        secondaryHref="#implementare"
        urgencyNote="Disponibil pentru proiecte noi · Răspund în 24h · Fără angajament"
      />

      {/* Problema */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">de ce nu merge altfel</span>
              <span className="line" />
            </div>
            <h2 className="h-1">
              SaaS-ul e prea rigid. De la zero durează prea mult. Excel-ul nu mai ține pasul.
            </h2>
            <p className="lead" style={{ margin: 0, maxWidth: 680 }}>
              Dacă ești între aceste variante, CRM-ul modular e construit exact pentru situația asta.
            </p>
          </div>
          <div className="grid grid-3" style={{ marginTop: "var(--s-6)" }}>
            {problems.map((p, i) => (
              <div
                key={i}
                className="card card-elev"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
              >
                <span className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  problema {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h-3">{p.label}</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)" }}>{p.description}</p>
                <p
                  className="body-sm"
                  style={{
                    margin: 0,
                    color: "var(--fg-3)",
                    paddingTop: "var(--s-3)",
                    borderTop: "1px solid var(--line-0)",
                    fontStyle: "italic",
                  }}
                >
                  {p.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluția — CRM modular ca poziționare */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">soluția</span>
              <span className="line" />
            </div>
            <h2 className="h-1">CRM modular — calea de mijloc care funcționează.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 680 }}>
              Nu construim totul de la zero. Nu te forțăm în template-urile unui SaaS. Pornim de la module deja gândite și le adaptăm complet pe procesele firmei tale.
            </p>
          </div>

          {/* Poziționare vizuală */}
          <div
            style={{
              marginTop: "var(--s-7)",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "var(--s-4)",
              alignItems: "center",
              maxWidth: 800,
            }}
          >
            <div className="card" style={{ textAlign: "center", padding: "var(--s-5)" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-4)", textTransform: "uppercase", marginBottom: "var(--s-2)" }}>SaaS standard</div>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>Rapid, dar rigid. Te adaptezi tu la el, nu el la tine.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--s-3)",
              }}
            >
              <span style={{ color: "var(--fg-4)", fontSize: 20 }}>↔</span>
            </div>
            <div className="card" style={{ textAlign: "center", padding: "var(--s-5)" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-4)", textTransform: "uppercase", marginBottom: "var(--s-2)" }}>Software de la zero</div>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>Flexibil total, dar 3-6 luni până la ceva funcțional.</p>
            </div>
          </div>
          <div
            style={{
              maxWidth: 800,
              marginTop: "var(--s-4)",
              padding: "var(--s-5) var(--s-6)",
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-line)",
              borderRadius: "var(--radius-2)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-2)",
            }}
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>CRM modular — modelul nostru</span>
            <p className="body" style={{ margin: 0, color: "var(--fg-1)" }}>
              Pornim de la module deja construite și funcționale. Tu primești un sistem adaptat pe procesele tale, în câteva săptămâni, fără să plătești arhitectura de la zero.
            </p>
          </div>
        </div>
      </section>

      {/* Module */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">03</span>
              <span className="eyebrow">ce putem porni</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Module disponibile. Nu trebuie să le activăm pe toate.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Alegem împreună cu ce pornim. Marcate cu <span style={{ color: "var(--accent)", fontWeight: 600 }}>core</span> — cele mai cerute.
            </p>
          </div>
          <div className="grid grid-2" style={{ marginTop: "var(--s-6)" }}>
            {modules.map((mod, i) => (
              <div
                key={i}
                className="card card-elev"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--s-3)",
                  borderColor: mod.core ? "var(--accent-line)" : undefined,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", justifyContent: "space-between" }}>
                  <h3 className="h-3" style={{ margin: 0 }}>{mod.title}</h3>
                  {mod.core && (
                    <span
                      className="mono"
                      style={{
                        fontSize: 10,
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        padding: "2px 8px",
                        borderRadius: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        flexShrink: 0,
                      }}
                    >
                      core
                    </span>
                  )}
                </div>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)" }}>{mod.why}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                  {mod.includes.map((item, j) => (
                    <li key={j} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-2)", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementare */}
      <section id="implementare" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">04</span>
              <span className="eyebrow">cum arată în practică</span>
              <span className="line" />
            </div>
            <h2 className="h-1">De la discuție la sistem funcțional în câteva săptămâni.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Nu primești totul la final. La finalul primei luni ai deja un MVP pe care echipa îl folosește.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              maxWidth: 680,
              marginTop: "var(--s-6)",
            }}
          >
            {implementationSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "var(--s-5)",
                  paddingBottom: i < implementationSteps.length - 1 ? "var(--s-5)" : 0,
                  position: "relative",
                }}
              >
                {/* Line connector */}
                {i < implementationSteps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 20,
                      top: 40,
                      bottom: 0,
                      width: 1,
                      background: "var(--line-1)",
                    }}
                  />
                )}
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: i === implementationSteps.length - 1 ? "var(--accent)" : "var(--accent-soft)",
                    border: "1px solid var(--accent-line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 9,
                      color: i === implementationSteps.length - 1 ? "var(--accent-fg)" : "var(--accent)",
                      fontWeight: 600,
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.week}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)", paddingTop: 8 }}>
                  <h3 className="h-3" style={{ margin: 0 }}>{step.title}</h3>
                  <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatie */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">05</span>
              <span className="eyebrow">comparație directă</span>
              <span className="line" />
            </div>
            <h2 className="h-1">CRM modular vs SaaS vs de la zero.</h2>
          </div>
          <div style={{ overflowX: "auto", marginTop: "var(--s-6)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, lineHeight: 1.6 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "var(--s-3) var(--s-4)", borderBottom: "2px solid var(--line-1)", color: "var(--fg-3)", fontWeight: 500, minWidth: 180 }}>
                    Criteriu
                  </th>
                  <th style={{ textAlign: "left", padding: "var(--s-3) var(--s-4)", borderBottom: "2px solid var(--accent)", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 700 }}>
                    CRM modular
                  </th>
                  <th style={{ textAlign: "left", padding: "var(--s-3) var(--s-4)", borderBottom: "2px solid var(--line-1)", color: "var(--fg-3)", fontWeight: 500 }}>
                    SaaS standard
                  </th>
                  <th style={{ textAlign: "left", padding: "var(--s-3) var(--s-4)", borderBottom: "2px solid var(--line-1)", color: "var(--fg-3)", fontWeight: 500 }}>
                    De la zero
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--line-0)" }}>
                    <td style={{ padding: "var(--s-3) var(--s-4)", color: "var(--fg-2)", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: "var(--s-3) var(--s-4)", background: "var(--accent-soft)", color: "var(--fg-1)", fontWeight: 500 }}>{row.modular}</td>
                    <td style={{ padding: "var(--s-3) var(--s-4)", color: "var(--fg-3)" }}>{row.standard}</td>
                    <td style={{ padding: "var(--s-3) var(--s-4)", color: "var(--fg-3)" }}>{row.scratch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pentru cine */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">06</span>
              <span className="eyebrow">pentru cine</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Se potrivește dacă recunoști una din situațiile astea.</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: "var(--s-6)" }}>
            {audiences.map((a, i) => (
              <div key={i} className="card" style={{ display: "flex", gap: "var(--s-4)", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>→</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-1)" }}>
                  <span className="h-3" style={{ display: "block" }}>{a.type}</span>
                  <span className="body-sm" style={{ color: "var(--fg-3)" }}>{a.pain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA cu urgency */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "var(--s-4)",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <span className="chip">
              <span className="dot pulse-dot" /> Disponibil pentru proiecte noi
            </span>
            <h2 className="h-2">
              Lucrez cu câteva firme odată, nu cu zeci.
            </h2>
            <p className="lead" style={{ margin: 0, color: "var(--fg-2)", maxWidth: 560 }}>
              Dacă procesele firmei tale seamănă cu ce e descris mai sus, merită o discuție de 30 de minute. Îți spun direct dacă CRM-ul modular se potrivește sau dacă ai nevoie de altceva.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Scrie-mi acum <Arrow />
            </Link>
            <p className="body-sm" style={{ margin: 0, color: "var(--fg-4)" }}>Răspund în 24h · Fără angajament</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">07</span>
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Înainte să contactezi — răspunsuri directe.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)", maxWidth: 720 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <h3 className="h-3">{faq.q}</h3>
                <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "var(--s-8)",
              padding: "var(--s-4) var(--s-5)",
              background: "var(--bg-1)",
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
              Vrei să compari cu alte variante?
            </p>
            <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
              <Link href="/crm-custom" className="btn btn-ghost btn-sm">CRM custom →</Link>
              <Link href="/back-office-custom" className="btn btn-ghost btn-sm">Back-office custom →</Link>
              <Link href="/module" className="btn btn-ghost btn-sm">Toate modulele →</Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Vreau să văd dacă CRM-ul modular se potrivește pe firma mea."
        text="Spune-mi cum lucrezi acum. Îți propun ce module ți se potrivesc și cât durează să pornim — înainte să ne angajăm la orice."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref={cta.href}
        secondaryLabel="Vezi modulele disponibile"
        secondaryHref="/module"
      />
    </MarketingShell>
  );
}

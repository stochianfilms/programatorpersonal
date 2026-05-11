import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { InlineCTASection } from "@/components/marketing/cta/index";
import { ServiceTicketDashboardMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Back-office custom pentru firme | Programator Personal",
  description:
    "Back-office custom cu ticketing, fișe clienți, garanții, documente, workflow automat și dashboard — pentru firme cu procese operaționale complexe.",
  alternates: { canonical: `${siteConfig.url}/back-office-custom` },
  openGraph: {
    title: "Back-office custom pentru firme | Programator Personal",
    description:
      "Back-office custom cu ticketing, fișe clienți, garanții, documente, workflow automat și dashboard — pentru firme cu procese operaționale complexe.",
    type: "website",
  },
};

const problems = [
  "Emailuri transformate manual în sarcini, fără sistem de urmărire",
  "Fișe clienți urmărite în Excel sau în sisteme vechi, neconectate",
  "Clienții sună pentru statusul unei solicitări deschise acum 3 zile",
  "Documente pierdute prin email, foldere locale sau conversații WhatsApp",
  "Lipsă de istoric clar — nimeni nu știe ce s-a discutat cu un client acum 2 luni",
  "Rapoarte operaționale făcute manual, la final de lună, cu date incomplete",
];

const modules = [
  { title: "Ticketing / Helpdesk", description: "Fiecare solicitare primește un număr, un responsabil și un status urmărit." },
  { title: "Customer 360", description: "Fișa completă a clientului: istoricul solicitărilor, documentele, comunicările." },
  { title: "RMA / Warranty", description: "Garanții, retururi și fișe tehnice — dosare clare, cu flux de aprobare." },
  { title: "Document Hub", description: "Documente organizate, versionare, partajare controlată și căutare rapidă." },
  { title: "Workflow Automation", description: "Reguli automate: alocare ticket, notificare client, escaladare după SLA." },
  { title: "Dashboard & BI", description: "Tickete deschise, timp mediu de rezolvare, volumul per agent — live." },
  { title: "Notificări client", description: "Clientul e anunțat la fiecare schimbare de status, fără intervenție manuală." },
  { title: "Roluri și permisiuni", description: "Agentul vede ce e al lui, managerul vede tot, clientul vede doar ce îl privește." },
];

const workflowSteps = [
  "Solicitare primită",
  "Ticket creat automat",
  "Alocat responsabil",
  "Status actualizat",
  "Document generat",
  "Client notificat",
  "Vizibil în dashboard",
];

const faqs = [
  {
    q: "Când merită un back-office custom față de un tool SaaS?",
    a: "Când procesele tale nu se potrivesc pe template-urile unui tool generic și ajungi să adaptezi firma la software în loc de invers. Dacă ai câmpuri ciudate, statusuri specifice sau fluxuri non-standard, un back-office custom e aproape întotdeauna mai potrivit.",
  },
  {
    q: "Se poate integra cu emailul firmei?",
    a: "Da. Emailurile primite pe o adresă dedicată pot fi transformate automat în tickete. Răspunsurile din sistem pot fi trimise direct din interfață, fără să deschizi clientul de email.",
  },
  {
    q: "Pot defini roluri diferite pentru angajați?",
    a: "Da. Fiecare utilizator are un rol cu permisiuni clare: ce vede, ce poate edita, ce rapoarte accesează. Agentul vede doar dosarele lui, managerul vede tot.",
  },
  {
    q: "Pot importa datele existente din Excel sau alt sistem?",
    a: "Da. Migrarea datelor istorice face parte din proces. Curățăm, structurăm și importăm totul — fără să pierzi ce ai acumulat până acum.",
  },
  {
    q: "Pot porni cu un MVP și extinde pe parcurs?",
    a: "Da, și chiar asta recomandăm. Pornim cu modulele de bază (ticketing + fișe clienți), lansăm rapid și adăugăm restul pe măsură ce echipa se obișnuiește cu sistemul.",
  },
  {
    q: "Cine întreține sistemul după lansare?",
    a: "Eu. Am pachete de mentenanță lunare care includ bug-uri, actualizări și funcții noi. Nu ești lăsat cu codul în brațe după predare.",
  },
];

export default function BackOfficeCustomPage() {
  const cta = siteConfig.ctas.primary;

  return (
    <MarketingShell>
      <PageHero
        chip="back-office custom"
        title="Back-office custom pentru firme care lucrează cu fișe, tickete, documente, statusuri și clienți."
        lead="Dacă echipa ta urmărește solicitări, fișe, garanții, comenzi, contracte sau documente în mai multe locuri, putem construi un sistem intern care le aduce într-un singur flux clar."
        primaryLabel="Vreau back-office custom"
        primaryHref="/contact"
        secondaryLabel="Vezi un exemplu de sistem"
        secondaryHref="#showcase"
        preview={getHeroPreview("back-office-custom")}
        urgencyNote="Disponibil pentru proiecte noi · Răspund în 24h · Fără angajament"
      />

      {/* Problems */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">probleme reale</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum arată haosul operațional în practică?</h2>
          </div>
          <div className="grid grid-2">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="card"
                style={{ display: "flex", gap: "var(--s-3)", alignItems: "flex-start" }}
              >
                <span style={{ color: "var(--line-2)", flexShrink: 0, fontSize: 18 }}>—</span>
                <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">ce putem construi</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Module posibile pentru back-office-ul tău.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Nu trebuie să le construim pe toate. Pornim de la ce rezolvă cel mai mare durere.
            </p>
          </div>
          <div className="grid grid-2">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="card card-elev"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}
              >
                <h3 className="h-3">{mod.title}</h3>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section" style={{ background: "var(--bg-1)", paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="num">03</span>
              <span className="eyebrow">flux operațional</span>
              <span className="line" />
            </div>
            <h2 className="h-1">De la solicitare la rezolvare — fiecare pas urmărit.</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--s-3)",
              alignItems: "center",
            }}
          >
            {workflowSteps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
                <div
                  className="card"
                  style={{
                    padding: "var(--s-3) var(--s-4)",
                    borderColor: i === 0 ? "var(--accent-line)" : undefined,
                    background: i === 0 ? "var(--accent-soft)" : undefined,
                  }}
                >
                  <span className="mono" style={{ fontSize: 12, color: i === 0 ? "var(--accent)" : "var(--fg-2)" }}>
                    {step}
                  </span>
                </div>
                {i < workflowSteps.length - 1 && (
                  <span style={{ color: "var(--fg-3)", fontSize: 18 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="num">04</span>
              <span className="eyebrow">exemplu de sistem</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Back-office pentru service: client, produs, status, garanție, istoric, dashboard.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 600 }}>
              Un sistem demonstrativ cu fișe service, tickete, garanții, comentarii interne și dashboard manager.
            </p>
          </div>
          <ServiceTicketDashboardMockup />
        </div>
      </section>

      <InlineCTASection
        title="Ai un proces intern care nu mai încape în Excel?"
        text="Hai să-l transformăm într-un sistem."
        primaryLabel="Programează o discuție"
        primaryHref="/contact"
        note="Răspund în 24h · Fără angajament"
      />

      {/* FAQ */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Ce trebuie să știi înainte să decizi.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)", maxWidth: 720 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <h3 className="h-3">{faq.q}</h3>
                <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal link to CRM modular */}
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
              <span className="eyebrow" style={{ color: "var(--accent)" }}>Alternativă rapidă</span>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", maxWidth: 500 }}>
                Dacă vrei să pornești mai repede cu un sistem deja structurat, descoperă modelul CRM modular — o bază pre-construită cu back-office, clienți și ticketing, adaptată pe firma ta.
              </p>
            </div>
            <Link href="/crm-modular" className="btn btn-primary btn-sm">
              Vezi CRM-ul modular →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Ai un proces intern care nu mai încape în Excel?"
        text="Hai să-l transformăm într-un sistem. Spune-mi cum lucrezi acum și îți propun o structură realistă."
        primaryLabel={cta.label}
        primaryHref={cta.href}
        secondaryLabel="Vezi modulele disponibile"
        secondaryHref="/module"
      />
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { siteConfig } from "@/content/site";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";

export const metadata: Metadata = {
  title: "Cum lucrăm | Procesul de la discuție la lansare | Programator Personal",
  description:
    "Discovery, hartă de proces, MVP, testare, lansare, mentenanță — procesul complet pentru software custom construit pe realitatea firmei tale.",
  alternates: { canonical: `${siteConfig.url}/proces` },
};

const steps = [
  {
    n: "01",
    title: "Discovery — înțelegem problema reală",
    duration: "~30 minute",
    description:
      "O convorbire directă în care tu îmi explici cum lucrezi acum și unde ai cel mai mare haos. Nu un chestionar de 40 de câmpuri. O discuție în care înțeleg contextul real — ce faci manual, câți oameni sunt implicați, ce se pierde, ce costă.",
    outputs: [
      "Înțelegere clară a problemei principale",
      "Identificarea câtorva cauze radacale, nu simptome",
      "Primul feedback despre dacă problema e rezolvabilă cu software",
    ],
  },
  {
    n: "02",
    title: "Harta procesului — schița sistemului",
    duration: "2-3 zile",
    description:
      "Traduc discuția în arhitectură: ce module ar trebui să existe, cum circulă datele, ce se integrează cu ce. Nu o documentație de 80 de pagini — o schiță clară pe care o revizuim împreună înainte să scriem o linie de cod.",
    outputs: [
      "Schiță de flux și arhitectură",
      "Lista de module prioritare vs. opționale",
      "Estimare realistă de timp și cost",
      "Decizie comună: construim sau nu",
    ],
  },
  {
    n: "03",
    title: "MVP — prima versiune funcțională",
    duration: "3-8 săptămâni",
    description:
      "Construim strictul necesar care rezolvă problema centrală. Nu toate funcțiile din roadmap. Nu interfețe perfecte. Un sistem care funcționează în firmă ta, cu datele tale reale, cu fluxul tău real.",
    outputs: [
      "Sistem funcțional pentru problema principală",
      "Datele existente migrate sau importate",
      "Documentație de utilizare pentru echipa ta",
      "Sesiune de onboarding cu utilizatorii principali",
    ],
  },
  {
    n: "04",
    title: "Testare reală — ajustări pe baza practicii",
    duration: "1-3 săptămâni",
    description:
      "Sistemul e folosit în firmă. Colectez feedback real: ce nu e intuitiv, ce lipsește, ce e în plus. Ajustăm pe baza experienței reale, nu a presupunerilor noastre de dinainte.",
    outputs: [
      "Bug-uri descoperite și rezolvate",
      "Ajustări de flux pe baza feedback-ului",
      "Funcții mici adăugate sau simplificate",
      "Echipa se obișnuiește cu sistemul",
    ],
  },
  {
    n: "05",
    title: "Lansare — sistemul merge în producție",
    duration: "1-2 zile",
    description:
      "Lansare pe domeniu real, cu date reale, cu echipa ta. Nu un demo. Nu un pilot paralel care durează luni. Dacă MVP-ul a trecut testarea, lansăm. Sunt disponibil în primele zile să rezolv orice apare.",
    outputs: [
      "Deploy pe infrastructură de producție",
      "Monitoring și alerte active",
      "Backup automat configurat",
      "Suport direct în prima săptămână",
    ],
  },
  {
    n: "06",
    title: "Mentenanță și evoluție continuă",
    duration: "lunar, pe baza nevoilor",
    description:
      "Nu te las cu codul în brațe. Sistemul evoluează cu firma ta: funcții noi, integrări suplimentare, optimizări. Bug-urile critice sunt rezolvate în ore. Actualizările de securitate — proactiv, nu când e prea târziu.",
    outputs: [
      "Bug fixing prioritizat și rapid",
      "Actualizări de securitate și dependențe",
      "Funcții noi adăugate iterativ",
      "Consultanță continuă pentru evoluția sistemului",
    ],
  },
];

const faqs = [
  {
    q: "Cât durează în total de la discuție la lansare?",
    a: "Depinde de complexitate. Un sistem simplu (CRM de bază, generator contracte) poate fi lansat în 4-6 săptămâni. Aplicații mai complexe cu mai multe module — 8-16 săptămâni. Lucrăm iterativ, deci folosești prima versiune înainte să fie complet.",
  },
  {
    q: "Cum știm dacă ce construim e corect înainte să terminăm?",
    a: "Nu așteptăm finalul. Schița de sistem o revizuim înainte să scriem cod. MVP-ul e testat cu utilizatori reali înainte de lansare oficială. Feedback-ul real intră în sistem, nu pe o listă de dorințe.",
  },
  {
    q: "Pot modifica ce vreau după lansare?",
    a: "Da. Sistemul e construit modular tocmai pentru asta. Adaugi un modul nou, modifici un flux, integrezi un sistem nou — fără să rescrii ce funcționează deja.",
  },
  {
    q: "Ce se întâmplă dacă nu suntem mulțumiți de direcție pe parcurs?",
    a: "Discutăm direct. Nu există contracte care te blochează pe o direcție greșită. Dacă vedem că ceva nu funcționează, schimbăm. Scopul e un sistem care îți folosește, nu o livrabilă pe hârtie.",
  },
  {
    q: "Cine deține codul la final?",
    a: "Tu. Codul e al tău. Repository-ul e în contul tău sau ți-l predau complet. Nu există lock-in tehnic.",
  },
  {
    q: "Cât costă un sistem custom?",
    a: "Depinde de complexitate. Un MVP simplu (un modul, un flux de bază) poate porni de la 2.000–4.000 €. Sisteme mai complete cu CRM, automatizări și documente — 6.000–15.000 €. Prețul e discutat și agreat înainte să scriem o linie de cod.",
  },
  {
    q: "Există cost lunar după lansare?",
    a: "Da, există un cost de mentenanță lunară — de la 300 €/lună pentru suport de bază (bug-uri, actualizări de securitate) până la pachete cu ore incluse pentru funcții noi. Hosting-ul e separat și depinde de volum (de obicei 20–80 €/lună).",
  },
];

const Check = () => (
  <svg width={13} height={13} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProcesPage() {
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
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 820 }}>
          <div style={{ marginBottom: "var(--s-5)" }}>
            <span className="chip">
              <span className="dot pulse-dot" /> metodologie de lucru
            </span>
          </div>
          <h1
            className="h-display"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              marginBottom: "var(--s-5)",
            }}
          >
            De la discuție la sistem funcțional — fără surprize.
          </h1>
          <p className="lead" style={{ maxWidth: 640, color: "var(--fg-2)" }}>
            Procesul e iterativ și transparent. Nu primești totul la final — lucrăm împreună de la prima schițăla lansare și mai departe.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">pașii</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cele 6 etape ale colaborării.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-6)" }}>
            {steps.map((step) => (
              <div key={step.n} className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--s-6)", alignItems: "start" }}>
                <div className="mono" style={{ fontSize: 28, color: "var(--fg-4)", lineHeight: 1 }}>{step.n}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "var(--s-4)", marginBottom: "var(--s-3)", flexWrap: "wrap" }}>
                    <h3 className="h-3">{step.title}</h3>
                    <span className="chip" style={{ fontSize: 11 }}>{step.duration}</span>
                  </div>
                  <p className="body" style={{ margin: "0 0 var(--s-4)", color: "var(--fg-2)" }}>{step.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                    {step.outputs.map((out, i) => (
                      <li key={i} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-2)", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}><Check /></span>
                        {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principii */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">principii</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce ghidează fiecare decizie din proces.</h2>
          </div>
          <div className="grid grid-3">
            {[
              { title: "Simplu mai întâi", body: "Construim strictul necesar care rezolvă problema. Complexitatea se adaugă când e validată, nu din start." },
              { title: "Real, nu teoretic", body: "Testăm cu date reale, cu oameni reali, în fluxuri reale. Nu în sandbox-uri cu date fictive." },
              { title: "Tu conduci direcția", body: "Eu propun soluția tehnică. Tu decizi dacă reflectă realitatea firmei tale." },
              { title: "Comunicare directă", body: "Fără status update-uri de 5 pagini. O discuție scurtă săptămânală e suficientă." },
              { title: "Fără surprize la cost", body: "Estimarea e dată înainte să înceapă lucrul. Dacă apare ceva neprevăzut, discutăm înainte să facturez." },
              { title: "Codul e al tău", body: "Repository-ul e în contul tău. Nu există lock-in. Poți lucra cu oricine după dacă vrei." },
            ].map((p, i) => (
              <div key={i} className="card card-elev">
                <h3 className="h-3" style={{ marginBottom: 8 }}>{p.title}</h3>
                <p className="body-sm" style={{ margin: 0 }}>{p.body}</p>
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
              <span className="eyebrow">întrebări despre proces</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum funcționează în practică.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((faq, i) => (
              <details key={i} className="card" style={{ borderBottom: i < faqs.length - 1 ? "none" : undefined }}>
                <summary className="h-3" style={{ cursor: "pointer", padding: "var(--s-4) 0" }}>
                  {faq.q}
                </summary>
                <p className="body" style={{ margin: "0 0 var(--s-4)", color: "var(--fg-2)" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedLinks
        title="continuă să explorezi"
        links={[
          { href: "/despre", label: "Despre Programator Personal", description: "Cine construiește, cu ce tehnologii și ce promitem.", tag: "despre" },
          { href: "/preturi", label: "Cât costă?", description: "Prețuri orientative și forme de colaborare.", tag: "investiție" },
          { href: "/contact", label: "Începe discuția", description: "Spune-mi ce problemă vrei să rezolvi.", tag: "contact" },
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection
        title="Gata să începem discuția?"
        text="Spune-mi ce problemă vrei să rezolvi. Îți propun o soluție clară și realistă — fără audit de 2 săptămâni."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref="/contact"
        showSecondary={false}
      />
    </MarketingShell>
  );
}

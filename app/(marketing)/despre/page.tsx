import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { siteConfig } from "@/content/site";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";

export const metadata: Metadata = {
  title: "Despre Programator Personal | Software custom pentru firme",
  description:
    "Cine este Programator Personal, ce probleme rezolvă și cum lucrăm. CRM-uri, automatizări și aplicații web construite pe procesele reale ale firmei tale.",
  alternates: { canonical: `${siteConfig.url}/despre` },
};

const Check = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const technologies = [
  { label: "Next.js", tag: "frontend" },
  { label: "TypeScript", tag: "limbaj" },
  { label: "PostgreSQL", tag: "baze de date" },
  { label: "Supabase", tag: "backend" },
  { label: "Prisma", tag: "ORM" },
  { label: "Tailwind CSS", tag: "stilizare" },
  { label: "Stripe / Netopia", tag: "plăți" },
  { label: "SmartBill / Facturis", tag: "facturare" },
  { label: "Resend / SendGrid", tag: "email" },
  { label: "Vercel / Railway", tag: "deploy" },
];

const promises = [
  "Livrăm ce promitem, nu ce sună bine în prezentare",
  "Nu facem audit de 2 săptămâni înainte să propunem ceva",
  "Lucrăm iterativ — tu folosești sistemul înainte să fie complet",
  "Explici cum lucrezi tu, nu adaptezi firma la limitele unui soft",
  "Nu dispărem după lansare",
];

const nopromises = [
  "Nu lucrăm cu 10 clienți simultan",
  "Nu promitem grafice impresionante dacă nu ți-ar folosi la nimic",
  "Nu construim pentru a impresiona cu tehnologie, ci pentru a rezolva probleme reale",
  "Nu îți vindem un SaaS rebranduit ca soluție custom",
];

export default function DesprePage() {
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
              <span className="dot pulse-dot" /> disponibil pentru proiecte noi
            </span>
          </div>
          <h1
            className="h-display"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              marginBottom: "var(--s-5)",
            }}
          >
            Construiesc sisteme care fac ca firma ta să funcționeze mai clar.
          </h1>
          <p className="lead" style={{ maxWidth: 640, color: "var(--fg-2)" }}>
            Programator Personal e un freelancer specializat în software operațional pentru firme mici și medii din România. Nu o agenție. Nu o echipă de 20. O persoană care înțelege procesul tău și construiește exact ce lipsește.
          </p>
        </div>
      </section>

      {/* Ce probleme rezolvă */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">ce rezolvăm</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Firme care au crescut dar tool-urile nu au crescut cu ele.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 640 }}>
              Există un moment în care Excel, WhatsApp și Word nu mai ajung. Datele se pierd, procesele depind de memorie, echipa nu are vizibilitate. Asta e problema pe care o rezolv.
            </p>
          </div>
          <div className="grid grid-3">
            {[
              { title: "CRM și gestiune clienți", body: "Lead-uri, oferte, contracte, urmăriri — totul într-un sistem care reflectă cum lucrezi tu." },
              { title: "Automatizări operaționale", body: "Ce faci manual de 3 ori pe săptămână poate rula singur. Emailuri, documente, rapoarte, notificări." },
              { title: "Aplicații web custom", body: "Tool-uri interne, platforme, portaluri — software construit pe specificul firmei tale, nu pe un template." },
              { title: "Dashboard-uri și rapoarte", body: "Date din toate sistemele tale, vizibile într-un singur loc, actualizate automat." },
              { title: "Platforme de rezervări", body: "Calendar online, confirmare automată, reminder-uri anti no-show — fără WhatsApp pentru programări." },
              { title: "Mentenanță și evoluție", body: "Nu te las cu codul în brațe. Țin sistemul sănătos și îl evoluez cu firma ta." },
            ].map((item, i) => (
              <div key={i} className="card card-elev">
                <h3 className="h-3" style={{ marginBottom: 8 }}>{item.title}</h3>
                <p className="body-sm" style={{ margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* De ce procese operaționale */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">experiență</span>
              <span className="line" />
            </div>
            <h2 className="h-1">De ce am experiență în procese operaționale.</h2>
          </div>
          <div
            className="card"
            style={{
              borderColor: "var(--accent-line)",
              background: "var(--accent-soft)",
              maxWidth: 760,
            }}
          >
            <p className="lead" style={{ margin: 0, color: "var(--fg-1)" }}>
              Am lucrat direct cu proprietari de firme, nu cu departamente IT. Am înțeles că problema nu e niciodată &ldquo;ne lipsește o funcție&rdquo; — e că oamenii pierzi timp pe ceva ce un sistem ar putea face singur. Construiesc software pornind de la cum lucrează oamenii, nu de la cum ar trebui să lucreze în teorie.
            </p>
          </div>
        </div>
      </section>

      {/* Cum lucrăm */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">03</span>
              <span className="eyebrow">metodă</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Cum lucrăm împreună.</h2>
          </div>
          <div className="pp-process">
            {[
              { n: "01", t: "O discuție directă", d: "30 de minute. Tu îmi spui ce nu funcționează — eu pun întrebări și înțeleg contextul real." },
              { n: "02", t: "Schiță de sistem", d: "Nu propunere comercială. O schiță concretă: ce construim, de ce, în ce ordine, cu ce se integrează." },
              { n: "03", t: "MVP funcțional", d: "Prima versiune care rezolvă problema centrală. Simplă, clară, folosibilă de la prima zi." },
              { n: "04", t: "Feedback real", d: "Tu îl folosești în firmă. Ajustăm pe baza a ce se întâmplă în practică, nu pe baza presupunerilor." },
              { n: "05", t: "Evoluție continuă", d: "Sistemul crește cu firma. Adaugăm funcții pe măsură ce înțelegem mai bine ce contează." },
            ].map((s, i, arr) => (
              <div key={s.n} className="pp-process-step">
                <div className="pp-process-num mono">{s.n}</div>
                <div className="pp-process-bar">
                  <div className="pp-process-dot" />
                  {i < arr.length - 1 && <div className="pp-process-line" />}
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
          <div style={{ marginTop: "var(--s-5)" }}>
            <Link href="/proces" className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>
              Citește procesul detaliat →
            </Link>
          </div>
        </div>
      </section>

      {/* Tehnologii */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">04</span>
              <span className="eyebrow">stack tehnic</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce tehnologii folosim.</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 620 }}>
              Construiesc pe un stack modern, stabil și întreținut activ. Nicio tehnologie nu e aleasă ca să impresioneze — fiecare e aleasă pentru că rezolvă ceva concret.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3)" }}>
            {technologies.map((tech) => (
              <span key={tech.label} className="chip" style={{ fontSize: 14, padding: "8px 16px" }}>
                <span style={{ color: "var(--fg-3)", marginRight: 8, fontSize: 11 }}>{tech.tag}</span>
                {tech.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Promisiuni */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">05</span>
              <span className="eyebrow">ce promitem și ce nu</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Transparent de la început.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)" }}>
            <div className="card" style={{ borderColor: "var(--accent-line)", background: "var(--accent-soft)" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginBottom: "var(--s-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ce promitem
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                {promises.map((item, i) => (
                  <li key={i} className="body-sm" style={{ color: "var(--fg-1)", display: "flex", gap: "var(--s-3)", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}><Check /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ borderColor: "var(--line-2)", background: "var(--bg-2)" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: "var(--s-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ce nu promitem
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                {nopromises.map((item, i) => (
                  <li key={i} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-3)", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--line-2)", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <RelatedLinks
        title="continuă să explorezi"
        links={[
          { href: "/proces", label: "Cum lucrăm", description: "Procesul de la discuție la lansare, pas cu pas.", tag: "metodologie" },
          { href: "/servicii", label: "Ce construim", description: "CRM, automatizări, aplicații web, magazine online și mai mult.", tag: "servicii" },
          { href: "/portofoliu", label: "Proiecte livrate", description: "Sisteme reale, pentru firme din România.", tag: "portofoliu" },
        ]}
      />

      {/* Final CTA */}
      <FinalCTASection
        title="Vorbim direct?"
        text="Spune-mi ce problemă vrei să rezolvi. Îți răspund în 24h cu o propunere concretă."
        primaryLabel="Programează o discuție de 30 min"
        primaryHref="/contact"
        showSecondary={false}
      />
    </MarketingShell>
  );
}

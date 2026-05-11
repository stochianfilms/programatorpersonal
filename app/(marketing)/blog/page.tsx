import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export const metadata: Metadata = {
  title: "Blog | Programator Personal",
  description: "Articole despre software custom, automatizări și digitalizare pentru firme din România.",
  alternates: { canonical: "https://programatorpersonal.ro/blog" },
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const articles = [
  {
    tag: "CRM",
    date: "Mai 2026",
    title: "De ce Excel nu e un CRM și când devine o problemă",
    body: "Excel funcționează până la un punct. Îți explic exact când devine o frână și ce semne să urmărești înainte să pierzi clienți.",
    readTime: "5 min",
  },
  {
    tag: "Automatizări",
    date: "Aprilie 2026",
    title: "3 procese pe care orice firmă le poate automatiza azi",
    body: "Nu ai nevoie de un buget mare sau de un departament IT. Îți arăt 3 automatizări simple cu impact direct pe timp și bani.",
    readTime: "4 min",
  },
  {
    tag: "Software custom",
    date: "Aprilie 2026",
    title: "Custom vs. SaaS: cum alegi și când merită să construiești",
    body: "Răspuns sincer la întrebarea pe care mi-o pun toți clienții înainte să înceapă un proiect. Cu exemple din proiecte reale.",
    readTime: "6 min",
  },
  {
    tag: "Proces",
    date: "Martie 2026",
    title: "Cum arată un proiect software bine construit în 8 săptămâni",
    body: "Săptămână cu săptămână: ce se întâmplă în fiecare etapă, ce decizii luăm împreună și cum ajungem la o aplicație care funcționează.",
    readTime: "7 min",
  },
  {
    tag: "Digitalizare",
    date: "Martie 2026",
    title: "Cât costă să nu digitalizezi: calcul concret pentru o firmă de 10 angajați",
    body: "Am luat un scenariu real și am calculat câte ore și câți bani pierde o firmă medie care lucrează cu procese manuale.",
    readTime: "5 min",
  },
  {
    tag: "Integrări",
    date: "Februarie 2026",
    title: "Ce înseamnă să integrezi două sisteme și de ce durează mai mult decât crezi",
    body: "Integrarea e mai mult decât un API call. Îți explic ce se întâmplă în spate și ce trebuie să clarifici înainte să începi.",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section style={{ paddingTop: "calc(var(--s-10) + 40px)", paddingBottom: "var(--s-8)", position: "relative" }}>
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="chip" style={{ marginBottom: "var(--s-4)" }}>articole</div>
          <h1 className="h-display" style={{ maxWidth: 640, fontSize: "clamp(32px, 5vw, 64px)", marginBottom: "var(--s-4)" }}>
            Software, automatizări și digitalizare.
          </h1>
          <p className="lead" style={{ maxWidth: 520, color: "var(--fg-2)" }}>
            Articole practice pentru antreprenori și manageri care vor să înțeleagă cum funcționează software-ul custom — fără jargon inutil.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="grid grid-3">
            {articles.map((a, i) => (
              <div
                key={i}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="chip" style={{ fontSize: 11 }}>{a.tag}</span>
                  <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)" }}>{a.readTime}</span>
                </div>
                <div className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>{a.date}</div>
                <h2 className="h-3" style={{ fontSize: 16 }}>{a.title}</h2>
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)", flex: 1 }}>{a.body}</p>
                <span className="mono" style={{ fontSize: 12, color: "var(--fg-4)" }}>
                  În curând
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h-2" style={{ marginBottom: "var(--s-3)" }}>Ai o problemă concretă?</h2>
          <p className="lead" style={{ marginBottom: "var(--s-5)" }}>
            Nu mai căuta articolul potrivit. Spune-mi direct ce nu funcționează și îți dau un răspuns în 24h.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Discutăm <Arrow />
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}

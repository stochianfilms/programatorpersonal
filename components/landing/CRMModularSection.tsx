import Link from "next/link";

const cards = [
  { title: "Pornire mai rapidă", description: "Baza e deja construită — nu plătești arhitectura de la zero." },
  { title: "Customizare pe fluxul tău", description: "Câmpuri, statusuri, roluri și fluxuri adaptate pe procesele firmei." },
  { title: "Integrări cu ce folosești deja", description: "Email, facturare, ERP, calendar — conectate, nu izolate." },
  { title: "Extindere în timp", description: "Pornești cu un MVP și adaugi module pe măsură ce firma crește." },
];

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function CRMModularSection() {
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num">13</span>
            <span className="eyebrow">crm modular</span>
            <span className="line" />
          </div>
          <h2 className="h-1">Nu trebuie să pornim mereu de la zero.</h2>
          <p className="lead" style={{ margin: 0, maxWidth: 780 }}>
            Pornim de la module CRM deja gândite — clienți, lead-uri, tickete, contracte, dashboard-uri, portaluri — și le adaptăm pe procesele firmei tale.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: "var(--s-7)" }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="card card-elev"
              style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}
            >
              <h3 className="h-3">{card.title}</h3>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>{card.description}</p>
            </div>
          ))}
        </div>

        <Link href="/crm-modular" className="btn btn-primary">
          Vezi CRM-ul modular <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

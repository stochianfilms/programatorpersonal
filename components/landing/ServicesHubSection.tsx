import { SectionHead } from "./atoms/SectionHead";
import { Glyph } from "./atoms/Glyph";
import { ArrowRight } from "./atoms/Icons";

const serviceCards = [
  {
    glyph: "crm",
    title: "Lead-uri și clienți",
    problem: "Clienți uitați, follow-up lipsă, statusuri neclare",
    solution: "CRM cu pipeline, follow-up auto, rapoarte live",
    href: "/crm-custom",
  },
  {
    glyph: "auto",
    title: "Contracte și documente",
    problem: "Copy-paste în Word, greșeli de date, statusuri neclare",
    solution: "Generator de contracte cu date completate automat",
    href: "/generator-contracte",
  },
  {
    glyph: "app",
    title: "Programări și calendar",
    problem: "Programări pe WhatsApp, no-show, calendar haotic",
    solution: "Platformă de rezervări cu confirmări și reminder-uri auto",
    href: "/platforma-rezervari",
  },
  {
    glyph: "dash",
    title: "Rapoarte automate",
    problem: "Date împrăștiate, rapoarte manuale, decizii pe intuiție",
    solution: "Dashboard live cu toate datele firmei la un loc",
    href: "/dashboard-rapoarte",
  },
  {
    glyph: "auto",
    title: "Procese repetitive",
    problem: "Copy-paste manual, emailuri la mână, sincronizări lente",
    solution: "Automatizări care rulează fără să te atingi de ele",
    href: "/automatizari-business",
  },
  {
    glyph: "web",
    title: "Aplicații interne",
    problem: "Softuri generice care nu acoperă procesele tale specifice",
    solution: "Aplicații web construite exact pe fluxul tău de lucru",
    href: "/aplicatii-web-custom",
  },
];

export function ServicesHubSection() {
  return (
    <section className="section" id="use-cases">
      <div className="container">
        <SectionHead
          num="03"
          eyebrow="ce putem automatiza"
          title="Ce poți elimina din rutina zilnică."
          lead="Fiecare card de mai jos ascunde ore pierdute și bani. Click pe oricare pentru a vedea cum arată soluția."
        />
        <div className="grid grid-3">
          {serviceCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="card"
              style={{ display: "block", transition: "border-color 0.2s" }}
            >
              <div className="pp-svc-icon" style={{ marginBottom: "var(--s-4)" }}>
                <Glyph name={card.glyph} size={20} />
              </div>
              <h3 className="h-3" style={{ marginBottom: 8 }}>{card.title}</h3>
              <p className="body-sm" style={{ color: "var(--danger)", margin: "0 0 6px" }}>
                ✕ {card.problem}
              </p>
              <p className="body-sm" style={{ color: "var(--fg-2)", margin: "0 0 var(--s-4)" }}>
                ✓ {card.solution}
              </p>
              <span className="pp-svc-link mono" style={{ color: "var(--accent)" }}>
                Vezi soluția <ArrowRight size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

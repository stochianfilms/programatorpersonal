import { SectionHead } from "./atoms/SectionHead";
import { ArrowRight } from "./atoms/Icons";

const problems = [
  { label: "Vreau să scap de Excel", href: "/automatizari-business" },
  { label: "Vreau să gestionez clienții mai bine", href: "/crm-custom" },
  { label: "Vreau să automatizez contractele", href: "/generator-contracte" },
  { label: "Vreau rapoarte clare", href: "/dashboard-rapoarte" },
  { label: "Vreau o platformă de rezervări", href: "/platforma-rezervari" },
  { label: "Vreau un portal pentru clienți", href: "/portal-clienti" },
  { label: "Vreau magazin online propriu", href: "/magazin-online-custom" },
  { label: "Vreau o aplicație custom", href: "/aplicatii-web-custom" },
];

export function ProblemPickerSection() {
  return (
    <section className="section section-pad-sm" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <SectionHead
          num="04"
          eyebrow="alege problema ta"
          title="De unde vrei să începem?"
          lead="Alege situația care seamănă cel mai mult cu a ta. Te duc direct la soluție."
          align="center"
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-3)", justifyContent: "center" }}>
          {problems.map((p) => (
            <a key={p.href} href={p.href} className="btn btn-secondary" style={{ fontSize: 14 }}>
              {p.label} <ArrowRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

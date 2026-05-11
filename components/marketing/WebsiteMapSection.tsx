import Link from "next/link";

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const paths = [
  {
    trigger: "Am o problemă specifică",
    description: "Știu ce mă doare, dar nu știu ce software am nevoie.",
    href: "/solutii",
    label: "Alege după problemă",
    tag: "soluții",
  },
  {
    trigger: "Știu ce vreau să construiesc",
    description: "Vreau un CRM, o automatizare, o aplicație sau un magazine.",
    href: "/servicii",
    label: "Alege după serviciu",
    tag: "servicii",
  },
  {
    trigger: "Sunt dintr-o industrie concretă",
    description: "Service, clinică, salon, restaurant, imobiliare, construcții.",
    href: "/industrii",
    label: "Alege după industrie",
    tag: "industrii",
  },
  {
    trigger: "Vreau să văd exemple reale",
    description: "Sisteme construite pentru firme cu probleme asemănătoare.",
    href: "/portofoliu",
    label: "Vezi portofoliul",
    tag: "portofoliu",
  },
  {
    trigger: "Vreau să discut direct",
    description: "Spune-mi problema ta. Răspund în 24h cu o propunere.",
    href: "/contact",
    label: "Contactează-mă",
    tag: "contact",
    accent: true,
  },
];

export function WebsiteMapSection({ title = "Nu știi de unde să începi?" }: { title?: string }) {
  return (
    <section className="section-pad-sm" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <div style={{ marginBottom: "var(--s-6)", textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: "var(--s-3)" }}>{title}</p>
          <p className="body" style={{ color: "var(--fg-3)", maxWidth: 520, margin: "0 auto" }}>
            Alege punctul de intrare care se potrivește cel mai bine cu situația ta.
          </p>
        </div>
        <div className="grid grid-3" style={{ gap: "var(--s-4)" }}>
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-3)",
                ...(path.accent
                  ? { borderColor: "var(--accent-line)", background: "var(--accent-soft)" }
                  : {}),
              }}
            >
              <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {path.tag}
              </div>
              <h3 className="h-3">{path.trigger}</h3>
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)", flex: 1 }}>
                {path.description}
              </p>
              <span
                className="mono"
                style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                {path.label} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

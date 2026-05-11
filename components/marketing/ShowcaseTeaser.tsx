import Link from "next/link";

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type ShowcaseTeaserType = "demo" | "intern" | "concept" | "real";

const typeLabel: Record<ShowcaseTeaserType, string> = {
  demo: "demonstrație",
  intern: "uz intern",
  concept: "concept",
  real: "sistem real",
};

export type ShowcaseTeaserItem = {
  problem: string;
  system: string;
  modules: string[];
  type: ShowcaseTeaserType;
  slug?: string;
};

export function ShowcaseTeaser({
  num,
  items,
  ctaLabel = "Vreau un sistem asemănător",
  ctaHref = "/contact",
}: {
  num?: string;
  items: ShowcaseTeaserItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row">
            {num && <span className="num">{num}</span>}
            <span className="eyebrow">exemple de sisteme</span>
            <span className="line" />
          </div>
          <h2 className="h-1">Cum arată în practică.</h2>
          <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
            Sisteme construite sau schiţate pentru probleme reale din firme românești.
          </p>
        </div>
        <div style={{ display: "grid", gap: "var(--s-5)" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="card card-elev"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-6)", alignItems: "start" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)" }}>
                <div style={{ display: "flex", gap: "var(--s-3)", alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {typeLabel[item.type]}
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)" }}>·</span>
                  <span className="mono" style={{ fontSize: 11, color: "var(--fg-4)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="mono" style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: "var(--s-2)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    problema
                  </p>
                  <p className="body" style={{ margin: 0 }}>{item.problem}</p>
                </div>
                <div>
                  <p className="mono" style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: "var(--s-2)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    sistemul
                  </p>
                  <p className="body-sm" style={{ margin: 0, color: "var(--fg-2)" }}>{item.system}</p>
                </div>
                {item.slug ? (
                  <Link
                    href={`/portofoliu/${item.slug}`}
                    className="mono"
                    style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "var(--s-2)" }}
                  >
                    Vezi sistemul <ArrowRight />
                  </Link>
                ) : (
                  <Link
                    href={ctaHref}
                    className="mono"
                    style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "var(--s-2)" }}
                  >
                    {ctaLabel} <ArrowRight />
                  </Link>
                )}
              </div>
              <div>
                <p className="mono" style={{ fontSize: 11, color: "var(--fg-3)", marginBottom: "var(--s-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  module incluse
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)" }}>
                  {item.modules.map((mod, j) => (
                    <span
                      key={j}
                      className="chip"
                      style={{ fontSize: 12, padding: "4px 10px", background: "var(--bg-2)" }}
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

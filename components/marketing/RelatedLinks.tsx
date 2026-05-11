import Link from "next/link";

const ArrowRight = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type RelatedLinkItem = {
  href: string;
  label: string;
  description?: string;
  tag?: string;
};

export function RelatedLinks({
  title = "Explorează mai departe",
  links,
  columns = 3,
}: {
  title?: string;
  links: RelatedLinkItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <section className="section-pad-sm" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        {title && (
          <div className="eyebrow" style={{ marginBottom: "var(--s-5)", textAlign: "center" }}>
            {title}
          </div>
        )}
        <div className={`grid grid-${columns}`} style={{ gap: "var(--s-4)" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
            >
              {link.tag && (
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>
                  {link.tag}
                </div>
              )}
              <h3 className="h-3">{link.label}</h3>
              {link.description && (
                <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)", flex: 1 }}>
                  {link.description}
                </p>
              )}
              <span className="mono" style={{ fontSize: 12, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Vezi <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

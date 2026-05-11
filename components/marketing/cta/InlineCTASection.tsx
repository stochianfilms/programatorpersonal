import { CTAGroup } from "./CTAGroup";

export function InlineCTASection({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  align = "start",
  note,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "start" | "center" | "end";
  note?: string;
}) {
  return (
    <section className="section pp-inline-cta-section">
      <div className="container">
        <div className="pp-inline-cta">
          <div>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2 className="h-2">{title}</h2>
            {text ? <p className="body" style={{ margin: 0 }}>{text}</p> : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)", alignItems: align === "center" ? "center" : "flex-start" }}>
            <CTAGroup
              primaryLabel={primaryLabel}
              primaryHref={primaryHref}
              secondaryLabel={secondaryLabel}
              secondaryHref={secondaryHref}
              align={align}
            />
            {note && (
              <p className="body-sm" style={{ margin: 0, color: "var(--fg-4)", fontSize: 13 }}>{note}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

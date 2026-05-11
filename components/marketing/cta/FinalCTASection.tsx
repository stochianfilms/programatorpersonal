import { CTAGroup } from "./CTAGroup";

export function FinalCTASection({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "default",
  showSecondary = true,
  urgencyChip = "Răspund în 24h · Disponibil pentru proiecte noi",
}: {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "compact";
  showSecondary?: boolean;
  urgencyChip?: string;
}) {
  return (
    <section className="section pp-final-cta-section">
      <div className="container">
        <div className={`pp-final-cta-card pp-final-cta-${variant}`}>
          <div className="pp-final-grid-bg" />
          <div className="pp-final-cta-content">
            <span className="chip">
              <span className="dot pulse-dot" /> {urgencyChip}
            </span>
            <h2 className="h-1">{title}</h2>
            <p className="lead">{text}</p>
            <CTAGroup
              primaryLabel={primaryLabel}
              primaryHref={primaryHref}
              secondaryLabel={secondaryLabel}
              secondaryHref={secondaryHref}
              align="center"
              showSecondary={showSecondary}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { CTAGroup } from "@/components/marketing/cta/CTAGroup";

export function PageHero({
  chip,
  title,
  lead,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  showSecondary = true,
  preview,
  urgencyNote,
}: {
  chip?: string;
  title: string;
  lead: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showSecondary?: boolean;
  preview?: ReactNode;
  urgencyNote?: string;
}) {
  return (
    <section
      style={{
        paddingTop: "calc(var(--s-10) + 40px)",
        paddingBottom: "var(--s-9)",
        position: "relative",
      }}
    >
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="pp-visual-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: preview ? "minmax(0, 1fr) auto" : "1fr",
            gap: "var(--s-8)",
            alignItems: "start",
          }}
        >
          <div>
            {chip && (
              <div style={{ marginBottom: "var(--s-5)" }}>
                <span className="chip">
                  <span className="dot pulse-dot" /> {chip}
                </span>
              </div>
            )}
            <h1
              className="h-display"
              style={{
                maxWidth: 820,
                fontSize: "clamp(32px, 5vw, 68px)",
                marginBottom: "var(--s-5)",
              }}
            >
              {title}
            </h1>
            <p className="lead" style={{ maxWidth: 620, color: "var(--fg-2)", marginBottom: sub ? "var(--s-4)" : "var(--s-6)" }}>
              {lead}
            </p>
            {sub && (
              <p className="body" style={{ maxWidth: 620, color: "var(--fg-3)", marginBottom: "var(--s-6)" }}>
                {sub}
              </p>
            )}
            {primaryLabel && primaryHref && (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)", alignItems: "flex-start" }}>
                <CTAGroup
                  primaryLabel={primaryLabel}
                  primaryHref={primaryHref}
                  secondaryLabel={secondaryLabel}
                  secondaryHref={secondaryHref}
                  showSecondary={showSecondary}
                />
                {urgencyNote && (
                  <p
                    className="body-sm"
                    style={{ margin: 0, color: "var(--fg-4)", fontSize: 13 }}
                  >
                    {urgencyNote}
                  </p>
                )}
              </div>
            )}
          </div>
          {preview && (
            <div className="pp-hero-preview-wrap">
              {preview}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

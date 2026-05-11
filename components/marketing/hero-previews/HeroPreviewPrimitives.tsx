import type { ReactNode } from "react";

export function HeroPreviewShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="hero-preview">
      <div className="hero-preview-chrome">
        <div className="hero-preview-dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div>
          <span className="mono">{eyebrow}</span>
          <strong>{title}</strong>
        </div>
      </div>
      <div className="hero-preview-body">{children}</div>
    </div>
  );
}

export function PreviewBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "accent" | "ok" | "warn" | "neutral";
}) {
  return <span className={`hero-preview-badge hero-preview-badge-${tone}`}>{children}</span>;
}

export function PreviewCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`hero-preview-card ${className}`}>{children}</div>;
}

export function PreviewMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="hero-preview-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

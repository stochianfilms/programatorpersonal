import type { ReactNode } from "react";

export function MockupShell({
  title,
  eyebrow,
  children,
  wide = false,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`op-mock ${wide ? "op-mock-wide" : ""}`}>
      <div className="op-mock-chrome">
        <div className="op-mock-dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="op-mock-title">
          <span className="mono">{eyebrow}</span>
          <strong>{title}</strong>
        </div>
        <span className="op-badge op-badge-live">demo fictiv</span>
      </div>
      <div className="op-mock-body">{children}</div>
    </div>
  );
}

export function Panel({
  title,
  meta,
  children,
  className = "",
}: {
  title: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`op-panel ${className}`}>
      <div className="op-panel-head">
        <h3>{title}</h3>
        {meta ? <span className="mono">{meta}</span> : null}
      </div>
      {children}
    </section>
  );
}

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "accent" | "ok" | "warn" | "danger" | "neutral";
}) {
  return <span className={`op-badge op-badge-${tone}`}>{children}</span>;
}

export function Field({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="op-field">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function MiniButton({ children, primary = false }: { children: ReactNode; primary?: boolean }) {
  return <button className={`op-action ${primary ? "op-action-primary" : ""}`}>{children}</button>;
}

export function TimelineItem({
  title,
  meta,
  body,
  active = false,
}: {
  title: string;
  meta: string;
  body?: string;
  active?: boolean;
}) {
  return (
    <div className={`op-timeline-item ${active ? "active" : ""}`}>
      <span className="op-timeline-dot" />
      <div>
        <div className="op-timeline-row">
          <strong>{title}</strong>
          <span className="mono">{meta}</span>
        </div>
        {body ? <p>{body}</p> : null}
      </div>
    </div>
  );
}

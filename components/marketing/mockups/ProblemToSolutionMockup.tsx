import { ArrowRight } from "lucide-react";
import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const problems = [
  { icon: "📊", label: "Excel haos", sub: "5 fișiere, nicio versiune corectă" },
  { icon: "💬", label: "WhatsApp operațional", sub: "comenzi și informații pierdute" },
  { icon: "📝", label: "Word pentru contracte", sub: "copy-paste, greșeli, timp pierdut" },
  { icon: "📧", label: "Email pentru tot", sub: "clienți, sarcini, aprobări amestecate" },
];

const solutions = [
  { label: "CRM custom", sub: "clienți, pipeline, follow-up automat", color: "rgba(132,204,22,0.1)", border: "rgba(132,204,22,0.25)" },
  { label: "Dashboard live", sub: "date din toate sursele, în timp real", color: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.22)" },
  { label: "Generator contracte", sub: "PDF auto, semnat digital", color: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
  { label: "Portal clienți", sub: "statusuri, documente, comunicare", color: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.18)" },
];

export function ProblemToSolutionMockup() {
  return (
    <MockupShell title="De la haos la sistem" eyebrow="transformare / înainte și după" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "var(--s-4)", alignItems: "center" }}>
        {/* Problems (before) */}
        <Panel title="Înainte — tooluri disparate" meta={<StatusBadge tone="danger">haos</StatusBadge>}>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {problems.map((p) => (
              <div
                key={p.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 9px",
                  background: "rgba(239,68,68,0.05)",
                  border: "1px solid rgba(239,68,68,0.15)",
                  borderRadius: 5,
                }}
              >
                <span style={{ fontSize: 14, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-2)" }}>{p.label}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Arrow */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <ArrowRight size={24} style={{ color: "var(--accent)" }} />
          <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)", textAlign: "center", lineHeight: 1.4 }}>
            sistem<br />integrat
          </div>
        </div>

        {/* Solutions (after) */}
        <Panel title="După — sistem unitar" meta={<StatusBadge tone="ok">organizat</StatusBadge>}>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {solutions.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "7px 9px",
                  background: s.color,
                  border: `1px solid ${s.border}`,
                  borderRadius: 5,
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-1)" }}>{s.label}</div>
                <div className="mono" style={{ fontSize: 9, color: "var(--fg-3)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div style={{ marginTop: 10, textAlign: "center" }}>
        <StatusBadge tone="ok">datele tale · un singur sistem · acces de oriunde</StatusBadge>
      </div>
    </MockupShell>
  );
}

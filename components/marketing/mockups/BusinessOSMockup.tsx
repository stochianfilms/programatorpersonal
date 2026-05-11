import { BarChart2, Calendar, FileText, LayoutDashboard, Users, Zap } from "lucide-react";
import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const modules = [
  { icon: Users, label: "CRM clienți", sub: "pipeline, follow-up, oferte", status: "ok" as const },
  { icon: FileText, label: "Contracte", sub: "generator PDF, semnătură", status: "ok" as const },
  { icon: BarChart2, label: "Dashboard", sub: "KPIs live, rapoarte auto", status: "ok" as const },
  { icon: Calendar, label: "Programări", sub: "calendar, reminder SMS", status: "ok" as const },
  { icon: LayoutDashboard, label: "Portal clienți", sub: "acces securizat", status: "accent" as const },
  { icon: Zap, label: "Automatizări", sub: "fluxuri, notificări", status: "accent" as const },
];

const activity = [
  { label: "Lead nou", sub: "Andrei Popescu → CRM", time: "acum 2min" },
  { label: "Contract trimis", sub: "Nova Service · PDF auto", time: "09:44" },
  { label: "Raport generat", sub: "Vânzări mai 2026", time: "09:00" },
  { label: "Programare confirmată", sub: "Elena Ionescu · 14:00", time: "ieri" },
];

export function BusinessOSMockup() {
  return (
    <MockupShell title="Business OS — toate modulele" eyebrow="programatorpersonal · sistem modular" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Modules grid */}
        <Panel title="Module active" meta="6/6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {modules.map(({ icon: Icon, label, sub, status }) => (
              <div
                key={label}
                style={{
                  padding: "8px 10px",
                  borderRadius: 6,
                  background: status === "ok" ? "rgba(132,204,22,0.06)" : "rgba(59,130,246,0.06)",
                  border: `1px solid ${status === "ok" ? "rgba(132,204,22,0.18)" : "rgba(59,130,246,0.18)"}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Icon size={12} style={{ color: status === "ok" ? "var(--accent)" : "#60a5fa", flexShrink: 0 }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-1)" }}>{label}</span>
                </div>
                <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{sub}</span>
              </div>
            ))}
          </div>
        </Panel>

        {/* Live activity */}
        <Panel title="Activitate live" meta="azi">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {activity.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 8px",
                  background: "var(--bg-2)",
                  border: "1px solid var(--line-1)",
                  borderRadius: 5,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--fg-1)" }}>{item.label}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.sub}</div>
                </div>
                <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)", whiteSpace: "nowrap" }}>{item.time}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <StatusBadge tone="ok">sistem activ</StatusBadge>
            <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>sync 4s</span>
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

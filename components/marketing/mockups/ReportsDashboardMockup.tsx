import { Field, MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const kpis = [
  { label: "Venit luna", value: "42.8k RON", delta: "↑ 18%", accent: true },
  { label: "Clienți activi", value: "67", delta: "+5 noi", accent: false },
  { label: "Contracte active", value: "31", delta: "3 expiră", accent: false },
  { label: "NPS estimat", value: "89", delta: "top 15%", accent: true },
];

const barData = [38, 52, 44, 61, 55, 72, 68, 79, 65, 83, 74, 91];
const months = ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"];

const reports = [
  { name: "Vânzări lunare", schedule: "1 ale lunii", status: "ok" as const },
  { name: "Pipeline CRM", schedule: "săptămânal", status: "ok" as const },
  { name: "Facturi neîncasate", schedule: "zilnic", status: "warn" as const },
  { name: "Performanță echipă", schedule: "lunar", status: "accent" as const },
];

export function ReportsDashboardMockup() {
  return (
    <MockupShell title="Dashboard rapoarte · date live" eyebrow="rapoarte / dashboard" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Left: KPIs + chart */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="KPI-uri lunare" meta="mai 2026">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {kpis.map((k) => (
                <div
                  key={k.label}
                  style={{
                    padding: "8px 10px",
                    background: "var(--bg-2)",
                    border: "1px solid var(--line-1)",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ fontSize: 10, color: "var(--fg-4)", marginBottom: 3 }}>{k.label}</div>
                  <div className="mono" style={{ fontSize: 17, fontWeight: 600, color: k.accent ? "var(--accent)" : "var(--fg-1)", lineHeight: 1 }}>{k.value}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-3)", marginTop: 3 }}>{k.delta}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Trend venit anual" meta="2026">
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 44 }}>
              {barData.map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <div
                    style={{
                      width: "100%",
                      height: `${(h / 91) * 36}px`,
                      background: i === 11 ? "var(--accent)" : i >= 8 ? "rgba(132,204,22,0.4)" : "rgba(255,255,255,0.1)",
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                  <span className="mono" style={{ fontSize: 7, color: "var(--fg-4)" }}>{months[i]}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* Right: reports */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Rapoarte automate" meta={`${reports.length} active`}>
            {reports.map((r) => (
              <div
                key={r.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 8px",
                  background: "var(--bg-2)",
                  border: "1px solid var(--line-1)",
                  borderRadius: 5,
                  marginBottom: 4,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--fg-1)" }}>{r.name}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{r.schedule}</div>
                </div>
                <StatusBadge tone={r.status}>{r.status === "ok" ? "activ" : r.status === "warn" ? "alertă" : "programat"}</StatusBadge>
              </div>
            ))}
          </Panel>

          <Panel title="Comparativ luni" meta="apr vs mai">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Venit", apr: "36.2k", mai: "42.8k", up: true },
                { label: "Clienți noi", apr: "3", mai: "5", up: true },
                { label: "Contracte", apr: "29", mai: "31", up: true },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 80, fontSize: 11, color: "var(--fg-3)" }}>{row.label}</span>
                  <span className="mono" style={{ fontSize: 10, color: "var(--fg-4)" }}>{row.apr}</span>
                  <span style={{ fontSize: 9, color: "var(--fg-4)" }}>→</span>
                  <span className="mono" style={{ fontSize: 10, color: row.up ? "var(--accent)" : "var(--fg-2)", fontWeight: 600 }}>{row.mai}</span>
                </div>
              ))}
            </div>
          </Panel>

          <div style={{ padding: "8px 10px", background: "rgba(132,204,22,0.06)", border: "1px solid rgba(132,204,22,0.18)", borderRadius: 6 }}>
            <Field label="Ultima actualizare" value="acum 8s" />
            <Field label="Export" value="CSV · PDF · API" />
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

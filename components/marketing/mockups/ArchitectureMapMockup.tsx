import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const layers = [
  {
    label: "Frontend",
    color: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.22)",
    accentColor: "#60a5fa",
    modules: ["React / Next.js", "TypeScript", "Mobile-ready", "SEO optimizat"],
  },
  {
    label: "API & Logică business",
    color: "rgba(132,204,22,0.07)",
    border: "rgba(132,204,22,0.2)",
    accentColor: "var(--accent)",
    modules: ["REST / tRPC", "Autentificare JWT", "Roluri & permisiuni", "Validare date"],
  },
  {
    label: "Date & Stocare",
    color: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.2)",
    accentColor: "#fbbf24",
    modules: ["PostgreSQL", "Fișiere securizate", "Search full-text", "Backup zilnic"],
  },
  {
    label: "Integrări externe",
    color: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.18)",
    accentColor: "#c084fc",
    modules: ["Stripe / procesare plăți", "SmartBill facturare", "Email & SMS", "API-uri terțe"],
  },
];

export function ArchitectureMapMockup() {
  return (
    <MockupShell title="Arhitectura aplicației tale" eyebrow="arhitectură / stack modular" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--s-4)" }}>
        {/* Architecture layers */}
        <Panel title="Stack tehnic · layers" meta="custom per proiect">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {layers.map((layer, i) => (
              <div key={layer.label}>
                <div
                  style={{
                    padding: "10px 12px",
                    borderRadius: 6,
                    background: layer.color,
                    border: `1px solid ${layer.border}`,
                  }}
                >
                  <div
                    className="mono"
                    style={{ fontSize: 10, color: layer.accentColor, marginBottom: 6, fontWeight: 600 }}
                  >
                    {layer.label}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {layer.modules.map((m) => (
                      <span
                        key={m}
                        style={{
                          padding: "2px 7px",
                          borderRadius: 3,
                          fontSize: 10,
                          background: "rgba(255,255,255,0.05)",
                          color: "var(--fg-2)",
                          border: "1px solid var(--line-1)",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                {i < layers.length - 1 && (
                  <div style={{ display: "flex", justifyContent: "center", height: 10 }}>
                    <div style={{ width: 1, height: "100%", background: "var(--line-2)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Panel>

        {/* Properties sidebar */}
        <div style={{ width: 130, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Proprietăți" meta="">
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                { label: "Cod tău", val: "100%" },
                { label: "Hosting", val: "ales de tine" },
                { label: "Scalabil", val: "da" },
                { label: "API deschis", val: "da" },
              ].map((p) => (
                <div key={p.label} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{p.label}</span>
                  <span style={{ fontSize: 11, color: "var(--fg-1)", fontWeight: 500 }}>{p.val}</span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Status" meta="">
            <StatusBadge tone="ok">arhitectură solidă</StatusBadge>
            <div style={{ marginTop: 8 }}>
              <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>Modulele se adaugă pe măsură ce firma crește.</div>
            </div>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}

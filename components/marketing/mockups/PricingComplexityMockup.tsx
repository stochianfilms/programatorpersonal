import { CheckCircle } from "lucide-react";
import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const moduleGroups = [
  {
    group: "Core",
    color: "rgba(132,204,22,0.08)",
    border: "rgba(132,204,22,0.22)",
    items: ["CRM clienți", "Dashboard KPI", "Autentificare & roluri"],
    included: true,
  },
  {
    group: "Documente",
    color: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.18)",
    items: ["Generator contracte", "Semnătură digitală", "Arhivă documente"],
    included: false,
  },
  {
    group: "Automatizări",
    color: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.18)",
    items: ["Email & SMS automat", "Workflow builder", "Integrări API"],
    included: false,
  },
  {
    group: "Rapoarte",
    color: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.18)",
    items: ["Rapoarte automate", "Export CSV/PDF", "Comparativ perioade"],
    included: false,
  },
];

const factors = [
  { label: "Module selectate", value: "3 / 12", note: "poți adăuga oricând" },
  { label: "Utilizatori", value: "5", note: "scalabil" },
  { label: "Integrări", value: "2", note: "Stripe, SmartBill" },
  { label: "Mentenanță", value: "lunară", note: "opțional" },
];

export function PricingComplexityMockup() {
  return (
    <MockupShell title="Prețul depinde de ce ai nevoie" eyebrow="prețuri / configurator modular" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--s-4)" }}>
        {/* Module selector */}
        <Panel title="Selectează modulele" meta="fiecare modul = funcționalitate">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {moduleGroups.map((g) => (
              <div
                key={g.group}
                style={{
                  padding: "9px 10px",
                  borderRadius: 6,
                  background: g.color,
                  border: `1px solid ${g.border}`,
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <span className="mono" style={{ fontSize: 10, fontWeight: 600, color: "var(--fg-2)" }}>{g.group}</span>
                  {g.included && <CheckCircle size={11} style={{ color: "var(--accent)" }} />}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {g.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: g.included ? "var(--accent)" : "var(--line-2)", flexShrink: 0 }} />
                      <span style={{ fontSize: 9, color: g.included ? "var(--fg-1)" : "var(--fg-4)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Estimate sidebar */}
        <div style={{ width: 150, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Configurația ta" meta="">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {factors.map((f) => (
                <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{f.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg-1)" }}>{f.value}</span>
                  <span className="mono" style={{ fontSize: 8, color: "var(--fg-4)" }}>{f.note}</span>
                </div>
              ))}
            </div>
          </Panel>

          <div
            style={{
              padding: "10px",
              background: "rgba(132,204,22,0.08)",
              border: "1px solid rgba(132,204,22,0.25)",
              borderRadius: 6,
              textAlign: "center",
            }}
          >
            <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)", marginBottom: 4 }}>estimare orientativă</div>
            <div className="mono" style={{ fontSize: 18, fontWeight: 700, color: "var(--accent)" }}>2.400€</div>
            <div className="mono" style={{ fontSize: 8, color: "var(--fg-4)", marginTop: 4 }}>fixă · fără abonament</div>
          </div>

          <StatusBadge tone="accent">prețul fix · fără surprize</StatusBadge>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>
          Nu vindem abonamente la software pe care nu îl deții. Plătești o dată — codul e al tău.
        </div>
      </div>
    </MockupShell>
  );
}

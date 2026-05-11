import { CheckCircle, FileText } from "lucide-react";
import { Field, MockupShell, MiniButton, Panel } from "./MockupPrimitives";

const templates = [
  { name: "Contract servicii lunare", uses: 48 },
  { name: "Acord NDA standard", uses: 23 },
  { name: "Contract prestări punctuale", uses: 17 },
];

const clauses = [
  "Obiectul contractului",
  "Durata și valoarea",
  "Condiții de plată",
  "Garanții și SLA",
  "Clauze confidențialitate",
  "Forță majoră",
];

export function ContractGeneratorMockup() {
  return (
    <MockupShell title="Generator contracte · auto-PDF" eyebrow="contracte / generator" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Left: form */}
        <Panel title="Date contract">
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Field label="Client" value="Nova Service SRL" />
            <Field label="CUI" value="RO 12345678" />
            <Field label="Serviciu" value="Mentenanță lunară" />
            <Field label="Valoare" value={<span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>1.200 EUR / lună</span>} />
            <Field label="Durată" value="12 luni · auto-prelungire" />
            <Field label="Semnat de" value="Andrei Popescu" />
          </div>
          <div style={{ marginTop: 10 }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--fg-4)", marginBottom: 6 }}>Template selectat</div>
            <div
              style={{
                padding: "7px 10px",
                background: "rgba(132,204,22,0.08)",
                border: "1px solid rgba(132,204,22,0.25)",
                borderRadius: 5,
                fontSize: 11,
                color: "var(--accent)",
              }}
            >
              Contract servicii lunare
            </div>
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
            <MiniButton primary><FileText size={13} /> Generează PDF</MiniButton>
            <MiniButton>Previzualizare</MiniButton>
          </div>
        </Panel>

        {/* Right: preview + clauses */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Previzualizare document" meta="draft">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[100, 80, 90, 60, 75, 45].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 4,
                    borderRadius: 2,
                    background: i === 3 ? "rgba(132,204,22,0.35)" : "var(--line-2)",
                    width: `${w}%`,
                  }}
                />
              ))}
            </div>
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
              <CheckCircle size={13} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 11, color: "var(--accent)", fontFamily: "var(--font-mono)" }}>Semnat digital · 11 mai 2026</span>
            </div>
          </Panel>

          <Panel title="Template-uri active" meta={`${templates.length}`}>
            {templates.map((t) => (
              <div
                key={t.name}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "1px solid var(--line-1)" }}
              >
                <span style={{ fontSize: 11, color: "var(--fg-2)" }}>{t.name}</span>
                <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{t.uses}×</span>
              </div>
            ))}
          </Panel>

          <Panel title="Clauze auto-completate" meta={`${clauses.length}/6`}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {clauses.map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "2px 6px",
                    borderRadius: 3,
                    fontSize: 9,
                    background: "rgba(132,204,22,0.08)",
                    border: "1px solid rgba(132,204,22,0.2)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}

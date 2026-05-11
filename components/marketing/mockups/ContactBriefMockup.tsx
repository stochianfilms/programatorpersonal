import { CheckCircle } from "lucide-react";
import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const formFields = [
  { label: "Numele tău", value: "Andrei Popescu", filled: true },
  { label: "Firma", value: "Nova Service SRL", filled: true },
  { label: "Email", value: "andrei@example.com", filled: true },
  { label: "Ce problemă vrei să rezolvi?", value: "Gestionăm service auto cu fișe pe hârtie...", filled: true, big: true },
];

const nextSteps = [
  { n: "01", label: "Trimiți brieful", sub: "2 minute · fără apel forțat" },
  { n: "02", label: "Răspund în 24h", sub: "cu o propunere clară" },
  { n: "03", label: "Call 30 minute", sub: "discutăm concret" },
  { n: "04", label: "Ofertă + plan", sub: "preț fix, livrabile clare" },
];

export function ContactBriefMockup() {
  return (
    <MockupShell title="Hai să discutăm proiectul tău" eyebrow="contact / brief rapid" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Form */}
        <Panel title="Brief rapid" meta="~2 minute">
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {formFields.map((f) => (
              <div key={f.label}>
                <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)", marginBottom: 3 }}>{f.label}</div>
                <div
                  style={{
                    padding: f.big ? "7px 9px" : "5px 9px",
                    background: f.filled ? "rgba(132,204,22,0.06)" : "var(--bg-2)",
                    border: `1px solid ${f.filled ? "rgba(132,204,22,0.22)" : "var(--line-1)"}`,
                    borderRadius: 5,
                    fontSize: 11,
                    color: f.filled ? "var(--fg-1)" : "var(--fg-4)",
                    lineHeight: f.big ? 1.5 : "normal",
                  }}
                >
                  {f.value}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10 }}>
            <div
              style={{
                padding: "8px 12px",
                background: "var(--accent)",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 600,
                color: "#000",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Trimite brieful →
            </div>
          </div>
        </Panel>

        {/* Next steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Ce urmează" meta="4 pași simpli">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {nextSteps.map((step, i) => (
                <div
                  key={step.n}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    padding: "6px 8px",
                    background: i === 0 ? "rgba(132,204,22,0.06)" : "var(--bg-2)",
                    border: `1px solid ${i === 0 ? "rgba(132,204,22,0.2)" : "var(--line-1)"}`,
                    borderRadius: 5,
                  }}
                >
                  <span className="mono" style={{ fontSize: 10, color: "var(--accent)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{step.n}</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-1)" }}>{step.label}</div>
                    <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <div
            style={{
              padding: "10px",
              background: "rgba(132,204,22,0.06)",
              border: "1px solid rgba(132,204,22,0.18)",
              borderRadius: 6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <CheckCircle size={12} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 11, color: "var(--fg-1)", fontWeight: 500 }}>Fără audit de 2 săptămâni</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <CheckCircle size={12} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 11, color: "var(--fg-1)", fontWeight: 500 }}>Răspund personal, nu o agenție</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <CheckCircle size={12} style={{ color: "var(--accent)" }} />
              <span style={{ fontSize: 11, color: "var(--fg-1)", fontWeight: 500 }}>Ofertă clară · preț fix</span>
            </div>
          </div>

          <StatusBadge tone="ok">disponibil pentru proiecte noi</StatusBadge>
        </div>
      </div>
    </MockupShell>
  );
}

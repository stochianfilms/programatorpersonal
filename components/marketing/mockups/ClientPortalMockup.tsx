import { FileText, MessageSquare } from "lucide-react";
import { Field, MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const navItems = ["Proiect", "Facturi", "Documente", "Mesaje"];

const files = [
  { name: "brief_v3_final.pdf", date: "azi", size: "1.4 MB", isNew: true },
  { name: "wireframe_aprobat.fig", date: "9 mai", size: "5.2 MB", isNew: false },
  { name: "contract_2026.pdf", date: "2 mai", size: "0.3 MB", isNew: false },
  { name: "factura_001.pdf", date: "1 mai", size: "0.1 MB", isNew: false },
];

const messages = [
  { from: "Andrei Popescu", msg: "Putem adăuga și un modul de rapoarte?", time: "azi 10:12", self: false },
  { from: "Maria Dima", msg: "Da, am inclus asta în sprint 3. Îți trimit detalii.", time: "azi 10:15", self: true },
];

const milestones = [
  { label: "Brief aprobat", done: true },
  { label: "Design UI", done: true },
  { label: "Dezvoltare backend", done: false },
  { label: "Testare & lansare", done: false },
];

export function ClientPortalMockup() {
  return (
    <MockupShell title="Portal client · acces securizat" eyebrow="portal / andrei.popescu@example.com" wide>
      {/* Nav tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: "var(--s-3)" }}>
        {navItems.map((item, i) => (
          <span
            key={item}
            style={{
              padding: "4px 10px",
              borderRadius: 4,
              fontSize: 11,
              background: i === 2 ? "rgba(132,204,22,0.1)" : "var(--bg-2)",
              border: `1px solid ${i === 2 ? "rgba(132,204,22,0.3)" : "var(--line-1)"}`,
              color: i === 2 ? "var(--accent)" : "var(--fg-3)",
              fontFamily: i === 2 ? "var(--font-mono)" : "inherit",
              cursor: "pointer",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Documents */}
        <Panel title="Documente" meta={`${files.length} fișiere`}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {files.map((f) => (
              <div
                key={f.name}
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
                <FileText size={12} style={{ color: "var(--fg-4)", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: "var(--fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{f.size} · {f.date}</div>
                </div>
                {f.isNew && <StatusBadge tone="ok">nou</StatusBadge>}
              </div>
            ))}
          </div>
        </Panel>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          {/* Progress */}
          <Panel title="Progres proiect" meta="68%">
            <div style={{ marginBottom: 8 }}>
              <div style={{ height: 4, background: "var(--line-1)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: "68%", height: "100%", background: "var(--accent)", borderRadius: 2 }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {milestones.map((m) => (
                <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: m.done ? "var(--accent)" : "var(--line-2)", flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: m.done ? "var(--fg-1)" : "var(--fg-4)" }}>{m.label}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Messages */}
          <Panel title="Mesaje" meta={<MessageSquare size={11} />}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {messages.map((m, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2, alignItems: m.self ? "flex-end" : "flex-start" }}>
                  <div
                    style={{
                      padding: "5px 8px",
                      borderRadius: 6,
                      background: m.self ? "rgba(132,204,22,0.12)" : "var(--bg-2)",
                      border: `1px solid ${m.self ? "rgba(132,204,22,0.25)" : "var(--line-1)"}`,
                      maxWidth: "85%",
                    }}
                  >
                    <div style={{ fontSize: 10, color: "var(--fg-1)" }}>{m.msg}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{m.from} · {m.time}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Field label="Client" value="Nova Service SRL" />
        <StatusBadge tone="ok">portal activ</StatusBadge>
      </div>
    </MockupShell>
  );
}

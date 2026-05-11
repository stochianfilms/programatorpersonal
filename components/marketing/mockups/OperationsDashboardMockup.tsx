import { AlertTriangle, Gauge, Timer, UserCheck } from "lucide-react";
import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const kpis = [
  ["Fișe active", "128", "accent"],
  ["În SLA", "104", "ok"],
  ["Depășite", "9", "danger"],
  ["La service autorizat", "31", "accent"],
  ["Așteaptă client", "18", "warn"],
  ["Finalizate luna asta", "214", "ok"],
];

export function OperationsDashboardMockup() {
  return (
    <MockupShell title="Dashboard management" eyebrow="operations / manager" wide>
      <div className="op-kpi-grid">
        {kpis.map(([label, value, tone]) => (
          <div key={label} className="op-kpi-card">
            <span>{label}</span>
            <strong className="mono">{value}</strong>
            <StatusBadge tone={tone as "accent" | "ok" | "warn" | "danger"}>live</StatusBadge>
          </div>
        ))}
      </div>
      <div className="op-dash-grid">
        <Panel title="Trend fișe" meta="ultimele 7 zile">
          <div className="op-bars">
            {[48, 62, 54, 75, 69, 84, 91].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </Panel>
        <Panel title="Status distribution" meta="azi">
          <div className="op-donut" aria-hidden />
          <div className="op-legend">
            <span><i className="a" /> În lucru</span>
            <span><i className="b" /> Service autorizat</span>
            <span><i className="c" /> Așteaptă client</span>
          </div>
        </Panel>
        <Panel title="Top motive întârziere" meta="săptămâna curentă">
          <div className="op-reason-list">
            <div><AlertTriangle size={14} /><span>Răspuns service autorizat</span><strong>42%</strong></div>
            <div><Timer size={14} /><span>Așteaptă confirmare client</span><strong>31%</strong></div>
            <div><Gauge size={14} /><span>Diagnostic suplimentar</span><strong>18%</strong></div>
          </div>
        </Panel>
        <Panel title="Performanță responsabili" meta="luna curentă">
          <div className="op-owner-list">
            {[
              ["Maria Dima", "96%", 96],
              ["Andrei Popescu", "91%", 91],
              ["Elena Ionescu", "88%", 88],
            ].map(([name, score, pct]) => (
              <div key={name}>
                <UserCheck size={14} />
                <span>{name}</span>
                <div><i style={{ width: `${pct}%` }} /></div>
                <strong>{score}</strong>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

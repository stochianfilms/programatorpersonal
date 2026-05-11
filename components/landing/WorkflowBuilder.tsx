"use client";

import { useState } from "react";
import { SectionHead } from "./atoms/SectionHead";

const nodes = [
  { id: "form", t: "Formular client", s: "date trimise din site", x: 30, y: 90, icon: "⇲" },
  { id: "db", t: "Bază de date", s: "salvat în CRM", x: 230, y: 90, icon: "≣" },
  { id: "auto", t: "Automatizare", s: "reguli + verificări", x: 430, y: 90, icon: "⟳" },
  { id: "pdf", t: "Contract PDF", s: "generat cu datele lead", x: 630, y: 30, icon: "▤" },
  { id: "mail", t: "Email trimis", s: "cu PDF atașat", x: 630, y: 150, icon: "✉" },
  { id: "dash", t: "Dashboard", s: "actualizat live", x: 830, y: 90, icon: "◫" },
];

const edges: [string, string][] = [
  ["form", "db"],
  ["db", "auto"],
  ["auto", "pdf"],
  ["auto", "mail"],
  ["pdf", "dash"],
  ["mail", "dash"],
];

const order = ["form", "db", "auto", "pdf", "mail", "dash"];
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function WorkflowBuilder() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="section" id="workflow">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow="workflow builder"
          title={<>Conectăm pașii care acum se fac <span className="serif" style={{ color: "var(--fg-3)" }}>la mână</span>.</>}
          lead="Un workflow real, construit pentru o firmă din România. Datele intră o singură dată, apoi totul se mișcă singur — până ajunge înapoi la tine, sub formă de raport."
        />
        <div className="pp-flow">
          <div className="pp-flow-toolbar">
            <div className="pp-flow-tabs">
              <span className="pp-flow-tab active">Lead → Contract → Raport</span>
              <span className="pp-flow-tab">Comandă online → Curierat</span>
              <span className="pp-flow-tab">Programare → Reminder</span>
            </div>
            <span className="chip chip-accent" style={{ fontSize: 11 }}>
              <span className="dot pulse-dot" /> rulează acum
            </span>
          </div>

          <div className="pp-flow-canvas">
            <div className="bg-grid pp-flow-grid" />
            <svg
              className="pp-flow-edges"
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              {edges.map(([a, b], i) => {
                const A = byId[a], B = byId[b];
                const dx = (B.x - A.x) / 2;
                const d = `M ${A.x + 80} ${A.y + 22} C ${A.x + 80 + dx} ${A.y + 22}, ${B.x - dx} ${B.y + 22}, ${B.x} ${B.y + 22}`;
                return (
                  <g key={i}>
                    <path d={d} stroke="var(--line-2)" strokeWidth="1.2" fill="none" />
                    <path
                      d={d}
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="8 6"
                      style={{
                        strokeDashoffset: 0,
                        animation: `pp-flow 1.6s linear infinite`,
                        animationDelay: `${0.2 + i * 0.18}s`,
                        opacity: 0.85,
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {nodes.map((n) => (
              <div
                key={n.id}
                className={`pp-flow-node reveal reveal-${order.indexOf(n.id) + 1} ${hovered === n.id ? "hovered" : ""}`}
                style={{ left: `${(n.x / 990) * 100}%`, top: `${(n.y / 220) * 100}%` }}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="pp-flow-node-head">
                  <span className="pp-flow-node-icon">{n.icon}</span>
                  <span className="pp-flow-node-t">{n.t}</span>
                </div>
                <div className="pp-flow-node-s">{n.s}</div>
                <span className="pp-flow-node-dot pulse-dot" />
              </div>
            ))}
          </div>

          <div className="pp-flow-foot mono">
            <span style={{ color: "var(--fg-3)" }}># /workflows/lead-to-contract.flow</span>
            <span style={{ color: "var(--accent)" }}>● healthy</span>
            <span style={{ color: "var(--fg-3)" }}>ultima rulare · acum 8s</span>
          </div>
        </div>
      </div>
    </section>
  );
}

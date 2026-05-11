"use client";

import { useState } from "react";
import { SectionHead } from "./atoms/SectionHead";

const clients = [
  { id: 0, name: "Cristian Ene", stage: "Lead nou", car: "Dacia Logan 2018", issue: "Diagnoză check-engine", slot: { day: 0, time: "09:00" }, value: 280 },
  { id: 1, name: "Andrei Munteanu", stage: "Ofertă", car: "BMW X3 xDrive 2019", issue: "Reparație injectoare", slot: { day: 1, time: "11:00" }, value: 1240 },
  { id: 2, name: "Diana Stoica", stage: "Contract", car: "VW Golf 2020", issue: "Schimb distribuție", slot: { day: 2, time: "15:00" }, value: 480 },
  { id: 3, name: "Maria Popa", stage: "Finalizat", car: "Renault Captur 2021", issue: "Revizie 60.000 km", slot: { day: 4, time: "14:00" }, value: 320 },
];

const stageKind = (stage: string) =>
  stage === "Lead nou" ? "a" : stage === "Ofertă" ? "b" : stage === "Contract" ? "c" : "ok";

const weekDays = ["L 19", "M 20", "M 21", "J 22", "V 23"];
const weekDayShort = ["Lu", "Ma", "Mi", "Jo", "Vi"];
const weekDayFull = ["Luni", "Marți", "Miercuri", "Joi", "Vineri"];

export function LiveMockupsSection() {
  const [sel, setSel] = useState(1);
  const c = clients[sel];

  return (
    <section className="section" id="live">
      <div className="container">
        <SectionHead
          num="12"
          eyebrow="live · interactiv"
          title={<>Apasă pe un client. Vezi cum se mișcă <span style={{ color: "var(--accent)" }}>tot sistemul</span>.</>}
          lead="Cele trei aplicații vorbesc între ele. Schimbi clientul în CRM → se actualizează automat calendar și contract."
        />
        <div className="pp-lv2">
          {/* CRM */}
          <div className="pp-mw lift">
            <div className="pp-mw-chrome">
              <div className="pp-mw-dots">
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FEBC2E" }} />
                <span style={{ background: "#28C840" }} />
              </div>
              <span className="mono pp-mw-title">crm.firma.ro/clienți</span>
              <span className="chip chip-accent" style={{ fontSize: 10, padding: "2px 8px" }}>
                {clients.length} clienți
              </span>
            </div>
            <div className="pp-mw-body">
              <div className="eyebrow" style={{ marginBottom: 4 }}>click pentru a selecta</div>
              {clients.map((cl) => (
                <button
                  key={cl.id}
                  className={`pp-lv2-row ${sel === cl.id ? "active" : ""}`}
                  onClick={() => setSel(cl.id)}
                >
                  <span className="pp-lv2-av">{cl.name.split(" ").map((s) => s[0]).join("")}</span>
                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                    <div className="pp-lv2-name">{cl.name}</div>
                    <div className="pp-lv2-sub">{cl.car}</div>
                  </div>
                  <span className={`pp-lv2-tag k-${stageKind(cl.stage)}`}>{cl.stage}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="pp-mw lift">
            <div className="pp-mw-chrome">
              <div className="pp-mw-dots">
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FEBC2E" }} />
                <span style={{ background: "#28C840" }} />
              </div>
              <span className="mono pp-mw-title">calendar.firma.ro</span>
              <span className="chip mono" style={{ fontSize: 10, padding: "2px 8px" }}>S 19 — V 23</span>
            </div>
            <div className="pp-mw-body">
              <div className="pp-lv2-week">
                {weekDays.map((d, i) => (
                  <div key={i} className={`pp-lv2-day ${i === c.slot.day ? "has" : ""}`}>
                    <span className="pp-lv2-day-l">{d.split(" ")[0]}</span>
                    <span className="mono pp-lv2-day-n">{d.split(" ")[1]}</span>
                    {i === c.slot.day && (
                      <div key={c.id} className="pp-lv2-day-evt">
                        <span className="mono pp-lv2-day-time">{c.slot.time}</span>
                        <span className="pp-lv2-day-evt-t">{c.name.split(" ")[0]}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="pp-lv2-info">
                <div className="eyebrow">selecție · sincronizat</div>
                <div style={{ fontSize: 13, marginTop: 6 }}>
                  <strong>{c.name}</strong> <span style={{ color: "var(--fg-3)" }}>· {c.issue}</span>
                </div>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", marginTop: 4 }}>
                  ↗ slot rezervat: {weekDayFull[c.slot.day]} · {c.slot.time}
                </div>
              </div>
            </div>
          </div>

          {/* Contract generator */}
          <div className="pp-mw lift">
            <div className="pp-mw-chrome">
              <div className="pp-mw-dots">
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FEBC2E" }} />
                <span style={{ background: "#28C840" }} />
              </div>
              <span className="mono pp-mw-title">contracte/generator</span>
              <span className="chip chip-accent mono" style={{ fontSize: 10, padding: "2px 8px" }}>auto</span>
            </div>
            <div className="pp-mw-body">
              <div key={c.id} className="pp-lv2-doc">
                <div className="pp-lv2-doc-row">
                  <span className="pp-lv2-doc-k">Client</span>
                  <span className="pp-lv2-doc-v">{c.name}</span>
                </div>
                <div className="pp-lv2-doc-row">
                  <span className="pp-lv2-doc-k">Vehicul</span>
                  <span className="pp-lv2-doc-v">{c.car}</span>
                </div>
                <div className="pp-lv2-doc-row">
                  <span className="pp-lv2-doc-k">Serviciu</span>
                  <span className="pp-lv2-doc-v">{c.issue}</span>
                </div>
                <div className="pp-lv2-doc-row">
                  <span className="pp-lv2-doc-k">Programat</span>
                  <span className="pp-lv2-doc-v mono">{weekDayShort[c.slot.day]} · {c.slot.time}</span>
                </div>
                <div className="pp-lv2-doc-row pp-lv2-doc-tot">
                  <span className="pp-lv2-doc-k">Total estimat</span>
                  <span className="pp-lv2-doc-v mono" style={{ color: "var(--accent)", fontSize: 16 }}>
                    {c.value.toLocaleString("ro-RO")} RON
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div className="pp-lv2-btn pp-lv2-btn-primary">Generează contract PDF</div>
                <div className="pp-lv2-btn">Trimite spre semnare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

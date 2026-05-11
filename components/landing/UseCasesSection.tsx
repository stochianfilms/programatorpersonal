"use client";

import { useState } from "react";
import { SectionHead } from "./atoms/SectionHead";

const cases = [
  {
    id: "service",
    tag: "Service auto",
    title: "Atelier auto din București · 8 mecanici",
    problem: "Comenzi pe WhatsApp, facturi în Excel, piese pierdute la furnizori.",
    built: ["CRM cu fișe de service", "Generator facturi PDF", "Stoc piese + comenzi auto", 'SMS „mașina e gata"'],
    stats: [{ k: "47%", v: "mai puține telefoane" }, { k: "3.2x", v: "fișe procesate/zi" }, { k: "12h", v: "salvate/săptămână" }],
    sparkles: ["fișă în 30s", "parts auto-reorder", "SMS la finalizare"],
  },
  {
    id: "imob",
    tag: "Imobiliare",
    title: "Agenție imobiliară · 22 agenți",
    problem: 'Anunțuri postate manual pe 6 site-uri, lead-uri duplicate, agenți care „uită" follow-up.',
    built: ["Hub central anunțuri → publicare auto", "Detector lead-uri duplicate", "Round-robin agenți", "Reminder follow-up 3/7/14 zile"],
    stats: [{ k: "6→1", v: "site-uri de gestionat" }, { k: "+38%", v: "lead-uri convertite" }, { k: "0", v: "lead-uri pierdute" }],
    sparkles: ["publicare 1-click", "matching agent", "follow-up auto"],
  },
  {
    id: "magazin",
    tag: "E-commerce",
    title: "Magazin online produse hand-made · 800 SKU",
    problem: "Stoc gestionat pe 2 platforme, comenzi importate manual, lipsă rapoarte profit/produs.",
    built: ["Sync stoc între platforme", "Import comenzi → fulfillment", "Dashboard profit/produs", "Etichete AWB auto"],
    stats: [{ k: "94%", v: "comenzi automate" }, { k: "−6h", v: "muncă/zi" }, { k: "+22%", v: "marjă identificată" }],
    sparkles: ["sync 2 platforme", "AWB 1-click", "marja per produs"],
  },
  {
    id: "clinica",
    tag: "Clinică",
    title: "Clinică stomatologică · 6 cabinete",
    problem: "Programări pe hârtie, no-show 18%, raportare CASS manuală.",
    built: ["Programare online + reminder SMS", "Fișă pacient cu istoric", "Calendar partajat 6 cabinete", "Raport CASS lunar auto"],
    stats: [{ k: "5%", v: "no-show (era 18)" }, { k: "2x", v: "programări online" }, { k: "8h", v: "admin/lună salvate" }],
    sparkles: ["reminder SMS", "fișă digitală", "raport CASS auto"],
  },
  {
    id: "consultanta",
    tag: "Consultanță",
    title: "Firmă consultanță fiscală · 12 consultanți",
    problem: "Ore pontate în Excel, facturare la final de lună stresantă, clienții cer status.",
    built: ["Pontaj cu un click (timer)", "Facturare automată cu pontaj", "Portal client cu progres live", "Export ANAF e-Factura"],
    stats: [{ k: "−3 zile", v: "la facturare lunară" }, { k: "100%", v: "ore facturabile" }, { k: "e-Factura", v: "direct ANAF" }],
    sparkles: ["timer 1-click", "portal client", "e-Factura ANAF"],
  },
];

export function UseCasesSection() {
  const [active, setActive] = useState("service");
  const c = cases.find((x) => x.id === active) ?? cases[0];

  return (
    <section className="section" id="cazuri">
      <div className="container">
        <SectionHead
          num="10"
          eyebrow="exemple concrete"
          title="Cinci firme. Cinci hibe. Cinci sisteme."
          lead="Alege un domeniu — vezi exact ce am construit, ce a rezolvat, și cifrele din spate."
        />
        <div className="pp-uc">
          <div className="pp-uc-tabs">
            {cases.map((x) => (
              <button
                key={x.id}
                className={`pp-uc-tab ${active === x.id ? "active" : ""}`}
                onClick={() => setActive(x.id)}
              >
                <span className="pp-uc-tab-tag mono">{x.tag}</span>
                <span className="pp-uc-tab-arrow">→</span>
              </button>
            ))}
          </div>

          <div key={c.id} className="pp-uc-detail">
            <div className="pp-uc-detail-head">
              <span className="chip chip-accent mono" style={{ fontSize: 10 }}>{c.tag}</span>
              <h3 className="h-3" style={{ marginTop: 10 }}>{c.title}</h3>
              <p className="lead" style={{ marginTop: 10 }}>
                <span style={{ color: "var(--fg-3)" }}>Problemă:</span> {c.problem}
              </p>
            </div>

            <div className="pp-uc-built">
              <div className="eyebrow" style={{ marginBottom: 10 }}>ce am construit</div>
              <div className="pp-uc-built-list">
                {c.built.map((b, i) => (
                  <div key={i} className="pp-uc-built-i">
                    <span className="pp-uc-built-x mono">{String(i + 1).padStart(2, "0")}</span>
                    <span>{b}</span>
                    <span className="pp-uc-built-check">✓</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pp-uc-stats">
              {c.stats.map((s, i) => (
                <div key={i} className="pp-uc-stat">
                  <div className="mono pp-uc-stat-k">{s.k}</div>
                  <div className="pp-uc-stat-v">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="pp-uc-sparkles">
              {c.sparkles.map((s, i) => (
                <span key={i} className="chip mono" style={{ fontSize: 11 }}>
                  <span className="dot pulse-dot" /> {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

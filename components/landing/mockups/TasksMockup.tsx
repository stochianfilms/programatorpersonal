import type { CSSProperties } from "react";

export const TasksMockupView = () => {
  const cols = [
    { id: "todo", l: "De făcut", n: 5, k: "b" },
    { id: "wip", l: "În lucru", n: 3, k: "a" },
    { id: "rev", l: "Review", n: 2, k: "c" },
    { id: "done", l: "Predat", n: 8, k: "ok" },
  ];
  const cards: Record<string, { t: string; m: string; tag: string; alert?: string; progress?: number }[]> = {
    todo: [
      { t: "Diagnoză Renault Captur", m: "Maria · ITP expirat", tag: "service" },
      { t: "Comandă piese VW Golf", m: "Furnizor: AutoNet", tag: "aprovizionare", alert: "2 zile" },
      { t: "Răspuns ofertă #2412", m: "Cătălin O.", tag: "vânzări" },
    ],
    wip: [
      { t: "Reparație injectoare BMW X3", m: "Andrei M. · S-2418", tag: "service", progress: 65 },
      { t: "Schimb distribuție Octavia", m: "Mihai T. · S-2416", tag: "service", progress: 30 },
    ],
    rev: [{ t: "Factură proformă Audi Q5", m: "gata de trimis", tag: "admin" }],
    done: [
      { t: "Revizie Dacia Duster", m: "Diana S. · plată: card", tag: "service" },
      { t: "Geometrie BMW Seria 3", m: "încasat 320 RON", tag: "service" },
    ],
  };

  return (
    <>
      <div className="pp-mock-topbar">
        <div>
          <div className="eyebrow" style={{ marginBottom: 2 }}>proiecte · sprint 12 · 18 carduri</div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>Atelierul săptămânii.</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span className="chip mono" style={{ fontSize: 10 }}>Echipa · 4</span>
          <span className="chip chip-accent mono" style={{ fontSize: 10 }}>+ task nou</span>
        </div>
      </div>

      <div className="pp-kan">
        {cols.map((c, ci) => (
          <div key={c.id} className={`pp-kan-col reveal reveal-${ci + 1}`}>
            <div className="pp-kan-head">
              <span className={`pp-kan-pill k-${c.k}`}>{c.l}</span>
              <span className="mono pp-kan-n">{c.n}</span>
            </div>
            <div className="pp-kan-list">
              {(cards[c.id] || []).map((card, i) => (
                <div key={i} className="pp-kan-card reveal" style={{ "--rd": `${0.2 + ci * 0.1 + i * 0.08}s` } as CSSProperties}>
                  <div className="pp-kan-card-t">{card.t}</div>
                  <div className="pp-kan-card-m">{card.m}</div>
                  <div className="pp-kan-card-foot">
                    <span className="pp-kan-tag mono">{card.tag}</span>
                    {card.alert && <span className="mono pp-kan-alert">⏵ {card.alert}</span>}
                    {typeof card.progress === "number" && (
                      <span className="pp-kan-bar"><span style={{ width: `${card.progress}%` }} /></span>
                    )}
                  </div>
                </div>
              ))}
              <div className="pp-kan-add mono">+ adaugă</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

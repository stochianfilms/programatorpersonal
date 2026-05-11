import type { CSSProperties } from "react";

export const ServiceTicketMockupView = () => {
  const parts = [
    { code: "INJ-BMW-X3-3.0", name: "Injector reconditionat", qty: 4, price: 320, status: "rezervat" },
    { code: "KIT-GASKET-3.0", name: "Kit garnituri injectoare", qty: 1, price: 180, status: "în stoc" },
    { code: "OIL-5W30-LL04", name: "Ulei BMW LL-04 5W30", qty: 7, price: 38, status: "în stoc" },
    { code: "FILT-OIL-X3", name: "Filtru ulei", qty: 1, price: 65, status: "comandat" },
  ];
  const timeline = [
    { t: "08:32", l: "Mașină primită", k: "ok" },
    { t: "09:15", l: "Diagnoză completă", k: "ok" },
    { t: "10:02", l: "Ofertă trimisă clientului", k: "ok" },
    { t: "10:48", l: "Aprobat — semnătură SMS", k: "a" },
    { t: "—", l: "Reparație programată ", k: "next", extra: "mâine 09:00" },
    { t: "—", l: "Predare estimată", k: "pending", extra: "joi 17:00" },
  ];
  const sub = parts.reduce((s, p) => s + p.qty * p.price, 0);

  return (
    <>
      <div className="pp-mock-topbar">
        <div>
          <div className="eyebrow" style={{ marginBottom: 2 }}>fișa de service · deschisă acum 2h</div>
          <div style={{ fontSize: 18, fontWeight: 500, display: "flex", gap: 10, alignItems: "baseline" }}>
            <span>S-2418 · Andrei Munteanu</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--fg-3)" }}>BMW X3 · B-123-AND</span>
          </div>
        </div>
        <span className="chip chip-accent" style={{ fontSize: 10, padding: "4px 10px" }}>
          <span className="dot pulse-dot" /> în lucru
        </span>
      </div>

      <div className="pp-svc">
        <div className="pp-svc-main">
          <div className="pp-mock-card pp-svc-car reveal reveal-1">
            <div className="pp-mock-card-head">
              <span>Detalii vehicul</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>VIN · WBA…7E91</span>
            </div>
            <div className="pp-svc-spec">
              <div><span className="pp-svc-k">Model</span><span className="pp-svc-v">BMW X3 xDrive 30d</span></div>
              <div><span className="pp-svc-k">An</span><span className="pp-svc-v mono">2019</span></div>
              <div><span className="pp-svc-k">Km</span><span className="pp-svc-v mono">128.420</span></div>
              <div><span className="pp-svc-k">Problemă</span><span className="pp-svc-v">Pornește greu · fum la rece</span></div>
            </div>
          </div>

          <div className="pp-mock-card pp-svc-parts reveal reveal-2">
            <div className="pp-mock-card-head">
              <span>Piese & manoperă</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>4 articole + 6h manoperă</span>
            </div>
            <div className="pp-svc-tbl">
              <div className="pp-svc-row pp-svc-row-h mono">
                <span>Cod</span><span>Denumire</span>
                <span style={{ textAlign: "right" }}>Buc</span>
                <span style={{ textAlign: "right" }}>Preț</span>
                <span>Status</span>
              </div>
              {parts.map((p, i) => (
                <div key={i} className="pp-svc-row reveal" style={{ "--rd": `${0.15 + i * 0.06}s` } as CSSProperties}>
                  <span className="mono pp-svc-code">{p.code}</span>
                  <span>{p.name}</span>
                  <span className="mono" style={{ textAlign: "right" }}>{p.qty}</span>
                  <span className="mono" style={{ textAlign: "right" }}>{(p.qty * p.price).toLocaleString("ro-RO")}</span>
                  <span className={`pp-svc-status k-${p.status === "în stoc" ? "ok" : p.status === "rezervat" ? "a" : "b"}`}>
                    {p.status}
                  </span>
                </div>
              ))}
              <div className="pp-svc-row pp-svc-row-tot mono">
                <span /><span style={{ color: "var(--fg-3)" }}>subtotal piese</span><span />
                <span style={{ textAlign: "right", color: "var(--fg-1)" }}>{sub.toLocaleString("ro-RO")}</span><span />
              </div>
              <div className="pp-svc-row pp-svc-row-tot mono">
                <span /><span style={{ color: "var(--fg-3)" }}>manoperă 6h × 180</span><span />
                <span style={{ textAlign: "right", color: "var(--fg-1)" }}>1.080</span><span />
              </div>
              <div className="pp-svc-row pp-svc-row-tot pp-svc-row-grand mono">
                <span /><span>TOTAL cu TVA</span><span />
                <span style={{ textAlign: "right", color: "var(--accent)", fontSize: 14 }}>
                  {((sub + 1080) * 1.19).toLocaleString("ro-RO", { maximumFractionDigits: 0 })} RON
                </span><span />
              </div>
            </div>
          </div>
        </div>

        <div className="pp-svc-aside">
          <div className="pp-mock-card pp-svc-time reveal reveal-3">
            <div className="pp-mock-card-head">
              <span>Cronologie</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>auto-log</span>
            </div>
            <div className="pp-svc-tl">
              {timeline.map((t, i) => (
                <div key={i} className={`pp-svc-tl-i k-${t.k}`}>
                  <span className="pp-svc-tl-dot" />
                  <span className="mono pp-svc-tl-t">{t.t}</span>
                  <div>
                    <div className="pp-svc-tl-l">{t.l}</div>
                    {t.extra && <div className="pp-svc-tl-e mono">{t.extra}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pp-mock-card pp-svc-act reveal reveal-4">
            <div className="pp-mock-card-head">
              <span>Acțiuni rapide</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>1-click</span>
            </div>
            <div className="pp-svc-actions">
              <div className="pp-svc-btn pp-svc-btn-primary">Generează factură PDF</div>
              <div className="pp-svc-btn">Trimite SMS „mașina e gata&quot;</div>
              <div className="pp-svc-btn">Marchează predată</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

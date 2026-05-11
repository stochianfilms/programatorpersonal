const Spark = ({ accent = false }: { accent?: boolean }) => {
  const path = "M0 24 L8 22 L16 16 L24 18 L32 12 L40 14 L48 8 L56 10 L64 4 L72 6 L80 2";
  return (
    <svg viewBox="0 0 80 28" preserveAspectRatio="none" style={{ width: "100%", height: 28 }}>
      <path d={path} stroke={accent ? "var(--accent)" : "var(--fg-3)"} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path + " L80 28 L0 28 Z"} fill={accent ? "var(--accent-soft)" : "rgba(255,255,255,0.04)"} />
    </svg>
  );
};

const ProjectsBars = () => {
  const bars = [40, 60, 35, 70, 55, 80, 65];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 28 }}>
      {bars.map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h}%`, background: i === bars.length - 1 ? "var(--accent)" : "rgba(255,255,255,0.18)", borderRadius: 1.5 }} />
      ))}
    </div>
  );
};

const CalendarMini = () => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const events = [
    { day: 0, start: 30, len: 25, label: "Audi A4", kind: "a" },
    { day: 1, start: 10, len: 35, label: "BMW X3", kind: "b" },
    { day: 1, start: 60, len: 20, label: "VW Golf", kind: "a" },
    { day: 2, start: 25, len: 50, label: "Skoda Oct.", kind: "c" },
    { day: 3, start: 40, len: 18, label: "Dacia", kind: "a" },
    { day: 4, start: 15, len: 30, label: "Ford", kind: "b" },
    { day: 4, start: 70, len: 15, label: "+1", kind: "c" },
  ];
  return (
    <div className="pp-cal-grid">
      {days.map((d, i) => (
        <div key={i} className="pp-cal-col">
          <div className="pp-cal-head">
            <span style={{ color: "var(--fg-3)" }}>{d}</span>
            <span className="mono" style={{ fontSize: 10 }}>{19 + i}</span>
          </div>
          <div className="pp-cal-body">
            {events.filter((e) => e.day === i).map((e, ei) => (
              <div key={ei} className={`pp-cal-event k-${e.kind}`} style={{ top: `${e.start}%`, height: `${e.len}%` }}>
                {e.label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ContractsList = () => {
  const rows = [
    { id: "C-2418", name: "Andrei Munteanu", sub: "Diagnostic + revizie", status: "În lucru", kind: "a", amt: "480" },
    { id: "C-2417", name: "Maria Popa", sub: "Schimb plăcuțe + ulei", status: "Finalizat", kind: "ok", amt: "320" },
    { id: "C-2416", name: "Cristian Ene", sub: "Reparație injectoare", status: "Așteaptă piese", kind: "wait", amt: "1.240" },
    { id: "C-2415", name: "Diana Stoica", sub: "ITP + revizie", status: "Programat", kind: "sched", amt: "210" },
  ];
  return (
    <div className="pp-contract-list">
      {rows.map((r, i) => (
        <div key={i} className="pp-contract-row">
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
              {r.name}
              <span className="mono" style={{ fontSize: 10, color: "var(--fg-4)" }}>{r.id}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--fg-3)" }}>{r.sub}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className={`pp-status pp-status-${r.kind}`}>{r.status}</span>
            <span className="mono" style={{ fontSize: 12, color: "var(--fg-2)", minWidth: 56, textAlign: "right" }}>
              {r.amt} <span style={{ color: "var(--fg-4)" }}>RON</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const AutomationFlow = () => (
  <div className="pp-auto-flow">
    <div className="pp-auto-step">
      <div className="pp-auto-icon">⤓</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500 }}>Lead nou</div>
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>din formular site</div>
      </div>
    </div>
    <div className="pp-auto-line" />
    <div className="pp-auto-step">
      <div className="pp-auto-icon">≋</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500 }}>Salvat în CRM</div>
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>tag: ITP</div>
      </div>
    </div>
    <div className="pp-auto-line" />
    <div className="pp-auto-step">
      <div className="pp-auto-icon">✉</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500 }}>Email + SMS</div>
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>confirmare programare</div>
      </div>
    </div>
    <div className="pp-auto-line" />
    <div className="pp-auto-step pp-auto-step-active">
      <div className="pp-auto-icon">●</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)" }}>Reminder cu 24h</div>
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>rulează zilnic</div>
      </div>
    </div>
  </div>
);

export const DashboardMockupView = () => (
  <>
    <div className="pp-mock-topbar">
      <div>
        <div className="eyebrow" style={{ marginBottom: 2 }}>marți, 12 mai · luna curentă</div>
        <div style={{ fontSize: 18, fontWeight: 500 }}>Bună dimineața, Radu.</div>
      </div>
      <div className="pp-mock-search mono">
        <span style={{ color: "var(--fg-4)" }}>⌘K</span>
        <span style={{ color: "var(--fg-3)", flex: 1 }}>caută client, fișă, comandă…</span>
      </div>
    </div>
    <div className="pp-mock-grid">
      <div className="pp-mock-card pp-mock-kpi reveal reveal-1">
        <div className="pp-mock-card-head">
          <span>Lead-uri</span>
          <span className="chip chip-accent" style={{ fontSize: 10, padding: "2px 8px" }}>+18%</span>
        </div>
        <div className="mono pp-mock-bignum">47</div>
        <Spark accent />
      </div>
      <div className="pp-mock-card pp-mock-kpi reveal reveal-2">
        <div className="pp-mock-card-head">
          <span>Proiecte active</span>
          <span className="chip" style={{ fontSize: 10, padding: "2px 8px" }}>3 noi</span>
        </div>
        <div className="mono pp-mock-bignum">12</div>
        <ProjectsBars />
      </div>
      <div className="pp-mock-card pp-mock-kpi reveal reveal-3">
        <div className="pp-mock-card-head">
          <span>Venit luna</span>
          <span className="chip" style={{ fontSize: 10, padding: "2px 8px", color: "var(--accent)", borderColor: "var(--accent-line)" }}>↑ 24%</span>
        </div>
        <div className="mono pp-mock-bignum">38.4k <span style={{ fontSize: 13, color: "var(--fg-3)" }}>RON</span></div>
        <Spark />
      </div>
      <div className="pp-mock-card pp-mock-cal reveal reveal-4">
        <div className="pp-mock-card-head">
          <span>Calendar săptămâna</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>S 19 — S 25</span>
        </div>
        <CalendarMini />
      </div>
      <div className="pp-mock-card pp-mock-contracts reveal reveal-5">
        <div className="pp-mock-card-head">
          <span>Contracte recente</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>văzute toate →</span>
        </div>
        <ContractsList />
      </div>
      <div className="pp-mock-card pp-mock-auto reveal reveal-6">
        <div className="pp-mock-card-head">
          <span>Automatizări</span>
          <span className="chip chip-accent" style={{ fontSize: 10, padding: "2px 8px" }}>
            <span className="dot pulse-dot" /> active
          </span>
        </div>
        <AutomationFlow />
      </div>
    </div>
  </>
);

"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Arrow } from "./atoms/Icons";
import { DashboardMockupView } from "./mockups/DashboardMockup";
import { ServiceTicketMockupView } from "./mockups/ServiceTicketMockup";
import { TasksMockupView } from "./mockups/TasksMockup";
import { siteConfig } from "@/content/site";

type HeroView = "dashboard" | "service" | "tasks";
type HeroViewContextValue = { requestedView: HeroView; requestView: (v: HeroView) => void };

const HeroViewContext = createContext<HeroViewContextValue | null>(null);

function useHeroViewContext() {
  const value = useContext(HeroViewContext);
  if (!value) throw new Error("HeroViewContext must be inside HeroSection");
  return value;
}

const HERO_VIEWS: HeroView[] = ["dashboard", "service", "tasks"];

const HeroRotator = () => {
  const { requestedView } = useHeroViewContext();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_VIEWS.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const i = HERO_VIEWS.indexOf(requestedView);
    if (i >= 0) {
      const syncId = window.setTimeout(() => { setIdx(i); setPaused(true); }, 0);
      const resumeId = window.setTimeout(() => setPaused(false), 7000);
      return () => { window.clearTimeout(syncId); window.clearTimeout(resumeId); };
    }
    return undefined;
  }, [requestedView]);

  const Current = idx === 0 ? DashboardMockupView : idx === 1 ? ServiceTicketMockupView : TasksMockupView;

  return (
    <div className="pp-rot" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pp-rot-tabs mono">
        {HERO_VIEWS.map((v, i) => (
          <button key={v} className={`pp-rot-tab ${idx === i ? "active" : ""}`} onClick={() => setIdx(i)}>
            <span className="pp-rot-tab-dot" />
            {v === "dashboard" && "Overview"}
            {v === "service" && "Fișă service · S-2418"}
            {v === "tasks" && "Proiecte · sprint 12"}
          </button>
        ))}
        <span className="pp-rot-spacer" />
        <span className="pp-rot-progress">
          <span key={`bar-${idx}-${paused}`} className={`pp-rot-progress-bar ${paused ? "pp-rot-paused" : ""}`} />
        </span>
      </div>
      <div className="pp-rot-stage">
        <div key={idx} className="pp-rot-view">
          <Current />
        </div>
      </div>
    </div>
  );
};

const ActivityFeed = () => {
  const items = [
    { tag: "Lead", tagKind: "a", icon: "↓", title: "Lead nou — Andrei M.", sub: "din formularul de pe site · BMW X3" },
    { tag: "Ofertă", tagKind: "b", icon: "→", title: "Ofertă trimisă — #2418", sub: "email + PDF auto · valoare 1.240 RON" },
    { tag: "Contract", tagKind: "ok", icon: "✓", title: "Contract generat — C-2418", sub: "semnătură cerută · expiră în 48h" },
    { tag: "Proiect", tagKind: "a", icon: "◆", title: "Proiect rezervat — Service Auto B.", sub: "echipă alocată · start luni 09:00" },
  ];
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);
  const top = items[tick % items.length];
  const prev = items[(tick + items.length - 1) % items.length];

  return (
    <div className="pp-feed reveal reveal-7">
      <div className="pp-feed-head">
        <span className="mono" style={{ fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.04em", textTransform: "uppercase" }}>activitate live</span>
        <span className="chip chip-accent" style={{ fontSize: 10, padding: "2px 8px" }}>
          <span className="dot pulse-dot" /> stream
        </span>
      </div>
      <div className="pp-feed-list">
        <div className="pp-feed-item pp-feed-item-new" key={tick}>
          <span className={`pp-feed-tag pp-feed-tag-${top.tagKind}`}>{top.tag}</span>
          <div className="pp-feed-body">
            <div className="pp-feed-title"><span className="pp-feed-glyph">{top.icon}</span>{top.title}</div>
            <div className="pp-feed-sub">{top.sub}</div>
          </div>
          <span className="mono pp-feed-time">acum</span>
        </div>
        <div className="pp-feed-item pp-feed-item-prev">
          <span className={`pp-feed-tag pp-feed-tag-${prev.tagKind}`}>{prev.tag}</span>
          <div className="pp-feed-body">
            <div className="pp-feed-title"><span className="pp-feed-glyph">{prev.icon}</span>{prev.title}</div>
            <div className="pp-feed-sub">{prev.sub}</div>
          </div>
          <span className="mono pp-feed-time">12s</span>
        </div>
      </div>
      <div className="pp-feed-progress">
        <div className="pp-feed-progress-bar" key={`p-${tick}`} />
      </div>
    </div>
  );
};

function colorizeLine(line: string) {
  const parts: { t: string; v: string }[] = [];
  const regex = /(\/\/.*$)|('[^']*'|"[^"]*")|(\b(?:const|let|var|await|async|function|return|if|else|new|true|false|null)\b)|(\b[A-Za-z_$][\w$]*)(?=\()|([{}\[\]:,;=()])/g;
  let last = 0;
  let m;
  while ((m = regex.exec(line)) !== null) {
    if (m.index > last) parts.push({ t: "plain", v: line.slice(last, m.index) });
    if (m[1]) parts.push({ t: "cmt", v: m[1] });
    else if (m[2]) parts.push({ t: "str", v: m[2] });
    else if (m[3]) parts.push({ t: "kw", v: m[3] });
    else if (m[4]) parts.push({ t: "fn", v: m[4] });
    else if (m[5]) parts.push({ t: "pun", v: m[5] });
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push({ t: "plain", v: line.slice(last) });
  return parts.map((p, i) => <span key={i} className={`tk-${p.t}`}>{p.v}</span>);
}

const CodeSnippet = () => {
  const program = [
    "const lead = await crm.leads.create({",
    "  name: 'Andrei Munteanu',",
    "  source: 'site',",
    "  tags: ['ITP', 'BMW X3'],",
    "})",
    "",
    "await automatii.run('confirm-programare', {",
    "  lead,",
    "  trimite: ['email', 'sms'],",
    "})",
  ];
  const full = program.join("\n");
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setCursor(full.length), 0);
      return () => window.clearTimeout(id);
    }
    let pos = 0;
    let pause = 0;
    const id = setInterval(() => {
      if (pause > 0) { pause--; return; }
      pos++;
      if (pos > full.length) { pause = 18; pos = 0; }
      setCursor(pos);
    }, 38);
    return () => clearInterval(id);
  }, [full]);

  const lines = full.slice(0, cursor).split("\n");
  return (
    <div className="pp-snippet reveal reveal-8">
      <div className="pp-snippet-head">
        <span className="pp-snippet-dot" style={{ background: "#FF5F57" }} />
        <span className="pp-snippet-dot" style={{ background: "#FEBC2E" }} />
        <span className="pp-snippet-dot" style={{ background: "#28C840" }} />
        <span className="mono pp-snippet-name">flow.lead-nou.ts</span>
      </div>
      <pre className="pp-snippet-code mono">
        {lines.map((ln, i) => (
          <div key={i} className="pp-snippet-line">
            <span className="pp-snippet-ln">{String(i + 1).padStart(2, " ")}</span>
            <span>
              {colorizeLine(ln)}
              {i === lines.length - 1 && <span className="pp-snippet-cursor blink">█</span>}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
};

const HeroAppFrame = () => {
  const { requestView } = useHeroViewContext();
  const [tab, setTab] = useState("overview");

  return (
    <div className="pp-mock">
      <div className="pp-mock-bezel">
        <div className="pp-mock-chrome">
          <div className="pp-mock-dots">
            <span style={{ background: "#FF5F57" }} />
            <span style={{ background: "#FEBC2E" }} />
            <span style={{ background: "#28C840" }} />
          </div>
          <div className="pp-mock-url mono">
            <span style={{ color: "var(--fg-3)" }}>app.</span>
            <span style={{ color: "var(--fg-1)" }}>service-bucuresti</span>
            <span style={{ color: "var(--fg-3)" }}>.ro</span>
          </div>
          <div style={{ width: 60 }} />
        </div>
        <div className="pp-mock-app">
          <aside className="pp-mock-side">
            <div className="pp-mock-side-brand">
              <div className="pp-mock-side-mark">SB</div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>workspace</div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>Service Auto B.</div>
              </div>
            </div>
            <div className="pp-mock-nav">
              {(
                [
                  ["Overview", "overview", "dashboard", true],
                  ["Lead-uri", "leaduri", "tasks", false],
                  ["Proiecte", "proiecte", "tasks", false],
                  ["Contracte", "contracte", "service", false],
                  ["Calendar", "calendar", "dashboard", false],
                  ["Rapoarte", "rapoarte", "dashboard", false],
                  ["Automatizări", "automatizari", "dashboard", false],
                ] as Array<[string, string, HeroView, boolean]>
              ).map(([label, id, view, badge]) => (
                <button
                  key={id}
                  className={`pp-mock-nav-i ${tab === id ? "active" : ""}`}
                  onClick={() => { setTab(id); requestView(view); }}
                >
                  <span className="dotmark" />
                  <span>{label}</span>
                  {badge && <span className="mini-badge">3</span>}
                </button>
              ))}
            </div>
            <div className="pp-mock-side-foot">
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div className="pp-mock-avatar">RP</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Radu Popescu</div>
                  <div style={{ fontSize: 11, color: "var(--fg-3)" }}>Owner</div>
                </div>
              </div>
            </div>
          </aside>
          <main className="pp-mock-main">
            <HeroRotator />
          </main>
        </div>
      </div>
      <ActivityFeed />
      <CodeSnippet />
    </div>
  );
};

export function HeroSection() {
  const [requestedView, setRequestedView] = useState<HeroView>("dashboard");

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", "lime");
  }, []);

  const heroContextValue = useMemo<HeroViewContextValue>(
    () => ({ requestedView, requestView: setRequestedView }),
    [requestedView],
  );

  return (
    <HeroViewContext.Provider value={heroContextValue}>
      <section className="pp-hero" id="top">
        <div className="bg-grid pp-hero-bg-grid" />
        <div className="container">
          <div className="pp-hero-top reveal reveal-1">
            <span className="chip">
              <span className="dot pulse-dot" /> disponibil pentru proiecte noi
            </span>
            <span className="eyebrow pp-hero-loc">București / remote · România</span>
          </div>
          <h1 className="h-display pp-hero-title reveal reveal-2">
            Programatorul firmei tale,
            <br />
            <span className="serif" style={{ color: "var(--fg-2)" }}>fără să-l angajezi</span>
            <span style={{ color: "var(--accent)" }}> full-time.</span>
          </h1>
          <p className="lead pp-hero-sub reveal reveal-3">
            Construim aplicații web, CRM-uri, automatizări și platforme interne pentru firme care vor să lucreze mai clar, mai rapid și mai organizat. Tu spui problema, eu propun soluția.
          </p>
          <div className="pp-hero-ctas reveal reveal-4">
            <a href={siteConfig.ctas.diagnostic.href} className="btn btn-primary">
              {siteConfig.ctas.diagnostic.label} <Arrow />
            </a>
            <a href="#use-cases" className="btn btn-secondary">
              Vezi ce putem automatiza
            </a>
          </div>
          <div className="pp-hero-meta reveal reveal-5">
            <div><span className="mono pp-meta-num">12+</span><span>ani experiență</span></div>
            <div><span className="mono pp-meta-num">40+</span><span>proiecte livrate</span></div>
            <div><span className="mono pp-meta-num">2 săpt.</span><span>până la primul livrabil</span></div>
            <div><span className="mono pp-meta-num">RO</span><span>contract local, factură RO</span></div>
          </div>
          <div className="reveal reveal-6">
            <HeroAppFrame />
          </div>
        </div>
      </section>
    </HeroViewContext.Provider>
  );
}

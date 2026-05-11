"use client";

// Migrated from /Users/bogdanstochian/Downloads/programatorpersonal.zip inline React+Babel landing page.
// Original source files are noted above each component group.

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";

type HeroView = "dashboard" | "service" | "tasks";

type HeroViewContextValue = {
  requestedView: HeroView;
  requestView: (view: HeroView) => void;
};

const HeroViewContext = createContext<HeroViewContextValue | null>(null);

function useHeroViewContext() {
  const value = useContext(HeroViewContext);
  if (!value)
    throw new Error("HeroViewContext must be used inside LandingPage");
  return value;
}

type IconProps = { size?: number; accent?: boolean };
type SectionHeadProps = {
  num?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
};
type GlyphProps = { name: string; size?: number };
type FAQItemProps = {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
  idx: number;
};
type MiniWindowProps = {
  title: string;
  tag?: string;
  children: ReactNode;
  footer?: ReactNode;
};

const HERO_VIEWS: HeroView[] = ["dashboard", "service", "tasks"];

/* Original source: components/atoms.jsx */
/* Reusable atoms — Logo, Arrow, Section chrome */

const Logo = ({ size = 20 }: IconProps) => (
  <a
    href="#top"
    className="pp-logo"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontWeight: 500,
      color: "var(--fg-1)",
    }}
  >
    <span
      style={{
        width: size + 6,
        height: size + 6,
        borderRadius: 6,
        background: "var(--accent)",
        color: "var(--accent-fg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        fontSize: size - 6,
        letterSpacing: "-0.04em",
      }}
    >
      {"{·}"}
    </span>
    <span>
      Programator <span style={{ color: "var(--fg-3)" }}>Personal</span>
    </span>
  </a>
);

const Arrow = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M3 11L11 3M11 3H5M11 3V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M2 7H12M12 7L8 3M12 7L8 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Plus = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M7 2V12M2 7H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Check = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M2.5 7.5L5.5 10.5L11.5 3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SectionHead = ({
  num,
  eyebrow,
  title,
  lead,
  children,
  align = "left",
}: SectionHeadProps) => (
  <div
    className="section-head"
    style={
      align === "center"
        ? { margin: "0 auto 64px", textAlign: "center", alignItems: "center" }
        : {}
    }
  >
    <div className="eyebrow-row">
      {num && <span className="num">{num}</span>}
      <span className="eyebrow">{eyebrow}</span>
      <span className="line" />
    </div>
    <h2 className="h-1" style={{ textWrap: "balance" }}>
      {title}
    </h2>
    {lead && (
      <p className="lead" style={{ margin: 0, maxWidth: 720 }}>
        {lead}
      </p>
    )}
    {children}
  </div>
);

/* Icon glyphs — tiny abstract marks, NOT illustrations */
const Glyph = ({ name, size = 22 }: GlyphProps) => {
  const s = size;
  const stroke = "currentColor";
  const sw = 1.5;
  const common = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  switch (name) {
    case "app":
      return (
        <svg {...common}>
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="3"
            stroke={stroke}
            strokeWidth={sw}
          />
          <path d="M3.5 9H20.5" stroke={stroke} strokeWidth={sw} />
          <circle cx="6.5" cy="6.25" r="0.6" fill={stroke} />
        </svg>
      );
    case "crm":
      return (
        <svg {...common}>
          <rect
            x="3.5"
            y="5.5"
            width="17"
            height="13"
            rx="2"
            stroke={stroke}
            strokeWidth={sw}
          />
          <path
            d="M7 10H13M7 13H17M7 16H11"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "auto":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.2" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="6" r="2.2" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="18" r="2.2" stroke={stroke} strokeWidth={sw} />
          <path d="M8 11L16 7M8 13L16 17" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "dash":
      return (
        <svg {...common}>
          <rect
            x="3.5"
            y="3.5"
            width="8"
            height="8"
            rx="1.5"
            stroke={stroke}
            strokeWidth={sw}
          />
          <rect
            x="12.5"
            y="3.5"
            width="8"
            height="4"
            rx="1.5"
            stroke={stroke}
            strokeWidth={sw}
          />
          <rect
            x="12.5"
            y="8.5"
            width="8"
            height="4"
            rx="1.5"
            stroke={stroke}
            strokeWidth={sw}
          />
          <rect
            x="3.5"
            y="12.5"
            width="17"
            height="8"
            rx="1.5"
            stroke={stroke}
            strokeWidth={sw}
          />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke={stroke} strokeWidth={sw} />
          <path
            d="M3.5 12H20.5M12 3.5C14.5 6 15.5 9 15.5 12C15.5 15 14.5 18 12 20.5C9.5 18 8.5 15 8.5 12C8.5 9 9.5 6 12 3.5Z"
            stroke={stroke}
            strokeWidth={sw}
          />
        </svg>
      );
    case "shop":
      return (
        <svg {...common}>
          <path
            d="M5 7H19L17.5 18.5C17.4 19.4 16.6 20 15.7 20H8.3C7.4 20 6.6 19.4 6.5 18.5L5 7Z"
            stroke={stroke}
            strokeWidth={sw}
          />
          <path
            d="M9 7V5C9 3.6 10.3 2.5 12 2.5C13.7 2.5 15 3.6 15 5V7"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path
            d="M8 6L3.5 10.5L8 15M16 9L20.5 13.5L16 18M14 4L10 20"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 2.5L20 5.5V12C20 16.5 16.5 19.5 12 21.5C7.5 19.5 4 16.5 4 12V5.5L12 2.5Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    /* For-who */
    case "wrench":
      return (
        <svg {...common}>
          <path
            d="M14.5 4.5C16.5 4.5 18 6 18 8C18 8.7 17.8 9.4 17.5 10L20 12.5L18.5 14L16 11.5C15.4 11.8 14.7 12 14 12C12 12 10.5 10.5 10.5 8.5L4 15L4 17L6 17L12.5 10.5C12.5 12.5 14 14 16 14"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path
            d="M3 12H7L9.5 6L13.5 18L16.5 12H21"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "fork":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="6" r="2" stroke={stroke} strokeWidth={sw} />
          <circle cx="12" cy="18" r="2" stroke={stroke} strokeWidth={sw} />
          <path
            d="M6 8V12C6 13.1 6.9 14 8 14H16C17.1 14 18 13.1 18 12V8M12 14V16"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="7"
            width="16"
            height="13"
            rx="2"
            stroke={stroke}
            strokeWidth={sw}
          />
          <path
            d="M8 7V5C8 3.3 9.8 2.5 12 2.5C14.2 2.5 16 3.3 16 5V7"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" stroke={stroke} strokeWidth={sw} />
          <circle cx="17" cy="10" r="2.2" stroke={stroke} strokeWidth={sw} />
          <path
            d="M3 19C3 16 5.5 14 9 14C12.5 14 15 16 15 19M15 19V20M15.5 14.5C18 14.5 21 16 21 19V20"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...common}>
          <path
            d="M9 17H15M10 20H14M8 13C7 12 6 10.5 6 9C6 5.7 8.7 3 12 3C15.3 3 18 5.7 18 9C18 10.5 17 12 16 13C15 14 14.5 15 14.5 16H9.5C9.5 15 9 14 8 13Z"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

/* Original source: components/hero-views.jsx */
/* Hero rotating views: Dashboard → Fișă service → Tasks board */

/* Original source: components/hero-views.jsx */
const HeroRotator = () => {
  const { requestedView } = useHeroViewContext();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % HERO_VIEWS.length),
      7000,
    );
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const i = HERO_VIEWS.indexOf(requestedView);
    if (i >= 0) {
      const syncId = window.setTimeout(() => {
        setIdx(i);
        setPaused(true);
      }, 0);
      const resumeId = window.setTimeout(() => setPaused(false), 7000);
      return () => {
        window.clearTimeout(syncId);
        window.clearTimeout(resumeId);
      };
    }
    return undefined;
  }, [requestedView]);

  const Current =
    idx === 0 ? DashboardView : idx === 1 ? ServiceTicketView : TasksView;

  return (
    <div
      className="pp-rot"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pp-rot-tabs mono">
        {HERO_VIEWS.map((v, i) => (
          <button
            key={v}
            className={`pp-rot-tab ${idx === i ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            <span className="pp-rot-tab-dot" />
            {v === "dashboard" && "Overview"}
            {v === "service" && "Fișă service · S-2418"}
            {v === "tasks" && "Proiecte · sprint 12"}
          </button>
        ))}
        <span className="pp-rot-spacer" />
        <span className="pp-rot-progress">
          <span
            key={`bar-${idx}-${paused}`}
            className={`pp-rot-progress-bar ${paused ? "pp-rot-paused" : ""}`}
          />
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

/* ----------------- VIEW 1: DASHBOARD (current content) ----------------- */
const DashboardView = () => (
  <>
    <div className="pp-mock-topbar">
      <div>
        <div className="eyebrow" style={{ marginBottom: 2 }}>
          marți, 12 mai · luna curentă
        </div>
        <div style={{ fontSize: 18, fontWeight: 500 }}>
          Bună dimineața, Radu.
        </div>
      </div>
      <div className="pp-mock-search mono">
        <span style={{ color: "var(--fg-4)" }}>⌘K</span>
        <span style={{ color: "var(--fg-3)", flex: 1 }}>
          caută client, fișă, comandă…
        </span>
      </div>
    </div>
    <div className="pp-mock-grid">
      <div className="pp-mock-card pp-mock-kpi reveal reveal-1">
        <div className="pp-mock-card-head">
          <span>Lead-uri</span>
          <span
            className="chip chip-accent"
            style={{ fontSize: 10, padding: "2px 8px" }}
          >
            +18%
          </span>
        </div>
        <div className="mono pp-mock-bignum">47</div>
        <Spark accent />
      </div>
      <div className="pp-mock-card pp-mock-kpi reveal reveal-2">
        <div className="pp-mock-card-head">
          <span>Proiecte active</span>
          <span className="chip" style={{ fontSize: 10, padding: "2px 8px" }}>
            3 noi
          </span>
        </div>
        <div className="mono pp-mock-bignum">12</div>
        <ProjectsBars />
      </div>
      <div className="pp-mock-card pp-mock-kpi reveal reveal-3">
        <div className="pp-mock-card-head">
          <span>Venit luna</span>
          <span
            className="chip"
            style={{
              fontSize: 10,
              padding: "2px 8px",
              color: "var(--accent)",
              borderColor: "var(--accent-line)",
            }}
          >
            ↑ 24%
          </span>
        </div>
        <div className="mono pp-mock-bignum">
          38.4k <span style={{ fontSize: 13, color: "var(--fg-3)" }}>RON</span>
        </div>
        <Spark />
      </div>
      <div className="pp-mock-card pp-mock-cal reveal reveal-4">
        <div className="pp-mock-card-head">
          <span>Calendar săptămâna</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>
            S 19 — S 25
          </span>
        </div>
        <CalendarMini />
      </div>
      <div className="pp-mock-card pp-mock-contracts reveal reveal-5">
        <div className="pp-mock-card-head">
          <span>Contracte recente</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>
            văzute toate →
          </span>
        </div>
        <ContractsList />
      </div>
      <div className="pp-mock-card pp-mock-auto reveal reveal-6">
        <div className="pp-mock-card-head">
          <span>Automatizări</span>
          <span
            className="chip chip-accent"
            style={{ fontSize: 10, padding: "2px 8px" }}
          >
            <span className="dot pulse-dot" /> active
          </span>
        </div>
        <AutomationFlow />
      </div>
    </div>
  </>
);

/* ----------------- VIEW 2: FIȘĂ SERVICE — detalii ----------------- */
const ServiceTicketView = () => {
  const parts = [
    {
      code: "INJ-BMW-X3-3.0",
      name: "Injector reconditionat",
      qty: 4,
      price: 320,
      status: "rezervat",
    },
    {
      code: "KIT-GASKET-3.0",
      name: "Kit garnituri injectoare",
      qty: 1,
      price: 180,
      status: "în stoc",
    },
    {
      code: "OIL-5W30-LL04",
      name: "Ulei BMW LL-04 5W30",
      qty: 7,
      price: 38,
      status: "în stoc",
    },
    {
      code: "FILT-OIL-X3",
      name: "Filtru ulei",
      qty: 1,
      price: 65,
      status: "comandat",
    },
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
          <div className="eyebrow" style={{ marginBottom: 2 }}>
            fișa de service · deschisă acum 2h
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              display: "flex",
              gap: 10,
              alignItems: "baseline",
            }}
          >
            <span>S-2418 · Andrei Munteanu</span>
            <span
              className="mono"
              style={{ fontSize: 12, color: "var(--fg-3)" }}
            >
              BMW X3 · B-123-AND
            </span>
          </div>
        </div>
        <span
          className="chip chip-accent"
          style={{ fontSize: 10, padding: "4px 10px" }}
        >
          <span className="dot pulse-dot" /> în lucru
        </span>
      </div>

      <div className="pp-svc">
        {/* Left: car details + parts */}
        <div className="pp-svc-main">
          <div className="pp-mock-card pp-svc-car reveal reveal-1">
            <div className="pp-mock-card-head">
              <span>Detalii vehicul</span>
              <span
                className="mono"
                style={{ fontSize: 11, color: "var(--fg-3)" }}
              >
                VIN · WBA…7E91
              </span>
            </div>
            <div className="pp-svc-spec">
              <div>
                <span className="pp-svc-k">Model</span>
                <span className="pp-svc-v">BMW X3 xDrive 30d</span>
              </div>
              <div>
                <span className="pp-svc-k">An</span>
                <span className="pp-svc-v mono">2019</span>
              </div>
              <div>
                <span className="pp-svc-k">Km</span>
                <span className="pp-svc-v mono">128.420</span>
              </div>
              <div>
                <span className="pp-svc-k">Problemă</span>
                <span className="pp-svc-v">Pornește greu · fum la rece</span>
              </div>
            </div>
          </div>

          <div className="pp-mock-card pp-svc-parts reveal reveal-2">
            <div className="pp-mock-card-head">
              <span>Piese & manoperă</span>
              <span
                className="mono"
                style={{ fontSize: 11, color: "var(--fg-3)" }}
              >
                4 articole + 6h manoperă
              </span>
            </div>
            <div className="pp-svc-tbl">
              <div className="pp-svc-row pp-svc-row-h mono">
                <span>Cod</span>
                <span>Denumire</span>
                <span style={{ textAlign: "right" }}>Buc</span>
                <span style={{ textAlign: "right" }}>Preț</span>
                <span>Status</span>
              </div>
              {parts.map((p, i) => (
                <div
                  key={i}
                  className="pp-svc-row reveal"
                  style={{ "--rd": `${0.15 + i * 0.06}s` } as CSSProperties}
                >
                  <span className="mono pp-svc-code">{p.code}</span>
                  <span>{p.name}</span>
                  <span className="mono" style={{ textAlign: "right" }}>
                    {p.qty}
                  </span>
                  <span className="mono" style={{ textAlign: "right" }}>
                    {(p.qty * p.price).toLocaleString("ro-RO")}
                  </span>
                  <span
                    className={`pp-svc-status k-${p.status === "în stoc" ? "ok" : p.status === "rezervat" ? "a" : "b"}`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
              <div className="pp-svc-row pp-svc-row-tot mono">
                <span></span>
                <span style={{ color: "var(--fg-3)" }}>subtotal piese</span>
                <span></span>
                <span style={{ textAlign: "right", color: "var(--fg-1)" }}>
                  {sub.toLocaleString("ro-RO")}
                </span>
                <span></span>
              </div>
              <div className="pp-svc-row pp-svc-row-tot mono">
                <span></span>
                <span style={{ color: "var(--fg-3)" }}>manoperă 6h × 180</span>
                <span></span>
                <span style={{ textAlign: "right", color: "var(--fg-1)" }}>
                  1.080
                </span>
                <span></span>
              </div>
              <div className="pp-svc-row pp-svc-row-tot pp-svc-row-grand mono">
                <span></span>
                <span>TOTAL cu TVA</span>
                <span></span>
                <span
                  style={{
                    textAlign: "right",
                    color: "var(--accent)",
                    fontSize: 14,
                  }}
                >
                  {((sub + 1080) * 1.19).toLocaleString("ro-RO", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  RON
                </span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: timeline + actions */}
        <div className="pp-svc-aside">
          <div className="pp-mock-card pp-svc-time reveal reveal-3">
            <div className="pp-mock-card-head">
              <span>Cronologie</span>
              <span
                className="mono"
                style={{ fontSize: 11, color: "var(--fg-3)" }}
              >
                auto-log
              </span>
            </div>
            <div className="pp-svc-tl">
              {timeline.map((t, i) => (
                <div key={i} className={`pp-svc-tl-i k-${t.k}`}>
                  <span className="pp-svc-tl-dot" />
                  <span className="mono pp-svc-tl-t">{t.t}</span>
                  <div>
                    <div className="pp-svc-tl-l">{t.l}</div>
                    {t.extra && (
                      <div className="pp-svc-tl-e mono">{t.extra}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pp-mock-card pp-svc-act reveal reveal-4">
            <div className="pp-mock-card-head">
              <span>Acțiuni rapide</span>
              <span
                className="mono"
                style={{ fontSize: 11, color: "var(--fg-3)" }}
              >
                1-click
              </span>
            </div>
            <div className="pp-svc-actions">
              <div className="pp-svc-btn pp-svc-btn-primary">
                Generează factură PDF
              </div>
              <div className="pp-svc-btn">Trimite SMS „mașina e gata&quot;</div>
              <div className="pp-svc-btn">Marchează predată</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ----------------- VIEW 3: TASKS / KANBAN ----------------- */
const TasksView = () => {
  const cols = [
    { id: "todo", l: "De făcut", n: 5, k: "b" },
    { id: "wip", l: "În lucru", n: 3, k: "a" },
    { id: "rev", l: "Review", n: 2, k: "c" },
    { id: "done", l: "Predat", n: 8, k: "ok" },
  ];
  const cards = {
    todo: [
      {
        t: "Diagnoză Renault Captur",
        m: "Maria · ITP expirat",
        tag: "service",
      },
      {
        t: "Comandă piese VW Golf",
        m: "Furnizor: AutoNet",
        tag: "aprovizionare",
        alert: "2 zile",
      },
      { t: "Răspuns ofertă #2412", m: "Cătălin O.", tag: "vânzări" },
    ],
    wip: [
      {
        t: "Reparație injectoare BMW X3",
        m: "Andrei M. · S-2418",
        tag: "service",
        progress: 65,
      },
      {
        t: "Schimb distribuție Octavia",
        m: "Mihai T. · S-2416",
        tag: "service",
        progress: 30,
      },
    ],
    rev: [{ t: "Factură proformă Audi Q5", m: "gata de trimis", tag: "admin" }],
    done: [
      {
        t: "Revizie Dacia Duster",
        m: "Diana S. · plată: card",
        tag: "service",
      },
      { t: "Geometrie BMW Seria 3", m: "încasat 320 RON", tag: "service" },
    ],
  };

  return (
    <>
      <div className="pp-mock-topbar">
        <div>
          <div className="eyebrow" style={{ marginBottom: 2 }}>
            proiecte · sprint 12 · 18 carduri
          </div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>
            Atelierul săptămânii.
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span className="chip mono" style={{ fontSize: 10 }}>
            Echipa · 4
          </span>
          <span className="chip chip-accent mono" style={{ fontSize: 10 }}>
            + task nou
          </span>
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
              {(cards[c.id as keyof typeof cards] || []).map((card, i) => (
                <div
                  key={i}
                  className="pp-kan-card reveal"
                  style={
                    { "--rd": `${0.2 + ci * 0.1 + i * 0.08}s` } as CSSProperties
                  }
                >
                  <div className="pp-kan-card-t">{card.t}</div>
                  <div className="pp-kan-card-m">{card.m}</div>
                  <div className="pp-kan-card-foot">
                    <span className={`pp-kan-tag mono`}>{card.tag}</span>
                    {"alert" in card && card.alert && (
                      <span className="mono pp-kan-alert">⏵ {card.alert}</span>
                    )}
                    {"progress" in card &&
                      typeof card.progress === "number" && (
                        <span className="pp-kan-bar">
                          <span style={{ width: `${card.progress}%` }} />
                        </span>
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

/* ---------- styles for new views ---------- */

/* Original source: components/header-hero.jsx */
/* Header + Hero */

/* Original source: components/header-hero.jsx */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Servicii", "/servicii"],
    ["Automatizări", "/automatizari-business"],
    ["CRM", "/crm-custom"],
    ["Portofoliu", "/portofoliu"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="pp-header" data-scrolled={scrolled}>
      <div className="pp-header-inner container">
        <Logo size={18} />
        <nav className="pp-nav">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="pp-nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="pp-header-cta">
          <a href="#contact" className="btn btn-ghost btn-sm pp-only-desktop">
            Cere o estimare <Arrow />
          </a>
          <a
            href="#contact"
            className="btn btn-primary btn-sm pp-only-mobile-cta"
          >
            Estimare <Arrow />
          </a>
          <button
            className="pp-burger pp-only-mobile"
            aria-label="Meniu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              style={{
                transform: mobileOpen
                  ? "translateY(3px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              style={{
                transform: mobileOpen
                  ? "translateY(-3px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="pp-mobile-menu">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="pp-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {label} <Arrow />
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            Cere o estimare <Arrow />
          </a>
        </div>
      )}
    </header>
  );
};

/* ============================================================
   HERO
   ============================================================ */
/* Original source: components/header-hero.jsx */
const Hero = () => (
  <section className="pp-hero" id="top">
    <div className="bg-grid pp-hero-bg-grid" />
    <div className="container">
      <div className="pp-hero-top reveal reveal-1">
        <span className="chip">
          <span className="dot pulse-dot" /> disponibil pentru proiecte noi
        </span>
        <span className="eyebrow pp-hero-loc">
          București / remote · România
        </span>
      </div>
      <h1 className="h-display pp-hero-title reveal reveal-2">
        Programatorul firmei tale,
        <br />
        <span className="serif" style={{ color: "var(--fg-2)" }}>
          fără să-l angajezi
        </span>
        <span style={{ color: "var(--accent)" }}> full-time.</span>
      </h1>
      <p className="lead pp-hero-sub reveal reveal-3">
        Construim aplicații web, CRM-uri, automatizări și platforme interne
        pentru firme care vor să lucreze mai clar, mai rapid și mai organizat.
        Tu spui problema, eu propun soluția.
      </p>
      <div className="pp-hero-ctas reveal reveal-4">
        <a href="#contact" className="btn btn-primary">
          Spune-mi ce vrei să construim <Arrow />
        </a>
        <a href="#use-cases" className="btn btn-secondary">
          Vezi ce putem automatiza
        </a>
      </div>

      <div className="pp-hero-meta reveal reveal-5">
        <div>
          <span className="mono pp-meta-num">12+</span>
          <span>ani experiență</span>
        </div>
        <div>
          <span className="mono pp-meta-num">40+</span>
          <span>proiecte livrate</span>
        </div>
        <div>
          <span className="mono pp-meta-num">2 săpt.</span>
          <span>până la primul livrabil</span>
        </div>
        <div>
          <span className="mono pp-meta-num">RO</span>
          <span>contract local, factură RO</span>
        </div>
      </div>

      <div className="reveal reveal-6">
        <DashboardMockup />
      </div>
    </div>
  </section>
);

/* ============================================================
   DASHBOARD MOCKUP — bespoke. No stock UI.
   ============================================================ */
/* Original source: components/header-hero.jsx */
const DashboardMockup = () => {
  const { requestView } = useHeroViewContext();
  const [tab, setTab] = useState("overview");

  return (
    <div className="pp-mock">
      <div className="pp-mock-bezel">
        {/* macOS-style window chrome */}
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

        {/* Inner app */}
        <div className="pp-mock-app">
          {/* Sidebar */}
          <aside className="pp-mock-side">
            <div className="pp-mock-side-brand">
              <div className="pp-mock-side-mark">SB</div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--fg-3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  workspace
                </div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>
                  Service Auto B.
                </div>
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
                ] satisfies Array<[string, string, HeroView, boolean]>
              ).map(([label, id, view, badge]) => (
                <button
                  key={id}
                  className={`pp-mock-nav-i ${tab === id ? "active" : ""}`}
                  onClick={() => {
                    setTab(id);
                    requestView(view as HeroView);
                  }}
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
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Radu Popescu
                  </div>
                  <div style={{ fontSize: 11, color: "var(--fg-3)" }}>
                    Owner
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main — rotates between Dashboard / Service ticket / Tasks */}
          <main className="pp-mock-main">
            <HeroRotator />
          </main>
        </div>
      </div>

      {/* Floating activity feed */}
      <ActivityFeed />

      {/* Typing code snippet */}
      <CodeSnippet />
    </div>
  );
};

/* Activity feed — cycles through Lead/Ofertă/Contract/Proiect */
const ActivityFeed = () => {
  const items = [
    {
      tag: "Lead",
      tagKind: "a",
      icon: "↓",
      title: "Lead nou — Andrei M.",
      sub: "din formularul de pe site · BMW X3",
    },
    {
      tag: "Ofertă",
      tagKind: "b",
      icon: "→",
      title: "Ofertă trimisă — #2418",
      sub: "email + PDF auto · valoare 1.240 RON",
    },
    {
      tag: "Contract",
      tagKind: "ok",
      icon: "✓",
      title: "Contract generat — C-2418",
      sub: "semnătură cerută · expiră în 48h",
    },
    {
      tag: "Proiect",
      tagKind: "a",
      icon: "◆",
      title: "Proiect rezervat — Service Auto B.",
      sub: "echipă alocată · start luni 09:00",
    },
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
        <span
          className="mono"
          style={{
            fontSize: 10,
            color: "var(--fg-3)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          activitate live
        </span>
        <span
          className="chip chip-accent"
          style={{ fontSize: 10, padding: "2px 8px" }}
        >
          <span className="dot pulse-dot" /> stream
        </span>
      </div>
      <div className="pp-feed-list">
        <div className="pp-feed-item pp-feed-item-new" key={tick}>
          <span className={`pp-feed-tag pp-feed-tag-${top.tagKind}`}>
            {top.tag}
          </span>
          <div className="pp-feed-body">
            <div className="pp-feed-title">
              <span className="pp-feed-glyph">{top.icon}</span>
              {top.title}
            </div>
            <div className="pp-feed-sub">{top.sub}</div>
          </div>
          <span className="mono pp-feed-time">acum</span>
        </div>
        <div className="pp-feed-item pp-feed-item-prev">
          <span className={`pp-feed-tag pp-feed-tag-${prev.tagKind}`}>
            {prev.tag}
          </span>
          <div className="pp-feed-body">
            <div className="pp-feed-title">
              <span className="pp-feed-glyph">{prev.icon}</span>
              {prev.title}
            </div>
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

/* Typing code snippet — looped */
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
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const syncId = window.setTimeout(() => setCursor(full.length), 0);
      return () => window.clearTimeout(syncId);
    }
    let pos = 0;
    let pause = 0;
    const id = setInterval(() => {
      if (pause > 0) {
        pause--;
        return;
      }
      pos++;
      if (pos > full.length) {
        // restart after a beat
        pause = 18;
        pos = 0;
      }
      setCursor(pos);
    }, 38);
    return () => clearInterval(id);
  }, [full]);

  const text = full.slice(0, cursor);
  // syntax-color very lightly
  const lines = text.split("\n");

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
            <span className="pp-snippet-ln">
              {String(i + 1).padStart(2, " ")}
            </span>
            <span>
              {colorizeLine(ln)}
              {i === lines.length - 1 && (
                <span className="pp-snippet-cursor blink">█</span>
              )}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
};

function colorizeLine(line: string) {
  // crude tokenizer that’s good enough for our 10-line snippet
  const parts = [];
  const regex =
    /(\/\/.*$)|('[^']*'|"[^"]*")|(\b(?:const|let|var|await|async|function|return|if|else|new|true|false|null)\b)|(\b[A-Za-z_$][\w$]*)(?=\()|([{}\[\]:,;=()])/g;
  let last = 0;
  let m;
  while ((m = regex.exec(line)) !== null) {
    if (m.index > last)
      parts.push({ t: "plain", v: line.slice(last, m.index) });
    if (m[1]) parts.push({ t: "cmt", v: m[1] });
    else if (m[2]) parts.push({ t: "str", v: m[2] });
    else if (m[3]) parts.push({ t: "kw", v: m[3] });
    else if (m[4]) parts.push({ t: "fn", v: m[4] });
    else if (m[5]) parts.push({ t: "pun", v: m[5] });
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push({ t: "plain", v: line.slice(last) });
  return parts.map((p, i) => (
    <span key={i} className={`tk-${p.t}`}>
      {p.v}
    </span>
  ));
}

const Spark = ({ accent = false }: IconProps) => {
  const path =
    "M0 24 L8 22 L16 16 L24 18 L32 12 L40 14 L48 8 L56 10 L64 4 L72 6 L80 2";
  return (
    <svg
      viewBox="0 0 80 28"
      preserveAspectRatio="none"
      style={{ width: "100%", height: 28 }}
    >
      <path
        d={path}
        stroke={accent ? "var(--accent)" : "var(--fg-3)"}
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={path + " L80 28 L0 28 Z"}
        fill={accent ? "var(--accent-soft)" : "rgba(255,255,255,0.04)"}
      />
    </svg>
  );
};

const ProjectsBars = () => {
  const bars = [40, 60, 35, 70, 55, 80, 65];
  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 28 }}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h}%`,
            background:
              i === bars.length - 1
                ? "var(--accent)"
                : "rgba(255,255,255,0.18)",
            borderRadius: 1.5,
          }}
        />
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
            <span className="mono" style={{ fontSize: 10 }}>
              {19 + i}
            </span>
          </div>
          <div className="pp-cal-body">
            {events
              .filter((e) => e.day === i)
              .map((e, ei) => (
                <div
                  key={ei}
                  className={`pp-cal-event k-${e.kind}`}
                  style={{ top: `${e.start}%`, height: `${e.len}%` }}
                >
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
    {
      id: "C-2418",
      name: "Andrei Munteanu",
      sub: "Diagnostic + revizie",
      status: "În lucru",
      kind: "a",
      amt: "480",
    },
    {
      id: "C-2417",
      name: "Maria Popa",
      sub: "Schimb plăcuțe + ulei",
      status: "Finalizat",
      kind: "ok",
      amt: "320",
    },
    {
      id: "C-2416",
      name: "Cristian Ene",
      sub: "Reparație injectoare",
      status: "Așteaptă piese",
      kind: "wait",
      amt: "1.240",
    },
    {
      id: "C-2415",
      name: "Diana Stoica",
      sub: "ITP + revizie",
      status: "Programat",
      kind: "sched",
      amt: "210",
    },
  ];
  return (
    <div className="pp-contract-list">
      {rows.map((r, i) => (
        <div key={i} className="pp-contract-row">
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {r.name}
              <span
                className="mono"
                style={{ fontSize: 10, color: "var(--fg-4)" }}
              >
                {r.id}
              </span>
            </div>
            <div style={{ fontSize: 12, color: "var(--fg-3)" }}>{r.sub}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className={`pp-status pp-status-${r.kind}`}>{r.status}</span>
            <span
              className="mono"
              style={{
                fontSize: 12,
                color: "var(--fg-2)",
                minWidth: 56,
                textAlign: "right",
              }}
            >
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
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>
          din formular site
        </div>
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
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>
          confirmare programare
        </div>
      </div>
    </div>
    <div className="pp-auto-line" />
    <div className="pp-auto-step pp-auto-step-active">
      <div className="pp-auto-icon">●</div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)" }}>
          Reminder cu 24h
        </div>
        <div style={{ fontSize: 11, color: "var(--fg-3)" }}>rulează zilnic</div>
      </div>
    </div>
  </div>
);

// Inject mock styles

/* Original source: components/middle.jsx */
/* Problem + Solution + Services + Audience */

const ProblemSection = () => {
  const problems = [
    {
      code: "01",
      title: "Informații împrăștiate",
      body: "În email, WhatsApp, foi de Excel, agende. Nimeni nu știe unde e adevărul.",
    },
    {
      code: "02",
      title: "Clienți uitați",
      body: "Cereri rămase fără răspuns, programări pierdute, oferte trimise pe care nu le mai urmărește nimeni.",
    },
    {
      code: "03",
      title: "Rapoarte făcute manual",
      body: "Cineva stă o zi pe lună să copy-paste din sistem în sistem. Și tot iese cu greșeli.",
    },
    {
      code: "04",
      title: "Comenzi gestionate haotic",
      body: 'Status-uri necunoscute, livrări întârziate, clienți care sună să întrebe „unde e?".',
    },
    {
      code: "05",
      title: "Lipsă automatizări",
      body: "Aceleași e-mailuri, aceleași notificări, aceleași pași — bătuți la mână, în fiecare zi.",
    },
    {
      code: "06",
      title: "Site vechi sau lent",
      body: "Nu se mai potrivește cu firma de azi. Clienții îl deschid și îl închid în 5 secunde.",
    },
  ];

  return (
    <section className="section" id="problema">
      <div className="container">
        <SectionHead
          num="01"
          eyebrow="problema"
          title="Dacă firma ta încă depinde de Excel-uri, mesaje pierdute și procese manuale, pierzi timp zilnic."
          lead="Nu e neapărat vina nimănui. Așa s-au strâns lucrurile, în timp. Dar fiecare săptămână în care continuă haosul costă ore reale de muncă și clienți reali pierduți."
        />
        <div className="grid grid-3">
          {problems.map((p) => (
            <div key={p.code} className="card pp-prob">
              <span className="mono pp-prob-code">{p.code}</span>
              <h3 className="h-3">{p.title}</h3>
              <p className="body-sm" style={{ margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const steps = [
    {
      n: "01",
      t: "Analizăm cum lucrezi acum",
      d: "O discuție directă, fără formulare. Vreau să înțeleg fluxul real, nu cel din schemă.",
    },
    {
      n: "02",
      t: "Identificăm ce se poate automatiza",
      d: "Ce repeți zilnic. Ce uiți. Ce te încurcă. Acolo stau orele tale ascunse.",
    },
    {
      n: "03",
      t: "Construim sistemul potrivit",
      d: "Doar cât ai nevoie. Fără funcții pe care nu le vei folosi niciodată.",
    },
    {
      n: "04",
      t: "Îl testăm cu tine",
      d: "Tu îl folosești. Eu ascult. Ajustăm până se așază pe felul tău de lucru.",
    },
    {
      n: "05",
      t: "Îl îmbunătățim în timp",
      d: "Pe măsură ce firma crește, sistemul crește cu ea. Nu rămâi blocat.",
    },
  ];

  return (
    <section className="section pp-sol" id="solutia">
      <div className="container">
        <div className="pp-sol-grid">
          <div>
            <SectionHead
              num="02"
              eyebrow="soluția"
              title={
                <>
                  Transformăm{" "}
                  <span className="serif" style={{ color: "var(--accent)" }}>
                    procesele
                  </span>{" "}
                  firmei tale în software simplu de folosit.
                </>
              }
              lead="Nu primești un produs gata făcut, în care să te înghesui. Primești un sistem construit în jurul felului în care tu lucrezi deja."
            />
          </div>
          <div className="pp-sol-steps">
            {steps.map((s, i) => (
              <div key={s.n} className="pp-sol-step">
                <div className="pp-sol-step-num mono">{s.n}</div>
                <div className="pp-sol-step-body">
                  <div className="pp-sol-step-t">{s.t}</div>
                  <div className="body-sm" style={{ marginTop: 4 }}>
                    {s.d}
                  </div>
                </div>
                {i < steps.length - 1 && <div className="pp-sol-step-line" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: "app",
      title: "Aplicații web custom",
      body: "Tool-uri interne, calculatoare, fluxuri specifice — exact ce nu găsești la nimeni gata făcut.",
    },
    {
      icon: "crm",
      title: "CRM-uri și back-office",
      body: "Toți clienții, toate ofertele, toate contractele — într-un singur loc, cu reguli clare.",
    },
    {
      icon: "auto",
      title: "Automatizări business",
      body: "Email-uri, notificări, sincronizări între sisteme. Lucruri care merg de la sine.",
    },
    {
      icon: "dash",
      title: "Dashboard-uri și rapoarte",
      body: "Vezi unde e firma azi, fără să mai compun manual fișiere Excel la final de lună.",
    },
    {
      icon: "web",
      title: "Website-uri premium",
      body: "Site-uri de prezentare care arată că ești serios. Rapide, curate, optimizate.",
    },
    {
      icon: "shop",
      title: "Magazine online custom",
      body: "Când Shopify-ul nu mai încape pe firma ta. Cu produse, fluxuri și plăți pe regulile tale.",
    },
    {
      icon: "api",
      title: "Integrare API-uri",
      body: "Lipim sistemele tale: facturare, curierat, plăți, ERP. Datele ajung singure unde trebuie.",
    },
    {
      icon: "shield",
      title: "Mentenanță și suport",
      body: "Nu te las cu codul în brațe. Rămân în spate, ca un programator pe care nu trebuie să-l angajezi.",
    },
  ];

  return (
    <section className="section" id="servicii">
      <div className="container">
        <SectionHead
          num="03"
          eyebrow="servicii"
          title="Ce construim, concret."
          lead="O listă scurtă, fără jargon. Dacă ai ceva pe lista asta — sau ceva ce nu apare aici — vorbim direct."
        />
        <div className="grid grid-4 pp-svc-grid">
          {services.map((s) => (
            <div key={s.title} className="card pp-svc">
              <div className="pp-svc-icon">
                <Glyph name={s.icon} size={20} />
              </div>
              <h3 className="h-3">{s.title}</h3>
              <p className="body-sm" style={{ margin: 0 }}>
                {s.body}
              </p>
              <span className="pp-svc-link mono">
                vezi detalii <ArrowRight size={11} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AudienceSection = () => {
  const tags = [
    {
      icon: "wrench",
      title: "Service-uri și firme operaționale",
      body: "Auto, instalații, intervenții. Programări, fișe, statusuri.",
    },
    {
      icon: "pulse",
      title: "Clinici și cabinete",
      body: "Pacienți, programări, documente, urmăriri. Discret, sigur, ordonat.",
    },
    {
      icon: "fork",
      title: "Restaurante și locații de evenimente",
      body: "Rezervări, meniuri, pachete, rapoarte. Fără registre pe hârtie.",
    },
    {
      icon: "bag",
      title: "Magazine online",
      body: "Când platforma actuală nu mai face față ce ai construit între timp.",
    },
    {
      icon: "people",
      title: "Firme de servicii",
      body: "Consultanță, juridic, contabilitate, agenții. Clienți, dosare, urmăriri.",
    },
    {
      icon: "lightbulb",
      title: "Antreprenori cu o idee",
      body: "Vrei să validezi rapid. Construim un MVP curat, nu un slide deck.",
    },
  ];

  return (
    <section className="section section-pad-sm" id="pentru-cine">
      <div className="container">
        <SectionHead
          num="04"
          eyebrow="pentru cine"
          title="Pentru cine este."
          lead="Nu fac cod pentru oricine. Lucrez cel mai bine cu firme care au procese reale și știu că pot lucra mai bine."
        />
        <div className="grid grid-3">
          {tags.map((t) => (
            <div key={t.title} className="card pp-aud">
              <div className="pp-aud-row">
                <div className="pp-aud-icon">
                  <Glyph name={t.icon} size={18} />
                </div>
                <h3 className="h-3" style={{ fontSize: 17 }}>
                  {t.title}
                </h3>
              </div>
              <p className="body-sm" style={{ margin: 0 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Original source: components/process-cases.jsx */
/* Process + Use cases + Trust */

const ProcessSection = () => {
  const steps = [
    {
      n: "01",
      t: "Discutăm problema",
      d: "O conversație de 30 de minute. Tu îmi spui ce nu funcționează, eu pun întrebări. Fără PowerPoint.",
      dur: "~30 min",
    },
    {
      n: "02",
      t: "Schițăm fluxul",
      d: "Desenez cum ar arăta soluția. Pe wireframe, pe diagramă, pe șervețel — orice te ajută să vezi.",
      dur: "2-3 zile",
    },
    {
      n: "03",
      t: "Stabilim funcționalitățile",
      d: "Tăiem ce nu e necesar. Decidem împreună prioritățile. Versiunea 1 trebuie să fie mică și clară.",
      dur: "1 săpt.",
    },
    {
      n: "04",
      t: "Construim MVP-ul",
      d: "Cod curat, livrări săptămânale. Vezi progresul, nu primești surprize la final.",
      dur: "3-6 săpt.",
    },
    {
      n: "05",
      t: "Testăm și ajustăm",
      d: "Tu îl folosești în firmă. Apar lucruri noi. Le rezolv pe parcurs.",
      dur: "2 săpt.",
    },
    {
      n: "06",
      t: "Lansăm și îmbunătățim",
      d: "Lansare reală, cu utilizatori reali. Apoi continuăm: features noi, optimizări, integrări.",
      dur: "continuu",
    },
  ];

  return (
    <section className="section" id="cum-lucram">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow="cum lucrăm"
          title="Procesul, fără surprize."
          lead="Nu sunt 17 etape. Sunt 6, iar fiecare are sens. Nu treci la următoarea până nu suntem amândoi siguri că cea anterioară s-a așezat."
        />

        <div className="pp-process">
          {steps.map((s, i) => (
            <div key={s.n} className="pp-process-step">
              <div className="pp-process-num mono">{s.n}</div>
              <div className="pp-process-bar">
                <div className="pp-process-dot" />
                {i < steps.length - 1 && <div className="pp-process-line" />}
              </div>
              <div className="pp-process-content">
                <div className="pp-process-head">
                  <h3 className="h-3">{s.t}</h3>
                  <span className="mono pp-process-dur">{s.dur}</span>
                </div>
                <p className="body-sm" style={{ margin: 0 }}>
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  const cases = [
    {
      tag: "CRM",
      title: "CRM pentru gestionarea clienților și contractelor",
      body: "Toți clienții, toate contractele, toate plățile — într-un loc. Cu reminder-uri pentru reînnoiri și fluxuri de facturare automate.",
      stats: [
        ["347", "clienți"],
        ["18", "contracte/lună"],
        ["↓ 40%", "timp pierdut"],
      ],
    },
    {
      tag: "Service",
      title: "Sistem de fișe service cu statusuri și notificări",
      body: "Fișa intră, trece prin diagnoza, comenzi piese, lucru, finalizare — și clientul primește SMS la fiecare schimbare de status.",
      stats: [
        ["Fișe", "cu cod QR"],
        ["Live", "status real-time"],
        ["SMS", "auto la client"],
      ],
    },
    {
      tag: "Booking",
      title: "Platformă de rezervări",
      body: "Calendar disponibil 24/7, plăți online, confirmări automate, reminder cu 24h înainte. Tu vezi totul într-o vedere clară.",
      stats: [
        ["24/7", "rezervări"],
        ["Stripe", "plăți online"],
        ["Live", "sincronizare cal."],
      ],
    },
    {
      tag: "Analytics",
      title: "Dashboard cu rapoarte automate",
      body: "Vânzări, costuri, marje, top clienți, top produse — actualizate live, exportabile cu un click. Nu mai stai cu Excel-ul.",
      stats: [
        ["Live", "date real-time"],
        ["PDF", "export raport"],
        ["Auto", "la final de lună"],
      ],
    },
    {
      tag: "eCom",
      title: "Magazin online custom",
      body: "Pentru când produsele tale au reguli pe care un Shopify standard nu le poate exprima. Variații, configurații, prețuri pe volum.",
      stats: [
        ["Custom", "flux comenzi"],
        ["Stoc", "multi-depozit"],
        ["Plăți", "RO + cards"],
      ],
    },
    {
      tag: "Intern",
      title: "Aplicație internă pentru echipă",
      body: "Task-uri, fișe de lucru, ponturi, documente — adaptate exact pe felul în care echipa ta operează deja.",
      stats: [
        ["Roluri", "permisiuni fine"],
        ["Mobile", "pentru teren"],
        ["SSO", "login firmă"],
      ],
    },
  ];

  return (
    <section className="section" id="proiecte">
      <div className="container">
        <SectionHead
          num="06"
          eyebrow="exemple concrete"
          title="Ce putem construi concret."
          lead="Nu vorbe. Iată tipuri reale de proiecte pe care le-am construit, sau pe care le pot construi pentru firma ta."
        />
        <div className="pp-cases">
          {cases.map((c, i) => (
            <div key={c.title} className="pp-case">
              <div className="pp-case-tag mono">{c.tag}</div>
              <div className="pp-case-num mono">0{i + 1}</div>
              <h3 className="h-2 pp-case-title">{c.title}</h3>
              <p
                className="body"
                style={{ color: "var(--fg-2)", margin: 0, maxWidth: 540 }}
              >
                {c.body}
              </p>
              <div className="pp-case-stats">
                {c.stats.map((s, si) => (
                  <div key={si}>
                    <div className="mono pp-case-stat-n">{s[0]}</div>
                    <div className="pp-case-stat-l">{s[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const points = [
    "Explicăm pe înțelesul tău",
    "Construim exact ce ai nevoie",
    "Fără funcții inutile",
    "Cod curat și ușor de extins",
    "Comunicare directă, fără ticket-uri",
    "Gândire de business, nu doar execuție tehnică",
  ];

  return (
    <section className="section pp-trust">
      <div className="container">
        <div className="pp-trust-grid">
          <div>
            <SectionHead
              num="07"
              eyebrow="diferența"
              title={
                <>
                  Nu primești doar cod. <br />
                  <span className="serif" style={{ color: "var(--accent)" }}>
                    Primești claritate.
                  </span>
                </>
              }
            />
            <p className="lead" style={{ maxWidth: 560 }}>
              Codul e partea ușoară. Partea grea e să înțelegi cum funcționează
              cu adevărat firma ta și să construiești ceva care chiar te ajută.
              Asta primești când lucrezi cu Programator Personal.
            </p>
          </div>
          <div className="pp-trust-list">
            {points.map((p, i) => (
              <div key={i} className="pp-trust-item">
                <div className="pp-trust-check">
                  <Check size={12} />
                </div>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Original source: components/enhancements.jsx */
/* Enhanced sections: Before/After, Workflow Builder, Live Mockups */

/* ============================================================
   BEFORE / AFTER
   ============================================================ */
const BeforeAfterSection = () => {
  const before = [
    {
      icon: "✕",
      t: "Excel-uri pe 3 calculatoare",
      s: "fiecare cu o versiune diferită",
    },
    {
      icon: "✕",
      t: "Mesaje pierdute pe WhatsApp",
      s: '„caut, am scris săptămâna trecută..."',
    },
    { icon: "✕", t: "Clienți uitați", s: "nu i-a sunat nimeni înapoi" },
    {
      icon: "✕",
      t: "Contracte scrise manual",
      s: "cu copy-paste din alt contract",
    },
    {
      icon: "✕",
      t: "Rapoarte la final de lună",
      s: "o zi întreagă de muncă pierdută",
    },
    { icon: "✕", t: "Follow-up uitat", s: "oferta a rămas în Sent și atât" },
  ];
  const after = [
    {
      icon: "✓",
      t: "CRM cu o singură sursă de adevăr",
      s: "toți, tot, în același loc",
    },
    {
      icon: "✓",
      t: "Notificări automate",
      s: "pe email + SMS, fără să le bați la mână",
    },
    {
      icon: "✓",
      t: "Reminder pentru fiecare lead",
      s: "nu mai cade niciunul printre crăpături",
    },
    {
      icon: "✓",
      t: "Contracte generate cu un click",
      s: "cu datele clientului completate auto",
    },
    {
      icon: "✓",
      t: "Dashboard live",
      s: "vezi situația firmei oricând, în 2 secunde",
    },
    {
      icon: "✓",
      t: "Follow-up automat",
      s: "la 3 zile, 7 zile, 14 zile — pe ritmul tău",
    },
  ];

  return (
    <section className="section" id="before-after">
      <div className="container">
        <SectionHead
          num="02"
          eyebrow="înainte / după"
          title={
            <>
              Din{" "}
              <span className="serif" style={{ color: "var(--fg-3)" }}>
                haos operațional
              </span>{" "}
              în <span style={{ color: "var(--accent)" }}>sistem clar</span>.
            </>
          }
          lead="Aceeași firmă, două realități. La stânga — cum lucrează majoritatea acum. La dreapta — cum lucrează după ce așezăm sistemul."
        />

        <div className="pp-ba">
          <div className="pp-ba-col pp-ba-before">
            <div className="pp-ba-head">
              <span className="mono pp-ba-head-tag">înainte</span>
              <span className="h-3" style={{ color: "var(--fg-2)" }}>
                Haos operațional
              </span>
            </div>
            <div className="pp-ba-list">
              {before.map((b, i) => (
                <div key={i} className="pp-ba-item pp-ba-item-before">
                  <span className="pp-ba-icon">{b.icon}</span>
                  <div>
                    <div className="pp-ba-t">{b.t}</div>
                    <div className="pp-ba-s">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pp-ba-noise" />
          </div>

          <div className="pp-ba-arrow">
            <div className="pp-ba-arrow-line" />
            <div className="pp-ba-arrow-chip mono">
              <span className="dot pulse-dot" /> transformare
            </div>
            <div className="pp-ba-arrow-line" />
          </div>

          <div className="pp-ba-col pp-ba-after">
            <div className="pp-ba-head">
              <span className="mono pp-ba-head-tag pp-ba-head-tag-after">
                după
              </span>
              <span className="h-3">Sistem clar</span>
            </div>
            <div className="pp-ba-list">
              {after.map((a, i) => (
                <div key={i} className="pp-ba-item pp-ba-item-after">
                  <span className="pp-ba-icon pp-ba-icon-ok">{a.icon}</span>
                  <div>
                    <div className="pp-ba-t">{a.t}</div>
                    <div className="pp-ba-s">{a.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   WORKFLOW BUILDER
   ============================================================ */
const WorkflowBuilder = () => {
  const nodes = [
    {
      id: "form",
      t: "Formular client",
      s: "date trimise din site",
      x: 30,
      y: 90,
      icon: "⇲",
    },
    {
      id: "db",
      t: "Bază de date",
      s: "salvat în CRM",
      x: 230,
      y: 90,
      icon: "≣",
    },
    {
      id: "auto",
      t: "Automatizare",
      s: "reguli + verificări",
      x: 430,
      y: 90,
      icon: "⟳",
    },
    {
      id: "pdf",
      t: "Contract PDF",
      s: "generat cu datele lead",
      x: 630,
      y: 30,
      icon: "▤",
    },
    {
      id: "mail",
      t: "Email trimis",
      s: "cu PDF atașat",
      x: 630,
      y: 150,
      icon: "✉",
    },
    {
      id: "dash",
      t: "Dashboard",
      s: "actualizat live",
      x: 830,
      y: 90,
      icon: "◫",
    },
  ];
  const edges = [
    ["form", "db"],
    ["db", "auto"],
    ["auto", "pdf"],
    ["auto", "mail"],
    ["pdf", "dash"],
    ["mail", "dash"],
  ];

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const [hovered, setHovered] = useState<string | null>(null);

  // node animation reveal index
  const order = ["form", "db", "auto", "pdf", "mail", "dash"];

  return (
    <section className="section" id="workflow">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow="workflow builder"
          title={
            <>
              Conectăm pașii care acum se fac{" "}
              <span className="serif" style={{ color: "var(--fg-3)" }}>
                la mână
              </span>
              .
            </>
          }
          lead="Un workflow real, construit pentru o firmă din România. Datele intră o singură dată, apoi totul se mișcă singur — până ajunge înapoi la tine, sub formă de raport."
        />

        <div className="pp-flow">
          <div className="pp-flow-toolbar">
            <div className="pp-flow-tabs">
              <span className="pp-flow-tab active">
                Lead → Contract → Raport
              </span>
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
                const A = byId[a],
                  B = byId[b];
                const dx = (B.x - A.x) / 2;
                const d = `M ${A.x + 80} ${A.y + 22} C ${A.x + 80 + dx} ${A.y + 22}, ${B.x - dx} ${B.y + 22}, ${B.x} ${B.y + 22}`;
                return (
                  <g key={i}>
                    <path
                      d={d}
                      stroke="var(--line-2)"
                      strokeWidth="1.2"
                      fill="none"
                    />
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
                style={{
                  left: `${(n.x / 990) * 100}%`,
                  top: `${(n.y / 220) * 100}%`,
                }}
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
            <span style={{ color: "var(--fg-3)" }}>
              # /workflows/lead-to-contract.flow
            </span>
            <span style={{ color: "var(--accent)" }}>● healthy</span>
            <span style={{ color: "var(--fg-3)" }}>
              ultima rulare · acum 8s
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   LIVE MOCKUPS — 3 product cards
   ============================================================ */
const LiveMockups = () => {
  return (
    <section className="section" id="live">
      <div className="container">
        <SectionHead
          num="07"
          eyebrow="live mockups"
          title="Așa arată, în firma ta."
          lead="Trei tipuri de software pe care le construiesc des. Date fictive, dar fluxul e exact ce ai folosi tu mâine."
        />
        <div className="pp-live">
          <CRMMockup />
          <CalendarMockup />
          <ContractMockup />
        </div>
      </div>
    </section>
  );
};

const MiniWindow = ({ title, tag, children, footer }: MiniWindowProps) => (
  <div className="pp-mw lift glow-border">
    <div className="pp-mw-chrome">
      <div className="pp-mw-dots">
        <span style={{ background: "#FF5F57" }} />
        <span style={{ background: "#FEBC2E" }} />
        <span style={{ background: "#28C840" }} />
      </div>
      <span className="mono pp-mw-title">{title}</span>
      {tag && (
        <span
          className="chip chip-accent"
          style={{ fontSize: 10, padding: "2px 8px" }}
        >
          {tag}
        </span>
      )}
    </div>
    <div className="pp-mw-body">{children}</div>
    {footer && <div className="pp-mw-foot mono">{footer}</div>}
  </div>
);

const CRMMockup = () => {
  const rows = [
    { name: "Cristian Ene", status: "Lead nou", kind: "a", val: "—" },
    { name: "Andrei Munteanu", status: "Ofertă", kind: "b", val: "1.240" },
    { name: "Diana Stoica", status: "Contract", kind: "ok", val: "480" },
    { name: "Maria Popa", status: "Finalizat", kind: "ok", val: "320" },
  ];
  return (
    <MiniWindow
      title="crm.firma.ro/clienți"
      tag="47 leads"
      footer={
        <>
          <span>view: pipeline</span>
          <span style={{ color: "var(--accent)" }}>● live</span>
        </>
      }
    >
      <div className="pp-crm-bar">
        {[
          ["Lead", 12, "a"],
          ["Ofertă", 8, "b"],
          ["Contract", 5, "ok"],
          ["Repeat", 22, "c"],
        ].map(([l, n, k], i) => (
          <div key={i} className={`pp-crm-stage k-${k}`}>
            <span className="mono pp-crm-stage-n">{n}</span>
            <span className="pp-crm-stage-l">{l}</span>
          </div>
        ))}
      </div>
      <div className="pp-crm-table">
        {rows.map((r, i) => (
          <div key={i} className="pp-crm-row">
            <div className="pp-crm-avatar">
              {r.name
                .split(" ")
                .map((s) => s[0])
                .join("")}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {r.name}
              </div>
              <div style={{ fontSize: 11, color: "var(--fg-3)" }}>
                actualizat acum {i + 2}h
              </div>
            </div>
            <span className={`pp-crm-tag k-${r.kind}`}>{r.status}</span>
            <span className="mono pp-crm-val">{r.val}</span>
          </div>
        ))}
      </div>
    </MiniWindow>
  );
};

const CalendarMockup = () => {
  const events = [
    { day: 0, name: "Discuție lead", time: "09:00", kind: "a" },
    { day: 1, name: "Kickoff Service B", time: "11:00", kind: "b" },
    { day: 2, name: "Demo MVP", time: "15:00", kind: "a" },
    { day: 3, name: "QA + ajustări", time: "10:00", kind: "c" },
    { day: 4, name: "Lansare", time: "14:00", kind: "ok" },
  ];
  return (
    <MiniWindow
      title="calendar.firma.ro"
      tag="6 evenim."
      footer={
        <>
          <span>săptămâna curentă</span>
          <span style={{ color: "var(--accent)" }}>● sincronizat</span>
        </>
      }
    >
      <div className="pp-camo-week">
        {["L 19", "M 20", "M 21", "J 22", "V 23"].map((d, i) => (
          <div key={i} className={`pp-camo-day ${i === 2 ? "today" : ""}`}>
            <span style={{ color: i === 2 ? "var(--accent)" : "var(--fg-3)" }}>
              {d.split(" ")[0]}
            </span>
            <span
              className="mono"
              style={{
                fontSize: 14,
                color: i === 2 ? "var(--accent)" : "var(--fg-1)",
              }}
            >
              {d.split(" ")[1]}
            </span>
          </div>
        ))}
      </div>
      <div className="pp-camo-list">
        {events.map((e, i) => (
          <div key={i} className={`pp-camo-event k-${e.kind}`}>
            <span className="mono pp-camo-time">{e.time}</span>
            <span className="pp-camo-name">{e.name}</span>
            <span className="pp-camo-day-tag mono">
              {["L", "M", "M", "J", "V"][e.day]}
            </span>
          </div>
        ))}
      </div>
    </MiniWindow>
  );
};

const ContractMockup = () => {
  return (
    <MiniWindow
      title="contracte.firma.ro/generator"
      tag="auto-pdf"
      footer={
        <>
          <span>generator de contracte</span>
          <span style={{ color: "var(--accent)" }}>● gata să trimită</span>
        </>
      }
    >
      <div className="pp-cmo-form">
        <div className="pp-cmo-field">
          <span className="pp-cmo-label">Client</span>
          <span className="pp-cmo-val">
            Andrei Munteanu <span className="pp-cmo-tag">verificat</span>
          </span>
        </div>
        <div className="pp-cmo-field">
          <span className="pp-cmo-label">CUI / CNP</span>
          <span className="pp-cmo-val mono">RO 1234 5678</span>
        </div>
        <div className="pp-cmo-field">
          <span className="pp-cmo-label">Serviciu</span>
          <span className="pp-cmo-val">Reparație injectoare BMW X3</span>
        </div>
        <div className="pp-cmo-field">
          <span className="pp-cmo-label">Valoare</span>
          <span className="pp-cmo-val mono">
            <span style={{ color: "var(--accent)" }}>1.240</span> RON · TVA
            inclus
          </span>
        </div>
      </div>
      <div className="pp-cmo-cta">
        <div className="pp-cmo-doc">
          <div className="pp-cmo-doc-line w-90" />
          <div className="pp-cmo-doc-line w-70" />
          <div className="pp-cmo-doc-line w-80" />
          <div className="pp-cmo-doc-line w-50" />
          <div className="pp-cmo-doc-line w-60" />
          <div className="pp-cmo-doc-line w-40 accent" />
        </div>
        <div className="pp-cmo-actions">
          <div className="pp-cmo-btn pp-cmo-btn-primary">
            Generează PDF <span className="blink">▍</span>
          </div>
          <div className="pp-cmo-btn">Trimite la semnat</div>
          <div
            style={{
              fontSize: 10,
              color: "var(--fg-3)",
              marginTop: 8,
              fontFamily: "var(--font-mono)",
            }}
          >
            template: contract_service_v3.docx
          </div>
        </div>
      </div>
    </MiniWindow>
  );
};

/* Original source: components/v2-sections.jsx */
/* V2: Interactive Use Cases · Interactive Live Mockups · Contact form · Mobile polish */

/* ============================================================
   USE CASES v2 — vertical tab cu detalii live
   ============================================================ */
const UseCasesV2 = () => {
  const cases = [
    {
      id: "service",
      tag: "Service auto",
      title: "Atelier auto din București · 8 mecanici",
      problem:
        "Comenzi pe WhatsApp, facturi în Excel, piese pierdute la furnizori.",
      built: [
        "CRM cu fișe de service",
        "Generator facturi PDF",
        "Stoc piese + comenzi auto",
        'SMS „mașina e gata"',
      ],
      stats: [
        { k: "47%", v: "mai puține telefoane" },
        { k: "3.2x", v: "fișe procesate/zi" },
        { k: "12h", v: "salvate/săptămână" },
      ],
      sparkles: ["fișă în 30s", "parts auto-reorder", "SMS la finalizare"],
    },
    {
      id: "imob",
      tag: "Imobiliare",
      title: "Agenție imobiliară · 22 agenți",
      problem:
        'Anunțuri postate manual pe 6 site-uri, lead-uri duplicate, agenți care „uită" follow-up.',
      built: [
        "Hub central anunțuri → publicare auto",
        "Detector lead-uri duplicate",
        "Round-robin agenți",
        "Reminder follow-up 3/7/14 zile",
      ],
      stats: [
        { k: "6→1", v: "site-uri de gestionat" },
        { k: "+38%", v: "lead-uri convertite" },
        { k: "0", v: "lead-uri pierdute" },
      ],
      sparkles: ["publicare 1-click", "matching agent", "follow-up auto"],
    },
    {
      id: "magazin",
      tag: "E-commerce",
      title: "Magazin online produse hand-made · 800 SKU",
      problem:
        "Stoc gestionat pe 2 platforme, comenzi importate manual, lipsă rapoarte profit/produs.",
      built: [
        "Sync stoc între platforme",
        "Import comenzi → fulfillment",
        "Dashboard profit/produs",
        "Etichete AWB auto",
      ],
      stats: [
        { k: "94%", v: "comenzi automate" },
        { k: "−6h", v: "muncă/zi" },
        { k: "+22%", v: "marjă identificată" },
      ],
      sparkles: ["sync 2 platforme", "AWB 1-click", "marja per produs"],
    },
    {
      id: "clinica",
      tag: "Clinică",
      title: "Clinică stomatologică · 6 cabinete",
      problem: "Programări pe hârtie, no-show 18%, raportare CASS manuală.",
      built: [
        "Programare online + reminder SMS",
        "Fișă pacient cu istoric",
        "Calendar partajat 6 cabinete",
        "Raport CASS lunar auto",
      ],
      stats: [
        { k: "5%", v: "no-show (era 18)" },
        { k: "2x", v: "programări online" },
        { k: "8h", v: "admin/lună salvate" },
      ],
      sparkles: ["reminder SMS", "fișă digitală", "raport CASS auto"],
    },
    {
      id: "consultanta",
      tag: "Consultanță",
      title: "Firmă consultanță fiscală · 12 consultanți",
      problem:
        "Ore pontate în Excel, facturare la final de lună stresantă, clienții cer status.",
      built: [
        "Pontaj cu un click (timer)",
        "Facturare automată cu pontaj",
        "Portal client cu progres live",
        "Export ANAF e-Factura",
      ],
      stats: [
        { k: "−3 zile", v: "la facturare lunară" },
        { k: "100%", v: "ore facturabile" },
        { k: "e-Factura", v: "direct ANAF" },
      ],
      sparkles: ["timer 1-click", "portal client", "e-Factura ANAF"],
    },
  ];

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
              <span className="chip chip-accent mono" style={{ fontSize: 10 }}>
                {c.tag}
              </span>
              <h3 className="h-3" style={{ marginTop: 10 }}>
                {c.title}
              </h3>
              <p className="lead" style={{ marginTop: 10 }}>
                <span style={{ color: "var(--fg-3)" }}>Problemă:</span>{" "}
                {c.problem}
              </p>
            </div>

            <div className="pp-uc-built">
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                ce am construit
              </div>
              <div className="pp-uc-built-list">
                {c.built.map((b, i) => (
                  <div key={i} className="pp-uc-built-i">
                    <span className="pp-uc-built-x mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
};

/* ============================================================
   LIVE MOCKUPS v2 — interactive (CRM row click → calendar + contract update)
   ============================================================ */
const LiveMockupsV2 = () => {
  const clients = [
    {
      id: 0,
      name: "Cristian Ene",
      stage: "Lead nou",
      car: "Dacia Logan 2018",
      issue: "Diagnoză check-engine",
      slot: { day: 0, time: "09:00" },
      value: 280,
    },
    {
      id: 1,
      name: "Andrei Munteanu",
      stage: "Ofertă",
      car: "BMW X3 xDrive 2019",
      issue: "Reparație injectoare",
      slot: { day: 1, time: "11:00" },
      value: 1240,
    },
    {
      id: 2,
      name: "Diana Stoica",
      stage: "Contract",
      car: "VW Golf 2020",
      issue: "Schimb distribuție",
      slot: { day: 2, time: "15:00" },
      value: 480,
    },
    {
      id: 3,
      name: "Maria Popa",
      stage: "Finalizat",
      car: "Renault Captur 2021",
      issue: "Revizie 60.000 km",
      slot: { day: 4, time: "14:00" },
      value: 320,
    },
  ];

  const [sel, setSel] = useState(1);
  const c = clients[sel];

  return (
    <section className="section" id="live">
      <div className="container">
        <SectionHead
          num="12"
          eyebrow="live · interactiv"
          title={
            <>
              Apasă pe un client. Vezi cum se mișcă{" "}
              <span style={{ color: "var(--accent)" }}>tot sistemul</span>.
            </>
          }
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
              <span
                className="chip chip-accent"
                style={{ fontSize: 10, padding: "2px 8px" }}
              >
                {clients.length} clienți
              </span>
            </div>
            <div className="pp-mw-body">
              <div className="eyebrow" style={{ marginBottom: 4 }}>
                click pentru a selecta
              </div>
              {clients.map((cl) => (
                <button
                  key={cl.id}
                  className={`pp-lv2-row ${sel === cl.id ? "active" : ""}`}
                  onClick={() => setSel(cl.id)}
                >
                  <span className="pp-lv2-av">
                    {cl.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")}
                  </span>
                  <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                    <div className="pp-lv2-name">{cl.name}</div>
                    <div className="pp-lv2-sub">{cl.car}</div>
                  </div>
                  <span
                    className={`pp-lv2-tag k-${cl.stage === "Lead nou" ? "a" : cl.stage === "Ofertă" ? "b" : cl.stage === "Contract" ? "c" : "ok"}`}
                  >
                    {cl.stage}
                  </span>
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
              <span
                className="chip mono"
                style={{ fontSize: 10, padding: "2px 8px" }}
              >
                S 19 — V 23
              </span>
            </div>
            <div className="pp-mw-body">
              <div className="pp-lv2-week">
                {["L 19", "M 20", "M 21", "J 22", "V 23"].map((d, i) => (
                  <div
                    key={i}
                    className={`pp-lv2-day ${i === c.slot.day ? "has" : ""}`}
                  >
                    <span className="pp-lv2-day-l">{d.split(" ")[0]}</span>
                    <span className="mono pp-lv2-day-n">{d.split(" ")[1]}</span>
                    {i === c.slot.day && (
                      <div key={c.id} className="pp-lv2-day-evt">
                        <span className="mono pp-lv2-day-time">
                          {c.slot.time}
                        </span>
                        <span className="pp-lv2-day-evt-t">
                          {c.name.split(" ")[0]}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="pp-lv2-info">
                <div className="eyebrow">selecție · sincronizat</div>
                <div style={{ fontSize: 13, marginTop: 6 }}>
                  <strong>{c.name}</strong>{" "}
                  <span style={{ color: "var(--fg-3)" }}>· {c.issue}</span>
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--accent)", marginTop: 4 }}
                >
                  ↗ slot rezervat:{" "}
                  {["Luni", "Marți", "Miercuri", "Joi", "Vineri"][c.slot.day]} ·{" "}
                  {c.slot.time}
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
              <span
                className="chip chip-accent mono"
                style={{ fontSize: 10, padding: "2px 8px" }}
              >
                auto
              </span>
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
                  <span className="pp-lv2-doc-v mono">
                    {["Lu", "Ma", "Mi", "Jo", "Vi"][c.slot.day]} · {c.slot.time}
                  </span>
                </div>
                <div className="pp-lv2-doc-row pp-lv2-doc-tot">
                  <span className="pp-lv2-doc-k">Total estimat</span>
                  <span
                    className="pp-lv2-doc-v mono"
                    style={{ color: "var(--accent)", fontSize: 16 }}
                  >
                    {c.value.toLocaleString("ro-RO")} RON
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div className="pp-lv2-btn pp-lv2-btn-primary">
                  Generează contract PDF
                </div>
                <div className="pp-lv2-btn">Trimite spre semnare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   CONTACT SECTION — formular cu POST la /api/leads
   ============================================================ */
/* Original source: components/v2-sections.jsx */
const ContactSection = () => {
  const [f, setF] = useState({
    nume: "",
    firma: "",
    email: "",
    telefon: "",
    domeniu: "",
    dimensiune: "",
    buget: "",
    nevoie: "",
    mesaj: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const upd =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF({ ...f, [k]: e.target.value });
  const pick = (k: keyof typeof f, v: string) => () => setF({ ...f, [k]: v });

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error("Nu am putut trimite mesajul.");
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setF({
          nume: "",
          firma: "",
          email: "",
          telefon: "",
          domeniu: "",
          dimensiune: "",
          buget: "",
          nevoie: "",
          mesaj: "",
        });
      }, 4000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Nu am putut trimite mesajul.",
      );
    }
  };

  const can = f.nume && f.email && f.nevoie;

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          num="14"
          eyebrow="contact"
          title={
            <>
              Hai să vorbim.{" "}
              <span className="serif" style={{ color: "var(--fg-3)" }}>
                30 de minute, fără PowerPoint.
              </span>
            </>
          }
          lead="Completează ce poți. Mă uit peste detalii și te sun în 24h cu primele întrebări concrete."
        />

        <div className="pp-cf">
          <form className="pp-cf-form" onSubmit={submit}>
            <div className="pp-cf-grid">
              <label className="pp-cf-field">
                <span className="pp-cf-l">
                  Nume <em>*</em>
                </span>
                <input
                  className="pp-cf-i"
                  required
                  value={f.nume}
                  onChange={upd("nume")}
                  placeholder="Radu Popescu"
                />
              </label>
              <label className="pp-cf-field">
                <span className="pp-cf-l">Firma</span>
                <input
                  className="pp-cf-i"
                  value={f.firma}
                  onChange={upd("firma")}
                  placeholder="Service Auto B. SRL"
                />
              </label>
              <label className="pp-cf-field">
                <span className="pp-cf-l">
                  Email <em>*</em>
                </span>
                <input
                  className="pp-cf-i"
                  type="email"
                  required
                  value={f.email}
                  onChange={upd("email")}
                  placeholder="radu@firma.ro"
                />
              </label>
              <label className="pp-cf-field">
                <span className="pp-cf-l">Telefon</span>
                <input
                  className="pp-cf-i"
                  type="tel"
                  value={f.telefon}
                  onChange={upd("telefon")}
                  placeholder="07xx xxx xxx"
                />
              </label>
            </div>

            <div className="pp-cf-field">
              <span className="pp-cf-l">Domeniu</span>
              <div className="pp-cf-pills">
                {[
                  "Service auto",
                  "Imobiliare",
                  "E-commerce",
                  "Clinică",
                  "Consultanță",
                  "Construcții",
                  "HoReCa",
                  "Altul",
                ].map((d) => (
                  <button
                    type="button"
                    key={d}
                    className={`pp-cf-pill ${f.domeniu === d ? "active" : ""}`}
                    onClick={pick("domeniu", d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="pp-cf-grid">
              <div className="pp-cf-field">
                <span className="pp-cf-l">Dimensiune firmă</span>
                <div className="pp-cf-pills">
                  {["1-3", "4-10", "11-30", "30+"].map((d) => (
                    <button
                      type="button"
                      key={d}
                      className={`pp-cf-pill ${f.dimensiune === d ? "active" : ""}`}
                      onClick={pick("dimensiune", d)}
                    >
                      {d} oameni
                    </button>
                  ))}
                </div>
              </div>
              <div className="pp-cf-field">
                <span className="pp-cf-l">Buget orientativ</span>
                <div className="pp-cf-pills">
                  {["< 2k €", "2-5k €", "5-15k €", "15k+ €", "nu știu"].map(
                    (d) => (
                      <button
                        type="button"
                        key={d}
                        className={`pp-cf-pill ${f.buget === d ? "active" : ""}`}
                        onClick={pick("buget", d)}
                      >
                        {d}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="pp-cf-field">
              <span className="pp-cf-l">
                Ce te doare cel mai tare? <em>*</em>
              </span>
              <div className="pp-cf-pills">
                {[
                  "Excel-uri haotice",
                  "Lead-uri pierdute",
                  "Contracte la mână",
                  "Comenzi pe WhatsApp",
                  "Raportare lentă",
                  "Vreau site nou",
                  "Vreau automatizare",
                  "Altceva",
                ].map((d) => (
                  <button
                    type="button"
                    key={d}
                    className={`pp-cf-pill ${f.nevoie === d ? "active" : ""}`}
                    onClick={pick("nevoie", d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <label className="pp-cf-field">
              <span className="pp-cf-l">Spune-mi mai multe (opțional)</span>
              <textarea
                className="pp-cf-i pp-cf-ta"
                rows={4}
                value={f.mesaj}
                onChange={upd("mesaj")}
                placeholder="Ce încercați acum, ce ați vrut să faceți și nu a mers, ce vă deranjează zilnic..."
              />
            </label>

            <div className="pp-cf-foot">
              <button
                type="submit"
                className={`btn btn-primary ${!can ? "btn-disabled" : ""}`}
                disabled={!can}
              >
                {sent
                  ? "✓ Mesaj trimis — te sun în 24h"
                  : "Trimite și hai să vorbim"}
              </button>
              <span
                className="mono"
                style={{ fontSize: 11, color: "var(--fg-3)" }}
              >
                * câmpuri obligatorii · datele sunt trimise securizat către
                Programator Personal
              </span>
            </div>
          </form>

          <aside className="pp-cf-side">
            <div className="pp-cf-card">
              <div className="eyebrow">la ce să te aștepți</div>
              <ol className="pp-cf-steps">
                <li>
                  <strong>În 24h</strong>
                  <br />
                  <span style={{ color: "var(--fg-3)" }}>
                    Te sun. 5-10 minute, văd dacă pot ajuta.
                  </span>
                </li>
                <li>
                  <strong>În 3-4 zile</strong>
                  <br />
                  <span style={{ color: "var(--fg-3)" }}>
                    Întâlnire 30 min, fără PowerPoint.
                  </span>
                </li>
                <li>
                  <strong>În 1 săptămână</strong>
                  <br />
                  <span style={{ color: "var(--fg-3)" }}>
                    Propunere scrisă cu ce, cum, cât.
                  </span>
                </li>
              </ol>
            </div>

            <div className="pp-cf-card">
              <div className="eyebrow">alternativ</div>
              <div className="pp-cf-alt mono">
                <div>
                  <span style={{ color: "var(--fg-3)" }}>email</span>{" "}
                  hello@programatorpersonal.ro
                </div>
                <div>
                  <span style={{ color: "var(--fg-3)" }}>telefon</span> 07xx xxx
                  xxx
                </div>
                <div>
                  <span style={{ color: "var(--fg-3)" }}>linkedin</span>{" "}
                  /in/programatorpersonal
                </div>
              </div>
            </div>
            {error && (
              <div className="pp-cf-admin">
                <div className="eyebrow">eroare</div>
                <div style={{ fontSize: 12, marginTop: 6 }}>{error}</div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   MOBILE POLISH — extra responsive rules
   ============================================================ */

/* Original source: components/bottom.jsx */
/* Pricing + FAQ + Final CTA + Footer */

const PricingSection = () => {
  const tiers = [
    {
      name: "Start",
      tag: "site / landing / micro-automatizări",
      price: "de la 1.500 €",
      desc: "Pentru când ai nevoie de un site curat, o pagină de prezentare premium sau o automatizare clară.",
      bullets: [
        "Site de prezentare sau landing page",
        "Optimizare SEO de bază",
        "Formular de contact + integrări simple",
        "Hosting setup + lansare",
        "1 lună mentenanță inclusă",
      ],
      cta: "Discutăm un Start",
    },
    {
      name: "Business",
      tag: "CRM / dashboard / aplicații interne",
      price: "de la 4.500 €",
      desc: "Pentru firme care vor să-și pună ordine în clienți, contracte, comenzi sau echipă.",
      bullets: [
        "CRM sau aplicație internă custom",
        "Roluri și permisiuni pe utilizator",
        "Rapoarte și dashboard-uri",
        "Integrări (email, plăți, facturare)",
        "3 luni mentenanță inclusă",
        "Sesiuni de training pentru echipă",
      ],
      featured: true,
      cta: "Vorbim de un Business",
    },
    {
      name: "Custom",
      tag: "platforme / magazine / integrări complexe",
      price: "la discuție",
      desc: "Pentru proiecte mai mari: produse software, magazine online complexe sau integrări multiple.",
      bullets: [
        "Platformă custom end-to-end",
        "Multi-tenant / multi-locație",
        "Integrări API multiple",
        "Plăți, facturare, curierat, ERP",
        "Suport pe termen lung",
        "Roadmap pe etape",
      ],
      cta: "Construim ceva mai mare",
    },
  ];

  return (
    <section className="section" id="preturi">
      <div className="container">
        <SectionHead
          num="08"
          eyebrow="investiție orientativă"
          title="Cât costă, în mare."
          lead="Nu e grilă fixă. Sunt 3 forme de colaborare în care intră majoritatea proiectelor. Prețul final îl stabilim împreună, după ce înțelegem exact ce ai nevoie."
        />

        <div className="pp-pricing">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`pp-tier ${t.featured ? "pp-tier-featured" : ""}`}
            >
              {t.featured && (
                <div className="pp-tier-flag mono">cel mai des ales</div>
              )}
              <div className="pp-tier-head">
                <div>
                  <div className="h-2" style={{ fontSize: 28 }}>
                    {t.name}
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 4 }}
                  >
                    {t.tag}
                  </div>
                </div>
              </div>
              <p className="body-sm" style={{ margin: 0 }}>
                {t.desc}
              </p>
              <div className="pp-tier-price">
                <span className="mono">{t.price}</span>
              </div>
              <ul className="pp-tier-bullets">
                {t.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="pp-tier-check">
                      <Check size={11} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${t.featured ? "btn-primary" : "btn-secondary"} pp-tier-cta`}
              >
                {t.cta} <Arrow />
              </a>
            </div>
          ))}
        </div>

        <div className="pp-pricing-foot">
          <span className="mono" style={{ fontSize: 13, color: "var(--fg-3)" }}>
            nu te încadrezi într-un pachet?
          </span>
          <a href="#contact" className="btn btn-ghost">
            Cere o estimare personalizată <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ q, a, open, onClick, idx }: FAQItemProps) => (
  <div className={`pp-faq-item ${open ? "open" : ""}`}>
    <button className="pp-faq-q" onClick={onClick}>
      <span className="mono pp-faq-num">0{idx + 1}</span>
      <span className="pp-faq-q-text">{q}</span>
      <span className="pp-faq-toggle">
        <Plus size={14} />
      </span>
    </button>
    <div className="pp-faq-a">
      <p>{a}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: "Cât costă o aplicație custom?",
      a: 'Depinde de complexitate, dar dau cifre orientative chiar de la prima discuție. Un site premium pornește de la ~1.500 €, un CRM mic de la ~4.500 €, iar platformele complexe sunt la discuție. Nu lucrez cu „de la 99 €".',
    },
    {
      q: "Cât durează dezvoltarea?",
      a: "Un proiect mic — 2-3 săptămâni. Un CRM sau o aplicație internă — 4-8 săptămâni. Platformele mari — 2-4 luni. Lucrez în iterații săptămânale, deci vezi progresul tot timpul, nu primești totul la final.",
    },
    {
      q: "Pot începe cu o versiune simplă?",
      a: "Da, și chiar recomand asta. Construim prima versiune mică, o folosești în firmă, vezi ce merge și ce nu, iar apoi adăugăm. E mai sănătos decât să scriem un caiet de sarcini de 40 de pagini la început.",
    },
    {
      q: "Oferiți mentenanță?",
      a: "Da. După lansare am pachete de mentenanță lunare (intervenții, update-uri, dezvoltare continuă) sau la oră. Nu te las cu codul în brațe.",
    },
    {
      q: "Pot integra aplicația cu alte sisteme?",
      a: "Aproape întotdeauna. Facturare (SmartBill, Oblio), curierat, plăți (Stripe, Netopia), Google Workspace, Microsoft 365, ERP-uri. Dacă au API, le pot lega.",
    },
    {
      q: "Ce se întâmplă dacă nu știu exact ce am nevoie?",
      a: "Asta e cel mai des cazul, și e perfect normal. Începem cu o discuție de descoperire, eu pun întrebări, schițez câteva variante, iar tu alegi. Nu trebuie să vii cu specificații tehnice — vino cu problema.",
    },
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHead
          num="09"
          eyebrow="întrebări frecvente"
          title="Răspunsurile pe care le tot primesc."
        />
        <div className="pp-faq">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              idx={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="section pp-final" id="contact">
    <div className="container">
      <div className="pp-final-card">
        <div className="pp-final-grid-bg" />
        <div className="pp-final-content">
          <div className="chip" style={{ marginBottom: 24 }}>
            <span className="dot" /> răspund în 24h, în zilele lucrătoare
          </div>
          <h2 className="h-display pp-final-title">
            Ai o idee, un proces haotic
            <br />
            <span className="serif" style={{ color: "var(--accent)" }}>
              sau o firmă care are nevoie
            </span>
            <br />
            de ordine digitală?
          </h2>
          <p className="lead pp-final-sub">
            Spune-mi ce vrei să rezolvi. Îți pot propune o variantă simplă,
            clară și realistă de implementare. Fără audit de 2 săptămâni. Fără
            propunere de 40 de pagini.
          </p>
          <div className="pp-final-ctas">
            <a
              href="mailto:hai@programatorpersonal.ro"
              className="btn btn-primary"
            >
              Începem cu o discuție <Arrow />
            </a>
            <a href="#" className="btn btn-secondary">
              hai@programatorpersonal.ro
            </a>
          </div>

          <div className="pp-final-meta">
            <div>
              <div className="eyebrow">disponibilitate</div>
              <div className="pp-final-meta-v">L-V · 09:00 — 19:00</div>
            </div>
            <div>
              <div className="eyebrow">apel direct</div>
              <div className="pp-final-meta-v mono">+40 7XX XXX XXX</div>
            </div>
            <div>
              <div className="eyebrow">capacitate luna</div>
              <div className="pp-final-meta-v">
                <span style={{ color: "var(--accent)" }}>2 sloturi</span>{" "}
                disponibile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pp-footer">
    <div className="container">
      <div className="pp-footer-grid">
        <div className="pp-footer-brand">
          <Logo size={18} />
          <p className="body-sm" style={{ marginTop: 16, maxWidth: 320 }}>
            Programatorul firmei tale, fără să-l angajezi full-time. Construim
            software custom pentru firme din România care vor să lucreze mai
            clar.
          </p>
          <div className="pp-footer-loc mono">
            <span style={{ color: "var(--fg-3)" }}>Cu sediul în</span> București
            · România
          </div>
        </div>
        <div className="pp-footer-cols">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Servicii
            </div>
            <ul>
              <li><a href="/crm-custom">CRM custom</a></li>
              <li><a href="/automatizari-business">Automatizări business</a></li>
              <li><a href="/aplicatii-web-custom">Aplicații web custom</a></li>
              <li><a href="/generator-contracte">Generator contracte</a></li>
              <li><a href="/dashboard-rapoarte">Dashboard-uri și rapoarte</a></li>
              <li><a href="/platforma-rezervari">Platformă rezervări</a></li>
              <li><a href="/portal-clienti">Portal clienți</a></li>
              <li><a href="/magazin-online-custom">Magazin online custom</a></li>
              <li><a href="/mentenanta-software">Mentenanță software</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Companie
            </div>
            <ul>
              <li><a href="/preturi">Prețuri</a></li>
              <li><a href="/portofoliu">Portofoliu</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              Contact
            </div>
            <ul>
              <li>
                <a href="mailto:hai@programatorpersonal.ro">
                  hai@programatorpersonal.ro
                </a>
              </li>
              <li>
                <a href="tel:+40700000000">+40 7XX XXX XXX</a>
              </li>
              <li>
                <a href="/privacy">Politică confidențialitate</a>
              </li>
              <li>
                <a href="/terms">Termeni și condiții</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pp-footer-bottom">
        <div className="mono" style={{ fontSize: 12, color: "var(--fg-4)" }}>
          © 2026 Programator Personal · CUI RO XXXXXXXX
        </div>
        <div className="pp-footer-legal">
          <a href="#">Politică de confidențialitate</a>
          <a href="#">Termeni și condiții</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

void UseCasesSection;
void LiveMockups;

/* ============================================================
   CE PUTEM AUTOMATIZA — hub section cu linkuri la pagini dedicate
   ============================================================ */
const ServicesHubSection = () => {
  const serviceCards = [
    {
      glyph: "crm",
      title: "Lead-uri și clienți",
      problem: "Clienți uitați, follow-up lipsă, statusuri neclare",
      solution: "CRM cu pipeline, follow-up auto, rapoarte live",
      href: "/crm-custom",
    },
    {
      glyph: "auto",
      title: "Contracte și documente",
      problem: "Copy-paste în Word, greșeli de date, statusuri neclare",
      solution: "Generator de contracte cu date completate automat",
      href: "/generator-contracte",
    },
    {
      glyph: "app",
      title: "Programări și calendar",
      problem: "Programări pe WhatsApp, no-show, calendar haotic",
      solution: "Platformă de rezervări cu confirmări și reminder-uri auto",
      href: "/platforma-rezervari",
    },
    {
      glyph: "dash",
      title: "Rapoarte automate",
      problem: "Date împrăștiate, rapoarte manuale, decizii pe intuiție",
      solution: "Dashboard live cu toate datele firmei la un loc",
      href: "/dashboard-rapoarte",
    },
    {
      glyph: "auto",
      title: "Procese repetitive",
      problem: "Copy-paste manual, emailuri la mână, sincronizări lente",
      solution: "Automatizări care rulează fără să te atingi de ele",
      href: "/automatizari-business",
    },
    {
      glyph: "web",
      title: "Aplicații interne",
      problem: "Softuri generice care nu acoperă procesele tale specifice",
      solution: "Aplicații web construite exact pe fluxul tău de lucru",
      href: "/aplicatii-web-custom",
    },
  ];

  return (
    <section className="section" id="use-cases">
      <div className="container">
        <SectionHead
          num="03"
          eyebrow="ce putem automatiza"
          title="Ce poți elimina din rutina zilnică."
          lead="Fiecare card de mai jos ascunde ore pierdute și bani. Click pe oricare pentru a vedea cum arată soluția."
        />
        <div className="grid grid-3">
          {serviceCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="card"
              style={{ display: "block", transition: "border-color 0.2s" }}
            >
              <div className="pp-svc-icon" style={{ marginBottom: "var(--s-4)" }}>
                <Glyph name={card.glyph} size={20} />
              </div>
              <h3 className="h-3" style={{ marginBottom: 8 }}>{card.title}</h3>
              <p className="body-sm" style={{ color: "var(--danger)", margin: "0 0 6px" }}>
                ✕ {card.problem}
              </p>
              <p className="body-sm" style={{ color: "var(--fg-2)", margin: "0 0 var(--s-4)" }}>
                ✓ {card.solution}
              </p>
              <span className="pp-svc-link mono" style={{ color: "var(--accent)" }}>
                Vezi soluția <ArrowRight size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   ALEGE PROBLEMA TA — clickable problem picker
   ============================================================ */
const ProblemPickerSection = () => {
  const problems = [
    { label: "Vreau să scap de Excel", href: "/automatizari-business" },
    { label: "Vreau să gestionez clienții mai bine", href: "/crm-custom" },
    { label: "Vreau să automatizez contractele", href: "/generator-contracte" },
    { label: "Vreau rapoarte clare", href: "/dashboard-rapoarte" },
    { label: "Vreau o platformă de rezervări", href: "/platforma-rezervari" },
    { label: "Vreau un portal pentru clienți", href: "/portal-clienti" },
    { label: "Vreau magazin online propriu", href: "/magazin-online-custom" },
    { label: "Vreau o aplicație custom", href: "/aplicatii-web-custom" },
  ];

  return (
    <section className="section section-pad-sm" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <SectionHead
          num="04"
          eyebrow="alege problema ta"
          title="De unde vrei să începem?"
          lead="Alege situația care seamănă cel mai mult cu a ta. Te duc direct la soluție."
          align="center"
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--s-3)",
            justifyContent: "center",
          }}
        >
          {problems.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="btn btn-secondary"
              style={{ fontSize: 14 }}
            >
              {p.label} <ArrowRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


/* Original source: app.jsx */
export default function LandingPage() {
  const [requestedView, setRequestedView] = useState<HeroView>("dashboard");

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", "lime");
  }, []);

  const heroContextValue = useMemo<HeroViewContextValue>(
    () => ({
      requestedView,
      requestView: setRequestedView,
    }),
    [requestedView],
  );

  return (
    <HeroViewContext.Provider value={heroContextValue}>
      <div className="page" id="top">
        <Header />
        <Hero />
        <ProblemSection />
        <BeforeAfterSection />
        <SolutionSection />
        <WorkflowBuilder />
        <ServicesSection />
        <ServicesHubSection />
        <ProblemPickerSection />
        <AudienceSection />
        <ProcessSection />
        <UseCasesV2 />
        <LiveMockupsV2 />
        <TrustSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
        <Footer />
        <ScrollReveal />
      </div>
    </HeroViewContext.Provider>
  );
}

/* Original source: components/polish.js */
function ScrollReveal() {
  useEffect(() => {
    const tag = () => {
      document
        .querySelectorAll("section.section .container > *")
        .forEach((el) => {
          if (!el.hasAttribute("data-rv")) el.setAttribute("data-rv", "");
        });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const observeAll = () => {
      document
        .querySelectorAll("[data-rv]:not(.rv-in)")
        .forEach((el) => obs.observe(el));
    };

    const kick = () => {
      tag();
      observeAll();
    };
    const timers = [
      window.setTimeout(kick, 200),
      window.setTimeout(kick, 800),
      window.setTimeout(kick, 1800),
    ];
    return () => {
      timers.forEach(window.clearTimeout);
      obs.disconnect();
    };
  }, []);

  return null;
}

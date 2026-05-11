import type { VisualType } from "@/data/services";

// ─── shared shell ────────────────────────────────────────────────────────────

const VisualShell = ({ label, accent, children }: { label: string; accent?: boolean; children: React.ReactNode }) => (
  <div
    style={{
      width: 300,
      flexShrink: 0,
      background: "var(--bg-1)",
      border: "1px solid var(--line-2)",
      borderRadius: "var(--r-3)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div
      style={{
        padding: "8px 12px",
        borderBottom: "1px solid var(--line-1)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "var(--bg-2)",
      }}
    >
      <span className="mono" style={{ fontSize: 10, color: "var(--fg-4)", flex: 1 }}>{label}</span>
      {accent && (
        <span className="chip chip-accent" style={{ fontSize: 10, padding: "2px 7px" }}>
          <span className="dot pulse-dot" /> live
        </span>
      )}
    </div>
    <div style={{ padding: "12px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
      {children}
    </div>
  </div>
);

const Row = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, fontSize: 12 }}>
    <span style={{ color: "var(--fg-3)" }}>{label}</span>
    <span className="mono" style={{ color: accent ? "var(--accent)" : "var(--fg-1)", fontWeight: accent ? 600 : 400 }}>{value}</span>
  </div>
);

const Tag = ({ children, kind = "neutral" }: { children: React.ReactNode; kind?: string }) => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 7px",
      borderRadius: 4,
      fontSize: 10,
      fontFamily: "var(--font-mono)",
      background: kind === "ok" ? "rgba(132,204,22,0.12)" : kind === "a" ? "rgba(59,130,246,0.12)" : kind === "b" ? "rgba(245,158,11,0.12)" : "rgba(255,255,255,0.06)",
      color: kind === "ok" ? "var(--accent)" : kind === "a" ? "#60a5fa" : kind === "b" ? "#fbbf24" : "var(--fg-3)",
    }}
  >
    {children}
  </span>
);

// ─── CRM Pipeline ─────────────────────────────────────────────────────────────

const CRMPipeline = () => {
  const stages = [
    { label: "Lead", kind: "a", clients: ["Cristian E.", "Mihai T."] },
    { label: "Ofertă", kind: "b", clients: ["Andrei M."] },
    { label: "Contract", kind: "ok", clients: ["Diana S.", "Maria P."] },
  ];
  return (
    <VisualShell label="crm.firma.ro/pipeline" accent>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {stages.map((s) => (
          <div key={s.label} style={{ background: "var(--bg-2)", borderRadius: 6, padding: "8px 10px", border: "1px solid var(--line-1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <Tag kind={s.kind}>{s.label}</Tag>
              <span className="mono" style={{ fontSize: 10, color: "var(--fg-4)" }}>{s.clients.length}</span>
            </div>
            {s.clients.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderTop: "1px solid var(--line-1)" }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--bg-3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "var(--fg-3)", fontFamily: "var(--font-mono)" }}>
                  {c.split(" ").map((w) => w[0]).join("")}
                </div>
                <span style={{ fontSize: 11, color: "var(--fg-2)" }}>{c}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 4 }}>
        <Row label="conversie luna" value="+38%" accent />
        <Row label="follow-up auto" value="activ" />
      </div>
    </VisualShell>
  );
};

// ─── Automation Flow ──────────────────────────────────────────────────────────

const AutomationFlow = () => {
  const steps = [
    { icon: "⇲", label: "Formular client", sub: "trigger: submit", active: false },
    { icon: "≣", label: "Salvat în CRM", sub: "baza de date", active: false },
    { icon: "⟳", label: "Reguli automate", sub: "verificare + decizie", active: true },
    { icon: "✉", label: "Email + SMS", sub: "confirmare trimisă", active: false },
    { icon: "▤", label: "Contract PDF", sub: "generat automat", active: false },
  ];
  return (
    <VisualShell label="automatizari/lead-to-contract" accent>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map((s, i) => (
          <div key={i}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 8px",
                borderRadius: 6,
                background: s.active ? "rgba(132,204,22,0.07)" : "transparent",
                border: s.active ? "1px solid rgba(132,204,22,0.2)" : "1px solid transparent",
              }}
            >
              <span style={{ fontSize: 14, color: s.active ? "var(--accent)" : "var(--fg-3)", width: 20, textAlign: "center" }}>{s.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: s.active ? "var(--fg-1)" : "var(--fg-2)" }}>{s.label}</div>
                <div className="mono" style={{ fontSize: 10, color: "var(--fg-4)" }}>{s.sub}</div>
              </div>
              {s.active && <span className="dot pulse-dot" style={{ width: 6, height: 6 }} />}
            </div>
            {i < steps.length - 1 && (
              <div style={{ width: 1, height: 8, background: "var(--line-2)", marginLeft: 18 }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 4, borderTop: "1px solid var(--line-1)", paddingTop: 8 }}>
        <span className="mono" style={{ fontSize: 10, color: "var(--fg-4)" }}>● healthy · ultima rulare acum 4s</span>
      </div>
    </VisualShell>
  );
};

// ─── Contract Preview ─────────────────────────────────────────────────────────

const ContractPreview = () => (
  <VisualShell label="contracte/generator · auto-pdf">
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Row label="Client" value="Andrei Munteanu" />
      <Row label="CUI" value="RO 1234 5678" />
      <Row label="Serviciu" value="Mentenanță lunară" />
      <Row label="Durată" value="12 luni" />
      <Row label="Valoare" value="1.200 EUR" accent />
      <Row label="Status" value="Semnat ✓" accent />
    </div>
    <div style={{ marginTop: 4, display: "flex", flexDirection: "column", gap: 6 }}>
      {["w-full", "w-3/4", "w-5/6", "w-1/2", "w-2/3"].map((w, i) => (
        <div
          key={i}
          style={{
            height: 3,
            borderRadius: 2,
            background: i === 4 ? "rgba(132,204,22,0.4)" : "var(--line-2)",
            width: ["100%", "75%", "83%", "50%", "66%"][i],
          }}
        />
      ))}
    </div>
    <div
      style={{
        marginTop: 4,
        padding: "8px 12px",
        background: "rgba(132,204,22,0.08)",
        border: "1px solid rgba(132,204,22,0.2)",
        borderRadius: 6,
        fontSize: 12,
        color: "var(--accent)",
        fontFamily: "var(--font-mono)",
        textAlign: "center",
      }}
    >
      Generează PDF ▍
    </div>
  </VisualShell>
);

// ─── Dashboard KPI ────────────────────────────────────────────────────────────

const DashboardKPI = () => {
  const kpis = [
    { label: "Lead-uri", value: "47", delta: "+18%", accent: true },
    { label: "Proiecte active", value: "12", delta: "3 noi", accent: false },
    { label: "Venit luna", value: "38.4k", delta: "↑ 24%", accent: true },
    { label: "NPS", value: "92", delta: "top 10%", accent: false },
  ];
  const bars = [40, 60, 35, 70, 55, 80, 65];
  return (
    <VisualShell label="dashboard.firma.ro" accent>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {kpis.map((k) => (
          <div
            key={k.label}
            style={{ background: "var(--bg-2)", border: "1px solid var(--line-1)", borderRadius: 6, padding: "8px 10px" }}
          >
            <div style={{ fontSize: 10, color: "var(--fg-4)", marginBottom: 4 }}>{k.label}</div>
            <div className="mono" style={{ fontSize: 20, fontWeight: 600, color: k.accent ? "var(--accent)" : "var(--fg-1)", lineHeight: 1 }}>{k.value}</div>
            <div className="mono" style={{ fontSize: 10, color: "var(--fg-3)", marginTop: 3 }}>{k.delta}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 32, marginTop: 4, padding: "0 4px" }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: i === bars.length - 1 ? "var(--accent)" : "rgba(255,255,255,0.12)",
              borderRadius: 2,
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: 4 }}>
        <Row label="ultima actualizare" value="acum 12s" />
      </div>
    </VisualShell>
  );
};

// ─── Booking Calendar ─────────────────────────────────────────────────────────

const BookingCalendar = () => {
  const days = [
    { d: "L", n: "19", events: [{ time: "09:00", label: "Mihai T.", kind: "a" }] },
    { d: "M", n: "20", events: [{ time: "11:00", label: "Andrei M.", kind: "b" }, { time: "14:00", label: "Diana S.", kind: "a" }] },
    { d: "M", n: "21", events: [] },
    { d: "J", n: "22", events: [{ time: "10:00", label: "Maria P.", kind: "ok" }] },
    { d: "V", n: "23", events: [{ time: "15:00", label: "Cristian E.", kind: "a" }] },
  ];
  return (
    <VisualShell label="calendar.firma.ro · săptămâna curentă" accent>
      <div style={{ display: "flex", gap: 4 }}>
        {days.map((day) => (
          <div key={day.d + day.n} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 9, color: "var(--fg-4)", fontFamily: "var(--font-mono)" }}>{day.d}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--fg-2)", fontFamily: "var(--font-mono)" }}>{day.n}</div>
            </div>
            <div style={{ minHeight: 60, display: "flex", flexDirection: "column", gap: 3 }}>
              {day.events.map((ev, i) => (
                <div
                  key={i}
                  style={{
                    padding: "3px 4px",
                    borderRadius: 3,
                    background: ev.kind === "ok" ? "rgba(132,204,22,0.15)" : ev.kind === "b" ? "rgba(245,158,11,0.15)" : "rgba(59,130,246,0.15)",
                    borderLeft: `2px solid ${ev.kind === "ok" ? "var(--accent)" : ev.kind === "b" ? "#fbbf24" : "#60a5fa"}`,
                  }}
                >
                  <div className="mono" style={{ fontSize: 9, color: "var(--fg-3)" }}>{ev.time}</div>
                  <div style={{ fontSize: 9, color: "var(--fg-1)", fontWeight: 500 }}>{ev.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 4 }}>
        <Row label="reminder SMS" value="activ · -24h" accent />
        <Row label="no-show rate" value="5%" />
      </div>
    </VisualShell>
  );
};

// ─── Client Portal ────────────────────────────────────────────────────────────

const ClientPortal = () => {
  const tabs = ["Proiect", "Facturi", "Documente", "Mesaje"];
  const files = [
    { name: "brief_v2.pdf", date: "azi", size: "1.2 MB", new: true },
    { name: "wireframe_final.fig", date: "ieri", size: "4.8 MB", new: false },
    { name: "contract_semnat.pdf", date: "3 mai", size: "0.3 MB", new: false },
  ];
  return (
    <VisualShell label="portal.firma.ro · Andrei Munteanu">
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {tabs.map((t, i) => (
          <span
            key={t}
            style={{
              padding: "3px 8px",
              borderRadius: 4,
              fontSize: 11,
              background: i === 2 ? "rgba(132,204,22,0.1)" : "var(--bg-2)",
              border: `1px solid ${i === 2 ? "rgba(132,204,22,0.3)" : "var(--line-1)"}`,
              color: i === 2 ? "var(--accent)" : "var(--fg-3)",
              fontFamily: i === 2 ? "var(--font-mono)" : "inherit",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
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
            <span style={{ fontSize: 14, color: "var(--fg-4)" }}>▤</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "var(--fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
              <div className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{f.size} · {f.date}</div>
            </div>
            {f.new && <Tag kind="ok">nou</Tag>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 4 }}>
        <Row label="progres proiect" value="68%" accent />
      </div>
    </VisualShell>
  );
};

// ─── E-commerce Checkout ──────────────────────────────────────────────────────

const EcommerceCheckout = () => {
  const items = [
    { name: "Masă living oak 200cm", qty: 1, price: "4.800" },
    { name: "Scaun tapițat (×4)", qty: 4, price: "2.240" },
    { name: "Covor lână 240×170", qty: 1, price: "1.100" },
  ];
  return (
    <VisualShell label="magazin.firma.ro/checkout">
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{ display: "flex", gap: 8, padding: "6px 8px", background: "var(--bg-2)", border: "1px solid var(--line-1)", borderRadius: 5 }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "var(--fg-1)" }}>{item.name}</div>
              <div className="mono" style={{ fontSize: 10, color: "var(--fg-4)" }}>qty: {item.qty}</div>
            </div>
            <div className="mono" style={{ fontSize: 11, color: "var(--fg-2)", whiteSpace: "nowrap" }}>{item.price} RON</div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 8, display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
        <Row label="Subtotal" value="8.140 RON" />
        <Row label="Livrare (Fan Courier)" value="gratuit" />
        <Row label="TVA 19%" value="1.547 RON" />
        <Row label="TOTAL" value="9.687 RON" accent />
      </div>
      <div
        style={{
          marginTop: 4,
          padding: "8px 12px",
          background: "rgba(132,204,22,0.08)",
          border: "1px solid rgba(132,204,22,0.2)",
          borderRadius: 6,
          fontSize: 12,
          color: "var(--accent)",
          fontFamily: "var(--font-mono)",
          textAlign: "center",
        }}
      >
        Finalizează comanda → AWB auto
      </div>
    </VisualShell>
  );
};

// ─── Maintenance System ───────────────────────────────────────────────────────

const MaintenanceSystem = () => {
  const services_list = [
    { name: "API principal", uptime: "99.98%", status: "ok" },
    { name: "Baza de date", uptime: "100%", status: "ok" },
    { name: "Worker automatizări", uptime: "99.91%", status: "ok" },
    { name: "Storage fișiere", uptime: "99.99%", status: "ok" },
  ];
  return (
    <VisualShell label="status.firma.ro · monitoring" accent>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {services_list.map((svc) => (
          <div
            key={svc.name}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", background: "var(--bg-2)", border: "1px solid var(--line-1)", borderRadius: 5 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ flex: 1, fontSize: 11, color: "var(--fg-1)" }}>{svc.name}</span>
            <span className="mono" style={{ fontSize: 10, color: "var(--accent)" }}>{svc.uptime}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 8, marginTop: 4, display: "flex", flexDirection: "column", gap: 4 }}>
        <Row label="último deploy" value="ieri 18:42" />
        <Row label="backup automat" value="zilnic 03:00" />
        <Row label="certificate SSL" value="valid · 341 zile" accent />
      </div>
    </VisualShell>
  );
};

// ─── Web App Architecture ─────────────────────────────────────────────────────

const WebAppArchitecture = () => {
  const layers = [
    {
      label: "Frontend",
      color: "rgba(59,130,246,0.1)",
      border: "rgba(59,130,246,0.25)",
      modules: ["React / Next.js", "Mobile-ready", "SEO optimizat"],
    },
    {
      label: "API & Logică",
      color: "rgba(132,204,22,0.07)",
      border: "rgba(132,204,22,0.2)",
      modules: ["REST / tRPC", "Autentificare", "Roluri & permisiuni"],
    },
    {
      label: "Date & Integrări",
      color: "rgba(245,158,11,0.07)",
      border: "rgba(245,158,11,0.2)",
      modules: ["PostgreSQL", "Stripe · SmartBill", "Email / SMS"],
    },
  ];
  return (
    <VisualShell label="arhitectura aplicatiei tale">
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {layers.map((layer) => (
          <div
            key={layer.label}
            style={{
              padding: "8px 10px",
              borderRadius: 6,
              background: layer.color,
              border: `1px solid ${layer.border}`,
            }}
          >
            <div className="mono" style={{ fontSize: 10, color: "var(--fg-4)", marginBottom: 5 }}>{layer.label}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {layer.modules.map((m) => (
                <span
                  key={m}
                  style={{
                    padding: "2px 7px",
                    borderRadius: 3,
                    fontSize: 10,
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--fg-2)",
                    border: "1px solid var(--line-1)",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 4 }}>
        <Row label="arhitectură modulară" value="extensibilă" accent />
        <Row label="tu deții codul" value="100%" />
      </div>
    </VisualShell>
  );
};

// ─── Public export ────────────────────────────────────────────────────────────

export function ServiceVisual({ visualType }: { visualType: VisualType }) {
  switch (visualType) {
    case "crm-pipeline":        return <CRMPipeline />;
    case "automation-flow":     return <AutomationFlow />;
    case "contract-preview":    return <ContractPreview />;
    case "dashboard-kpi":       return <DashboardKPI />;
    case "booking-calendar":    return <BookingCalendar />;
    case "client-portal":       return <ClientPortal />;
    case "ecommerce-checkout":  return <EcommerceCheckout />;
    case "maintenance-system":  return <MaintenanceSystem />;
    case "web-app-architecture":return <WebAppArchitecture />;
  }
}

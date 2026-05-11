import { MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

export type IndustryVariant =
  | "service-uri"
  | "clinici"
  | "saloane"
  | "restaurante"
  | "imobiliare"
  | "constructii"
  | "evenimente"
  | "ecommerce";

type ModuleItem = { label: string; sub: string; status?: "ok" | "accent" | "warn" };
type ActivityItem = { text: string; time: string };

type VariantData = {
  eyebrow: string;
  title: string;
  modules: ModuleItem[];
  activity: ActivityItem[];
};

const variantData: Record<IndustryVariant, VariantData> = {
  "service-uri": {
    eyebrow: "nova service · sistem service auto",
    title: "Sistem service auto",
    modules: [
      { label: "Fișă service electronică", sub: "client, mașină, defect, lucrări", status: "ok" },
      { label: "Programări online", sub: "calendar, sloturi, confirmare auto", status: "ok" },
      { label: "Gestiune piese", sub: "stoc live, rezervare automată", status: "ok" },
      { label: "Generator devize", sub: "manoperă + piese, PDF auto", status: "ok" },
      { label: "Notificări SMS/email", sub: "intrare, diagnoză, finalizare", status: "accent" },
      { label: "Dashboard productivitate", sub: "venit/zi, lucrări/tehnician", status: "accent" },
    ],
    activity: [
      { text: "Fișă nouă: Dacia Logan · Andrei Popescu", time: "acum 3min" },
      { text: "SMS trimis: mașina dvs e gata", time: "09:41" },
      { text: "Deviz #DEV-2241 generat · 480 RON", time: "09:15" },
    ],
  },
  clinici: {
    eyebrow: "clinica atlas · sistem medical",
    title: "Sistem clinică medicală",
    modules: [
      { label: "Calendar programări per medic", sub: "sloturi, specialitate, disponibil 24/7", status: "ok" },
      { label: "Dosar electronic pacient", sub: "consultații, analize, tratamente, istoric", status: "ok" },
      { label: "Consimțăminte digitale", sub: "generate auto, semnate înainte de consultație", status: "ok" },
      { label: "Reminder-uri automate", sub: "-24h și -2h · no-show scade cu 60%", status: "ok" },
      { label: "Rapoarte per medic", sub: "consultații, tip, venit generat", status: "accent" },
      { label: "Portal pacient", sub: "rezultate, documente, programare online", status: "accent" },
    ],
    activity: [
      { text: "Programare nouă: Maria Dima · Dr. Ionescu", time: "acum 2min" },
      { text: "Reminder SMS trimis · -24h", time: "09:00" },
      { text: "Dosar actualizat: Elena I. · consultație", time: "ieri" },
    ],
  },
  saloane: {
    eyebrow: "studio frame · sistem salon",
    title: "Sistem salon beauty",
    modules: [
      { label: "Calendar rezervări online", sub: "per stilist, serviciu, durată", status: "ok" },
      { label: "Profil client detaliat", sub: "preferințe, istoric, produse folosite", status: "ok" },
      { label: "Catalog servicii & prețuri", sub: "actualizare simplă, promo incluse", status: "ok" },
      { label: "Program personal", sub: "disponibilitate, concedii, înlocuiri", status: "ok" },
      { label: "Tracking no-show", sub: "alertă client recidivist, depozit opțional", status: "warn" },
      { label: "Rapoarte venit & ocupare", sub: "per stilist, serviciu, perioadă", status: "accent" },
    ],
    activity: [
      { text: "Rezervare: Elena Ionescu · tuns + vopsit", time: "acum 5min" },
      { text: "Reminder trimis: mâine 14:00", time: "09:30" },
      { text: "No-show înregistrat: Maria D.", time: "ieri" },
    ],
  },
  restaurante: {
    eyebrow: "urban events food · sistem restaurant",
    title: "Sistem restaurant & events",
    modules: [
      { label: "Rezervări & evenimente", sub: "online, telefon, walk-in, grupuri", status: "ok" },
      { label: "Meniuri digitale", sub: "actualizare rapidă, variante, alergeni", status: "ok" },
      { label: "Gestiune stoc & furnizori", sub: "consumuri automate, comenzi furnizori", status: "ok" },
      { label: "Comenzi masă", sub: "tablă, QR, KDS bucătărie", status: "ok" },
      { label: "Rapoarte vânzări", sub: "per produs, zi, masă, angajat", status: "accent" },
      { label: "Integrare casă fiscală", sub: "bon automat la finalizare comandă", status: "accent" },
    ],
    activity: [
      { text: "Rezervare: Masa 4 · 6 persoane · 20:00", time: "acum 1min" },
      { text: "Stoc alertă: Somon atlantic < 2kg", time: "10:00" },
      { text: "Raport ieri: 142 comenzi · 8.400 RON", time: "08:00" },
    ],
  },
  imobiliare: {
    eyebrow: "atlas imobiliare · crm proprietăți",
    title: "CRM agenție imobiliară",
    modules: [
      { label: "CRM proprietăți", sub: "tip, zonă, preț, disponibilitate", status: "ok" },
      { label: "Gestiune lead-uri", sub: "sursă, buget, preferințe, urgență", status: "ok" },
      { label: "Vizionări programate", sub: "calendar agent, confirmare auto", status: "ok" },
      { label: "Documente tranzacție", sub: "antecontract, contract, acte necesare", status: "ok" },
      { label: "Pipeline tranzacție", sub: "lead → vizionare → ofertă → semnat → finalizat", status: "accent" },
      { label: "Rapoarte agenți", sub: "proprietăți, vizionări, tranzacții, comisioane", status: "accent" },
    ],
    activity: [
      { text: "Lead nou: 3 camere Floreasca · buget 120k€", time: "acum 4min" },
      { text: "Vizionare programată: AP-1241 · Andrei P.", time: "10:30" },
      { text: "Contract semnat: Vila Pipera · 280k€", time: "ieri" },
    ],
  },
  constructii: {
    eyebrow: "construcții nova · sistem proiecte",
    title: "Sistem firmă construcții",
    modules: [
      { label: "Gestiune proiecte", sub: "faze, termene, responsabili, bugete", status: "ok" },
      { label: "Devize & estimări", sub: "materiale, manoperă, profit estimat", status: "ok" },
      { label: "Gestiune materiale", sub: "stoc șantier, consum, comandă furnizori", status: "ok" },
      { label: "Echipe & pontaje", sub: "prezențe zilnice, ore lucrate, productivitate", status: "ok" },
      { label: "Rapoarte șantier", sub: "avans lucrări, fotografii, incidente", status: "accent" },
      { label: "Timeline proiect", sub: "Gantt, jaloane, devieri față de plan", status: "accent" },
    ],
    activity: [
      { text: "Raport șantier: Bloc P4 · Faza 2 avans 68%", time: "acum 10min" },
      { text: "Alertă material: beton M300 · comandă urgentă", time: "09:00" },
      { text: "Pontaj echipă: 12 muncitori · Șantier Nord", time: "08:00" },
    ],
  },
  evenimente: {
    eyebrow: "urban events · sistem events",
    title: "Sistem agenție evenimente",
    modules: [
      { label: "CRM clienți & evenimente", sub: "tip eveniment, dată, locație, buget", status: "ok" },
      { label: "Contracte & oferte", sub: "generator auto, semnat digital", status: "ok" },
      { label: "Furnizori & vendori", sub: "catering, foto, muzică, decor, flori", status: "ok" },
      { label: "Lista livrabile", sub: "task-uri per eveniment, responsabili, deadline", status: "ok" },
      { label: "Calendar evenimente", sub: "vizualizare lunară, conflicte, disponibilitate", status: "accent" },
      { label: "Urmărire plăți", sub: "avans, tranșe, sold, facturi auto", status: "accent" },
    ],
    activity: [
      { text: "Eveniment nou: Nuntă · 200 pers · 15 aug", time: "acum 6min" },
      { text: "Contract trimis: Urban Events · Popescu", time: "10:15" },
      { text: "Avans primit: 30% · Eveniment EVT-2241", time: "ieri" },
    ],
  },
  ecommerce: {
    eyebrow: "shopnova · operațiuni e-commerce",
    title: "Sistem e-commerce complet",
    modules: [
      { label: "Catalog produse", sub: "categorii, variante, prețuri, stocuri", status: "ok" },
      { label: "Gestiune comenzi", sub: "procesare, pick & pack, AWB auto", status: "ok" },
      { label: "Inventar & depozit", sub: "stoc în timp real, alertă epuizare", status: "ok" },
      { label: "Retururi & reclamații", sub: "flux automat, rambursare, stoc re-intrare", status: "ok" },
      { label: "Marketing & promo", sub: "cupoane, reduceri, campanii email", status: "accent" },
      { label: "Rapoarte vânzări", sub: "per produs, categorie, perioadă, canal", status: "accent" },
    ],
    activity: [
      { text: "Comandă nouă: ORD-4422 · 3 produse · 890 RON", time: "acum 1min" },
      { text: "AWB generat: Fan Courier · ORD-4420", time: "09:55" },
      { text: "Stoc alertă: Produs Beta Pro · 7 buc", time: "09:30" },
    ],
  },
};

export function IndustrySystemMockup({ variant }: { variant: IndustryVariant }) {
  const data = variantData[variant];

  return (
    <MockupShell title={data.title} eyebrow={data.eyebrow} wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--s-4)" }}>
        {/* Modules grid */}
        <Panel title="Module sistem" meta={`${data.modules.length} active`}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {data.modules.map((mod) => {
              const bg =
                mod.status === "ok"
                  ? "rgba(132,204,22,0.06)"
                  : mod.status === "warn"
                  ? "rgba(245,158,11,0.06)"
                  : "rgba(59,130,246,0.06)";
              const border =
                mod.status === "ok"
                  ? "rgba(132,204,22,0.18)"
                  : mod.status === "warn"
                  ? "rgba(245,158,11,0.2)"
                  : "rgba(59,130,246,0.18)";
              const dotColor =
                mod.status === "ok" ? "var(--accent)" : mod.status === "warn" ? "#fbbf24" : "#60a5fa";

              return (
                <div
                  key={mod.label}
                  style={{
                    padding: "7px 9px",
                    borderRadius: 6,
                    background: bg,
                    border: `1px solid ${border}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 5, marginBottom: 3 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: dotColor, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: 10, fontWeight: 600, color: "var(--fg-1)", lineHeight: 1.3 }}>{mod.label}</span>
                  </div>
                  <span className="mono" style={{ fontSize: 8, color: "var(--fg-4)", paddingLeft: 11 }}>{mod.sub}</span>
                </div>
              );
            })}
          </div>
        </Panel>

        {/* Activity sidebar */}
        <div style={{ width: 160, display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Activitate live" meta="azi">
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {data.activity.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "6px 7px",
                    background: i === 0 ? "rgba(132,204,22,0.06)" : "var(--bg-2)",
                    border: `1px solid ${i === 0 ? "rgba(132,204,22,0.2)" : "var(--line-1)"}`,
                    borderRadius: 5,
                  }}
                >
                  <div style={{ fontSize: 9, color: "var(--fg-1)", lineHeight: 1.3, marginBottom: 2 }}>{item.text}</div>
                  <div className="mono" style={{ fontSize: 8, color: "var(--fg-4)" }}>{item.time}</div>
                </div>
              ))}
            </div>
          </Panel>

          <div style={{ padding: "8px", background: "rgba(132,204,22,0.06)", border: "1px solid rgba(132,204,22,0.18)", borderRadius: 6 }}>
            <StatusBadge tone="ok">sistem activ</StatusBadge>
            <div className="mono" style={{ fontSize: 8, color: "var(--fg-4)", marginTop: 6 }}>
              Construit pe procesele tale reale.
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}

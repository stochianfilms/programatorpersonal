import { Package, RefreshCw, Truck } from "lucide-react";
import { Field, MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const orders = [
  { id: "ORD-4421", client: "Elena Ionescu", items: 3, value: "1.240 RON", status: "ok" as const, statusLabel: "Livrat" },
  { id: "ORD-4420", client: "Andrei Popescu", items: 1, value: "450 RON", status: "accent" as const, statusLabel: "În livrare" },
  { id: "ORD-4419", client: "Maria Dima", items: 5, value: "3.800 RON", status: "warn" as const, statusLabel: "Procesare" },
  { id: "ORD-4418", client: "ShopNova Client", items: 2, value: "870 RON", status: "ok" as const, statusLabel: "Livrat" },
];

const inventory = [
  { name: "Produs Alpha X200", stock: 42, reserved: 8, alert: false },
  { name: "Produs Beta Pro", stock: 7, reserved: 7, alert: true },
  { name: "Produs Gamma Plus", stock: 89, reserved: 12, alert: false },
  { name: "Produs Delta V2", stock: 3, reserved: 3, alert: true },
];

export function EcommerceOpsMockup() {
  return (
    <MockupShell title="Operațiuni magazin online" eyebrow="shopnova.ro · e-commerce ops" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Orders */}
        <Panel title="Comenzi recente" meta={`${orders.length} azi`}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {orders.map((o) => (
              <div
                key={o.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 8px",
                  background: "var(--bg-2)",
                  border: "1px solid var(--line-1)",
                  borderRadius: 5,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                    <span className="mono" style={{ fontSize: 10, color: "var(--accent)" }}>{o.id}</span>
                    <StatusBadge tone={o.status}>{o.statusLabel}</StatusBadge>
                  </div>
                  <div style={{ fontSize: 10, color: "var(--fg-2)" }}>{o.client} · {o.items} produse</div>
                </div>
                <span className="mono" style={{ fontSize: 10, color: "var(--fg-1)", fontWeight: 600, whiteSpace: "nowrap" }}>{o.value}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <div style={{ flex: 1, textAlign: "center", padding: "6px", background: "var(--bg-2)", borderRadius: 4, border: "1px solid var(--line-1)" }}>
              <Truck size={12} style={{ color: "var(--accent)", marginBottom: 2, display: "block", margin: "0 auto 2px" }} />
              <span className="mono" style={{ fontSize: 9, color: "var(--fg-3)" }}>AWB auto</span>
            </div>
            <div style={{ flex: 1, textAlign: "center", padding: "6px", background: "var(--bg-2)", borderRadius: 4, border: "1px solid var(--line-1)" }}>
              <RefreshCw size={12} style={{ color: "var(--accent)", margin: "0 auto 2px", display: "block" }} />
              <span className="mono" style={{ fontSize: 9, color: "var(--fg-3)" }}>Retururi</span>
            </div>
            <div style={{ flex: 1, textAlign: "center", padding: "6px", background: "var(--bg-2)", borderRadius: 4, border: "1px solid var(--line-1)" }}>
              <Package size={12} style={{ color: "var(--accent)", margin: "0 auto 2px", display: "block" }} />
              <span className="mono" style={{ fontSize: 9, color: "var(--fg-3)" }}>Stoc</span>
            </div>
          </div>
        </Panel>

        {/* Inventory + stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          <Panel title="Inventar produse" meta="alertă stoc mic">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {inventory.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "5px 7px",
                    background: item.alert ? "rgba(245,158,11,0.06)" : "var(--bg-2)",
                    border: `1px solid ${item.alert ? "rgba(245,158,11,0.2)" : "var(--line-1)"}`,
                    borderRadius: 5,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: "var(--fg-1)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span className="mono" style={{ fontSize: 10, color: item.alert ? "#fbbf24" : "var(--fg-2)" }}>{item.stock}</span>
                    {item.alert && <StatusBadge tone="warn">scăzut</StatusBadge>}
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Statistici azi" meta="live">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Field label="Comenzi azi" value="18" />
              <Field label="Valoare totală" value={<span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>6.360 RON</span>} />
              <Field label="Conversie cart" value="3.4%" />
              <Field label="Retururi" value="1 (5.5%)" />
            </div>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}

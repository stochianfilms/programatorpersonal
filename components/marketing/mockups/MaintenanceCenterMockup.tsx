import { AlertCircle, CheckCircle, RefreshCw, Shield } from "lucide-react";
import { MockupShell, Panel, StatusBadge, TimelineItem } from "./MockupPrimitives";

const services_list = [
  { name: "API principal", uptime: "99.98%", latency: "42ms", ok: true },
  { name: "Baza de date", uptime: "100%", latency: "8ms", ok: true },
  { name: "Worker automatizări", uptime: "99.91%", latency: "—", ok: true },
  { name: "Storage fișiere", uptime: "99.99%", latency: "18ms", ok: true },
  { name: "Serviciu email", uptime: "99.8%", latency: "—", ok: true },
];

export function MaintenanceCenterMockup() {
  return (
    <MockupShell title="Centru mentenanță · monitoring" eyebrow="status.firma.ro · mentenanță activă" wide>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        {/* Services status */}
        <Panel title="Status servicii" meta="5/5 online">
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {services_list.map((svc) => (
              <div
                key={svc.name}
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
                <CheckCircle size={11} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 11, color: "var(--fg-1)" }}>{svc.name}</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--accent)" }}>{svc.uptime}</span>
                {svc.latency !== "—" && (
                  <span className="mono" style={{ fontSize: 9, color: "var(--fg-4)" }}>{svc.latency}</span>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8 }}>
            <StatusBadge tone="ok">toate sistemele online</StatusBadge>
          </div>
        </Panel>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
          {/* Recent activity */}
          <Panel title="Activitate recentă" meta="timeline">
            <div className="op-timeline">
              <TimelineItem title="Deploy reușit" meta="azi 03:00" body="v2.4.1 — îmbunătățiri performanță." active />
              <TimelineItem title="Backup automat" meta="azi 02:00" body="Backup zilnic finalizat. 2.3 GB." />
              <TimelineItem title="Certificate SSL" meta="10 mai" body="Reînnoit automat. Valid 365 zile." />
              <TimelineItem title="Alertă rezolvată" meta="8 mai" body="Latență crescută API — remediat." />
            </div>
          </Panel>

          {/* Metrics */}
          <Panel title="Protecție și securitate" meta="active">
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                { icon: Shield, label: "SSL / HTTPS", value: "valid · 341 zile" },
                { icon: RefreshCw, label: "Backup automat", value: "zilnic · 03:00" },
                { icon: AlertCircle, label: "Monitorizare 24/7", value: "activ" },
                { icon: CheckCircle, label: "Ultima intervenție", value: "ieri 18:42" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <Icon size={10} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: 10, color: "var(--fg-3)" }}>{label}</span>
                  <span className="mono" style={{ fontSize: 9, color: "var(--fg-2)" }}>{value}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </MockupShell>
  );
}

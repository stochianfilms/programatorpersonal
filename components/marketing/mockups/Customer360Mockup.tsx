import { FileText, PackageCheck, Phone, ShoppingBag, TicketCheck } from "lucide-react";
import { Field, MockupShell, Panel, StatusBadge, TimelineItem } from "./MockupPrimitives";

const tabs = ["Overview", "Tickete", "Produse", "Documente", "Timeline"];

export function Customer360Mockup() {
  return (
    <MockupShell title="Vedere completă client" eyebrow="crm / customer 360" wide>
      <div className="op-tabs op-tabs-top">
        {tabs.map((tab, index) => (
          <button key={tab} className={index === 0 ? "active" : ""}>{tab}</button>
        ))}
      </div>
      <div className="op-c360-grid">
        <Panel title="Profil client" meta="Studio Frame">
          <div className="op-customer-card op-customer-large">
            <div className="op-avatar">EI</div>
            <div>
              <strong>Elena Ionescu</strong>
              <span>elena.ionescu@example.com</span>
              <span><Phone size={12} /> +40 700 000 202</span>
            </div>
          </div>
          <div className="op-field-grid">
            <Field label="Status" value={<StatusBadge tone="ok">client activ</StatusBadge>} />
            <Field label="Responsabil" value="Maria Dima" />
            <Field label="Ultima comandă" value="15 apr. 2026" />
            <Field label="Contract" value="Service Plus" />
          </div>
        </Panel>
        <Panel title="Activitate" meta="live">
          <div className="op-metric-grid">
            <div><TicketCheck size={16} /><strong>3</strong><span>tickete active</span></div>
            <div><PackageCheck size={16} /><strong>5</strong><span>produse</span></div>
            <div><ShoppingBag size={16} /><strong>12</strong><span>comenzi</span></div>
            <div><FileText size={16} /><strong>2</strong><span>contracte</span></div>
          </div>
          <div className="op-status-table">
            {[
              ["SRV-3065981", "La service autorizat", "accent"],
              ["CRM-2044", "Așteaptă client", "warn"],
              ["DOC-8840", "Semnat", "ok"],
            ].map(([id, label, tone]) => (
              <div key={id}>
                <span className="mono">{id}</span>
                <StatusBadge tone={tone as "accent" | "ok" | "warn"}>{label}</StatusBadge>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Ultimele interacțiuni" meta="timeline">
          <div className="op-timeline">
            <TimelineItem title="Email primit" meta="azi 09:30" body="Solicitare status garanție." active />
            <TimelineItem title="Comandă finalizată" meta="15 apr." body="Produs fictiv OrbitView 27 livrat." />
            <TimelineItem title="Contract actualizat" meta="02 apr." body="Service Plus prelungit." />
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

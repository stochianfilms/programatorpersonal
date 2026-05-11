import { FilePlus, Mail, MessageSquarePlus, Paperclip, RefreshCw } from "lucide-react";
import { Field, MiniButton, MockupShell, Panel, StatusBadge, TimelineItem } from "./MockupPrimitives";

const actions = [
  { label: "Trimite email", icon: Mail, primary: true },
  { label: "Schimbă status", icon: RefreshCw },
  { label: "Adaugă comentariu", icon: MessageSquarePlus },
  { label: "Generează deviz", icon: FilePlus },
  { label: "Atașează document", icon: Paperclip },
];

export function ServiceTicketDashboardMockup() {
  return (
    <MockupShell title="Fișă service modernă" eyebrow="service desk / SRV-3065981" wide>
      <div className="op-record-strip">
        <div><span>Fișă</span><strong>SRV-3065981</strong></div>
        <div><span>Tip recepție</span><strong>Recepție RMA</strong></div>
        <div><span>Vendor</span><strong>Nova Service</strong></div>
        <div><span>Data deschidere</span><strong>11 mai 2026, 09:12</strong></div>
        <div><span>Status curent</span><strong>La service autorizat</strong></div>
      </div>
      <div className="op-service-grid">
        <Panel title="Client + produs" meta="Nova Service" className="op-service-left">
          <div className="op-customer-card">
            <div className="op-avatar">AP</div>
            <div>
              <strong>Andrei Popescu</strong>
              <span>andrei.popescu@example.com</span>
              <span>+40 700 000 101</span>
            </div>
          </div>
          <div className="op-field-grid">
            <Field label="Produs" value="AeroBook Pro 15" />
            <Field label="Serie internă" value="NB-FICT-9281" />
            <Field label="Defect reclamat" value="Display cu flicker intermitent" />
            <Field label="Stare produs" value="Recepționat · stare bună" />
            <Field label="Garanție" value={<StatusBadge tone="accent">Garanție extinsă</StatusBadge>} />
            <Field label="Prioritate" value={<StatusBadge tone="warn">Ridicată</StatusBadge>} />
            <Field label="Responsabil" value="Maria Dima" />
            <Field label="Următor pas" value="Așteaptă răspuns service autorizat" />
          </div>
        </Panel>

        <Panel title="Status + timeline" meta="actualizat acum 18 min" className="op-service-center">
          <div className="op-ticket-hero">
            <div>
              <span className="mono">SRV-3065981</span>
              <h4>Display cu flicker intermitent</h4>
            </div>
            <StatusBadge tone="accent">La service autorizat</StatusBadge>
          </div>
          <div className="op-progress">
            {["Recepție", "Diagnostic", "SA", "Deviz", "Predare"].map((step, index) => (
              <span key={step} className={index < 3 ? "done" : ""}>
                {step}
              </span>
            ))}
          </div>
          <div className="op-timeline">
            <TimelineItem title="Fișă creată" meta="09:12" body="Solicitare din formular client." />
            <TimelineItem title="Diagnostic tehnic" meta="10:40" body="Simptom confirmat la test de stres." />
            <TimelineItem title="Trimis către service autorizat" meta="12:15" active body="AWB fictiv atașat și SLA pornit." />
          </div>
          <div className="op-data-table" style={{ marginTop: 12 }}>
            <div className="op-data-row op-data-head">
              <span>Ora</span><span>Tip</span><span>Eveniment</span><span>Responsabil</span>
            </div>
            {[
              ["09:12", "STAT", "recepție: fișă creată", "Maria Dima"],
              ["09:46", "INFO", "produs recepționat și verificat vizual", "Andrei Popescu"],
              ["10:40", "DIAG", "diagnostic: eroare panel ecran", "Maria Dima"],
              ["12:15", "STAT", "trimis către service autorizat", "Maria Dima"],
            ].map(([time, type, event, owner]) => (
              <div key={`${time}-${event}`} className="op-data-row">
                <span className="mono">{time}</span>
                <StatusBadge tone={type === "DIAG" ? "warn" : type === "STAT" ? "accent" : "neutral"}>{type}</StatusBadge>
                <span>{event}</span>
                <span>{owner}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Acțiuni + documente" meta="5 acțiuni" className="op-service-right">
          <div className="op-field-grid op-field-grid-one" style={{ marginBottom: 12 }}>
            <Field label="SLA rămas" value="18h 20m" />
            <Field label="Următor reminder" value="12 mai, 10:00" />
          </div>
          <div className="op-action-list">
            {actions.map((action) => (
              <MiniButton key={action.label} primary={action.primary}>
                <action.icon size={14} />
                {action.label}
              </MiniButton>
            ))}
          </div>
          <div className="op-doc-list">
            {["Proces verbal recepție.pdf", "Poze produs.zip", "Deviz preliminar.pdf"].map((doc) => (
              <div key={doc}>
                <Paperclip size={13} />
                <span>{doc}</span>
                <StatusBadge>atașat</StatusBadge>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

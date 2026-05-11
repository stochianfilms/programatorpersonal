import { ArrowRight, MailCheck, Send, Sparkles, UserPlus } from "lucide-react";
import { Field, MiniButton, MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const inbox = [
  { from: "Elena Ionescu", subject: "Solicitare garanție monitor", active: true },
  { from: "Andrei Popescu", subject: "Update fișă SRV-3065981" },
  { from: "Maria Dima", subject: "Comentariu intern deviz" },
];

export function EmailToTicketMockup() {
  return (
    <MockupShell title="Email transformat în ticket" eyebrow="inbox automation / example.com" wide>
      <div className="op-email-grid">
        <Panel title="Inbox" meta="3 emailuri">
          <div className="op-inbox-list">
            {inbox.map((mail) => (
              <div key={mail.subject} className={mail.active ? "active" : ""}>
                <span>{mail.from}</span>
                <strong>{mail.subject}</strong>
                <small>{mail.from.toLowerCase().replace(" ", ".")}@example.com</small>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Ticket nou" meta="draft automat">
          <div className="op-summary-box">
            <Sparkles size={15} />
            <p>Rezumat automat: clientul solicită verificarea garanției extinse pentru un monitor fictiv OrbitView 27 și cere status estimativ.</p>
          </div>
          <div className="op-field-grid">
            <Field label="Categorie detectată" value={<StatusBadge tone="accent">Garanție / RMA</StatusBadge>} />
            <Field label="Prioritate" value={<StatusBadge tone="warn">Medie</StatusBadge>} />
            <Field label="SLA" value="24h pornit" />
            <Field label="Responsabil" value="Maria Dima" />
          </div>
          <div className="op-flow">
            {["Email client", "Ticket nou", "Responsabil alocat", "SLA pornit", "Răspuns pregătit"].map((step, index) => (
              <div key={step}>
                <span>{step}</span>
                {index < 4 ? <ArrowRight size={13} /> : null}
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Context client" meta="Customer 360">
          <div className="op-customer-card">
            <div className="op-avatar">EI</div>
            <div>
              <strong>Elena Ionescu</strong>
              <span>elena.ionescu@example.com</span>
              <span>+40 700 000 202</span>
            </div>
          </div>
          <div className="op-template">
            <strong>Template răspuns</strong>
            <p>Bună, Elena. Am deschis ticketul și verificăm eligibilitatea garanției extinse. Revenim cu status în termenul SLA.</p>
          </div>
          <div className="op-action-list">
            <MiniButton primary><MailCheck size={14} /> Creează ticket</MiniButton>
            <MiniButton><UserPlus size={14} /> Alocă responsabil</MiniButton>
            <MiniButton><Send size={14} /> Trimite răspuns</MiniButton>
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

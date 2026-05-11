import { MessageSquare, Mail, Stethoscope, TimerReset } from "lucide-react";
import { MockupShell, Panel, StatusBadge, TimelineItem } from "./MockupPrimitives";

const filters = ["Toate", "Statusuri", "Emailuri", "Comentarii", "Diagnostic"];
const events = [
  { title: "Fișă creată", meta: "09:12", body: "Andrei Popescu a trimis solicitarea inițială.", tone: "ok" },
  { title: "Produs recepționat", meta: "09:46", body: "Produs verificat vizual și introdus în flux.", tone: "ok" },
  { title: "Diagnostic tehnic", meta: "10:40", body: "Test ecran, alimentare și modul video.", tone: "accent" },
  { title: "Client notificat", meta: "11:05", body: "Email generat din template service.", tone: "neutral" },
  { title: "Trimis către service autorizat", meta: "12:15", body: "Cod RMA și AWB fictiv conectate.", tone: "warn" },
  { title: "Comentariu intern", meta: "13:20", body: "Maria Dima: verificăm disponibilitatea piesei.", tone: "neutral" },
  { title: "Follow-up programat", meta: "mâine 10:00", body: "Notificare automată pentru responsabil.", tone: "accent" },
];

export function TicketTimelineMockup() {
  return (
    <MockupShell title="Istoric fișă" eyebrow="timeline / audit trail" wide>
      <Panel title="Filtre evenimente" meta="SRV-3065981">
        <div className="op-tabs">
          {filters.map((filter, index) => (
            <button key={filter} className={index === 0 ? "active" : ""}>{filter}</button>
          ))}
        </div>
      </Panel>
      <div className="op-data-table" style={{ marginTop: 12 }}>
        <div className="op-data-row op-data-head">
          <span>Data</span><span>User</span><span>Tip</span><span>Mesaj operațional</span><span>Acțiune</span>
        </div>
        {[
          ["11 mai 09:12", "Maria Dima", "STATUS", "Fișă creată din email client", "deschide"],
          ["11 mai 09:46", "Andrei Popescu", "INFO", "Produs recepționat și etichetat", "vezi"],
          ["11 mai 10:40", "Maria Dima", "DIAG", "Diagnostic tehnic: panel ecran instabil", "detalii"],
          ["11 mai 11:05", "Sistem", "EMAIL", "Client notificat cu status Diagnosticat", "mesaj"],
          ["11 mai 12:15", "Maria Dima", "STATUS", "Trimis către service autorizat", "AWB"],
        ].map(([date, user, type, message, action]) => (
          <div key={`${date}-${message}`} className="op-data-row">
            <span className="mono">{date}</span>
            <span>{user}</span>
            <StatusBadge tone={type === "DIAG" ? "warn" : type === "STATUS" ? "accent" : "neutral"}>{type}</StatusBadge>
            <span>{message}</span>
            <span className="mono" style={{ color: "var(--accent)" }}>{action}</span>
          </div>
        ))}
      </div>
      <div className="op-timeline-layout">
        <Panel title="Cronologie completă" meta="7 evenimente">
          <div className="op-timeline op-timeline-large">
            {events.map((event, index) => (
              <TimelineItem key={event.title} title={event.title} meta={event.meta} body={event.body} active={index === 4} />
            ))}
          </div>
        </Panel>
        <Panel title="Semnale" meta="context">
          <div className="op-signal-list">
            <div><Stethoscope size={15} /><span>Diagnostic complet</span><StatusBadge tone="ok">validat</StatusBadge></div>
            <div><Mail size={15} /><span>Email client</span><StatusBadge>trimis</StatusBadge></div>
            <div><MessageSquare size={15} /><span>Comentarii interne</span><StatusBadge tone="accent">2 noi</StatusBadge></div>
            <div><TimerReset size={15} /><span>SLA rămas</span><StatusBadge tone="warn">18h</StatusBadge></div>
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

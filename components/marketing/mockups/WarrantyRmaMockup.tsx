import { BadgeCheck, Truck } from "lucide-react";
import { Field, MockupShell, Panel, StatusBadge } from "./MockupPrimitives";

const flow = ["Recepție", "Diagnostic", "Trimis SA", "Răspuns SA", "Rezolvare", "Predare"];

export function WarrantyRmaMockup() {
  return (
    <MockupShell title="Garanții și RMA" eyebrow="warranty / rma" wide>
      <div className="op-record-strip">
        <div><span>Cod RMA</span><strong>RMA-FICT-88421</strong></div>
        <div><span>Fișă legată</span><strong>SRV-3065981</strong></div>
        <div><span>Garanție</span><strong>Extinsă · validă</strong></div>
        <div><span>Service autorizat</span><strong>Nova Service Partner</strong></div>
      </div>
      <div className="op-rma-grid">
        <Panel title="Eligibilitate" meta="automat">
          <div className="op-rma-check">
            <BadgeCheck size={28} />
            <div>
              <strong>Garanție extinsă</strong>
              <StatusBadge tone="ok">eligibilitate validă</StatusBadge>
            </div>
          </div>
          <div className="op-field-grid">
            <Field label="Data achiziție" value="14 martie 2026" />
            <Field label="Service autorizat" value="Nova Service Partner" />
            <Field label="Cod RMA" value="RMA-FICT-88421" />
            <Field label="AWB" value="AWB-EX-552901" />
            <Field label="Produs" value="AeroBook Pro 15" />
            <Field label="Defect raportat" value="Display flicker / panel" />
          </div>
        </Panel>
        <Panel title="Status flow" meta="6 pași">
          <div className="op-rma-flow">
            {flow.map((step, index) => (
              <div key={step} className={index < 3 ? "done" : index === 3 ? "active" : ""}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Expediere" meta="urmărire">
          <div className="op-shipment">
            <Truck size={18} />
            <div>
              <strong>Colet predat curierului</strong>
              <span>AWB fictiv conectat la fișa SRV-3065981.</span>
            </div>
          </div>
          <div className="op-data-table" style={{ marginTop: 12 }}>
            <div className="op-data-row op-data-head">
              <span>Pas</span><span>Status</span><span>Detalii</span>
            </div>
            {[
              ["Recepție", "gata", "produs primit în sediu"],
              ["Diagnostic", "gata", "defect confirmat"],
              ["Trimis SA", "activ", "AWB-EX-552901"],
              ["Răspuns SA", "urmează", "așteaptă confirmare"],
            ].map(([step, status, detail]) => (
              <div key={step} className="op-data-row">
                <span>{step}</span>
                <StatusBadge tone={status === "activ" ? "accent" : status === "gata" ? "ok" : "neutral"}>{status}</StatusBadge>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </MockupShell>
  );
}

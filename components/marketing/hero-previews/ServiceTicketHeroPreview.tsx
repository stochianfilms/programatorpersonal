import { Mail, MessageSquare } from "lucide-react";
import { HeroPreviewShell, PreviewBadge, PreviewCard } from "./HeroPreviewPrimitives";

const steps = ["Creat", "Diagnostic", "La service autorizat"];

export function ServiceTicketHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="service desk" title="SRV-3065981">
      <PreviewCard className="hero-preview-highlight">
        <div className="hero-preview-row">
          <div>
            <span>Client</span>
            <strong>Andrei Popescu</strong>
          </div>
          <PreviewBadge tone="accent">La service autorizat</PreviewBadge>
        </div>
        <p>Produs fictiv OrbitView 27 · Garanție extinsă</p>
      </PreviewCard>
      <div className="hero-preview-steps">
        {steps.map((step, index) => (
          <div key={step} className={index === steps.length - 1 ? "active" : ""}>
            <span>{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <div className="hero-preview-actions">
        <button><Mail size={14} /> Trimite email</button>
        <button><MessageSquare size={14} /> Comentariu</button>
      </div>
    </HeroPreviewShell>
  );
}

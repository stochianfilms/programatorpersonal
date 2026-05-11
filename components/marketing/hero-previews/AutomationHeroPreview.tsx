import { Bell, Mail, TicketCheck, UserCheck } from "lucide-react";
import { HeroPreviewShell } from "./HeroPreviewPrimitives";

const nodes = [
  { icon: Mail, label: "Email primit" },
  { icon: TicketCheck, label: "Ticket creat" },
  { icon: UserCheck, label: "Responsabil alocat" },
  { icon: Bell, label: "Client notificat" },
];

export function AutomationHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="workflow automation" title="Email → proces">
      <div className="hero-preview-flow">
        {nodes.map(({ icon: Icon, label }, index) => (
          <div key={label}>
            <span><Icon size={15} /></span>
            <strong>{label}</strong>
            {index < nodes.length - 1 ? <i aria-hidden /> : null}
          </div>
        ))}
      </div>
    </HeroPreviewShell>
  );
}

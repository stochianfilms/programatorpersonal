import { CalendarCheck, MailCheck, Phone } from "lucide-react";
import { HeroPreviewShell, PreviewBadge, PreviewCard } from "./HeroPreviewPrimitives";

const interactions = [
  { icon: MailCheck, label: "Email primit", time: "azi" },
  { icon: Phone, label: "Apel follow-up", time: "ieri" },
  { icon: CalendarCheck, label: "Demo programat", time: "vineri" },
];

export function CustomerHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="customer 360" title="Profil client">
      <PreviewCard className="hero-preview-highlight">
        <div className="hero-preview-customer">
          <div className="hero-preview-avatar">EI</div>
          <div>
            <strong>Elena Ionescu</strong>
            <span>elena.ionescu@example.com</span>
          </div>
          <PreviewBadge tone="ok">client activ</PreviewBadge>
        </div>
      </PreviewCard>
      <div className="hero-preview-list">
        {interactions.map(({ icon: Icon, label, time }) => (
          <div key={label}>
            <Icon size={14} />
            <span>{label}</span>
            <small>{time}</small>
          </div>
        ))}
      </div>
      <PreviewCard>
        <div className="hero-preview-row">
          <span>Următor pas</span>
          <strong>Follow-up contract</strong>
        </div>
      </PreviewCard>
    </HeroPreviewShell>
  );
}

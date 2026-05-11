import { CalendarDays, FileSignature, LayoutDashboard, ShieldCheck, UsersRound } from "lucide-react";
import { HeroPreviewShell } from "./HeroPreviewPrimitives";

const modules = [
  { icon: UsersRound, label: "CRM" },
  { icon: FileSignature, label: "Contracte" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: CalendarDays, label: "Calendar" },
  { icon: ShieldCheck, label: "Portal" },
];

export function GenericSystemHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="business os" title="Sistem operațional">
      <div className="hero-preview-map">
        {modules.map(({ icon: Icon, label }, index) => (
          <div key={label} className={index === 2 ? "active" : ""}>
            <Icon size={16} />
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </HeroPreviewShell>
  );
}

import { BarChart3, FileText, UsersRound, Workflow } from "lucide-react";
import { HeroPreviewShell } from "./HeroPreviewPrimitives";

const modules = [
  { icon: UsersRound, label: "Clienți" },
  { icon: FileText, label: "Documente" },
  { icon: Workflow, label: "Statusuri" },
  { icon: BarChart3, label: "Rapoarte" },
];

export function IndustryHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="sistem modular" title="Operațiuni clare">
      <div className="hero-preview-module-grid">
        {modules.map(({ icon: Icon, label }) => (
          <div key={label}>
            <Icon size={18} />
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </HeroPreviewShell>
  );
}

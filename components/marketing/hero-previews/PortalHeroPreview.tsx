import { FileText, MessageCircle, PackageCheck } from "lucide-react";
import { HeroPreviewShell, PreviewBadge, PreviewCard } from "./HeroPreviewPrimitives";

export function PortalHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="portal client" title="Status proiect">
      <PreviewCard className="hero-preview-highlight">
        <div className="hero-preview-row">
          <div>
            <span>Studio Frame</span>
            <strong>Portal privat</strong>
          </div>
          <PreviewBadge tone="accent">68% progres</PreviewBadge>
        </div>
      </PreviewCard>
      <div className="hero-preview-list">
        <div><PackageCheck size={14} /><span>Livrabile aprobate</span><small>4/6</small></div>
        <div><FileText size={14} /><span>Documente noi</span><small>2</small></div>
        <div><MessageCircle size={14} /><span>Mesaje deschise</span><small>1</small></div>
      </div>
    </HeroPreviewShell>
  );
}

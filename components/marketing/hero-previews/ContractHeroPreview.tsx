import { FileCheck, FileText, PenLine } from "lucide-react";
import { HeroPreviewShell, PreviewBadge, PreviewCard } from "./HeroPreviewPrimitives";

export function ContractHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="contracte" title="Generator documente">
      <PreviewCard className="hero-preview-highlight">
        <div className="hero-preview-row">
          <div>
            <span>Client</span>
            <strong>Nova Service</strong>
          </div>
          <PreviewBadge tone="accent">PDF pregătit</PreviewBadge>
        </div>
      </PreviewCard>
      <div className="hero-preview-list">
        <div><FileText size={14} /><span>Date client completate</span><small>auto</small></div>
        <div><PenLine size={14} /><span>Clauze selectate</span><small>3</small></div>
        <div><FileCheck size={14} /><span>Semnare pregătită</span><small>azi</small></div>
      </div>
    </HeroPreviewShell>
  );
}

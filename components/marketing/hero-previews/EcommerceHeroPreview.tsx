import { PackageCheck, ReceiptText, Truck } from "lucide-react";
import { HeroPreviewShell, PreviewBadge, PreviewCard } from "./HeroPreviewPrimitives";

export function EcommerceHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="e-commerce ops" title="Comandă #SN-2048">
      <PreviewCard className="hero-preview-highlight">
        <div className="hero-preview-row">
          <div>
            <span>ShopNova</span>
            <strong>3 produse · 1 retur posibil</strong>
          </div>
          <PreviewBadge tone="ok">în procesare</PreviewBadge>
        </div>
      </PreviewCard>
      <div className="hero-preview-list">
        <div><PackageCheck size={14} /><span>Stoc rezervat</span><small>live</small></div>
        <div><ReceiptText size={14} /><span>Factură generată</span><small>auto</small></div>
        <div><Truck size={14} /><span>AWB pregătit</span><small>curier</small></div>
      </div>
    </HeroPreviewShell>
  );
}

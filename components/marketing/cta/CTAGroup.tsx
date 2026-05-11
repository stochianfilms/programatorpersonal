import { PrimaryCTA } from "./PrimaryCTA";
import { SecondaryCTA } from "./SecondaryCTA";

export function CTAGroup({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  align = "start",
  size = "default",
  showSecondary = true,
}: {
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "start" | "center" | "end";
  size?: "default" | "compact";
  showSecondary?: boolean;
}) {
  return (
    <div className={`pp-cta-group pp-cta-group-${align} pp-cta-group-${size}`}>
      <PrimaryCTA label={primaryLabel} href={primaryHref} />
      {showSecondary ? <SecondaryCTA label={secondaryLabel} href={secondaryHref} /> : null}
    </div>
  );
}

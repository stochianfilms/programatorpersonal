import { ReactNode } from "react";
import { MarketingShell } from "@/components/marketing/MarketingShell";

export interface PageTemplateSection {
  id?: string;
  component: ReactNode;
}

interface PageTemplateProps {
  hero: ReactNode;
  sections?: PageTemplateSection[];
  cta?: ReactNode;
}

/**
 * PageTemplate provides a consistent layout for marketing pages:
 * Hero section at top, optional middle sections, CTA at bottom.
 * Wraps everything in MarketingShell (header/footer).
 */
export function PageTemplate({ hero, sections = [], cta }: PageTemplateProps) {
  return (
    <MarketingShell>
      {hero}
      {sections.map((section, index) => (
        <section key={section.id ?? `section-${index}`} className="section">
          {section.component}
        </section>
      ))}
      {cta && <section className="section">{cta}</section>}
    </MarketingShell>
  );
}

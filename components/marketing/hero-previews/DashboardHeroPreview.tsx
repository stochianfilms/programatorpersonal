import { HeroPreviewShell, PreviewMetric } from "./HeroPreviewPrimitives";

const bars = [42, 58, 38, 72, 64, 86, 78];

export function DashboardHeroPreview() {
  return (
    <HeroPreviewShell eyebrow="dashboard" title="Luna aceasta">
      <div className="hero-preview-metrics">
        <PreviewMetric label="Fișe active" value="128" />
        <PreviewMetric label="În SLA" value="92%" />
        <PreviewMetric label="Finalizate" value="46" />
      </div>
      <div className="hero-preview-chart" aria-hidden>
        {bars.map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
    </HeroPreviewShell>
  );
}

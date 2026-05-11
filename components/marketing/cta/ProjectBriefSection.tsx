import { ServiceContactForm } from "@/components/marketing/ServiceContactForm";

export function ProjectBriefSection({
  title,
  text,
  sourcePage,
  ctaText,
  serviceName,
}: {
  title: string;
  text?: string;
  sourcePage: string;
  ctaText: string;
  serviceName: string;
}) {
  return (
    <section className="section pp-final" id="contact">
      <div className="container">
        <div className="pp-final-card">
          <div className="pp-final-grid-bg" />
          <div className="pp-final-content">
            <div className="chip" style={{ marginBottom: 24 }}>
              <span className="dot" /> răspund în 24h, în zilele lucrătoare
            </div>
            <h2 className="h-1" style={{ marginBottom: "var(--s-4)" }}>
              {title}
            </h2>
            <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
              {text ?? "Spune-mi ce problemă vrei să rezolvi. Îți propun o soluție clară și realistă — fără audit de 2 săptămâni."}
            </p>
            <ServiceContactForm
              sourcePage={sourcePage}
              ctaText={ctaText}
              serviceName={serviceName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

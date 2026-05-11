import { Arrow } from "./atoms/Icons";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="section pp-final" id="contact">
      <div className="container">
        <div className="pp-final-card">
          <div className="pp-final-grid-bg" />
          <div className="pp-final-content">
            <div className="chip" style={{ marginBottom: 24 }}>
              <span className="dot" /> răspund în 24h, în zilele lucrătoare
            </div>
            <h2 className="h-display pp-final-title">
              Ai o idee, un proces haotic
              <br />
              <span className="serif" style={{ color: "var(--accent)" }}>sau o firmă care are nevoie</span>
              <br />
              de ordine digitală?
            </h2>
            <p className="lead pp-final-sub">
              Spune-mi ce vrei să rezolvi. Îți pot propune o variantă simplă, clară și realistă de implementare. Fără audit de 2 săptămâni. Fără propunere de 40 de pagini.
            </p>
            <div className="pp-final-ctas">
              <a href={siteConfig.ctas.primary.href} className="btn btn-primary">
                {siteConfig.ctas.primary.label} <Arrow />
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="btn btn-secondary">
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="pp-final-meta">
              <div>
                <div className="eyebrow">disponibilitate</div>
                <div className="pp-final-meta-v">L-V · 09:00 — 19:00</div>
              </div>
              <div>
                <div className="eyebrow">răspuns</div>
                <div className="pp-final-meta-v">
                  în 24h, în zilele lucrătoare
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

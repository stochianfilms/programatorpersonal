import { Arrow } from "./atoms/Icons";

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
              <a href="mailto:hai@programatorpersonal.ro" className="btn btn-primary">
                Începem cu o discuție <Arrow />
              </a>
              <a href="#" className="btn btn-secondary">
                hai@programatorpersonal.ro
              </a>
            </div>
            <div className="pp-final-meta">
              <div>
                <div className="eyebrow">disponibilitate</div>
                <div className="pp-final-meta-v">L-V · 09:00 — 19:00</div>
              </div>
              <div>
                <div className="eyebrow">apel direct</div>
                <div className="pp-final-meta-v mono">+40 7XX XXX XXX</div>
              </div>
              <div>
                <div className="eyebrow">capacitate luna</div>
                <div className="pp-final-meta-v">
                  <span style={{ color: "var(--accent)" }}>2 sloturi</span> disponibile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionHead } from "./atoms/SectionHead";
import { Check } from "./atoms/Icons";

const points = [
  "Explicăm pe înțelesul tău",
  "Construim exact ce ai nevoie",
  "Fără funcții inutile",
  "Cod curat și ușor de extins",
  "Comunicare directă, fără ticket-uri",
  "Gândire de business, nu doar execuție tehnică",
];

export function TrustSection() {
  return (
    <section className="section pp-trust">
      <div className="container">
        <div className="pp-trust-grid">
          <div>
            <SectionHead
              num="07"
              eyebrow="diferența"
              title={<>Nu primești doar cod. <br /><span className="serif" style={{ color: "var(--accent)" }}>Primești claritate.</span></>}
            />
            <p className="lead" style={{ maxWidth: 560 }}>
              Codul e partea ușoară. Partea grea e să înțelegi cum funcționează cu adevărat firma ta și să construiești ceva care chiar te ajută. Asta primești când lucrezi cu Programator Personal.
            </p>
          </div>
          <div className="pp-trust-list">
            {points.map((p, i) => (
              <div key={i} className="pp-trust-item">
                <div className="pp-trust-check">
                  <Check size={12} />
                </div>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

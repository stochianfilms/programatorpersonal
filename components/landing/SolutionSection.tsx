import { SectionHead } from "./atoms/SectionHead";

const steps = [
  { n: "01", t: "Analizăm cum lucrezi acum", d: "O discuție directă, fără formulare. Vreau să înțeleg fluxul real, nu cel din schemă." },
  { n: "02", t: "Identificăm ce se poate automatiza", d: "Ce repeți zilnic. Ce uiți. Ce te încurcă. Acolo stau orele tale ascunse." },
  { n: "03", t: "Construim sistemul potrivit", d: "Doar cât ai nevoie. Fără funcții pe care nu le vei folosi niciodată." },
  { n: "04", t: "Îl testăm cu tine", d: "Tu îl folosești. Eu ascult. Ajustăm până se așază pe felul tău de lucru." },
  { n: "05", t: "Îl îmbunătățim în timp", d: "Pe măsură ce firma crește, sistemul crește cu ea. Nu rămâi blocat." },
];

export function SolutionSection() {
  return (
    <section className="section pp-sol" id="solutia">
      <div className="container">
        <div className="pp-sol-grid">
          <div>
            <SectionHead
              num="02"
              eyebrow="soluția"
              title={<>Transformăm <span className="serif" style={{ color: "var(--accent)" }}>procesele</span> firmei tale în software simplu de folosit.</>}
              lead="Nu primești un produs gata făcut, în care să te înghesui. Primești un sistem construit în jurul felului în care tu lucrezi deja."
            />
          </div>
          <div className="pp-sol-steps">
            {steps.map((s, i) => (
              <div key={s.n} className="pp-sol-step">
                <div className="pp-sol-step-num mono">{s.n}</div>
                <div className="pp-sol-step-body">
                  <div className="pp-sol-step-t">{s.t}</div>
                  <div className="body-sm" style={{ marginTop: 4 }}>{s.d}</div>
                </div>
                {i < steps.length - 1 && <div className="pp-sol-step-line" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

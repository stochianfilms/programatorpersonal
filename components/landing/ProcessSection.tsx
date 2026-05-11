import { SectionHead } from "./atoms/SectionHead";

const steps = [
  { n: "01", t: "Discutăm problema", d: "O conversație de 30 de minute. Tu îmi spui ce nu funcționează, eu pun întrebări. Fără PowerPoint.", dur: "~30 min" },
  { n: "02", t: "Schițăm fluxul", d: "Desenez cum ar arăta soluția. Pe wireframe, pe diagramă, pe șervețel — orice te ajută să vezi.", dur: "2-3 zile" },
  { n: "03", t: "Stabilim funcționalitățile", d: "Tăiem ce nu e necesar. Decidem împreună prioritățile. Versiunea 1 trebuie să fie mică și clară.", dur: "1 săpt." },
  { n: "04", t: "Construim MVP-ul", d: "Cod curat, livrări săptămânale. Vezi progresul, nu primești surprize la final.", dur: "3-6 săpt." },
  { n: "05", t: "Testăm și ajustăm", d: "Tu îl folosești în firmă. Apar lucruri noi. Le rezolv pe parcurs.", dur: "2 săpt." },
  { n: "06", t: "Lansăm și îmbunătățim", d: "Lansare reală, cu utilizatori reali. Apoi continuăm: features noi, optimizări, integrări.", dur: "continuu" },
];

export function ProcessSection() {
  return (
    <section className="section" id="cum-lucram">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow="cum lucrăm"
          title="Procesul, fără surprize."
          lead="Nu sunt 17 etape. Sunt 6, iar fiecare are sens. Nu treci la următoarea până nu suntem amândoi siguri că cea anterioară s-a așezat."
        />
        <div className="pp-process">
          {steps.map((s, i) => (
            <div key={s.n} className="pp-process-step">
              <div className="pp-process-num mono">{s.n}</div>
              <div className="pp-process-bar">
                <div className="pp-process-dot" />
                {i < steps.length - 1 && <div className="pp-process-line" />}
              </div>
              <div className="pp-process-content">
                <div className="pp-process-head">
                  <h3 className="h-3">{s.t}</h3>
                  <span className="mono pp-process-dur">{s.dur}</span>
                </div>
                <p className="body-sm" style={{ margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

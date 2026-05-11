import { SectionHead } from "./atoms/SectionHead";
import { Glyph } from "./atoms/Glyph";

const tags = [
  { icon: "wrench", title: "Service-uri și firme operaționale", body: "Auto, instalații, intervenții. Programări, fișe, statusuri." },
  { icon: "pulse", title: "Clinici și cabinete", body: "Pacienți, programări, documente, urmăriri. Discret, sigur, ordonat." },
  { icon: "fork", title: "Restaurante și locații de evenimente", body: "Rezervări, meniuri, pachete, rapoarte. Fără registre pe hârtie." },
  { icon: "bag", title: "Magazine online", body: "Când platforma actuală nu mai face față ce ai construit între timp." },
  { icon: "people", title: "Firme de servicii", body: "Consultanță, juridic, contabilitate, agenții. Clienți, dosare, urmăriri." },
  { icon: "lightbulb", title: "Antreprenori cu o idee", body: "Vrei să validezi rapid. Construim un MVP curat, nu un slide deck." },
];

export function AudienceSection() {
  return (
    <section className="section section-pad-sm" id="pentru-cine">
      <div className="container">
        <SectionHead
          num="04"
          eyebrow="pentru cine"
          title="Pentru cine este."
          lead="Nu fac cod pentru oricine. Lucrez cel mai bine cu firme care au procese reale și știu că pot lucra mai bine."
        />
        <div className="grid grid-3">
          {tags.map((t) => (
            <div key={t.title} className="card pp-aud">
              <div className="pp-aud-row">
                <div className="pp-aud-icon">
                  <Glyph name={t.icon} size={18} />
                </div>
                <h3 className="h-3" style={{ fontSize: 17 }}>{t.title}</h3>
              </div>
              <p className="body-sm" style={{ margin: 0 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

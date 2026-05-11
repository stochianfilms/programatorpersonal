import { SectionHead } from "./atoms/SectionHead";
import { Glyph } from "./atoms/Glyph";
import { ArrowRight } from "./atoms/Icons";

const services = [
  { icon: "app", title: "Aplicații web custom", body: "Tool-uri interne, calculatoare, fluxuri specifice — exact ce nu găsești la nimeni gata făcut." },
  { icon: "crm", title: "CRM-uri și back-office", body: "Toți clienții, toate ofertele, toate contractele — într-un singur loc, cu reguli clare." },
  { icon: "auto", title: "Automatizări business", body: "Email-uri, notificări, sincronizări între sisteme. Lucruri care merg de la sine." },
  { icon: "dash", title: "Dashboard-uri și rapoarte", body: "Vezi unde e firma azi, fără să mai compun manual fișiere Excel la final de lună." },
  { icon: "web", title: "Website-uri premium", body: "Site-uri de prezentare care arată că ești serios. Rapide, curate, optimizate." },
  { icon: "shop", title: "Magazine online custom", body: "Când Shopify-ul nu mai încape pe firma ta. Cu produse, fluxuri și plăți pe regulile tale." },
  { icon: "api", title: "Integrare API-uri", body: "Lipim sistemele tale: facturare, curierat, plăți, ERP. Datele ajung singure unde trebuie." },
  { icon: "shield", title: "Mentenanță și suport", body: "Nu te las cu codul în brațe. Rămân în spate, ca un programator pe care nu trebuie să-l angajezi." },
];

export function ServicesSection() {
  return (
    <section className="section" id="servicii">
      <div className="container">
        <SectionHead
          num="03"
          eyebrow="servicii"
          title="Ce construim, concret."
          lead="O listă scurtă, fără jargon. Dacă ai ceva pe lista asta — sau ceva ce nu apare aici — vorbim direct."
        />
        <div className="grid grid-4 pp-svc-grid">
          {services.map((s) => (
            <div key={s.title} className="card pp-svc">
              <div className="pp-svc-icon">
                <Glyph name={s.icon} size={20} />
              </div>
              <h3 className="h-3">{s.title}</h3>
              <p className="body-sm" style={{ margin: 0 }}>{s.body}</p>
              <span className="pp-svc-link mono">
                vezi detalii <ArrowRight size={11} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

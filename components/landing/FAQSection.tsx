"use client";

import { useState } from "react";
import { SectionHead } from "./atoms/SectionHead";
import { Plus } from "./atoms/Icons";

const faqs = [
  {
    q: "Cât costă o aplicație custom?",
    a: 'Depinde de complexitate, dar dau cifre orientative chiar de la prima discuție. Un site premium pornește de la ~1.500 €, un CRM mic de la ~4.500 €, iar platformele complexe sunt la discuție. Nu lucrez cu „de la 99 €".',
  },
  {
    q: "Cât durează dezvoltarea?",
    a: "Un proiect mic — 2-3 săptămâni. Un CRM sau o aplicație internă — 4-8 săptămâni. Platformele mari — 2-4 luni. Lucrez în iterații săptămânale, deci vezi progresul tot timpul, nu primești totul la final.",
  },
  {
    q: "Pot începe cu o versiune simplă?",
    a: "Da, și chiar recomand asta. Construim prima versiune mică, o folosești în firmă, vezi ce merge și ce nu, iar apoi adăugăm. E mai sănătos decât să scriem un caiet de sarcini de 40 de pagini la început.",
  },
  {
    q: "Oferiți mentenanță?",
    a: "Da. După lansare am pachete de mentenanță lunare (intervenții, update-uri, dezvoltare continuă) sau la oră. Nu te las cu codul în brațe.",
  },
  {
    q: "Pot integra aplicația cu alte sisteme?",
    a: "Aproape întotdeauna. Facturare (SmartBill, Oblio), curierat, plăți (Stripe, Netopia), Google Workspace, Microsoft 365, ERP-uri. Dacă au API, le pot lega.",
  },
  {
    q: "Ce se întâmplă dacă nu știu exact ce am nevoie?",
    a: "Asta e cel mai des cazul, și e perfect normal. Începem cu o discuție de descoperire, eu pun întrebări, schițez câteva variante, iar tu alegi. Nu trebuie să vii cu specificații tehnice — vino cu problema.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHead
          num="09"
          eyebrow="întrebări frecvente"
          title="Răspunsurile pe care le tot primesc."
        />
        <div className="pp-faq">
          {faqs.map((f, i) => (
            <div key={i} className={`pp-faq-item ${open === i ? "open" : ""}`}>
              <button className="pp-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="mono pp-faq-num">0{i + 1}</span>
                <span className="pp-faq-q-text">{f.q}</span>
                <span className="pp-faq-toggle"><Plus size={14} /></span>
              </button>
              <div className="pp-faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

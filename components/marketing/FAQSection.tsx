import { FaqAccordion } from "./FaqAccordion";

export type FaqItem = { q: string; a: string };

export function FAQSection({
  num,
  faqs,
  title = "Răspunsuri rapide.",
}: {
  num?: string;
  faqs: FaqItem[];
  title?: string;
}) {
  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row">
            {num && <span className="num">{num}</span>}
            <span className="eyebrow">întrebări frecvente</span>
            <span className="line" />
          </div>
          <h2 className="h-1">{title}</h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/services";

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="pp-faq">
      {faqs.map((f, i) => (
        <div key={i} className={`pp-faq-item ${open === i ? "open" : ""}`}>
          <button
            className="pp-faq-q"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="mono pp-faq-num">0{i + 1}</span>
            <span className="pp-faq-q-text">{f.q}</span>
            <span className="pp-faq-toggle">
              <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div className="pp-faq-a">
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  EmailToTicketMockup,
  OperationsDashboardMockup,
  ServiceTicketDashboardMockup,
} from "@/components/marketing/mockups";

const tabs = [
  { label: "Fișă service", view: <ServiceTicketDashboardMockup /> },
  { label: "Ticket client", view: <EmailToTicketMockup /> },
  { label: "Dashboard manager", view: <OperationsDashboardMockup /> },
];

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function BackOfficeSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num">13</span>
            <span className="eyebrow">back-office modern</span>
            <span className="line" />
          </div>
          <h2 className="h-1">Back-office-uri moderne pentru firme cu procese reale.</h2>
          <p className="lead" style={{ margin: 0, maxWidth: 780 }}>
            Dacă firma ta lucrează cu fișe, solicitări, comenzi, clienți, garanții, programări sau documente, putem transforma fluxul într-un sistem clar, rapid și ușor de urmărit.
          </p>
        </div>

        <div className="op-tabs op-tabs-top" style={{ marginBottom: "var(--s-5)" }}>
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs[active].view}

        <div style={{ marginTop: "var(--s-6)" }}>
          <Link href="/software-pentru-service-uri" className="btn btn-primary">
            Vezi un exemplu de sistem operațional <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

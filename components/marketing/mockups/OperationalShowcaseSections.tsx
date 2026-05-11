import Link from "next/link";
import type { ReactNode } from "react";
import {
  Customer360Mockup,
  EmailToTicketMockup,
  OperationsDashboardMockup,
  ServiceTicketDashboardMockup,
  TicketTimelineMockup,
  WarrantyRmaMockup,
} from ".";

const ArrowRight = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ShowcaseSection({
  num,
  eyebrow,
  title,
  lead,
  children,
  muted = false,
}: {
  num: string;
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section className="section" style={{ background: muted ? "var(--bg-1)" : undefined }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="num">{num}</span>
            <span className="eyebrow">{eyebrow}</span>
            <span className="line" />
          </div>
          <h2 className="h-1">{title}</h2>
          <p className="lead" style={{ margin: 0, maxWidth: 720 }}>{lead}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function ServiceOperationsSections({ start = 8 }: { start?: number }) {
  return (
    <>
      <ShowcaseSection
        num={String(start).padStart(2, "0")}
        eyebrow="mockup operațional"
        title="O fișă service modernă, construită pentru status real."
        lead="Client, produs, garanție, responsabil, documente și următorul pas sunt în același loc."
      >
        <ServiceTicketDashboardMockup />
      </ShowcaseSection>
      <ShowcaseSection
        num={String(start + 1).padStart(2, "0")}
        eyebrow="workflow service"
        title="Istoric clar pentru fiecare schimbare importantă."
        lead="Evenimentele de service, emailurile, comentariile și diagnosticul devin audit trail ușor de urmărit."
        muted
      >
        <TicketTimelineMockup />
      </ShowcaseSection>
      <ShowcaseSection
        num={String(start + 2).padStart(2, "0")}
        eyebrow="garanții și RMA"
        title="Garanțiile și RMA-urile nu mai stau în emailuri separate."
        lead="Eligibilitate, cod RMA, AWB, service autorizat și flow de status într-o singură vedere."
      >
        <WarrantyRmaMockup />
      </ShowcaseSection>
      <ShowcaseSection
        num={String(start + 3).padStart(2, "0")}
        eyebrow="management"
        title="Managerul vede blocajele înainte să devină haos."
        lead="KPI, distribuție de statusuri, motive de întârziere și performanță pe responsabili."
        muted
      >
        <OperationsDashboardMockup />
      </ShowcaseSection>
    </>
  );
}

export function CrmMockupSections({ start = 8 }: { start?: number }) {
  return (
    <>
      <ShowcaseSection
        num={String(start).padStart(2, "0")}
        eyebrow="customer 360"
        title="Toată relația cu clientul, într-o vedere coerentă."
        lead="Tickete, produse, comenzi, contracte, documente și interacțiuni recente, fără să cauți prin mai multe fișiere."
      >
        <Customer360Mockup />
      </ShowcaseSection>
      <ShowcaseSection
        num={String(start + 1).padStart(2, "0")}
        eyebrow="email to ticket"
        title="Emailurile devin tickete urmărite, nu conversații pierdute."
        lead="Sistemul poate detecta categoria, prioritatea, SLA-ul și responsabilul, apoi pregătește un răspuns."
        muted
      >
        <EmailToTicketMockup />
      </ShowcaseSection>
    </>
  );
}

export function AutomationMockupSections({ start = 8 }: { start?: number }) {
  return (
    <>
      <ShowcaseSection
        num={String(start).padStart(2, "0")}
        eyebrow="automatizare inbox"
        title="Un email de client poate porni singur un flux operațional."
        lead="Din email se creează ticket, se alocă responsabil, se pornește SLA și se pregătește răspunsul."
      >
        <EmailToTicketMockup />
      </ShowcaseSection>
      <ShowcaseSection
        num={String(start + 1).padStart(2, "0")}
        eyebrow="flow automatizări"
        title="Automatizările leagă pașii care acum depind de memorie."
        lead="Un flow simplu poate notifica echipa, actualiza statusuri, genera documente și programa follow-up-uri."
        muted
      >
        <div className="op-mock">
          <div className="op-mock-body">
            <div className="op-flow" style={{ margin: 0 }}>
              {["Email primit", "Clasificare automată", "Ticket creat", "Responsabil alocat", "SLA pornit", "Follow-up programat"].map((step) => (
                <div key={step}><span>{step}</span><ArrowRight /></div>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </>
  );
}

export function DashboardMockupSections({ start = 8 }: { start?: number }) {
  return (
    <ShowcaseSection
      num={String(start).padStart(2, "0")}
      eyebrow="dashboard operațional"
      title="Rapoarte utile pentru management, nu doar grafice frumoase."
      lead="Statusurile, SLA-urile și blocajele ajung într-un dashboard clar pentru decizii rapide."
    >
      <OperationsDashboardMockup />
    </ShowcaseSection>
  );
}

export function CustomerManagementMockupSections({ start = 8 }: { start?: number }) {
  return (
    <ShowcaseSection
      num={String(start).padStart(2, "0")}
      eyebrow="gestiune clienți"
      title="Clientul are context, istoric și statusuri, nu doar un rând într-un tabel."
      lead="O vedere Customer 360 face legătura între solicitări, produse, documente și ultimele interacțiuni."
    >
      <Customer360Mockup />
    </ShowcaseSection>
  );
}

export function PortfolioServiceSystemShowcase() {
  return (
    <>
      <ServiceOperationsSections start={1} />
      <CrmMockupSections start={5} />
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="pp-final-card">
            <div className="pp-final-grid-bg" />
            <div className="pp-final-content">
              <div className="chip" style={{ marginBottom: 24 }}>
                <span className="dot" /> demo fictiv, construit pentru procese reale
              </div>
              <h2 className="h-1" style={{ marginBottom: "var(--s-4)" }}>
                Vrei un sistem operațional pe fluxul firmei tale?
              </h2>
              <p className="lead" style={{ marginBottom: "var(--s-6)" }}>
                Putem porni de la fișe, tickete, garanții, comenzi sau documente și construi o aplicație clară în jurul procesului tău.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Discutăm sistemul tău <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

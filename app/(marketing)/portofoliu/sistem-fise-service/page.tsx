import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PortfolioServiceSystemShowcase } from "@/components/marketing/mockups/OperationalShowcaseSections";

export const metadata: Metadata = {
  title: "Sistem fișe service | Portofoliu Programator Personal",
  description: "Showcase fictiv pentru un sistem operațional modern cu fișe service, RMA, tickete, emailuri și dashboard management.",
  alternates: { canonical: "https://programatorpersonal.ro/portofoliu/sistem-fise-service" },
};

export default function ServiceTicketSystemPortfolioPage() {
  return (
    <MarketingShell>
      <section
        style={{
          paddingTop: "calc(var(--s-10) + 40px)",
          paddingBottom: "var(--s-8)",
          position: "relative",
        }}
      >
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "var(--s-5)" }}>
            <span className="chip">
              <span className="dot pulse-dot" /> showcase demo fictiv
            </span>
          </div>
          <h1 className="h-display" style={{ maxWidth: 940, fontSize: "clamp(32px, 5vw, 68px)", marginBottom: "var(--s-5)" }}>
            Sistem modern pentru fișe service, RMA și operațiuni interne.
          </h1>
          <p className="lead" style={{ maxWidth: 720, color: "var(--fg-2)" }}>
            Un exemplu fictiv de aplicație back-office dark premium, gândită pentru firme care lucrează cu solicitări, garanții, documente, notificări și statusuri.
          </p>
        </div>
      </section>
      <PortfolioServiceSystemShowcase />
    </MarketingShell>
  );
}

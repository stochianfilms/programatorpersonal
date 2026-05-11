import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageHero } from "@/components/marketing/PageHero";
import { siteConfig } from "@/content/site";
import { getHeroPreview } from "@/components/marketing/hero-previews";
import { FinalCTASection } from "@/components/marketing/cta/index";
import { InlineCTASection } from "@/components/marketing/cta/index";
import { EmailToTicketMockup } from "@/components/marketing/mockups";

export const metadata: Metadata = {
  title: "Integrări API pentru firme | Programator Personal",
  description:
    "Conectăm sistemele firmei tale: email, CRM, facturare, plăți, curierat, calendar, e-commerce și webhooks. Fără copy-paste manual între sisteme.",
  alternates: { canonical: `${siteConfig.url}/integrari-api` },
  openGraph: {
    title: "Integrări API pentru firme | Programator Personal",
    description:
      "Conectăm sistemele firmei tale: email, CRM, facturare, plăți, curierat, calendar, e-commerce și webhooks. Fără copy-paste manual între sisteme.",
    type: "website",
  },
};

const integrationCategories = [
  {
    category: "Email",
    items: ["Gmail", "Outlook", "IMAP / SMTP", "Email → ticket automat", "Trimitere notificări"],
  },
  {
    category: "Formulare",
    items: ["Formulare website", "Landing pages", "Formulare custom", "Lead → CRM automat"],
  },
  {
    category: "Facturare",
    items: ["SmartBill", "Oblio", "FGO", "Emitere factură automată", "Sincronizare status plată"],
  },
  {
    category: "Plăți",
    items: ["Stripe", "Netopia", "Plată la rezervare", "Confirmare automată"],
  },
  {
    category: "E-commerce",
    items: ["WooCommerce", "Shopify", "Magazine custom", "Comandă → AWB → factură"],
  },
  {
    category: "Calendar",
    items: ["Google Calendar", "Outlook Calendar", "Sincronizare bidirecțională", "Rezervare → eveniment"],
  },
  {
    category: "Curierat",
    items: ["FanCourier", "DPD", "Cargus", "Sameday", "AWB automat la confirmare"],
  },
  {
    category: "Fișiere & Stocare",
    items: ["Google Drive", "Supabase Storage", "Amazon S3", "Upload document → legat de dosar"],
  },
];

const exampleFlows = [
  {
    trigger: "Formular completat pe site",
    result: "Lead creat automat în CRM, email de confirmare trimis clientului, reminder agenților",
  },
  {
    trigger: "Email primit pe suport@firmata.ro",
    result: "Ticket creat automat, alocat echipei, client confirmat, vizibil în dashboard",
  },
  {
    trigger: "Contract semnat digital",
    result: "Prima factură emisă automat în SmartBill, email trimis clientului, proiect creat în sistem",
  },
  {
    trigger: "Comandă plasată online",
    result: "AWB generat automat la curier ales, factură emisă, SMS tracking trimis clientului",
  },
  {
    trigger: "Raport programat lunar",
    result: "Dashboard agreat date din CRM, facturare și e-commerce, trimis automat pe email directorului",
  },
];

const whatWeBuild = [
  { title: "Webhooks", description: "Declanșatori care comunică evenimentele din sistem spre alte sisteme, în timp real." },
  { title: "Sincronizări periodice", description: "Date sincronizate la interval fix — orar, zilnic sau la cerere." },
  { title: "Import / Export", description: "Migrări de date, importuri din fișiere CSV sau exporturi programate." },
  { title: "Dashboard-uri agregate", description: "Date din mai multe sisteme, vizualizate unitar într-un singur loc." },
  { title: "Loguri de integrare", description: "Știi exact ce a trimis, ce a primit și dacă a reușit fiecare cerere." },
  { title: "Alerte la erori", description: "Notificări imediate dacă o integrare eșuează, înainte să devină problemă." },
];

const faqs = [
  {
    q: "Ce este o integrare API?",
    a: "O integrare API permite două sisteme software să comunice automat. Exemplu: când un client completează un formular pe site, datele ajung instant în CRM, fără ca cineva să le copieze manual.",
  },
  {
    q: "Ce facem dacă sistemul meu nu are API?",
    a: "Există alternative: export/import periodic de fișiere, scraping controlat sau construirea unui adaptor. Evaluăm ce e fezabil înainte să promitem ceva.",
  },
  {
    q: "Pot conecta emailul cu CRM-ul?",
    a: "Da. Emailurile primite pe o adresă dedicată pot fi transformate automat în tickete sau lead-uri în CRM, cu toate datele clientului asociate.",
  },
  {
    q: "Pot automatiza emiterea facturilor?",
    a: "Da. La confirmare de comandă, la semnarea unui contract sau la o dată definită — factura poate fi emisă automat în SmartBill, Oblio sau alt sistem de facturare.",
  },
  {
    q: "Ce se întâmplă dacă o integrare dă eroare?",
    a: "Construim monitorizare și alerte. Dacă un flux eșuează, ești notificat imediat cu detalii exacte — ce sistem, ce date, ce eroare — înainte să devină problemă pentru clienți.",
  },
  {
    q: "Cât durează să conectăm două sisteme?",
    a: "O integrare simplă (formular → CRM, email → ticket) poate fi gata în 3-5 zile. O integrare mai complexă, cu condiții și mai mulți pași, poate dura 2-4 săptămâni.",
  },
];

export default function IntegrapiApiPage() {
  const cta = siteConfig.ctas.primary;

  return (
    <MarketingShell>
      <PageHero
        chip="integrări API"
        title="Integrări API pentru firme care vor ca sistemele lor să lucreze împreună."
        lead="Conectăm formulare, emailuri, CRM-uri, facturare, plăți, e-commerce, calendare și dashboard-uri într-un flux coerent. Fără copy-paste manual."
        primaryLabel="Vreau să conectăm sistemele firmei"
        primaryHref="/contact"
        secondaryLabel="Vreau mai întâi o discuție"
        secondaryHref="/contact"
        preview={getHeroPreview("integrari-api")}
      />

      {/* Integration categories */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">01</span>
              <span className="eyebrow">tipuri de integrări</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce sisteme putem conecta?</h2>
            <p className="lead" style={{ margin: 0, maxWidth: 560 }}>
              Dacă are API sau poate exporta date, îl putem conecta la sistemul tău.
            </p>
          </div>
          <div className="grid grid-4" style={{ gap: "var(--s-4)" }}>
            {integrationCategories.map((cat) => (
              <div
                key={cat.category}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}
              >
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {cat.category}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                  {cat.items.map((item) => (
                    <li key={item} className="body-sm" style={{ color: "var(--fg-3)", display: "flex", gap: "var(--s-2)" }}>
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example flows */}
      <section className="section" style={{ paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="num">02</span>
              <span className="eyebrow">exemple de fluxuri</span>
              <span className="line" />
            </div>
            <h2 className="h-1">Ce se întâmplă când sistemele lucrează împreună?</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)", maxWidth: 800 }}>
            {exampleFlows.map((flow, i) => (
              <div
                key={i}
                className="card"
                style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "var(--s-4)", alignItems: "center" }}
              >
                <div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "var(--s-2)" }}>
                    declanșator
                  </div>
                  <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{flow.trigger}</p>
                </div>
                <span style={{ color: "var(--accent)", fontSize: 22 }}>→</span>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "var(--s-2)" }}>
                    rezultat automat
                  </div>
                  <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{flow.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build + visual */}
      <section className="section" style={{ background: "var(--bg-1)", paddingTop: "var(--s-7)", paddingBottom: "var(--s-7)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "var(--s-6)" }}>
            <div className="eyebrow-row">
              <span className="num">03</span>
              <span className="eyebrow">ce construim</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Dincolo de integrare — un strat tehnic robust.</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--s-8)",
              alignItems: "start",
            }}
          >
            <div className="grid grid-2" style={{ gap: "var(--s-4)" }}>
              {whatWeBuild.map((item, i) => (
                <div key={i} className="card card-elev" style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)" }}>
                  <h3 className="h-3">{item.title}</h3>
                  <p className="body-sm" style={{ margin: 0, color: "var(--fg-3)" }}>{item.description}</p>
                </div>
              ))}
            </div>
            <EmailToTicketMockup />
          </div>
        </div>
      </section>

      <InlineCTASection
        title="Vrei ca sistemele firmei tale să nu mai lucreze separat?"
        text="Spune-mi ce sisteme ai și ce date vrei să conectezi."
        primaryLabel="Programează o discuție"
        primaryHref="/contact"
      />

      {/* FAQ */}
      <section className="section" style={{ background: "var(--bg-1)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">întrebări frecvente</span>
              <span className="line" />
            </div>
            <h2 className="h-2">Ce trebuie să știi despre integrări.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)", maxWidth: 720 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                <h3 className="h-3">{faq.q}</h3>
                <p className="body" style={{ margin: 0, color: "var(--fg-2)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection
        title="Vrei ca sistemele firmei tale să nu mai lucreze separat?"
        text="Spune-mi ce sisteme ai și ce flux vrei să automatizezi. Îți propun o soluție concretă."
        primaryLabel={cta.label}
        primaryHref={cta.href}
        secondaryLabel="Vezi modulele disponibile"
        secondaryHref="/module"
      />
    </MarketingShell>
  );
}

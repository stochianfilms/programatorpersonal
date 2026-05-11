import { SectionHead } from "./atoms/SectionHead";

const before = [
  { icon: "✕", t: "Excel-uri pe 3 calculatoare", s: "fiecare cu o versiune diferită" },
  { icon: "✕", t: "Mesaje pierdute pe WhatsApp", s: '„caut, am scris săptămâna trecută..."' },
  { icon: "✕", t: "Clienți uitați", s: "nu i-a sunat nimeni înapoi" },
  { icon: "✕", t: "Contracte scrise manual", s: "cu copy-paste din alt contract" },
  { icon: "✕", t: "Rapoarte la final de lună", s: "o zi întreagă de muncă pierdută" },
  { icon: "✕", t: "Follow-up uitat", s: "oferta a rămas în Sent și atât" },
];

const after = [
  { icon: "✓", t: "CRM cu o singură sursă de adevăr", s: "toți, tot, în același loc" },
  { icon: "✓", t: "Notificări automate", s: "pe email + SMS, fără să le bați la mână" },
  { icon: "✓", t: "Reminder pentru fiecare lead", s: "nu mai cade niciunul printre crăpături" },
  { icon: "✓", t: "Contracte generate cu un click", s: "cu datele clientului completate auto" },
  { icon: "✓", t: "Dashboard live", s: "vezi situația firmei oricând, în 2 secunde" },
  { icon: "✓", t: "Follow-up automat", s: "la 3 zile, 7 zile, 14 zile — pe ritmul tău" },
];

export function BeforeAfterSection() {
  return (
    <section className="section" id="before-after">
      <div className="container">
        <SectionHead
          num="02"
          eyebrow="înainte / după"
          title={<>Din <span className="serif" style={{ color: "var(--fg-3)" }}>haos operațional</span> în <span style={{ color: "var(--accent)" }}>sistem clar</span>.</>}
          lead="Aceeași firmă, două realități. La stânga — cum lucrează majoritatea acum. La dreapta — cum lucrează după ce așezăm sistemul."
        />
        <div className="pp-ba">
          <div className="pp-ba-col pp-ba-before">
            <div className="pp-ba-head">
              <span className="mono pp-ba-head-tag">înainte</span>
              <span className="h-3" style={{ color: "var(--fg-2)" }}>Haos operațional</span>
            </div>
            <div className="pp-ba-list">
              {before.map((b, i) => (
                <div key={i} className="pp-ba-item pp-ba-item-before">
                  <span className="pp-ba-icon">{b.icon}</span>
                  <div>
                    <div className="pp-ba-t">{b.t}</div>
                    <div className="pp-ba-s">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pp-ba-noise" />
          </div>

          <div className="pp-ba-arrow">
            <div className="pp-ba-arrow-line" />
            <div className="pp-ba-arrow-chip mono">
              <span className="dot pulse-dot" /> transformare
            </div>
            <div className="pp-ba-arrow-line" />
          </div>

          <div className="pp-ba-col pp-ba-after">
            <div className="pp-ba-head">
              <span className="mono pp-ba-head-tag pp-ba-head-tag-after">după</span>
              <span className="h-3">Sistem clar</span>
            </div>
            <div className="pp-ba-list">
              {after.map((a, i) => (
                <div key={i} className="pp-ba-item pp-ba-item-after">
                  <span className="pp-ba-icon pp-ba-icon-ok">{a.icon}</span>
                  <div>
                    <div className="pp-ba-t">{a.t}</div>
                    <div className="pp-ba-s">{a.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

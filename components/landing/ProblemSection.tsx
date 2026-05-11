import { SectionHead } from "./atoms/SectionHead";

const problems = [
  { code: "01", title: "Informații împrăștiate", body: "În email, WhatsApp, foi de Excel, agende. Nimeni nu știe unde e adevărul." },
  { code: "02", title: "Clienți uitați", body: "Cereri rămase fără răspuns, programări pierdute, oferte trimise pe care nu le mai urmărește nimeni." },
  { code: "03", title: "Rapoarte făcute manual", body: "Cineva stă o zi pe lună să copy-paste din sistem în sistem. Și tot iese cu greșeli." },
  { code: "04", title: "Comenzi gestionate haotic", body: 'Status-uri necunoscute, livrări întârziate, clienți care sună să întrebe „unde e?".' },
  { code: "05", title: "Lipsă automatizări", body: "Aceleași e-mailuri, aceleași notificări, aceleași pași — bătuți la mână, în fiecare zi." },
  { code: "06", title: "Site vechi sau lent", body: "Nu se mai potrivește cu firma de azi. Clienții îl deschid și îl închid în 5 secunde." },
];

export function ProblemSection() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <SectionHead
          num="01"
          eyebrow="problema"
          title="Dacă firma ta încă depinde de Excel-uri, mesaje pierdute și procese manuale, pierzi timp zilnic."
          lead="Nu e neapărat vina nimănui. Așa s-au strâns lucrurile, în timp. Dar fiecare săptămână în care continuă haosul costă ore reale de muncă și clienți reali pierduți."
        />
        <div className="grid grid-3">
          {problems.map((p) => (
            <div key={p.code} className="card pp-prob">
              <span className="mono pp-prob-code">{p.code}</span>
              <h3 className="h-3">{p.title}</h3>
              <p className="body-sm" style={{ margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

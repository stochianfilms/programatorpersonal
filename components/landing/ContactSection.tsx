"use client";

import { useState, type FormEvent } from "react";
import { SectionHead } from "./atoms/SectionHead";

type FormState = {
  nume: string; firma: string; email: string; telefon: string;
  domeniu: string; dimensiune: string; buget: string; nevoie: string; mesaj: string;
};

const emptyForm: FormState = {
  nume: "", firma: "", email: "", telefon: "",
  domeniu: "", dimensiune: "", buget: "", nevoie: "", mesaj: "",
};

export function ContactSection() {
  const [f, setF] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const upd = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });
  const pick = (k: keyof FormState, v: string) => () => setF({ ...f, [k]: v });

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error("Nu am putut trimite mesajul.");
      setSent(true);
      setTimeout(() => { setSent(false); setF(emptyForm); }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nu am putut trimite mesajul.");
    }
  };

  const can = f.nume && f.email && f.nevoie;

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          num="14"
          eyebrow="contact"
          title={<>Hai să vorbim. <span className="serif" style={{ color: "var(--fg-3)" }}>30 de minute, fără PowerPoint.</span></>}
          lead="Completează ce poți. Mă uit peste detalii și te sun în 24h cu primele întrebări concrete."
        />
        <div className="pp-cf">
          <form className="pp-cf-form" onSubmit={submit}>
            <div className="pp-cf-grid">
              <label className="pp-cf-field">
                <span className="pp-cf-l">Nume <em>*</em></span>
                <input className="pp-cf-i" required value={f.nume} onChange={upd("nume")} placeholder="Radu Popescu" />
              </label>
              <label className="pp-cf-field">
                <span className="pp-cf-l">Firma</span>
                <input className="pp-cf-i" value={f.firma} onChange={upd("firma")} placeholder="Service Auto B. SRL" />
              </label>
              <label className="pp-cf-field">
                <span className="pp-cf-l">Email <em>*</em></span>
                <input className="pp-cf-i" type="email" required value={f.email} onChange={upd("email")} placeholder="radu@firma.ro" />
              </label>
              <label className="pp-cf-field">
                <span className="pp-cf-l">Telefon</span>
                <input className="pp-cf-i" type="tel" value={f.telefon} onChange={upd("telefon")} placeholder="07xx xxx xxx" />
              </label>
            </div>

            <div className="pp-cf-field">
              <span className="pp-cf-l">Domeniu</span>
              <div className="pp-cf-pills">
                {["Service auto", "Imobiliare", "E-commerce", "Clinică", "Consultanță", "Construcții", "HoReCa", "Altul"].map((d) => (
                  <button type="button" key={d} className={`pp-cf-pill ${f.domeniu === d ? "active" : ""}`} onClick={pick("domeniu", d)}>{d}</button>
                ))}
              </div>
            </div>

            <div className="pp-cf-grid">
              <div className="pp-cf-field">
                <span className="pp-cf-l">Dimensiune firmă</span>
                <div className="pp-cf-pills">
                  {["1-3", "4-10", "11-30", "30+"].map((d) => (
                    <button type="button" key={d} className={`pp-cf-pill ${f.dimensiune === d ? "active" : ""}`} onClick={pick("dimensiune", d)}>{d} oameni</button>
                  ))}
                </div>
              </div>
              <div className="pp-cf-field">
                <span className="pp-cf-l">Buget orientativ</span>
                <div className="pp-cf-pills">
                  {["< 2k €", "2-5k €", "5-15k €", "15k+ €", "nu știu"].map((d) => (
                    <button type="button" key={d} className={`pp-cf-pill ${f.buget === d ? "active" : ""}`} onClick={pick("buget", d)}>{d}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pp-cf-field">
              <span className="pp-cf-l">Ce te doare cel mai tare? <em>*</em></span>
              <div className="pp-cf-pills">
                {["Excel-uri haotice", "Lead-uri pierdute", "Contracte la mână", "Comenzi pe WhatsApp", "Raportare lentă", "Vreau site nou", "Vreau automatizare", "Altceva"].map((d) => (
                  <button type="button" key={d} className={`pp-cf-pill ${f.nevoie === d ? "active" : ""}`} onClick={pick("nevoie", d)}>{d}</button>
                ))}
              </div>
            </div>

            <label className="pp-cf-field">
              <span className="pp-cf-l">Spune-mi mai multe (opțional)</span>
              <textarea
                className="pp-cf-i pp-cf-ta"
                rows={4}
                value={f.mesaj}
                onChange={upd("mesaj")}
                placeholder="Ce încercați acum, ce ați vrut să faceți și nu a mers, ce vă deranjează zilnic..."
              />
            </label>

            <div className="pp-cf-foot">
              <button type="submit" className={`btn btn-primary ${!can ? "btn-disabled" : ""}`} disabled={!can}>
                {sent ? "✓ Mesaj trimis — te sun în 24h" : "Trimite și hai să vorbim"}
              </button>
              <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>
                * câmpuri obligatorii · datele sunt trimise securizat către Programator Personal
              </span>
            </div>
          </form>

          <aside className="pp-cf-side">
            <div className="pp-cf-card">
              <div className="eyebrow">la ce să te aștepți</div>
              <ol className="pp-cf-steps">
                <li>
                  <strong>În 24h</strong><br />
                  <span style={{ color: "var(--fg-3)" }}>Te sun. 5-10 minute, văd dacă pot ajuta.</span>
                </li>
                <li>
                  <strong>În 3-4 zile</strong><br />
                  <span style={{ color: "var(--fg-3)" }}>Întâlnire 30 min, fără PowerPoint.</span>
                </li>
                <li>
                  <strong>În 1 săptămână</strong><br />
                  <span style={{ color: "var(--fg-3)" }}>Propunere scrisă cu ce, cum, cât.</span>
                </li>
              </ol>
            </div>
            <div className="pp-cf-card">
              <div className="eyebrow">alternativ</div>
              <div className="pp-cf-alt mono">
                <div><span style={{ color: "var(--fg-3)" }}>email</span> hello@programatorpersonal.ro</div>
                <div><span style={{ color: "var(--fg-3)" }}>telefon</span> 07xx xxx xxx</div>
                <div><span style={{ color: "var(--fg-3)" }}>linkedin</span> /in/programatorpersonal</div>
              </div>
            </div>
            {error && (
              <div className="pp-cf-admin">
                <div className="eyebrow">eroare</div>
                <div style={{ fontSize: 12, marginTop: 6 }}>{error}</div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

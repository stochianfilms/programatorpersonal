"use client";

import { useState, type FormEvent } from "react";

type ServiceContactFormProps = {
  sourcePage: string;
  ctaText: string;
  serviceName: string;
};

const Arrow = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function ServiceContactForm({ sourcePage, ctaText, serviceName }: ServiceContactFormProps) {
  const [f, setF] = useState({
    nume: "",
    firma: "",
    email: "",
    telefon: "",
    dimensiune: "",
    buget: "",
    nevoie: serviceName,
    mesaj: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const upd =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF({ ...f, [k]: e.target.value });

  const pick = (k: keyof typeof f, v: string) => () => setF({ ...f, [k]: v });

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...f,
          source_page: sourcePage,
          metadata: { service_name: serviceName },
        }),
      });
      if (!res.ok) throw new Error("Nu am putut trimite mesajul.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la trimitere.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div
        style={{
          background: "var(--bg-2)",
          border: "1px solid var(--accent-line)",
          borderRadius: "var(--r-3)",
          padding: "var(--s-8)",
          textAlign: "center",
          maxWidth: 560,
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
        <h3 className="h-3" style={{ color: "var(--accent)" }}>Mesaj trimis!</h3>
        <p className="lead" style={{ marginTop: 8 }}>
          Te sun în 24h cu primele întrebări concrete.
        </p>
      </div>
    );
  }

  return (
    <form className="pp-cf-form" onSubmit={submit} style={{ maxWidth: 640, margin: "0 auto" }}>
      <div className="pp-cf-grid">
        <label className="pp-cf-field">
          <span className="pp-cf-l">Nume <em>*</em></span>
          <input className="pp-cf-i" required value={f.nume} onChange={upd("nume")} placeholder="Radu Popescu" />
        </label>
        <label className="pp-cf-field">
          <span className="pp-cf-l">Firmă</span>
          <input className="pp-cf-i" value={f.firma} onChange={upd("firma")} placeholder="Firma ta SRL" />
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

      <div className="pp-cf-grid" style={{ marginTop: "var(--s-4)" }}>
        <div className="pp-cf-field">
          <span className="pp-cf-l">Dimensiune firmă</span>
          <div className="pp-cf-pills">
            {["1-3", "4-10", "11-30", "30+"].map((d) => (
              <button type="button" key={d} className={`pp-cf-pill ${f.dimensiune === d ? "active" : ""}`} onClick={pick("dimensiune", d)}>
                {d} oameni
              </button>
            ))}
          </div>
        </div>
        <div className="pp-cf-field">
          <span className="pp-cf-l">Buget orientativ</span>
          <div className="pp-cf-pills">
            {["< 2k €", "2-5k €", "5-15k €", "15k+ €", "nu știu"].map((d) => (
              <button type="button" key={d} className={`pp-cf-pill ${f.buget === d ? "active" : ""}`} onClick={pick("buget", d)}>
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <label className="pp-cf-field" style={{ marginTop: "var(--s-4)" }}>
        <span className="pp-cf-l">Spune-mi mai multe (opțional)</span>
        <textarea
          className="pp-cf-i pp-cf-ta"
          rows={4}
          value={f.mesaj}
          onChange={upd("mesaj")}
          placeholder="Ce problemă vrei să rezolvi, ce ai încercat până acum, ce e mai urgent..."
        />
      </label>

      {error && <div style={{ color: "var(--danger)", fontSize: 13, marginTop: 8 }}>{error}</div>}

      <div className="pp-cf-foot" style={{ marginTop: "var(--s-5)" }}>
        <button type="submit" className={`btn btn-primary ${(!f.nume || !f.email) ? "btn-disabled" : ""}`} disabled={loading || !f.nume || !f.email}>
          {loading ? "Se trimite..." : ctaText} <Arrow />
        </button>
        <span className="mono" style={{ fontSize: 11, color: "var(--fg-3)" }}>
          * câmpuri obligatorii · datele sunt trimise securizat
        </span>
      </div>
    </form>
  );
}

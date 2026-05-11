"use client";

import { useState, type FormEvent } from "react";

type ToolLeadFormProps = {
  sourcePage: string;
  metadata?: Record<string, unknown>;
  ctaLabel?: string;
  successMessage?: string;
};

export function ToolLeadForm({
  sourcePage,
  metadata = {},
  ctaLabel = "Trimite și continuăm discuția",
  successMessage = "✓ Am primit! Te contactăm în 24h.",
}: ToolLeadFormProps) {
  const [f, setF] = useState({ nume: "", email: "", telefon: "", firma: "", mesaj: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const upd =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF({ ...f, [k]: e.target.value });

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
          nevoie: sourcePage,
          source_page: sourcePage,
          metadata,
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
          padding: "var(--s-7)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
        <div className="h-3" style={{ color: "var(--accent)" }}>{successMessage}</div>
        <p className="body-sm" style={{ marginTop: 8 }}>
          Verifică emailul — îți trimit un rezumat al rezultatelor.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      style={{
        background: "var(--bg-1)",
        border: "1px solid var(--line-1)",
        borderRadius: "var(--r-3)",
        padding: "var(--s-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--s-4)",
      }}
    >
      <div className="eyebrow" style={{ marginBottom: 4 }}>
        Trimite rezultatele pe email
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        <label className="pp-cf-field">
          <span className="pp-cf-l">Nume *</span>
          <input
            className="pp-cf-i"
            required
            value={f.nume}
            onChange={upd("nume")}
            placeholder="Radu Popescu"
          />
        </label>
        <label className="pp-cf-field">
          <span className="pp-cf-l">Email *</span>
          <input
            className="pp-cf-i"
            type="email"
            required
            value={f.email}
            onChange={upd("email")}
            placeholder="radu@firma.ro"
          />
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }}>
        <label className="pp-cf-field">
          <span className="pp-cf-l">Telefon</span>
          <input
            className="pp-cf-i"
            type="tel"
            value={f.telefon}
            onChange={upd("telefon")}
            placeholder="07xx xxx xxx"
          />
        </label>
        <label className="pp-cf-field">
          <span className="pp-cf-l">Firmă</span>
          <input
            className="pp-cf-i"
            value={f.firma}
            onChange={upd("firma")}
            placeholder="Firma ta SRL"
          />
        </label>
      </div>

      <label className="pp-cf-field">
        <span className="pp-cf-l">Alte detalii (opțional)</span>
        <textarea
          className="pp-cf-i pp-cf-ta"
          rows={3}
          value={f.mesaj}
          onChange={upd("mesaj")}
          placeholder="Ce vrei să automatizezi sau să îmbunătățești în firma ta..."
        />
      </label>

      {error && (
        <div style={{ color: "var(--danger)", fontSize: 13 }}>{error}</div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading || !f.nume || !f.email}
        style={{ alignSelf: "flex-start" }}
      >
        {loading ? "Se trimite..." : ctaLabel}
      </button>

      <p style={{ fontSize: 11, color: "var(--fg-4)", margin: 0 }}>
        * câmpuri obligatorii · datele sunt trimise securizat
      </p>
    </form>
  );
}

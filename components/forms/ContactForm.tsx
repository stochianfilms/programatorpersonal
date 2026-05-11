"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    service_interested: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function update(key: string, value: string) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!form.first_name || !form.email || !form.message) {
      setError('Completează nume, email și mesaj.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error?.message || data.error || 'Eroare la trimitere');
      } else {
        setSuccess(true);
        setForm({ first_name: '', last_name: '', email: '', company: '', phone: '', subject: '', service_interested: '', message: '' });
      }
    } catch (err: unknown) {
      let msg = 'Eroare de rețea';
      if (err && typeof err === 'object' && 'message' in err) {
        const m = (err as { message?: unknown }).message;
        if (typeof m === 'string') msg = m;
        else if (m !== undefined) msg = String(m);
      } else if (typeof err === 'string') {
        msg = err;
      }
      setError(msg || 'Eroare de rețea');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl border border-black/10 bg-white p-4">
      <div className="grid sm:grid-cols-2 gap-2">
        <input className="input" placeholder="Nume" value={form.first_name} onChange={(e) => update('first_name', e.target.value)} required />
        <input className="input" placeholder="Prenume" value={form.last_name} onChange={(e) => update('last_name', e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 gap-2">
        <input className="input" placeholder="Email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
        <input className="input" placeholder="Telefon" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
      </div>

      <input className="input" placeholder="Companie (opțional)" value={form.company} onChange={(e) => update('company', e.target.value)} />
      <input className="input" placeholder="Subiect (opțional)" value={form.subject} onChange={(e) => update('subject', e.target.value)} />
      <input className="input" placeholder="Serviciu interesat (opțional)" value={form.service_interested} onChange={(e) => update('service_interested', e.target.value)} />

      <textarea className="input h-28" placeholder="Mesaj" value={form.message} onChange={(e) => update('message', e.target.value)} required />

      {error && <div className="text-sm text-red-600">{error}</div>}
      {success && <div className="text-sm text-green-600">Trimis. Îți mulțumim — revenim curând.</div>}

      <div className="flex items-center justify-end">
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Se trimite...' : 'Trimite mesaj'}
        </button>
      </div>
    </form>
  );
}
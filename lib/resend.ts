import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  // Do not throw at import time in serverless environments where env may be loaded later,
  // but keep a runtime check in functions below.
}

const client = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendEmail({ to, subject, html, from }: { to: string | string[]; subject: string; html: string; from?: string }) {
  if (!client) throw new Error('Missing RESEND_API_KEY in environment');

  const sender = from || process.env.RESEND_FROM || `no-reply@programatorpersonal.ro`;

  return client.emails.send({
    from: sender,
    to,
    subject,
    html,
  });
}

export async function sendContactNotification(form: {
  first_name: string;
  last_name?: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}) {
  if (!client) throw new Error('Missing RESEND_API_KEY in environment');

  const admin = process.env.RESEND_ADMIN_EMAIL;
  if (!admin) return { success: false, reason: 'No RESEND_ADMIN_EMAIL configured' };

  const subject = `New lead from ${form.first_name} ${form.last_name || ''}`.trim();
  const html = `
    <h3>New contact submission</h3>
    <p><strong>Name:</strong> ${form.first_name} ${form.last_name || ''}</p>
    <p><strong>Email:</strong> ${form.email}</p>
    <p><strong>Company:</strong> ${form.company || ''}</p>
    <p><strong>Phone:</strong> ${form.phone || ''}</p>
    <p><strong>Message:</strong><br/>${form.message}</p>
  `;

  return sendEmail({ to: admin, subject, html });
}

export default client;

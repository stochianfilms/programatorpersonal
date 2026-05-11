import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { sendContactNotification } from '../../../lib/resend';

// Simple in-memory rate limit (best-effort; not suitable for multi-instance deployments)
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 15; // max requests per IP per window
const rateMap = new Map<string, { first: number; count: number }>();

const contactSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().optional(),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(5),
  subject: z.string().optional(),
  service_interested: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

function getClientIp(req: Request) {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return 'local';
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);

    // rate limit check
    const now = Date.now();
    const entry = rateMap.get(ip);
    if (!entry) {
      rateMap.set(ip, { first: now, count: 1 });
    } else {
      if (now - entry.first > RATE_LIMIT_WINDOW_MS) {
        rateMap.set(ip, { first: now, count: 1 });
      } else {
        entry.count += 1;
        rateMap.set(ip, entry);
        if (entry.count > RATE_LIMIT_MAX) {
          return NextResponse.json({ success: false, error: 'Too many requests' }, { status: 429 });
        }
      }
    }

    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.flatten() }, { status: 400 });
    }

    const supabaseAdmin = getSupabaseAdmin();

    if (!supabaseAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: 'Supabase admin client is not configured. Add SUPABASE_SERVICE_ROLE_KEY to .env.local.',
        },
        { status: 500 },
      );
    }

    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          ...parsed.data,
          status: 'new',
          source: 'contact_form',
        },
      ])
      .select();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    let emailSent = false;

    try {
      const emailResult = await sendContactNotification(parsed.data);
      emailSent = Boolean(emailResult);
      console.log('Resend contact notification result:', emailResult);
    } catch (err: unknown) {
      console.error('Failed to send contact notification email:', err);
    }

    return NextResponse.json({ success: true, emailSent, data: data?.[0] });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

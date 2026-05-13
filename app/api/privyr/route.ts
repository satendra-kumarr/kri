import { NextResponse } from 'next/server';

const DEFAULT_PRIVYR_WEBHOOK_URL =
  'https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/6z9iley7';

function getPrivyrWebhookUrl() {
  const raw = process.env.PRIVYR_WEBHOOK_URL || DEFAULT_PRIVYR_WEBHOOK_URL;
  // In case someone pastes the URL with "#generic-webhook" at the end
  return raw.split('#')[0];
}

function pickFirstString(...vals: unknown[]) {
  for (const v of vals) {
    if (typeof v === 'string' && v.trim()) return v.trim();
  }
  return '';
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const fields = (body?.fields && typeof body.fields === 'object') ? body.fields : {};
    const meta = (body?.meta && typeof body.meta === 'object') ? body.meta : {};

    // Normalize common field names across your forms
    const normalized = {
      name: pickFirstString(fields['Name'], fields['Full Name'], fields['FullName'], fields['full_name']),
      phone: pickFirstString(fields['Phone'], fields['Phone Number'], fields['PhoneNumber'], fields['phone']),
      email: pickFirstString(fields['Email'], fields['email']),
      subject: pickFirstString(
        fields['Subject'], 
        fields['Form Type'], 
        fields['Enquiry Type'],
        fields['subject'],
        'General Enquiry'
      ),
      message: pickFirstString(fields['Message'], fields['message']),
    };

    const payload = {
      ...fields,
      ...normalized,
      ...meta,
      // Ensure subject/type is always present
      subject: normalized.subject,
      'form_type': pickFirstString(fields['Form Type'], fields['Enquiry Type'], normalized.subject),
      received_at: new Date().toISOString(),
    };

    const webhookUrl = getPrivyrWebhookUrl();
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Prevent Next.js caching/proxying surprises for write calls
      cache: 'no-store',
    });

    const text = await resp.text().catch(() => '');

    if (!resp.ok) {
      return NextResponse.json(
        { ok: false, status: resp.status, error: text || 'Privyr webhook error' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, status: resp.status });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}


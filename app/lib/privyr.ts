export type PrivyrLeadMeta = {
  page_url?: string;
  page_path?: string;
  referrer?: string;
  user_agent?: string;
  form_id?: string;
  form_name?: string;
};

export async function sendLeadToPrivyr(fields: Record<string, unknown>, meta?: PrivyrLeadMeta) {
  const res = await fetch('/api/privyr', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      fields,
      meta,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Privyr webhook failed (${res.status})`);
  }

  return res.json().catch(() => ({ ok: true }));
}


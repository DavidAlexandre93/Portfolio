export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false });
  }

  const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  const metric = {
    id: payload?.id,
    name: payload?.name,
    value: payload?.value,
    rating: payload?.rating,
    navigationType: payload?.navigationType,
    timestamp: new Date().toISOString(),
  };

  // eslint-disable-next-line no-console
  console.info('[web-vitals]', JSON.stringify(metric));

  return res.status(200).json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  const body = await request.text();
  const signature = request.headers.get("x-square-hmacsha256-signature");
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(env.SQUARE_WEBHOOK_SIGNATURE_KEY),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    Uint8Array.from(atob(signature), c => c.charCodeAt(0)),
    encoder.encode(body)
  );
  if (!valid) return new Response("Invalid signature", { status: 401 });
  const event = JSON.parse(body);
  console.log("✅ Verified Square event:", event.type);
  await env.ALOHA_WEBHOOK_LOGS.put(event.event_id || crypto.randomUUID(), JSON.stringify(event));
  return new Response("ok", { status: 200 });
}

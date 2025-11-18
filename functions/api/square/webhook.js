export async function onRequestGet() {
  return new Response("Webhook endpoint online", { status: 200 });
}

export async function onRequestPost(context) {
  const body = await context.request.json();
  return new Response(JSON.stringify({ ok: true, body }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

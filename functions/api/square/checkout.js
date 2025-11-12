export async function onRequestPost({ request, env }) {
  const body = await request.json();
  const { amount, currency, note } = body;
  const payload = {
    idempotency_key: crypto.randomUUID(),
    quick_pay: {
      name: note || "Aloha Hemp Test Item",
      price_money: {
        amount: amount || 100,
        currency: currency || "USD"
      },
      location_id: env.SQUARE_LOCATION_ID,
      redirect_url: "https://alohahemp-staging.pages.dev/thanks"
    }
  };
  const res = await fetch("https://connect.squareup.com/v2/online-checkout/payment-links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.SQUARE_ACCESS_TOKEN}`
    },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  return new Response(JSON.stringify(data, null, 2), {
    headers: { "content-type": "application/json" }
  });
}

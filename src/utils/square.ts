export async function squareRequest(path, method = "GET", body = null) {
  const base = process.env.SQUARE_ENVIRONMENT === "production"
    ? "https://connect.squareup.com/v2"
    : "https://connect.squareupsandbox.com/v2";

  const res = await fetch(base + path, {
    method,
    headers: {
      "Square-Version": "2023-10-18",
      "Authorization": `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : null
  });

  if (!res.ok) {
    console.error("Square API error:", await res.text());
    throw new Error(`Square API failed: ${res.status}`);
  }
  return res.json();
}

export async function fetchAllProducts() {
  const items = await squareRequest("/catalog/list", "POST", {
    types: "ITEM"
  });

  return items.objects?.map(obj => ({
    id: obj.id,
    name: obj.item_data?.name,
    description: obj.item_data?.description,
    image: obj.item_data?.image_url,
    slug: obj?.id?.toLowerCase(),
    variations: obj.item_data?.variations?.map(v => ({
      id: v.id,
      name: v.item_variation_data?.name,
      price: v.item_variation_data?.price_money?.amount
    }))
  })) ?? [];
}

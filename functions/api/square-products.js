import { squareRequest } from "../../src/utils/square.js";

export async function onRequest() {
  try {
    const items = await squareRequest("/catalog/list", "POST", {
      types: "ITEM"
    });

    return new Response(JSON.stringify(items), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}

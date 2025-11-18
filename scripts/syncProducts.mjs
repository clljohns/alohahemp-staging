import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

import { fetchAllProducts } from "../src/utils/square.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  console.log("Fetching product data from Square…");

  const products = await fetchAllProducts();
  const savePath = path.join(__dirname, "../src/content/products.json");

  fs.writeFileSync(savePath, JSON.stringify(products, null, 2));

  console.log(`Saved ${products.length} products → src/content/products.json`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

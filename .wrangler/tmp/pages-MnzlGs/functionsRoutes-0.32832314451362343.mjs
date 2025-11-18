import { onRequestPost as __api_square_checkout_js_onRequestPost } from "/home/clintleejohnson/Projects/alohahemp-staging/functions/api/square/checkout.js"
import { onRequestGet as __api_square_webhook_js_onRequestGet } from "/home/clintleejohnson/Projects/alohahemp-staging/functions/api/square/webhook.js"
import { onRequestPost as __api_square_webhook_js_onRequestPost } from "/home/clintleejohnson/Projects/alohahemp-staging/functions/api/square/webhook.js"
import { onRequestGet as __api_test_js_onRequestGet } from "/home/clintleejohnson/Projects/alohahemp-staging/functions/api/test.js"

export const routes = [
    {
      routePath: "/api/square/checkout",
      mountPath: "/api/square",
      method: "POST",
      middlewares: [],
      modules: [__api_square_checkout_js_onRequestPost],
    },
  {
      routePath: "/api/square/webhook",
      mountPath: "/api/square",
      method: "GET",
      middlewares: [],
      modules: [__api_square_webhook_js_onRequestGet],
    },
  {
      routePath: "/api/square/webhook",
      mountPath: "/api/square",
      method: "POST",
      middlewares: [],
      modules: [__api_square_webhook_js_onRequestPost],
    },
  {
      routePath: "/api/test",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_test_js_onRequestGet],
    },
  ]
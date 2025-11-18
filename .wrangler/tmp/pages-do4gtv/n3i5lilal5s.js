// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: ["/api/*"],
  exclude: []
};

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/home/clintleejohnson/Projects/alohahemp-staging/.wrangler/tmp/pages-do4gtv/functionsWorker-0.10834185428395537.mjs";
import { isRoutingRuleMatch } from "/home/clintleejohnson/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/home/clintleejohnson/Projects/alohahemp-staging/.wrangler/tmp/pages-do4gtv/functionsWorker-0.10834185428395537.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=n3i5lilal5s.js.map

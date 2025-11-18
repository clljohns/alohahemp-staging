export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route ALL /api/* into Cloudflare Pages Functions
    if (url.pathname.startsWith("/api/")) {
      return env.PAGES_FUNCTIONS.fetch(request);
    }

    // Serve Astro static site
    return env.ASSETS.fetch(request);
  }
};

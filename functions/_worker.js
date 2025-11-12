export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ✅ Route /api/square/* to Functions bundle
    if (url.pathname.startsWith("/api/square/")) {
      return env.ASSETS.fetch(request);
    }

    // Serve static Astro content for everything else
    return env.ASSETS.fetch(request);
  }
};

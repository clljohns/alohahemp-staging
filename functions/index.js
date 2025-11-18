export default {
  async fetch(request, env, ctx) {
    return env.PAGES_FUNCTIONS.fetch(request);
  }
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'dark',
  },
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  fontMetrics: {
    fonts: ['DM Sans'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
  ],
  runtimeConfig: {
    public: {
      apiUrl: 'https://twinword-word-graph-dictionary.p.rapidapi.com',
      xRapidApiHost: process.env.NUXT_X_RAPID_API_HOST,
      xRapidApiKey: process.env.NUXT_X_RAPID_API_KEY,
    },
  },
  srcDir: 'src/',
  ui: {
    icons: ['ph', 'simple-icons'],
  },
});

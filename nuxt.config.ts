// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'dark',
  },
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  fontMetrics: {
    fonts: ['Poppins', 'Amatic SC'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Poppins: true,
      'Amatic SC': true,
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-svgo',
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
  svgo: {
    defaultImport: 'component',
  },
  tailwindcss: {
    viewer: false,
  },
  ui: {
    icons: ['ph', 'simple-icons'],
  },
});

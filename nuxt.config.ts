const ReelHuntTheme = {
  dark: true,
  colors: {
    background: '#020617',
    surface: '#111827',
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@unocss/nuxt'],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {
      theme: {
        defaultTheme: 'ReelHuntTheme',
        themes: {
          ReelHuntTheme,
        },
      },
      icons: {
        defaultSet: 'mdi',
        sets: ['mdi', 'fa'],
      },
    },
  },
  runtimeConfig: {
    tmdbApiKey: process.env.NUXT_TMDB_API_KEY,
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'usebootstrap'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  // srcDir: 'frontend/',
  // alias: {
  //   '@': '/frontend', // Facilita a importação de arquivos
  // },
})
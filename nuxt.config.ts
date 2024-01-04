// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  serverMiddleware: ['~/serverMiddleware/api.js'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              '0': '#FFF',
              '500': '#3563E9'
            },
            secondary: {
              '500': '#1A202C',
              '400': '#596780',
              '300': '#90A3BF',
              // Add other shades as needed, e.g., '400', '500', etc.
            },
          },
        },
      },
    },
  }
})

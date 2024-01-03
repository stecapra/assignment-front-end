// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
              '0': '#FFF'
            },
            secondary: {
              '500': '#1A202C',
              '300': '#90A3BF',
              // Add other shades as needed, e.g., '400', '500', etc.
            },
          },
        },
      },
    },
  }
})

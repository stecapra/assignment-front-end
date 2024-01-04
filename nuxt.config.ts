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
              '0': '#FFF',
              '500': '#3563E9'
            },
            secondary: {
              '300': '#90A3BF',
              '400': '#596780',
              '500': '#1A202C',
            },
            information: {
              '500': '#54A6FF'
            }
          },
        },
      },
    },
  }
})

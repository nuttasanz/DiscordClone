// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '~/assets/css/tailwind.css',
      '@fortawesome/fontawesome-svg-core/styles.css',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })
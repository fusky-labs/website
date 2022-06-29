import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  css: ["/assets/global.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  webpack: {
    optimizeCSS: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    viewer: false,
  },
});

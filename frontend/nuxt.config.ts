// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxt/image"],
  css: ["~/assets/styles/main.css"],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: "/api",
    version: "v4",
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL,
      },
    },
  },
});
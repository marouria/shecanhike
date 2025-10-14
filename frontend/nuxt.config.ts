// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxt/image", "@nuxt/ui"],
  css: ["~/assets/styles/main.css"],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: "/api",
    version: "v4",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.STRAPI_URL,
      },
    },
  },
});

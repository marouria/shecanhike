// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/strapi", "@nuxt/image", "@nuxt/ui"],
  css: ["~/assets/styles/main.css"],
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "brand",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
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

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/strapi",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/mdc",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    strategy: "prefix",
  },
  css: ["~/assets/styles/main.css"],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: "/api",
    version: "v5",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    hubspotApiKey: process.env.HUBSPOT_API_KEY,
    public: {
      strapi: {
        url: process.env.STRAPI_URL,
      },
    },
  },
  app: {
    head: {
      title: "Women's Hiking Community & Trail Guides",
      meta: [
        {
          name: "description",
          content:
            "Discover hiking trails and join a community of women adventurers. Find destinations, cultural experiences, and connect with fellow female hikers worldwide.",
        },
      ],
    },
  },
});

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
    locales: [
      { code: "en", name: "🇺🇸", file: "en.json" },
      { code: "fr", name: "🇫🇷", file: "fr.json" },
      // { code: "es" },
      // { code: "pt" },
      // { code: "it" },
      // { code: "nl" },
      // { code: "ko" },
      // { code: "ja" },
      // { code: "ru" },
      // { code: "de" },
      // { code: "zh-Hans" },
      // { code: "zh-Hant" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
  },
  css: ["~/assets/styles/main.css"],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: "/api",
    version: "v5",
  },
  image: {
    providers: {
      strapi: {
        name: "strapi",
        provider: "~/providers/strapi",
        options: {
          baseURL: process.env.PROXY_BASE_URL || "https://media.shecanhike.com",
        },
      },
    },
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
      gtmId: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },
  mdc: {
    headings: {
      anchorLinks: false,
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
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${
            process.env.GOOGLE_TAG_MANAGER_ID || "GTM-XXXXXXX"
          }');`,
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${
            process.env.GOOGLE_TAG_MANAGER_ID || "GTM-XXXXXXX"
          }" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    },
  },
});

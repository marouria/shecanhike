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
    "@netlify/nuxt",
  ],
  i18n: {
    locales: [
      { code: "en", name: "🇺🇸", file: "en.json" },
      { code: "fr", name: "🇫🇷", file: "fr.json" },
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
  routeRules: {
    // Cache de la page d'accueil (1 heure)
    "/": { swr: 3600 },
    // Cache des pages de spots de randonnée (30 minutes)
    "/hiking-spots": { swr: 1800 },
    "/hiking-spots/**": { swr: 1800 },
    // Cache des pages de blog (1 heure)
    "/hiking-blog": { swr: 3600 },
    "/hiking-blog/**": { swr: 3600 },
    // Cache des autres pages statiques (1 heure)
    "/about": { swr: 3600 },
    "/hygiene-rituals": { swr: 3600 },
    "/podcast-rencontre-au-sommet": { swr: 3600 },
  },
  app: {
    head: {
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
  hooks: {
    "pages:extend"(pages) {
      // Trouver la route hiking-spots/[slug]
      const hikingSpotPageIndex = pages.findIndex(
        (page) => page.path === "/hiking-spots/:slug()",
      );

      if (hikingSpotPageIndex !== -1) {
        const hikingSpotPage = pages[hikingSpotPageIndex];

        // Créer une route au niveau racine
        pages.push({
          name: "slug",
          path: "/:slug()",
          file: hikingSpotPage?.file,
        });

        // Retirer la route longue /hiking-spots/[slug]
        pages.splice(hikingSpotPageIndex, 1);
      }
    },
  },
});
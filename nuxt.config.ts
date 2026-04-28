// https://nuxt.com/docs/api/configuration/nuxt-config
// npm i -D @iconify-json/lucide
export default defineNuxtConfig({
  app: {
    head: {
      title: "Katalog UMKM Pandeyan",
      htmlAttrs: { lang: "id" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
})

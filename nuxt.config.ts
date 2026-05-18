// https://nuxt.com/docs/api/configuration/nuxt-config
// npm i -D @iconify-json/lucide
// npm i -D @iconify-json/simple-icons
export default defineNuxtConfig({
  app: {
    head: {
      title: "Booking Tempat Taman Legawong",
      htmlAttrs: { lang: "id" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],
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
  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/callback",
      exclude: ["/", "/auth/login", "/auth/register", "/booking", "/booking/**", "/reservation", "/reservation/**"],
    },
  },
})

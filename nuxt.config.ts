// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Katalog UMKM Pandeyan",
      htmlAttrs: { lang: "id" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["shadcn-nuxt", "@nuxtjs/tailwindcss"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
})

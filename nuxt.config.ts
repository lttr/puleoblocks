import type { NuxtPage } from "nuxt/schema"

export default defineNuxtConfig({
  modules: [
    "@lttr/nuxt-config-postcss",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/plausible",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/components/thumbnails",
      global: true,
      pathPrefix: false,
    },
    {
      path: "~/pages",
      pattern: "*/components/**",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ["@lttr/puleo", "~/assets/css/main.css"],
  site: {
    url: "https://example.com",
    name: "Website name",
    description: "Website description",
    defaultLocale: "en",
  },
  colorMode: {
    classPrefix: "is-",
    classSuffix: "",
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },
  compatibilityDate: "2025-02-01",
  hooks: {
    "pages:extend"(pages) {
      const pagesToRemove: NuxtPage[] = []
      pages.forEach((page) => {
        if (page.path.includes("component")) {
          pagesToRemove.push(page)
        }
      })

      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1)
      })
    },
  },
  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  lttrConfigPostcss: {
    filesWithGlobals: ["./node_modules/@lttr/puleo/output/media.css"],
  },
  plausible: {
    ignoredHostnames: ["localhost"],
    apiHost: "https://plausible.lttr.cz",
  },
})

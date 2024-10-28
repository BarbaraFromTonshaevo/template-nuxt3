// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  server: {
    host: "localhost",
    port: 3000, 
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: [
    // Импорт компонентов из других директорий, помимо components
    {
      path: "~/components",
      pathPrefix: true,
    },
    { path: "~/sections", pathPrefix: true },
  ],
  ssr: true,
  // middleware: ["redirect"],
  modules: [ "@nuxtjs/device", "@pinia/nuxt"],
  // alias: {
  //   img: fileURLToPath(new URL("./assets/img", import.meta.url)),
  //   icons: fileURLToPath(new URL("./assets/icons", import.meta.url)),
  // },
  app: {
    layoutTransition: {
      name: "hehe",
      mode: "out-in",
    },
    pageTransition: {
      name: "layout",
      mode: "out-in",
    },
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "ТМК Феникс",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: "ТМК Феникс",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: "Template",
        },
        {
          hid: "apple-mobile-web-app-capable",
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "telephone=no",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "address=no",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "email=no",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "date=no",
        },
      ],
    },
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          postCssSortMediaQueries({ sort: "desktop-first" }),
          autoprefixer({
            overrideBrowserslist: ["last 3 versions", "ie >= 10"],
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'], // этоя добавила но я неуверена что это правильно

          // additionalData: '@use "assets/style/scss/_mixin" as *;',
        },
      },
    },
  },
});
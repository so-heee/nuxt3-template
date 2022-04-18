import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  css: ['vuetify/styles'],
  head: {
    htmlAttrs: {
      lang: 'ja'
    }
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    }
  }
})

import { defineNuxtPlugin } from '#app'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    theme: {
      defaultTheme: 'light',
      themes: { light }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})

const light: ThemeDefinition = {
  dark: false,
  variables: {}
}

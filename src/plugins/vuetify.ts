import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import zhHans from "vuetify/src/locale/zh-Hans"
import pl from "vuetify/src/locale/pl"
import sv from "@/i18n/vuetify/sv"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
      themeCache: {
        get: key => localStorage.getItem(key.toString()),
        set: (key, value) => localStorage.setItem(key.toString(), value)
      }
    }
  },
  lang: {
    locales: { zhHans, pl, sv },
    current: 'zhHans'
  }
})

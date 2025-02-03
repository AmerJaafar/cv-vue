import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
const app = createApp(App)
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ar,
  },
})

app.directive('percent', (el, order) => {
  el.style.width = `${order.value}%`
})
app.use(router)
app.use(i18n)
app.mount('#app')

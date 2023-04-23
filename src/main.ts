import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
import '@/assets/css/global.less'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()
  app.use(pinia)
  return {
    app,
    pinia
  }
}

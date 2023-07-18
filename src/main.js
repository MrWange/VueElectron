import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import 'mui-player/dist/mui-player.min.css'
import Axios  from '@/plugins/axiosInstance.js'
import myui from './install/install'

const app = createApp(App);   //建立一个vue3app
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store).use(router).use(ElementPlus).use(myui).use(Axios).mount('#app')

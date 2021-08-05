import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
// import '/@/styles/global.scss' // global css
// import VueRouter from 'vue-router'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

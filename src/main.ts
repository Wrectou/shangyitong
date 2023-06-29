import { createApp } from 'vue'

import "@/style/reset.scss"

import App from './App.vue'

import Header from "@/components/header/index.vue"
import Footer from "@/components/footer/index.vue"

import router from "@/router"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.component("Header", Header)
app.component("Footer", Footer)

app.use(router)

app.use(ElementPlus, { locale: zhCn })

app.mount('#app')

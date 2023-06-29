import { createRouter, createWebHistory } from "vue-router"
import { routes } from "@/router/router"

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { left: 0, top: 0 }
  }
})
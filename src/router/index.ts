import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/homePage',
    name: 'homePage',
    alias: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/newDetails/:newId',
    name: 'newDetails',
    component: () => import('../views/newDetails.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

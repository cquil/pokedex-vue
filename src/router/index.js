import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../views/Favorite.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import GetQuote from '@/pages/GetQuote.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/get-quote',
    },
    {
      path: '/get-quote',
      component: GetQuote,
      // Could use child routes for form
    },
  ],
})

export default router

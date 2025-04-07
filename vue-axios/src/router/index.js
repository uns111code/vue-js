import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/about',
      name: 'aboutview',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/list',
      name: 'listview',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/details/:charId',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    }
  ],
})

export default router

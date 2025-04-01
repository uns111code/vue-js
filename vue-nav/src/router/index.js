import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppRates from '../views/AppRates.vue'
import AppTeam from '../views/AppTeam.vue'
import AppTestimonials from '../views/AppTestimonials.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'appHome',
      component: AppHome
    },
    {
      path: '/apprates',
      name: 'appRates',
      component: AppRates
    },
    {
      path: '/appteam',
      name: 'appTeam',
      component: AppTeam
    },
    {
      path: '/apptestimonials',
      name: 'appTestimonials',
      component: AppTestimonials
    }
  ],
})

export default router

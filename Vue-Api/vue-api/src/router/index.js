import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeBooks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/a/list-books',
      name: 'list',
      component: () => import('../views/ListBooksAdmin.vue')
    },
    {
      path: '/a/create-books',
      name: 'create',
      component: () => import('../views/CreateBooks.vue')
    },
    {
      path: '/a/update-books/:id',
      name: 'update',
      component: () => import('../views/UpdateBooks.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutBooks.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginBooks.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../views/DetailsBooks.vue')
    }
  ],
})

export default router

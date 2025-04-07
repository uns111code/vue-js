import { createRouter, createWebHistory } from 'vue-router'
import List from "../views/ListBooksAdmin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/a/list-books',
      name: 'list',
      component: List
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
    }
  ],
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/home.vue'
import Blog from '../views/blog/blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
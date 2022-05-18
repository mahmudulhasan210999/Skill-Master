import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue'
import Blog from '../views/blog/index.vue'
import BlogDetails from '../views/blog/details/[id].vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    component: BlogDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
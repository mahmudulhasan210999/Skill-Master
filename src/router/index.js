import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue';
import Blog from '../views/blog/index.vue';
import BlogDetails from '../views/blog/details/[id].vue';
import Courses from "../views/courses/index.vue";
import Contact from '../views/contact/index.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/blogs',
    component: Blog
  },
  {
    path: '/blog/:id',
    component: BlogDetails
  },
  {
    path: '/courses',
    component: Courses
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
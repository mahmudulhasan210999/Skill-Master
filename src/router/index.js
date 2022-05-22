import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue';
import Blog from '../views/blog/index.vue';
import BlogDetails from '../views/blog/details/[id].vue';
import Courses from "../views/courses/index.vue";
import Contact from '../views/contact/index.vue';
import CourseDetails from "../views/courses/details/[id].vue";
import Cart from "../views/cart/index.vue";
import Login from "../views/login/index.vue";
import Registration from "../views/registration/index.vue";
import PageNotFound from "../views/404/index.vue";
import Checkout from "../views/checkout/index.vue";
import Dashboard from "../views/user-dashboard/index.vue"

import Instructor from '../views/courses/instructor/[id].vue';

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    component: PageNotFound 
  },
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
    path: '/course/:id',
    component: Instructor
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/courses/:id',
    component: CourseDetails
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: Registration
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
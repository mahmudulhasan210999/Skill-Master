import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home/index.vue';
import Blog from '../views/blog/index.vue';
import BlogDetails from '../views/blog/details/[id].vue';
import Courses from "../views/courses/index.vue";
import Contact from '../views/contact/index.vue';
import CourseDetails from "../views/courses/details/[id].vue";
import Wishlist from "../views/wishlist/index.vue";
import Login from "../views/login/index.vue";
import Registration from "../views/registration/index.vue";
import PageNotFound from "../views/404/index.vue";
import Checkout from "../views/checkout/index.vue";
import Dashboard from "../views/user-dashboard/dashboard/index.vue";
import Orders from "../views/user-dashboard/my-orders/index.vue";
import Settings from "../views/user-dashboard/settings/index.vue";
import Instructor from '../views/courses/instructor/[id].vue';
import Categories from '../views/courses/categories/[id].vue';
import BlogByCategory from '../views/blog/byCategory/[id].vue';
import Lectures from "../views/courses/lectures/[l_id].vue";
import Courses_by_sub_category from "../views/courses/by-sub-categories/[id].vue";

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
        path: '/blogs/:id',
        name: 'blogbycategory',
        component: BlogByCategory,
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
        path: '/instructor/:id',
        component: Instructor
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/course/:id',
        component: CourseDetails
    },
    {
        path: '/course/lecture/:l_id',
        component: Lectures,
        name: 'Lectures',
        meta: {
            login_required: true
        }
    },
    {
        path: '/courses/:id',
        component: Categories
    },
    {
        path: '/courses/sub-category/:id',
        component: Courses_by_sub_category
    },
    {
        path: '/wishlist',
        component: Wishlist
    },
    {
        path: '/checkout',
        component: Checkout
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/registration',
        component: Registration,
        name: 'Registration',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: {
            login_required: true
        }
    },
    {
        path: '/my-courses',
        component: Orders,
        name: 'Orders',
        meta: {
            login_required: true
        }
    },
    {
        path: '/settings',
        component: Settings,
        name: 'Settings',
        meta: {
            login_required: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return desired position
        if (savedPosition) return savedPosition
        else return { top: 0 }
    }
})

router.beforeEach(function (to, from, next) {
    let isLoggedIn = JSON.parse(localStorage.getItem('loggedIn'))
    if(to.meta.login_required){
        if(isLoggedIn) {
            next();
        }
        else {
            next('/login'); 
        }
    }
    else if(to.meta.redirectionNeeded) {
        if(isLoggedIn) {
            next(from.fullPath)
        }
        else {
            next();
        }
    }
    else {
        next();
    }
});

export default router
<template>
    <div class= "w-full flex flex-col items-center shadow-sm bg-white navbar">
        <div class="container">
            <div class="w-full flex justify-between px-4 xl:px-20 2xl:px-0">
                <div class="flex items-center">
                    <router-link to="/">
                        <img class="h-16 sm:h-20 p-2" src="../../assets/logo/platform-logo.png" alt="logo">
                    </router-link>
                </div>
                <div class="hidden lg:flex items-center">
                    <router-link :to="{ path: '/' }" class="menu-item">Home</router-link>
                    <div class="flex flex-col" @mouseleave="closeDropdown">
                        <div class="flex items-center menu-item hover:cursor-pointer" @mouseover="mouseover">
                            <router-link :to="{ path: '/courses' }">Courses</router-link>
                            <i class="pi pi-angle-down ml-2"></i>
                        </div>
                        <div v-if="isOpen" class="dropdown z-50 w-64 ml-4" :class="isOpen ? 'isOpen': 'no-display'">
                            <div class="flex flex-col items-start">
                                <div class="w-full text-left p-2 flex justify-between text-primary hover:text-secondary" @mouseover="openSubCategory(category.subcategory, category.id)" v-for="(category, index) in items" :key="index">
                                    <router-link :to="{ path: '/courses/' + category.slug }" >
                                        <p class="w-56"> {{ category.title }} </p>
                                    </router-link> 
                                    <span class="font-normal" v-if="category.subcategory">
                                        <i class="pi pi-angle-right" style="color: #000000;"></i>
                                    </span> 
                                    <div v-if="isSubCategoryOpen">
                                        <ul class="flex flex-col w-60 text-left sub-dropdown" v-if="category.id == parentCategoryId">
                                            <li class="px-4 py-2 w-60 cursor-pointer text-primary hover:text-secondary" v-for="(childrenItem, index2) in subCategoryList" :key="index2">
                                                <p class="w-full" @click="produtPageByCategory(childrenItem.slug)">{{childrenItem.title}}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div> 
                    <div class="flex flex-col" @mouseleave="closeBlog">
                        <div class="flex items-center menu-item hover:cursor-pointer" @mouseover="mouseoverBlog">
                            <router-link :to="{ path: '/blogs' }">Blogs</router-link>
                            <i class="pi pi-angle-down ml-2"></i>
                        </div>
                        <div v-if="isBlogOpen" class="dropdown z-50 w-64 ml-4" :class="isBlogOpen ? 'isOpen': 'no-display'">
                            <div class="flex flex-col items-start">
                                <div class="w-full text-left p-2 flex justify-between text-primary hover:text-secondary" v-for="(blog, index) in blog_category" :key="index">
                                    <p class="w-56 cursor-pointer" @click="toBlogByCategory(blog.slug)"> {{ blog.title }} </p> 
                                </div> 
                            </div>
                        </div>
                    </div>
                    <router-link :to="{ path: '/contact' }" class="menu-item">Contact</router-link>
                    <router-link to="/dashboard">
                        <button class="ml-8 py-1.5 px-2 lg:px-3 xl:px-4 text-primary border-2 border-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-all">My Profile</button>
                    </router-link>
                    <router-link to="/login">
                        <button class="py-1.5 px-2 lg:px-3 xl:px-4 rounded-md bg-primary border-2 border-primary font-semibold text-white ml-2 xl:ml-4">Sign in</button>
                    </router-link>
                </div>

                <!-- Menubar For Responsive Dimensions -->
                <div class="flex items-center lg:hidden">
                    <i @click="toggleNav" class="pi pi-bars p-2 bg-primary text-white rounded-md" style="font-size:1.4rem;"></i>
                    <Navbar v-if="navToggled" @navClosed="closeNav"/>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from "./nav.vue";

export default {
    data() {
        return { 
            navToggled: false,
            isOpen: false,
            isBlogOpen: false,
            isSubCategoryOpen: false,
            subCategoryList: [],
            parentCategoryId: null
        }
    },

    components: {
        Navbar
    },

    methods: {
        toggleNav: function () {
            this.navToggled = !this.navToggled
        },
        closeNav: function () {
            this.navToggled = false
        },

        mouseover: function () {
            this.isOpen = true;
        },

        closeDropdown: function () {
            this.isOpen = false;
        },

        mouseoverBlog: function () {
            this.isBlogOpen = true;
        },

        closeBlog: function () {
            this.isBlogOpen = false;
        },

        openSubCategory: function (subCategory, id) {
            this.subCategoryList = subCategory;
            this.parentCategoryId = id;
            this.isSubCategoryOpen = true;
        },

        toBlogByCategory(title) {
            console.log('here')
            this.$router.push({ name: 'blogbycategory', params:{id: title}})
        }
    },

    computed: {
        ...mapState ({
            menu: state => state.menu.menu,
            items: state => state.home.hot_categories,
            blog_category: state => state.blogs.categories,
        }),
    },

    mounted() {
        this.$store.dispatch('home/getCategories'),
        this.$store.dispatch('blogs/getCategories')
    },

    created() {
        this.$store.dispatch('login/getLoginStatus');
    },
}
</script>

<style scoped>
.navbar {
    position:fixed;         
    top:0;           
    width:100vw;    
    z-index:200;
}

.menu-item {
    @apply mx-1 px-2 xl:px-3 2xl:px-4 py-6 text-primary hover:text-secondary;
}

.dropdown {
    position: absolute;
    top: 70px;
    /* left: 80px; */
    list-style-type: none;
    @apply border border-gray-100 bg-white;
}

.sub-dropdown {
    position: absolute;
    left: 250px;
    list-style-type: none;
    @apply border border-gray-100 bg-white;
}

.no-display {
    display: none;
}

.isOpen {
    display: block;
}
</style>
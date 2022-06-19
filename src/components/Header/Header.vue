<template>
    <div class= "w-full flex flex-col items-center" @mouseleave="closeDropdown">
    <div class="container">
        <div class="w-full flex justify-between px-4 lg:px-16 xl:px-36 2xl:px-0">
            <div class="flex items-center">
                <router-link to="/">
                    <img class="h-20" src="../../assets/logo/platform-logo.png" alt="logo">
                </router-link>
            </div>
            <div class="hidden md:flex items-center">
                <router-link :to="{ path: '/' }" class="menu-item">Home</router-link>
                <div class="flex items-center menu-item hover:cursor-pointer" @mouseover="mouseover">
                    <p class="mr-2">Courses</p>
                    <i class="pi pi-angle-down"></i>
                </div>
                <div v-if="isOpen" class="dropdown z-50 w-64 lg:ml-6" :class="isOpen ? 'isOpen': 'no-display'">
                    <div class="flex flex-col items-start">
                        <div class="w-full text-left p-2 flex justify-between text-gray-600 hover:text-rose-600 hover:bg-slate-200" @mouseover="openSubCategory(category.subcategory, category.id)" v-for="(category, index) in items" :key="index">
                            <router-link :to="{ path: '/' + category.slug }" >
                                <p class="w-56"> {{ category.title }} </p>
                            </router-link> 
                            <span class="font-normal" v-if="category.subcategory">
                                <i class="pi pi-angle-right" style="color: #000000;"></i>
                            </span> 
                            <div v-if="isSubCategoryOpen">
                                <ul class="flex flex-col w-60 text-left sub-dropdown" v-if="category.id == parentCategoryId">
                                    <li class="px-4 py-2 w-60 cursor-pointer text-gray-600 hover:text-rose-600 hover:bg-slate-200" v-for="(childrenItem, index2) in subCategoryList" :key="index2">
                                        <p class="w-full" @click="produtPageByCategory(childrenItem.slug)">{{childrenItem.title}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div> 
                <router-link :to="{ path: '/blogs' }" class="menu-item">Blogs</router-link>
                <router-link :to="{ path: '/contact' }" class="menu-item">Contact</router-link>
                <div class="md:ml-6 lg:ml-12 mr-2 xl:mr-4">
                    <router-link to="/cart">
                        <div class="flex items-center border px-2 lg:px-3 xl:px-5 py-2 rounded-md hover:border hover:border-rose-600 hover:text-rose-700">
                            <i class="pi pi-shopping-cart"></i>
                            <p class="ml-2">Cart</p>
                        </div>
                    </router-link>
                </div>
                <router-link to="/login">
                    <button class="py-2 px-2 lg:px-3 xl:px-5 text-rose-600 border rounded-md font-semibold hover:bg-rose-600 hover:text-white">Sign in</button>
                </router-link>
                <router-link to="/registration">
                    <button class="py-2 px-2 lg:px-3 xl:px-5 border rounded-md bg-black font-semibold text-white ml-2 xl:ml-4">Sign up</button>
                </router-link>
            </div>

            <!-- Menubar For Responsive Dimensions -->
            <div class="flex items-center md:hidden">
                <i @click="toggleNav" class="pi pi-bars p-1"></i>
                <Navbar v-if="navToggled" @navClosed="closeNav"/>
            </div>
        </div>
    </div>
        <!-- Header -->
        
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
            isSubCategoryOpen: false,
            subCategoryList: [],
            parentCategoryId: null,
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

        openSubCategory: function (subCategory, id) {
            this.subCategoryList = subCategory;
            this.parentCategoryId = id;
            this.isSubCategoryOpen = true;
        },

        produtPageByCategory(slug){
            // this.$router.push({ name: 'productByCategory', params: { id:slug } })
            // this.$store.dispatch('products/getProductByCategory', {slug:slug, current:1}) 
        },
    },

    computed: {
        ...mapState ({
            menu: state => state.menu.menu,
            items: state => state.home.hot_categories
        }),
    },

    mounted() {
        this.$store.dispatch('home/getCategories')
    }
}
</script>

<style scoped>
.menu-item {
    @apply mx-1 lg:mx-2 px-2 xl:px-4 py-2 my-2 hover:text-rose-600;
}

.dropdown {
    position: absolute;
    top: 75px;
    left: 890px;
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
<template>
    <div class="w-full flex flex-col items-center bg-gray-50 px-4 sm:px-8 md:px-12 xl:px-36 pb-16">
        <div class="container">
            <div class="text-center p-12">
                <p class="text-2xl md:text-3xl xl:text-5xl font-bold p-4">Courses With Sidebar</p>
                <div class="flex justify-center text-sm lg:text-base">
                    <router-link to="/"><p class="text-primary">Home</p></router-link>
                    <p class="px-2"> / </p>
                    <p>Find Courses</p>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row w-full">
                <div class="hidden lg:flex lg:w-1/3 width-sidebar">
                    <div class="mt-6 w-full border border-gray-300">
                        <p class="text-xl font-semibold text-black">Course Categories</p>
                        <div class="flex my-2 text-left w-full" v-for="(category, index) in categories" :key="index">
                            <router-link class="w-full text-gray-600 hover:text-primary" :to="{ path: '/' + category.slug }">
                                <p class="w-full text-sm py-1">{{ category.title}} ({{category.course_count}})</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="flex mb-8 lg:hidden">
                    <button class="flex items-center justify-between px-5 py-3 bg-primary text-white rounded-md" @click="toggleNav">
                        <p class="pr-8">Show Filter</p>
                        <i class="pi pi-arrow-circle-right"></i>
                    </button>
                    <MobileSidebar v-if="navToggled" @navClosed="closeNav"/>
                </div>
                <div class="lg:w-2/3 width-courses">
                    <Courses /> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Courses from "../Courses/Courses.vue";
import Sidebar from "../Courses/Sidebar.vue";
import MobileSidebar from "../Courses/Mobile-Sidebar.vue";

export default {
    data() {
        return {
            navToggled: false,
        }
    },

    components: {
        Courses,
        Sidebar,
        MobileSidebar
    },

    computed: {
        ...mapState ({
            categories: state => state.home.hot_categories
        }),
    },

    mounted() {
        this.$store.dispatch('home/getCategories')
    },
    
    methods: {
        toggleNav: function () {
            this.navToggled = !this.navToggled
        },

        closeNav: function () {
            this.navToggled = false;
        }
    }
}
</script>

<style scoped>
/* @media screen and (min-width: 1536px) {
    .width-sidebar {
        @apply w-1/4;
    }

    .width-courses {
        @apply w-3/4;
    }
} */
</style>
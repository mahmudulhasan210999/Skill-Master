<template>
    <div class="w-full flex flex-col items-center bg-gray-50 px-4 sm:px-8 md:px-12 xl:px-36 pb-16">
        <div class="container">
            <div class="text-center p-8 sm:p-12"> 
                <p class="text-2xl md:text-3xl lg:text-4xl font-bold px-4 pb-4">Courses With Sidebar</p>
                <div class="flex justify-center text-sm lg:text-base text-primary">
                    <router-link to="/"><p>Home</p></router-link>
                    <p class="px-2"> / </p>
                    <p>Courses</p>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row w-full">
                <div class="hidden lg:flex lg:w-1/3 width-sidebar">
                    <Sidebar />
                </div>
                <div class="flex mb-8 lg:hidden">
                    <button class="flex items-center justify-between px-5 py-3 bg-primary text-white rounded-md" @click="toggleNav">
                        <p class="pr-8">Show Filter</p>
                        <i class="pi pi-arrow-circle-right"></i>
                    </button>
                    <MobileSidebar v-if="navToggled" @navClosed="closeNav"/>
                </div>
                <div class="lg:w-2/3 width-courses">
                    <BySubCategory :slug="getCategory()" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../../../components/Courses/Sidebar.vue";
import MobileSidebar from "../../../components/Courses/Mobile-Sidebar.vue";
import BySubCategory from '../../../components/Courses/Categories/BySub-category.vue';

export default {
    data() {
        return {
            navToggled: false,
        }
    },

    components: {
        Sidebar,
        MobileSidebar,
        BySubCategory
    },

    methods: {
        getCategory(){
            return this.$route.params.id;
        },

        toggleNav: function () {
            this.navToggled = !this.navToggled
        },

        closeNav: function () {
            this.navToggled = false;
        }
    }
}
</script>
<template>
    <div class="w-full flex flex-col bg-gray-50 px-4 sm:px-8 md:px-12 xl:px-36 pb-16">
        <div class="text-center p-12">
            <p class="text-2xl md:text-3xl xl:text-5xl font-bold p-4">Courses With Sidebar</p>
            <div class="flex justify-center text-sm lg:text-base">
                <router-link to="/"><p class="text-rose-600">Home</p></router-link>
                <p class="px-2"> / </p>
                <p>Find Courses</p>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row w-full">
            <div class="hidden lg:flex lg:w-1/3">
                <Sidebar />
            </div>
            <div class="flex mb-8 lg:hidden">
                <button class="flex items-center justify-between px-5 py-3 bg-rose-600 text-white rounded-md" @click="toggleNav">
                    <p class="pr-8">Show Filter</p>
                    <i class="pi pi-arrow-circle-right"></i>
                </button>
                <MobileSidebar v-if="navToggled" @navClosed="closeNav"/>
            </div>
            <div class="lg:w-2/3">
                <Courses />
            </div>
        </div>
    </div>
</template>

<script>
import Courses from "../../components/Courses/Courses.vue";
import Sidebar from "../../components/Courses/Sidebar.vue";
import MobileSidebar from "../../components/Courses/Mobile-Sidebar.vue";

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
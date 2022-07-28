<template>
    <div class="w-full flex flex-col items-center bg-gray-50 py-12 md:py-16 px-4 sm:px-8 lg:px-44">
        <div class="container"> 
            <div class="flex flex-col items-center">
                <p class="text-sm text-gray-600">Popular Category</p>
                <div class="flex justify-center text-base lg:text-2xl font-semibold">
                    <p class="text-red-600 p-1">Hot & Popular</p>
                    <p class="p-1">Category</p>
                </div>
            </div>

            <div class="grid grid-cols-1 grid-view sm:grid-cols-2 md:grid-cols-3 pt-4">
                <div class="p-2 lg:p-3" v-for="(category, index) in hot_categories" :key="index">
                    <router-link :to="{ path: '/' + category.slug }">
                        <div class="flex items-center rounded-md p-5 bg-gray-200" :class="category.color">
                            <div>
                                <!-- <img class="rounded-full h-12 lg:h-20 w-12 lg:w-20 bg-cover" :src="category.img" alt="Image"> -->
                                <i class="" :class="category.icon" style="font-size:2.5rem;"></i>
                            </div>
                            <div class="p-2 lg:p-4">
                                <p class="text-sm lg:text-base font-semibold" :class="category.text_color">{{ category.title }}</p>
                                <div class="flex items-center font-medium text-xs lg:text-sm text-gray-600">
                                    <p class="pi pi-book" style="font-size:0.8rem;"></p>
                                    <p class="ml-1">{{ category.course_count }} Courses</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState ({
            hot_categories: state => state.home.hot_categories
        }),
    },

    mounted() {
        this.$store.dispatch('home/getCategories');
    }
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
    .grid-view {
        @apply grid grid-cols-2;
    }
}

@media screen and (max-width: 480px) {
    .grid-view {
        @apply grid grid-cols-1;
    }
}
</style>
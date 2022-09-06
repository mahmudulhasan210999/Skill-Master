<template>
    <div class="w-full flex flex-col items-center bg-gray-50 py-12 md:py-16 px-4 sm:px-8 lg:px-20 xl:px-28 2xl:px-44">
        <div class="container"> 
            <div class="flex flex-col items-center">
                <p class="text-sm text-gray-600">Popular Category</p>
                <div class="flex justify-center text-base lg:text-2xl font-semibold">
                    <p class="text-alternate2 p-1">Hot & Popular</p>
                    <p class="p-1">Category</p>
                </div>
            </div>
            <div class="bg-gray-100 rounded-xl mt-4">
                <div class="overflow-x-auto">
                    <div class="category-box">
                        <div class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 p-8">
                            <div class="" v-for="(category, index) in hot_categories" :key="index">
                                <router-link :to="{ path: '/courses/' + category.slug }">
                                    <div class="flex items-center rounded-lg p-3 bg-white h-24" :class="category.color">
                                        <div>
                                            <i class="p-2 bg-alternate2 rounded-md" :class="category.icon" style="font-size:2.5rem;"></i>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-base font-semibold" :class="category.text_color">{{ category.title }}</p>
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
@media screen and (max-width: 768px) {
    .category-box {
        width: 768px;
    }
}

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
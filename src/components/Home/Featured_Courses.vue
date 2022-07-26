<template>
    <div class="w-full flex flex-col items-center py-6 lg:py-12 xl:px-44 bg-green-50">
        <div class="container">
        <p class="text-xl font-semibold px-8 xl:px-2 py-2">Featured Courses</p>

        <div>
            <Carousel :value="featured_courses" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div class="p-3">
                        <router-link :to="{ path: '/courses/' + slotProps.data.slug}">
                            <div class="image-container">
                                <img class="h-76 w-full bg-cover" :src="slotProps.data.img" alt="Image">
                                <div class="top-left px-3 py-1 bg-white shadow-lg rounded-sm text-gray-600 text-sm font-semibold">${{ slotProps.data.price }}</div>
                            </div>
                        </router-link>
                        <div class="border border-gray-200">
                            <router-link :to="{ path: '/courses/' + slotProps.data.slug}">
                                <p class="lg:text-xl p-1 lg:p-3">{{ slotProps.data.title }}</p>
                            </router-link>
                            <div class="flex justify-between text-xs text-gray-500 px-2 lg:px-3">
                                <p>★ {{ slotProps.data.views }} Views</p>
                                <p>⏲ {{ slotProps.data.duration }}</p>
                                <p>★ {{ slotProps.data.reviews }} Reviews</p>
                            </div>
                            <div class="flex justify-between border-t border-gray-200 p-2 lg:p-3 mt-2">
                                <router-link :to="{ path: '/course/' + slotProps.data.instructor_slug}">
                                    <div class="flex">
                                        <img class="rounded-full h-8 w-8 lg:h-10 lg:w-10" :src="slotProps.data.instructor_img" alt="Image">
                                        <p class="p-2 text-xs lg:text-sm font-medium text-slate-600">{{ slotProps.data.instructor }}</p>
                                    </div>
                                </router-link>
                                <p class="p-1 sm:p-2 border rounded-xl border-green-100 bg-green-100 text-green-500 text-xs lg:text-sm">★ {{ slotProps.data.lectures }} lectures</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Carousel from 'primevue/carousel';

export default {
    props: ['slug'],

    data() {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '840px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '500px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        }
    },
    components: {
        Carousel,
    },
    computed: {
        ...mapState ({
            featured_courses: state => state.courses.featured_courses
        }),
    }
}
</script>

<style scoped>
.image-container {
    position: relative;
    text-align: center;
    color: white;
}

.top-left {
    position: absolute;
    top: 20px;
    left: 20px;
}
</style>
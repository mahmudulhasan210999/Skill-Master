<template>
    <div class="w-full flex flex-col items-center py-12 md:py-16 xl:px-44 bg-sky-50">
        <div class="container">
        <p class="text-xl font-semibold px-8 xl:px-2 py-2">Featured Courses</p>

        <div>
            <Carousel :value="featured_courses" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div class="p-3">
                        <router-link :to="{ path: '/course/' + slotProps.data.slug}">
                            <div class="image-container">
                                <img class="h-60 w-full bg-cover" :src="slotProps.data.thumb" alt="Image">
                                <div class="top-left px-3 py-1 bg-white shadow-lg rounded-sm text-gray-600 text-sm font-semibold">${{ slotProps.data.price }}</div>
                            </div>
                        </router-link>
                        <div class="border border-gray-200 bg-white">
                            <router-link :to="{ path: '/course/' + slotProps.data.slug}">
                                <p class="lg:text-xl p-1 lg:p-3">{{ slotProps.data.title }}</p>
                            </router-link>
                            <div class="flex justify-between text-xs text-gray-500 px-2 lg:px-3">
                                <div class="flex items-center">
                                    <i class="pi pi-video pt-0.5 mr-1" style="font-size:0.8rem;"></i>
                                    <p>{{ slotProps.data.views }} Views</p>
                                </div>
                                <div class="flex items-center">
                                    <i class="pi pi-clock pt-0.5 mr-1" style="font-size:0.8rem;"></i>
                                    <p>{{ slotProps.data.runTime }} Minutes</p>
                                </div>
                                <div class="flex items-center">
                                    <i class="pi pi-star-fill pt-0.5 mr-1" style="font-size:0.8rem;"></i>
                                    <p>{{ slotProps.data.rating }} Rating</p>
                                </div>
                            </div>
                            <div class="flex justify-between border-t border-gray-200 p-2 lg:p-3 mt-2"> 
                                <router-link :to="{ path: '/instructor/' + slotProps.data.id}">
                                    <div class="flex">
                                        <img class="rounded-full h-8 w-8 lg:h-10 lg:w-10" :src="slotProps.data.author.thumb" alt="Image">
                                        <p class="p-2 text-sm font-medium text-gray-600">{{ slotProps.data.author.name }}</p>
                                    </div>
                                </router-link>
                                <p class="p-1 sm:p-2 rounded-xl bg-sky-50 text-gray-500 text-xs lg:text-sm">{{ slotProps.data.lectureCount }} lectures</p>
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
    },

    mounted() {
        this.$store.dispatch('courses/getFeaturedCourses')
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
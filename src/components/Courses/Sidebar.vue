<template>
    <div class="w-full flex flex-col pr-6 xl:pr-16">
        <div class="w-full lg:border-2 border-gray-200 rounded-md p-6 xl:p-4 xxl:p-6">
            <div class="w-full">
                <span class="p-input-icon-right w-full">
                    <i class="pi pi-search" />
                    <InputText class="w-full" type="text" v-model="value" placeholder="Search Courses..." />
                </span>
            </div>
            <div class="mt-6 w-full">
                <p class="text-xl font-semibold text-black">Course Categories</p>
                <div class="flex my-2 text-left w-full" v-for="(category, index) in categories" :key="index">
                    <router-link class="w-full text-gray-600 hover:text-primary" :to="{ path: '/courses/' + category.slug }">
                        <p class="w-full text-sm py-1">{{ category.title}} ({{category.course_count}})</p>
                    </router-link>
                </div>
            </div>
            <div class="mt-6">
                <p class="text-xl font-semibold text-black">Price</p>
                <div class="flex my-2 text-left" v-for="(price, index) in prices" :key="index">
                    <input class="mb-0.5 mr-1.5" type="radio" id="price" name="price" :value="price" v-model="selectedPrice">
                    <label class="text-gray-600 text-sm" for="price">{{price.type}} ({{price.course}})</label><br>
                </div>
            </div>
        </div>
        <div class="w-full lg:border-2 border-gray-200 rounded-md mt-8 px-6 lg:p-6">
            <div>
                <p class="text-xl font-semibold text-black">Related Courses</p>
                <div class="flex my-3 text-left" v-for="(course, index) in courses" :key="index">
                    <router-link :to="{ path: '/courses/' + course.slug}">
                        <div class="flex w-full text-sm">
                            <div>
                                <img class="h-20 w-20 bg-cover" :src="course.img" alt="">
                            </div>
                            <div class="ml-3 font-medium flex flex-col justify-center">
                                <p class="text-gray-600">{{course.title}}</p>
                                <p class="text-gray-600 font-semibold">${{course.price}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <div class="mt-6">
                <p class="text-xl font-semibold text-black">Tags</p>
                <div class="grid grid-cols-3">
                    <div class="flex items-center my-1" v-for="(tag, index) in categories" :key="index">
                        <p class="px-3.5 py-1 bg-gray-200 mx-1 rounded-sm text-gray-600 text-sm cursor-pointer hover:text-white hover:bg-primary">{{tag.category}}</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';

export default {
    data() {
        return {
            value: null,
            selectedCategory: null,
            selectedPrice: null,
            prices: [
                {
                    id: 1,
                    type: 'Free',
                    course: 60
                },
                {
                    id: 2,
                    type: 'Paid',
                    course: 72
                },
            ],
        }
    },
    components: {
        InputText,
        RadioButton
    },
    computed: {
        ...mapState ({
            courses: state => state.courses.courses,
            categories: state => state.home.hot_categories
        }),
    },

    mounted() {
        this.$store.dispatch('home/getCategories')
    }
}
</script>

<style>

</style>
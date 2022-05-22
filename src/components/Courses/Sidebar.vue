<template>
    <div class="w-full flex flex-col pr-16">
        <div class="w-full border-2 border-gray-200 rounded-md p-6">
            <div class="">
                <span class="p-input-icon-right">
                    <i class="pi pi-search" />
                    <InputText class="w-72" type="text" v-model="value" placeholder="Search Courses..." />
                </span>
            </div>
            <div class="mt-6">
                <p class="text-xl font-semibold text-black">Course Categories</p>
                <div class="flex my-2 text-left" v-for="(category, index) in categories" :key="index">
                    <input class="mt-1 mr-1.5" type="radio" id="category" name="category" :value="category" v-model="selectedCategory">
                    <label class="text-gray-600 text-sm" for="category">{{category.category}} ({{category.course}})</label><br>
                </div>
            </div>
            <div class="mt-6">
                <p class="text-xl font-semibold text-black">Price</p>
                <div class="flex my-2 text-left" v-for="(price, index) in prices" :key="index">
                    <input class="mt-1 mr-1.5" type="radio" id="price" name="price" :value="price" v-model="selectedPrice">
                    <label class="text-gray-600 text-sm" for="price">{{price.type}} ({{price.course}})</label><br>
                </div>
            </div>
        </div>
        <div class="w-full border-2 border-gray-200 rounded-md mt-8 p-6">
            <div>
                <p class="text-xl font-semibold text-black">Related Courses</p>
                <div class="flex my-3 text-left" v-for="(course, index) in courses" :key="index">
                    <router-link :to="{ path: '/courses/' + course.slug}">
                        <div class="flex w-full text-sm">
                            <div class="w-1/3">
                                <img class="h-20 w-5/6" :src="course.img" alt="">
                            </div>
                            <div class="w-2/3 font-medium">
                                <p class="text-gray-600">{{course.title}}</p>
                                <p class="text-yellow-600">★★★★★</p>
                                <p class="text-rose-600 font-semibold">${{course.price}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="mt-6">
                <p class="text-xl font-semibold text-black">Tags</p>
                <div class="grid grid-cols-3">
                    <div class="flex items-center my-1" v-for="(tag, index) in categories" :key="index">
                        <p class="px-3.5 py-1 bg-gray-200 mx-1 rounded-sm text-gray-600 text-sm cursor-pointer hover:text-white hover:bg-rose-600">{{tag.category}}</p>
                    </div>
                </div>
            </div>
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
            categories: [
                {
                    id: 1,
                    category: 'Backend',
                    course: 7
                },
                {
                    id: 1,
                    category: 'Frontend',
                    course: 15
                },
                {
                    id: 1,
                    category: 'General',
                    course: 9
                },
                {
                    id: 1,
                    category: 'Software',
                    course: 11
                },
                {
                    id: 1,
                    category: 'Photography',
                    course: 5
                },
            ],
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
            courses: state => state.courses.courses
        }),
    },
}
</script>

<style>

</style>
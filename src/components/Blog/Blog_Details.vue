<template>
    <div class="w-full flex flex-col">
        <div v-for="(blog, index) in blogs" :key="index">
            <div v-if="blog.slug == slug">
                <!-- Blog Details main design -->
                <div class="bg-white border rounded-md border-gray-200 p-6">
                    <img class="rounded-md" :src="blog.writer_img" alt="Image">
                    <div class="flex items-center py-4">
                        <div class="flex items-center text-sm text-gray-500">
                            <i class="pi pi-user"></i>
                            <p class="px-2">by {{ blog.writer }}</p>
                        </div>
                        <div class="flex items-center ml-6 text-sm text-gray-500">
                            <i class="pi pi-inbox"></i>
                            <p class="px-2">45 Comments</p>
                        </div>
                    </div>
                    <p class="text-xl md:text-xl lg:text-4xl font-bold py-2">{{ blog.title }}</p>
                    <p class="py-2 text-slate-500 mt-6">{{ blog.blog }}</p>

                    <div class="flex flex-col items-end my-6 pb-8 border-b">
                        <p class="text-sm md:text-base font-semibold my-2">Social Share</p>
                        <div class="flex">
                            <div class="mx-4">
                                <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                            </div>
                            <div class="mx-4">
                                <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                            </div>
                            <div class="mx-4">
                                <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                            </div>
                            <div class="ml-4">
                                <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-between text-sm md:text-base mt-8">
                        <button class="bg-rose-600 text-white px-5 py-3">Prev Post</button>
                        <button class="bg-rose-600 text-white px-5 py-3">Next Post</button>
                    </div>
                </div>

                <div class="bg-white border rounded-md border-gray-200 p-4 mt-4 lg:mt-8 text-center flex flex-col items-center">
                    <img class="rounded-full h-32 w-32" :src="blog.writer_img" alt="Image">
                    <p class="font-semibold my-3 text-lg">{{ blog.writer }}</p>
                    <div class="flex mb-4">
                        <div class="mx-4">
                            <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                        </div>
                        <div class="mx-4">
                            <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                        </div>
                        <div class="mx-4">
                            <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                        </div>
                        <div class="ml-4">
                            <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae, maiores debitis nisi quisquam, optio minima totam necessitatibus commodi quos unde quis, eum adipisci atque. Quod expedita repellendus tempora assumenda!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Primeicons from 'primeicons/primeicons.css';

export default {
    components: {
        Primeicons,
    },

    props: ['slug'],

    data() {
        return {

        }
    },

    methods: {

    },

    computed: {
        ...mapState ({
            blogs: state => state.blogs.blogs
        }),
    },
}
</script>
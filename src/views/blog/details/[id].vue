<template>
    <div class="w-full flex flex-col items-center">
        <div class="container">
            <div class="text-center p-8 md:p-12">
                <p class="text-xl md:text-xl lg:text-2xl font-bold py-2">{{ getDetails.title }}</p>
                <div class="flex justify-center text-primary">
                    <router-link to="/"><p class="text-sm lg:text-base">Home</p></router-link>
                    <p class="px-2 text-sm lg:text-base"> / </p>
                    <p class="text-sm lg:text-base">Blog</p>
                </div>
            </div>

            <div class="w-full flex flex-col lg:flex-row bg-gray-100 p-6 md:p-12 lg:p-10 xl:p-16 2xl:p-10 mb-16">
                <div class="w-full lg:w-2/3">
                    <div class="w-full flex flex-col">

                        <!-- Blog Details starts -->
                        <div class="bg-white border rounded-md border-gray-200 p-6">
                            <img class="rounded-md h-56 sm:h-72 md:h-96 w-full bg-cover" :src="getDetails.headerImage" alt="Image">
                            <div class="flex items-center py-3">
                                <div class="flex items-center text-sm text-gray-500">
                                    <i class="pi pi-user" style="font-size:0.9rem;"></i>
                                    <p class="px-1.5" >{{ getDetails.author.author_name }}</p>
                                </div>
                            </div>
                            <p class="text-gray-600 mt-4" v-html="getDetails.content"></p>
                        </div>

                        <div class="bg-white border rounded-md border-gray-200 p-4 mt-4 lg:mt-8 text-center flex flex-col items-center">
                            <img class="rounded-full h-32 w-32" :src="getDetails.author.thumb" alt="Image">
                            <p class="font-semibold my-3 text-lg">{{ getDetails.author.author_name }}</p>
                            <div class="flex mb-4">
                                <div class="mx-4">
                                    <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-globe text-primary" style="font-size: 18px;"></i></a>
                                </div>
                                <div class="mx-4">
                                    <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook text-primary" style="font-size: 18px;"></i></a>
                                </div>
                                <div class="mx-4"> 
                                    <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter text-primary" style="font-size: 18px;"></i></a>
                                </div>
                                <div class="ml-4">
                                    <a target="_blank" :href='getDetails.author.twitter'><i class="pi pi-linkedin text-primary" style="font-size: 18px;"></i></a>
                                </div>
                            </div>
                            <p class="text-sm text-gray-500">{{ getDetails.author.bio }}</p>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/3 pt-4 lg:pt-0 lg:ml-8">
                    <Sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../../components/Blog/Sidebar.vue'
import { mapState } from "vuex";
import Primeicons from 'primeicons/primeicons.css';

export default {
    components: {
        Sidebar,
        Primeicons,
    },
    
    computed: {
        ...mapState ({
            getDetails: state => state.blogs.getDetails
        }),
    },

    created() {
        this.$store.dispatch('blogs/getBlogDetails', this.$route.params.id)
    },
}
</script>
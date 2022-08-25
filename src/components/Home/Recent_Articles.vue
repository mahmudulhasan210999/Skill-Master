<template>
    <div class="flex flex-col items-center w-full my-12 md:my-16 px-4 sm:px-8 xl:px-44">
        <div class="container">
            <p class="text-lg lg:text-xl font-semibold py-2">Recent Blogs</p>

            <div class="overflow-x-auto pb-4">
                <div class="category-box">
                    <div class="grid grid-cols-3 md:grid-cols-3 gap-5">
                        <div v-for="(blog, index) in blogs" :key="index">
                            <div>
                                <div>
                                    <router-link :to="{ path: '/blog/' + blog.slug}"><img class="lg:p-0 w-full bg-cover rounded-t-lg small" :src="blog.headerImage" alt="Image"></router-link>
                                </div>
                                <div class="p-2 lg:p-3 border border-gray-200 rounded-b-lg">
                                    <router-link :to="{ path: '/blog/' + blog.slug}"><p class="h-12 text-sm md:text-base xl:text-lg font-medium">{{ blog.title }}</p></router-link>
                                    <div class="flex">
                                        <div class="flex items-center">
                                            <img class="rounded-full h-6 w-6 md:h-8 md:w-8 bg-cover" :src="blog.author_thumb" alt="Image">
                                        </div>
                                        <p class="p-2 text-sm text-gray-600">{{ blog.author_name }}</p>
                                    </div>
                                </div>
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
            blogs: state => state.blogs.recent_blogs,
        }),
    },

    mounted() {
        this.$store.dispatch('blogs/getRecentBlogs')
    }
}
</script>

<style scoped>
    @media screen and (max-width: 1024px) {
        .category-box {
            width: 1024px;
        }
    }

    @media screen and (min-width: 1381px) {
        .small {
            height: 260px;;
        }
    }

    @media screen and (max-width: 1380px) {
        .small {
            height: 240px;;
        }
    }

    @media screen and (max-width: 640px) {
        .small {
            @apply h-60;
        }
    }

    @media screen and (max-width: 480px) {
        .small {
            @apply h-56;
        }
    }
</style>
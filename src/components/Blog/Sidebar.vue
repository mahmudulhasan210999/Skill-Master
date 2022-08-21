<template>
    <div class="w-full md:flex md:flex-col">

        <!-- Categories -->
        <div class="bg-white border rounded-md border-gray-200 p-6">
            <p class="text-xl font-bold py-1">Blogs by Category</p>
            <div v-for="(category, index) in categories" :key="index">
                <div class="flex justify-between p-2 border-b border-gray-200 text-sm text-gray-600">
                    <router-link :to="{ path: '/blogs/' + category.slug }" >
                        <p>{{category.title}}</p>
                    </router-link>
                    <p>{{category.blog_count}}</p>
                </div>
            </div>
        </div>

        <!-- Recent blogs -->
        <div class="bg-white rounded-md border border-gray-200 p-6 mt-4 lg:mt-8">
            <p class="text-xl font-bold py-1">Recent Blogs</p>
            <div class="flex my-3 text-left" v-for="(blog, index) in blogs" :key="index">
                <router-link :to="{ path: '/blog/' + blog.slug }">
                    <div class="flex w-full text-sm">
                        <img class="h-20 w-20" :src="blog.headerImage" alt="Image">
                        <div class="ml-4 font-medium flex flex-col justify-center">
                            <p class="text-gray-700 text-base lg:text-sm xl:text-base font-semibold text-gray-600">{{blog.title}}</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <img class="rounded-full h-6 w-6" :src="blog.author_thumb" alt="Image">
                                <p class="m-1">{{blog.author_name}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- Tags Cloud -->
        <div class="mt-4 lg:mt-8 p-6 bg-white rounded-md border border-gray-200">
            <p class="text-xl font-semibold text-black">Tags</p>
            <div class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3">
                <div class="flex items-center my-1" v-for="(tag, index) in tags" :key="index">
                    <p class="w-full text-center py-2 mx-1 rounded-md text-gray-600 border text-sm cursor-pointer hover:text-white hover:bg-primary">{{tag.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import { mapState } from "vuex";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  data() {
    return {
    }
  },
  components: {
      InputText,
      Button,
  },

  computed: {
      ...mapState ({
          hot_categories: state => state.home.hot_categories,
          blogs: state => state.blogs.recent_blogs,
          tags: state => state.blogs.tags,
          categories: state => state.blogs.categories
      }),
  },

  mounted() {
      this.$store.dispatch('blogs/getRecentBlogs'),
      this.$store.dispatch('blogs/getCategories'),
      this.$store.dispatch('blogs/getBlogDetails')
  }
}
</script>
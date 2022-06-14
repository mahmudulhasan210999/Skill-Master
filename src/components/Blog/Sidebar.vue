<template>
    <div class="w-full md:flex md:flex-col">

        <!-- Categories -->
        <div class="bg-white border rounded-md border-gray-200 p-6">
            <p class="text-xl font-bold py-1">Categories</p>
            <div v-for="(category, index) in categories" :key="index">
                <div class="flex justify-between p-2 border-b text-sm">
                  <p>{{category.title}}</p>
                  <p>{{category.blog_count}}</p>
                </div>
            </div>
        </div>

        <!-- Recent blogs -->
        <div class="bg-white rounded-md border border-gray-200 p-6 mt-4 lg:mt-8">
            <p class="text-xl font-bold py-1">Recent blogs</p>
            <div class="flex my-3 text-left" v-for="(blog, index) in blogs" :key="index">
                <router-link :to="{ path: '/blog/' + blog.slug, params: { id: blog.title }}">
                    <div class="flex w-full text-sm">
                        <div class="w-1/3">
                            <img class="h-20 w-5/6" :src="blog.headerImage" alt="Image">
                        </div>
                        <div class="w-2/3 font-medium">
                            <p class="text-gray-700 text-base xl:text-lg font-semibold">{{blog.title}}</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <!-- <i class="pi pi-clock"></i> -->
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
            <div class="grid grid-cols-3">
                <div class="flex items-center my-1" v-for="(tag, index) in tags" :key="index">
                    <p class="w-full text-center py-2 mx-1 rounded-sm text-gray-600 border text-sm cursor-pointer hover:text-white hover:bg-rose-600">{{tag.title}}</p>
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
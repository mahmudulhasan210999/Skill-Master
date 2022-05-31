<template>
  <div class="w-full my-12 px-8 xl:px-44">
    <p class="text-lg lg:text-xl font-semibold p-2">Recent Blogs</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div class="xl:p-3 " v-for="(blog, index) in blogs" :key="index">
        <div class="p-3 lg:p-4">
          <div>
            <img class="h-60 md:h-52 xl:h-60 w-full" :src="blog.headerImage" alt="Image">
          </div>
          <div class="p-1 lg:p-3 border border-gray-200">
            <p class="lg:text-xl font-medium p-1 lg:p-2">{{ blog.title }}</p>
            <div class="flex px-1 lg:px-2">
              <img class="rounded-full h-9 w-9" :src="blog.author_thumb" alt="Image">
              <p class="p-2 text-sm text-gray-600">{{ blog.author_name }}</p>
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
  components: {
    
  },
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

</style>
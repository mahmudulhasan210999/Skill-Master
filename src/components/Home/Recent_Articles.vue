<template>
  <div class="w-full my-12 px-8 xl:px-44">
    <p class="text-lg lg:text-xl font-semibold p-2">Recent Blogs</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div class="xl:p-3 " v-for="(blog, index) in blogs" :key="index">
        <div class="p-3 lg:p-4">
          <div>
            <router-link :to="{ path: '/blog/' + blog.slug}"><img class="h-52 xl:h-60 w-full small" :src="blog.headerImage" alt="Image"></router-link>
          </div>
          <div class="p-1 lg:p-3 border border-gray-200">
            <router-link :to="{ path: '/blog/' + blog.slug}"><p class="text-base lg:text-xl font-medium p-1 lg:p-2">{{ blog.title }}</p></router-link>
            <div class="flex px-1 lg:px-2">
              <div class="flex items-center">
                <img class="rounded-full h-6 w-6 md:h-8 md:w-8" :src="blog.author_thumb" alt="Image">
              </div>
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
@media screen and (max-width: 360px) {
  .small {
    @apply h-32;
  }
}
</style>
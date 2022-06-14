<template>
  <div class="w-full flex flex-col items-center px-4 md:px-8 lg:px-28 xl:px-44 pb-16">
    <div class="container">
      <div class="text-center p-8">
      <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-4">New Top Articles</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-rose-600 text-sm lg:text-base">Home</p></router-link>
        <p class="px-2 text-sm lg:text-base"> / </p>
        <p class="text-sm lg:text-base">Blogs</p>
      </div>
    </div>

    <!-- BLOG LIST -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div class="p-6" v-for="(blog, index) in blogs" :key="index">
        <div>
          <div>
            <router-link :to="{ path: '/blog/' + blog.slug}"><img class="rounded-t-lg lg:p-0 h-52 xl:h-60 w-full small" :src="blog.headerImage" alt="Image"></router-link>
          </div>
          <div class="px-4 pt-4 bg-white rounded-b-lg shadow-md">
            <router-link :to="{ path: '/blog/' + blog.slug}"><p class="text-base lg:text-xl font-medium">{{ blog.title }}</p></router-link>
            <div class="flex items-center py-2">
              <img class="rounded-full h-6 w-6 md:h-8 md:w-8 bg-cover" :src="blog.author_thumb" alt="Image">
              <p class="font-medium text-xs text-gray-600 lg:text-sm pl-2">{{ blog.author_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END OF BLOG LIST -->
    
    <!-- PAGINATION -->
    <div class="mt-4">
      <Pagination :total="blog_count" @pageChange="handlePageChange"></pagination>
    </div>
    <!-- END OF PAGINATION -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Pagination from "../../components/Pagination/pagination.vue";

export default {
  data() {
    return {
      blog_count: '',
      blogs:[],
      current: 1,
    }
  },

  components: {
    Pagination
  },

  computed: {
    ...mapState ({
      blog: state => state.blogs.blogs,
      count: state => state.blogs.count,
    }),
  },

  watch:{
    blog(newValue, oldValue){
      this.blogs = this.blog
      this.blog_count = this.count
    }
  },

  mounted() {
     this.$store.dispatch('blogs/getBlogs', this.current)
  },

  methods: {
    handlePageChange(page) {
      this.$store.dispatch('blogs/getBlogs', page)
    },
  }
}
</script>

<style scoped>
.pagination-hover {
    @apply cursor-pointer;
}

.pagination-hover:hover {
    @apply bg-gray-200;
}

@media screen and (max-width: 360px) {
  .small {
    @apply h-40;
  }
}
</style>
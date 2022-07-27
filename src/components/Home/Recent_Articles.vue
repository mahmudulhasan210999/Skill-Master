<template>
  <div class="flex flex-col items-center w-full my-12 px-8 xl:px-44">
    <div class="container">
      <p class="text-lg lg:text-xl font-semibold py-2">Recent Blogs</p>

    <div class="mt-2 product-list">
      <div v-for="(blog, index) in blogs" :key="index">
        <div>
          <div>
            <router-link :to="{ path: '/blog/' + blog.slug}"><img class="lg:p-0 h-44 md:h-52 xl:h-60 w-full small" :src="blog.headerImage" alt="Image"></router-link>
          </div>
          <div class="p-2 lg:p-3 border border-gray-200">
            <router-link :to="{ path: '/blog/' + blog.slug}"><p class="h-12 text-sm md:text-base xl:text-xl font-medium">{{ blog.title }}</p></router-link>
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
    .product-list {
        @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 2xl:gap-8;
    }

    @media screen and (max-width: 840px) {
        .product-list {
            @apply grid grid-cols-2;
        }
    }

    @media screen and (max-width: 480px) {
        .product-list {
            @apply px-6 grid grid-cols-1;
        }

        .small {
            @apply h-56;
        }
    }

    @media screen and (max-width: 410px) {
        .small {
            @apply h-48;
        }
    }
</style>
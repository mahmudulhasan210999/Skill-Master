<template>
  <div class="w-full flex flex-col px-4 md:px-8 lg:px-28 xl:px-44 pb-16">
    <div class="text-center p-8">
      <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-4">New Top Articles</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-rose-600 text-sm lg:text-base">Home</p></router-link>
        <p class="px-2 text-sm lg:text-base"> / </p>
        <p class="text-sm lg:text-base">Blogs</p>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div class="p-6" v-for="(blog, index) in blogs" :key="index">
        <div>
          <div>
            <router-link :to="{ path: '/blog/' + blog.slug, params: { id: blog.title }}"><img class="rounded-t-lg lg:p-0" :src="blog.img" alt="Image"></router-link>
          </div>
          <div class="px-4 pt-4 bg-white rounded-b-lg shadow-md">
            <p class="lg:text-xl font-medium">{{ blog.title }}</p>
            <div class="flex items-center py-2">
              <img class="rounded-full h-8 w-8" :src="blog.writer_img" alt="Image">
              <p class="font-medium text-xs text-gray-600 lg:text-sm pl-2">{{ blog.writer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center p-4">
      <button class="border border-gray-300 text-rose-600 hover:border-rose-600 rounded-md hover:text-white hover:bg-rose-600 text-sm lg:text-base px-6 py-3">Load More ⟳</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ['slug'],

  computed: {
    ...mapState ({
      blogs: state => state.blogs.blogs
    }),
  },
}
</script>
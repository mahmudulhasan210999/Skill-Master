<template>
  <div class="">
    <!-- Top design -->
    <div class="text-center p-12">
      <p class="text-5xl font-bold p-4">New & Top Articles</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-red-500">Home</p></router-link>
        <p class="px-2"> / </p>
        <p>Blogs</p>
      </div>
    </div>

    <div class="grid grid-cols-3 px-40">
      <div class="p-3 " v-for="(blog, index) in blogs" :key="index">
        <div class="p-5">
          <div>
            <router-link :to="{ path: '/blog/' + blog.slug, params: { id: blog.title }}"><img class="" :src="blog.img" alt="Image"></router-link>
          </div>
          <div class="p-4 border border-gray-200">
            <p class="text-xl font-medium">{{ blog.title }}</p>
            <div class="flex pt-2">
              <img class="rounded-full h-8 w-8" :src="blog.writer_img" alt="Image">
              <div class="pl-2"><p class="font-medium text-sm p-2">{{ blog.writer }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center p-10">
      <button class="border border-gray-500 rounded-md hover:bg-red-500 p-4">Load More ⟳</button>
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
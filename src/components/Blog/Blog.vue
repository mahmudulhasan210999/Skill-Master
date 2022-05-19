<template>
  <div class="w-full flex flex-col bg-gray-50 px-44 pb-16">
    <div class="text-center p-12">
      <p class="text-5xl font-bold p-4">New Top Articles</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-rose-600">Home</p></router-link>
        <p class="px-2"> / </p>
        <p>Blogs</p>
      </div>
    </div>

    <div class="grid grid-cols-3">
      <div class="p-4" v-for="(blog, index) in blogs" :key="index">
        <div>
          <div>
            <router-link :to="{ path: '/blog/' + blog.slug, params: { id: blog.title }}"><img class="rounded-t-lg" :src="blog.img" alt="Image"></router-link>
          </div>
          <div class="p-4 bg-white rounded-b-lg">
            <p class="text-xl font-medium">{{ blog.title }}</p>
            <div class="flex pt-2">
              <img class="rounded-full h-8 w-8" :src="blog.writer_img" alt="Image">
              <div class="pl-2"><p class="font-medium text-sm p-2">{{ blog.writer }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center p-4">
      <button class="border border-gray-400 hover:border-rose-600 rounded-md hover:text-white hover:bg-rose-600 px-6 py-3">Load More ⟳</button>
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
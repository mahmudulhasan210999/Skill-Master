<template>
  <div class="w-full flex flex-col">
    <div v-for="(blog, index) in blogs" :key="index">
      <div v-if="blog.slug == slug">
        <div class="bg-white border border-gray-200 p-4">
          <img class="" :src="blog.writer_img" alt="Image">
          <div class="flex py-4">
            <p class="pr-2">★ by {{ blog.writer }}</p>
            <p class="px-2">★ {{ blog.comments }} Comments</p>
          </div>
          <p class="text-4xl font-bold py-2">{{ blog.title }}</p>
          <p class="py-2 text-slate-500 pt-8">{{ blog.blog }}</p>

          <div class="py-4">
            <p class="font-semibold py-2">Social Share</p>
            <div class="flex">
              <div class="w-10">
                <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 22px; color: rgb(128,128,128)"></i></a>
              </div>
              <div class="w-10">
                <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 22px; color: rgb(128,128,128)"></i></a>
              </div>
              <div class="w-10">
                <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 22px; color: rgb(128,128,128)"></i></a>
              </div>
              <div class=" ">
                <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 22px; color: rgb(128,128,128)"></i></a>
              </div>
            </div>
          </div>

          <div class="flex justify-between pt-6">
            <button class="bg-rose-600 text-white p-4">Prev Post</button>
            <button class="bg-rose-600 text-white p-4">Next Post</button>
          </div>
        </div>

        <div class="bg-white border border-gray-200 p-4 mt-8 text-center">
          <img class="rounded-full h-32 w-32" :src="blog.writer_img" alt="Image">
          <p class="font-semibold py-2">{{ blog.writer }}</p>
          <p class="text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae, maiores debitis nisi quisquam, optio minima totam necessitatibus commodi quos unde quis, eum adipisci atque. Quod expedita repellendus tempora assumenda!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Primeicons from 'primeicons/primeicons.css';

export default {
  components: {
    Primeicons,
  },

  props: ['slug'],

  computed: {
    ...mapState ({
      blogs: state => state.blogs.blogs
    }),
  },
}
</script>
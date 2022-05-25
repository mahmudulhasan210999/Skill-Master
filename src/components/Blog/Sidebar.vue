<template>
    <div class="w-full hidden md:flex md:flex-col">

        <!-- Categories -->
        <div class="bg-white border rounded-md border-gray-200 p-6">
            <p class="text-xl font-bold py-1">Categories</p>
            <div v-for="(category, index) in categories" :key="index">
                <div class="flex justify-between p-2 border-b text-sm">
                  <p>{{category.category}}</p>
                  <p>{{category.course}}</p>
                </div>
            </div>
        </div>

        <!-- Trending blogs -->
        <div class="bg-white rounded-md border border-gray-200 p-6 mt-8">
            <p class="text-xl font-bold py-1">Trending blogs</p>
            <div class="flex my-3 text-left" v-for="(blog, index) in blogs" :key="index">
                <router-link :to="{ path: '/blog/' + blog.slug, params: { id: blog.title }}">
                    <div class="flex w-full text-sm">
                        <div class="w-1/3">
                            <img class="h-20 w-5/6" :src="blog.img" alt="">
                        </div>
                        <div class="w-2/3 font-medium">
                            <p class="text-gray-700 text-lg font-semibold">{{blog.title}}</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <i class="pi pi-clock"></i>
                                <p class="m-1">{{blog.date}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- Tags Cloud -->
        <div class="mt-6 p-6 bg-white rounded-md border border-gray-200">
            <p class="text-xl font-semibold text-black">Tags</p>
            <div class="grid grid-cols-3">
                <div class="flex items-center my-1" v-for="(tag, index) in categories" :key="index">
                    <p class="w-full text-center py-2 mx-1 rounded-sm text-gray-600 border text-sm cursor-pointer hover:text-white hover:bg-red-600">{{tag.category}}</p>
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
       categories: [
                {
                    id: 1,
                    category: 'Backend',
                    course: 7
                },
                {
                    id: 1,
                    category: 'Frontend',
                    course: 15
                },
                {
                    id: 1,
                    category: 'General',
                    course: 9
                },
                {
                    id: 1,
                    category: 'Software',
                    course: 11
                },
                {
                    id: 1,
                    category: 'Photography',
                    course: 5
                },
            ],
    }
  },
  components: {
      InputText,
      Button,
  },

  computed: {
      ...mapState ({
          hot_categories: state => state.home.hot_categories,
          blogs: state => state.blogs.blogs
      }),
  },
}
</script>
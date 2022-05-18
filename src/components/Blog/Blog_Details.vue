<template>
  <div class="w-full">
    <div v-for="(blog, index) in blogs" :key="index">
      <div v-if="blog.slug == slug">
        <p class="font-medium text-sm p-2">{{ blog.writer }}</p>
        
      </div>
      <div>
        
      </div>
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
    // ...mapState ({
    //   blogs: state => state.blogs
    // }),
  },
}
</script>
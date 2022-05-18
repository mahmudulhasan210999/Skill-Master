<template>
  <div class="w-full my-10">
    <div class="px-40">
      <p class="text-xl font-semibold p-2">Recent Articles</p>
    </div>

    <div class="grid grid-cols-3 px-40">
      <div class="p-3 " v-for="(article, index) in articles" :key="index">
        <div class="p-4">
          <div>
            <img class="" :src="article.img" alt="Image">
          </div>
          <div class="p-3 border border-gray-200">
            <p class="text-xl font-medium p-2">{{ article.title }}</p>
            <div class="flex p-2">
              <img class="rounded-full h-9 w-9" :src="article.writer_img" alt="Image">
              <p class="p-2 text-sm">{{ article.writer }}</p>
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
      articles: state => state.home.articles
    }),
  }
}
</script>

<style scoped>

</style>
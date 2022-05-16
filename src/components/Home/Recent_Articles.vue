<template>
  <div class="w-full my-10">
    <div class="px-40">
      <p class="text-xl font-semibold p-2">Recent Articles</p>
    </div>

    <div class="grid grid-cols-3 px-40">
      <div class="p-3 " v-for="(article, index) in articles" :key="index">
        <div class="bg-red-100 rounded-md p-5">
          <div>
            <img class="" :src="article.img" alt="Image">
          </div>
          <div class="p-4">
            <p class="text-xl font-medium">{{ article.title }}</p>
            <p class="font-medium">{{ article.teacher }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    }
  }
}
</script>

<style scoped>

</style>
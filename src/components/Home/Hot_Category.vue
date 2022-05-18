<template>
  <div class="w-full flex flex-col bg-gray-50 pt-12 px-44">
    <div class="flex flex-col items-center">
      <p class="text-sm text-gray-600">Popular Category</p>
      <div class="flex justify-center text-2xl font-semibold">
        <p class="text-red-600 p-1">Hot & Popular</p>
        <p class="p-1">Category For Learn</p>
      </div>
    </div>

    <div class="grid grid-cols-3 pt-4">
      <div class="p-3" v-for="(category, index) in hot_categories" :key="index">
        <div class="flex bg-red-100 rounded-md p-5">
          <div>
            <img class="rounded-full h-20 w-20" :src="category.img" alt="Image">
          </div>
          <div class="p-4">
            <p class="text-xl font-medium">{{ category.title }}</p>
            <p class="font-medium">★ {{ category.classes }} Classes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState ({
      hot_categories: state => state.home.hot_categories
    }),
  }
}
</script>
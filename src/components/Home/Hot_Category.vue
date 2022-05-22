<template>
  <div class="w-full flex flex-col bg-gray-50 pt-28 pb-12 px-44">
    <div class="flex flex-col items-center">
      <p class="text-sm text-gray-600">Popular Category</p>
      <div class="flex justify-center text-2xl font-semibold">
        <p class="text-red-600 p-1">Hot & Popular</p>
        <p class="p-1">Category For Learn</p>
      </div>
    </div>

    <div class="grid grid-cols-3 pt-4">
      <div class="p-3" v-for="(category, index) in hot_categories" :key="index">
        <div class="flex rounded-md p-5" :class="category.color">
          <div>
            <img class="rounded-full h-20 w-20" :src="category.img" alt="Image">
          </div>
          <div class="p-4">
            <p class="text-base font-semibold" :class="category.text_color">{{ category.title }}</p>
            <div class="flex items-center font-medium text-sm text-gray-600">
              <p class="pi pi-book" style="font-size:0.8rem;"></p>
              <p class="ml-1">{{ category.classes }} Classes</p>
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
  computed: {
    ...mapState ({
      hot_categories: state => state.home.hot_categories
    }),
  }
}
</script>
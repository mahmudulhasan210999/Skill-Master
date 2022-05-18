<template>
  <div class="w-full bg-green-50  p-8">
    <div class="">
      <div class="flex justify-center px-32 p-4">
        <p class="text-2xl font-semibold text-red-600 p-1">Hot & Popular</p>
        <p class="text-2xl font-semibold p-1">Category For Learn</p>
      </div>
    </div>

    <div class="grid grid-cols-3 px-32">
      <div class="p-3 " v-for="(category, index) in hot_categories" :key="index">
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
  components: {

  },
  computed: {
    ...mapState ({
      hot_categories: state => state.hot_categories.hot_categories
    }),
  }
}
</script>
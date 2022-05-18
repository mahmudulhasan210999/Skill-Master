<template>
  <div class="w-full flex flex-col">
    <!-- Search -->
    <div class="bg-white border border-gray-200 p-6">
      <p class="text-xl font-bold py-1">Search</p>
      <div class="flex">
        <InputText class="h-16 w-72" type="text" v-model="value" placeholder="Search" />
        <Button icon="pi pi-search" class="p-button-danger h-16 w-28" />
      </div>
    </div>

    <!-- Categories -->
    <div class="bg-white border border-gray-200 p-6 mt-8">
      <p class="text-xl font-bold py-1">Categories</p>
      <div class="text-sm">
        <p class="py-2 border-b border-gray-200">Lifestyle</p>
        <p class="py-2 border-b border-gray-200">Travel</p>
        <p class="py-2 border-b border-gray-200">Fashion</p>
        <p class="py-2 border-b border-gray-200">Branding</p>
        <p class="py-2 border-b border-gray-200">Music</p>
      </div>
    </div>

    <!-- Trending Posts -->
    <div class="bg-white border border-gray-200 p-6 mt-8">
      <p class="text-xl font-bold py-1">Trending Posts</p>
      <div class="text-sm">
        <p class="py-2">Alonso Boom Boom</p>
        <p class="py-2">Travel Agency</p>
        <p class="py-2">Todays Work</p>
        <p class="py-2">Keyboard</p>
        <p class="py-2">Music</p>
      </div>
    </div>

    <!-- Tags Cloud -->
    <div class="bg-white border border-gray-200 p-6 mt-8">
      <p class="text-xl font-bold py-1">Tags Cloud</p>
      <div class="grid grid-cols-3">
        <div class="border border-gray-200 hover:bg-rose-600 m-1 p-2" v-for="(category, index) in hot_categories" :key="index">
          <p class="text-sm">{{ category.title }}</p>
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
  components: {
    InputText,
    Button,
  },

  computed: {
    ...mapState ({
      hot_categories: state => state.home.hot_categories
    }),
  },
}
</script>
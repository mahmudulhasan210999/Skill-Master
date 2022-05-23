<template>
  <div class="w-full flex flex-col">
    <div class="text-center px-12 py-20">
      <p class="text-2xl lg:text-5xl font-bold p-4">How To Increase Wordpress Speed</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-rose-600 text-sm lg:text-base">Home</p></router-link>
        <p class="px-2 text-sm lg:text-base"> / </p>
        <p class="text-sm lg:text-base">Blog Detail</p>
      </div>
    </div>

    <div class="flex bg-gray-100 px-2 lg:px-40 py-2 lg:py-20">
      <div class="w-2/3">
        <Details :slug="getDetails()" />
      </div>

      <div class="w-1/3 ml-8">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Details from '../../../components/Blog/Blog_Details.vue'
import Sidebar from '../../../components/Blog/Sidebar.vue'

export default {
  components: {
    Details,
    Sidebar,
  },

  methods: {
    getDetails() {
      return this.$route.params.id
    }
  },
}
</script>
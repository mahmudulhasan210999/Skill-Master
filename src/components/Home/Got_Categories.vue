<template>
  <div class="w-full bg-green-50 my-10">
    <div class="py-10">
      <div class="flex justify-between px-40">
        <div>
          <p class="text-xl font-semibold p-2">Got & Popular Categories</p>
        </div>
        <div class="flex border border-gray-500 ">
          <p class="p-2">Browse More</p>
        </div>
      </div>

      <div class="px-40">
        <Carousel :value="got_categories" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
            <div class="p-3">
              <img class="h-76 w-full" :src="slotProps.data.img" alt="Image">
              <div class="px-3 p-4 bg-white">
                <p class="text-xl p-2">{{ slotProps.data.title }}</p>
                <div class="flex text-sm">
                  <p class="p-2">★ {{ slotProps.data.videos }} Videos</p>
                  <p class="p-2">★ {{ slotProps.data.lessos }} Lessos</p>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Carousel from 'primevue/carousel';

export default {
  components: {
    Carousel,
  },
  computed: {
    ...mapState ({
      got_categories: state => state.home.got_categories
    }),
  }
}
</script>
<template>
  <div class="flex flex-col items-center w-full bg-green-50 my-6 lg:my-12 xl:px-44  ">
    <div class="container">
      <div class="py-6 md:py-10">
      <div class="flex justify-between px-4">
        <div>
          <p class="text-lg lg:text-xl font-semibold p-2">Got & Popular Categories</p>
        </div>
        <!-- <div class="flex border border-gray-400 rounded-md bg-white hover:border-primary hover:bg-primary">
          <button class="px-2 lg:px-4 lg:py-2 text-primary hover:text-white">Browse More</button>
        </div> -->
      </div>

      <div>
        <Carousel :value="got_categories" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" indicatorsContentClass="hidden">
          <template #item="slotProps">
            <div class="p-3">
              <img class="h-76 w-full bg-cover" :src="slotProps.data.img" alt="Image">
              <div class="p-3 bg-white">
                <p class="text-xl px-2 py-1">{{ slotProps.data.title }}</p>
                <div class="flex text-sm text-gray-500">
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
    
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Carousel from 'primevue/carousel';

export default {
  data() {
    return {
      responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '840px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '500px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
    }
  },
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
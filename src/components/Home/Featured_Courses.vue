<template>
  <div class="w-full my-10">
    <div class="flex justify-between px-40">
      <div>
        <p class="text-xl font-semibold p-2">Featured Courses</p>
      </div>
      <div class="flex border-b border-gray-500 ">
        <p class="p-2">Design</p>
        <p class="p-2">Development</p>
        <p class="p-2">Business</p>
        <p class="p-2">Accounting</p>
      </div>
    </div>

    <div class="px-40">
      <Carousel :value="featured_courses" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="p-3 ">
            <img class="h-76 w-full" :src="slotProps.data.img" alt="Image">
            <div class="border border-gray-200">
              <p class="text-xl p-3">{{ slotProps.data.title }}</p>
              <div class="flex justify-between text-sm px-3">
                <p class="">★ {{ slotProps.data.views }} Views</p>
                <p class="">⏲ {{ slotProps.data.duration }}</p>
                <p class="">★ {{ slotProps.data.reviews }} Reviews</p>
              </div>
              <div class="flex justify-between border-t border-gray-200 p-3 mt-2">
                <div class="flex">
                  <img class="rounded-full h-9 w-9" :src="slotProps.data.teacher_img" alt="Image">
                  <p class="p-2 text-sm font-medium text-slate-600">{{ slotProps.data.teacher_name }}</p>
                </div>
                <p class="p-2 ">★ {{ slotProps.data.lectures }} lectures</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
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
      featured_courses: state => state.featured_courses.featured_courses
    }),
  }
}
</script>

<style scoped>

</style>
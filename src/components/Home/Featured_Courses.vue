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
          <div class="p-3">
            <img class="h-76 w-full" :src="slotProps.data.img" alt="Image">
            <div class="text-center">
              <p class="text-xl p-2">{{ slotProps.data.title }}</p>
              <div class="flex justify-between px-3">
                <p class="">{{ slotProps.data.views }} Views</p>
                <p class="">{{ slotProps.data.duration }}</p>
                <p class="">★ {{ slotProps.data.reviews }} Reviews</p>
              </div>
              <div class="flex justify-between px-20">
                <p class="">{{ slotProps.data.teacher_name }}</p>
                <p class="">{{ slotProps.data.lectures }}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <!-- <div class="grid grid-cols-3 px-40">
      <div class="p-3" v-for="(course, index) in featured_courses" :key="index">
        <img :src="course.img" alt="Image">
        <p class="text-xl font-medium">{{ course.title }}</p>
        <p>{{ course.views }}</p>
        <p>{{ course.duration }}</p>
        <p>{{ course.reviews }}</p>
        <p>{{ course.teacher_name }}</p>
        <p>{{ course.lectures }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import Carousel from 'primevue/carousel';

export default {
  components: {
    Carousel,
  },
  computed: {
    featured_courses() {
      return this.$store.state.featured_courses;
    }
  }
}
</script>

<style scoped>

</style>
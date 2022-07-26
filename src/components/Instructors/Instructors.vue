<template>
  <div v-for="(instructor, index) in instructors" :key="index">
    <div v-if="instructor.slug == id">
      <!-- Instructor Details -->
        <div class="flex flex-col items-center px-6 py-8 md:px-40 md:py-12 bg-green-50">
        <div class="container">
          <div class="md:flex items-center">
            <div class="px-4">
          <img class="rounded-full h-40 w-40" :src="instructor.instructor_img" alt="Image">
        </div>
        <div class="pl-8 pt-4 md:pt-0 md:pl-4">
          <div class="flex items-center">
            <p class="text-xs text-red-600 px-2 py-1 bg-rose-200 rounded-sm">{{ instructor.experience }} Year Expe.</p>
          </div>

          <p class="text-xl font-semibold py-1">{{ instructor.instructor }}</p>

          <div class="flex text-gray-500 text-sm">
            <p class="pr-2">{{ instructor.designation }},</p>
            <p>{{ instructor.address }}</p>
          </div>

          <div class="flex text-xs md:text-sm pt-4">
            <div class="flex">
              <p class="pr-1 font-semibold">{{ instructor.points }}</p>
              <p class="text-gray-500 pr-4">Points</p>
            </div>
            <div class="flex">
              <p class="pr-1 font-semibold">{{ instructor.videos }}</p>
              <p class="text-gray-500 pr-4">Videos</p>
            </div>
            <div class="flex">
              <p class="pr-1 font-semibold">{{ instructor.lectures }}</p>
              <p class="text-gray-500 pr-4">Lectures</p>
            </div>
          </div>

          <div class="flex pt-4">
            <div class="mr-3">
              <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
            </div>
            <div class="mx-3">
              <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
            </div>
            <div class="mx-3">
              <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
            </div>
            <div class="ml-3">
              <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center px-4 py-4 md:px-20 md:py-8 lg:px-28 lg:py-10 xl:px-40 xl:py-12 2xl:px-24">
         <!-- Classes and Education button -->
        <div class="container">
          <div class="px-3">
          <button class="rounded h-12 w-24 text-sm text-black bg-gray-200 hover:text-primary my-2" @click="classes" :class="[{ 'clicked' : classDetails }]">Classes</button>
          <button class="rounded h-12 w-24 text-sm text-black bg-gray-200 hover:text-primary mx-2 my-2" @click="education" :class="[{ 'clicked' : educationDetails }]">Education</button>
        </div>

        <!-- v-if="classDetails" -->
        <div v-if="classDetails">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div class="p-3" v-for="(classes, index) in instructor.classes" :key="index">
              <img class="rounded-md" :src="classes.link" alt="Image">
              <p class="text-sm font-semibold px-2 pt-3">{{ classes.title }}</p>
              <div class="flex justify-between text-sm text-gray-500 pt-1 px-2">
                <p>Total Lessons {{ classes.total_lessons }}</p>
                <div class="flex">
                  <i class="pi pi-desktop flex items-center" style="font-size: 14px; color: rgb(128,128,128)"></i>
                  <p class="pl-2">{{ classes.chapter_name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- v-if="educationDetails" -->
        <div v-if="educationDetails">
          <div class="px-6">
            <p class="text-xl md:text-2xl font-semibold py-2">Education</p>
            <div v-for="(education, index) in instructor.education" :key="index">
              <div class="flex">
                <div>
                  <p class="text-primary md:px-4 py-2">★</p>
                </div>
                <div class="text-sm py-2">
                  <p class="text-primary font-semibold p-1">{{ education.degree }}</p>
                  <div class="text-slate-600">
                    <p class=" p-1">{{ education.duratioin }}</p>
                    <p class=" p-1">{{ education.institution }}</p>
                    <p class=" p-1">{{ education.details }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Primeicons from 'primeicons/primeicons.css';

export default {
  data() {
    return {
      classDetails: true,
      educationDetails: false,
    }
  },

  methods: {
    classes() {
      this.classDetails = true;
      this.educationDetails = false;
    },
    education() {
      this.educationDetails = true;
      this.classDetails = false;
    },
  },

  components: {
    Primeicons
  },

  props: ['id'],

  computed: {
      ...mapState ({
          instructors: state => state.instructors.instructors
      }),
  },
}
</script>

<style scoped>
.clicked {
  @apply text-white bg-primary;
}
</style>

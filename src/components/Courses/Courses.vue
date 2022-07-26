<template>
    <div class="w-full flex flex-col">
        <div class="flex items-center text-sm text-gray-600 lg:px-4">
            <p>We found</p>
            <p class="px-1 text-base font-semibold">{{courses.length}}</p>
            <p>courses for you</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 grid-view">
            <div class="p-2 md:p-4 2xl:p-3" v-for="(course, index) in courses" :key="index">
                <div class="shadow-sm hover:shadow-md">
                    <router-link :to="{ path: '/courses/' + course.id}">
                        <div class="container">
                            <img class="h-60 w-full bg-cover" :src="course.thumb" alt="Image">
                            <div class="top-left px-3 py-1 bg-white shadow-lg rounded-sm text-gray-600 text-sm font-semibold">${{ course.price }}</div>
                        </div>
                    </router-link>
                    <div class="border border-gray-200">
                        <router-link :to="{ path: '/courses/' + course.id}">
                            <p class="text-xl p-3">{{ course.title }}</p>
                        </router-link>
                        <div class="flex justify-between text-xs text-gray-500 px-3">
                            <div class="flex items-center">
                                <i class="pi pi-video mr-1" style="font-size:0.8rem;"></i>
                                <p>{{ course.views }} Views</p>
                            </div>
                            <div class="flex items-center">
                                <i class="pi pi-clock mr-1" style="font-size:0.8rem;"></i>
                                <p>{{ course.runTime }} Minutes</p>
                            </div>
                            <div class="flex items-center">
                                <i class="pi pi-star-fill mr-1" style="font-size:0.8rem;"></i>
                                <p>{{ course.rating }} Rating</p>
                            </div>
                        </div>
                        <div class="flex justify-between border-t border-gray-200 p-3 mt-2">
                            <div class="flex">
                                <img class="rounded-full h-9 w-9" :src="course.author.thumb" alt="Image">
                                <p class="p-2 text-sm font-medium text-slate-600">{{ course.author.name }}</p>
                            </div>
                            <div class="flex items-center p-2 border rounded-xl border-green-50 bg-green-100 text-green-600 text-sm">
                                <i class="pi pi-copy mr-1" style="font-size:0.9rem;"></i>
                                <p>{{ course.lectureCount }} lectures</p>
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

export default {
  computed: {
    ...mapState ({
      courses: state => state.courses.courses
    }),
  },

  mounted() {
    this.$store.dispatch('courses/getCourses')
  }
}
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
}

.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}

/* @media screen and (min-width: 1540px) {
    .grid-view {
        @apply grid grid-cols-3;
    }
} */
</style>
<template>
    <div class="w-full flex flex-col">
        <div class="flex items-center text-sm text-gray-600 px-4">
            <p>We found</p>
            <p class="px-1 text-base font-semibold">142</p>
            <p>courses for you</p>
        </div>
        <div class="grid grid-cols-2">
            <div class="p-4" v-for="(course, index) in courses" :key="index">
                <div class="shadow-sm hover:shadow-md">
                    <!-- <router-link> -->
                        <div class="container">
                            <img class="h-76 w-full" :src="course.img" alt="Image">
                            <div class="top-left px-3 py-1 bg-white shadow-lg rounded-sm text-gray-600 text-sm font-semibold">${{ course.price }}</div>
                        </div>
                    <!-- </router-link> -->
                    <div class="border border-gray-200">
                        <p class="text-xl p-3">{{ course.title }}</p>
                        <div class="flex justify-between text-xs text-gray-500 px-3">
                            <p>★ {{ course.views }} Views</p>
                            <p>⏲ {{ course.duration }}</p>
                            <p>★ {{ course.reviews }} Reviews</p>
                        </div>
                        <div class="flex justify-between border-t border-gray-200 p-3 mt-2">
                            <div class="flex">
                                <img class="rounded-full h-9 w-9" :src="course.teacher_img" alt="Image">
                                <p class="p-2 text-sm font-medium text-slate-600">{{ course.teacher_name }}</p>
                            </div>
                            <p class="p-2 border rounded-xl border-green-100 bg-green-100 text-green-500 text-sm">★ {{ course.lectures }} lectures</p>
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
</style>
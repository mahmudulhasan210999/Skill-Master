<template>
    <div class="w-full flex flex-col bg-gray-50 px-36 pb-16">
        <div class="text-center p-12">
            <p class="text-5xl font-bold p-4">Courses With Sidebar</p>
            <div class="flex justify-center">
                <router-link to="/"><p class="text-rose-600">Home</p></router-link>
                <p class="px-2"> / </p>
                <p>Find Courses</p>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/3">
                <Sidebar />
            </div>
            <div class="w-2/3">
                <Courses />
            </div>
        </div>
  </div>
</template>

<script>
import Courses from "../../components/Courses/Courses.vue";
import Sidebar from "../../components/Courses/Sidebar.vue";

export default {
    components: {
        Courses,
        Sidebar
    }
}
</script>
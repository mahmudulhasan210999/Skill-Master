<template>
    <div class="flex flex-col lg:flex-row w-full px-4 sm:px-12 md:px-6 pt-6 sm:pt-12 pb-24 bg-gray-100">
        <div class="lg:w-1/4 flex flex-col lg:mr-6 bg-white rounded-md menu-height">
            <div class="flex flex-col">
                <DashboardMenu />
            </div>
        </div>
        <div class="lg:w-3/4 mt-8 lg:mt-0 flex flex-col lg:ml-6">
            <div class="w-full flex text-sm p-4 bg-white rounded-md shadow-md mb-8">
                <router-link to="/">
                    <p class="text-rose-600">Home</p>
                </router-link>
                <p class="px-2">/</p>
                <p class="font-semibold">Dashboard</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                <div v-for="(detail, index) in course_details" :key="index">
                    <div class="bg-white rounded-md shadow-md p-4 flex justify-between items-center">
                        <div class="flex flex-col">
                            <p class="text-2xl font-semibold" :class="detail.text_colour">{{detail.number}}</p>
                            <p class="text-xs text-gray-600">{{detail.title}}</p>
                        </div>
                        <div>
                            <i :class="detail.icon" style="font-size:3.5rem;"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row w-full mt-8">
                <div class="md:w-2/3 md:mr-2.5 lg:mr-5">
                    <p class="text-lg font-semibold">My Courses</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 lg:gap-6 mt-4">
                        <div v-for="(course, index) in my_courses" :key="index">
                            <div class="container">
                                <img class="rounded-md w-full" :src="course.image" alt="">
                                <div class="w-full h-full flex flex-col p-5 justify-end bg-transparemt text-white text-left bottom-left">
                                    <p class="text-lg font-semibold">{{course.title}}</p>
                                    <p class="text-xs">{{course.classes}} Classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 md:ml-2.5 lg:ml-5 mt-8 md:mt-0">
                    <p class="text-lg font-semibold">Popular Courses</p>
                    <div class="mt-4 flex flex-col bg-white p-5 rounded-md shadow-md">
                        <div v-for="(course, index) in popular_courses" :key="index">
                            <div class="flex items-center my-2">
                                <img class="" :src="course.img" alt="">
                                <div class="ml-3">
                                    <p class="text-sm text-gray-600 font-semibold">{{course.title}}</p>
                                    <p class="mt-1 sm:mt-3 text-xs font-semibold text-gray-500">{{course.date}}</p>
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
import DashboardMenu from "./Sidebar.vue";

export default {
    data() {
        return {
            course_details: [
                {
                    id: 1,
                    title: 'Courses in Progress',
                    number: 10,
                    icon: 'pi pi-video',
                    text_colour: 'text-rose-600'
                },
                {
                    id: 2,
                    title: 'Completed Courses',
                    number: 23,
                    icon: 'pi pi-copy',
                    text_colour: 'text-green-600'
                },
                {
                    id: 1,
                    title: 'Watching Time',
                    number: 80,
                    icon: 'pi pi-clock',
                    text_colour: 'text-yellow-500'
                },
                {
                    id: 1,
                    title: 'Certificate Achievement',
                    number: 16,
                    icon: 'pi pi-bookmark',
                    text_colour: 'text-blue-600'
                },
            ],
            my_courses: [
                {
                    id: 1,
                    image: 'https://via.placeholder.com/390x220',
                    title: 'Web Designing',
                    classes: 17
                },
                {
                    id: 2,
                    image: 'https://via.placeholder.com/390x220',
                    title: 'Digital Marketing',
                    classes: 22
                },
                {
                    id: 3,
                    image: 'https://via.placeholder.com/390x220',
                    title: 'Account & Chart',
                    classes: 18
                },
                {
                    id: 4,
                    image: 'https://via.placeholder.com/390x220',
                    title: 'Business Development',
                    classes: 13
                }
            ],
            popular_courses: [
                {
                    id: 1,
                    img: 'https://via.placeholder.com/90x90',
                    title: 'Figma: Create A Beautiful Design Using Pen Tool',
                    date: '12 July 2022'
                },
                {
                    id: 2,
                    img: 'https://via.placeholder.com/90x90',
                    title: 'Figma: Create A Beautiful Design Using Pen Tool',
                    date: '12 July 2022'
                } ,
                {
                    id: 3,
                    img: 'https://via.placeholder.com/90x90',
                    title: 'Figma: Create A Beautiful Design Using Pen Tool',
                    date: '12 July 2022'
                }  
            ]
        }
    },

    components: {
        DashboardMenu
    }
}
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
}

.bottom-left {
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.menu-height {
    height: 520px;
}
</style>
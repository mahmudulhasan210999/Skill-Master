<template>
    <div class="flex w-full justify-center px-4 sm:px-12 md:px-6 py-6 sm:py-12 xl:py-20 bg-gray-100">
        <div class="container">
        <div class="flex flex-col lg:flex-row">
            <div class="lg:w-1/4 flex flex-col lg:mr-6 bg-white rounded-md menu-height">
            <div class="flex flex-col">
                <DashboardMenu />
            </div>
        </div>
        <div class="lg:w-3/4 mt-8 lg:mt-0 flex flex-col lg:ml-6">
            <div class="w-full flex text-sm p-4 bg-white rounded-md shadow-md mb-8">
                <router-link to="/">
                    <p class="text-primary">Home</p>
                </router-link>
                <p class="px-2">/</p>
                <p class="font-semibold">Dashboard</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                <div v-for="(detail, index) in course_details" :key="index">
                    <div class="bg-white rounded-md shadow-md p-4 xl:p-5 flex justify-between items-center">
                        <div class="flex flex-col">
                            <p class="text-2xl font-semibold">{{detail.number}}</p>
                            <p class="text-xs text-gray-600">{{detail.title}}</p>
                        </div>
                        <div :class="detail.text_colour">
                            <i class="pt-1" :class="detail.icon" style="font-size:2.5rem;"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row w-full mt-8">
                <div class="md:w-2/3 md:mr-2.5 lg:mr-5">
                    <p class="text-lg font-semibold">My Courses</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 lg:gap-6 mt-4">
                        <div v-for="(course, index) in my_courses" :key="index">
                            <div class="v-container">
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
                                    <p class="mt-1 sm:mt-1.5 text-xs font-semibold text-gray-500">{{course.date}}</p>
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
import DashboardMenu from "./Sidebar.vue";
import img from '../../assets/images/Home/1.jpg'

export default {
    data() {
        return {
            course_details: [
                {
                    id: 1,
                    title: 'Courses in Progress',
                    number: 10,
                    icon: 'pi pi-video',
                    text_colour: 'text-primary'
                },
                {
                    id: 2,
                    title: 'Completed Courses',
                    number: 23,
                    icon: 'pi pi-copy',
                    text_colour: 'text-secondary'
                },
                {
                    id: 1,
                    title: 'Saved Courses',
                    number: 8,
                    icon: 'pi pi-book',
                    text_colour: 'text-alternate1'
                },
                {
                    id: 1,
                    title: 'Certificate Achievement',
                    number: 16,
                    icon: 'pi pi-bookmark',
                    text_colour: 'text-alternate2'
                },
            ],
            my_courses: [
                {
                    id: 1,
                    image: img,
                    title: 'Web Designing',
                    classes: 17
                },
                {
                    id: 2,
                    image: img,
                    title: 'Digital Marketing',
                    classes: 22
                },
                {
                    id: 3,
                    image: img,
                    title: 'Account & Chart',
                    classes: 18
                },
                {
                    id: 4,
                    image: img,
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
.v-container {
  position: relative;
  text-align: center;
}

.bottom-left {
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.menu-height {
    height: 505px;
}
</style>
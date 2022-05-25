<template>
    <div class="w-full flex flex-col">
        <div v-for="(course, index) in courses" :key="index">
            <div v-if="course.slug == slug">
                <div class="flex flex-col md:flex-row w-full items-center bg-green-50 px-4 sm:px-8 lg:px-16 xl:px-44 py-6 lg:py-16">
                    <div class="md:w-1/2 md:mr-8">
                        <img class="rounded-xl" :src="course.img" alt="">
                    </div>
                    <div class="md:w-1/2 mt-6 md:mt-0">
                        <div class="flex bg-yellow-100 p-4 rounded-md text-yellow-500 text-sm">
                            <i class="pi pi-calendar"></i>
                            <p class="font-semibold ml-2 mr-6">Duration:</p>
                            <p class="pl-8 sm:pl-16">10 - 18 Weeks</p>
                        </div>
                        <div class="mt-3 flex bg-green-100 p-4 rounded-md text-green-500 text-sm">
                            <i class="pi pi-user"></i>
                            <p class="font-semibold ml-2 mr-6">Enrolled:</p>
                            <p class="pl-8 sm:pl-16">712 Students</p>
                        </div>
                        <div class="mt-3 flex bg-red-100 p-4 rounded-md text-red-500 text-sm">
                            <i class="pi pi-book"></i>
                            <p class="font-semibold ml-2 mr-6">Lectures:</p>
                            <p class="pl-8 sm:pl-16">602 Lectures</p>
                        </div>
                        <div class="mt-3 flex bg-purple-100 p-4 rounded-md text-purple-500 text-sm">
                            <i class="pi pi-video"></i>
                            <p class="font-semibold ml-2 mr-6">Videos:</p>
                            <p class="pl-8 sm:pl-16">402 Videos</p>
                        </div>
                        <div class="mt-3 flex bg-blue-100 p-4 rounded-md text-blue-500 text-sm">
                            <i class="pi pi-bookmark"></i>
                            <p class="font-semibold ml-2 mr-6">Level:</p>
                            <p class="pl-8 sm:pl-16">Advance</p>
                        </div>
                        <div class="mt-3 flex justify-center bg-rose-600 p-4 rounded-md text-white hover:bg-rose-700">
                            <div class="flex items-center">
                                <p>Enroll Now</p>
                                <i class="pi pi-arrow-circle-right ml-12"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row w-full px-4 sm:px-8 lg:px-16 xl:px-44 py-6 lg:py-16">
                    <div class="lg:w-2/3 flex flex-col lg:mr-4">
                        <div class="flex flex-col px-6 py-8 border border-gray-200 rounded-md">
                            <p class="font-semibold text-black">Course Overview</p>
                            <div class="mt-3 text-sm text-gray-600 tracking-wider">
                                <p class="mt-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                <p class="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                            <div class="mt-4">
                                <p class="font-semibold text-black">Requirements</p>
                                <div class="mt-3 text-sm text-gray-600 tracking-wider">
                                    <div class="flex">
                                        <i class="pi pi-check mr-2"></i>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                                    </div>
                                    <div class="flex mt-3">
                                        <i class="pi pi-check mr-2"></i>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                                    </div>
                                    <div class="flex mt-3">
                                        <i class="pi pi-check mr-2"></i>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                                    </div>
                                    <div class="flex mt-3">
                                        <i class="pi pi-check mr-2"></i>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                                    </div>
                                    <div class="flex mt-3">
                                        <i class="pi pi-check mr-2"></i>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="flex flex-col mt-8 border border-gray-200 p-6 rounded-md">
                            <p class="font-semibold text-black">Course Curriculum</p>
                            <div class="flex flex-col mt-4 text-sm">
                                <div class="flex flex-col p-5 bg-white shadow-sm rounded-md border">
                                    <div class="flex justify-between hover:font-semibold cursor-pointer" @click="showCurriculum">
                                        <p>Part 01: How To Learn Web Designing Step By Step</p>
                                        <i class="pi pi-plus"></i>
                                    </div>
                                    <div class="flex flex-col mt-4" v-if="openCurriculum">
                                        <div class="flex text-sm p-5 border-b">
                                            <i class="pi pi-video mr-2"></i>
                                            <p class="text-gray-500 mr-8">Lecture 01</p>
                                            <p class="font-medium">Web Designing Beginner</p>
                                        </div>
                                        <div class="flex text-sm p-5 border-b">
                                            <i class="pi pi-video mr-2"></i>
                                            <p class="text-gray-500 mr-8">Lecture 02</p>
                                            <p class="font-medium">Startup Designing with HTML5 & CSS3</p>
                                        </div>
                                        <div class="flex text-sm p-5 border-b">
                                            <i class="pi pi-video mr-2"></i>
                                            <p class="text-gray-500 mr-8">Lecture 03</p>
                                            <p class="font-medium">How To Call Google Map iFrame</p>
                                        </div>
                                        <div class="flex text-sm p-5 border-b">
                                            <i class="pi pi-video mr-2"></i>
                                            <p class="text-gray-500 mr-8">Lecture 04</p>
                                            <p class="font-medium">Create Drop Down Navigation Using CSS3</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-5 flex justify-between p-5 bg-white shadow-sm rounded-md border hover:font-semibold cursor-pointer">
                                    <p>Part 02: Learn Web Designing In Basic Level</p>
                                    <i class="pi pi-plus"></i>
                                </div>
                                <div class="mt-5 flex justify-between p-5 bg-white shadow-sm rounded-md border hover:font-semibold cursor-pointer">
                                    <p>Part 03: Learn Web Designing In Advance Level</p>
                                    <i class="pi pi-plus"></i>
                                </div>
                                <div class="mt-5 flex justify-between p-5 bg-white shadow-sm rounded-md border hover:font-semibold cursor-pointer">
                                    <p>Part 04: How To Become Successful In Designing & Development?</p>
                                    <i class="pi pi-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center mt-8 border border-gray-200 p-6 rounded-md">
                            <div class="w-1/3 lg:w-1/5 flex flex-col items-center border-r border-gray-200">
                                <p class="text-5xl font-semibold">4.2</p>
                                <p class="text-sm">out of 5.0</p>
                                <p class="text-yellow-600 text-xl">★★★★★</p>
                            </div>
                            <div class="w-2/3 lg:w-4/5 flex flex-col lg:flex-row m-4 lg:ml-0 px-4">
                                <div class="lg:w-1/2 flex flex-col lg:pr-3 xl:px-8">
                                    <div class="text-sm font-semibold">
                                        <div class="flex justify-between items-center mb-2">
                                            <p>★★★★★</p>
                                            <p class="py-1 px-2 rounded-lg bg-green-100">85%</p>
                                        </div>
                                        <ProgressBar value="85" :showValue="false" style="height:8px;" />
                                    </div>
                                    <div class="text-sm mt-8 font-semibold">
                                        <div class="flex justify-between items-center mb-2">
                                            <p>★★★</p>
                                            <p class="py-1 px-2 rounded-lg bg-green-100">53%</p>
                                        </div>
                                        <ProgressBar value="53" :showValue="false" style="height:8px; color:#FFD700;" />
                                    </div>
                                </div>
                                <div class="lg:w-1/2 flex flex-col mt-8 lg:mt-0 lg:pl-3 xl:px-8">
                                    <div class="text-sm font-semibold">
                                        <div class="flex justify-between items-center mb-2">
                                            <p>★★★★</p>
                                            <p class="py-1 px-2 rounded-lg bg-green-100">62%</p>
                                        </div>
                                        <ProgressBar value="62" :showValue="false" style="height:8px;" />
                                    </div>
                                    <div class="text-sm mt-8 font-semibold">
                                        <div class="flex justify-between items-center mb-2">
                                            <p>★★</p>
                                            <p class="py-1 px-2 rounded-lg bg-green-100">1%</p>
                                        </div>
                                        <ProgressBar value="11" :showValue="false" style="height:8px; color:yellow;" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row items-start sm:items-center mt-8 border border-gray-200 p-3 rounded-md">
                            <img class="w-52 h-48 rounded-md" :src="course.teacher_img" alt="">
                            <div class="mt-3 sm:mt-0 sm:ml-6 text-left">
                                <p>{{course.teacher_name}}</p>
                                <div class="flex mt-1 text-xs text-gray-500">
                                    <div class="flex mr-6">
                                        <i class="pi pi-video mr-1"></i>
                                        <p>72 Videos</p>
                                    </div>
                                    <div class="flex mr-6">
                                        <i class="pi pi-caret-right mr-1"></i>
                                        <p>102 Lectures</p>
                                    </div>
                                    <div class="flex">
                                        <i class="pi pi-user mr-1"></i>
                                        <p>Exp. 4 Years</p>
                                    </div>
                                </div>
                                <p class="mt-4 text-sm text-gray-600 tracking-wider">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                                <div class="flex mt-4">
                                    <div class="mr-3">
                                        <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                    <div class="mx-3">
                                        <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                    <div class="mx-3">
                                        <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                    <div class="ml-3">
                                        <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 flex flex-col mt-8 lg:mt-0 lg:ml-4">
                        <div class="border border-gray-200 rounded-md">
                            <div class="flex p-4 border-b border-gray-200">
                                <img class="h-16 w-16 rounded-md" :src="course.teacher_img" alt="">
                                <div class="ml-3">
                                    <p class="font-medium">{{course.teacher_name}}</p>
                                    <p class="text-xs text-gray-500">Web Designer in Canada</p>
                                </div>
                            </div>
                            <div class="p-5 w-full flex flex-col">
                                <p class="text-xs text-gray-500">Actual Price</p>
                                <p class="text-2xl text-rose-600 font-semibold">${{course.price}}</p>
                                <div class="mt-4">
                                    <p class="font-semibold">Course Features</p>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right p-1 rounded-full bg-green-100" style="font-size:0.6rem;"></i>
                                        <p class="ml-2">Fully Programming</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right p-1 rounded-full bg-green-100" style="font-size:0.6rem;"></i>
                                        <p class="ml-2">Help Code to Code</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right p-1 rounded-full bg-green-100" style="font-size:0.6rem;"></i>
                                        <p class="ml-2">Free Trial 7 Days</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right p-1 rounded-full bg-green-100" style="font-size:0.6rem;"></i>
                                        <p class="ml-2">Unlimited Videos</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right p-1 rounded-full bg-green-100" style="font-size:0.6rem;"></i>
                                        <p class="ml-2">24x7 Support</p>
                                    </div>
                                </div>
                                <div class="mt-6 flex justify-center">
                                    <button class="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-3xl">
                                        <div class="flex items-center">
                                            <p>Enroll Now</p>
                                            <i class="pi pi-angle-right ml-8"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col mt-6 border border-gray-200 rounded-md p-5">
                            <p class="font-semibold text-black">Course Features</p>
                            <div class="mt-6 flex flex-col">
                                <div class="flex justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-user mr-2"></i>
                                        <p class="font-thin">Student Enrolled:</p>
                                    </div>
                                    <p class="font-semibold">1740</p>
                                </div>
                                <div class="flex mt-4 justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-book mr-2"></i>
                                        <p class="font-thin">Lectures:</p>
                                    </div>
                                    <p class="font-semibold">10</p>
                                </div>
                                <div class="flex mt-4 justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-question mr-2"></i>
                                        <p class="font-thin">Quizzes:</p>
                                    </div>
                                    <p class="font-semibold">4</p>
                                </div>
                                <div class="flex mt-4 justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-clock mr-2"></i>
                                        <p class="font-thin">Duration:</p>
                                    </div>
                                    <p class="font-semibold">40 hours</p>
                                </div>
                                <div class="flex mt-4 justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <p class="font-thin">Skill Level:</p>
                                    </div>
                                    <p class="font-semibold">Beginner</p>
                                </div>
                                <div class="flex mt-4 justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-globe mr-2"></i>
                                        <p class="font-thin">Language:</p>
                                    </div>
                                    <p class="font-semibold">English</p>
                                </div>
                                <div class="flex mt-4 justify-between md:px-4 text-sm text-gray-500">
                                    <div class="flex">
                                        <i class="pi pi-copy mr-2"></i>
                                        <p class="font-thin">Assesment:</p>
                                    </div>
                                    <p class="font-semibold">Yes</p>
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
import ProgressBar from 'primevue/progressbar';

export default {
    data() {
        return {
            openCurriculum: false
        }
    },

    components: {
        ProgressBar 
    },

    props: ['slug'],

    computed: {
        ...mapState ({
            courses: state => state.courses.courses
        }),
    },

    methods: {
        showCurriculum () {
            this.openCurriculum = !this.openCurriculum
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="w-full flex flex-col">

        <!-- Top part starts -->
        <div class="topbar-container">
            <div class="container w-full flex items-center">
                <div class="flex flex-col md:flex-row w-full justify-center items-center course-top">
                    <div class="md:w-1/2 md:ml-8 lg:ml-16">
                        <iframe data-v-78db0942="" :src="course.trailer+'&amp;modestbranding=1&amp;iv_load_policy=3&amp;cc_load_policy=1'" 
                            title="Animated Explainer Video of Workspacing" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen="" 
                            class="video-card w-full h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
                        </iframe>
                    </div>
                    <div class="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                        <div class="xl:w-1/6"></div>
                        <div class="xl:w-4/6">
                            <div class="flex items-center bg-yellow-100 p-4 rounded-md text-yellow-500 text-sm">
                                <i class="pi pi-calendar"></i>
                                <p class="text-container">Duration:</p>
                                <p>{{course.estTimeToComplete}}</p>
                            </div>
                            <div class="mt-3 flex items-center bg-green-100 p-4 rounded-md text-green-500 text-sm">
                                <i class="pi pi-user"></i>
                                <p class="text-container">Enrolled:</p>
                                <p>{{course.studentsEnrolled}} Students</p>
                            </div>
                            <div class="mt-3 flex items-center bg-red-100 p-4 rounded-md text-red-500 text-sm">
                                <i class="pi pi-book"></i>
                                <p class="text-container">Lectures:</p>
                                <p>{{course.lectureCount}} Lectures</p>
                            </div>
                            <div class="mt-3 flex items-center bg-purple-100 p-4 rounded-md text-purple-500 text-sm">
                                <i class="pi pi-video"></i>
                                <p class="text-container">Views:</p>
                                <p>{{course.views}} views</p>
                            </div>
                            <div class="mt-3 flex items-center bg-blue-100 p-4 rounded-md text-blue-500 text-sm">
                                <i class="pi pi-bookmark"></i>
                                <p class="text-container">Certified:</p>
                                <p>{{course.certified}} Students</p>
                            </div>
                            <div class="mt-3 flex justify-center bg-primary p-4 rounded-md text-white">
                                <div class="flex items-center">
                                    <p>Enroll Now</p>
                                    <i class="pi pi-arrow-circle-right ml-12"></i>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-1/6"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Top part ends -->

        <div class="flex justify-center w-full px-4 sm:px-8 lg:px-16 xl:px-44 py-6 lg:py-16 2xl:px-12">
            <div class="container">
                <div class="flex flex-col lg:flex-row justify-center ">
                    <div class="lg:w-2/3 flex flex-col lg:mr-4">
 
                        <!-- Course Overview, Requirements, Outcome starts -->
                        <div class="flex flex-col p-3 sm:p-6 border border-gray-200 rounded-md">
                            <p class="headlines">Course Overview</p>
                            <div class="overview-details" v-html="course.overview"></div>
                            <div class="mt-5">
                                <p class="headlines">Requirements</p>
                                <div class="overview-details" v-html="course.requirements"></div>
                            </div>
                            <div class="mt-5">
                                <p class="headlines">Course Outcome</p>
                                <div class="overview-details" v-html="course.whatYouLearn"></div>
                            </div>
                        </div>
                        <!-- Course Overview, Requirements, Outcome ends -->

                        <!-- Course Chapters starts -->
                        <div class="flex flex-col mt-8 border border-gray-200 p-3 sm:p-6 rounded-md">
                            <p class="headlines">Course Curriculum</p>
                            <div class="flex flex-col">
                                <div v-for="(chapter, index) in chapters" :key="index">
                                    <div class="flex flex-col  mt-4 p-3 sm:p-5 bg-white shadow-sm hover:shadow-md rounded-md border border-gray-200">
                                        <div class="flex justify-between items-center font-medium cursor-pointer text-gray-700" @click="showCurriculum(chapter.id)">
                                            <div class="flex">
                                                <p>Chapter {{chapter.chapter_number}}:</p>
                                                <p class="pl-1">{{chapter.title}}</p>
                                            </div>
                                            <i class="pi pi-plus"></i> 
                                        </div>
                                        <div class="flex flex-col mt-4" v-if="value == chapter.id && openCurriculum">
                                            <div v-for="(lecture, index) in chapter.lectures" :key="index">
                                                <router-link :to="{ path: '/' + lecture.id }" >
                                                    <div class="flex flex-col sm:flex-row text-sm p-3 sm:p-5 border-b border-gray-200 cursor-pointer">
                                                        <div class="flex sm:mr-8">
                                                            <i class="pi pi-video pt-0.5 mr-2 text-gray-700"></i>
                                                            <p class="text-gray-500">Lecture {{lecture.lecture_number}}</p>
                                                        </div>
                                                        <p class="font-medium text-gray-700">{{lecture.title}}</p>             
                                                    </div>  
                                                </router-link>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Course Chapters ends -->
                        
                        <!-- Course Rating starts -->
                        <!-- <div class="flex items-center mt-8 border border-gray-200 p-6 rounded-md">
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
                        </div> -->
                        <!-- Course Rating ends -->

                        <!-- <div class="flex flex-col sm:flex-row items-start sm:items-center mt-8 border border-gray-200 p-3 rounded-md" v-if="course.instructor">
                            <img class="w-52 h-48 rounded-md" :src="course.instructor.thumb" alt="Instructor-image">
                            <div class="mt-3 sm:mt-0 sm:ml-6 text-left">
                                <p>{{course.instructor.name}}</p>
                                <div class="flex mt-1 text-xs text-gray-500">
                                    <div class="flex mr-6 items-center">
                                        <i class="pi pi-video mr-1" style="font-size:0.8rem;"></i>
                                        <p>{{course.instructor.videoCount}} Videos</p>
                                    </div>
                                    <div class="flex mr-6 items-center">
                                        <i class="pi pi-book mr-1" style="font-size:0.75rem;"></i>
                                        <p>{{course.instructor.lectureCount}} Lectures</p>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="pi pi-user mr-1" style="font-size:0.75rem;"></i>
                                        <p>{{course.instructor.experience}} Years Exp.</p>
                                    </div>
                                </div>
                                <p class="mt-4 text-sm text-gray-600 tracking-wider" v-html="course.instructor.bio"></p>
                                <div class="flex mt-4">
                                    <div class="mr-3">
                                        <a target="_blank" :href="course.instructor.facebook"><i class="pi pi-facebook" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                    <div class="mx-3"> 
                                        <a target="_blank" :href="course.instructor.twitter"><i class="pi pi-twitter" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                    <div class="mx-3">
                                        <a target="_blank" :href="course.instructor.instagram"><i class="pi pi-instagram" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                    <div class="ml-3">
                                        <a target="_blank" :href="course.instructor.linkedIn"><i class="pi pi-linkedin" style="font-size: 16px; color: rgb(128,128,128)"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="lg:w-1/3 flex flex-col mt-8 lg:mt-0 lg:ml-4">

                        <!-- Course Feature starts -->
                        <div class="border border-gray-200 rounded-md">
                            <div class="p-4 border-b border-gray-200" v-if="course.instructor">
                                <router-link class="flex" :to="{ path: '/instructor/' + course.id}">
                                    <img class="h-16 w-16 rounded-md" :src="course.instructor.thumb" alt="Instructor-image">
                                    <div class="ml-3 flex flex-col justify-center">
                                        <p class="font-medium">{{course.instructor.name}}</p>
                                        <p class="text-xs text-gray-500">{{course.instructor.experience}} years of experience</p>
                                    </div>
                                </router-link>
                            </div> 
                            <div class="p-3 sm:p-5 w-full flex flex-col">
                                <p class="text-sm text-gray-500">Actual Price</p>
                                <p class="text-2xl text-primary font-semibold" v-if="course.offerPrice >= 1">${{course["offerPrice"]}} <del class="text-2xl text-red-600 font-semibold">{{ course.price }}</del></p>
                                <p class="text-2xl text-primary font-semibold" v-else>${{ course.price }}</p>
                                <div class="mt-5 text-sm text-gray-600" v-html="course.promoText"></div>
                                <div class="mt-5">
                                    <p class="headlines">Course Features</p>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right feature-icon" style="font-size:0.7rem;"></i>
                                        <p class="ml-2">Fully Programming</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right feature-icon" style="font-size:0.7rem;"></i>
                                        <p class="ml-2">Help Code to Code</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right feature-icon" style="font-size:0.7rem;"></i>
                                        <p class="ml-2">Free Trial 7 Days</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right feature-icon" style="font-size:0.7rem;"></i>
                                        <p class="ml-2">Unlimited Videos</p>
                                    </div>
                                    <div class="flex text-sm mt-2">
                                        <i class="pi pi-angle-right feature-icon" style="font-size:0.7rem;"></i>
                                        <p class="ml-2">24x7 Support</p>
                                    </div>
                                </div>
                                <div class="mt-6 flex justify-center">
                                    <button class="bg-primary text-white px-8 py-3 rounded-3xl">
                                        <div class="flex items-center">
                                            <p>Enroll Now</p>
                                            <i class="pi pi-angle-right ml-8"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                         <!-- Course Feature ends -->

                        <!-- Course Details starts -->
                        <div class="flex flex-col mt-6 border border-gray-200 rounded-md p-3 sm:p-5">
                            <p class="headlines">Course Details</p>
                            <div class="mt-6 flex flex-col">
                                <div class="course-details">
                                    <div class="flex items-center">
                                        <i class="pi pi-user mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Student Enrolled:</p>
                                    </div>
                                    <p class="font-semibold">{{course.studentsEnrolled}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-book mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Lectures:</p>
                                    </div>
                                    <p class="font-semibold">{{course.lectureCount}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-star-fill mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Rating:</p>
                                    </div>
                                    <p class="font-semibold">{{course.rating}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-calendar mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Duration:</p>
                                    </div>
                                    <p class="font-semibold">{{course.estTimeToComplete}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-clock mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Hours:</p>
                                    </div>
                                    <p class="font-semibold">{{course.runTime}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-bookmark mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Skill Level:</p>
                                    </div>
                                    <p class="font-semibold">{{course.skill_level}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-globe mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Language:</p>
                                    </div>
                                    <p class="font-semibold">{{course.language}}</p>
                                </div>
                                <div class="course-details mt-4">
                                    <div class="flex items-center">
                                        <i class="pi pi-copy mr-2" style="font-size:0.8rem;"></i>
                                        <p class="font-thin">Assesment:</p>
                                    </div>
                                    <p class="font-semibold" v-if="course.assessment == true">Yes</p>
                                    <p class="font-semibold" v-else>No</p>
                                </div>
                            </div>
                        </div>
                        <!-- Course Details ends -->

                        <!-- Tags Cloud starts -->
                        <div class="mt-4 lg:mt-8 p-3 sm:p-5 bg-white rounded-md border border-gray-200">
                            <p class="headlines mb-2">Tags</p>
                            <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-3">
                                <div class="flex items-center my-1" v-for="(tag, index) in course.tags" :key="index">
                                    <p class="tags">{{tag}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Tags Cloud ends -->
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
            openCurriculum: false,
            value: null
        }
    },

    components: {
        ProgressBar 
    },

    computed: {
        ...mapState ({
            course: state => state.courses.getDetail,
            chapters: state => state.courses.chapters,
        }),
    },

    created() {
        this.$store.dispatch('courses/getCoursesBySlug', this.$route.params.id)
        this.$store.dispatch('courses/getChaptersBySlug', this.$route.params.id)
    },

    methods: {
        showCurriculum (id) {
            this.value = id
            this.openCurriculum = !this.openCurriculum
        }
    }
}
</script>

<style scoped>

.topbar-container {
    @apply w-full flex justify-center bg-sky-50 px-4 sm:px-8 lg:px-16 xl:px-44 py-6 lg:py-16;
}

.text-container {
    @apply font-semibold ml-2 w-36 2xl:w-44;
}

.headlines {
    @apply font-semibold text-black;
}

.overview-details {
    @apply mt-2 text-sm text-gray-600 tracking-wider;
}

.feature-icon {
    @apply p-1 rounded-full bg-green-100 flex items-center;
}

.course-details {
    @apply flex justify-between md:px-4 text-sm text-gray-500;
}

.tags {
    @apply w-full text-center py-2 mx-1 rounded-md text-gray-600 border border-primary text-sm cursor-pointer hover:text-white hover:bg-primary;
}

@media screen and (min-width: 1536px) {
    .course-top {
        @apply px-20;
    }
}
</style>
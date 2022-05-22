<template>
    <div class="flex w-full p-8 bg-gray-50">
        <div class="w-1/4 flex flex-col mr-6 bg-white rounded-md">
            <div class="flex flex-col px-4 py-8">
                <p>bhfkngrhtjy</p>
                <p>dvkfbdsglf</p>
            </div>
        </div>
        <div class="w-3/4 flex flex-col ml-6">
            <div class="grid grid-cols-4 gap-6">
                <div v-for="(detail, index) in course_details" :key="index">
                    <div class="bg-white rounded-md p-4 flex justify-between items-center">
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
            <div class="flex w-full mt-6">
                <div class="w-2/3 mr-4">
                    <p class="text-lg font-semibold">My Courses</p>
                    <div class="grid grid-cols-2 gap-6 mt-4">
                        <div v-for="(course, index) in my_courses" :key="index">
                            <div class="container">
                                <img class="rounded-md" :src="course.image" alt="">
                                <div class="w-full h-full flex flex-col p-5 justify-end bg-transparemt text-white text-left bottom-left">
                                    <p class="text-lg font-semibold">{{course.title}}</p>
                                    <p class="text-xs">{{course.classes}} Classes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/3 ml-4">
                    <p class="text-lg font-semibold">Popular Courses</p>
                    <div class="mt-4 flex flex-col bg-white p-5 rounded-md">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            ]
        }
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
</style>
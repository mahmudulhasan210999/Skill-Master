<template>
    <div class="flex flex-col items-center w-full py-16 md:py-20">
        <div class="flex sm:text-lg mb-6 sm:mb-8 lg:mb-12">
            <div class="flex items-center">
                <i class="pi pi-video mr-2 text-gray-700"></i>
                <p class="text-gray-500">Lecture {{lecture.lecture_number}}</p>
            </div>
            <p class="px-1 text-gray-500">-</p>
            <p class="font-medium text-gray-700">{{lecture.title}}</p>             
        </div>
        <iframe
            class="video-card"
            :src="'https://tube.rvere.com/embed?v=' + lecture.video_url"  
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>
</template>

<script>
import { mapState } from "vuex";  

export default {
    computed: {
        ...mapState ({
            lecture: state => state.courses.getLecture, 
        }),
    },

    created() {
        // console.log(this.$route.params.l_id)
        this.$store.dispatch('courses/getLectureVideo', this.$route.params.l_id)
    },
}
</script>

<style scoped>
.video-card {
    width: 850px;
    height: 515px
}

@media screen and (max-width: 1024px) {
    .video-card {
        width: 630px;
        height: 400px
    }
}

@media screen and (max-width: 768px) {
    .video-card {
        width: 500px;
        height: 320px
    }
}

@media screen and (max-width: 600px) {
    .video-card {
        width: 400px;
        height: 270px
    }
}

@media screen and (max-width: 460px) {
    .video-card {
        width: 340px;
        height: 240px
    }
}

@media screen and (max-width: 370px) {
    .video-card {
        width: 290px;
        height: 210px
    }
}
</style>
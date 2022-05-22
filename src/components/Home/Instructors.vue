<template>
  <div v-for="(instructor, index) in featured_courses" :key="index">
    <p class="text-5xl">{{ featured_courses.instructor }}</p>
   
  </div>
   <p>dghfdfduih</p>
</template>

<script>
import { mapState } from "vuex";

export default {
    components: {

    },

    props: ['slug'],

    computed: {
        ...mapState ({
            featured_courses: state => state.courses.featured_courses
        }),
    },
}
</script>

<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <div class="w-full">
                <Lecture :slug="getDetails()" />
            </div>
        </div>
    </div>
</template>

<script>
import Lecture from '../../../components/Courses/lectures/Lecture.vue';

export default {
    components: {
        Lecture
    },

    methods: {
        getDetails() {
            return this.$route.params.id;
        }
    },
}
</script>
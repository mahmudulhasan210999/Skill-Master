<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <div class="w-full">
                <Instructors :i_id="getInstructor()" />
            </div>
        </div>
    </div>
</template>

<script>
import Instructors from '../../../components/Instructors/Instructors.vue'; 

export default {
    components: {
        Instructors,
    },

    methods: {
        getInstructor() {
            return this.$route.params.id
        }
    },
}
</script>
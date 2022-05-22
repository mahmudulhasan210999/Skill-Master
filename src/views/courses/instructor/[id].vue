<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <div class="w-full">
                <Instructors :id="getDetails()" />
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
    getDetails() {
      return this.$route.params.id
    }
  },
}
</script>
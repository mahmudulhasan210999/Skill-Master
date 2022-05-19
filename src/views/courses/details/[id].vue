<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <div class="w-full">
                <Details :slug="getDetails()" />
            </div>
        </div>
    </div>
</template>

<script>
import Details from '../../../components/Courses/Course_details.vue';

export default {
  components: {
    Details,
  },

  methods: {
    getDetails() {
      return this.$route.params.id
    }
  },
}
</script>
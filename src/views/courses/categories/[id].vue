<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <div class="w-full">
                <Category />
            </div>
        </div>
    </div>
</template>

<script>
import Category from '../../../components/Categories/Category.vue';

export default {
  components: {
    Category,
  },

//   methods: {
//     getDetails() {
//       return this.$route.params.id
//     }
//   },
}
</script>
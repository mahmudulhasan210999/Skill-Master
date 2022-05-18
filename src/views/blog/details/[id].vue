<template>
  <div>
    
    <Details :slug="getDetails()" />
    
  </div>
</template>

<script>

import Details from '../../../components/Blog/Blog_Details.vue'


export default {
  // props: ['detail'],

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
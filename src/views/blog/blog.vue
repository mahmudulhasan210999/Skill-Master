<template>
  <Header />
  <Blog />
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Blog from '../../components/Blog/Blog.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Blog
  }
}
</script>
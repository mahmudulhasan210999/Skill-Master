<template>
  <Header />
  <Home />
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Home from '../../components/Home/Home.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Home
  }
}
</script>
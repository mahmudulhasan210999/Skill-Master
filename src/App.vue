<template>
    <div>
        <Header />
        <div class="mt-16 sm:mt-20">
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
}

@media screen and (min-width: 1536px) {
    .container {
        max-width: 1280px !important;
    }
}
</style>

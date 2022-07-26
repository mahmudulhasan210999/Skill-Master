<template>
    <div class="w-full flex flex-col items-center p-24">
        <div class="container flex flex-col items-center">
            <img class="h-80" src="../../assets/images/404.png" alt="">
            <div class="flex flex-col mt-8 w-2/4 items-center text-center">
                <p class="text-gray-500 text-sm">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</p>
                <button class="mt-4 px-6 py-3 bg-primary rounded-md text-white" @click="toHomePage">Back To Home</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toHomePage() {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
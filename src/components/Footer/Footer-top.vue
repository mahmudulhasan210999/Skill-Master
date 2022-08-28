<template>
    <div class="flex flex-col w-full items-center text-center bg-secondary px-4 sm:px-8 lg:px-44 py-8 lg:py-16">
        <div class="container">
            <div class="text-white pb-8">
                <p class="text-xl lg:text-3xl font-bold p-2">Join Thousand Of Happy Students!</p>
                <p class="text-xs lg:text-sm">Subscribe our newsletter & get latest news and updation!</p>
            </div>

            <div class="md:px-36 lg:px-20 xl:px-60">
                <div class="flex rounded bg-white p-2">
                    <InputText class="w-full" type="text" placeholder="Your Email Address" v-model="value" />
                    <button class="rounded bg-primary text-white text-xs lg:text-base h-12 xl:h-14 w-28 sm:w-40 px-4 ml-2">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
    components: {
        InputText,
    }
}
</script>

<style>

</style>
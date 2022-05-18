<template>
    <div class="w-full flex justify-between px-36 shadow-lg">
        <div class="flex items-center">
            <div class="mr-20">
                <router-link to="/">
                    <img class="h-20" src="../../assets/logo/platform-logo.png" alt="">
                </router-link>
            </div>
            <div v-for="(item, index) in menu" :key="index">
                <router-link :to="{ path: item.path}">
                    <p class="mx-2 px-4 py-2 my-2 hover:text-red-600">{{item.title}}</p>
                </router-link>
            </div>
        </div>
        <div class="flex items-center">
            <button class="py-2 px-5 text-red-600 border rounded-md font-semibold hover:bg-red-600 hover:text-white">Sign in</button>
            <button class="py-2 px-5 border rounded-md bg-black font-semibold text-white ml-4">Sign up</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState ({
            menu: state => state.menu.menu
        }),
    }
}
</script>

<style scoped>
</style>
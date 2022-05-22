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
                    <p class="mx-2 px-4 py-2 my-2 hover:text-rose-600">{{item.title}}</p>
                </router-link>
            </div>
        </div>
        <div class="flex items-center">
            <router-link to="/cart">
                <div class="flex items-center mr-16 border px-5 py-2 rounded-md hover:border-2 hover:border-rose-600 hover:text-rose-700">
                    <i class="pi pi-shopping-cart"></i>
                    <p class="ml-2">Cart</p>
                </div>
            </router-link>
            <router-link to="/login">
                <button class="py-2 px-5 text-rose-600 border rounded-md font-semibold hover:bg-rose-600 hover:text-white">Sign in</button>
            </router-link>
            <router-link to="/registration">
                <button class="py-2 px-5 border rounded-md bg-black font-semibold text-white ml-4">Sign up</button>
            </router-link>
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
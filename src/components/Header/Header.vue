<template>
    <div class="w-full">
        <!-- Main Header -->
        <div class="hidden w-full lg:flex lg:justify-between lg:px-16 xl:px-36 shadow-lg">
            <div class="flex items-center">
                <div class="mr-12 xl:mr-20">
                    <router-link to="/">
                        <img class="h-20" src="../../assets/logo/platform-logo.png" alt="logo">
                    </router-link>
                </div>
                <div v-for="(item, index) in menu" :key="index">
                    <router-link :to="{ path: item.path}">
                        <p class="mx-2 px-2 xl:px-4 py-2 my-2 hover:text-rose-600">{{item.title}}</p>
                    </router-link>
                </div>
            </div>
            <div class="flex items-center">
                <router-link to="/cart">
                    <div class="flex items-center mr-8 xl:mr-16 border px-3 xl:px-5 py-2 rounded-md hover:border-2 hover:border-rose-600 hover:text-rose-700">
                        <i class="pi pi-shopping-cart"></i>
                        <p class="ml-2">Cart</p>
                    </div>
                </router-link>
                <router-link to="/login">
                    <button class="py-2 px-3 xl:px-5 text-rose-600 border rounded-md font-semibold hover:bg-rose-600 hover:text-white">Sign in</button>
                </router-link>
                <router-link to="/registration">
                    <button class="py-2 px-3 xl:px-5 border rounded-md bg-black font-semibold text-white ml-2 xl:ml-4">Sign up</button>
                </router-link>
            </div>
        </div>

        <!-- Header For Responsive Dimensions -->
        <div class="flex items-center justify-between px-6 sm:px-12 lg:hidden">
            <router-link class="text-lg font-medium" :to="'/'">
                <img class="h-16 w-44" src="../../assets/logo/platform-logo.png" alt="logo">
            </router-link>
            <div>
                <i @click="toggleNav" class="pi pi-bars p-1"></i>
                <Navbar v-if="navToggled" @navClosed="closeNav"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from "./nav.vue";

export default {
    data() {
        return {
            navToggled: false,
        }
    },

    components: {
        Navbar
    },

    methods: {
        toggleNav: function () {
            this.navToggled = !this.navToggled
        },
        closeNav: function () {
            this.navToggled = false
        },
    },

    computed: {
        ...mapState ({
            menu: state => state.menu.menu
        }),
    }
}
</script>

<style scoped>
</style>
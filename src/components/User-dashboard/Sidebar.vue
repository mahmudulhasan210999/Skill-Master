<template>
    <div class="w-full flex flex-col bg-white shadow-md p-3 rounded-md">
        <div class="p-8 flex flex-col items-center">
            <img class="rounded-full h-36 w-36" :src="user_info.img" alt="">
            <div class="mt-4 flex flex-col items-center">
                <p class="text-lg font-semibold">{{user_info.name}}</p>
                <p class="text-gray-500 text-sm">{{user_info.country}}</p>
            </div>
        </div>
        <div class="flex flex-col text-sm">
            <div class="menu-items" @click="toDashboard">
                <i class="pi pi-user"></i>
                <p class="ml-5">Dashboard</p>
            </div>
            <div class="menu-items" @click="toMyOrders">
                <i class="pi pi-shopping-cart"></i>
                <p class="ml-5">My Courses</p>
            </div>
            <div class="menu-items" @click="toSettings">
                <i class="pi pi-cog"></i>
                <p class="ml-5">Settings</p>
            </div>
            <div class="menu-items" @click="logout">
                <i class="pi pi-power-off"></i>
                <p class="ml-5">Logout</p>
            </div>
        </div>
    </div>
</template>

<script>
import img from '../../assets/images/Home/1.jpg'

export default {
    data() {
        return {
            user_info: {
                img: img,
                name: 'Robert Dale',
                country: 'Canada USA'
            }
        }
    },

    methods: {
        toDashboard() {
            this.$router.push('/dashboard');
        },
        toMyOrders() {
            this.$router.push('/my-courses');
        },
        toSettings() {
            this.$router.push('/settings');
        },
        logout() {
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.menu-items {
    @apply flex items-center text-gray-600 font-semibold p-4 hover:bg-rose-100 hover:text-primary hover:rounded-md cursor-pointer;
}
</style>
<template>
    <div class="flex justify-center px-4 sm:px-8 md:px-12 py-6 md:py-12 xl:py-20 bg-gray-100">
        <div class="container">
            <div class="flex flex-col lg:flex-row w-full">
                <div class="lg:w-1/4 flex flex-col lg:mr-6 bg-white rounded-md menu-height">
            <div class="flex flex-col">
                <DashboardMenu />
            </div>
        </div>
        <div class="lg:w-3/4 mt-8 lg:mt-0 flex flex-col lg:ml-6">
            <div class="w-full flex text-sm p-4 bg-white rounded-md shadow-md mb-8">
                <router-link to="/">
                    <p class="text-primary">Home</p>
                </router-link>
                <p class="px-2">/</p>
                <p class="font-semibold">Settings</p>
            </div>
            <div class="bg-white rounded-md shadow-md p-6 xl:p-8">
                <p class="pb-2 font-semibold border-b mb-4">Setup Your Details</p>
                 <div class="flex flex-col w-full">
                    <div class="flex flex-col sm:flex-row w-full mb-6">
                        <div class="flex flex-col sm:w-1/2 sm:mr-2.5 md:mr-5">
                            <label class="text-sm mb-1">Username</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col mt-6 sm:mt-0 sm:w-1/2 sm:ml-2.5 md:ml-5">
                            <label class="text-sm mb-1">Email</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="sm:mr-5 md:mr-10 mb-6">
                        <div class="mt-6 sm:mt-0 sm:w-1/2">
                            <label class="text-sm mb-1">Phone</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    
                    <p class="font-semibold my-4">Social Accounts</p>
                    <div class="flex flex-col sm:flex-row w-full mb-6">
                        <div class="flex flex-col sm:w-1/2 sm:mr-2.5 md:mr-5">
                            <label class="text-sm mb-1">Facebook</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col mt-6 sm:mt-0 sm:w-1/2 sm:ml-2.5 md:ml-5">
                            <label class="text-sm mb-1">Twitter</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row w-full mb-6">
                        <div class="flex flex-col sm:w-1/2 sm:mr-2.5 md:mr-5">
                            <label class="text-sm mb-1">Google Plus</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col mt-6 sm:mt-0 sm:w-1/2 sm:ml-2.5 md:ml-5">
                            <label class="text-sm mb-1">LinkedIn</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                </div>
                <button class="px-6 py-3 text-white border border-primary bg-primary hover:shadow-md">Save Chnages</button>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardMenu from "./Sidebar.vue";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';

export default {
    data() {
        return {
            value: null
        }
    },

    components: {
        DashboardMenu,
        InputText,
        Textarea
    },

    methods: {
        toHome() {
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.menu-height {
    height: 505px;
}
</style>
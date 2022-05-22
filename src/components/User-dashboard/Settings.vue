<template>
    <div class="flex w-full px-12 pt-12 pb-24 bg-gray-100">
        <div class="w-1/4 flex flex-col mr-6 bg-white rounded-md menu-height">
            <div class="flex flex-col">
                <DashboardMenu />
            </div>
        </div>
        <div class="w-3/4 flex flex-col ml-6">
            <div class="w-full flex text-sm p-4 bg-white rounded-md shadow-md mb-8">
                <router-link to="/">
                    <p class="text-rose-600">Home</p>
                </router-link>
                <p class="px-2">/</p>
                <p class="font-semibold">My orders</p>
            </div>
            <div class="bg-white rounded-md shadow-md p-6">
                <p class="pb-2 font-semibold border-b mb-4">Setup Your Details</p>
                <div class="flex flex-col w-full">
                    <div class="flex w-full mb-6">
                        <div class="flex flex-col w-1/2 mr-5">
                            <label class="text-sm mb-1">Name</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col w-1/2 ml-5">
                            <label class="text-sm mb-1">Email</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="flex w-full mb-6">
                        <div class="flex flex-col w-1/2 mr-5">
                            <label class="text-sm mb-1">Title</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col w-1/2 ml-5">
                            <label class="text-sm mb-1">Phone</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="flex w-full mb-6">
                        <div class="flex flex-col w-1/2 mr-5">
                            <label class="text-sm mb-1">Address</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col w-1/2 ml-5">
                            <label class="text-sm mb-1">City</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="flex w-full mb-6">
                        <div class="flex flex-col w-1/2 mr-5">
                            <label class="text-sm mb-1">Country</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col w-1/2 ml-5">
                            <label class="text-sm mb-1">Zip</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="flex flex-col w-full mb-6">
                        <label class="text-sm mb-1">About</label>
                        <Textarea class="w-full" v-model="value" :autoResize="true" rows="5" cols="30" />
                    </div>

                    <p class="font-semibold my-4">Social Accounts</p>
                    <div class="flex w-full mb-6">
                        <div class="flex flex-col w-1/2 mr-5">
                            <label class="text-sm mb-1">Facebook</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col w-1/2 ml-5">
                            <label class="text-sm mb-1">Twitter</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                    <div class="flex w-full mb-6">
                        <div class="flex flex-col w-1/2 mr-5">
                            <label class="text-sm mb-1">Google Plus</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                        <div class="flex flex-col w-1/2 ml-5">
                            <label class="text-sm mb-1">LinkedIn</label>
                            <InputText class="w-full text-lg" type="text" v-model="value" />
                        </div>
                    </div>
                </div>
                <button class="px-6 py-3 text-white border border-rose-600 bg-rose-600 hover:bg-rose-700 hover:shadow-md">Save Chnages</button>
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
    height: 520px;
}
</style>
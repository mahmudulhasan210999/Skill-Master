<template>
    <div class="flex justify-center px-4 sm:px-12 py-6 sm:py-12 bg-gray-100">
        <div class="container">
            <div class="flex flex-col lg:flex-row w-full">
                <div class="lg:w-1/4 flex flex-col lg:mr-6 bg-white rounded-md menu-height">
            <div class="flex flex-col">
                <DashboardMenu />
            </div>
        </div>
        <div class="lg:w-3/4 flex flex-col lg:ml-6">
            <div class="w-full mt-8 lg:mt-0 flex text-sm p-4 bg-white rounded-md shadow-md mb-8">
                <router-link to="/">
                    <p class="text-primary">Home</p>
                </router-link>
                <p class="px-2">/</p>
                <p class="font-semibold">My orders</p>
            </div>
            <div class="bg-white rounded-md shadow-md p-6">
                <p class="pb-4 font-semibold">View Order</p>
                <div v-if="cartItem.length > 0">
                        <DataTable :value="cartItem" responsiveLayout="scroll">
                            <Column header="Order">
                                <template #body="slotProps">
                                    <p>{{slotProps.data.order_id}}</p>
                                </template>
                            </Column>
                            <Column header="Date">
                                <template #body="slotProps">
                                    {{slotProps.data.date}}
                                </template>
                            </Column>
                            <Column header="Status">
                                <template #body="slotProps">
                                    <div class="flex text-center">
                                        <p v-if="slotProps.data.status == 'Completed'" class="px-2 py-1 w-24 bg-green-100 text-green-600 rounded-sm">{{slotProps.data.status}}</p>
                                        <p v-if="slotProps.data.status == 'Cancelled'" class="px-2 py-1 w-24 bg-rose-100 text-primary rounded-sm">{{slotProps.data.status}}</p>
                                        <p v-if="slotProps.data.status == 'In Progress'" class="px-2 py-1 w-24 bg-yellow-100 text-yellow-600 rounded-sm">{{slotProps.data.status}}</p>
                                    </div>
                                </template>
                            </Column>
                            <Column header="Total bill">
                                <template #body="slotProps">
                                    <div class="flex">
                                        <p class="mr-0.5">৳</p>
                                        <p>{{ slotProps.data.total }}</p>
                                    </div>
                                </template>
                            </Column>
                            <Column header="Action">
                                <template #body="slotProps">
                                    <button class="bg-green-100 py-2 px-4 md:mr-1 text-green-600 rounded-sm" @click="viewOrder(slotProps)">View</button>
                                    <button class="bg-rose-100 py-2 px-4 mt-1 md:mt-0 md:ml-1 text-primary rounded-sm" @click="deleteOrder(slotProps)">Delete</button>
                                </template>
                            </Column>
                        </DataTable> 
                    </div>  
                    <div class="lg:mt-16 flex flex-col justify-center items-center" v-else>
                        <img src="../../assets/empty-search.jpg" class="" alt="empty cart" />
                        <h3 class="mt-4">
                            <p class="text-gray-400 font-semibold text-xl sm:text-2xl">Your Cart is Empty</p>
                        </h3>
                        <div class="mt-4">
                            <button class="text-sm sm:text-base" @click="toHome">CONTINUE SHOPPING</button>
                        </div>
                    </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardMenu from "./Sidebar.vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    data() {
        return {
           cartItem: [
               {
                   id: 1,
                   order_id: "#CP-00295",
                   date: "02 July 2020",
                   status: "In Progress",
                   total: 110
               },
               {
                   id: 2,
                   order_id: "#CP-00832",
                   date: "02 July 2020",
                   status: "Completed",
                   total: 110
               },
               {
                   id: 3,
                   order_id: "#CP-00746",
                   date: "02 July 2020",
                   status: "Cancelled",
                   total: 110
               },
           ] 
        }
    },

    components: {
        DashboardMenu,
        DataTable,
        Column
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
<template>
    <div class="flex flex-col items-center w-full cart-container px-10 sm:px-20 lg:px-12 xl:px-24 py-20">
        <div class="container">
            <div class="text-center mb-6">
                <p class="text-2xl md:text-3xl xl:text-5xl font-bold">Favourite List</p>
                <div class="flex justify-center text-sm lg:text-base mt-2 text-primary">
                    <router-link to="/"><p>Home</p></router-link>
                    <p class="px-2"> / </p>
                    <p>Wishlist</p>
                </div>
            </div>
            <div class="w-full lg:flex justify-center mt-16">
                <div class="flex flex-col">
                    <div class="border border-gray-200 p-3 lg:p-6 rounded-md" v-if="cartItem.length > 0">
                        <DataTable :value="cartItem" responsiveLayout="scroll">
                            <Column header="Image">
                                <template #body="slotProps">
                                    <div class="mr-3 lg:mr-8">
                                        <img 
                                            :src="slotProps.data.image" 
                                            alt="course-image" 
                                            class="h-20 w-20 rounded-sm"
                                        />
                                    </div>
                                </template>
                            </Column>
                            <Column header="Title">
                                <template #body="slotProps">
                                    <p class="mr-3 lg:mr-8">{{slotProps.data.name}}</p>
                                </template>
                            </Column>
                            <Column header="Price">
                                <template #body="slotProps">
                                    <div class="flex mr-3 lg:mr-8">
                                        <p class="mr-0.5">৳</p>
                                        <p v-if="slotProps.data.on_sale">{{slotProps.data.offer_price}}</p>
                                        <p v-else>{{slotProps.data.sell_price}}</p>
                                    </div>
                                </template>
                            </Column>
                            <Column header="Action">
                                <template #body="slotProps">
                                    <div class="flex mr-3 lg:mr-8">
                                        <button class="px-3 lg:px-5 py-1.5 lg:py-2 bg-primary text-white rounded-md" @click="enrollCourse(slotProps.data)">Enroll Now</button>
                                    </div>
                                </template>
                            </Column>
                            <Column header="">
                                <template #body="slotProps">
                                    <i class="pi pi-times cursor-pointer px-2.5 py-2 border rounded-md border-primary bg-primary text-white" @click="removeItem(slotProps.data)"></i>
                                </template>
                            </Column>
                        </DataTable> 
                    </div> 
                    <div class="lg:mt-16 flex flex-col justify-center items-center" v-else>
                        <img src="../../assets/empty-search.jpg" class="" alt="empty cart" />
                        <h3 class="mt-4">
                            <p class="text-gray-400 font-semibold text-xl sm:text-2xl">Your Wishlist is Empty</p>
                        </h3>
                        <div class="mt-4">
                            <button class="text-sm sm:text-base" @click="toHome">BACK TO HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';

export default {
    data() {
        return {
            coupon_code: null,
            cartItem: [
                {
                    id: 2,
                    image: '',
                    name: 'Software Designing Basics',
                    on_sale: true,
                    offer_price: 112,
                    sell_price: 145
                },
                {
                    id: 1,
                    image: '',
                    name: 'Software Development Course',
                    on_sale: false,
                    offer_price: 0,
                    sell_price: 194
                },
            ]
        }
    },

    components: {
        DataTable,
        Column,
        InputText
    },

    methods: {
        toCheckout() {
            this.$router.push("/checkout")
        }
    }
}
</script>

<style scoped>
.button {
    @apply ml-1.5 md:ml-3 border rounded-md px-6 py-2.5 bg-primary text-white text-sm sm:text-base;
}

@media screen and (max-width: 420px) {
    .cart-container {
        @apply px-4;
    }
} 
</style>
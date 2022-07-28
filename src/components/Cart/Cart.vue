<template>
    <div class="flex flex-col items-center w-full cart-container px-10 sm:px-20 lg:px-12 xl:px-24 py-20">
        <div class="container">
            <div class="text-center mb-6">
                <p class="text-2xl md:text-3xl xl:text-5xl font-bold">Add To Cart</p>
                <div class="flex justify-center text-sm lg:text-base mt-2 text-primary">
                    <router-link to="/"><p>Home</p></router-link>
                    <p class="px-2"> / </p>
                    <p>Add To Cart</p>
                </div>
            </div>
            <div class="w-full lg:flex mt-16">
                <div class="lg:w-2/3">
                    <div class="flex flex-col border border-gray-200 p-3 lg:p-6 rounded-md">
                        <div v-if="cartItem.length > 0">
                            <DataTable :value="cartItem" responsiveLayout="scroll">
                                <Column header="Image">
                                    <template #body="slotProps">
                                        <img 
                                            :src="slotProps.data.image" 
                                            alt="" 
                                            class="h-12 w-12 rounded-sm"
                                        />
                                    </template>
                                </Column>
                                <Column header="Title">
                                    <template #body="slotProps">
                                        {{slotProps.data.name}}
                                    </template>
                                </Column>
                                <Column header="Unit Price">
                                    <template #body="slotProps">
                                        <div class="flex">
                                            <p class="mr-0.5">৳</p>
                                            <p v-if="slotProps.data.on_sale">{{slotProps.data.offer_price}}</p>
                                            <p v-else>{{slotProps.data.sell_price}}</p>
                                        </div>
                                    </template>
                                </Column>
                                <Column header="Quantity">
                                    <template #body="slotProps">
                                        <div class="flex items-center">
                                            <div class="border border-gray-200 p-1" v-if="slotProps.data.quantity > 1">
                                                <button
                                                    type="button"
                                                    class="m-1"
                                                    data-type="minus"
                                                    data-field
                                                    @click="decrement(slotProps.data)"
                                                >
                                                    <i class="pi pi-angle-left"></i>
                                                </button>
                                            </div>
                                            <div class="py-1.5 px-4 border-y border-gray-200">
                                                <p class="text-lg">{{slotProps.data.quantity}}</p>
                                            </div>
                                            <div class="border border-gray-200 p-1">
                                                <button
                                                    type="button"
                                                    class="m-1"
                                                    data-type="plus"
                                                    data-field
                                                    @click="increment(slotProps.data)"
                                                >
                                                    <i class="pi pi-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </template>
                                </Column>
                                <Column header="Total">
                                    <template #body="slotProps">
                                        <div class="flex">
                                            <p class="mr-0.5">৳</p>
                                            <p v-if="slotProps.data.on_sale">{{ slotProps.data.offer_price * slotProps.data.quantity }}</p>
                                            <p v-else>{{ slotProps.data.sell_price * slotProps.data.quantity }}</p>
                                        </div>
                                    </template>
                                </Column>
                                <Column header="Action">
                                    <template #body="slotProps">
                                        <i class="pi pi-times cursor-pointer px-2.5 py-1.5 border rounded-md border-primary bg-primary" @click="removeItem(slotProps.data)" style="color: white;"></i>
                                    </template>
                                </Column>
                            </DataTable> 
                            <div class="mt-3 lg:mt-6 flex flex-col md:flex-row justify-end items-end md:items-center">
                                <div class="flex flex-col sm:flex-row mb-3 md:mb-0">
                                    <InputText placeholder="Coupon Code" class="w-52" type="text" v-model="coupon_code" />
                                    <button class="button mt-2 sm:mt-0">Apply Coupon</button>
                                </div>
                            </div>
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
                <div class="lg:w-1/3 lg:pl-8 xl:pl-12 mt-8 lg:mt-0">
                    <div class="w-full p-5 border border-gray-200 rounded-md">
                        <p class="text-black font-semibold">Billing Summary</p>
                        <div class="flex flex-col py-6 text-sm border-b border-dotted border-gray-500">
                            <div class="flex justify-between">
                                <p class="font-thin text-gray-500">Base price</p>
                                <p class="font-semibold text-gray-600">$140.00</p>
                            </div>
                            <div class="flex justify-between mt-3">
                                <p class="font-thin text-gray-500">Discount</p>
                                <p class="font-semibold text-gray-600">$10.00</p>
                            </div>
                        </div>
                        <div class="flex justify-between font-semibold text-xl mt-6">
                            <p>Total Cost</p>
                            <p>$140.00</p>
                        </div>
                        <div class="mt-10 flex justify-center w-full">
                            <button @click="toCheckout" class="py-4 w-full bg-green-100 rounded-md text-gray-600 font-semibold hover:bg-primary hover:text-white">Proceed To Checkout</button>
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
                    sell_price: 145,
                    quantity: 5,
                },
                {
                    id: 1,
                    image: '',
                    name: 'Software Development Course',
                    on_sale: false,
                    offer_price: 0,
                    sell_price: 194,
                    quantity: 2,
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
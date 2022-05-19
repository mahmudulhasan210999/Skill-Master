<template>
    <div class="flex flex-col w-full px-36 py-20">
        <div class="text-center">
            <p class="text-5xl font-bold">Add To Cart</p>
            <div class="flex justify-center mt-2">
                <router-link to="/"><p class="text-rose-600">Home</p></router-link>
                <p class="px-2"> / </p>
                <p>Add To Cart</p>
            </div>
        </div>
        <div class="w-full flex mt-16">
            <div class="w-2/3">
                <div class="flex flex-col">
                    <div v-if="cartItem.length > 0">
                        <DataTable :value="cartItem" responsiveLayout="scroll">
                            <Column header="Image">
                                <template #body="slotProps">
                                    <img 
                                        :src="slotProps.data.image" 
                                        alt="" 
                                        class="h-16 w-16 rounded-md"
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
                                        <div class="border p-1" v-if="slotProps.data.quantity > 1">
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
                                        <div class="py-1.5 px-4 border">
                                            <p class="text-lg">{{slotProps.data.quantity}}</p>
                                        </div>
                                        <div class="border p-1">
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
                            <Column header="Remove">
                                <template #body="slotProps">
                                    <i class="pi pi-times cursor-pointer px-3 py-2 border rounded-md border-red-500 bg-red-500" @click="removeItem(slotProps.data)" style="color: white;"></i>
                                </template>
                            </Column>
                        </DataTable> 
                        <div class="mt-6 flex justify-end items-center">
                            <InputText placeholder="Coupon Code" class="w-52" type="text" v-model="coupon_code" />
                            <button class="button">Apply Coupon</button>
                            <button class="button">Empty Cart</button>
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
            <div class="w-1/3 pl-16">
                <div class="w-full p-5 border border-gray-200 rounded-md">
                    <p class="text-black font-semibold">Billing Summary</p>
                    <div class="flex flex-col py-6 text-sm border-b border-dotted">
                        <div class="flex justify-between">
                            <p class="font-thin text-gray-500">Base price</p>
                            <p class="font-semibold text-gray-600">$140.00</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <p class="font-thin text-gray-500">Discount</p>
                            <p class="font-semibold text-gray-600">$10.00</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <p class="font-thin text-gray-500">CGST</p>
                            <p class="font-semibold text-gray-600">$10.00</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <p class="font-thin text-gray-500">SGST</p>
                            <p class="font-semibold text-gray-600">$00.00</p>
                        </div>
                    </div>
                    <div class="flex justify-between font-semibold text-xl mt-6">
                        <p class="text-rose-600">Total Cost</p>
                        <p class="text-sky-600">$140.00</p>
                    </div>
                    <div class="mt-10 flex justify-center w-full">
                        <button class="py-4 px-12 bg-green-100 rounded-md text-gray-600 font-semibold hover:bg-rose-600 hover:text-white">Proceed To Checkout</button>
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
    }
}
</script>

<style scoped>
.button {
    @apply ml-3 border rounded-md px-6 py-2.5 bg-rose-600 text-white hover:bg-rose-700 text-sm sm:text-base;
}
</style>
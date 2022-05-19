<template>
    <div class="flex flex-col w-full px-44 py-20">
        <div class="text-center mb-6">
            <p class="text-5xl font-bold">Checkout</p>
            <div class="flex justify-center mt-2">
                <router-link to="/"><p class="text-rose-600">Home</p></router-link>
                <p class="px-2"> / </p>
                <p>Checkout</p>
            </div>
        </div>
        <div class="w-full flex mt-16">
            <div class="w-2/3">
                <div class="flex flex-col border border-gray-200 p-6 rounded-md"> 
                    <p class="text-black font-semibold">Billing Info</p> 
                    <div class="mt-4 flex flex-col">
                        <div class="w-full flex">
                            <div class="w-1/2 flex flex-col justify-start mr-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">First Name</p>
                                <InputText  class="w-full" type="text" v-model="user.fname" />
                            </div>
                            <div class="w-1/2 flex flex-col justify-start ml-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Last Name</p>
                                <InputText  class="w-full" type="text" v-model="user.lname" />
                            </div>
                        </div>
                        <div class="w-full flex mt-6">
                            <div class="w-1/2 flex flex-col justify-start mr-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Email Address</p>
                                <InputText  class="w-full" type="text" v-model="user.email" />
                            </div>
                            <div class="w-1/2 flex flex-col justify-start ml-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Phone Number</p>
                                <InputText  class="w-full" type="text" v-model="user.phone" />
                            </div>
                        </div>
                        <div class="w-full flex mt-6">
                            <div class="w-1/2 flex flex-col justify-start mr-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Address</p>
                                <InputText  class="w-full" type="text" v-model="user.address" />
                            </div>
                            <div class="w-1/2 flex flex-col justify-start ml-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Town / City</p>
                                <InputText  class="w-full" type="text" v-model="user.city" />
                            </div>
                        </div>
                        <div class="w-full flex mt-6">
                            <div class="w-1/2 flex flex-col justify-start mr-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Country</p>
                                <InputText  class="w-full" type="text" v-model="user.country" />
                            </div>
                            <div class="w-1/2 flex flex-col justify-start ml-4">
                                <p class="font-thin text-sm text-gray-600 mb-1">Zip / Postal Code</p>
                                <InputText  class="w-full" type="text" v-model="user.zip" />
                            </div>
                        </div>
                    </div>
                    <p class="mt-4 text-red-600">** You must fillup all the fields to place order</p>
                </div>
                <div class="mt-8 flex flex-col border border-gray-200 p-6 rounded-md"> 
                    <p class="text-black font-semibold mb-3">Select Payment Method</p> 
                    <div class="flex mt-1.5 text-left text-gray-600 text-sm hover:text-rose-600" v-for="(method, index) in payment_methods" :key="index">
                        <input class="mt-1 mr-1" type="radio" id="payment" name="payment" :value="method" v-model="payment_method">
                        <label for="method">{{method.method}} - {{method.charge}}%</label><br>
                    </div>
                </div>
            </div>
            <div class="w-1/3 pl-10">
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
                        <button class="py-4 px-12 bg-green-100 rounded-md text-gray-600 font-semibold hover:bg-rose-600 hover:text-white">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
    data() {
        return {
            user: {
                fname: null,
                lname: null,
                email: null,
                phone: null,
                address: null,
                city: null,
                country: null,
                zip: null
            },
            payment_methods: [
                {
                    id: 1,
                    method: 'Cash On Delivery',
                    charge: 0
                },
                {
                    id: 2,
                    method: 'Bkash On Delivery',
                    charge: 2
                },
                {
                    id: 3,
                    method: 'Advance Bkash Payment',
                    charge: 1.85
                },
            ]
        }
    },
    components: {
        InputText
    }
}
</script>

<style scoped>
</style>
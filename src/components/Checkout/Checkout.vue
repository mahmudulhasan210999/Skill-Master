<template>
    <div class="flex flex-col w-full px-36 py-20">
        <div class="text-center">
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
                    <div class="mt-4">
                        <!-- Work here -->
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

    components: {
        InputText
    }
}
</script>

<style scoped>
</style>
<template>
    <div class="w-full flex flex-col bg-gray-100">
        <div class="w-full flex flex-col md:flex-row px-4 py-6 md:px-20 md:py-10 lg:px-40 lg:py-14 xl:px-72 xl:py-20">

            <div class="w-full md:w-1/2 bg-img">
                <div class="pt-40 px-8 md:pt-56 md:px-110 lg:pt-64 lg:px-16">
                    <p class="text-xl font-semibold text-white">Customer Support</p>
                    <p class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Epsum dignissimos laborum, pariatur tempora nobis excepturi id aut alias consequatur</p>
                    <p class="text-yellow-600 font-semibold my-3">- Adam Someone</p>
                </div>
            </div>

            <div class="w-full md:w-1/2 bg-white mt-4 md:mt-0 p-6 lg:p-12 text-sm">
                <div class="flex text-2xl lg:text-3xl">
                    <p class="pr-2">Create An</p>
                    <p class="text-rose-600">Account</p>
                </div>
            
                <div class="my-4">
                    <p class="py-2">Emain Address*</p>
                    <InputText class="h-12 w-full" type="text" placeholder="someone@gmail.com" v-model="value" />
                </div>
                <div class="mt-6">
                    <div class="flex py-2">
                        <p>Password*</p>
                    </div>
                    <InputText class="h-12 w-full" type="password" placeholder="********" v-model="value" />
                </div>

                <button class="bg-rose-600 text-white hover:bg-rose-700 rounded-md w-full py-3 lg:py-4 mt-6">Sign Up</button>

                <div class="flex justify-center mt-8"> 
                    <p class="pr-1">Already Have An Account?</p>
                    <router-link to="/login">
                        <p class="text-rose-600">Login</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
    components: {
    InputText,
  },
}
</script>

<style scoped>
.bg-img {
    background-image: url('../../assets/images/Home/1.jpg');
    background-size: cover;
}
</style>
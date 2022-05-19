<template>
    <div class="w-full flex flex-col bg-gray-100">
        <div class="flex px-72 py-20">
            <div class="w-1/2 bg-img">
                <div class="pt-64 px-16">
                    <p class="text-xl font-semibold text-white">Customer Support</p>
                    <p class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Epsum dignissimos laborum, pariatur tempora nobis excepturi id aut alias consequatur</p>
                    <p class="text-yellow-600 font-semibold mt-3">- Adam Someone</p>
                </div>
            </div>
            <div class="w-1/2 bg-white p-12 text-sm">
                <div class="flex text-3xl">
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

                <button class="bg-rose-600 text-white hover:bg-rose-700 rounded-md w-full py-4 mt-6">Sign Up</button>

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
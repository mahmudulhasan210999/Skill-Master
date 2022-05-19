<template>
    <div class="w-full flex flex-col bg-gray-100">
        <div class="flex px-60 py-20">
            <div class="w-1/2 bg-img">
                <div class="text-white pt-60 p-10">
                    <p class="text-2xl font-semibold">Customer Support</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates sequi voluptatibus inventore, ipsum dignissimos laborum, pariatur tempora nobis excepturi id aut alias consequatur</p>
                    <p class="text-xl">Adam Someone</p>
                </div>
            </div>
            <div class="w-1/2 bg-white p-12 text-sm">
                <div class="flex text-3xl">
                    <p class="pr-2">Create An</p>
                    <p class="text-rose-600">Account</p>
                </div>
            
                <div class="py-2">
                    <p class="py-2">Emain Address*</p>
                    <InputText class="h-12 w-full" type="text" placeholder="someone@gmail.com" v-model="value" />
                </div>
                <div class="py-2">
                    <div class="flex justify-between py-2">
                        <p>Password*</p>
                        <p class="text-blue-500">Forget Password?</p>
                    </div>
                    <InputText class="h-12 w-full" type="password" placeholder="********" v-model="value" />
                </div>

                <button class="bg-rose-600 text-white hover:bg-rose-700 rounded-md w-full py-4 my-2">Sign Up</button>

                <div class="flex justify-center py-3"> 
                    <p class="pr-2">You Have't Any Account?</p>
                    <p class="text-rose-600">Login</p>
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
<template>
    <div class="w-full flex flex-col items-center bg-gray-100">
        <div class="container">
            <div class="w-full flex flex-col md:flex-row login-container sm:px-28 md:px-12 py-20 lg:px-40 xl:px-72 2xl:px-44">

                <div class="w-full hidden sm:flex md:w-1/2 container"> 
                    <img class="bg-img" src="../../assets/images/Home/1.jpg" alt="">
                    <div class="text-left bottom-left">
                        <p class="sm:text-xl font-semibold text-white">Customer Support</p>
                        <p class="text-xs sm:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Epsum dignissimos laborum, pariatur tempora nobis excepturi id aut alias consequatur</p>
                        <p class="text-yellow-600 font-semibold my-2 sm:my-3 text-sm sm:text-base">- Adam Someone</p>
                    </div>
                </div>

                <div class="w-full md:w-1/2 bg-white text-left md:mt-0 p-6 lg:p-12 text-sm">
                    <div class="flex text-2xl lg:text-3xl">
                        <p class="pr-2 text-gray-600">Sign</p>
                        <p class="text-primary">In</p>
                    </div>
                
                    <div class="my-4">
                        <p class="py-2 text-gray-600">Emain Address</p>
                        <InputText class="h-11 w-full" type="text" placeholder="someone@gmail.com" v-model="value" />
                    </div>
                    <div class="mt-6">
                        <div class="flex justify-between py-2">
                            <p class="text-gray-600">Password</p>
                            <p class="text-blue-500">Forget Password?</p>
                        </div>
                        <InputText class="h-11 w-full" type="password" placeholder="********" v-model="value" />
                    </div>

                    <button class="bg-primary text-white rounded-md w-full py-3 lg:py-4 mt-6">Sign In</button>

                    <div class="flex justify-center mt-8 text-gray-500"> 
                        <p class="pr-1">Have't an account?</p>
                        <router-link to="/registration">
                            <p class="text-primary underline underline-offset-1 font-medium">Signup</p>
                        </router-link>
                        <p class="pl-1">now.</p>
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
        InputText,
    },
}
</script>

<style scoped>
.bg-img {
    background-size: cover;
    height: 100%;
    width: 100%;
}

.container {
    position: relative;
    text-align: center;
}

.bottom-left {
    position: absolute;
    bottom: 40px;
    left: 40px;
}

@media screen and (max-width: 640px) {
    .login-container {
        @apply px-24;
    }
} 

@media screen and (max-width: 540px) {
    .login-container {
        @apply px-12;
    }
} 

@media screen and (max-width: 500px) {
    .bottom-left {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
} 

@media screen and (max-width: 420px) {
    .login-container {
        @apply px-5;
    }
} 

@media screen and (max-width: 350px) {
    .bottom-left {
        position: absolute;
        bottom: 8px;
        left: 12px;
    }
} 
</style>
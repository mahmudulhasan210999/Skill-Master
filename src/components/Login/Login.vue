<template>
    <div class="w-full flex flex-col items-center bg-gray-100">
        <div class="container">
            <div class="w-full flex flex-col md:flex-row px-4 sm:px-16 py-10 lg:px-40 lg:py-14 xl:px-72 xl:py-20 2xl:px-36">

            <div class="w-full md:w-1/2 container"> 
                <img class="bg-img" src="../../assets/images/Home/1.jpg" alt="">
                <div class="text-left bottom-left">
                    <p class="sm:text-xl font-semibold text-white">Customer Support</p>
                    <p class="text-xs sm:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Epsum dignissimos laborum, pariatur tempora nobis excepturi id aut alias consequatur</p>
                    <p class="text-yellow-600 font-semibold my-2 sm:my-3 text-sm sm:text-base">- Adam Someone</p>
                </div>
            </div>

            <div class="w-full md:w-1/2 bg-white md:mt-0 p-6 lg:p-12 text-sm">
                <div class="flex text-2xl lg:text-3xl">
                    <p class="pr-2">Sign</p>
                    <p class="text-rose-600">In</p>
                </div>
            
                <div class="my-4">
                    <p class="py-2">Emain Address*</p>
                    <InputText class="h-12 w-full" type="text" placeholder="someone@gmail.com" v-model="value" />
                </div>
                <div class="mt-6">
                    <div class="flex justify-between py-2">
                        <p>Password*</p>
                        <p class="text-blue-500">Forget Password?</p>
                    </div>
                    <InputText class="h-12 w-full" type="password" placeholder="********" v-model="value" />
                </div>

                <button class="bg-rose-600 text-white hover:bg-rose-700 rounded-md w-full py-3 lg:py-4 mt-6">Sign In</button>

                <div class="flex justify-center mt-8"> 
                    <p class="pr-1">Have't Any Account?</p>
                    <router-link to="/registration">
                        <p class="text-rose-600">Signup</p>
                    </router-link>
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

@media screen and (max-width: 500px) {
    .bottom-left {
        position: absolute;
        bottom: 20px;
        left: 20px;
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
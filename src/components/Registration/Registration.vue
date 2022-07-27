<template>
    <div class="w-full flex flex-col items-center bg-gray-100">
        <div class="container">
            <div class="w-full flex flex-col items-center sing-up-container px-20 sm:px-24 md:px-40 lg:px-16 py-20 xl:px-40 2xl:px-36">
                <div class="w-full lg:w-1/2 bg-white md:mt-0 p-6 lg:p-12 text-sm">
                    <div class="flex text-2xl lg:text-3xl">
                        <p class="pr-2 text-gray-600">Create an</p>
                        <p class="text-primary">Account</p>
                    </div>   
                    <div class="my-4 text-left">
                        <p class="py-2 text-gray-600">Emain Address*</p>
                        <InputText class="h-11 w-full" type="text" placeholder="someone@gmail.com" v-model="value" />
                    </div>
                    <div class="mt-4">
                        <div class="flex py-2">
                            <p class="text-gray-600">Username*</p>
                        </div>
                        <InputText class="h-11 w-full" type="text" placeholder="Alex Romero" v-model="value" />
                    </div>
                    <div class="mt-4">
                        <div class="flex py-2">
                            <p class="text-gray-600">Phone Number*</p>
                        </div>
                        <InputText class="h-11 w-full" type="text" placeholder="01XXXXXXXXX" v-model="value" />
                    </div>
                    <div class="mt-4">
                        <div class="flex py-2">
                            <p class="text-gray-600">Password*</p>
                        </div>
                        <InputText class="h-11 w-full" type="password" placeholder="********" v-model="value" />
                    </div>
                    <div class="mt-4">
                        <div class="flex py-2">
                            <p class="text-gray-600">Confirm Password*</p>
                        </div>
                        <InputText class="h-11 w-full" type="password" placeholder="********" v-model="value" />
                    </div>

                    <button class="bg-primary text-white rounded-md w-full py-3 lg:py-4 mt-6">Sign Up</button>

                    <div class="flex justify-center mt-8 text-gray-500"> 
                        <p class="pr-1">Have an account?</p>
                        <router-link to="/login">
                            <p class="text-primary underline underline-offset-1 font-medium">Login</p>
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
    background-size: contain;
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

@media screen and (max-width: 490px) {
    .sing-up-container {
        @apply px-10;
    }
} 

@media screen and (max-width: 380px) {
    .sing-up-container {
        @apply px-5;
    }
} 
</style>
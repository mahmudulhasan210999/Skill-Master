<template>
    <div class="w-full flex flex-col items-center bg-gray-100">
        <Toast :breakpoints="{'640px': {width: '80%', right: '0'}}" />
        <div class="container">
            <div class="w-full flex flex-col md:flex-row login-container sm:px-28 md:px-12 py-20 lg:px-40 xl:px-72 2xl:px-44">
                <div class="w-full hidden sm:flex md:w-1/2 l-container"> 
                    <img class="bg-img rounded-tl-lg rounded-bl-lg sm:rounded-bl-none sm:rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none" src="../../assets/images/20945760.jpg" alt="">
                </div>
                <div class="w-full md:w-1/2 bg-white rounded-tr-lg rounded-br-lg rounded-tl-lg sm:rounded-tl-none rounded-bl-lg sm:rounded-tr-none md:rounded-bl-none md:rounded-tr-lg text-left md:mt-0 p-6 lg:px-12 flex flex-col justify-center text-sm">
                    <div class="flex text-2xl lg:text-3xl">
                        <p class="pr-2 text-gray-600">Sign</p>
                        <p class="text-primary">In</p>
                    </div>
                    <Form class="mt-4" @submit="login" :validation-schema="schema">
                        <div class="w-full flex flex-col">
                            <p class="py-2 text-gray-600">Email Address</p>
                            <Field
                                class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                type="text" 
                                name="Email"
                                placeholder="someone@gmail.com" 
                                v-model="user_info.email"
                            />
                            <ErrorMessage name="Email" class="text-red-500 text-left text-sm mt-1 ml-1" />
                        </div>
                        <div class="flex flex-col mt-4">
                            <div class="flex justify-between py-2">
                                <p class="text-gray-600">Password</p>
                                <p class="text-blue-500">Forget Password?</p>
                            </div>
                            <Field
                                name="password"
                                class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                type="Password" 
                                placeholder="********" 
                                v-model="user_info.password"
                            />
                            <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="Password" />
                        </div>
                        <button class="bg-primary text-white text-base rounded-md w-full py-3 mt-6" @click="login">Sign In</button>
                    </Form>
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
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from "yup";
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';

export default {
    data() {
        return {
            user_info: {
                email: "",
                password: ""
            }
        }
    },

    components: { 
        Toast,
        Field,
        Form,
        ErrorMessage,
        InputText,
    },

    computed: {
        schema() {
            return Yup.object({
                password: Yup.string().required("Enter your password"),
                email: Yup.string().required("Enter your email").email("Please enter a valid email"),
            });
        },
    },

    methods: {
        login() {
            this.$store.dispatch('login/getLogin', this.user_info).then(response => {
                console.log(response)  
                if(response.data.code !== 200) { 
                    this.$toast.add({severity: 'error', summary: response.data.message, closable: false, life: 3000})
                }
            })
        },
    }
}
</script>

<style scoped>
.bg-img {
    background-size: cover;
    height: 100%;
    width: 100%;
}

.l-container {
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
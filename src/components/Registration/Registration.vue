<template>
    <div class="w-full flex flex-col items-center bg-gray-100">
        <Toast :breakpoints="{'640px': {width: '80%', right: '0'}}" />
        <div class="container">
            <div class="w-full flex flex-col items-center sing-up-container px-20 sm:px-24 md:px-40 lg:px-16 py-20 xl:px-40 2xl:px-36">
                <div class="w-full lg:w-1/2 bg-white rounded-lg md:mt-0 p-6 lg:p-12 text-sm">
                    <div class="flex text-2xl lg:text-3xl">
                        <p class="pr-2 text-gray-600">Create an</p>
                        <p class="text-primary">Account</p>
                    </div>
                    <Form class="w-full flex flex-col items-center" @submit="register" :validation-schema="schema">
                        <div class="mt-4 text-left w-full">
                            <div class="flex">
                                <p class="text-gray-600">Email Address</p>
                                <p class="text-red-500 text-md pl-0.5">*</p>
                            </div>
                            <div class="flex flex-col mt-1">
                                <Field
                                    class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                    name="Email" 
                                    v-model="registration_info.email" 
                                    type="text" 
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="Email" />
                            </div>
                        </div>
                        <div class="mt-4 text-left w-full">
                            <div class="flex">
                                <p class="text-gray-600">First Name</p>
                                <p class="text-red-500 text-md pl-0.5">*</p>
                            </div>
                            <div class="flex flex-col mt-1">
                                <Field
                                    class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                    name="First name" 
                                    v-model="registration_info.first_name" 
                                    type="text" 
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="First name" />
                            </div>
                        </div>
                        <div class="mt-4 text-left w-full">
                            <div class="flex">
                                <p class="text-gray-600">Last Name</p>
                                <p class="text-red-500 text-md pl-0.5">*</p>
                            </div>
                            <div class="flex flex-col mt-1">
                                <Field
                                    class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                    name="Last name" 
                                    v-model="registration_info.last_name" 
                                    type="text" 
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="Last name" />
                            </div>
                        </div>
                        <div class="mt-4 text-left w-full">
                            <div class="flex">
                                <p class="text-gray-600">Username</p>
                                <p class="text-red-500 text-md pl-0.5">*</p>
                            </div>
                            <div class="flex flex-col mt-1">
                                <Field
                                    class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                    name="Username" 
                                    v-model="registration_info.username" 
                                    type="text" 
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="Username" />
                            </div>
                        </div>
                        <div class="mt-4 text-left w-full">
                            <div class="flex">
                                <p class="text-gray-600">Password</p>
                                <p class="text-red-500 text-md pl-0.5">*</p>
                            </div>
                            <div class="flex flex-col mt-1">
                                <Field
                                    class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                    name="Password" 
                                    v-model="registration_info.password" 
                                    type="password" 
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="Password" />
                            </div>
                        </div>
                        <div class="mt-4 text-left w-full">
                            <div class="flex">
                                <p class="text-gray-600">Confirm Password</p>
                                <p class="text-red-500 text-md pl-0.5">*</p>
                            </div>
                            <div class="flex flex-col mt-1">
                                <Field
                                    class="h-11 px-3 w-full border border-gray-400 rounded-md outline-primary" 
                                    name="Confirm password" 
                                    v-model="registration_info.password2" 
                                    type="password" 
                                />
                                <ErrorMessage class="text-red-500 text-left text-sm mt-1 ml-1" name="Confirm password" />
                            </div>
                        </div>
                        <button class="bg-primary text-white text-base rounded-md w-full py-3 mt-6">Sign Up</button>
                    </Form>  

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
import Toast from 'primevue/toast';
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
    data() {
        return {
            registration_info: {
                email: "",
                username: "",
                first_name: "",
                last_name: "",
                password: "",
                password2: "",
            }
        }
    },

    components: {
        InputText,
        Toast,
        Field,
        Form,
        ErrorMessage
    },

    computed: {
        schema() {
            return Yup.object({
                'Email': Yup.string().required("Email is required").email("Please enter a valid email"),
                'First name': Yup.string().required("First name is required"),
                'Last name': Yup.string().required("Last name is required"),
                'Username': Yup.string().required("Username is required"),
                'Password': Yup.string().required("Password is required").min(6),
                'Confirm password':  Yup.string().required("Confirm your password").matches(this.registration_info.password, "Password doesn't match")
            });
        },
    },

    methods: {
        register() {
            this.$store.dispatch('login/getRegister', this.registration_info).then(response => { 
                // console.log(response)
                if(response.data.code == 200) {
                    this.$toast.add({severity: 'success', summary: response.data.message, closable: false, life: 3000})
                    setTimeout( () => this.$router.push({ path: '/login'}), 3000); 
                }
                else {
                    // console.log(response.data)
                    this.$toast.add({severity: 'error', detail: JSON.stringify(response.data).replace("{", " ").replace("}", " ").replace(",","\n \n"), closable: false, life: 3000})
                }
            })
        }
    }
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
<template>
    <div class="w-full flex flex-col items-center"> 
        <div class="flex flex-col w-full items-center text-center bg-secondary px-4 sm:px-8 lg:px-44 py-8 lg:py-16">
            <div class="container">
                <div class="text-white pb-8">
                    <p class="text-xl lg:text-3xl font-bold p-2">Join Thousand Of Happy Students!</p>
                    <p class="text-xs lg:text-sm">Subscribe our newsletter & get latest news and updation!</p>
                </div>

                <div class="md:px-36 lg:px-20 xl:px-60">
                    <div class="flex rounded bg-white p-2">
                        <InputText class="w-full" type="text" placeholder="Your Email Address" v-model="value" />
                        <button class="rounded bg-primary text-white text-xs lg:text-base h-12 xl:h-14 w-28 sm:w-40 px-4 ml-2">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full flex items-center justify-center step_2 px-4 sm:px-8 lg:px-20 xl:px-44 py-4 sm:py-8 lg:py-14 xl:py-16">
            <div class="container">
                <div class="flex flex-col lg:flex-row justify-between gap-3 text-gray-400">
                    <div>
                        <div class="w-auto mb-2">
                            <img class="h-16" src="../../assets/logo/skill-master.png" alt="">
                        </div>
                        <div class="text-sm text-white">
                            <p class="py-1 lg:py-2 lg:w-44 xl:w-52">4967 Sardis Sta, Victoria 8007, Montreal.</p>
                            <p class="py-1 lg:py-2">+1 246-345-0695</p>
                            <p class="py-1 lg:py-2">info@learnup.com</p>
                        </div>
                    </div>

                    <div class="mt-3 lg:mt-0">
                        <p class="text-white text-lg pb-1 lg:pb-3">Navigations</p>
                        <div class="text-sm text-white">
                            <p class="py-1 lg:py-2 hover">About Us</p>
                            <p class="py-1 lg:py-2 hover">FAQs Page</p>
                            <p class="py-1 lg:py-2 hover">Checkout</p>
                            <p class="py-1 lg:py-2 hover">Contact</p>
                            <p class="py-1 lg:py-2 hover">Blog</p>
                        </div>
                    </div>

                    <div class="mt-3 lg:mt-0">
                        <p class="text-white text-lg pb-1 lg:pb-3">New Categories</p>
                        <div class="text-sm text-white">
                            <p class="py-1 lg:py-2 hover">Designing</p>
                            <p class="py-1 lg:py-2 hover">Nusiness</p>
                            <p class="py-1 lg:py-2 hover">Software</p>
                            <p class="py-1 lg:py-2 hover">WordPress</p>
                            <p class="py-1 lg:py-2 hover">PHP</p>
                        </div>
                    </div>

                    <div class="mt-3 lg:mt-0">
                        <p class="text-white text-lg pb-1 lg:pb-3">Help & Support</p>
                        <div class="text-sm text-white">
                            <p class="py-1 lg:py-2 hover">Documentation</p>
                            <p class="py-1 lg:py-2 hover">Live Chat</p>
                            <p class="py-1 lg:py-2 hover">Mail Us</p>
                            <p class="py-1 lg:py-2 hover">Privacy</p>
                            <p class="py-1 lg:py-2 hover">Faqs</p>
                        </div>
                    </div>

                    <div class="mt-3 lg:mt-0">
                        <p class="text-white text-lg pb-1 lg:pb-3">Download Apps</p>
                        <div class="py-1 lg:py-2">
                            <button class="rounded border border-secondary h-16 w-60 flex items-center justify-start">
                                <div class="p-3">
                                    <i class="pi pi-play" style="font-size: 30px; color: #FFB71C"></i>
                                </div>
                                <div class="">
                                    <p class="text-white font-semibold">Google Play</p>
                                    <p class="text-sm text-white">Get it now</p>
                                </div>
                            </button>
                        </div>
                        <div class="py-2">
                            <button class="rounded border-secondary border h-16 w-60 flex items-center justify-start">
                                <div class="p-3">
                                    <i class="pi pi-apple" style="font-size: 30px; color: #FFB71C"></i>
                                </div>
                                <div>
                                    <p class="text-white font-semibold">App Store</p>
                                    <p class="text-sm text-white">Now it Available</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col items-center step_3 px-4 lg:px-20 xl:px-44">
            <div class="container flex flex-col md:flex-row justify-between items-center">
                <div>
                    <p class="text-white text-sm py-4">© Copyright 2022 <a class="text-gray-300 font-medium" target="_blank" href="https://www.facebook.com/catchbitflex/">Bitflex</a> | <a class="text-gray-300 font-medium" target="_blank" href="https://www.facebook.com/catchbangladesh">Catch Bangladesh</a> All Rights Reserved.</p>
                </div>
                <div class="flex mb-4 md:mb-0">
                    <div class="mr-4">
                        <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 18px; color: #FFB71C"></i></a>
                    </div>
                    <div class="mx-4">
                        <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 18px; color: #FFB71C"></i></a>
                    </div>
                    <div class="mx-4">
                        <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 18px; color: #FFB71C"></i></a>
                    </div>
                    <div class="ml-4">
                        <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 18px; color: #FFB71C"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Primeicons from 'primeicons/primeicons.css';
import Button from 'primevue/button';

export default {
    data() {
        return {
            value: null,
        }
    },

    components: {
        InputText,
        Textarea,
        Primeicons,
        Button,
    },
}
</script>

<style scoped>
    .step_2 {
        /* background: #252C41; */
        @apply bg-primary;
    }

    .step_3 {
        background: #22405f;
    }

    .hover:hover {
        color: white;
    }
</style>
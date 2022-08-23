<template>
    <div class="w-full flex flex-col items-center bg-primary">
        <div class="hidden md:flex"> 
            <div class="container px-6 lg:px-20 xl:px-32">
                <div class="w-full flex items-center text-left">
                    <div class="w-1/2 text-left text-white">
                        <p class="text-3xl lg:text-4xl font-semibold p-2">Learn On Your Schedule</p>
                        <p class="text-base p-2 w-full">Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit tur amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing elit tur adipisicing elit.</p>
                        <div class="flex p-2">
                            <input class="rounded-l-md w-80 md:text-xl pl-4 outline-none text-black" type="text" placeholder="Search...">
                            <button class="p-5 lg:p-6 rounded-r-md bg-secondary text-white">Go</button>
                        </div>
                    </div>
                    <img class="w-1/2" src="../../assets/images/Home/33.png" alt="">
                </div>
            </div>
        </div>
        <div class="flex md:hidden"> 
            <div class="w-full flex flex-col items-center text-left pl-5 sm:px-20">
                <div class="text-left text-white pt-8 sm:pt-16">
                    <p class="text-3xl sm:text-4xl font-semibold">Learn On Your Schedule</p>
                    <p class="text-base mt-4 pr-5 w-full">Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit tur amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing elit tur adipisicing elit.</p>
                    <div class="flex mt-4">
                        <input class="rounded-l-md w-56 sm:w-72 md:text-xl pl-4 outline-none text-black" type="text" placeholder="Search...">
                        <button class="p-4 sm:p-6 rounded-r-md bg-secondary text-white">Go</button>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <img class="w-full sm:w-4/5" src="../../assets/images/Home/33.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {mapState} from 'vuex';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

export default {
    data() {
        return {
            selectedCategory: null,
            value: null,
            category: [
                {name: 'Web Designing'},
                {name: 'Business'},
                {name: 'Acconting'},
                {name: 'Development'},
                {name: 'Art & Culture'}
            ],
        }
    },

    components: {
        InputText,
        Dropdown,
        Button,
    },
}
</script>

<style scoped></style>

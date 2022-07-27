<template>
    <div class="w-full flex flex-col items-center bg-primary">
        <div class="container">
            <div class="image-container w-full flex flex-col items-center text-left">
                <img class="w-full bg-img" src="../../assets/images/Home/3.png" alt="">

                <div class="text-left text-white bottom-left">
                    <p class="text-xl lg:text-5xl font-semibold p-2">Learn On Your Schedule</p>
                    <p class="text-xs lg:text-base p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit tur adipisicing elit.</p>
                    <div class="flex p-2">
                        <input class="rounded-l-md w-44 lg:w-80 lg:text-xl pl-4 outline-none text-black" type="text" placeholder="Search...">
                        <button class="p-2 lg:p-6 rounded-r-md bg-secondary text-white">Go</button>
                    </div>
                </div>
            </div>
            <div class="rounded-lg shadow-md py-4 mb-4 md:mb-10 mx-4 sm:mx-8 lg:mx-12 xl:mx-44 2xl:mx-20 bg-white">
                <div class="grid grid-cols-1 md:grid-cols-3 sm:px-4 lg:px-12">
                    <div class="p-2 sm:p-3 lg:p-5 xl:p-4" v-for="(top, index) in tops" :key="index">
                        <div class="w-full flex items-center">
                            <div class="w-1/4 flex justify-center">
                                <img class="rounded-full h-12 w-12 bg-cover" :src="top.img" alt="Image">
                            </div>
                            <div class="w-3/4 pl-0 md:pl-2 text-left">
                                <p class="text-gray-700 font-semibold text-sm">{{ top.title }}</p>
                                <p class="mt-1 text-gray-500 text-xs">{{ top.text }}</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
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
    computed: {
        ...mapState ({
            tops: state => state.home.tops
        }),
    }
}
</script>

<style scoped>
.bg-img {
    background-size: cover;
    position: relative;
    height: auto;
    width: 100vw;
}

.image-container {
    position: relative;
    text-align: center;
}

.bottom-left {
    position: absolute;
    bottom: 240px;
    left: 180px;
}




@media screen and (max-width: 800px) {
    /* .bg-img {
        background-size: contain;
        height: 100%;
        width: 100%;
    } */
    .bottom-left {
        position: absolute;
        bottom: 80px;
        left: 50px;
    }
}

@media screen and (max-width: 500px) {
    .bottom-left {
        position: absolute;
        bottom: 40px;
        left: 30px;
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

<template>
    <div class="w-full flex flex-col items-center bg-primary">
        <div class="container">
            <div class="image-container w-full flex flex-col items-center text-left">
                <img class="w-full bg-img" src="../../assets/images/Home/3.png" alt="">

                <div class="text-left text-white bottom-left">
                    <p class="title-text text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold p-2">Learn On Your Schedule</p>
                    <p class="desc-text text-sm md:text-base p-2 w-60 sm:w-80 md:w-96 lg:w-1/2">Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit tur amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing elit tur adipisicing elit.</p>
                    <div class="flex p-2">
                        <input class="rounded-l-md w-44 sm:w-60 lg:w-80 md:text-xl pl-4 outline-none text-black" type="text" placeholder="Search...">
                        <button class="p-3 sm:p-4 lg:p-6 rounded-r-md bg-secondary text-white">Go</button>
                    </div>
                </div>
            </div>
            <!-- <div class="rounded-lg shadow-md py-2 sm:py-4 my-8 md:mb-10 mx-4 sm:mx-8 lg:mx-12 xl:mx-44 2xl:mx-20 bg-white">
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
            </div>  -->
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

    // computed: {
    //     ...mapState ({
    //         tops: state => state.home.tops
    //     }),
    // }
}
</script>

<style scoped>
.bg-img {
    background-size: cover;
    position: relative;
    height: auto;
}

.image-container {
    position: relative;
    text-align: center;
}

.bottom-left {
    position: absolute;
    bottom: 170px;
    left: 180px;
}

@media screen and (max-width: 1280px) {
    .bottom-left {
        position: absolute;
        bottom: 170px;
        left: 90px;
    }
}

@media screen and (max-width: 1024px) {
    .bottom-left {
        position: absolute;
        bottom: 98px;
        left: 55px;
    }
}


@media screen and (max-width: 800px) {
    .bottom-left {
        position: absolute;
        bottom: 70px;
        left: 50px;
    }
}

@media screen and (max-width: 640px) {
    .bottom-left {
        position: absolute;
        bottom: 50px;
        left: 85px;
    }
} 

@media screen and (max-width: 540px) {
    .bottom-left {
        position: absolute;
        bottom: 25px;
        left: 55px;
    }
} 

@media screen and (max-width: 470px) {
    .bottom-left {
        position: absolute;
        bottom: 15px;
        left: 20px;
    }
} 

@media screen and (max-width: 430px) {
    .bottom-left {
        position: absolute;
        bottom: 0px;
        left: 20px;
    }

    .title-text {
        @apply text-lg;
    }

    .desc-text {
        @apply text-xs;
    }
}
</style>

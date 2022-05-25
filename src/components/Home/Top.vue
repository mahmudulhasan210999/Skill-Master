<template>
    <div class="w-full flex flex-col bg-gray-50 container">
        <div class="top-img px-8 lg:px-64 py-12 lg:py-44 w-full flex flex-col items-start text-left">
            <div class="lg:pb-8 text-white">
                <p class="text-xl lg:text-5xl font-semibold p-2">Learn On Your Schedule</p>
                <p class="text-xs lg:text-base p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit tur adipisicing elit.</p>
            </div>

            <div class="flex p-2">
                <input class="rounded-l-md w-44 lg:w-80 lg:text-xl pl-4" type="text" placeholder="Search...">
                <button label="Search" class="p-2 lg:p-6 rounded-r-md text-lg bg-rose-600 text-white hover:bg-rose-700">Go</button>
            </div>
        </div>

        <div class="rounded-lg shadow-md py-4 md:py-0 mt-8 lg:mt-8 xl:mt-0 mx-8 lg:mx-12 xl:mx-44 lg:bottom-middle">
            <div class="grid grid-cols-1 md:grid-cols-3 px-4 lg:px-12">
                <div class="p-3 lg:p-5" v-for="(top, index) in tops" :key="index">
                    <div class="w-full flex items-center">
                        <div class="w-1/4 flex justify-center">
                            <img class="rounded-full h-12 w-12" :src="top.img" alt="Image">
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
.top-img {
    background-image: url('../../assets/images/Home/1.jpg');
    position: relative;
    background-size: cover;
    height: 85vh;
}

.container {
    position: relative;
    text-align: center;
}

.bottom-middle {
    position: absolute;
    top: 93%;
    background: white;
}

@media screen and (max-width: 680px) {
    .top-img {
        background-size: contain;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
    }
}
</style>

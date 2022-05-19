<template>
    <div class="w-full flex flex-col bg-gray-50 container">
        <div class="top-img px-64 py-44 w-full flex flex-col items-start text-left">
            <div class="pb-8 text-white">
                <p class="text-5xl font-semibold p-2">Learn On Your Schedule</p>
                <p class="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit tur adipisicing elit.</p>
            </div>

            <div class="flex p-2">
                <input class="rounded-l-md w-80 text-xl pl-4" type="text" placeholder="Search...">
                <!-- <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText class="h-16 w-72" type="text" v-model="value" placeholder="Search" />
                </span> -->
                <!-- <Dropdown class="h-16 w-72" v-model="selectedCategory" :options="category" optionLabel="name" placeholder="Choose Category" /> -->
                <button label="Search" class="p-6 rounded-r-md text-lg bg-rose-600 text-white">Go</button>
            </div>
        </div>

        <div class="rounded-lg shadow-md mx-44 bottom-middle">
            <div class="grid grid-cols-3 px-12">
                <div class="p-5" v-for="(top, index) in tops" :key="index">
                    <div class="flex items-center">
                        <div>
                            <img class="rounded-full h-14 w-14" :src="top.img" alt="Image">
                        </div>
                        <div class="pl-4 text-left">
                            <p class="font-semibold">{{ top.title }}</p>
                            <p>{{ top.text }}</p>
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
</style>

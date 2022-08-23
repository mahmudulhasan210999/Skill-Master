<template>
    <div class="flex flex-col navbar bg-primary px-5">
        <div class="pt-5 nav-cross">
            <div class="flex items-center text-white border border-white p-2 rounded-md">
                <i @click="$emit('navClosed')" class="pi pi-times"></i>
            </div>
        </div>

        <div class="w-full"> 
            <router-link v-for="(item, index) in menu" :key="index" :to="item.path">
                <p @click="$emit('navClosed')" class="py-3 my-2 text-white text-lg border-b border-alternate2 w-full">{{item.title}}</p>
            </router-link>
            <router-link to="/dashboard">
                <p @click="$emit('navClosed')" class="py-3 my-2 text-white text-lg border-b border-alternate2 w-full">My Profile</p>
            </router-link>

            <div class="flex w-full mt-4">
                <router-link to="/login" class="w-full">
                    <button @click="$emit('navClosed')" class="w-full py-2 border border-black rounded-md bg-black font-semibold text-white">Sign in</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState ({
            menu: state => state.menu.menu
        }),
    },
}
</script>

<style scoped>
.navbar {
    z-index: 999;
    /* width: 75%; */
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @apply shadow-lg bg-primary;
}

.nav-cross { 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-start;
}

@media screen and (max-width: 1024px) {
    .navbar {
        width: 50vw;
    }
}

@media screen and (max-width: 850px) {
    .navbar {
        width: 55vw;
    }
}

@media screen and (max-width: 540px) {
    .navbar {
        width: 70vw;
    }
}
</style>
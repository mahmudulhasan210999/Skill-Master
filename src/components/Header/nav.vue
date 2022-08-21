<template>
    <div class="flex flex-col navbar bg-primary">
        <div class="py-3 nav-cross">
            <!-- <router-link to="/cart">
                <div class="flex items-center text-white border border-white px-5 py-2 rounded-md hover:border-2 hover:border-primary" @click="$emit('navClosed')">
                    <i class="pi pi-shopping-cart"></i>
                    <p class="ml-2">Cart</p>
                </div>
            </router-link> -->
            <div class="flex items-center text-white border border-white mx-4 px-3 py-3 rounded-md hover:border-2 hover:border-primary">
                <i @click="$emit('navClosed')" class="pi pi-times"></i>
            </div>
        </div>

        <div> 
            <router-link v-for="(item, index) in menu" :key="index" :to="item.path">
                <p @click="$emit('navClosed')" class="mx-2 px-4 py-2 my-2 text-white hover:text-primary">{{item.title}}</p>
            </router-link>

            <div class="flex p-4">
                <router-link to="/cart">
                    <button @click="$emit('navClosed')" class="py-1.5 px-3 sm:px-4 text-primary border rounded-md font-semibold bg-white">Wishlist</button>
                </router-link>
                <router-link to="/login">
                    <button @click="$emit('navClosed')" class="py-1.5 px-3 sm:px-4 border border-black rounded-md bg-black font-semibold text-white ml-2 sm:ml-4">Sign in</button>
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
    width: 70vw;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.nav-cross { 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-start;
    border-bottom-width: 2px;
    @apply border-alternate2;
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
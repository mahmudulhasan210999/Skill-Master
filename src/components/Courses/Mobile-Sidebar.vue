<template>
    <div class="navbar overflow-y-auto">
        <div class="nav-cross">
            <i @click="$emit('navClosed')" class="pi pi-times py-2 px-6 m-4"></i>
        </div>
        <MobileBar />
    </div>
</template>

<script>
import MobileBar from "./Sidebar.vue";

export default {
    components: {
        MobileBar
    }
}
</script>

<style scoped>

.navbar {
    z-index: 999;
    width: 65vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: white;
    @apply shadow-lg;
}

.nav-cross { 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-start;
    border-bottom-width: 1px;
}

@media screen and (max-width: 560px) {
    .navbar {
        width: 81vw;
    }
}
</style>
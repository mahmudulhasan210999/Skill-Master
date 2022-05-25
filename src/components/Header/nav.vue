<template>
  <div class="flex flex-col navbar">
    <div class="nav-cross">
      <i @click="$emit('navClosed')" class="pi pi-times py-2.5 mx-4 px-3"></i>
    </div>

    <div class="p-2">
      <div class="">
        <div v-for="(item, index) in menu" :key="index">
          <router-link :to="{ path: item.path}">
            <p class="mx-2 px-4 py-2 my-2 text-white">{{item.title}}</p>
          </router-link>
        </div>
      </div>

      <div class="flex p-4">
        <router-link to="/login">
          <button class="py-2 px-5 text-rose-600 border rounded-md font-semibold bg-white">Sign in</button>
        </router-link>
        <router-link to="/registration">
          <button class="py-2 px-5 border rounded-md bg-black font-semibold text-white ml-4">Sign up</button>
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
  }
}
</script>

<style scoped>
.navbar {
  background: #1C2138;
  z-index: 999;
  width: 75vw;
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
  padding-top: 3%;
  padding-right: 0%;
  margin-bottom: 4%;
  border-bottom-width: 2px;
}
</style>
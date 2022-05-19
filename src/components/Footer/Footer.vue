<template>
  <div class="w-full flex flex-col">
    <div class="text-center bg-rose-700 px-44 py-16">
      <div class="text-white pb-8">
        <p class="text-3xl font-bold p-2">Join Thousand Of Happy Students!</p>
        <p class="text-sm">Subscribe our newsletter & get latest news and updation!</p>
      </div>

      <div class="px-60">
        <div class="flex rounded bg-white p-2">
          <InputText class="h-14 w-full" type="text" placeholder="  Your Email Address" v-model="value" />
          <button class="rounded bg-rose-700 text-white h-14 w-40 px-4 ml-2">Get Started</button>
        </div>
      </div>
    </div>

    <div class="step_2 px-44 py-16">
      <div class="flex justify-between gap-3 text-gray-400">
        <div>
          <div class="bg-white w-40 mb-2">
            <img class="h-16" src="../../assets/logo/platform-logo.png" alt="">
          </div>
          <div class="text-sm">
            <p class="py-2">4967 Sardis Sta, Victoria 8007, Montreal.</p>
            <p class="py-2">+1 246-345-0695</p>
            <p class="py-2">info@learnup.com</p>
          </div>
        </div>

        <div>
          <p class="text-white pb-3">Navigations</p>
          <div class="text-sm">
            <p class="py-2 hover">About Us</p>
            <p class="py-2 hover">FAQs Page</p>
            <p class="py-2 hover">Checkout</p>
            <p class="py-2 hover">Contact</p>
            <p class="py-2 hover">Blog</p>
          </div>
        </div>

        <div>
          <p class="text-white pb-3">New Categories</p>
          <div class="text-sm">
            <p class="py-2 hover">Designing</p>
            <p class="py-2 hover">Nusiness</p>
            <p class="py-2 hover">Software</p>
            <p class="py-2 hover">WordPress</p>
            <p class="py-2 hover">PHP</p>
          </div>
        </div>

        <div>
          <p class="text-white pb-3">Help & Support</p>
          <div class="text-sm">
            <p class="py-2 hover">Documentation</p>
            <p class="py-2 hover">Live Chat</p>
            <p class="py-2 hover">Mail Us</p>
            <p class="py-2 hover">Privacy</p>
            <p class="py-2 hover">Faqs</p>
          </div>
        </div>

        <div>
          <p class="text-white pb-3">Download Apps</p>
          <div class="py-2">
            <button class="rounded border border-gray-700 h-16 w-60 flex items-center justify-start">
              <div class="p-3">
                <i class="pi pi-play" style="font-size: 30px; color: rgb(194, 30, 86)"></i>
              </div>
              <div class="">
                <p class="text-white font-semibold">Google Play</p>
                <p class="text-sm">Get it now</p>
              </div>
            </button>
          </div>
          <div class="py-2">
            <button class="rounded border-gray-700 border h-16 w-60 flex items-center justify-start">
              <div class="p-3">
                <i class="pi pi-apple" style="font-size: 30px; color: rgb(194, 30, 86)"></i>
              </div>
              <div>
                <p class="text-white font-semibold">App Store</p>
                <p class="text-sm">Now it Available</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="step_3 px-44 flex justify-between">
      <div>
        <p class="text-gray-400 text-sm p-4">© Copyright 2022 <a class="text-gray-300 font-medium" target="_blank" href="https://www.facebook.com/catchbitflex/">Bitflex</a> | <a class="text-gray-300 font-medium" target="_blank" href="https://www.facebook.com/catchbangladesh">Catch Bangladesh</a> All Rights Reserved.</p>
      </div>
      <div class="flex pt-4">
        <div class="mr-4">
          <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
        </div>
        <div class="mx-4">
          <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
        </div>
        <div class="mx-4">
          <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
        </div>
        <div class="ml-4">
          <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 18px; color: rgb(128,128,128)"></i></a>
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
  components: {
    InputText,
    Textarea,
    Primeicons,
    Button,

  },

  methods: {
    
  },
}
</script>

<style scoped>
.step_2 {
  background: #252C41;
}
.step_3 {
  background: #1B2132;
}
.hover:hover {
  color: white;
}
</style>
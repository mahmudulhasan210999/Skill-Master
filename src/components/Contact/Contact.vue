<template>
  <div class="w-full flex flex-col">
    <div class="text-center p-12 px-44">
      <p class="text-5xl font-bold p-4">Get In Touch</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-rose-600">Home</p></router-link>
        <p class="px-2"> / </p>
        <p>Contact</p>
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="flex px-40 py-20">
        <div class="w-2/3 rounded-md px-8 py-4 mx-4 bg-white">
          <div class="">
            <p class="font-semibold border-b border-gray-300 py-2">Fillup The Form</p>
          </div>

          <div class="flex py-2">
            <div class="w-full pr-2">
              <p class="text-sm py-2">Name</p>
              <InputText class="h-12 w-full" type="text" v-model="value" />
            </div>
            <div class="w-full pl-2">
              <p class="text-sm py-2">Email</p>
              <InputText class="h-12 w-full" type="text" v-model="value" />
            </div>
          </div>
          
          <div class="w-full py-2">
            <p class="text-sm py-2">Subject</p>
            <InputText class="h-12 w-full" type="text" v-model="value" />
          </div>

          <div class="w-full py-2">
            <p class="text-sm py-2">Message</p>
            <Textarea class="h-24 w-full" v-model="value1" rows="5" cols="30" />
          </div>

          <div class="flex justify-center pt-4">
            <button class="bg-rose-600 hover:bg-rose-700 text-white rounded-md px-8 py-4 mb-4">Submit Request</button>
          </div>

        </div>

        <div class="w-1/3 rounded-md p-4 mx-4 bg-white">
          <p class="font-semibold border-b border-gray-300 py-2">Reach Us</p>

          <div class="p-3">
            <p class="font-semibold text-3xl">Get In Touch</p>
            <p class="text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            
            <div class="flex items-center p-4">
              <div class="mr-3">
                <i class="pi pi-home" style="font-size: 38px; color: rgb(194, 30, 86)"></i>
              </div>
              <div class="px-2 text-sm">
                <p class="font-semibold py-2">Reach Us</p>
                <p>2512, New Market, Eliza Road, Sincher 80 CA, Canada, USA</p>
              </div>
            </div>

            <div class="flex p-4 items-center">
              <div class="mr-3">
                <i class="pi pi-envelope" style="font-size: 38px; color: rgb(194, 30, 86)"></i>
              </div>
              <div class="px-2 text-sm">
                <p class="font-semibold py-2">Drop A Mail</p>
                <p>Rikada@gmail.com</p>
                <p>Rikada@gmail.com</p>
              </div>
            </div>

            <div class="flex p-4 items-center">
              <div class="mr-3">
                <i class="pi pi-mobile" style="font-size: 38px; color: rgb(194, 30, 86)"></i>
              </div>
              <div class="px-2 text-sm">
                <p class="font-semibold py-2">Call Us</p>
                <p>+91 235 548 7548</p>
                <p>+91 235 548 7548</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Primeicons from 'primeicons/primeicons.css';

export default {
  components: {
    InputText,
    Textarea,
    Primeicons,

  },

  methods: {
    
  },
}
</script>
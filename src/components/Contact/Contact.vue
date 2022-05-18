<template>
  <div class="w-full flex flex-col px-44">
    <div class="text-center p-12">
      <p class="text-5xl font-bold p-4">Get In Touch</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-red-500">Home</p></router-link>
        <p class="px-2"> / </p>
        <p>Contact</p>
      </div>
    </div>

    <div class="flex ">
      <div class="w-2/3 p-4 mx-4 bg-gray-100">
        <div class="">
          <p class="font-semibold border-b border-gray-200 py-2">Fillup The Form</p>
        </div>

        <div class="flex">
          <div class="w-full pr-2">
            <p class="text-sm py-2">Name</p>
            <InputText class="h-12 w-full" type="text" v-model="value" />
          </div>
          <div class="w-full pl-2">
            <p class="text-sm py-2">Email</p>
            <InputText class="h-12 w-full" type="text" v-model="value" />
          </div>
        </div>
        
        <div class="w-full">
          <p class="text-sm py-2">Subject</p>
          <InputText class="h-12 w-full" type="text" v-model="value" />
        </div>

        <div class="w-full">
          <p class="text-sm py-2">Message</p>
          <Textarea class="h-24 w-full" v-model="value1" rows="5" cols="30" />
        </div>

        <button class="bg-rose-600 text-white p-4 my-4">Submit Request</button>

      </div>

      <div class="w-1/3 p-4 mx-4 bg-gray-100">
        <p class="font-semibold border-b border-gray-200 py-2">Reach Us</p>

        <div class="p-3">
          <p class="font-semibold text-3xl">Get In Touch</p>
          <p class="text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          
          <div class="flex p-4">
            <div>
              <p>★★★★★</p>
            </div>
            <div class="px-2">
              <p>Reach Us</p>
              <p>2512, New Market, Eliza Road, Sincher 80 CA, Canada, USA</p>
            </div>
          </div>

          <div class="flex p-4">
            <div>
              <p>★★★★★</p>
            </div>
            <div class="px-2">
              <p>Drop A Mail</p>
              <p>Rikada@gmail.com</p>
              <p>Rikada@gmail.com</p>
            </div>
          </div>

          <div class="flex p-4">
            <div>
              <p>★★★★★</p>
            </div>
            <div class="px-2">
              <p>Call Us</p>
              <p>+91 235 548 7548</p>
              <p>+91 235 548 7548</p>
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

export default {
  components: {
    InputText,
    Textarea,

  },

  methods: {
    
  },
}
</script>
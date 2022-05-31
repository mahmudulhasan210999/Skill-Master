<template>
  <div class="w-full flex flex-col">
    <div class="text-center p-8 md:px-12 md:py-20">
      <p class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold p-4">How To Increase Wordpress Speed</p>
      <div class="flex justify-center">
        <router-link to="/"><p class="text-rose-600 text-sm lg:text-base">Home</p></router-link>
        <p class="px-2 text-sm lg:text-base"> / </p>
        <p class="text-sm lg:text-base">Blog Detail</p>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row bg-gray-100 px-4 py-4 lg:px-28 lg:py-14 xl:px-40 xl:py-20">
      <div class="w-full md:w-2/3">
        <!-- <Details /> -->
        <div class="w-full flex flex-col">
          <!-- Blog Details main design -->
          <div class="bg-white border rounded-md border-gray-200 p-6">
            <img class="rounded-md" :src="getDetails.headerImage" alt="Image">
            <div class="flex items-center py-4">
              <div class="flex items-center text-sm text-gray-500">
                <i class="pi pi-user"></i>
                <p class="px-2" >by {{ getDetails.author.author_name }}</p>
              </div>
              <div class="flex items-center ml-6 text-sm text-gray-500">
                <i class="pi pi-inbox"></i>
                <p class="px-2">45 Comments</p>
              </div>
            </div>
          
            <p class="text-xl md:text-xl lg:text-4xl font-bold py-2">{{ getDetails.title }}</p>
            <p class="py-2 text-slate-500 mt-6" v-html="getDetails.content"></p>

            <div class="flex flex-col items-end my-6 pb-8 border-b">
              <p class="text-sm md:text-base font-semibold my-2">Social Share</p>
              <div class="flex">
                <div class="mx-4">
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

            <div class="flex justify-between text-sm md:text-base mt-8">
              <button class="bg-rose-600 text-white px-5 py-3">Prev Post</button>
              <button class="bg-rose-600 text-white px-5 py-3">Next Post</button>
            </div>
          </div>

          <div class="bg-white border rounded-md border-gray-200 p-4 mt-4 lg:mt-8 text-center flex flex-col items-center">
            <img class="rounded-full h-32 w-32" :src="getDetails.author.thumb" alt="Image">
            <p class="font-semibold my-3 text-lg">{{ getDetails.author.author_name }}</p>
            <div class="flex mb-4">
              <div class="mx-4">
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
            <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae, maiores debitis nisi quisquam, optio minima totam necessitatibus commodi quos unde quis, eum adipisci atque. Quod expedita repellendus tempora assumenda!</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/3 pt-4 md:pt-0 ml-4 lg:ml-8">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Details from '../../../components/Blog/Blog_Details.vue'
import Sidebar from '../../../components/Blog/Sidebar.vue'
import { mapState } from "vuex";
import Primeicons from 'primeicons/primeicons.css';

export default {
  components: {
    Details,
    Sidebar,
    Primeicons,
  },
  // data(){
  //     return{
  //       getDetails:null
  //     }
  //   },
  // watch:{
  //   // getDetails(newVal, oldVal){
  //   //   this.getDetails=this.details
  //   // }
  // },

  // methods: {
  //   getDetails() {
  //     return this.$route.params.id
  //   }
  // },
  computed: {
    ...mapState ({
      getDetails: state => state.blogs.getDetails
    }),
  },

  created() {
    this.$store.dispatch('blogs/getBlogDetails', this.$route.params.id)
  },
}
</script>
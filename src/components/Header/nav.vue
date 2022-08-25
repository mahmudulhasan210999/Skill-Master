<template>
    <div class="flex flex-col navbar bg-primary px-5">
        <div class="pt-5 nav-cross">
            <div class="flex items-center text-white border border-white p-2 rounded-md">
                <i @click="$emit('navClosed')" class="pi pi-times"></i>
            </div>
        </div>

        <div class="w-full"> 
            <router-link to="/">
                <p @click="$emit('navClosed')" class="py-3 my-2 text-white text-lg border-b border-alternate2 w-full">Home</p>
            </router-link>
            <div class="flex justify-between py-3 my-2 text-white text-lg border-b border-alternate2 w-full">
                <router-link class="w-full" to="/courses">
                    <p @click="$emit('navClosed')" class="w-5/6">Courses</p>
                </router-link>
                <div class="flex items-center">
                    <i class="pi pi-plus p-1.5" @click="openCourseCategory"></i>
                </div>
            </div>
            <div v-if="isOpen">
                <div class="flex flex-col items-start" v-for="(category, index) in items" :key="index">
                    <div class="w-full text-left p-2 flex text-white">
                        <router-link class="w-full" :to="{ path: '/courses/' + category.slug }" >
                            <p class="w-5/6" @click="$emit('navClosed')"> {{ category.title }} </p>
                        </router-link> 
                        <span class="font-normal" v-if="category.subcategory">
                            <i class="pi pi-plus p-1" @click="openSubCategory(category.subcategory, category.id)"></i>
                        </span> 
                    </div> 
                    <div class="w-full" v-if="isSubCategoryOpen">
                        <div v-if="category.id == parentCategoryId">
                            <div class="text-white px-5 py-1.5 w-full" v-for="(childrenItem, index2) in subCategoryList" :key="index2">
                                <router-link @click="$emit('navClosed')" class="w-full" :to="{ path: '/courses/' + childrenItem.slug }" >
                                    <p class="w-full text-secondary">{{childrenItem.title}}</p>
                                </router-link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between py-3 my-2 text-white text-lg border-b border-alternate2 w-full">
                <router-link class="w-full" to="/blogs">
                    <p @click="$emit('navClosed')" class="w-5/6">Blogs</p>
                </router-link>
                <div class="flex items-center" @click="openBlogCategory">
                    <i class="pi pi-plus p-1.5"></i>
                </div>
            </div>
            <div v-if="isBlogOpen">
                <div class="flex flex-col">
                    <div class="text-left p-2 flex text-white w-full" v-for="(blog, index) in blog_category" :key="index" @click="$emit('navClosed')">
                        <p class="w-full" @click="toBlogByCategory(blog.slug)"> {{ blog.title }} </p> 
                    </div> 
                </div>
            </div>
            <router-link to="/contact">
                <p @click="$emit('navClosed')" class="py-3 my-2 text-white text-lg border-b border-alternate2 w-full">Contact</p>
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
    data() {
        return {
            isBlogOpen: false,
            isOpen: false,
            isSubCategoryOpen: false,
            subCategoryList: [],
            parentCategoryId: null
        }
    },
    computed: {
        ...mapState ({
            menu: state => state.menu.menu,
            items: state => state.home.hot_categories,
            blog_category: state => state.blogs.categories, 
        }),
    },

    mounted() {
        this.$store.dispatch('home/getCategories'),
        this.$store.dispatch('blogs/getCategories')
    },

    methods: {
        openBlogCategory() {
            this.isBlogOpen = !this.isBlogOpen;
        },

        toBlogByCategory(title) {
            // console.log('here')
            this.$router.push({ name: 'blogbycategory', params:{id: title}})
        },

        openCourseCategory() {
            this.isOpen = !this.isOpen;
        },

        openSubCategory: function (subCategory, id) {
            this.subCategoryList = subCategory;
            this.parentCategoryId = id;
            this.isSubCategoryOpen = !this.isSubCategoryOpen;
        },
    }
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
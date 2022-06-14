<template>
    <div class="w-full flex flex-col">
        <div class="w-full" v-if="total>84">

            <!-- Pagination -->
            <div class="flex justify-center" v-if="(pageCount<4)">
                <ul class="flex">
                    <li class="prev-next-button">
                        <a @click="previousPage" class="flex items-center" :aria-disabled="true" aria-label="Previous">
                            <span class="pi pi-angle-left"></span>
                            <!-- <span>Previous</span> -->
                        </a>
                    </li>
                    <li class="first-pagination" :class="getActiveClass((i+1))" v-for="(e,i) in Math.ceil(5)" :key="i" >
                        <a class="cursor-pointer py-3 px-4" @click="pageUpdate(i+1)">{{ i + 1 }}</a>
                    </li>
                    <li class="first-pagination">
                        <a class="py-3 px-4" href="#">...</a>
                    </li>
                    <li class="first-pagination">
                        <a class="cursor-pointer py-3 px-4" @click="pageUpdate(Math.ceil(total / 12))">{{ Math.ceil(total / 12) }}</a>
                    </li>
                    <li class="prev-next-button">
                        <a @click.stop="nextPage" class="flex items-center" aria-label="Next">
                            <!-- <span>Next</span> -->
                            <span class="pi pi-angle-right"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex justify-center" v-else-if="pageCount>=Math.ceil(total / 12)-2 && pageCount<=Math.ceil(total / 12)">
                <ul class="flex">
                    <li class="prev-next-button">
                        <a @click="previousPage" :aria-disabled="true" aria-label="Previous">
                            <span class="pi pi-angle-left"></span>
                            <!-- <span>Previous</span> -->
                        </a>
                    </li>
                    <li class="first-pagination">
                        <a class="cursor-pointer py-3 px-4" @click="pageUpdate(1)">1</a>
                    </li>
                    <li class="first-pagination">
                        <a class="py-3 px-4" @click.stop="">...</a>
                    </li>
                    <li class="first-pagination" :class="getActiveClass((Math.ceil(total / 12)-4+i))" v-for="(e,i) in 5" :key="i">
                        <a class="cursor-pointer py-3 px-4" @click="pageUpdate(Math.ceil(total / 12)-4+i)">{{ Math.ceil(total / 12)-4+i }}</a>
                    </li>
                    <li class="prev-next-button">
                        <a @click.stop="nextPage" class="page-link" aria-label="Next">
                            <!-- <span>Next</span> -->
                            <span class="pi pi-angle-right"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex justify-center" v-else>
                <div class="flex">
                    <ul class="flex">
                        <li class="prev-next-button">
                            <a @click="previousPage" class="flex items-center" :aria-disabled="true" aria-label="Previous">
                                <span class="pi pi-angle-left"></span>
                                <!-- <span>Previous</span> -->
                            </a>
                        </li>
                        <li class="first-pagination">
                            <a class="cursor-pointer py-3 px-4" @click="pageUpdate(1)">1</a>
                        </li>
                        <li class="first-pagination">
                            <a class="cursor-pointer py-3 px-4" href="#">...</a>
                        </li>
                        <li class="first-pagination" :class="getActiveClass((pageCount-1))">
                            <a class="cursor-pointer py-3 px-4" @click="pageUpdate(pageCount-1)">{{pageCount-1}}</a>
                        </li>
                        <li class="first-pagination" :class="getActiveClass((pageCount))" >
                            <a class="cursor-pointer py-3 px-4" @click="pageUpdate(pageCount)">{{pageCount}}</a>
                        </li>
                        <li class="first-pagination" :class="getActiveClass((pageCount+1))">
                            <a class="cursor-pointer py-3 px-4" @click="pageUpdate(pageCount+1)">{{pageCount+1}}</a>
                        </li>
                        <li class="first-pagination">
                            <a class="cursor-pointer py-3 px-4" href="#">...</a>
                        </li>
                        <li class="first-pagination">
                            <a class="cursor-pointer py-3 px-4" @click="pageUpdate( Math.ceil(total / 12))">{{ Math.ceil(total / 12) }}</a>
                        </li>
                        <li class="prev-next-button">
                            <a @click.stop="nextPage" class="flex items-center" aria-label="Next">
                                <!-- <span>Next</span> -->
                                <span class="pi pi-angle-right"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex justify-center" v-else>
            <!-- Pagination -->
            <div class="flex">
                <ul class="flex">
                    <li class="prev-next-button">
                        <a @click="previousPage" class="flex items-center" :aria-disabled="true" aria-label="Previous">
                            <span class="pi pi-angle-left"></span>
                            <!-- <span>Previous</span> -->
                        </a>
                    </li>
                    <li class="first-pagination" :class="getActiveClass((i+1))" v-for="(e,i) in Math.ceil(total/12)" :key="i">
                        <a class="px-4" @click="pageUpdate(i+1)">{{ i + 1 }}</a>
                    </li>
                    <li class="prev-next-button">
                        <a @click.stop="nextPage" class="flex items-center" aria-label="Next">
                            <!-- <span>Next</span> -->
                            <span class="pi pi-angle-right"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["total"],
    data() {
        return {
            pageCount: 1,
        }
    },
    methods: {
        previousPage(){
            if(this.pageCount===1){
                this.pageCount=1
            }else{
                this.pageCount--;
                this.$emit('pageChange',this.pageCount)
            }
        },

        nextPage(){
            if(this.pageCount===Math.ceil(this.total/12)){
                this.pageCount=Math.ceil(this.total/12)
            }else{
                this.pageCount++;
                this.$emit('pageChange',this.pageCount)
            }
        },

        pageUpdate(page){
            this.pageCount=page
            this.$emit('pageChange',this.pageCount)
        },

        getActiveClass(page){
            if(page==this.pageCount){
                return "active-page"
            }
        }
    }
}
</script>

<style scoped>
.first-pagination {
    @apply flex items-center border-y border-gray-600 cursor-pointer hover:bg-gray-600 hover:text-white;
}

.prev-next-button {
    @apply p-3 border border-gray-600 cursor-pointer hover:bg-gray-600 hover:text-white;
}

.active-page {
    @apply bg-gray-600 text-white;
}
</style>
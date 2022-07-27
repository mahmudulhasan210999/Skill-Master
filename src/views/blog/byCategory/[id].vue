<template>
    <div class="w-full flex flex-col">
        <div class="flex">
            <div class="w-full">
                <BlogByCategory />
            </div>
        </div>
    </div>
</template>

<script>
import BlogByCategory from '../../../components/Blog/BlogByCategory.vue';

export default {
    components: {
        BlogByCategory
    },
}
</script>
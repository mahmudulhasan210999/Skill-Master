<template>
    <Top />
    <Category />
    <Courses />
    <!-- <GotCategory /> -->
    <RecentArticles />
    <FooterTop />
</template>

<script>
import Top from '../../components/Home/Top.vue';
import Category from '../../components/Home/Hot_Category.vue';
import Courses from '../../components/Home/Featured_Courses.vue';
import GotCategory from '../../components/Home/Got_Categories.vue';
import RecentArticles from '../../components/Home/Recent_Articles.vue';
import FooterTop from '../../components/Footer/Footer-top.vue';

export default {
    components: {
        Top,
        Category,
        Courses,
        GotCategory,
        RecentArticles,
        FooterTop
    }
}
</script>
import V1API from '../../../api-path/api-path';
import axios from 'axios';

const state = {
    blogs: [],
    blog_by_category: [],
    blog_count: '',
    getDetails: {},
    categories: [],
    recent_blogs: [],
    tags: [],
    count: ''
}

const getters = {}

const mutations = {
    SET_BLOGS (state, items) {
        state.blogs = items
    },

    SET_COUNT (state, item) {
        state.count = item
    },

    SET_RECENT_BLOGS(state, items) {
        state.recent_blogs = items
    },

    SET_DETAILS (state, items) {
        state.getDetails = items
    },

    SET_TAGS (state, items) {
        state.tags = items
    },

    SET_CATEGORIES (state, items) {
        state.categories = items
    },

    SET_BLOGS_By_CATEGORY(state, items) {
        state.blog_by_category = items
    },

    SET_COUNT_BY_CATEGORY(state, item) {
        state.blog_count = item
    },
}

const actions = {
    getBlogs ({ commit }, payload) {
        axios.get(V1API.get_blogs+payload).then(result => {
            let results = result.data.results
            let count = result.data.count
            // console.log(result.data)
            commit('SET_BLOGS', results)
            commit('SET_COUNT', count)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getBlogsByCategory ({ commit }, payload) {
        axios.get(V1API.blog_by_category+payload.slug+'?count=12'+payload.current).then(result => {
            let results = result.data.results
            let count = result.data.count
            // console.log(result.data)
            commit('SET_BLOGS_By_CATEGORY', results)
            commit('SET_COUNT_BY_CATEGORY', count)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getRecentBlogs ({ commit }) {
        axios.get(V1API.get_recent_blogs).then(result => {
            let results = result.data.data
            // console.log(result.data.data)
            commit('SET_RECENT_BLOGS', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getBlogDetails ({ commit }, payload) {
        axios.get(V1API.get_blog_details + payload).then(result => {
            let details = result.data.data
            let tags = result.data.data.tags
            // console.log(result.data.data.tags)
            commit('SET_DETAILS', details)
            commit('SET_TAGS', tags)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getCategories ({ commit }) {
        axios.get(V1API.get_categories).then(result => {
            let category = result.data.data
            // console.log(result.data.data)
            commit('SET_CATEGORIES', category)
        })
        .catch(error => {
            console.log(error)
        })       
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
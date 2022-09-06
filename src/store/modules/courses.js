import axios from 'axios';
import V1API from '../../../api-path/api-path';

const state = {
    courses: [],
    featured_courses: [],
    getDetail: {},
    courses_by_category: [],
    courses_by_sub_category: [],
    chapters: [],
    getLecture: {}
}

const getters = {} 

const mutations = {
    SET_COURSES(state, items) { 
        state.courses = items
    },

    SET_DETAIL(state, item) {
        state.getDetail = item
    },

    SET_FEATURED_COURSES(state, items) { 
        state.featured_courses = items
    },

    SET_COURSES_BY_CATEGORY(state, items) { 
        state.courses_by_category = items
    },

    SET_COURSES_BY_SUB_CATEGORY(state, items) { 
        state.courses_by_sub_category = items
    },

    SET_CHAPTERS (state, items) { 
        state.chapters = items
    },

    SET_LECTURE_VIDEO (state, item) { 
        state.getLecture = item
    },
}

const actions = {
    getCourses ({ commit }, payload) {
        axios.get(V1API.get_courses).then(result => {
            let results = result.data.data
            // console.log(result.data)
            commit('SET_COURSES', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getCoursesBySlug ({ commit }, payload) {
        axios.get(V1API.course_details + payload).then(result => {
            let results = result.data.data.course
            // console.log(result.data.data.course)
            commit('SET_DETAIL', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getChaptersBySlug ({ commit }, payload) {
        axios.get(V1API.course_details + payload).then(result => {
            let results = result.data.data.chapters
            // console.log(result.data.data.course)
            commit('SET_CHAPTERS', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getFeaturedCourses ({ commit }, payload) {
        axios.get(V1API.featured_courses).then(result => {
            let results = result.data.data
            // console.log(result.data.data)
            commit('SET_FEATURED_COURSES', results) 
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getCoursesByCategorySlug ({ commit }, payload) {
        axios.get(V1API.course_by_category + payload).then(result => {
            let results = result.data.data
            // console.log(result.data.data.course)
            commit('SET_COURSES_BY_CATEGORY', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getCoursesBySubCategorySlug ({ commit }, payload) {
        axios.get(V1API.course_by_sub_category + payload).then(result => {
            let results = result.data.data
            // console.log(result.data.data.course)
            commit('SET_COURSES_BY_SUB_CATEGORY', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },

    getLectureVideo ({ commit }, payload) {
        let config = { 
            headers:  { 'Authorization': 'Bearer '+ localStorage.getItem('access_token')}    
        }
        // console.log(payload)
        axios.get(V1API.get_lecture + payload, config).then(result => {
            let results = result.data.data.lecture_details
            // console.log(result.data.data.lecture_details)
            commit('SET_LECTURE_VIDEO', results)
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
    mutations,
    actions
}
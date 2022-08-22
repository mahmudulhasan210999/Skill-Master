import axios from 'axios';
import V1API from '../../../api-path/api-path';

const state = {
    instructor: {}
}

const getters = {}

const mutations = {
    SET_INSTRUCTOR(state, item) { 
        state.instructor = item
    },
}

const actions = {
    getInstructorByCourseId ({ commit }, payload) {
        axios.get(V1API.instructor_by_course_id + payload).then(result => {
            let results = result.data.data
            // console.log(result.data.data)
            commit('SET_INSTRUCTOR', results)
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
import V1API from '../../../api-path/api-path'
import axios from 'axios'

const state = {
  blogs: [],
  getDetails: {},
  categories: [],
  recent_blogs: [],
  tags: []
}

const getters = {

}

const actions = {
  getBlogs ({ commit }) {
    axios.get(V1API.get_blogs).then(result => {
      let results = result.data.results
        // console.log(result.data.results)
          commit('SET_BLOGS', results)
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

const mutations = {
  SET_BLOGS (state, items) {
      state.blogs = items
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
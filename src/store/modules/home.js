import axios from 'axios';
import V1API from '../../../api-path/api-path';
import image from '../../assets/images/Home/1.jpg';

const state = {
  tops: [
    {
      id: 1,
      img: image,
      title: 'The Complete Business Course',
      text: 'The Complete Business Course. The Complete Business Course',
    },
    {
      id: 2,
      img: image,
      title: 'The Complete Mobile Course',
      text: 'The Complete Business Course. The Complete Business Course',
    },
    {
      id: 3,
      img: image,
      title: 'The Complete Burger Course',
      text: 'The Complete Business Course. The Complete Business Course',
    },
  ],
  hot_categories: [],
  got_categories: [
    {
      id: 1,
      img: image,
      title: 'Software Development',
      videos: '23',
      lessos: '10'
    },
    {
      id: 2,
      img: image,
      title: 'Heaalth Business',
      videos: '23',
      lessos: '10'
    },
    {
      id: 3,
      img: image,
      title: 'Accounting',
      videos: '23',
      lessos: '10'
    },
    {
      id: 4,
      img: image,
      title: 'IT & Software',
      videos: '23',
      lessos: '10'
    },
    {
      id: 5,
      img: image,
      title: 'Art & Design',
      videos: '23',
      lessos: '10'
    },
  ],
}

const getters = {
}

const mutations = {
  SET_CATEGORIES(state, items) { 
    state.hot_categories = items
  }
}

const actions = {
  getCategories ({ commit }, payload) {
    axios.get(V1API.get_category).then(result => {
      let results = result.data.data
        // console.log(result.data.data)
          commit('SET_CATEGORIES', results)
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
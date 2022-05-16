import { createStore } from 'vuex'

import image from '../assets/images/Home/1.jpg'

const store = createStore({
  // State
  state: {
    categories: [
      {
        id: 1,
        img: image,
        title: 'Development',
        classes: '23'
      },
      {
        id: 2,
        img: image,
        title: 'Business',
        classes: '33'
      },
      {
        id: 3,
        img: image,
        title: 'Accounting',
        classes: '10'
      },
      {
        id: 4,
        img: image,
        title: 'IT & Software',
        classes: '20'
      },
      {
        id: 5,
        img: image,
        title: 'Art & Design',
        classes: '23'
      },
      {
        id: 6,
        img: image,
        title: 'Marketing',
        classes: '17'
      },
      {
        id: 7,
        img: image,
        title: 'Photography',
        classes: '06'
      },
      {
        id: 8,
        img: image,
        title: 'Health & Fitness',
        classes: '12'
      },
      {
        id: 9,
        img: image,
        title: 'Lifestyle',
        classes: '72'
      },
    ]
  },

  // Actions
  actions: {

  },

  // Mutaions
  mutaions: {

  },
})

export default store
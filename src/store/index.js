import { createStore } from 'vuex'

import image from '../assets/images/Home/1.jpg'
import category_img from '../assets/images/Category/category.jpg' 

const store = createStore({
  // State
  state: {
    categories: [
      {
        id: 1,
        img: category_img,
        title: 'Development',
        classes: '23'
      },
      {
        id: 2,
        img: category_img,
        title: 'Business',
        classes: '33'
      },
      {
        id: 3,
        img: category_img,
        title: 'Accounting',
        classes: '10'
      },
      {
        id: 4,
        img: category_img,
        title: 'IT & Software',
        classes: '20'
      },
      {
        id: 5,
        img: category_img,
        title: 'Art & Design',
        classes: '23'
      },
      {
        id: 6,
        img: category_img,
        title: 'Marketing',
        classes: '17'
      },
      {
        id: 7,
        img: category_img,
        title: 'Photography',
        classes: '06'
      },
      {
        id: 8,
        img: category_img,
        title: 'Health & Fitness',
        classes: '12'
      },
      {
        id: 9,
        img: category_img,
        title: 'Lifestyle',
        classes: '72'
      },
    ],

    featured_courses: [
      {
        id: 1,
        img: image,
        title: 'The Complete Business Course',
        views: '1200',
        duration: '1h 15min',
        reviews: '4.7',
        teacher_name: 'Robert',
        lectures: '15',
      },
      {
        id: 2,
        img: image,
        title: 'The Complete Stdy Course',
        views: '1300',
        duration: '1h 15min',
        reviews: '4.7',
        teacher_name: 'Robert',
        lectures: '15',
      },
      {
        id: 3,
        img: image,
        title: 'The Complete Bank Course',
        views: '1400',
        duration: '1h 15min',
        reviews: '4.7',
        teacher_name: 'Robert',
        lectures: '15',
      },
      {
        id: 4,
        img: image,
        title: 'The Complete Mobile Course',
        views: '1500',
        duration: '1h 15min',
        reviews: '4.7',
        teacher_name: 'Robert',
        lectures: '15',
      },
      {
        id: 5,
        img: image,
        title: 'The Complete Money Course',
        views: '1600',
        duration: '1h 15min',
        reviews: '4.7',
        teacher_name: 'Robert',
        lectures: '15',
      },
      {
        id: 6,
        img: image,
        title: 'The Complete Mouse Course',
        views: '1700',
        duration: '1h 15min',
        reviews: '4.7',
        teacher_name: 'Robert',
        lectures: '15',
      },
    ],

    articles: [
      {
        id: 1,
        img: image,
        title: 'The Complete Business Course',
        teacher: 'Robert',
      },
      {
        id: 2,
        img: image,
        title: 'The Complete Mobile Course',
        teacher: 'Maxx',
      },
      {
        id: 3,
        img: image,
        title: 'The Complete Burger Course',
        teacher: 'Robert',
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
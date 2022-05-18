import category_img from '../../assets/images/Category/category.jpg' 

const state = {
  hot_categories: [
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
  ]
}

const getters = {

}

export default {
  namespaced: true,
  state,
  getters
}
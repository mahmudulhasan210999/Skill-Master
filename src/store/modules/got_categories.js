import image from '../../assets/images/Home/1.jpg'

const state = {
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

export default {
  namespaced: true,
  state,
  getters
}
import image from '../../assets/images/Home/1.jpg'

const state = {
  articles: [
    {
      id: 1,
      img: image,
      title: 'The Complete Business Course',
      writer_img: image,
      writer: 'Robert',
    },
    {
      id: 2,
      img: image,
      title: 'The Complete Mobile Course',
      writer_img: image,
      writer: 'Maxx',
    },
    {
      id: 3,
      img: image,
      title: 'The Complete Burger Course',
      writer_img: image,
      writer: 'Robert',
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
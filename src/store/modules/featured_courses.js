import image from '../../assets/images/Home/1.jpg'

const state = {
  featured_courses: [
    {
      id: 1,
      img: image,
      title: 'The Complete Business Course',
      views: '1200',
      duration: '1h 15min',
      reviews: '4.7',
      teacher_img: image,
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
      teacher_img: image,
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
      teacher_img: image,
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
      teacher_img: image,
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
      teacher_img: image,
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
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: '15',
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
import image from '../../assets/images/Home/1.jpg'

const state = {
  featured_courses: [
    {
      id: 1,
      instructor_slug: 'muhammad_qasim',
      img: image,
      title: 'The Complete Business Course',
      slug: 'business_course',
      views: 1200,
      price: 193,
      duration: '1h 15min',
      reviews: 4.7,
      instructor_img: image,
      instructor: 'Muhammad Qasim',
      lectures: 15,
    },
    {
      id: 2,
      instructor_slug: 'abdul_kuddus',
      img: image,
      title: 'The Complete Study Course',
      slug: 'study_course',
      views: 1300,
      price: 76,
      duration: '1h 15min',
      reviews: 4.7,
      instructor_img: image,
      instructor: 'Abdul Kuddus',
      lectures: 15,
    },
    {
      id: 3,
      instructor_slug: 'abdus_salam',
      img: image,
      title: 'The Complete Bank Course',
      slug: 'bank_course',
      views: 1400,
      price: 112,
      duration: '1h 15min',
      reviews: 4.7,
      instructor_img: image,
      instructor: 'Abdus Salam',
      lectures: 15,
    },
    {
      id: 4,
      instructor_slug: 'sultan_fateh',
      img: image,
      title: 'The Complete Mobile Course',
      slug: 'mobile_course',
      views: 1500,
      price: 120,
      duration: '1h 15min',
      reviews: 4.7,
      instructor_img: image,
      instructor: 'Sultan Fateh',
      lectures: 15,
    },
    {
      id: 5,
      instructor_slug: 'hasanur_rahman',
      img: image,
      title: 'The Complete Money Course',
      slug: 'money_course',
      views: 1600,
      price: 230,
      duration: '1h 15min',
      reviews: 4.7,
      instructor_img: image,
      instructor: 'Hasanur Rahman',
      lectures: 15,
    },
    {
      id: 6,
      instructor_slug: 'robert_brown',
      img: image,
      title: 'The Complete Mouse Course',
      slug: 'mouse_course',
      views: 1700,
      price: 199,
      duration: '1h 15min',
      reviews: 4,
      instructor_img: image,
      instructor: 'Robert Brown',
      lectures: 15,
    },
  ],

  courses: [
    {
      id: 1,
      img: image,
      title: 'The Complete Business Course',
      slug: 'business_course',
      views: 1200,
      price: 193,
      duration: '1h 15min',
      reviews: 4.7,
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: 15,
    },
    {
      id: 2,
      img: image,
      title: 'The Complete Study Course',
      slug: 'study_course',
      views: 1300,
      price: 76,
      duration: '1h 15min',
      reviews: 4.7,
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: 15,
    },
    {
      id: 3,
      img: image,
      title: 'The Complete Bank Course',
      slug: 'bank_course',
      views: 1400,
      price: 112,
      duration: '1h 15min',
      reviews: 4.7,
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: 15,
    },
    {
      id: 4,
      img: image,
      title: 'The Complete Mobile Course',
      slug: 'mobile_course',
      views: 1500,
      price: 120,
      duration: '1h 15min',
      reviews: 4.7,
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: 15,
    },
    {
      id: 5,
      img: image,
      title: 'The Complete Money Course',
      slug: 'money_course',
      views: 1600,
      price: 230,
      duration: '1h 15min',
      reviews: 4.7,
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: 15,
    },
    {
      id: 6,
      img: image,
      title: 'The Complete Mouse Course',
      slug: 'mouse_course',
      views: 1700,
      price: 199,
      duration: '1h 15min',
      reviews: 4,
      teacher_img: image,
      teacher_name: 'Robert',
      lectures: 15,
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
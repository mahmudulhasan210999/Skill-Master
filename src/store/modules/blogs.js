import image from '../../assets/images/Home/1.jpg'
import V1API from '../../../api-path/api-path'
import axios from 'axios'

const state = {
  // blogs: [
  //   {
  //     id: 1,
  //     slug: 'the_complete_business_course',
  //     img: image,
  //     title: 'The Complete Business Course',
  //     date: "12 Jun 2022",
  //     writer_img: image,
  //     writer: 'Robert Doe',
  //     comments: 45,
  //     blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
  //   },
  //   {
  //     id: 2,
  //     slug: 'the_complete_mobile_course',
  //     img: image,
  //     title: 'The Complete Mobile Course',
  //     date: "12 Jun 2022",
  //     writer_img: image,
  //     writer: 'Burger King',
  //     comments: 40,
  //     blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
  //   },
  //   {
  //     id: 3,
  //     slug: 'the_complete_burger_course',
  //     img: image,
  //     date: "12 Jun 2022",
  //     title: 'The Complete Burger Course',
  //     writer_img: image,
  //     writer: 'Robert',
  //     blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
  //   },
  //   {
  //     id: 4,
  //     slug: 'the_complete_pc_course',
  //     img: image,
  //     title: 'The Complete Pc Course',
  //     date: "12 Jun 2022",
  //     writer_img: image,
  //     writer: 'Robert',
  //     blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
  //   },
  //   {
  //     id: 5,
  //     slug: 'the_complete_page_course',
  //     date: "12 Jun 2022",
  //     img: image,
  //     title: 'The Complete Page Course',
  //     writer_img: image,
  //     writer: 'Maxx',
  //     blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
  //   },
  //   {
  //     id: 6,
  //     slug: 'the_complete_king_course',
  //     img: image,
  //     title: 'The Complete King Course',
  //     date: "12 Jun 2022",
  //     writer_img: image,
  //     writer: 'Robert',
  //     blog: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
  //   },
  // ]
  blogs: [],
  getDetails: {}

}

const getters = {

}

const actions = {

  getBlogs ({ commit }) {
    // var config = {
    //   headers: { 
    //     'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MzY2NTMwLCJqdGkiOiIwZjMwNzhjNTcxNjA0NjZhYTQ2ZTkzZGE4ZDA1YTExYyIsInVzZXJfaWQiOjM0OX0.I3NBqyeaBSscMACMBY0KOsAwzIxVmLNrW0OYXmTqXbY'
    //   }
    // };
    axios.get(V1API.get_blogs).then(result => {
      let results = result.data.results
          // console.log(result.data.results)
            commit('SET_BLOGS', results)
         })
         .catch(error => {
            console.log(error)
         })       
},

getBlogDetails ({ commit }, payload) {
  // var config = {
  //   headers: { 
  //     'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4MzY2NTMwLCJqdGkiOiIwZjMwNzhjNTcxNjA0NjZhYTQ2ZTkzZGE4ZDA1YTExYyIsInVzZXJfaWQiOjM0OX0.I3NBqyeaBSscMACMBY0KOsAwzIxVmLNrW0OYXmTqXbY'
  //   }
  // };
  axios.get(V1API.get_blog_details + payload).then(result => {
    let details = result.data.data
        // console.log(result.data.data)
          commit('SET_DETAILS', details)
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

    SET_DETAILS (state, items) {
      state.getDetails = items
    },
  }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
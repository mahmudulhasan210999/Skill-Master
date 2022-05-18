import { createStore } from 'vuex'
import tops from './modules/tops'
import hot_categories from './modules/hot_categories'
import featured_courses from './modules/featured_courses'
import got_categories from './modules/got_categories'
import articles from './modules/articles'

import blogs from './modules/blogs'

// import { isPromise } from '@vue/shared'

const store = createStore({
  modules: {
    tops,
    hot_categories,
    featured_courses,
    got_categories,
    articles,

    blogs,
  },

  // State
  state: {
  },

  // Actions
  actions: {

  },

  // Mutaions
  mutaions: {

  },
})

export default store
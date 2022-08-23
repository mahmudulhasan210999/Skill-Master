import { createStore } from 'vuex'
import home from './modules/home';
import courses from './modules/courses';
import menu from './modules/menu';
import blogs from './modules/blogs';
import instructors from './modules/instructors';
import login from './modules/login'

// import { isPromise } from '@vue/shared'

const store = createStore({
    modules: {
        home,
        courses,
        menu,
        blogs,
        instructors,
        login
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
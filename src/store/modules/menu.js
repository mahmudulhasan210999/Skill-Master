const state = {
    menu: [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Courses",
            path: "/courses"
        },
        {
            id: 3,
            title: "Blogs",
            path: "/blogs"
        },
        {
            id: 4,
            title: "Contact",
            path: "/contact"
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
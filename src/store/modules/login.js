import axios from 'axios';
import V1API from '../../../api-path/api-path';
import router from "../../router/index";

const state = {
    isLoggedIn: false
}

const getters = {
}

const mutations = {
    SET_ACCESS_TOKEN (state, token){
        localStorage.setItem('access_token', token)
    },

    SET_REFRESH_TOKEN (state, token) {
        localStorage.setItem('refresh_token', token)
    },

    SET_LOGIN_STATUS(state, status) {
        state.isLoggedIn = status;
    },
}

const actions = {
    getLoginStatus({commit}) {
        let loginStatus = localStorage.getItem('access_token')==undefined? false : true;
        localStorage.setItem('loggedIn', loginStatus)
        commit('SET_LOGIN_STATUS', loginStatus)
    },

    getLogin({ commit, dispatch }, payload) {
        var config = {
        //   headers: { 
        //     'Authorization': V1API.authorization 
        //   }
        };
        let response = axios.post(V1API.user_login, payload).then(result => {
            if(result.data.code !== 401 && result.data.code == 200) {
                let access_token = result.data.access_token
                let refresh_token = result.data.refresh_token
                // console.log(result)
                commit('SET_ACCESS_TOKEN', access_token)
                commit('SET_REFRESH_TOKEN', refresh_token) 
                dispatch('getLoginStatus')
                router.push('/')
            }
            else {
                return result
            }
        })
        .catch(error => {
            console.log(error)
        }) 
        return response      
    },

    async getRegister({ commit, dispatch }, payload) {
        //   console.log(payload)
        let response = await axios.post(V1API.get_register, {
            email: payload.email,
            username: payload.username,
            first_name: payload.first_name,
            last_name: payload.last_name,
            password: payload.password,
            password2: payload.password2, 
        }).then(result => {
            return result
        })
        return response
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
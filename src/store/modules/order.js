import axios from 'axios';
import V1API from '../../../api-path/api-path';

const state = {
    message: {}
}

const getters = {
}

const mutations = {
    SET_MESSAGE(state, item) {
        state.message = item;
    },
}

const actions = { 
    placeOrder({ commit }, payload) {
        let config = { 
            headers:  { 'Authorization': 'Bearer '+ localStorage.getItem('access_token')}    
        }
        // console.log(config.headers);
        let request_payload={
            course: payload.course,
            price: payload.price,
            offer_status: payload.offer_status,
            order_status: "Initiated",
            payment_status: "Initiated",
            trx_id: "Initiated"   
        }
        // console.log(request_payload)
        axios.post(V1API.place_order, request_payload, config).then( result => {
            let order_items = result.data
            // console.log(order_items)
            commit('SET_MESSAGE', order_items)
        })
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: '',
    token: ''
  },
  mutations: {
    getRole (state, value) {
      state.role = value
    },
    getToken (state, value){
      state.token = value
    }
  },
  actions: {

  }
})

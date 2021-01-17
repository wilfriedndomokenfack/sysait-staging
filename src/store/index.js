import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const initialState = () => {
  const startState = {
    currentUser: null,
    company: null,
    products: null,
  }

  return startState
}

export default new Store({
  namespaced: true,
  strict: true,
  state: initialState(),

  mutations: {
    setCurrentUser (state, payload) {
      state.currentUser = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCompany (state, payload) {
      state.company = payload
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    company: state => state.company,
    products: state => state.products,

    currentRoute: state => (state.route ? state.route.name : null),
    previousRoute: state => (state.route ? state.route.from.name : null)
  },
  actions: {
    setCurrentUser ({ commit }, payload) {
      commit('setCurrentUser', payload)
    },
    setCompany ({ commit }, payload) {
      commit('setCompany', payload)
    },
    setProducts ({ commit }, payload) {
      commit('setProducts', payload)
    }
  }
})

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const initialState = () => {
  const startState = {
    currentUser: null
  }

  return startState
}

export default new Store({
  namespaced: true,
  strict: true,
  state: initialState(),

  mutations: {
    setCurrentUser (state, data) {
      state.breadcrumbsData.push(data)
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    currentRoute: state => (state.route ? state.route.name : null),
    previousRoute: state => (state.route ? state.route.from.name : null)
  },
  actions: {
    setCurrentUser ({ commit }, payload) {
      commit('setCurrentUser', payload)
    }
  }
})

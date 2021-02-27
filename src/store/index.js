

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

import wilfried from './wilfried/index'
import rosine from './rosine/index'

const initialState = () => {
  const startState = {

    currentUser: null,

    customers: [
      {
      denomination: 'Institut paul momo',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'imp',
      link: 'http://www.unife.it/it'
      },
      {
      denomination: 'bk service',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'bk',
      link: 'http://www.unife.it/it'
      }
    ],
    sponsors: [
      {
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },
      {
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },{
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },{
      denomination: 'Università di Ferrara',
      description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
      image_path: 'unife',
      link: 'http://www.unife.it/it'
      },
    ],

    products: null,

  }

  return startState
}

export default new Store({
  namespaced: true,
  strict: true,
  state: initialState(),
  modules: {
    wilfried,
    rosine,
  },

  mutations: {

    setLang(state){
      state.lang = !state.lang
    },

    setCurrentUser (state, payload) {
      state.currentUser = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },

  },
  getters: {
    company: state => state.wilfried.company,
    tecnologies: state => state.wilfried.tecnologies,
    humanComponents: state => state.rosine.humanComponents,

    sponsors: state => state.sponsors,
    customers: state => state.customers,
    currentUser: state => state.currentUser,
    products: state => state.products,

    langCange: state => state.lang,
    currentRoute: state => (state.route ? state.route.name : null),
    previousRoute: state => (state.route ? state.route.from.name : null)
  },
  actions: {


    setLang({commit}){
      commit('setLang')
    },
    setCurrentUser ({ commit }, payload) {
      commit('setCurrentUser', payload)
    },

    setProducts ({ commit }, payload) {
      commit('setProducts', payload)
    }
  }
})

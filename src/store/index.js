
import { userKicker } from "@/models/auth/userKicker";
import {loadSession, saveJwtToken, userCredentialsLocalStore } from "@/models/utils/sessionHandler.js"
import jwt_decode from "jwt-decode";


import { router } from "@/router";
import { notify } from "@/models/utils/notifyUser"

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

import wilfried from './wilfried/index'
import rosine from './rosine/index'
import michael from './michael/index'

const initialState = () => {
  const startState = {
    userCredentials: null,
    currentUser: null,
    token: null,
    lang: null,
    ...loadSession()
  }

  if (startState.token) {
    startState.currentUser = jwt_decode(startState.token);
    userKicker(startState.currentUser.exp);
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
    michael,
  },

  mutations: {

    setLang(state){
      state.lang = !state.lang
    },


    setUserCourses(state, payload){
      state.currentUser = {...state.currentUser, coursesIds: payload}
    },

    setCurrentUser (state, payload) {
      const token = payload?.token
      const rememberMe = payload?.rememberMe

      if(token){
        const user = jwt_decode(token);
        state.currentUser = user
        userKicker(user.exp);
        saveJwtToken(token)

        if(rememberMe) userCredentialsLocalStore(state.userCredentials)

        const goTo = state.route.from.name == "signup" ? "home" : state.route.from.name

        router.push({ name: goTo });
        notify('green', 'Login with success!')
      }else{
        state.currentUser = null
        state.token = null
      }
    },
    setUserCredential(state, payload){
      state.userCredentials = payload
    }
  },
  getters: {
    company: state => state.wilfried.company,
    tecnologies: state => state.wilfried.tecnologies,
    humanComponents: state => state.rosine.humanComponents,

    currentUser: state => state.currentUser,
    token: state => state.token,
    userCredentials: state => state.userCredentials,

    langChanged: state => state.lang,
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
    setUserCourses ({ commit}, payload) {
      commit('setUserCourses', payload)
    },
    setUserCredential({ commit }, payload){
      commit('setUserCredential', payload)
    }
  }
})

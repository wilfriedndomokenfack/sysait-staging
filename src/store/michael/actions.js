const setServices = ({ commit }, payload) => { // Action
    commit('setServices', payload) // mutation
  }

  const setProducts = ({ commit }, payload) => { // Action
    commit('setProducts', payload) // mutation
  }


export default {
    setServices, // export action
    setProducts
};

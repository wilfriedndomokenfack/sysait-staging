const setServices = ({ commit }, payload) => { // Action
    commit('setServices', payload) // mutation
  }

  const setProducts = ({ commit }, payload) => { // Action
    commit('setProducts', payload) // mutation
  }

  const setProductsPageDescription = ({ commit }, payload) => { // Action
    commit('setProductsPageDescription', payload) // mutation
  }


export default {
    setServices, // export action
    setProducts,
    setProductsPageDescription
};

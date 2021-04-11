const setServices = (state, payload) => { // mutation
    state.services = payload // update state 
}

const setProducts = (state, payload) => { // mutation
    state.products = payload // update state 
}

const setProductsPageDescription = (state, payload) => {
    state.productsPageDescription = payload
}

// Export mutation
export default {
    setServices,
    setProducts,
    setProductsPageDescription
};

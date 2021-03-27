const setServices = (state, payload) => { // mutation
    state.services = payload // update state 
}

const setProducts = (state, payload) => { // mutation
    state.products = payload // update state 
}

// Export mutation
export default {
    setServices,
    setProducts 
};

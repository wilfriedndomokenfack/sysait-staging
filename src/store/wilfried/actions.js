
const setCompany = ({ commit }, payload) => {
  commit('setCompany', payload)
}
const setTecnologies = ({ commit }, payload) => {
  commit('setTecnologies', payload)
}
const setPartners = ({ commit }, payload) => {
  commit('setPartners', payload)
}

const addTraining = ({ commit }, payload) => {
  commit('addTraining', payload)
}

export default {
  setCompany,
  setTecnologies,
  setPartners,
  addTraining
};

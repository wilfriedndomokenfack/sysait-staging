
const setCompany = ({ commit }, payload) => {
  commit('setCompany', payload)
}
const setTecnologies = ({ commit }, payload) => {
  commit('setTecnologies', payload)
}
const setPartners = ({ commit }, payload) => {
  commit('setPartners', payload)
}

const setTrainings = ({ commit }, payload) => {
  commit('setTrainings', payload)
}

const addTraining = ({ commit }, payload) => {
  commit('addTraining', payload)
}

const removeTraining = ({ commit }, payload) => {
  commit('removeTraining', payload)
}

const updateTraining = ({ commit }, payload) => {
  commit('updateTraining', payload)
}

const setTrainingPageDescription = ({ commit }, payload) => {
  commit('setTrainingPageDescription', payload)
}

export default {
  setCompany,
  setTecnologies,
  setPartners,
  setTrainings,
  addTraining,
  removeTraining,
  updateTraining,
  setTrainingPageDescription
};

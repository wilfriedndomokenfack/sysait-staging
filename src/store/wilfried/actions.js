
const setCompany = ({ commit }, payload) => {
  commit('setCompany', payload)
}
const setTecnologies = ({ commit }, payload) => {
  commit('setTecnologies', payload)
}
const setPartners = ({ commit }, payload) => {
  commit('setPartners', payload)
}

// TRAININGS
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

// JOBS
const setJobs = ({ commit }, payload) => {
  commit('setJobs', payload)
}
const addJob = ({ commit }, payload) => {
  commit('addJob', payload)
}
const removeJob = ({ commit }, payload) => {
  

  commit('removeJob', payload)
}
const updateJob = ({ commit }, payload) => {
  commit('updateJob', payload)
}




const setUsers = ({ commit }, payload) => {
  commit('setUsers', payload)
}

const setRoles = ({ commit }, payload) => {
  commit('setRoles', payload)
}

const setTrainingPageDescription = ({ commit }, payload) => {
  commit('setTrainingPageDescription', payload)
}

const setJobsPageDescription = ({ commit }, payload) => {
  commit('setJobsPageDescription', payload)
}

export default {
  setRoles,
  setUsers,
  setCompany,
  setTecnologies,
  setPartners,

  setTrainings,
  addTraining,
  removeTraining,
  updateTraining,

  setJobs,
  addJob,
  removeJob,
  updateJob,

  setTrainingPageDescription,
  setJobsPageDescription
};

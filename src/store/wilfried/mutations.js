// On every mutation file, import functions to store your data
import { companyLocalStore, tecnologiesLocalStore, partnersLocalStore  } from "@/models/utils/sessionHandler.js"

const setCompany = (state, payload) => {
  state.company = payload

  // this line store company on local storage
  companyLocalStore(state.company)
}

const setTecnologies = (state, payload) => {
  state.tecnologies = payload
  tecnologiesLocalStore(state.tecnologies)
}

const setPartners = (state, payload) => {
  state.partners = payload
  partnersLocalStore(state.partners)
}


// TRAININGS
const setTrainings = (state, payload) => {
  state.trainings = payload
}
const addTraining = (state, payload) => {
  state.trainings = [payload, ...state.trainings]
}
const removeTraining = (state, payload) => {
  const index = state.trainings.indexOf(payload)
  state.trainings.splice(index, 1);
}
const updateTraining = (state, payload) => {
  let trainings = state.trainings?.filter(v => v.id !== payload.id)
  state.trainings = [payload, ...trainings]
}

// JOBS
const setJobs = (state, payload) => {
  state.jobs = payload
}
const addJob = (state, payload) => {
  state.jobs = [payload, ...state.jobs]
}
const removeJob = (state, payload) => {
  const index = state.jobs.indexOf(payload)
  state.jobs.splice(index, 1);
}
const updateJob = (state, payload) => {
  let jobs = state.jobs?.filter(v => v.id !== payload.id)
  state.jobs = [payload, ...jobs]
}



const setUsers = (state, payload) => {
  state.users = payload
}

const setRoles = (state, payload) => {
  state.roles = payload
}

const setTrainingPageDescription = (state, payload) => {
  state.trainingPageDescription =  payload
}

const setJobsPageDescription = (state, payload) => {
  state.jobsPageDescription =  payload
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

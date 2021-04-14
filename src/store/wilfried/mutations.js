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


const setTrainingPageDescription = (state, payload) => {
  state.trainingPageDescription =  payload
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

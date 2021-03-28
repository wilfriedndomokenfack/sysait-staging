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

export default {
  setCompany,
  setTecnologies,
  setPartners
};

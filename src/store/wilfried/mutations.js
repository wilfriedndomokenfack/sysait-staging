import { companyLocalStore, tecnologiesLocalStore, partnersLocalStore  } from "@/models/utils/sassionHandler.js"

const setCompany = (state, payload) => {
  state.company = payload
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

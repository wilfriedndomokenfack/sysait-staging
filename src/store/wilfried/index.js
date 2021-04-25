// import your loadSession in index file on your module
import { loadWilfriedSession  } from "@/models/utils/sessionHandler.js"

import actions from "./actions.js";
import mutations from "./mutations";

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    roles: [],
    users: [],
    company: null,
    tecnologies: null,
    partners: null,
    trainings: null,
    trainingPageDescription: null,
    jobsPageDescription: null,
    ...loadWilfriedSession()
  },

  getters: {
    users: state => state.users,
    roles: state => state.roles,
    company: state => state.company,
    tecnologies: state => state.tecnologies,
    partners: state => state.partners,
    trainings: state => state.trainings,
    trainingPageDescription: state => state.trainingPageDescription,
    jobsPageDescription: state => state.jobsPageDescription
  },
};

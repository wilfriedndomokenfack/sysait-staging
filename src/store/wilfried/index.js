// import your loadSession in index file on your module
import { loadWilfriedSession  } from "@/models/utils/sessionHandler.js"

import actions from "./actions.js";
import mutations from "./mutations";


const jobs = [{
  id: 12,
  denomination: "Rails developper",
  description: "description mmy text of the printing and typesetting industry. Lorem Ipsum has been tmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ahe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
  targetCustomer: "targetCustomer mmy text of the prine industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a", // string to
  profile: "profile mmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a", // string
  targetCustomerDescription: "targetCustomerDescription text of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever s", // text
  requirements: "requirements requirementsrequirementsrequirementsy. Lorem Ipsum has been the industry's standard dummy texy. Lorem Ipsum has been the industry's standard dummy texy. Lorem Ipsum has been the industry's standard dummy tex", // text
  offer: "offer stry's standard dummy text ever sistry's standard dummy text ever si",
  note: "note  of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I",
  status: '1',
  job_cod: "439768",
  published_at: "12 janvier 2021"
}, {
  id: 13,
  denomination: "Rails developper",
  description: "description mmy text of the printing and typesetting industry. Lorem Ipsum has been tmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ahe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a",
  targetCustomer: "targetCustomer mmy text of the prine industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a", // string to
  profile: "profile mmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a", // string
  targetCustomerDescription: "targetCustomerDescription text of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever stext of the prine industry's standard dummy text ever s", // text
  requirements: "requirements requirementsrequirementsrequirementsy. Lorem Ipsum has been the industry's standard dummy texy. Lorem Ipsum has been the industry's standard dummy texy. Lorem Ipsum has been the industry's standard dummy tex", // text
  offer: "offer stry's standard dummy text ever sistry's standard dummy text ever si",
  note: "note  of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I of the printing and typesetting industry. Lorem I",
  status: '1',
  job_cod: "091565",
  published_at: "14 janvier 2021"
}]
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
    jobs: jobs,
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
    jobs: state => state.jobs,
    trainingPageDescription: state => state.trainingPageDescription,
    jobsPageDescription: state => state.jobsPageDescription
  },
};

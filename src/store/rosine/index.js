
import actions from "./actions.js";
import mutations from "./mutations";

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    humanComponents: null,
  },

  getters: {
    humanComponents: state => state.humanComponents,
  },
};


import actions from "./actions.js";
import mutations from "./mutations";

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    humanComponents: null,
    messages: [],
  },

  getters: {
    humanComponents: state => state.humanComponents,
    messages: state => state.messages,
  },
};


const setHumanComponents = ({ commit }, payload) => {
  commit('setHumanComponents', payload)
}

//Messages
const setMessages = ({ commit }, payload) => {
  commit('setMessages', payload)
}

const deleteMessage = ({ commit }, payload) => {
  commit('deleteMessage', payload)
}
export default {
  setHumanComponents,
  setMessages,

  deleteMessage,
};





const setHumanComponents = (state, payload) => {
  state.humanComponents = payload
}

const setMessages = (state, payload) => {
  state.messages = payload
}
const deleteMessage = (state, payload) => {
  const index = state.messages.indexOf(payload)
  state.messages.splice(index, 1);
}

export default {
  setHumanComponents,
  setMessages,

  deleteMessage,
};

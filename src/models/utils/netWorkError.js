import { Notify } from 'quasar'

export const netWorkError = (message) =>
  Notify.create({
    message: message,
    color: "red",
    position: "center",
    multiLine: true,
    avatar: "logosysait/logosysaitfavico.jpg"
  })
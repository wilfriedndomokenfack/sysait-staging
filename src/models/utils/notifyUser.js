import { Notify } from 'quasar'

export const notify = (color, message) =>
  Notify.create({
    message: message,
    color: `${color}-4`,
    textColor: 'white',
    icon: 'cloud_done'
  })




import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default async ( { Vue } ) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  // library.add(faUserSecret)
  // library.add(faPowerOff)
}





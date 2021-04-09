import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"

export const isSuperUser = () => {
  return store.getters.currentUser
}

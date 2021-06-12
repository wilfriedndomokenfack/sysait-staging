
import store from '@/store'

import { notify } from "@/models/utils/notifyUser"
import { getToken, postRegistration} from "@/models/user.js"
import { deleteCookie } from "@/models/utils/setupCookies.js";

export const login = async (user) => {
  try {
    const response = await getToken(user)
    return response.data
  } catch (error) {
    console.log("error - " + error)
  }
}

export const signup = async (user) => {
  try {
    const response = await postRegistration(user)
    return response.data
  } catch (error) {
    return  "error - " + error;
  }
}

export const logout = () => {
  store.dispatch("setCurrentUser", null);
  deleteCookie('sy-jwt')
  notify('green', 'Logout with success!')

  if(store.getters.currentRoute == "admin") store.$router.push({name: 'home'})

};

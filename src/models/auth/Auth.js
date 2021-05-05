
import store from '@/store'

import { notify } from "@/models/utils/notifyUser"
import { getToken, postRegistration} from "@/models/user.js"
import { deleteCookie } from "@/models/utils/setupCookies.js";

export const login = async (user) => {
  try {
    const response = await getToken(user)
    const token = response.data
    store.dispatch("setCurrentUser", token);

  } catch (error) {
    console.log("error - " + error)
  }
}

export const signup = async (user) => {
  let message = null;
  try {
    const response = await postRegistration(user)
    //const token = response.data
    //store.dispatch("setCurrentUser", token);
     message = response.data?.message
  } catch (error) {
    message = "error - " + error;
  } finally {
    return message;
  };
}

export const logout = () => {
  store.dispatch("setCurrentUser", null);
  deleteCookie('sy-jwt')
  notify('green', 'Logout with success!')
  
  if(store.getters.currentRoute == "admin") store.$router.push({name: 'home'})

};

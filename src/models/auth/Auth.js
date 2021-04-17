
import store from '@/store'
import { notify } from "@/models/utils/notifyUser"
import { getToken} from "@/models/user.js"
import { deleteCookie } from "@/models/utils/setupCookies.js";

export const login = async (user) => {
  try {
    const response = await getToken(user)
    const token = response.data
    store.dispatch("setCurrentUser", token);

  } catch (error) {
    console.log("eror - " + error)
  }
}

export const logout = () => {
  store.dispatch("setCurrentUser", null);
  deleteCookie('sy-jwt')
  notify('green', 'Logout with success!')
};

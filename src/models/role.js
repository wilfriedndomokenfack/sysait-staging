import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"
import { router } from "@/router";
import jwt_decode from "jwt-decode";
import moment from "moment";

export const getRoles = async () => {
  try {
    let response = await Api().get(`/users/get_all_roles`)
    store.dispatch("wilfried/setRoles", response.data);
  } catch (error) {
    console.log("error: " + error)
  }
}

export const addRole = async (roleDatas) => {
  try {
    let response = await Api().post(`/users/${roleDatas.id}/add_role`, roleDatas )
    getRoles();
  } catch (error) {
    console.log("error: " + error)
  }
}
export const removeRole = async (roleDatas) => {
  try {
    let response = await Api().post(`/users/${roleDatas.user_id}/remove_role`, roleDatas )
  } catch (error) {
    console.log("error: " + error)
  }

}

import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"
import { router } from "@/router";
import jwt_decode from "jwt-decode";
import moment from "moment";

export const getUsers = async () => {
  try {
    let response = await Api().get("/users" )
    store.dispatch("wilfried/setUsers", response.data);
  } catch (error) {
    console.log("error: " + error)
  }

}

export const getToken = (userData) => {
  return Api().post("/users/sign_in", userData )
}

export const getUserCourses = (id) => {
  try{
   // const response = Api().post("/users/", id )
    const coursesIds = [30, 47, 50, 51]//response?.data
    store.dispatch("setUserCourses", coursesIds);

  }catch(err){
    console.log("error: " + err)
  }

}
export const isSuperUser = async () => {
    try{
      let index = -1
      if(store.getters.currentUser){
        const id = store.getters.currentUser.id
        let response = await Api().get(`/users/${id}/get_user_roles` )
        index = response.data.indexOf('admin')
      }

      //console.log(response.data)
      console.log(index)
      return index > -1 ? true : false
    }catch(error){
      console.log("error: " + error)
    }
  //return store.getters.currentUser
}

export const isEnrollToTraining = (training_id) => {
  let response = -1
  if(store.getters.currentUser?.coursesIds){
    response = store.getters.currentUser?.coursesIds.indexOf(training_id)
  }
  return response == -1 ? false : true
}

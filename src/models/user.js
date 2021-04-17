import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"
import { router } from "@/router";
import jwt_decode from "jwt-decode";
import moment from "moment";

export const getToken = (userData) => {
  return Api().post("/users/sign_in", userData )
}

// export const resetUser = token => {

//   const currentUser = jwt_decode(token);
//   store?.dispatch("setCurrentUser", {
//     currentUser,
//     token
//   });

//   // const now = moment();
//   // const exp = moment.unix(currentUser.exp);
//   // const timeout = moment.duration(exp.diff(now)).asMilliseconds()




//   // let bb = moment().milliseconds(currentUser.exp)//moment.unix(currentUser.exp).format()

//   // console.log(currentUser.exp,bb)
//   //debugger
//   const goTo = store?.getters.previousRoute ?? 'home'
//   router.push({ name: goTo });
//   notify('green', 'Login with success!')
// }

export const getUserCourses = (id) => {
  Api().post("/users/", id )
}

export const isSuperUser = () => {
  return store.getters.currentUser
}

export const isEnrollToTraining = (training_id) => {
  return store.getters.currentUser
}

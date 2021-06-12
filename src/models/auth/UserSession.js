// import jwtDecode from "jwt-decode";
// //import { EventBus } from "@/models/EventBus";
// import store from "@/store";
// import { router } from "@/router";
// import { userKicker } from "@/models/auth/userKicker";
// import { logout } from "@/models/auth//Auth";
// import { saveSession, saveJwtToken } from "@/models/auth//SessionHandler";
// //import { currentModule } from "../utils/Platform";

// export const attemptToLogin = () => {
//   const canNavigate = userIsAbleToNavigate();

//   if (!canNavigate) {
//     logout();
//   }else{
//     saveSession();
//     userKicker(store.getters.currentUser);

//     let newRoute = { name: "root" };
//     let deepLink = store.getters.redirectTo;

//     if (
//       deepLink &&
//       router.matcher.match(deepLink).name != "root" &&
//       deepLink.name != "login"
//     ) {
//       newRoute = { path: deepLink.path };
//     }

//     if (
//       newRoute.name != store.$router.currentRoute?.name &&
//       (router.currentRoute.path != deepLink?.path || deepLink?.name == "login")
//     ) {
//       router.push(newRoute);
//     }
//   }

// };

// export const userIsAbleToNavigate = () => {
//   return ( store.getters.currentUser &&
//            store.getters.businessUnits &&
//            store.getters.token
//           ) ? true : false
// };

// export const updateSessionFromJwt = token => {
//   const user = jwtDecode(token);
//   saveJwtToken(token);
//   user.password = store.getters.currentUser.password;
//   store.dispatch("setUser", {
//     user,
//     token
//   });
// };

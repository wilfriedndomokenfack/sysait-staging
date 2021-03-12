
import store from '@/store'
 import { router } from "@/router";
 import { notify } from "@/Models/Utils/notifyUser"




// export const login = ({ user, password }) => {
//    Loading.show({ message: "Pleace Wait ..." })

//   const tokenData = getTokendata( {user, password } );


//   return api
//     .post("/token/password", tokenData)
//     .then(({ data }) => {
//       me(data.access_token).then(({ data: myUser }) => {
//         let user = jwtDecode(data.access_token);
//         user.password = password;
//         const user_businessUnits = myUser.business_units;
//         let full_business_units = splitBusinessUnits(
//           null,
//           user_businessUnits,
//           []
//         );
//         store.dispatch("setUser", {
//           user,
//           token: data.access_token
//         });

//         store.dispatch("setBusinessUnits", full_business_units);

//         if (full_business_units.length === 1) {
//           store.dispatch("setBu", full_business_units[0]);
//         }
//         attemptToLogin();
//       });
//       Loading.hide()
//       notify('green', 'Login avvenuto con sucesso!')
//     })
//     .catch(err => {
//       Loading.hide()
//       notify('red', 'Ops! incorrect Account or Password')
//     });
// };

// const postLogout = () => {
//   store.dispatch("logout");
//   if (store.$router.currentRoute.name != "login") {
//     router.push({ name: "login" });
//   }
// };
export const login = (user) => {
  console.log(user)
  store.dispatch("setCurrentUser", user);
  router.push({ path: "/" });
  notify('green', 'Login avvenuto con sucesso!')
}
export const logout = () => {
  router.push({ path: "/" });
  store.dispatch("setCurrentUser", null);
  notify('green', 'Login avvenuto con sucesso!')
};

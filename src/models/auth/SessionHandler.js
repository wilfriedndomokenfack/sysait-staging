// import store from "@/store";
// import { isWeb } from "@/Models/Utils/Platform";
// import { setCookie, getCookie, clearCookies } from "@/Models/Utils/CookieUtils";
// //import { businessUnits as businessUnitsIndex } from "../BusinessUnit";
// import { attemptToLogin } from "@/Models/auth/UserSession"
// import {
//   setLocalStorageValue,
//   getLocalStorageValue,
//   clearLocalStorage
// } from "@/Models/Utils/LocalStorageUtils";
// import { router } from "@/router";

// const setValue = isWeb ? setCookie : setLocalStorageValue;
// const getValue = isWeb ? getCookie : getLocalStorageValue;

// export const setBuId = buId => setValue("buId", buId);
// export const setBu = bu => setLocalStorageValue("bu", bu);
// export const setDiaries = dr => setLocalStorageValue("dr", dr);
// export const setMeetings = mt => setLocalStorageValue("mt", mt);
// export const setBuJobs = jobs => setLocalStorageValue("jobs", jobs);
// export const setBuUsers = buUsers => setLocalStorageValue("buUsers", buUsers);
// export const setCurrentRecordID = CRID => setLocalStorageValue("crid", CRID);
// //export const getBu => getLocalStorageValue("bu");

// export const isSingleSignOnValid = () => {
//   return (getValue("jwt") || "").length;
// };

// export const saveJwtToken = token => {
//   setValue("jwt", token, { rootDomain: true });
// };

// export const saveSession = () => {
//   // setValue('csrf', store.getters.csrf)
//   //setBu(store.getters.businessUnits);
//   setBu(store.getters.businessUnits);
//   setBuId(store.getters.selectedBuId);
//   setBuUsers(store.getters.businessUnitUsers)
//   saveJwtToken(store.getters.token);
//   setDiaries(store.getters.diaries);
//   setMeetings(store.getters.meetings);
//   setBuJobs(store.getters.businessUnitJobs);
//   setCurrentRecordID(store.getters.currentRecordID);

//   //alert("token in save sassion: " + store.getters.token);
// };

// export const loadSession = () => {
//   return {
//     selBuId: getValue("buId"),
//     businessUnitUsers: getLocalStorageValue("buUsers"),
//     token: getValue("jwt"),
//     businessUnits: getLocalStorageValue("bu"),
//     diaries: getLocalStorageValue("dr"),
//     meetings: getLocalStorageValue("mt"),
//     businessUnitJobs: getLocalStorageValue("jobs"),
//     currentRecordID: getLocalStorageValue("crid")
//   };
// };

// export const destroySession = () => {
//   if (isWeb) clearCookies();
//   clearLocalStorage();
// };

// export const checkLogin = () => {
//   if (!(
//     router.currentRoute.meta.requireAuth === false ||
//     store.getters.redirectTo.meta.requireAuth === false
//   )) {
//     attemptToLogin()
//   }
// }

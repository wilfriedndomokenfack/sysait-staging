// // Kicks out user upon session expiration
// import moment from "moment";
// import store from "@/store";
// import { router } from "@/router";

// const defaultSessionTimeout = 20 * 60 * 1000; // minutes -> milliseconds
// const loginPath = "/login";
// let kicker = null;

// const kickOutUser = () => {
//   store.dispatch("logout");
//   if (window.location.pathname != loginPath) router.push({ name: "login" });
// };

// export const userKicker = user => {
//   if (kicker) clearTimeout(kicker);
//   const now = moment();
//   const exp = moment.unix(user.exp || user.expires_at);
//   const timeout = user
//     ? moment.duration(exp.diff(now)).asMilliseconds()
//     : defaultSessionTimeout;
//   kicker = setTimeout(kickOutUser, timeout);
// };

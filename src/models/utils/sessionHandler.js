
import {
  setLocalStorageValue,
  getLocalStorageValue,
  clearLocalStorage
} from "@/models/utils/localStorage.js";
import { setCookie, getCookie, clearCookies } from "@/models/utils/setupCookies.js";

// For any state value on your store add one line here. NB: olways start the key-name with 'sy-' as sy-cmpy
export const companyLocalStore = company => setLocalStorageValue("sy-cmpy", company);
export const tecnologiesLocalStore = tecnologies => setLocalStorageValue("sy-techs", tecnologies);
export const partnersLocalStore = partners => setLocalStorageValue("sy-part", partners);
export const userCredentialsLocalStore = userCredentials => setLocalStorageValue("sy-cred", userCredentials);

export const saveJwtToken = token => setCookie("sy-jwt", token);

// for avery store module, we need one loadSession
export const loadWilfriedSession = () => {

  return {
    company: getLocalStorageValue("sy-cmpy"),
    tecnologies: getLocalStorageValue("sy-techs"),
    partners: getLocalStorageValue("sy-part"),

  };
};

export const loadSession = () => {
  return {
    token: getCookie("sy-jwt"),
    userCredentials: getLocalStorageValue("sy-cred")
  };
};

export const destroySession = () => {
  clearLocalStorage();
  clearCookies()
};

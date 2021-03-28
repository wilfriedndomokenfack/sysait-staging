
import {
  setLocalStorageValue,
  getLocalStorageValue,
  clearLocalStorage
} from "@/models/utils/localStorage.js";

// For any state value on your store add one line here. NB: olways start the key-name with 'sy-' as sy-cmpy
export const companyLocalStore = company => setLocalStorageValue("sy-cmpy", company);
export const tecnologiesLocalStore = tecnologies => setLocalStorageValue("sy-techs", tecnologies);
export const partnersLocalStore = partners => setLocalStorageValue("sy-part", partners);

// for avery store module, we need one loadSession
export const loadWilfriedSession = () => {
  return {
    company: getLocalStorageValue("sy-cmpy"),
    tecnologies: getLocalStorageValue("sy-techs"),
    partners: getLocalStorageValue("sy-part")
  };
};

// this is unique. don't care of this
export const destroySession = () => {
  clearLocalStorage();
};

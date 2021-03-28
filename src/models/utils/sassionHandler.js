
import {
  setLocalStorageValue,
  getLocalStorageValue,
  clearLocalStorage
} from "@/models/utils/localStorage.js";

export const companyLocalStore = company => setLocalStorageValue("sy-cmpy", company);
export const tecnologiesLocalStore = tecnologies => setLocalStorageValue("sy-techs", tecnologies);
export const partnersLocalStore = partners => setLocalStorageValue("sy-part", partners);


export const loadWilfriedSession = () => {
  return {
    company: getLocalStorageValue("sy-cmpy"),
    tecnologies: getLocalStorageValue("sy-techs"),
    partners: getLocalStorageValue("sy-part")
  };
};



export const destroySession = () => {
  clearLocalStorage();
};

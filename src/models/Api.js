import axios from "axios";
import { i18n } from '@/boot/i18n.js'
import Settings from "@/config/Settings";
//import { apiErrorHandler } from "@/models//utils/apiErrorHandler";
//import { heartBeater } from "@/models//utils/heartBeater";
const headers = {
    'Accept': 'application/json',
  };
const Api = function(queryLang) {

  if (!Settings['apiHost']) {
    throw "Could not find api host";
  }

  const local = i18n.locale
  const localLang = queryLang ?  queryLang : local.substring(0, 2)

  const url = `${Settings['apiHost']}${localLang}/api/v1`


  const api = axios.create({
    baseURL: url,
    headers
  });


  //api.interceptors.response.use(res => res, apiErrorHandler);
  //api.interceptors.response.use(heartBeater);

  return api;
};

export default Api;

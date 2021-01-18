import axios from "axios";
import Settings from "@/config/Settings";
//import { apiErrorHandler } from "@/Models//Utils/apiErrorHandler";
//import { heartBeater } from "@/Models//Utils/heartBeater";

const Api = function() {

  if (!Settings['apiHost']) {
    throw "Could not find api host";
  }

  const api = axios.create({
    baseURL: Settings['apiHost'],
  });

  //api.interceptors.response.use(res => res, apiErrorHandler);
  //api.interceptors.response.use(heartBeater);

  return api;
};

export default Api;

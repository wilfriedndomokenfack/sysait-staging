import axios from "axios";
import Settings from "@/config/Settings";
//import { apiErrorHandler } from "@/models//utils/apiErrorHandler";
//import { heartBeater } from "@/models//utils/heartBeater";
const headers = {
    'Accept': 'application/json',
  };
const Api = function() {

  if (!Settings['apiHost']) {
    throw "Could not find api host";
  }

  const api = axios.create({
    baseURL: Settings['apiHost'],
    headers
  });

  //api.interceptors.response.use(res => res, apiErrorHandler);
  //api.interceptors.response.use(heartBeater);

  return api;
};

export default Api;

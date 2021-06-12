import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"
import { router } from "@/router";
import jwt_decode from "jwt-decode";
import moment from "moment";

export const getMessages = async () => {
  try {
    let response = await Api().get("/contacts" )
    store.dispatch("rosine/setMessages", response.data);
  } catch (error) {
    console.log("error: " + error)
  }

}

export const deleteMessage = (id) =>
  
  Api().delete("/contacts/"+id); // DELETE MESSAGE





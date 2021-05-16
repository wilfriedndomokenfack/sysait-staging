import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"

export const sendcontactform = async (contact) => {
  let returnData = null
 
    let response = await Api().post(`/contacts`, contact ); // CREATE
    returnData = response?.data
    
    return returnData.message

}
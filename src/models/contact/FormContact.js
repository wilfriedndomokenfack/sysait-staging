import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"

export const sendcontactform = async (contact) => {
  let returnData = null
  let message = 'Message send with success'
  let color = 'green'
  try{
    let response = await Api().post(`/contacts`, contact ); // CREATE

    returnData = response?.data
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
  }finally{
    notify(color, message)
  }
  return returnData
}
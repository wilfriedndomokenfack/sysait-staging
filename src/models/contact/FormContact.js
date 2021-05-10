import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"

export const sendcontactform = async (contact) => {
  let returnData = null
  let message = null//'Message send with success'
  let color = null //'green'
  try{
    let response = await Api().post(`/contacts`, contact ); // CREATE

    returnData = response?.data
    
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
    notify(color, message)

  }/*finally{
    notify(color, message)
  }*/
  return "Message sent with succes, you will contact you very soon"

}
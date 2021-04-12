import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"

export const table_description = ( category ) =>
  Api().get("/table_descriptions", { params: { category: category } }); // INDEX

export const sendToTableDescriptions = async (tableDescription) => {

  let responseData = null
  let message = 'Table description saved con success'
  let color = 'green'
  try{
    let response = await saveTableDescription(tableDescription)
    responseData = response?.data

  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
  }finally{
    notify(color, message)
  }
  return responseData

}

export const saveTableDescription = async tableDescription => { // CREATE OR UPDATE
  let responce = null
  if(tableDescription.id){
    responce = await Api().patch(`/table_descriptions/${tableDescription.id}`, tableDescription ); // UPDATE
  }else{
    responce = await Api().post(`/table_descriptions?category="trainings"`, tableDescription ); // CREATE
  }

  return responce
}

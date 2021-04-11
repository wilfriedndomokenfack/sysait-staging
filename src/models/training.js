import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"

export const trainings = () =>
  Api().get("/courses"); // INDEX

export const sendToTranings = async (training) => {

  let returnData = null
  let message = 'Training course saved con success'
  let color = 'green'
  try{
    let response = await saveTraining(training)
    returnData = true
    //store.dispatch(`setdiary`, true);


    store.dispatch("wilfried/addTraining", { ...response?.data });
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
    returnData = false
  }finally{
    notify(color, message)
  }
  return returnData
}

export const saveTraining = async training => { // CREATE OR UPDATE
  let responce = null
  if(training.id){
    responce = await Api().patch(`/courses/${training.id}`, training ); // UPDATE
  }else{
    responce = await Api().post(`/courses`, training ); // CREATE
  }
  return responce
}

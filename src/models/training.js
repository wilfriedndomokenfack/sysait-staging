import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"

export const trainings = () =>
  Api().get("/courses"); // INDEX

export const deleteDBTraining = (id) =>
  Api().delete("/courses/"+id); // DELETE

export const sendToTranings = async (training) => {

  let returnData = null
  let message = 'Training course saved con success'
  let color = 'green'
  try{
    let response = await saveTraining(training)
    returnData = response?.data
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
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



export const addTraining = async (trainingDatas) => {
  try {
    let response = await Api().post(`/users/${trainingDatas.id}/assign_course`, trainingDatas )
  } catch (error) {
    console.log("error: " + error)
  }
}

export const removeTraining = async (trainingDatas) => {
  try {
    let response = await Api().post(`/users/${trainingDatas.id}/remove_course`, trainingDatas )
    //getRoles();
    console.log(response)
    //store.dispatch("wilfried/setUsers", response.data);
  } catch (error) {
    console.log("error: " + error)
  }
}

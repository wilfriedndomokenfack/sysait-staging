import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store"

export const jobs = () =>
  Api().get("/jobs"); // INDEX

export const deleteDBJob = (id) =>
  Api().delete("/jobs/"+id); // DELETE

export const sendToJobs = async (job) => {

  let returnData = null
  let message = 'Training course saved con success'
  let color = 'green'
  try{
    let response = await saveJob(job)
    returnData = response?.data
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
  }finally{
    notify(color, message)
  }
  return returnData
}

export const saveJob = async job => { // CREATE OR UPDATE
  let responce = null
  if(job.id){
    responce = await Api().patch(`/jobs/${job.id}`, job ); // UPDATE
  }else{
    responce = await Api().post(`/jobs`, job ); // CREATE
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

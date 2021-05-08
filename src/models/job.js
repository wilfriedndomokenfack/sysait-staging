import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"

export const jobs = () =>
  Api().get("/jobs"); // INDEX

export const deleteDBJob = (id) =>
  Api().delete("/jobs/"+id); // DELETE

export const sendToJobs = async (job) => {

  let returnData = null
  let message = 'Job saved con success'
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

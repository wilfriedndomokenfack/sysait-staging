import Api from "@/models/Api";

export const humanComponent = () => Api().get("/human_components") // INDEX

export const saveHumanComponent = async hc => { // CREATE OR UPDATE
  let responce = null
  if(hc.id){
    responce = await Api("base").patch(`/bu_diaries/${hc.id}`, hc ); // UPDATE
  }else{
    responce = await Api("base").post(`/bu_diaries`, hc ); // CREATE
  }
  return responce
}




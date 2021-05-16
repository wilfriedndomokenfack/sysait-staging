import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store";
import router from "@/router";
import { Loading } from 'quasar'


// export const company = () => Api().get("/companies")

export const company = (lang) =>
  Api(lang).get("/companies"); // INDEX

export const getCompany = async (lang) => {
  Loading.show();
  try {
    const response = await company(lang);
    if (response?.data.length === 0) router.push({ name: "notAvailable" });
    return response?.data[0]
    //store.dispatch("wilfried/setCompany", response?.data[0]);
  } catch (err) {
    router.push({ name: "notAvailable" });
  } finally {
    Loading.hide();
  }
}

// export const updateCompany = (company) =>
//     Api().patch("companies/2", company)

export const sendToCompanies = async (company, lang) => {

  let returnData = null
  let message = 'Company saved con success'
  let color = 'green'
  try{
    Loading.show();
    let response = saveCompany(company, lang)
    returnData = response?.data
  }catch(err){
    message = 'ERROR: ' + err
    color = 'red'
  }finally{
    Loading.hide();
    notify(color, message)
  }
  return returnData
}

export const saveCompany = async (company, lang) => { // CREATE OR UPDATE
  let responce = null
  if(company.id){
    responce = await Api(lang).patch(`/companies/${company.id}`, company ); // UPDATE
  }else{
    responce = await Api(lang).post(`/companies`, company ); // CREATE
  }
  return responce
}



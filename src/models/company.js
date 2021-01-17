import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store";

export const company = () =>
  Api().get("/companies/1"); // INDEX

export const updateCompany = (company) => 
    Api().patch("companies/1",company)

export const getCompany = () => {
    let company = null
    try{
        const response = await company()
        if(response?.data?.length > 0) company = { ...response.data[0] }
    }catch(err){
        notify('red', 'get company error! ' + err)
    }
    store.dispatch("setCompany", { ...company} );
}
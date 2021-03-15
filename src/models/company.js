import Api from "@/models/Api";
//import { notify } from "@/models/utils/notifyUser"
import store from "@/store";


// export const company = () => Api().get("/companies")

 export const company = () => {

   let val = Api().get("/companies"); // INDEX

   console.log(val);

   return val
}
export const updateCompany = (company) =>
    Api().patch("companies/2",company)



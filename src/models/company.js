import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store";

export const company = () => {
  alert("dentro contact")

   let val = Api().get("/companies"); // INDEX

   debugger
   return val
}


export const updateCompany = (company) =>
    Api().patch("companies/1",company)



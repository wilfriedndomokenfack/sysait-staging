import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store";

  
// export const company = () => Api().get("/companies") 

 export const services = () => {
   let val = Api().get("/products"); // INDEX
   return val
}  



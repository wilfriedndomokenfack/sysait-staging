import Api from "@/models/Api";
import { notify } from "@/models/utils/notifyUser"
import store from "@/store";

export const humanComponent = () => {

   let val = Api().get("/human_components"); // INDEX

   debugger
   return val
}




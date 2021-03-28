import Api from "@/models/Api";
//import { notify } from "@/models/utils/notifyUser"
import store from "@/store";


// export const company = () => Api().get("/companies")

export const company = () =>
  Api().get("/companies"); // INDEX

export const updateCompany = (company) =>
    Api().patch("companies/2",company)



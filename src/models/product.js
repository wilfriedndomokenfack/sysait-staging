import Api from "@/models/Api";

  
// export const company = () => Api().get("/companies") 

 export const products = () => {
   let val = Api().get("/products", { params: { category: 'product', } }); // INDEX
   // let val = Api().get("/products"); // INDEX
   return val
} 

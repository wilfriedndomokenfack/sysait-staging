import Api from "@/models/Api";

export const partners = () =>
  Api().get("/collaborators", { params: { category: 'partner', } }); // INDEX

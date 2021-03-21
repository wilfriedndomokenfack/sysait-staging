
import actions from "./actions.js";
import mutations from "./mutations";

const services = [
  {
  denomination: 'Artificial Intelligence',
  description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
  image_path: 'Artificial_Intelligence.png'
  },
  {
  denomination: 'Automatic Systems',
  description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
  image_path: 'Automatic_systems.png'
  },
  {
  denomination: 'DataBase',
  description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
  image_path: 'DataBase.png'
  },
  {
  denomination: 'Customized Software',
  description: 'We are innovators, we create solutions and products able to improve the quality of life and work of our customer',
  image_path: 'Customized_software.png'
  }
]

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    services: null,
    products: null,
  },

  getters: {
    services: state => state.services,
    products: state => state.products
  },

};

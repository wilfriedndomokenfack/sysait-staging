// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import messages from 'src/i18n'

// Vue.use(VueI18n)

// const i18n = new VueI18n({
//   locale: 'en-us',
//   fallbackLocale: 'en-us',
//   messages
// })
//import {lang1} from "app"

// console.log(lang1.i18n)
// //let lang2 = this.$q.lang.getLocale() // returns a string
// let lang = null

const env = () => {
 if (process.env.DEPLOY_ENV == "production") {
    return "production";
  } else {
    return "development";
  }
};
let lang = "en"


const EnvironmentSettings = {
  production: {
    //apiHost: `https://api.sysait.com/${lang}api/v1`,
    apiHost: `https://api.sysait.com/${lang}api/v1`,
  },
  development: {
    apiHost: `http://localhost:3001/${lang}/api/v1`
  }

}[env()];

export default {
  ...EnvironmentSettings
};

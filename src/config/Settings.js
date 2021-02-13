
const env = () => {
 if (process.env.DEPLOY_ENV == "production") {
    return "production";
  } else {
    return "development";
  }
};
let lang = this.$i18n.locale
if(lang === "en-us") lang = "en"

const EnvironmentSettings = {
  production: {
    apiHost: `https://api.sysait.com/${lang}api/v1`,
  },
  development: {
    apiHost: `http://localhost:3001/${lang}/api/v1`
  }

}[env()];

export default {
  ...EnvironmentSettings
};

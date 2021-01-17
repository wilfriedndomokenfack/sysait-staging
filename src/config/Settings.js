
const env = () => {
 if (process.env.DEPLOY_ENV == "production") {
    return "production";
  } else {
    return "development";
  }
};

const EnvironmentSettings = {
  production: {
    apiHost: "https://api.sysait.com/api/v1",
    sysaitHost: "https://www.sysait.com",
  },
  development: {
    apiHost: "localhost:3300/api/v1", //"https://api.sysait.test/api/v1",
    sysaitHost: "https://www.sysait.test",
  },
}[env()];

export default {
  ...EnvironmentSettings
};

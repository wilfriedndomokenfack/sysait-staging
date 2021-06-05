const env = () => {
 if (process.env.DEPLOY_ENV == "production") {
    return "production";
  } else {
    return "development";
  }
};

const EnvironmentSettings = {
  production: {
    apiHost: `https://api.sysait.com/`,
  },
  development: {
     apiHost: `http://localhost:3001/`
    //apiHost: `https://sysait-backend-test.herokuapp.com/`
  }

}[env()];

export default {
  ...EnvironmentSettings
};

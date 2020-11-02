let envConfig = require('./env/dev.env');
if (process.env.NODE_ENV === 'production') {
  envConfig = require('./env/prod.env');
}

const root = {
  ...envConfig,
  api: {
    auth: {
      signin: 'auth/sign-in',
      signup: 'auth/sign-up'
    },
    user: {
      info: 'users/me'
    }
  }
}

export default root;

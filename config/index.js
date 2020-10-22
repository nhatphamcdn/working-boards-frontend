let envConfig = require('./env/dev.env');
if (process.env.NODE_ENV === 'production') {
  envConfig = require('./env/prod.env');
}

const root = {
  ...envConfig
}

export default root;

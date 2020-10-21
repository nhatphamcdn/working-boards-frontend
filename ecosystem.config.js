module.exports = {
  apps: [
    {
      'name': 'working-boards-frontend',
      'exec_mode': 'cluster',
      'instances': '1', // Or a number of instances
      'script': './node_modules/nuxt/bin/nuxt.js',
      'args': 'start'
    },
  ]
};
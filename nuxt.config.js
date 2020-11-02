export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Working boards',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/autoload.scss',
    '@/assets/scss/base.scss',
  ],
  router: {},

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/inject',
    '~/plugins/axios',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3030/api',
    withCredentials: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

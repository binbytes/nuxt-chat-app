require('dotenv').config()

module.exports = {
  mode: 'spa',
  /*
  ** Build
  */
  build: {
    vendor: ['socket.io-client']
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'BinBytes - Chat App',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    [
      '@nuxtjs/pwa', { workbox: false }
    ],
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/socket.io.js',
    '~/plugins/vuebar.js',
    '~/plugins/filters.js',
    '~/plugins/vueValidate.js'
  ],
  /*
  ** Auth settings
  */
  auth: {
    resetOnError: true,
    rewriteRedirects: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/users/me', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: '',
      }
    },
    plugins: [ '~/plugins/auth.js' ]
  },
  /*
  ** Axios settings
  */
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3002/api'
  }
}

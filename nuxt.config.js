module.exports = {
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
    './node_modules/milligram/dist/milligram.min.css'
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
    ['@nuxtjs/pwa', { workbox: false }],
    '@nuxtjs/axios'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/auth.js',
    '~/plugins/socket.io.js'
  ],
  /*
  ** Axios settings
  */
  axios: {
    baseURL: process.env.API_BASE_URL || `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3002}/api/`,
    requestInterceptor: (config, { store }) => {
      if (store.state.auth.token) {
        config.headers.common['Authorization'] = store.state.auth.token
      }
      return config
    }
  },
  env: {
    HOST_URL: process.env.SOCKET_HOST_URL || `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3002}`
  }
}

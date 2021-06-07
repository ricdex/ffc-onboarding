export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ff-onboarding',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' },
  { src: '~/plugins/server.js' , mode: 'client'}
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha'
 
  ],

  axios: {
      proxy: true
  },


  proxy: {

    '/empresa/': {
      target: process.env.BASE_URL
    },
    '/inversionista/': {
      target: process.env.BASE_URL
    },
    '/usuario/': {
      target: process.env.BASE_URL
    },
    // Proxies /foo to http://example.com/foo
      
    
    
  },
  recaptcha: {
    /* reCAPTCHA options */
      siteKey: '6LeV1hUbAAAAAOgjnRUoF1ZQ6YRW4iaXPelGPjwd',
      version: 3,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


  server: {
    //host: '0' // default: localhost
  },
  
  
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3001'
  }
}

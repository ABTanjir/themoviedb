export default {
  axios: {
    baseURL: process.env.THEMOVIEDB_API
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'setschedule',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // env variables
  env: {
    themoviedb_api: process.env.THEMOVIEDB_API,
    themoviedb_key: process.env.THEMOVIEDB_KEY,
    themoviedb_img_path: process.env.THEMOVIEDB_IMAGE
  }


}

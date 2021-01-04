export default {
  mode: 'universal',
  srcDir: 'App/',

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  // because Nuxt.js doesn’t have a default index.html
  head: {
    title: 'nuxt-basic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vuex-persist',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Nuxt.js dev-modules, Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Nuxt.js Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true,
  },
  proxy: {
    '/prefix-url': '/api',
  },

  // Build Configuration. You can extend webpack config here (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {},
  },
}

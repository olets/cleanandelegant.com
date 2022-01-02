export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // https://nuxtjs.org/docs/configuration-glossary/configuration-env/
  env: {
    airtableApiKey: process.env.AIRTABLE_API_KEY,
    airtableBase: process.env.AIRTABLE_BASE,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Henry Bley-Vroman, experienced front-end developer',
    htmlAttrs: {
      lang: 'en',
      class: 'text-[14px] md:text-[16px]',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Henry Bley-Vroman online resume' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CYXOSZDQ',
        'data-spa': 'auto',
        defer: true,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  googleFonts: {
    display: 'swap',
    families: {
      'Alegreya+Sans+SC': [800],
      Lato: [400, 700],
      'Material+Icons': true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://cleanandelegant.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Zack Cuddy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!' },
      { hid: 'og:image', name: 'og:image', content: `/images/me.png`},
      { hid: 'og:title', name: 'og:title', content: 'Zack Cuddy'},
      { hid: 'og:url', name: 'og:url', content: 'https://zack-cuddy.com'},
      { hid: 'og:site_name', name: 'og:site_name', content: 'Zack Cuddy'},
      { hid: 'og:description', name: 'og:description', content: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!'},
      { hid: 'twitter:image', name: 'twitter:image', content: '/images/me.png'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Zack Cuddy'},
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://zack-cuddy.com'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'Zack Cuddy - Developer.  Bringing VueJS Apps to a site near you!'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css', integrity: 'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt', crossorigin: 'anonymous'}
    ],
    script: [
      { src: 'https://www.paypalobjects.com/api/checkout.js'}
    ]
  },
  css: [
    { src: '@/assets/styles/app.scss', lang: 'scss' }
  ],
  plugins: [
    '@/plugins/VueMaterial.js'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-123361165-1'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['@nuxtjs/google-analytics', 'vue-material'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


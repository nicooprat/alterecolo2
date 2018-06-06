module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'alterecolo2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AlterÉcolo' }
    ],
    link: [
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00ce41' },
  /*
  ** Build configuration
  */
  build: {
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
  },
  plugins: [
    { src: '~plugins/persisted-state.js', ssr: false },
    { src: '~plugins/errors.js', ssr: false },
    { src: '~plugins/fuse.js', ssr: false },
    { src: '~plugins/analytics.js', ssr: false },
    { src: '~plugins/router-sync.js' },
  ],
  modules: [
    '@nuxtjs/dotenv',
  ]
}

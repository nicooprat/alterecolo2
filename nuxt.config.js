const Airtable = require('airtable')
const slugify = require('slugify')

module.exports = {
  head: {
    title: 'AlterÉcolo',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'AlterÉcolo' },
      { hid: 'og:description', property: 'og:description', content: 'Alternatives écologiques et durables aux objets et habitudes du quotidien' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.alterecolo.fr' },
      { hid: 'og:image', property: 'og:image', content: '/logo.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'AlterÉcolo' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Alternatives écologiques et durables aux objets et habitudes du quotidien' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/logo.png' },
    ],
    link: [
    ]
  },
  loading: false,
  build: {
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
    { src: '~plugins/nuxt-client-init.js', ssr: false },
    { src: '~plugins/persisted-state.js', ssr: false },
    { src: '~plugins/errors.js', ssr: false },
    { src: '~plugins/fuse.js', ssr: false },
    { src: '~plugins/analytics.js', ssr: false },
    { src: '~plugins/router-sync.js' },
    { src: '~plugins/disqus.js' },
  ],
  modules: [
    '@nuxtjs/dotenv',
  ],
}

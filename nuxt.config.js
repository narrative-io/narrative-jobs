import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  }
  // https://nuxtjs.org/docs/2.x/deployment/github-pages/
  // target: 'static',
  // router: {
  //   base: '/narrative-jobs/'
  // }
})

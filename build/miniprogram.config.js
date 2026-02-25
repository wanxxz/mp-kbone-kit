/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
  origin: 'https://miniprogram.default',
  entry: '/',
  router: {
    home: ['/index']
  },
  redirect: {
    notFound: 'home',
    accessDenied: 'home'
  },
  generate: {
    autoBuildNpm: 'npm'
  },
  app: {
    navigationBarTitleText: ''
  },
  appExtraConfig: {
    sitemapLocation: 'sitemap.json'
  },
  global: {},
  pages: {},
  optimization: {
    domSubTreeLevel: 10,

    elementMultiplexing: true,
    textMultiplexing: true,
    commentMultiplexing: true,
    domExtendMultiplexing: true,

    styleValueReduce: 5000,
    attrValueReduce: 5000
  },
  projectConfig: {
    projectname: 'mp-kbone-kit',
    appid: ''
  }
}

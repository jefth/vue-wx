// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'buy/static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  devServer: {
    port: 8080,
    host: 'localhost',
    https: false
  },
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: config => {
    config.externals = {
      'echarts': 'echarts',
      'ant-design-vue': 'ant-design-vue'
    }
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          }
        },
        sourceMap: false,
        parallel: true
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 5120,
        minRatio: 0.8
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}

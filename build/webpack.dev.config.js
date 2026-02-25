const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder')

const htmlPluginList = Object.keys(baseWebpackConfig.entry).map(name => {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: 'index.html',
    inject: true,
    chunks: [name]
  })
})

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: '/index.html' }]
    },
    hot: true,
    compress: true,
    static: {
      publicPath: '/'
    }
  },
  watchOptions: {
    poll: false
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...htmlPluginList
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port

      resolve(devWebpackConfig)
    }
  })
})

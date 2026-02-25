const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MpPlugin = require('mp-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/pages/index.tsx')
  },
  output: {
    // 放到小程序代码目录中的 common 目录下
    path: path.resolve(__dirname, '../dist/mp/common'),
    // 必需字段 不能修改
    filename: '[name].js',
    // 必需字段 不能修改
    library: 'createApp',
    // 必需字段 不能修改
    libraryExport: 'default',
    // 必需字段 不能修改
    libraryTarget: 'window'
  },
  // 必需字段 不能修改
  target: 'web',
  optimization: {
    // 必需字段 不能修改
    runtimeChunk: false,
    // 代码分隔配置 不建议修改
    splitChunks: {
      chunks: 'all',
      minSize: 1000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 100,
      maxInitialRequests: 100,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.[t|j]sx?$/,
        use: ['babel-loader', '@wyw-in-js/webpack-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.isMiniprogram': process.env.isMiniprogram // 注入环境变量 用于业务代码判断
    }),
    new MiniCssExtractPlugin({
      filename: '[name].wxss'
    }),
    new MpPlugin(require('./miniprogram.config'))
  ]
}

const path = require('path')
const webpack = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'stellar-js-utils',
    libraryTarget: 'umd'
  },
  externals: [
    "jquery",
    "stellar-sdk",
    "axios"
  ],
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
        enforce: 'pre',
        test: /.(vue|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            fix: true
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      }
    ]
  }
}
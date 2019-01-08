const path = require('path')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    "jquery", "stellar-sdk", "axios", "vue", "vuetify"
  ],
  // added to kill all comments, remove if you don't care (16k smaller too)
  optimization: {
    minimizer: [new TerserPlugin({
        terserOptions: {
          cache: true,
          parallel: true,
          output: {
            comments: false,
            semicolons: false
          }
        }
      })]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(vue|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            fix: true
          }
        }
      }, {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      }, {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }, {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}

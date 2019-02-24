const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
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
    "stellar-sdk", "axios"
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
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "eslint-loader",
        options: {
          fix: true
        }
      }
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: /node_modules/
    }]
  }
}
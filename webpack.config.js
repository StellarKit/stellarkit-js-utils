const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    library: 'stellar-js-utils',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
        enforce: 'pre',
        test: /.(vue|js)$/,
        use: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
}

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    libraryTarget: 'umd'
  },
  externals: {
    // without this, we'll get two copies of jquery and triggers will fail
    jquery: 'jquery',
    'stellar-sdk': 'stellar-sdk'
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /.(vue|js)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        passes: 2
      },
      output: {
        comments: false
      }
    })
  ]
}

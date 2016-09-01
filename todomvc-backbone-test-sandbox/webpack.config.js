var resolve = require('path').resolve;

module.exports = {
  context: resolve(__dirname, 'js'),
  entry: "./main",
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader',
        exclude: /node_modules/,
        query: {
          engine: 'lodash',
        }
      }
    ]
  }
 
};
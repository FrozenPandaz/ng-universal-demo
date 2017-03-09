const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const helpers = require('./helpers');
/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: '@ngtools/webpack',
      },
      {
        test: /\.html$/,
        use: 'hraw-loader'
      },
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'),
      {}
    )
  ]
};

const webpack = require('webpack');

/**
 * This is a prod config to be merged with the Client config
 */
module.exports = {
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true,
        screw_ie8 : true
      },
      compress: {
        warnings : false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
};

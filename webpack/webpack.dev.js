const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

const { entry, dist, devPort, sourceMapType, outputFileName, htmlTemplateFile, htmlTemplateTitle } = require('../variables/webpack');

module.exports = Merge(CommonConfig, {
  devtool: sourceMapType,
  entry: {
    app: ['react-hot-loader/patch', entry],
  },
  output: {
    sourceMapFilename: outputFileName + '.map'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '.' + dist),
    port: devPort,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/',
    // proxy: {
    //   "**": "http://localhost:5000"
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: htmlTemplateTitle,
      template: htmlTemplateFile
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});

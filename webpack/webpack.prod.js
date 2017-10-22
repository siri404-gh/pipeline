const webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

const { htmlTemplateFile, firebase: { htmlTemplateTitle } } = require('../variables/webpack');

module.exports = Merge(CommonConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      title: htmlTemplateTitle,
      template: htmlTemplateFile
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false,
    })
  ]
});

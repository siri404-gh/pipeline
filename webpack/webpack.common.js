const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const { entry, dist, karma_coverage_dir, prod, logs, outputFileName, resolveExtensions } = require('../variables/webpack');

module.exports = {
  entry: { app: entry },
  output: {
    path: path.resolve(__dirname, '.' + dist),
    filename: outputFileName,
    publicPath: '/',
  },
  resolve: {
    extensions: resolveExtensions,
    modules: [path.join(__dirname, 'components'), 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin([dist, prod, karma_coverage_dir, logs])
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  stats: {
    warnings: false
  },
  plugins: [
    new ManifestPlugin({
      fileName: '.manifest.json',
    })
  ]
};
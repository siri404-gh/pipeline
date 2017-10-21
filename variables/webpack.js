module.exports = {
  entry: './index.js',
  dist: './.dist',
  prod: './.prod',
  bundle: 'bundle.js',
  devPort: 4000,
  karma_coverage_dir: '.coverage/',
  logs: './*.log',
  outputFileName: '[name].bundle.js',
  resolveExtensions: ['.js', '.json', '.jsx'],
  sourceMapType: 'inline-source-map',
  htmlTemplateTitle: 'Development',
  htmlTemplateFile: 'index.ejs',
  firebase: {
    htmlTemplateTitle: 'Firebase Title',
  }
};

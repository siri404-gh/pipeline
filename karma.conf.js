var webpackConfig = require('./webpack/webpack.dev');
var { karma_files, karma_preprocessors, karma_coverage_reporters, karma_coverage_dir, karma_browsers } = require('./variables/karma');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: karma_files,
    preprocessors: {
      './**/*.test.js': karma_preprocessors
    },
    webpack: webpackConfig,
    reporters: karma_coverage_reporters,
    coverageReporter: {
      reporters: [
        { type: 'lcov', subdir: '.' },
        // { type: 'json', subdir: '.' },
        // { type: 'html', subdir: '.' },
        { type: 'text-summary' },
      ],
      type: 'html',
      dir: karma_coverage_dir
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: karma_browsers,
    singleRun: true,
    concurrency: Infinity,
    webpackMiddleware: {
      noInfo: true
    },
  });
};
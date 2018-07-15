// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'fixture'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-fixture',
      'karma-html2js-preprocessor',
      'karma-webpack'
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    files: [
      'src/app/**/*.js',
      'src/spec/fixtures/*.fixture.html',
      'karma-fixture.conf.js'
    ],
    preprocessors: {
      'src/spec/fixtures/*.fixture.html': ['html2js'],
      'src/app/**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Chrome_without_security'],
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security', '--no-sandbox']
      }
    },
    concurrency: Infinity
  });
};

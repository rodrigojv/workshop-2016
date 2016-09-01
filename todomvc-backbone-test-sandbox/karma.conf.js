module.exports = function(config) {
  config.set({
    
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai', 'browserify'],

    files: [
      'js/**/*.test.js' // donde están nuestros test suites
    ],
	
	  // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'jstify' ] // para templates transformados a JS
    },
	
    // Con esto procesamos los módulos importados con require('module') y generamos un bundle
	  preprocessors: {
	    'js/**/*.test.js': ['browserify'] 
    },

    
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    reporters: ['spec']
  });
};
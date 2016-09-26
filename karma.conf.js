module.exports = function (config) {
    'use strict';

    var deps = (require('wiredep')({dependencies: true, devDependencies: true})).js;
    var files = ['src/**/*.js'];
    Array.prototype.unshift.apply(files, deps);

    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['Chrome'/*,'Firefox','IE'*/],
        logLevel: config.LOG_INFO,// LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        port: 9876,
        reporters: ['progress'],
        singleRun: true,

        files: files,
        exclude: [],
        preprocessors: {
            'src/**/*.js': ['babel'],
        }
    });
};
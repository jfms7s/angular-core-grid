module.exports = {
    unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['Firefox'],
        reporters: ['coverage', 'progress'],
        preprocessors: {
            'src/**/!(*spec).js': ['coverage'],
        },
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {type: 'html'},
                {type: 'lcov'}
            ]
        }
    }
};
module.exports = function(config) {
    config.set({
        basePath: '..',
        frameworks: ['jasmine'],
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular.min.js',
            'https://code.angularjs.org/1.2.22/angular-route.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.22/angular-mocks.js',
            {pattern: 'scripts/**/*.js', watched: true},
            {pattern: 'test/spec/**/*.js', watched: true}
        ],
        exclude: [],
        reporters: ['progress'],
        port: 8000,
        runnerPort: 9100,
        colors: true,
        logLevel: 'INFO',
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 5000,
        singleRun: false
    });
};
module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['scripts/**/*.js'],
                dest: 'bundle.js'
            }
        },
        connect: {
            options: {
                hostname: '0.0.0.0'
            },
            server: {
                options: {
                    port: 9000,
                    // hostname: '*',
                    // protocol: 'https',
                    livereload: true,
                    base: '.',
                    open: {
                        url: 'https://localhost:9000',
                        app: 'chrome'
                    },
                    middleware: function(connect, options, defaultMiddleware) {
                        return [
                            require('http-mock')({
                                '/api/something': 'api/something/main.js',

                                '@verbosity': 0,
                                '@delay': [500, 1000]
                            }),
                            require('grunt-connect-proxy/lib/utils').proxyRequest
                            // require('connect-livereload')()
                        ].concat(defaultMiddleware);
                    }
                },
                proxies: [
                    {
                        context: '/api',
                        host: 'platform-staging.reelcontent.com',
                        port: 443,
                        https: true,
                        protocol: 'https:',
                        changeOrigin: true,
                        headers: {
                            origin: 'https://platform-staging.reelcontent.com',
                            host: 'platform-staging.reelcontent.com'
                        }
                    }
                ]
            }
        },
        watch: {
            dev: {
                options: {
                    livereload: true,
                },
                files: ['scripts/**/*.js', 'views/**/*.html', 'index.html'],
                tasks: ['concat']
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            all: [
                'scripts/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('start', 'start dev server', [
        'concat',
        'configureProxies:server',
        'connect:server',
        'watch:dev'
    ]);

    grunt.registerTask('test', 'start dev server', [
        'jshint',
        'karma:unit'
    ]);
};
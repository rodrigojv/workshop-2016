module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        usebanner: 'grunt-banner'
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jscs: {
            src: [
                'spec/**/*.js',
            ],
            options: {
                config: '.jscsrc'
            }
        },

        jshint: {
            options: {
                jshintrc: true
            },
            files: ['spec/*.js']
        },

        jasmine: {
            suite: {
                //src: 'node_modules/medium-editor-insert-plugin/dist/js/*.js',
                options: {
                    specs: ['spec/*.spec.js'],
                    helpers: 'spec/helpers/*.js',
                    vendor: [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/medium-editor/dist/js/medium-editor.min.js',
                        'node_modules/handlebars/handlebars.runtime.min.js',
                        'node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
                        'node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
                        'node_modules/blueimp-file-upload/js/jquery.fileupload.js',
                        'node_modules/jquery-sortable/source/js/jquery-sortable-min.js',
                        'node_modules/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js'
                    ],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'reports/jasmine/coverage.json',
                        report: [{
                            type: 'lcov',
                            options: {
                                dir: 'reports/jasmine/lcov'
                            }
                        }]
                    },
                    summary: true
                }
            }
        }
    });

    grunt.registerTask('test', ['jscs', 'jshint', 'jasmine']);
};

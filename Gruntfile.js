module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assets/js/main.js',
                dest: 'dist/js/main.min.js'
            }
        },
        jshint: {
            options: {
                browser: true,
                globals: {
                    jQuery: false
                }
            },
            all: {
                files: {
                    // src: ['assets/js/*.js']
                }
            }
        },
        concat: {
            options: {
            },
            dist: {
                src: [
                    'assets/js/main.js'
                ],
                dest: 'assets/js/main.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/less/*.less'],
                    yuicompress: false
                },
                files: {
                    'assets/less/source.css':'assets/less/*.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'dist/css/main.min.css': ['assets/less/source.css']
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "assets/less/**/*.less"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        imagemin: {
            static: {
                options: {
                    progrressive: true
                },
                files: [{
                    expand:true,
                    src: ['assets/img/*.{png,jpg,gif,PNG,JPG,GIF}'],
                    dest: 'dist'
                }]
            }
        },
        watch: {
            less: {
                files: 'assets/less/*.less',
                tasks: ['less','cssmin'],
                options: {
                    livereload: true
                }
            },
            imagemin: {
                files: ['assets/img/**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                tasks: ['imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync','jshint','concat','uglify','less','cssmin','watch','imagemin']);

};


module.exports = function(grunt){

    // var config = {
    //     name: 'codingbro'
    // };

    grunt.initConfig({
        jshint: {
            files: ['gruntfile.js', 'text/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        concat: {
            options: {
                separator: ';\n/* ----------------------------------------------- */\n'
            },
            dist: {
                src: ['app/scripts/*js'],
                dest: 'dist/concatApp.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! codingbro <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            },
            dist: {
                files: {
                    'build/ug.js': 'app/scripts/*js'
                }
            },
            concat: {
                files: {
                    src: ['app/scripts/*js'],
                    dest: 'dist/concatApp.min.js'
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
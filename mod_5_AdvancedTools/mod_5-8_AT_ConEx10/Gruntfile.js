module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['src/*.less'],
                },
                files: {
                    'dist/styles.css': 'src/styles.less'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles.min.css': ['dist/styles.css']
                }
            }
        },
        clean: ['dist/styles.css', 'dist/*.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default');
};